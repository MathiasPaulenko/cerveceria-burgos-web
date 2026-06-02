"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";

const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';

const galleryImages = [
  // ── EL LOCAL ──
  { id: 1, src: `${base}images/gallery/local-exterior-1.jpg`, alt: "Fachada principal de Cervecería Burgos con terraza en Carabanchel", title: "Fachada", category: "local" },
  { id: 2, src: `${base}images/gallery/local-exterior-2.jpg`, alt: "Entrada del local iluminada por la noche", title: "Entrada", category: "local" },
  { id: 3, src: `${base}images/gallery/local-terraza.jpg`, alt: "Terraza exterior con mesas para disfrutar al aire libre", title: "Terraza", category: "local" },

  // ── TAPAS ──
  { id: 4, src: `${base}images/gallery/comida-tapa-1.jpg`, alt: "Ración de bravas caseras con salsa picante", title: "Bravas", category: "tapas" },
  { id: 5, src: `${base}images/gallery/comida-tapa-2.jpg`, alt: "Tabla de embutidos ibéricos y quesos", title: "Tabla de embutidos", category: "tapas" },
  { id: 6, src: `${base}images/gallery/comida-tapa-3.jpg`, alt: "Croquetas caseras cremosas", title: "Croquetas", category: "tapas" },
  { id: 7, src: `${base}images/gallery/comida-tapa-4.jpg`, alt: "Tortilla española jugosa con cebolla", title: "Tortilla", category: "tapas" },
  { id: 8, src: `${base}images/gallery/comida-tapa-5.jpg`, alt: "Pulpo a la gallega con patatas y pimentón", title: "Pulpo", category: "tapas" },
  { id: 9, src: `${base}images/gallery/comida-tapa-6.jpg`, alt: "Patatas con alioli y guindilla", title: "Patatas alioli", category: "tapas" },
  { id: 10, src: `${base}images/gallery/comida-tapa-7.jpg`, alt: "Gambas al ajillo en cazuela de barro", title: "Gambas al ajillo", category: "tapas" },
  { id: 11, src: `${base}images/gallery/comida-tapa-8.jpg`, alt: "Ensaladilla rusa con aceitunas y atún", title: "Ensaladilla", category: "tapas" },

  // ── COMIDA / MENÚ ──
  { id: 12, src: `${base}images/gallery/comida-menu-1.jpg`, alt: "Hamburguesa artesanal con queso derretido", title: "Hamburguesa", category: "comida" },
  { id: 13, src: `${base}images/gallery/comida-menu-2.jpg`, alt: "Bocadillo de calamares a la andaluza", title: "Bocadillo de calamares", category: "comida" },
  { id: 14, src: `${base}images/gallery/comida-menu-3.jpg`, alt: "Plato de carne a la brasa con guarnición", title: "Carne a la brasa", category: "comida" },
  { id: 15, src: `${base}images/gallery/comida-menu-4.jpg`, alt: "Ensalada fresca con productos de temporada", title: "Ensalada", category: "comida" },
];

const filterOptions = [
  { key: "all", label: "Todas" },
  { key: "local", label: "El Local" },
  { key: "tapas", label: "Tapas" },
  { key: "comida", label: "Comida" }
];

const ITEMS_PER_PAGE = 6;

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredImages = filter === "all"
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  const totalPages = Math.ceil(filteredImages.length / ITEMS_PER_PAGE);
  const paginatedImages = filteredImages.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleFilterChange = (key: string) => {
    setFilter(key);
    setCurrentPage(1);
  };

  // Keyboard navigation for lightbox
  const navigateImage = useCallback((direction: "prev" | "next") => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  }, [selectedImage, filteredImages]);

  useEffect(() => {
    if (!selectedImage) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, navigateImage]);

  return (
    <section id="galeria" className="py-24 bg-[#FBF5DD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <span className="text-[#99120f] font-medium tracking-wide uppercase text-sm">Galería</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#151418]">Cervecería <span className="text-[#99120f]">Burgos</span></h2>
        </FadeIn>

        <FadeIn delay={0.1} className="flex justify-center gap-4 mb-12 flex-wrap">
          {filterOptions.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleFilterChange(key)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99120f] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBF5DD] ${
                filter === key ? "bg-[#99120f] text-[#FBF5DD] shadow-md" : "bg-white text-[#151418] hover:bg-[#99120f]/10"
              }`}>
              {label}
            </button>
          ))}
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedImages.map((image, index) => (
            <FadeIn key={image.id} delay={index * 0.05}>
              <motion.button
                onClick={() => setSelectedImage(image)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl w-full text-left block h-full"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-shadow duration-300 rounded-2xl overflow-hidden h-full">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                      <h3 className="text-white font-semibold">{image.title}</h3>
                      <p className="text-gray-300 text-sm">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </motion.button>
            </FadeIn>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg font-medium text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white text-[#151418] hover:bg-[#99120f]/10"
            >
              ← Anterior
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-10 h-10 rounded-lg font-medium text-sm transition-colors ${
                  currentPage === page
                    ? "bg-[#99120f] text-[#FBF5DD] shadow-md"
                    : "bg-white text-[#151418] hover:bg-[#99120f]/10"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-lg font-medium text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white text-[#151418] hover:bg-[#99120f]/10"
            >
              Siguiente →
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            <div className="mt-4 text-center">
              <h3 className="text-white text-xl font-semibold">{selectedImage.title}</h3>
              <p className="text-gray-400">{selectedImage.alt}</p>
            </div>
            {/* Close button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#99120f] transition-colors"
              aria-label="Cerrar imagen"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            {/* Prev button */}
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#99120f] transition-colors p-2 bg-black/50 rounded-full"
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            {/* Next button */}
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#99120f] transition-colors p-2 bg-black/50 rounded-full"
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
