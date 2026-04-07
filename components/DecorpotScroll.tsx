"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence, useSpring } from "framer-motion";

/* ─── constants ─────────────────────────────────────────────────── */
const TOTAL_FRAMES = 183;
const BG = "#F5EDE0";

const framePath = (index: number) => {
  const padded = String(index).padStart(5, "0");
  return `/interior design frames/${padded}.png`;
};

/* ─── types ─────────────────────────────────────────────────────── */
interface TextBeat {
  startProgress: number;
  endProgress: number;
  heading: string;
  subtext: string;
  cta?: string;
  position:
  | "center-top"
  | "left-center"
  | "right-center"
  | "left-bottom"
  | "center-bottom";
}

const TEXT_BEATS: TextBeat[] = [
  {
    startProgress: 0.0,
    endProgress: 0.10,
    heading: "Decorpot.",
    subtext: "Where architecture meets living.",
    position: "center-top",
  },
  {
    startProgress: 0.20,
    endProgress: 0.36,
    heading: "Every Space Has a Story.",
    subtext: "We write it in light, texture and form.",
    position: "left-center",
  },
  {
    startProgress: 0.44,
    endProgress: 0.60,
    heading: "Designed to Be Lived In.",
    subtext: "Curated interiors for the way you live.",
    position: "right-center",
  },
  {
    startProgress: 0.67,
    endProgress: 0.80,
    heading: "Details That Define.",
    subtext: "Bouclé, travertine, brass — nothing is accidental.",
    position: "left-bottom",
  },
  {
    startProgress: 0.88,
    endProgress: 1.0,
    heading: "Your Space. Reimagined.",
    subtext: "Let's begin your transformation.",
    cta: "Book a Consultation",
    position: "center-bottom",
  },
];

/* ─── cover-fit helper ──────────────────────────────────────────── */
function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number
) {
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;
  const scale = Math.max(cw / iw, ch / ih);
  const sw = iw * scale;
  const sh = ih * scale;
  const sx = (cw - sw) / 2;
  const sy = (ch - sh) / 2;
  ctx.drawImage(img, sx, sy, sw, sh);
}

/* ─── Component ─────────────────────────────────────────────────── */
/* ─── Components ────────────────────────────────────────────────── */

function MobileHero() {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100svh",
        overflow: "hidden",
        backgroundColor: "#F5EDE0"
      }}
    >
      {/* ── Background Image ── */}
      <img
        src="/interior design frames/00192.png"
        alt="Decorpot luxury interior"
        style={{
          position: "absolute",
          inset: "0",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center center",
          display: "block"
        }}
      />

      {/* ── Top gradient vignette for navbar ── */}
      <div style={{
        position: "absolute",
        top: "0",
        left: "0",
        right: "0",
        height: "28%",
        background: "linear-gradient(to bottom, rgba(10,9,8,0.55) 0%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 5
      }} />

      {/* ── Bottom gradient vignette for text ── */}
      <div style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        height: "55%",
        background: "linear-gradient(to top, rgba(10,9,8,0.75) 0%, rgba(10,9,8,0.35) 45%, transparent 100%)",
        pointerEvents: "none",
        zIndex: 5
      }} />

      {/* ── Hero Text Content ── */}
      <div style={{
        position: "absolute",
        bottom: "0",
        left: "0",
        right: "0",
        zIndex: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "max(env(safe-area-inset-bottom, 24px), 32px)",
        paddingLeft: "32px",
        paddingRight: "32px",
        animation: "fadeInMobileHero 1.2s cubic-bezier(0.4,0,0.2,1) 0.4s both"
      }}>
        {/* Label */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "9px",
          letterSpacing: "0.45em",
          textTransform: "uppercase",
          color: "rgba(200,149,108,0.9)",
          marginBottom: "14px",
          textAlign: "center",
          textShadow: "0 1px 12px rgba(0,0,0,0.8)"
        }}>
          Luxury Interior Design
        </p>

        {/* Main Heading */}
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(42px, 12vw, 68px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "#FFFFFF",
          textAlign: "center",
          lineHeight: 1.1,
          margin: "0 0 16px 0",
          textShadow: "0 2px 40px rgba(0,0,0,0.9), 0 1px 12px rgba(0,0,0,0.7)"
        }}>
          Where Architecture<br />Meets Living.
        </h1>

        {/* Subtext */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.6)",
          textAlign: "center",
          marginBottom: "32px",
          textShadow: "0 1px 16px rgba(0,0,0,0.9)"
        }}>
          Decorpot Studio
        </p>

        {/* Thin divider line */}
        <div style={{
          width: "1px",
          height: "40px",
          background: "linear-gradient(to bottom, rgba(200,149,108,0.8), transparent)",
          marginBottom: "24px"
        }} />

        {/* Scroll CTA */}
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "9px",
          letterSpacing: "0.4em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.4)",
          textAlign: "center",
          marginBottom: "64px",
          textShadow: "0 1px 8px rgba(0,0,0,0.8)"
        }}>
          Scroll to Explore
        </p>
      </div>

      {/* ── Bottom Left Studio Tag ── */}
      <div style={{
        position: "absolute",
        bottom: "28px",
        left: "24px",
        zIndex: 10,
        borderLeft: "1px solid rgba(200,149,108,0.45)",
        paddingLeft: "12px"
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "8px",
          letterSpacing: "0.28em",
          textTransform: "uppercase",
          color: "rgba(255,255,255,0.28)",
          margin: 0,
          textShadow: "0 1px 8px rgba(0,0,0,0.9)"
        }}>
          Residential & Commercial
        </p>
      </div>

      {/* ── Animated Scroll Bounce Arrow ── */}
      <div style={{
        position: "absolute",
        bottom: "36px",
        right: "28px",
        zIndex: 10
      }}>
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          style={{ animation: "bounceMobile 2s cubic-bezier(0.4,0,0.2,1) infinite" }}
        >
          <path
            d="M8 0 L8 18 M2 12 L8 18 L14 12"
            stroke="rgba(200,149,108,0.7)"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function DesktopHero() {
  /* refs */
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef<number>(-1);
  const rafRef = useRef<number>(0);

  // ── NEW: store the live smooth progress in a ref so the RAF loop
  //    can read it every tick without waiting for React re-renders ──
  const liveProgressRef = useRef<number>(0);

  /* state */
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* ── preload all frames ─────────────────────────────────────── */
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = new Array(TOTAL_FRAMES);

    const promises = Array.from({ length: TOTAL_FRAMES }, (_, i) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = framePath(i + 10); // 00010.png … 00192.png
        img.onload = () => {
          images[i] = img;
          loadedCount++;
          setLoadProgress(loadedCount / TOTAL_FRAMES);
          resolve();
        };
        img.onerror = () => {
          loadedCount++;
          setLoadProgress(loadedCount / TOTAL_FRAMES);
          resolve();
        };
      });
    });

    Promise.all(promises).then(() => {
      imagesRef.current = images;
      drawBlended(0);
      setTimeout(() => setLoaded(true), 100);
    });

    return () => cancelAnimationFrame(rafRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── resize handler ─────────────────────────────────────────── */
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    const ctx = canvas.getContext("2d");
    if (ctx) ctx.scale(dpr, dpr);
    if (lastFrameRef.current >= 0) drawBlended(liveProgressRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  /* ── draw with sub-frame alpha blending ─────────────────────── */
  const drawBlended = useCallback((progress: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const w = window.innerWidth;
    const h = window.innerHeight;

    const exactFrame = Math.min(TOTAL_FRAMES - 1, progress * TOTAL_FRAMES);
    const frameA = Math.floor(exactFrame);
    const frameB = Math.min(TOTAL_FRAMES - 1, frameA + 1);
    const blend = exactFrame - frameA;

    const imgA = imagesRef.current[frameA];
    const imgB = imagesRef.current[frameB];

    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = BG;
    ctx.fillRect(0, 0, w, h);

    if (imgA) drawCover(ctx, imgA, w, h);

    if (imgB && blend > 0.01) {
      ctx.save();
      ctx.globalAlpha = blend;
      drawCover(ctx, imgB, w, h);
      ctx.restore();
    }

    lastFrameRef.current = frameA;
  }, []);

  /* ── continuous RAF render loop ─────────────────────────────── */
  useEffect(() => {
    let animId: number;

    const loop = () => {
      drawBlended(liveProgressRef.current);
      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [drawBlended]);

  /* ── scroll → spring → frame mapping ───────────────────────── */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 55,
    damping: 28,
    mass: 1.2,
    restDelta: 0.0001,
  });

  useMotionValueEvent(smoothProgress, "change", (v) => {
    liveProgressRef.current = v;
    setScrollProgress(v);
  });

  /* ── text beat visibility ───────────────────────────────────── */
  const getOpacity = (beat: TextBeat) => {
    const { startProgress: s, endProgress: e } = beat;
    const fadeIn = s + 0.02;
    const fadeOut = e - 0.02;
    if (scrollProgress < s || scrollProgress > e) return 0;
    if (scrollProgress < fadeIn) return (scrollProgress - s) / (fadeIn - s);
    if (scrollProgress > fadeOut) return (e - scrollProgress) / (e - fadeOut);
    return 1;
  };

  /* ── position style builder ─────────────────────────────────── */
  const getPositionStyle = (
    pos: TextBeat["position"],
    opacity: number
  ): { className: string; style: React.CSSProperties } => {
    const ySlide = (1 - opacity) * 16;

    switch (pos) {
      case "center-top":
        return {
          className: "text-center items-center",
          style: {
            top: "18%",
            left: "50%",
            transform: `translateX(-50%) translateY(${ySlide}px)`,
          },
        };
      case "left-center":
        return {
          className: "text-left items-start",
          style: {
            top: "50%",
            left: "8vw",
            transform: `translateY(calc(-50% + ${ySlide}px))`,
          },
        };
      case "right-center":
        return {
          className: "text-right items-end",
          style: {
            top: "50%",
            right: "8vw",
            transform: `translateY(calc(-50% + ${ySlide}px))`,
          },
        };
      case "left-bottom":
        return {
          className: "text-left items-start",
          style: {
            bottom: "20%",
            left: "8vw",
            transform: `translateY(${ySlide}px)`,
          },
        };
      case "center-bottom":
        return {
          className: "text-center items-center",
          style: {
            bottom: "18%",
            left: "50%",
            transform: `translateX(-50%) translateY(${ySlide}px)`,
          },
        };
    }
  };

  return (
    <>
      {/* ═══════════ LOADING SCREEN ═══════════ */}
      <AnimatePresence>
        {!loaded && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
            style={{ backgroundColor: BG }}
          >
            <h1
              className="font-display text-4xl md:text-5xl tracking-wide text-stone-900/90 mb-8"
            >
              Decorpot
            </h1>
            <div className="progress-track">
              <div
                className="progress-fill"
                style={{ width: `${loadProgress * 100}%` }}
              />
            </div>
            <p className="font-body text-xs tracking-[0.2em] text-stone-500/75 mt-6 uppercase">
              Preparing your space…
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══════════ SCROLLYTELLING CANVAS ═══════════ */}
      <div
        ref={containerRef}
        style={{ position: "relative", height: "400vh" }}
      >
        <div
          style={{
            position: "sticky",
            top: "0px",
            height: "100vh",
            width: "100%",
            overflow: "hidden",
            backgroundColor: BG,
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              backgroundColor: BG,
            }}
          />

          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              right: "0px",
              height: "20%",
              pointerEvents: "none",
              zIndex: 5,
              background: "linear-gradient(to bottom, rgba(10, 9, 8, 0.4) 0%, transparent 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "0px",
              left: "0px",
              right: "0px",
              height: "35%",
              pointerEvents: "none",
              zIndex: 5,
              background: "linear-gradient(to top, rgba(10, 9, 8, 0.45) 0%, rgba(10, 9, 8, 0.15) 40%, transparent 100%)",
            }}
          />

          {/* ── text overlays ─── */}
          {TEXT_BEATS.map((beat, i) => {
            const opacity = getOpacity(beat);
            if (opacity <= 0) return null;
            const pos = getPositionStyle(beat.position, opacity);
            return (
              <div
                key={i}
                className={`absolute flex flex-col pointer-events-none max-w-[90vw]
                  max-md:!left-1/2 max-md:!right-auto max-md:!text-center max-md:!items-center max-md:!bottom-auto max-md:px-6
                  ${pos.className}`}
                style={{
                  opacity,
                  ...pos.style,
                }}
              >
                <h2
                  className="font-display italic tracking-wide leading-tight"
                  style={{
                    color: "#FFFFFF",
                    fontSize: "clamp(36px, 4vw, 64px)",
                    fontWeight: 300,
                    textShadow: "0 1px 40px rgba(0,0,0,0.9), 0 1px 12px rgba(0,0,0,0.7), 0 0 80px rgba(0,0,0,0.5)",
                  }}
                >
                  {beat.heading}
                </h2>
                <p
                  className="font-body"
                  style={{
                    color: "rgba(255,255,255,0.82)",
                    fontSize: "clamp(12px, 1.2vw, 15px)",
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    marginTop: "10px",
                    textShadow: "0 1px 20px rgba(0,0,0,0.95), 0 1px 8px rgba(0,0,0,0.8)",
                  }}
                >
                  {beat.subtext}
                </p>
                {beat.cta && (
                  <a
                    href="#contact"
                    className="pointer-events-auto mt-6 md:mt-8 inline-block px-8 py-3 font-body text-xs md:text-sm tracking-[0.15em] uppercase transition-all duration-300
                      max-md:w-full max-md:text-center"
                    style={{
                      border: "1px solid rgba(255,255,255,0.5)",
                      color: "rgba(255,255,255,0.9)",
                      boxShadow: "0 0 40px rgba(0,0,0,0.4)",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "rgba(255,255,255,0.15)";
                      el.style.borderColor = "rgba(255,255,255,0.8)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.backgroundColor = "transparent";
                      el.style.borderColor = "rgba(255,255,255,0.5)";
                    }}
                  >
                    {beat.cta}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default function DecorpotScroll() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (isMobile) {
    return <MobileHero />;
  }

  return <DesktopHero />;
}