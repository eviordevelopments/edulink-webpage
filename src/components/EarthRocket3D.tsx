import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function EarthRocket3D() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const animationIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 6;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      logarithmicDepthBuffer: true // Helps with overlapping geometry
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.2);
    mainLight.position.set(5, 5, 5);
    scene.add(mainLight);

    const blueLight = new THREE.PointLight(0x4f1675, 2, 10);
    blueLight.position.set(-5, -2, -2);
    scene.add(blueLight);

    const goldLight = new THREE.PointLight(0xe3b037, 1, 10);
    goldLight.position.set(2, 4, -2);
    scene.add(goldLight);

    // --- Earth Group ---
    const earthGroup = new THREE.Group();
    scene.add(earthGroup);

    // Create a Procedural Earth Texture using Canvas (Hyper-Realistic Attempt)
    const createEarthTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 2048;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // 1. Deep Ocean Base with subtle gradients
      const oceanGradiant = ctx.createRadialGradient(512, 512, 100, 512, 512, 800);
      oceanGradiant.addColorStop(0, '#0f172a'); // Deepest
      oceanGradiant.addColorStop(1, '#1e3a8a'); // Coastals
      ctx.fillStyle = oceanGradiant;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // 2. Draw North America (Rough detail)
      ctx.fillStyle = '#2d5a27'; // Forest Green

      // North America Main Body
      ctx.beginPath();
      ctx.moveTo(350, 100);
      ctx.bezierCurveTo(200, 150, 150, 300, 300, 450); // West Coast
      ctx.lineTo(400, 480); // Central
      ctx.bezierCurveTo(550, 400, 600, 200, 450, 100); // East Coast
      ctx.closePath();
      ctx.fill();

      // South America
      ctx.beginPath();
      ctx.moveTo(400, 480);
      ctx.bezierCurveTo(350, 550, 380, 750, 450, 900); // West
      ctx.bezierCurveTo(550, 850, 600, 650, 500, 480); // East
      ctx.closePath();
      ctx.fill();

      // Eurasia / Africa
      ctx.beginPath();
      ctx.moveTo(1100, 150);
      ctx.lineTo(1800, 100);
      ctx.lineTo(1900, 400);
      ctx.lineTo(1500, 350);
      ctx.bezierCurveTo(1400, 600, 1200, 800, 1150, 500);
      ctx.fill();

      // 3. Terrain Detail Layer (Browns / Sands)
      ctx.globalAlpha = 0.4;
      ctx.fillStyle = '#8b4513'; // Saddle Brown for mountains
      // Draw mountain ranges in Americas
      ctx.fillRect(280, 150, 20, 250); // Rockies
      ctx.fillRect(380, 550, 30, 250); // Andes

      ctx.fillStyle = '#c2b280'; // Sand for deserts
      ctx.fillRect(300, 350, 50, 50); // Mexico/SW US
      ctx.globalAlpha = 1.0;

      // 4. Coastline "glow" / shallow water
      ctx.strokeStyle = '#3b82f6';
      ctx.lineWidth = 4;
      ctx.stroke();

      // 5. Add organic noise / variations
      for (let i = 0; i < 2000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const pixel = ctx.getImageData(x, y, 1, 1).data;
        if (pixel[1] > 50) { // If on land
          ctx.fillStyle = `rgba(${70 + Math.random() * 50}, ${120 + Math.random() * 50}, 40, ${0.1 + Math.random() * 0.2})`;
          ctx.beginPath();
          ctx.arc(x, y, 2 + Math.random() * 10, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      return new THREE.CanvasTexture(canvas);
    };

    const earthTex = createEarthTexture();

    // Core Earth Mesh
    const earthGeometry = new THREE.SphereGeometry(1.5, 64, 64);
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthTex,
      roughness: 0.8,
      metalness: 0.1,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    earthGroup.add(earth);

    // Clouds Layer (more subtle to match the image's clean look)
    const cloudGeometry = new THREE.SphereGeometry(1.52, 64, 64);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      transparent: true,
      opacity: 0.2,
      blending: THREE.AdditiveBlending,
    });
    const clouds = new THREE.Mesh(cloudGeometry, cloudMaterial);
    earthGroup.add(clouds);

    // Subtle Atmosphere Bloom
    const atmosphereGeo = new THREE.SphereGeometry(1.55, 64, 64);
    const atmosphereMat = new THREE.MeshBasicMaterial({
      color: 0x4299e1,
      transparent: true,
      opacity: 0.05,
      side: THREE.BackSide
    });
    earthGroup.add(new THREE.Mesh(atmosphereGeo, atmosphereMat));

    // --- Advanced Rocket ---
    const rocket = new THREE.Group();

    // Body - Main Hull
    const hullGeo = new THREE.CylinderGeometry(0.1, 0.15, 0.6, 12);
    const hullMat = new THREE.MeshPhongMaterial({
      color: 0xffffff,
      specular: 0xffffff,
      shininess: 100
    });
    const hull = new THREE.Mesh(hullGeo, hullMat);
    rocket.add(hull);

    // Nose Cone
    const noseGeo = new THREE.ConeGeometry(0.1, 0.25, 12);
    const noseMat = new THREE.MeshPhongMaterial({ color: 0xe3b037 }); // Gold
    const nose = new THREE.Mesh(noseGeo, noseMat);
    nose.position.y = 0.42;
    rocket.add(nose);

    // Engine Block
    const engineGeo = new THREE.CylinderGeometry(0.12, 0.08, 0.15, 12);
    const engineMat = new THREE.MeshPhongMaterial({ color: 0x333333 });
    const engine = new THREE.Mesh(engineGeo, engineMat);
    engine.position.y = -0.35;
    rocket.add(engine);

    // Fins (4 stylized fins)
    const finShape = new THREE.BoxGeometry(0.02, 0.25, 0.15);
    const finMat = new THREE.MeshPhongMaterial({ color: 0x4f1675 }); // Purple
    for (let i = 0; i < 4; i++) {
      const fin = new THREE.Mesh(finShape, finMat);
      fin.position.y = -0.3;
      fin.rotation.y = (i * Math.PI) / 2;
      fin.position.x = Math.cos((i * Math.PI) / 2) * 0.15;
      fin.position.z = Math.sin((i * Math.PI) / 2) * 0.15;
      rocket.add(fin);
    }

    // Engine Glow / Fire
    const glowGeo = new THREE.ConeGeometry(0.08, 0.4, 8);
    const glowMat = new THREE.MeshBasicMaterial({
      color: 0xe3b037,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending
    });
    const glow = new THREE.Mesh(glowGeo, glowMat);
    glow.position.y = -0.6;
    glow.rotation.x = Math.PI;
    rocket.add(glow);

    rocket.scale.set(0.6, 0.6, 0.6);
    scene.add(rocket);

    // --- Floating Satellites ---
    const satellites: { mesh: THREE.Group, radius: number, speed: number, offset: number }[] = [];
    const createSatellite = (color: number, radius: number, speed: number, offset: number) => {
      const satGroup = new THREE.Group();
      const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.05, 0.05, 0.05),
        new THREE.MeshPhongMaterial({ color: color })
      );
      const wings = new THREE.Mesh(
        new THREE.BoxGeometry(0.2, 0.01, 0.08),
        new THREE.MeshPhongMaterial({ color: 0x88ccff })
      );
      satGroup.add(body);
      satGroup.add(wings);
      scene.add(satGroup);
      return { mesh: satGroup, radius, speed, offset };
    };

    satellites.push(createSatellite(0xffffff, 2.8, 0.007, 0));
    satellites.push(createSatellite(0xe3b037, 3.2, -0.005, Math.PI));

    // --- Stars ---
    const starsGeo = new THREE.BufferGeometry();
    const starCount = 1500;
    const posArray = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 30;
    }
    starsGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const starsMat = new THREE.PointsMaterial({ size: 0.015, color: 0xffffff, transparent: true, opacity: 0.6 });
    const stars = new THREE.Points(starsGeo, starsMat);
    scene.add(stars);

    // --- Animation Loop ---
    let time = 0;
    const animate = () => {
      time += 0.02; // SPEED INCREASED FOR ROCKET (from 0.01 to 0.02)
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate Earth (slow and steady)
      earth.rotation.y += 0.003;
      clouds.rotation.y += 0.005;

      // Orbit Rocket (FAST MOVEMENT)
      const orbitRadius = 2.6;
      rocket.position.x = Math.cos(time * 0.8) * orbitRadius;
      rocket.position.z = Math.sin(time * 0.8) * orbitRadius;
      rocket.position.y = Math.sin(time * 0.4) * 0.6;

      // Rocket orientation (dynamic pitch and roll)
      rocket.rotation.y = -time * 0.8 + Math.PI;
      rocket.rotation.z = Math.sin(time * 0.4) * 0.4;
      rocket.rotation.x = -Math.cos(time * 0.4) * 0.2;

      // Pulse engine glow
      glow.scale.y = 0.9 + Math.random() * 0.5;

      // Animate Satellites
      satellites.forEach(s => {
        const t = time * 0.3 + s.offset;
        s.mesh.position.x = Math.cos(t) * s.radius;
        s.mesh.position.z = Math.sin(t) * s.radius;
        s.mesh.position.y = Math.cos(t * 0.7) * 1.8;
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!containerRef.current) return;
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- Cleanup ---
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationIdRef.current) cancelAnimationFrame(animationIdRef.current);
      if (rendererRef.current && containerRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
        rendererRef.current.dispose();
      }

      // Cleanup geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh || object instanceof THREE.Points) {
          object.geometry.dispose();
          if (Array.isArray(object.material)) {
            object.material.forEach(m => m.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-full min-h-[450px] lg:min-h-[550px] relative z-10"
      style={{ perspective: '1000px' }}
    />
  );
}