import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import SectionHeading from './SectionHeading';
import { portfolioData } from '../data';
import { 
  Trophy, 
  Award, 
  ChevronLeft, 
  ChevronRight, 
  Calendar
} from 'lucide-react';

interface AchievementItem {
  id: number;
  rank: string;
  title: string;
  subtitle: string;
  info: string;
  project?: string;
  image: string;
  badge?: string;
  date?: string;
}

export default function Achievements() {
  const achievements = (portfolioData.achievementsList || []) as AchievementItem[];
  const [hoverDirection, setHoverDirection] = useState<'left' | 'right' | null>(null);
  const [failedImages, setFailedImages] = useState<Record<number, boolean>>({});
  const [isDragging, setIsDragging] = useState(false);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  
  const carouselRef = useRef<HTMLDivElement>(null);
  const hoverAnimRef = useRef<number | null>(null);
  const isMouseDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const resumeTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth hover scroll left to right / right to left
  const startHoverScroll = useCallback((direction: 'left' | 'right') => {
    setHoverDirection(direction);
    if (hoverAnimRef.current) cancelAnimationFrame(hoverAnimRef.current);

    const step = () => {
      if (carouselRef.current) {
        const speed = 4; // px per frame
        if (direction === 'left') {
          carouselRef.current.scrollLeft -= speed;
        } else {
          carouselRef.current.scrollLeft += speed;
        }
      }
      hoverAnimRef.current = requestAnimationFrame(step);
    };
    hoverAnimRef.current = requestAnimationFrame(step);
  }, []);

  const stopHoverScroll = useCallback(() => {
    setHoverDirection(null);
    if (hoverAnimRef.current) {
      cancelAnimationFrame(hoverAnimRef.current);
      hoverAnimRef.current = null;
    }
  }, []);

  // Default continuous smooth auto-panning
  useEffect(() => {
    let animationFrameId: number;

    const autoStep = () => {
      if (carouselRef.current && !isUserInteracting && hoverDirection === null) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 2) {
          carouselRef.current.scrollLeft = 0;
        } else {
          carouselRef.current.scrollLeft += 0.8; // constant smooth 60fps auto-gliding
        }
      }
      animationFrameId = requestAnimationFrame(autoStep);
    };

    animationFrameId = requestAnimationFrame(autoStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isUserInteracting, hoverDirection]);

  // Clean up hover animation frame & resume timer
  useEffect(() => {
    return () => {
      if (hoverAnimRef.current) cancelAnimationFrame(hoverAnimRef.current);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, []);

  const handleImageError = (id: number) => {
    setFailedImages((prev) => ({ ...prev, [id]: true }));
  };

  // --- MOUSE DRAG GESTURE HANDLERS (Both directions) ---
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    isMouseDownRef.current = true;
    setIsDragging(true);
    setIsUserInteracting(true);
    startXRef.current = e.pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDownRef.current || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.6; // Responsive drag sensitivity
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isMouseDownRef.current) {
      isMouseDownRef.current = false;
      setIsDragging(false);
      // Resume auto scroll smoothly after user finishes gesture
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = setTimeout(() => {
        setIsUserInteracting(false);
      }, 2500);
    }
  };

  // --- TOUCH SWIPE GESTURE HANDLERS (Both directions) ---
  const handleTouchStart = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    setIsUserInteracting(true);
    startXRef.current = e.touches[0].pageX - carouselRef.current.offsetLeft;
    scrollLeftRef.current = carouselRef.current.scrollLeft;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!carouselRef.current) return;
    const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.3;
    carouselRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleTouchEnd = () => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = setTimeout(() => {
      setIsUserInteracting(false);
    }, 2500);
  };

  return (
    <section id="achievements" className="py-16 sm:py-24 relative z-10 overflow-hidden bg-slate-900/40 border-y border-white/5">
      
      {/* Background ambient lighting matching website blue/indigo/cyan theme */}
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <SectionHeading 
          title="Achievements" 
          subtitle="State & national level project competition victories and technological milestones" 
        />
      </div>

      {/* WALLPAPER ANIMATED CAROUSEL CONTAINER */}
      <div className="relative w-full group/carousel">
        
        {/* LEFT HOVER SENSITIVE ZONE (Triggers left-to-right glide) */}
        <div 
          onMouseEnter={() => startHoverScroll('left')}
          onMouseLeave={stopHoverScroll}
          className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 z-30 pointer-events-auto cursor-w-resize flex items-center justify-start pl-3 opacity-0 group-hover/carousel:opacity-100 transition-opacity bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent"
        >
          <div className={`p-3 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-300 shadow-2xl backdrop-blur-md transition-transform ${hoverDirection === 'left' ? 'scale-125 ring-2 ring-sky-400' : 'scale-100'}`}>
            <ChevronLeft size={22} className="animate-pulse" />
          </div>
        </div>

        {/* RIGHT HOVER SENSITIVE ZONE (Triggers right-to-left glide) */}
        <div 
          onMouseEnter={() => startHoverScroll('right')}
          onMouseLeave={stopHoverScroll}
          className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 z-30 pointer-events-auto cursor-e-resize flex items-center justify-end pr-3 opacity-0 group-hover/carousel:opacity-100 transition-opacity bg-gradient-to-l from-slate-950/90 via-slate-950/40 to-transparent"
        >
          <div className={`p-3 rounded-full bg-slate-900/90 border border-sky-500/40 text-sky-300 shadow-2xl backdrop-blur-md transition-transform ${hoverDirection === 'right' ? 'scale-125 ring-2 ring-sky-400' : 'scale-100'}`}>
            <ChevronRight size={22} className="animate-pulse" />
          </div>
        </div>

        {/* CAROUSEL TRACK WITH TWO-WAY GESTURE (SWIPE / DRAG) */}
        <div 
          ref={carouselRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={() => {
            handleMouseUpOrLeave();
            stopHoverScroll();
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`flex items-stretch gap-5 sm:gap-7 overflow-x-auto scrollbar-none px-4 sm:px-8 lg:px-12 py-6 scroll-smooth select-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {achievements.map((item, index) => {
            const isFailed = failedImages[item.id];
            // Vibrant gradient styles matching the website theme
            const gradients = [
              "from-sky-950/80 via-slate-900 to-indigo-950/80",
              "from-blue-950/80 via-slate-900 to-cyan-950/80",
              "from-indigo-950/80 via-slate-900 to-slate-900",
              "from-cyan-950/80 via-slate-900 to-blue-950/80",
              "from-slate-900 via-indigo-950/70 to-sky-950/80",
              "from-blue-900/40 via-slate-900 to-indigo-950/80",
              "from-cyan-900/40 via-slate-900 to-slate-900",
            ];
            const fallbackGrad = gradients[index % gradients.length];

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                onMouseEnter={() => setIsUserInteracting(true)}
                onMouseLeave={() => {
                  if (!isMouseDownRef.current) {
                    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
                    resumeTimerRef.current = setTimeout(() => {
                      setIsUserInteracting(false);
                    }, 1500);
                  }
                }}
                className="shrink-0 w-[300px] sm:w-[420px] md:w-[480px] lg:w-[540px] rounded-3xl overflow-hidden glass-panel border border-white/10 hover:border-sky-400/40 hover:shadow-sky-500/10 transition-all duration-500 shadow-2xl relative group flex flex-col bg-slate-900/90 pointer-events-auto"
              >
                {/* Widescreen Wallpaper Image Container */}
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950 pointer-events-none">
                  
                  {/* Fallback Artwork/Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${fallbackGrad} flex flex-col items-center justify-center p-6 text-center`}>
                    <div className="w-16 h-16 rounded-2xl bg-sky-500/15 border border-sky-400/30 flex items-center justify-center text-sky-400 mb-3 shadow-inner">
                      <Trophy size={32} />
                    </div>
                    <span className="text-xs font-mono uppercase tracking-widest text-sky-300 font-bold">
                      {item.rank}
                    </span>
                    <h5 className="text-base font-bold text-white mt-1 max-w-xs">
                      {item.title}
                    </h5>
                  </div>

                  {/* Main Image */}
                  {!isFailed && (
                    <img 
                      src={item.image} 
                      alt={item.title}
                      draggable={false}
                      onError={() => handleImageError(item.id)}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 pointer-events-none select-none"
                    />
                  )}

                  {/* Cinematic Wallpaper Vignette & Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                  <div className="absolute inset-0 bg-radial from-transparent via-transparent to-slate-950/70" />

                  {/* Top Bar: ONLY Rank on Left, ONLY Year on Right */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between z-10 pointer-events-none">
                    
                    {/* Top Left: Rank */}
                    <div className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-sky-400/40 text-sky-300 shadow-lg shadow-sky-500/10">
                      <Trophy size={14} className="text-sky-400 animate-bounce" />
                      <span className="text-xs sm:text-sm font-extrabold font-mono tracking-wide uppercase">
                        {item.rank}
                      </span>
                    </div>

                    {/* Top Right: ONLY Year */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/10 text-slate-300 shadow-lg text-xs font-mono font-medium">
                      <Calendar size={13} className="text-sky-400" />
                      <span>{item.date || "2025"}</span>
                    </div>

                  </div>
                </div>

                {/* Wallpaper Content Section */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-start bg-gradient-to-b from-slate-900/90 to-slate-950">
                  
                  {/* Normal Header: "State Level Project Competition" */}
                  <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h4>

                  {/* Sub Header: "Competition Information" */}
                  <div className="mt-1.5 flex items-center gap-2 text-xs sm:text-sm font-medium text-cyan-400">
                    <Award size={14} className="shrink-0 text-cyan-400" />
                    <span>{item.subtitle}</span>
                  </div>

                  {/* Detailed Competition Information */}
                  <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.info}
                  </p>

                </div>

                {/* Subtle Border Glow on Hover matching theme */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-sky-400/30 pointer-events-none transition-colors duration-500" />
              </motion.div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
