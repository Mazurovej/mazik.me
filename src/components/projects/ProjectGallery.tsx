import { useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import { AnimatePresence, motion } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface ProjectGalleryProps {
  images: string[];
  projectName: string;
}

const overlayTransition = { duration: 0.3, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] };

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const lightboxSwiperRef = useRef<SwiperType | null>(null);

  const openLightbox = useCallback(() => {
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  // Close lightbox on Escape
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [lightboxOpen, closeLightbox]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  // Sync lightbox swiper to the active index when it opens
  useEffect(() => {
    if (lightboxOpen && lightboxSwiperRef.current) {
      lightboxSwiperRef.current.slideTo(activeIndex, 0);
    }
  }, [lightboxOpen, activeIndex]);

  const navBtnClass = "w-8 h-8 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-20";

  return (
    <>
      {/* Inline gallery */}
      <div className="project-gallery relative rounded-2xl overflow-hidden bg-background border border-border/50">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{
            clickable: true,
            el: '.gallery-pagination',
          }}
          navigation={{
            nextEl: '.gallery-next',
            prevEl: '.gallery-prev',
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          spaceBetween={0}
          slidesPerView={1}
          className="aspect-[4/3] w-full"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div
                className="group/slide relative w-full h-full cursor-pointer"
                onClick={openLightbox}
              >
                <img
                  src={src}
                  alt={`${projectName} screenshot ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading={i === 0 ? 'eager' : 'lazy'}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover/slide:bg-black/40 transition-colors duration-200 flex items-center justify-center">
                  <div className="opacity-0 group-hover/slide:opacity-100 transition-opacity duration-200 flex flex-col items-center gap-2">
                    <Maximize2 className="w-6 h-6 text-white" />
                    <span className="text-xs font-bold text-white uppercase tracking-widest">Open Gallery</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Controls overlaid on image bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-center gap-3 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent pointer-events-none">
          <button
            className={`gallery-prev ${navBtnClass} pointer-events-auto`}
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="gallery-pagination flex items-center gap-1.5 pointer-events-auto" />
          <button
            className={`gallery-next ${navBtnClass} pointer-events-auto`}
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Fullscreen lightbox (portaled to body to escape overflow:hidden parents) */}
      {createPortal(<AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={overlayTransition}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 sm:p-10"
            onClick={closeLightbox}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/95" />

            {/* Lightbox content: image + overlaid controls */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={overlayTransition}
              className="relative z-20 w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Swiper with clean corners */}
              <div className="rounded-2xl overflow-hidden">
                <Swiper
                  modules={[Navigation]}
                  navigation={{
                    nextEl: '.lightbox-next',
                    prevEl: '.lightbox-prev',
                  }}
                  initialSlide={activeIndex}
                  onSwiper={(swiper) => { lightboxSwiperRef.current = swiper; }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                  spaceBetween={0}
                  slidesPerView={1}
                  className="w-full"
                >
                  {images.map((src, i) => (
                    <SwiperSlide key={i} className="!flex items-center justify-center bg-black">
                      <img
                        src={src}
                        alt={`${projectName} screenshot ${i + 1}`}
                        className="w-full max-h-[80vh] object-contain"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Counter: top-left inside the image */}
              <div className="absolute top-4 left-4 z-10 px-3 py-1.5 rounded-lg bg-black/50 text-xs font-mono text-zinc-400">
                <span className="text-white">{activeIndex + 1}</span>
                <span className="mx-1">/</span>
                <span>{images.length}</span>
              </div>

              {/* Close button: top-right inside the image */}
              <button
                onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors"
                aria-label="Close gallery"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navigation: inside the image, vertically centered */}
              <button
                className="lightbox-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-20"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                className="lightbox-next absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/10 text-white hover:bg-white/20 transition-colors disabled:opacity-20"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>, document.body)}
    </>
  );
}
