"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

/* ─── Logo SVG — outer square + inner rotated diamond ───────────── */
const LogoMark = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="24" height="24" />
    <rect x="8" y="8" width="12" height="12" transform="rotate(45 14 14)" />
  </svg>
);

/* ─── Component ─────────────────────────────────────────────────── */
export default function CookscapeNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const barWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  /* scroll listener */
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      const pct = total > 0 ? Math.min(1, y / total) : 0;
      setScrollPercent(pct);
      setIsScrolled(y > total * 0.08);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body when drawer open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* ─── color helpers ─── */
  const wordmarkColor = isScrolled
    ? "#1A1714"
    : "rgba(255,255,255,0.92)";
  const subColor = isScrolled
    ? "rgba(26,23,20,0.38)"
    : "rgba(255,255,255,0.45)";
  const logoColor = isScrolled
    ? "#C8956C"
    : "rgba(255,255,255,0.92)";
  const hamburgerColor = isScrolled ? "#1A1714" : "#fff";
  const linkColor = isScrolled
    ? "rgba(26,23,20,0.6)"
    : "rgba(255,255,255,0.75)";
  const linkHoverClass = isScrolled
    ? "nav-link-scrolled"
    : "nav-link-hero";

  const navLinks = ["Work", "Studio", "Process", "Contact"];

  return (
    <>
      {/* ═══════════ NAVBAR ═══════════ */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 55,
          paddingTop: "env(safe-area-inset-top, 0px)",
          height: isScrolled ? 64 : 72,
          background: isScrolled
            ? "rgba(245,237,224,0.82)"
            : "transparent",
          backdropFilter: isScrolled
            ? "blur(20px) saturate(1.4)"
            : "none",
          WebkitBackdropFilter: isScrolled
            ? "blur(20px) saturate(1.4)"
            : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(200,149,108,0.18)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 1px 40px rgba(15,14,13,0.06)"
            : "none",
          transition: "all 500ms cubic-bezier(0.4,0,0.2,1)",
          overflow: "hidden",
        }}
      >
        {/* single inner row */}
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
          className="max-md:!px-5"
        >
          {/* ── LEFT: Logo + Wordmark ── */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              flexShrink: 0,
            }}
          >
            <div
              style={{
                color: logoColor,
                transition: "color 400ms ease",
                display: "flex",
                alignItems: "center",
                flexShrink: 0,
              }}
            >
              <LogoMark />
            </div>
            <div>
              <div
                style={{
                  fontFamily:
                    "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 26,
                  fontWeight: 400,
                  letterSpacing: "0.12em",
                  color: wordmarkColor,
                  transition: "color 400ms ease",
                  lineHeight: 1.1,
                }}
              >
                Cookscape
              </div>
              <div
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 8.5,
                  letterSpacing: "0.38em",
                  textTransform: "uppercase" as const,
                  color: subColor,
                  transition: "color 400ms ease",
                  marginTop: 2,
                }}
              >
                Luxury Interiors
              </div>
            </div>
          </div>

          {/* ── RIGHT: Links + CTA (desktop, single row) ── */}
          <div
            className="nav-desktop"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 40,
              marginRight: 0,
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className={linkHoverClass}
                style={{
                  fontFamily:
                    "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: isScrolled ? 11 : 12,
                  letterSpacing: isScrolled ? "0.2em" : "0.18em",
                  textTransform: "uppercase" as const,
                  color: linkColor,
                  textDecoration: "none",
                  transition: "color 200ms, font-size 400ms ease",
                  position: "relative" as const,
                  whiteSpace: "nowrap" as const,
                  display: "inline-block",
                  padding: 0,
                  margin: 0,
                }}
              >
                {link}
              </a>
            ))}

            {/* CTA button */}
            <a
              href="#contact"
              data-scrolled={isScrolled ? "true" : "false"}
              className="nav-cta-btn"
              style={{
                display: "inline-block",
                padding: "10px 24px",
                fontFamily:
                  "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                border: isScrolled
                  ? "1px solid #1A1714"
                  : "1px solid rgba(255,255,255,0.4)",
                background: isScrolled ? "#1A1714" : "transparent",
                color: isScrolled
                  ? "#F5EDE0"
                  : "rgba(255,255,255,0.9)",
                transition: "all 300ms ease",
                whiteSpace: "nowrap" as const,
                marginLeft: 4,
              }}
            >
              Get in Touch
            </a>
          </div>

          {/* ── HAMBURGER (mobile) ── */}
          <button
            onClick={() => setMenuOpen(true)}
            className="nav-mobile-only"
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 5,
              width: 40,
              height: 40,
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
            aria-label="Open menu"
          >
            <span style={{
              display: "block",
              width: 22,
              height: 1.5,
              backgroundColor: hamburgerColor,
              transition: "background-color 400ms ease"
            }} />
            <span style={{
              display: "block",
              width: 22,
              height: 1.5,
              backgroundColor: hamburgerColor,
              transition: "background-color 400ms ease"
            }} />
            <span style={{
              display: "block",
              width: 14,
              height: 1.5,
              alignSelf: "flex-start",
              backgroundColor: hamburgerColor,
              transition: "background-color 400ms ease"
            }} />
          </button>
        </div>

        {/* ── scroll progress bar ── */}
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 2,
            width: barWidth,
            transformOrigin: "left",
            backgroundColor: "#C8956C",
            opacity: isScrolled ? 1 : 0,
            pointerEvents: "none",
            zIndex: 10,
          }}
        />
      </nav>

      {/* ═══════════ MOBILE DRAWER ═══════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 100,
              backgroundColor: "#0F0E0D",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflowY: "auto",
            }}
          >
            {/* close button */}
            <button
              onClick={() => setMenuOpen(false)}
              style={{
                position: "absolute",
                top: 24,
                right: 24,
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#F5EDE0",
                fontFamily:
                  "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 24,
                lineHeight: 1,
                padding: 8,
              }}
              aria-label="Close menu"
            >
              &#x2715;
            </button>

            {/* wordmark */}
            <p
              style={{
                fontFamily:
                  "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: 36,
                color: "#F5EDE0",
                marginTop: 80,
                letterSpacing: "0.08em",
              }}
            >
              Cookscape
            </p>

            {/* nav links */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginTop: 48,
              }}
            >
              {["Work", "Studio", "Process", "Contact"].map(
                (link) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    className="mobile-drawer-link"
                    style={{
                      fontFamily:
                        "var(--font-cormorant), 'Cormorant Garamond', serif",
                      fontStyle: "italic",
                      fontSize: 48,
                      color: "rgba(245,237,224,0.85)",
                      textDecoration: "none",
                      lineHeight: 1.6,
                      transition: "color 200ms",
                    }}
                  >
                    {link}
                  </a>
                )
              )}
            </div>

            {/* CTA */}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                marginTop: 48,
                padding: "14px 48px",
                border: "1px solid #C8956C",
                color: "#C8956C",
                background: "transparent",
                fontFamily:
                  "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 12,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                textDecoration: "none",
                textAlign: "center" as const,
              }}
            >
              Get in Touch
            </a>

            {/* bottom social text links */}
            <div
              style={{
                position: "absolute",
                bottom: 40,
                display: "flex",
                gap: 24,
              }}
            >
              {["Instagram", "Houzz", "LinkedIn"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="mobile-social-link"
                  style={{
                    fontFamily:
                      "var(--font-dm-sans), 'DM Sans', sans-serif",
                    fontSize: 10,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase" as const,
                    color: "rgba(245,237,224,0.3)",
                    textDecoration: "none",
                    transition: "color 200ms",
                  }}
                >
                  {s}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
