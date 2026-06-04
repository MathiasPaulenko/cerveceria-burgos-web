"use client";

import { useState, useEffect, useCallback, useRef, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { FadeIn } from "@/components/animations/FadeIn";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTranslation } from "@/i18n/useTranslation";

const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';

const galleryImageData = [
  { id: 1, src: `${base}images/gallery/coctel-1.webp`, category: "cocteles" },
  { id: 2, src: `${base}images/gallery/coctel-2.webp`, category: "cocteles" },
  { id: 3, src: `${base}images/gallery/coctel-3.webp`, category: "cocteles" },
  { id: 4, src: `${base}images/gallery/coctel-4.webp`, category: "cocteles" },
  { id: 5, src: `${base}images/gallery/coctel-5.webp`, category: "cocteles" },
  { id: 6, src: `${base}images/gallery/coctel-6.webp`, category: "cocteles" },
  { id: 7, src: `${base}images/gallery/coctel-7.webp`, category: "cocteles" },
  { id: 8, src: `${base}images/gallery/coctel-8.webp`, category: "cocteles" },
  { id: 9, src: `${base}images/gallery/coctel-9.webp`, category: "cocteles" },
  { id: 10, src: `${base}images/gallery/coctel-10.webp`, category: "cocteles" },
  { id: 11, src: `${base}images/gallery/coctel-11.webp`, category: "cocteles" },
  { id: 12, src: `${base}images/gallery/coctel-12.webp`, category: "cocteles" },
  { id: 13, src: `${base}images/gallery/coctel-13.webp`, category: "cocteles" },
  { id: 14, src: `${base}images/gallery/coctel-14.webp`, category: "cocteles" },
  { id: 15, src: `${base}images/gallery/coctel-15.webp`, category: "cocteles" },
  { id: 16, src: `${base}images/gallery/coctel-16.webp`, category: "cocteles" },
  { id: 17, src: `${base}images/gallery/coctel-17.webp`, category: "cocteles" },
  { id: 18, src: `${base}images/gallery/coctel-18.webp`, category: "cocteles" },
  { id: 19, src: `${base}images/gallery/coctel-19.webp`, category: "cocteles" },
  { id: 20, src: `${base}images/gallery/coctel-20.webp`, category: "cocteles" },
  { id: 21, src: `${base}images/gallery/coctel-21.webp`, category: "cocteles" },
  { id: 22, src: `${base}images/gallery/coctel-22.webp`, category: "cocteles" },
  { id: 23, src: `${base}images/gallery/coctel-23.webp`, category: "cocteles" },
  { id: 24, src: `${base}images/gallery/coctel-24.webp`, category: "cocteles" },
  { id: 25, src: `${base}images/gallery/coctel-25.webp`, category: "cocteles" },
  { id: 26, src: `${base}images/gallery/coctel-26.webp`, category: "cocteles" },
  { id: 27, src: `${base}images/gallery/coctel-27.webp`, category: "cocteles" },
  { id: 28, src: `${base}images/gallery/coctel-28.webp`, category: "cocteles" },
  { id: 29, src: `${base}images/gallery/coctel-29.webp`, category: "cocteles" },
  { id: 30, src: `${base}images/gallery/coctel-30.webp`, category: "cocteles" },
  { id: 31, src: `${base}images/gallery/coctel-31.webp`, category: "cocteles" },
  { id: 32, src: `${base}images/gallery/coctel-32.webp`, category: "cocteles" },
  { id: 33, src: `${base}images/gallery/coctel-33.webp`, category: "cocteles" },
  { id: 34, src: `${base}images/gallery/coctel-34.webp`, category: "cocteles" },
  { id: 35, src: `${base}images/gallery/coctel-35.webp`, category: "cocteles" },
  { id: 36, src: `${base}images/gallery/coctel-36.webp`, category: "cocteles" },
  { id: 37, src: `${base}images/gallery/coctel-37.webp`, category: "cocteles" },
  { id: 38, src: `${base}images/gallery/coctel-38.webp`, category: "cocteles" },
  { id: 39, src: `${base}images/gallery/coctel-39.webp`, category: "cocteles" },
  { id: 40, src: `${base}images/gallery/coctel-40.webp`, category: "cocteles" },
  { id: 41, src: `${base}images/gallery/coctel-41.webp`, category: "cocteles" },
  { id: 42, src: `${base}images/gallery/coctel-42.webp`, category: "cocteles" },
  { id: 43, src: `${base}images/gallery/coctel-43.webp`, category: "cocteles" },
  { id: 44, src: `${base}images/gallery/coctel-44.webp`, category: "cocteles" },
  { id: 45, src: `${base}images/gallery/coctel-45.webp`, category: "cocteles" },
  { id: 46, src: `${base}images/gallery/plato-1.webp`, category: "platos" },
  { id: 47, src: `${base}images/gallery/plato-2.webp`, category: "platos" },
  { id: 48, src: `${base}images/gallery/plato-3.webp`, category: "platos" },
  { id: 49, src: `${base}images/gallery/plato-4.webp`, category: "platos" },
  { id: 50, src: `${base}images/gallery/plato-5.webp`, category: "platos" },
  { id: 51, src: `${base}images/gallery/plato-6.webp`, category: "platos" },
  { id: 52, src: `${base}images/gallery/plato-7.webp`, category: "platos" },
  { id: 53, src: `${base}images/gallery/plato-8.webp`, category: "platos" },
  { id: 54, src: `${base}images/gallery/plato-9.webp`, category: "platos" },
  { id: 55, src: `${base}images/gallery/plato-10.webp`, category: "platos" },
  { id: 56, src: `${base}images/gallery/plato-11.webp`, category: "platos" },
  { id: 57, src: `${base}images/gallery/racion-1.webp`, category: "raciones" },
  { id: 58, src: `${base}images/gallery/racion-2.webp`, category: "raciones" },
  { id: 59, src: `${base}images/gallery/racion-3.webp`, category: "raciones" },
  { id: 60, src: `${base}images/gallery/racion-4.webp`, category: "raciones" },
  { id: 61, src: `${base}images/gallery/racion-5.webp`, category: "raciones" },
  { id: 62, src: `${base}images/gallery/racion-6.webp`, category: "raciones" },
  { id: 63, src: `${base}images/gallery/racion-7.webp`, category: "raciones" },
  { id: 64, src: `${base}images/gallery/racion-8.webp`, category: "raciones" },
  { id: 65, src: `${base}images/gallery/racion-9.webp`, category: "raciones" }
];

const ITEMS_PER_PAGE = 6;

function GalleryImage({
  src,
  alt,
  imageId,
  loadedImages,
  setLoadedImages,
}: {
  src: string;
  alt: string;
  imageId: number;
  loadedImages: Set<number>;
  setLoadedImages: React.Dispatch<React.SetStateAction<Set<number>>>;
}) {
  const imgRef = useRef<HTMLImageElement>(null);

  useLayoutEffect(() => {
    const img = imgRef.current;
    if (img && img.complete) {
      setLoadedImages((prev) => {
        if (prev.has(imageId)) return prev;
        return new Set(prev).add(imageId);
      });
    }
  }, [src, imageId, setLoadedImages]);

  return (
    <img
      ref={imgRef}
      src={src}
      alt={alt}
      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${loadedImages.has(imageId) ? "opacity-100" : "opacity-0"}`}
      loading="eager"
      decoding="async"
      onLoad={() =>
        setLoadedImages((prev) => {
          if (prev.has(imageId)) return prev;
          return new Set(prev).add(imageId);
        })
      }
    />
  );
}

export function GallerySection() {
  const { t } = useTranslation();
  const galleryImages = galleryImageData.map((img, i) => ({
    ...img,
    alt: t.gallery.images[i]?.alt ?? "",
    title: t.gallery.images[i]?.title ?? "",
  }));
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const filterOptions = [
    { key: "all", label: t.gallery.filters.all },
    { key: "cocteles", label: t.gallery.filters.cocteles },
    { key: "platos", label: t.gallery.filters.platos },
    { key: "raciones", label: t.gallery.filters.raciones },
  ];

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

  const navigateImage = useCallback((direction: "prev" | "next") => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    if (currentIndex === -1) return;
    const newIndex = direction === "prev"
      ? (currentIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[newIndex]);
  }, [selectedImage, filteredImages]);

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!selectedImage) return;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
      if (e.key === "ArrowLeft") navigateImage("prev");
      if (e.key === "ArrowRight") navigateImage("next");
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, navigateImage]);

  return (
    <section id="galeria" className="py-24 bg-[#F9E3A7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-12">
          <span className="text-[#99120f] font-medium tracking-wide uppercase text-sm">{t.gallery.label}</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold text-[#151418]">{t.gallery.title} <span className="text-[#99120f]">{t.gallery.highlight}</span></h2>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" aria-live="polite" aria-atomic="true">
          {paginatedImages.map((image, index) => (
            <FadeIn key={image.id} delay={index * 0.05}>
              <motion.button
                onClick={() => setSelectedImage(image)}
                className="relative group cursor-pointer overflow-hidden rounded-2xl w-full text-left block h-full"
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] transition-shadow duration-300 rounded-2xl overflow-hidden h-full">
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8e0cc]">
                    {!loadedImages.has(image.id) && (
                      <div className="absolute inset-0 animate-pulse bg-[#e8e0cc]" />
                    )}
                    <GalleryImage
                      src={image.src}
                      alt={image.alt}
                      imageId={image.id}
                      loadedImages={loadedImages}
                      setLoadedImages={setLoadedImages}
                    />
                  </div>
                </div>
              </motion.button>
            </FadeIn>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-lg font-medium text-sm transition-colors disabled:opacity-40 disabled:cursor-not-allowed bg-white text-[#151418] hover:bg-[#99120f]/10"
            >
              {t.gallery.pagination.prev}
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
              {t.gallery.pagination.next}
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Galería"
        >
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.src} alt={selectedImage.alt} decoding="async" className="w-full h-auto max-h-[80vh] object-contain rounded-lg" />
            <button
              ref={closeButtonRef}
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#99120f] transition-colors"
              aria-label={t.gallery.lightbox.close}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <button
              onClick={() => navigateImage("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#99120f] transition-colors p-2 bg-black/50 rounded-full"
              aria-label={t.gallery.lightbox.prev}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              onClick={() => navigateImage("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#99120f] transition-colors p-2 bg-black/50 rounded-full"
              aria-label={t.gallery.lightbox.next}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
