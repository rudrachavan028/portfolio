import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface LoadingScreenProps {
  key?: React.Key;
  onLoadingComplete?: () => void;
  durationMs?: number;
}

export default function LoadingScreen({ 
  onLoadingComplete,
  durationMs = 4500 
}: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const intervalTime = 16;

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const currentProgress = Math.min((elapsed / durationMs) * 100, 100);
      setProgress(currentProgress);

      if (elapsed >= durationMs) {
        clearInterval(timer);
        setTimeout(() => {
          setIsFinished(true);
          if (onLoadingComplete) {
            onLoadingComplete();
          }
        }, 150);
      }
    }, intervalTime);

    return () => clearInterval(timer);
  }, [durationMs, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          key="studio-size-center-loader"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0, 
            scale: 1.05,
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } 
          }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#020617] select-none cursor-wait overflow-hidden"
        >
          {/* Subtle Ambient Background Radial Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

          {/* MAIN CENTER CIRCULAR ANIMATION (STUDIO SIZE KINETIC RIG) */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* The Precision Circular Animation Stage */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 flex items-center justify-center">
              
              {/* Layer 1: Subtle Center Crosshair Axis */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
                <div className="w-full h-[1px] bg-sky-400" />
                <div className="h-full w-[1px] bg-sky-400 absolute" />
              </div>

              {/* Layer 2: Calibration Ring with Cardinal Ticks */}
              <svg 
                className="absolute inset-0 w-full h-full pointer-events-none" 
                viewBox="0 0 200 200"
              >
                <circle 
                  cx="100" 
                  cy="100" 
                  r="92" 
                  fill="none" 
                  stroke="rgba(255, 255, 255, 0.08)" 
                  strokeWidth="1" 
                />
                <line x1="100" y1="2" x2="100" y2="10" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.5" />
                <line x1="100" y1="190" x2="100" y2="198" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.5" />
                <line x1="2" y1="100" x2="10" y2="100" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.5" />
                <line x1="190" y1="100" x2="198" y2="100" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1.5" />
              </svg>

              {/* Layer 3: Steady Smooth Rotating Outer Dashed Orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                className="absolute inset-1"
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="84"
                    fill="none"
                    stroke="rgba(56, 189, 248, 0.25)"
                    strokeWidth="1.5"
                    strokeDasharray="4 8"
                  />
                </svg>
              </motion.div>

              {/* Layer 4: Counter-Rotating Secondary Segment Ring */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
                className="absolute inset-4"
              >
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="72"
                    fill="none"
                    stroke="rgba(99, 102, 241, 0.4)"
                    strokeWidth="1.5"
                    strokeDasharray="24 40"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>

              {/* Layer 5: Main Steady Dynamic Circular Progress Arc */}
              <div className="absolute inset-6">
                <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
                  <circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.06)"
                    strokeWidth="3.5"
                  />
                  <motion.circle
                    cx="100"
                    cy="100"
                    r="60"
                    fill="none"
                    stroke="url(#studioSizeGradient)"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 60}
                    strokeDashoffset={2 * Math.PI * 60 * (1 - progress / 100)}
                    style={{ transition: 'stroke-dashoffset 0.04s linear' }}
                  />
                  <defs>
                    <linearGradient id="studioSizeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#38bdf8" />
                      <stop offset="50%" stopColor="#0ea5e9" />
                      <stop offset="100%" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Layer 6: Inner Rotating Satellite Dot */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="absolute inset-10 pointer-events-none"
              >
                <div className="w-2 h-2 rounded-full bg-sky-300 shadow-[0_0_10px_#38bdf8] -top-1 left-1/2 -translate-x-1/2 absolute" />
              </motion.div>

              {/* Center Core: Clean Percentage Display */}
              <div className="flex flex-col items-center justify-center z-10">
                <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tighter tabular-nums drop-shadow-md">
                  {Math.round(progress)}
                  <span className="text-sm text-sky-400 font-normal ml-0.5">%</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-slate-400 uppercase mt-0.5">
                  LOADING
                </span>
              </div>

            </div>

          </div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}
