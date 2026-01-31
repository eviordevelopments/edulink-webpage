import React from "react";
import { motion } from "framer-motion";

const logos = [
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/b169abe2b_emprendimiento-tec-de-monterrey.png",
    alt: "Emprendimiento Tec de Monterrey"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/e69c73ffc_images-7-removebg-preview-2.png",
    alt: "Instituto de Emprendimiento"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/a6faaa992_images-7-removebg-preview.png",
    alt: "CIMAT"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/3d08fd1d4_images-8-removebg-preview.png",
    alt: "Cinvestav"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/e75bd6744_images-9-removebg-preview.png",
    alt: "EmprendHEC"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/e2ec62719_images-10-removebg-preview.png",
    alt: "IMEF Universitario"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/11c678ea4_images-11-removebg-preview.png",
    alt: "Hecho en México"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/232d62369_images-12-removebg-preview.png",
    alt: "BIV"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/e9148f4a6_images-13-removebg-preview.png",
    alt: "Microsoft for Startups"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/ba5fb1c76_imef_nal_transparente-1-removebg-preview.png",
    alt: "IMEF Nacional"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/8bc5317f6_LOGO_1-e1734628417889-1024x332.png",
    alt: "Fundación ProEmpleo"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/6e939f892_MIT_Solve.png",
    alt: "MIT Solve"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/c16e0b391_Screen-Shot-2021-01-15-at-94545-AM-1024x200.png",
    alt: "MIT PKG"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/8756f7161_Screenshot2025-10-19at111614am.png",
    alt: "Parque Tecnológico Orión"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/e496e3a2b_UNICEF_Logo-removebg-preview.png",
    alt: "UNICEF"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/264ad8eb0_Screenshot_2025-10-19_at_111614_am-removebg-preview.png",
    alt: "UNESCO"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/79300fb07_egade.jpg",
    alt: "EGADE Business School"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/a6d4badf5_LOGO_INNOVACIONoriginal.png",
    alt: "Instituto de Innovación"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/df3c4ce57_Logo_E-vior_developments.png",
    alt: "E-vior Developments"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/a1299daff_kamdata-perfil-removebg-preview.png",
    alt: "Kamdata"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/f98293808_neuralhack.png",
    alt: "Neuralhack"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/74d22d021_Screenshot_2025-05-17_at_111444_pm-removebg-preview.png",
    alt: "RSM"
  },
  {
    url: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68f482c7c256bdec5bbe76f1/de9954a68_Screenshot_2025-05-17_at_110340_pm-removebg-preview.png",
    alt: "HarvardX"
  }
];

export default function LogoCarousel() {
  // Duplicar los logos para crear efecto de loop infinito
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full overflow-hidden py-8 relative">
      {/* Gradientes en los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      {/* Contenedor del carrusel */}
      <motion.div
        className="flex gap-8 md:gap-12 items-center"
        animate={{
          x: [0, -2400],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 50,
            ease: "linear",
          },
        }}
      >
        {duplicatedLogos.map((logo, index) => (
          <motion.div
            key={index}
            className="flex-shrink-0"
            whileHover={{ scale: 1.15, zIndex: 20 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="w-40 h-28 md:w-48 md:h-32 flex items-center justify-center glass-effect rounded-xl p-4 hover:shadow-xl transition-shadow duration-300 bg-white/80">
              <img
                src={logo.url}
                alt={logo.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}