import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function EarthRocket3D() {
  const containerRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const earthRef = useRef(null);
  const rocketRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Setup scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Setup camera
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    // Create Earth
    const earthGeometry = new THREE.SphereGeometry(1, 32, 32);
    const earthMaterial = new THREE.MeshPhongMaterial({
      color: 0x2233ff,
      emissive: 0x112244,
      specular: 0x333333,
      shininess: 25,
    });
    const earth = new THREE.Mesh(earthGeometry, earthMaterial);
    scene.add(earth);
    earthRef.current = earth;

    // Add continents to Earth (simple green patches)
    const continentGeometry = new THREE.SphereGeometry(1.01, 32, 32);
    const continentMaterial = new THREE.MeshPhongMaterial({
      color: 0x00aa00,
      emissive: 0x004400,
      transparent: true,
      opacity: 0.8,
    });
    const continents = new THREE.Mesh(continentGeometry, continentMaterial);
    earth.add(continents);

    // Create simple rocket
    const rocketGroup = new THREE.Group();
    
    // Rocket body (cone)
    const bodyGeometry = new THREE.ConeGeometry(0.1, 0.4, 8);
    const bodyMaterial = new THREE.MeshPhongMaterial({
      color: 0xe3b037, // Color amarillo de CONEDU
      emissive: 0x8b6914,
      specular: 0xffffff,
      shininess: 30,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.x = Math.PI;
    rocketGroup.add(body);

    // Rocket fins
    const finGeometry = new THREE.ConeGeometry(0.08, 0.15, 3);
    const finMaterial = new THREE.MeshPhongMaterial({
      color: 0x4f1675, // Color morado de CONEDU
      emissive: 0x2a0c3e,
    });
    
    for (let i = 0; i < 3; i++) {
      const fin = new THREE.Mesh(finGeometry, finMaterial);
      fin.rotation.x = Math.PI;
      fin.position.y = -0.15;
      fin.rotation.z = (i * Math.PI * 2) / 3;
      fin.position.x = Math.cos((i * Math.PI * 2) / 3) * 0.12;
      fin.position.z = Math.sin((i * Math.PI * 2) / 3) * 0.12;
      rocketGroup.add(fin);
    }

    // Rocket window
    const windowGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const windowMaterial = new THREE.MeshPhongMaterial({
      color: 0x88ccff,
      emissive: 0x4488cc,
      transparent: true,
      opacity: 0.9,
    });
    const rocketWindow = new THREE.Mesh(windowGeometry, windowMaterial);
    rocketWindow.position.y = 0.05;
    rocketGroup.add(rocketWindow);

    // Position rocket in orbit
    rocketGroup.position.set(2, 0, 0);
    scene.add(rocketGroup);
    rocketRef.current = rocketGroup;

    // Add stars
    const starsGeometry = new THREE.BufferGeometry();
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });

    const starsVertices = [];
    for (let i = 0; i < 500; i++) {
      const x = (Math.random() - 0.5) * 20;
      const y = (Math.random() - 0.5) * 20;
      const z = (Math.random() - 0.5) * 20;
      starsVertices.push(x, y, z);
    }

    starsGeometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(starsVertices, 3)
    );

    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    // Animation
    let angle = 0;
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      // Rotate Earth
      if (earthRef.current) {
        earthRef.current.rotation.y += 0.002;
      }

      // Orbit rocket around Earth
      if (rocketRef.current) {
        angle += 0.01;
        const radius = 2;
        rocketRef.current.position.x = Math.cos(angle) * radius;
        rocketRef.current.position.z = Math.sin(angle) * radius;
        rocketRef.current.position.y = Math.sin(angle * 2) * 0.3;
        
        // Make rocket face direction of movement
        rocketRef.current.rotation.y = -angle + Math.PI / 2;
        rocketRef.current.rotation.z = Math.sin(angle * 2) * 0.2;
      }

      // Slow rotation of stars
      stars.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }

      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }

      if (rendererRef.current) {
        rendererRef.current.dispose();
      }

      // Dispose geometries and materials
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          if (object.geometry) {
            object.geometry.dispose();
          }
          if (object.material) {
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            } else {
              object.material.dispose();
            }
          }
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[400px] rounded-3xl overflow-hidden"
      style={{ background: 'transparent' }}
    />
  );
}