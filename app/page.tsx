"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import DecorpotScroll from "@/components/DecorpotScroll";
import DecorpotNav from "@/components/DecorpotNav";

function ProjectCardImage({ project }: { project: any }) {
  return (
    <>
      <div
        className="project-card-inner"
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: project.bg,
        }}
      >
        <img
          src={project.image}
          alt={project.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            display: "block",
          }}
        />
      </div>
      <div className="card-hover-overlay opacity-100 lg:opacity-0 group">
        <div className="card-hover-info translate-y-0 lg:translate-y-2 lg:group-hover:translate-y-0">
          <p
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: 22,
              fontStyle: "italic",
              color: "#fff",
              marginBottom: 4,
            }}
          >
            {project.name}
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#C8956C",
            }}
          >
            {project.location}
          </p>
        </div>
      </div>
    </>
  );
}

/* ═══════════════════════════════════════════════════════════════
   SVG ICONS — thin-line editorial style, 28×28, stroke #C8956C
   ═══════════════════════════════════════════════════════════════ */

const SpatialIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    stroke="#C8956C"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="24" height="24" />
    <line x1="2" y1="14" x2="26" y2="14" />
    <line x1="14" y1="2" x2="14" y2="26" />
    <line x1="8" y1="8" x2="14" y2="8" />
    <line x1="8" y1="8" x2="8" y2="14" />
  </svg>
);

const MaterialIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    stroke="#C8956C"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="4" width="16" height="12" />
    <rect x="10" y="12" width="16" height="12" />
    <line x1="6" y1="8" x2="14" y2="8" />
    <line x1="14" y1="18" x2="22" y2="18" />
    <circle cx="21" cy="7" r="3.5" />
  </svg>
);

const TurnkeyIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    stroke="#C8956C"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 26V12L14 3L24 12V26H4Z" />
    <polyline points="10 18 13 21 19 14" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════
   SOCIAL ICONS — 20×20, editorial thin line
   ═══════════════════════════════════════════════════════════════ */

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const HouzzIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 3v18" />
    <path d="M5 8l7 4 7-4" />
    <path d="M5 16l7-4 7 4" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="3" />
    <line x1="8" y1="11" x2="8" y2="17" />
    <line x1="8" y1="7" x2="8" y2="7.01" />
    <path d="M12 17v-4a2 2 0 0 1 4 0v4" />
    <line x1="12" y1="11" x2="12" y2="17" />
  </svg>
);

/* ═══════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════ */

const services = [
  {
    Icon: SpatialIcon,
    heading: "Spatial Planning",
    body: "From raw shell to refined residence — we design every square foot with intent.",
  },
  {
    Icon: MaterialIcon,
    heading: "Material Curation",
    body: "Stone, textile, metal, wood — sourced globally, selected with precision.",
  },
  {
    Icon: TurnkeyIcon,
    heading: "Turnkey Delivery",
    body: "We manage every vendor, craftsman and timeline. You walk in. It\u2019s perfect.",
  },
];

const projects = [
  { name: "The Marble Residence", location: "Mumbai", bg: "#D4C5B0", image: "/projects/marble_residence.png?v=1" },
  { name: "Zenith Penthouse", location: "Delhi", bg: "#C8B89A", image: "/projects/zenith_penthouse.png?v=1" },
  { name: "The Ivory House", location: "Bangalore", bg: "#BFB09A", image: "/projects/ivory_house.png?v=1" },
  { name: "Studio Alto", location: "Chennai", bg: "#D4C5B0", image: "/projects/studio_alto.png?v=1" },
  { name: "Verdant Villa", location: "Hyderabad", bg: "#C8B89A", image: "/projects/verdant_villa.png?v=1" },
];

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We listen deeply to understand how you live, what you love, and what the space demands.",
  },
  {
    num: "02",
    title: "Concept",
    desc: "Mood boards, spatial layouts and material palettes crafted to tell your story.",
  },
  {
    num: "03",
    title: "Execution",
    desc: "Every craftsman, vendor and timeline managed with obsessive precision.",
  },
  {
    num: "04",
    title: "Handover",
    desc: "You walk in. Nothing left to do. The space is exactly as imagined.",
  },
];

const testimonials = [
  {
    quote:
      "Decorpot didn\u2019t just design our home \u2014 they understood how we wanted to feel in it. Every room is exactly right.",
    name: "Ananya & Rohan Mehta",
    detail: "Private Residence, Mumbai",
  },
  {
    quote:
      "The process was effortless. We were consulted at every step but never overwhelmed. The result exceeded everything we imagined.",
    name: "Vikram Nair",
    detail: "Penthouse, Bangalore",
  },
  {
    quote:
      "Our office needed to feel like a home. Decorpot delivered something that inspires everyone who walks through the door.",
    name: "Priya Chandrasekaran",
    detail: "Studio Workspace, Chennai",
  },
];

/* ═══════════════════════════════════════════════════════════════
   ANIMATION VARIANTS
   ═══════════════════════════════════════════════════════════════ */

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const, delay },
  },
});

const fadeUpLarge = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" as const, delay },
  },
});

const fadeUpSmall = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay },
  },
});

const VP = { once: true, margin: "-100px" as const };

/* ═══════════════════════════════════════════════════════════════
   SECTION HEADER COMPONENT
   ═══════════════════════════════════════════════════════════════ */

function SectionHeader({
  label,
  heading,
  light = false,
}: {
  label: string;
  heading: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <p
        style={{
          fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
          fontSize: 11,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
          color: "#C8956C",
          marginBottom: 16,
        }}
      >
        {label}
      </p>
      <h2
        style={{
          fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
          fontSize: "clamp(32px, 6vw, 56px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: light ? "#F5EDE0" : "#1c1917",
          marginBottom: 72,
          lineHeight: 1.2,
        }}
        className="text-[clamp(32px,6vw,56px)] max-md:!text-[42px] max-md:!mb-12"
      >
        {heading}
      </h2>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════════ */

export default function Home() {
  return (
    <main style={{ backgroundColor: "#F5EDE0" }}>
      {/* ═══ Navigation ═══ */}
      <DecorpotNav />

      {/* ═══ Scroll Sequence ═══ */}
      <DecorpotScroll />

      {/* ═══════════════════════════════════════════════════════
          SECTION 1 — THREE COLUMN SERVICES GRID
          ═══════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F5EDE0", padding: "120px 0" }}
        className="py-16 lg:py-[120px] px-6 lg:px-12 max-md:!py-[72px]"
      >
        <SectionHeader label="OUR SERVICES" heading="What We Do" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 48,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 48px",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12 lg:px-[48px] max-md:!grid-cols-1 max-md:!gap-10 max-md:!px-6"
        >
          {services.map(({ Icon, heading, body }, i) => (
            <motion.div
              key={heading}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
            >
              {/* brass rule */}
              <div style={{ width: "100%", height: 1, backgroundColor: "#C8956C", marginBottom: 32 }} />
              {/* icon */}
              <Icon />
              {/* heading */}
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 28,
                  fontWeight: 400,
                  color: "#1c1917",
                  marginTop: 20,
                }}
              >
                {heading}
              </h3>
              {/* body */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 15,
                  color: "#78716c",
                  lineHeight: 1.7,
                  marginTop: 12,
                }}
              >
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2 — PHILOSOPHY QUOTE BLOCK
          ═══════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#0F0E0D", padding: "140px 24px" }}
        className="py-16 lg:py-[120px] px-6 lg:px-12 max-md:!py-[80px]"
      >
        <motion.div
          variants={fadeUpLarge()}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}
        >
          {/* top brass line */}
          <div
            style={{
              width: 1,
              height: 40,
              backgroundColor: "#C8956C",
              margin: "0 auto 48px",
            }}
          />

          {/* quote */}
          <blockquote
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 300,
              color: "#F5EDE0",
              lineHeight: 1.4,
            }}
            className="text-[clamp(32px,6vw,56px)] max-md:!text-[36px]"
          >
            <span
              style={{
                color: "#C8956C",
                fontSize: 80,
                lineHeight: 0,
                verticalAlign: "-0.3em",
                marginRight: 4,
              }}
              className="max-md:!text-[56px]"
            >
              &ldquo;
            </span>
            A great interior doesn&rsquo;t shout. It resonates.&rdquo;
          </blockquote>

          {/* attribution */}
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#C8956C",
              marginTop: 40,
            }}
          >
            — DECORPOT DESIGN PHILOSOPHY
          </p>

          {/* bottom brass line */}
          <div
            style={{
              width: 1,
              height: 40,
              backgroundColor: "#C8956C",
              margin: "48px auto 0",
            }}
          />
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3 — FEATURED PROJECTS GRID
          ═══════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F5EDE0", padding: "120px 0" }}
        className="py-16 lg:py-[120px] px-6 lg:px-12 max-md:!py-[72px]"
      >
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#C8956C",
              marginBottom: 16,
            }}
          >
            SELECTED WORKS
          </p>
          <h2
            style={{
              fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 300,
              fontStyle: "italic",
              color: "#1c1917",
            }}
            className="text-[clamp(32px,6vw,56px)]"
          >
            Spaces We've Transformed
          </h2>
        </div>

        <div
          style={{ maxWidth: 1200, margin: "0 auto", padding: "0 48px" }}
          className="px-6 md:px-12 lg:px-[48px] max-md:!px-6"
        >
          {/* ROW 1 — two unequal columns */}
          <motion.div
            variants={fadeUpLarge()}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            style={{ display: "flex", gap: 24, marginBottom: 24 }}
            className="flex-col lg:flex-row max-md:!flex-col"
          >
            {/* Large left */}
            <div className="project-card w-full lg:w-[58%] aspect-video lg:aspect-auto max-md:!w-full" style={{ width: "58%", aspectRatio: "4/3" }}>
              <ProjectCardImage project={projects[0]} />
            </div>

            {/* Tall right */}
            <div className="project-card w-full lg:w-[38%] aspect-video lg:aspect-auto max-md:!w-full" style={{ width: "42%", aspectRatio: "3/4" }}>
              <ProjectCardImage project={projects[1]} />
            </div>
          </motion.div>

          {/* ROW 2 — three equal columns */}
          <motion.div
            variants={fadeUpLarge(0.15)}
            initial="hidden"
            whileInView="visible"
            viewport={VP}
            style={{ display: "flex", gap: 24 }}
            className="grid-cols-1 md:grid-cols-3 max-md:!flex-col"
          >
            {projects.slice(2).map((p) => (
              <div
                key={p.name}
                className="project-card max-md:!w-full"
                style={{ width: "33.333%", aspectRatio: "4/3" }}
              >
                <ProjectCardImage project={p} />
              </div>
            ))}
          </motion.div>

          {/* View all link */}
          <div style={{ textAlign: "center", marginTop: 56 }}>
            <a
              href="#"
              className="link-underline"
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 14,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#1c1917",
                textDecoration: "none",
              }}
            >
              View All Projects &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 4 — PROCESS TIMELINE
          ═══════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#1A1714", padding: "120px 0" }}
        className="py-16 lg:py-[120px] px-6 lg:px-12 max-md:!py-[72px]"
      >
        <SectionHeader label="THE PROCESS" heading="How We Work" light />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 0,
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 48px",
            position: "relative",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-6 md:px-12 lg:px-[48px] max-md:!grid-cols-1 max-md:!gap-12 max-md:!px-6"
        >
          {/* connector line (desktop only) */}
          <div
            className="hidden lg:block max-md:!hidden"
            style={{
              position: "absolute",
              top: 24,
              left: "calc(48px + 24px)",
              right: "calc(48px + 24px)",
              height: 1,
              backgroundColor: "#C8956C",
              opacity: 0.4,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              variants={fadeUpSmall(i * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* step circle */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1px solid #C8956C",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 20,
                  color: "#C8956C",
                  backgroundColor: "#1A1714",
                }}
              >
                {step.num}
              </div>

              {/* step title */}
              <h3
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 24,
                  fontWeight: 400,
                  color: "#F5EDE0",
                  marginTop: 24,
                }}
              >
                {step.title}
              </h3>

              {/* step desc */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 14,
                  color: "rgba(245,237,224,0.55)",
                  lineHeight: 1.7,
                  marginTop: 12,
                  maxWidth: 220,
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5A — TESTIMONIALS
          ═══════════════════════════════════════════════════════ */}
      <section
        style={{ backgroundColor: "#F5EDE0", padding: "120px 0 80px" }}
        className="py-16 lg:py-[120px] px-6 lg:px-12 max-md:!py-[72px]"
      >
        <SectionHeader label="CLIENT STORIES" heading="What Our Clients Say" />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 32,
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 48px",
          }}
          className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-6 md:px-12 lg:px-[48px] max-md:!grid-cols-1 max-md:!gap-8 max-md:!px-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={VP}
              style={{
                backgroundColor: "#FFFAF5",
                border: "1px solid rgba(200,149,108,0.2)",
                padding: 40,
              }}
              className="max-md:!p-7"
            >
              {/* opening quote mark */}
              <span
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontSize: 72,
                  lineHeight: 1,
                  color: "#C8956C",
                  opacity: 0.6,
                  display: "block",
                }}
              >
                &ldquo;
              </span>

              {/* quote body */}
              <p
                style={{
                  fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontSize: 20,
                  color: "#44403c",
                  lineHeight: 1.7,
                  marginTop: 8,
                }}
              >
                {t.quote}
              </p>

              {/* divider */}
              <div
                style={{
                  height: 1,
                  backgroundColor: "#C8956C",
                  opacity: 0.3,
                  margin: "28px 0",
                }}
              />

              {/* client name */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "#1c1917",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {t.name}
              </p>

              {/* client detail */}
              <p
                style={{
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 12,
                  color: "#a8a29e",
                  marginTop: 4,
                }}
              >
                {t.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 5B — CTA BAND
          ═══════════════════════════════════════════════════════ */}
      <section style={{ backgroundColor: "#C8956C", padding: "80px 0" }} className="py-16 lg:py-[120px] px-6 lg:px-12 max-md:!py-[80px]">
        <motion.div
          variants={fadeUp()}
          initial="hidden"
          whileInView="visible"
          viewport={VP}
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            padding: "0 48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
          className="flex-col lg:flex-row max-md:!flex-col max-md:!text-center max-md:!gap-10 max-md:!px-6"
        >
          {/* left */}
          <div>
            <h2
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 6vw, 56px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "#0F0E0D",
                lineHeight: 1.2,
              }}
              className="text-[clamp(32px,6vw,56px)] max-md:!text-[36px]"
            >
              Ready to Transform Your Space?
            </h2>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 15,
                color: "rgba(15,14,13,0.65)",
                marginTop: 12,
              }}
            >
              Let&rsquo;s begin with a conversation.
            </p>
          </div>

          {/* right — buttons */}
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="w-full lg:w-auto max-md:!items-center max-md:!w-full"
          >
            <a
              href="#contact"
              style={{
                display: "inline-block",
                backgroundColor: "#0F0E0D",
                color: "#F5EDE0",
                padding: "16px 40px",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textDecoration: "none",
                textAlign: "center",
                transition: "background-color 300ms",
              }}
              className="max-md:!w-full"
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#1A1714")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.backgroundColor = "#0F0E0D")
              }
            >
              Book a Consultation
            </a>
            <a
              href="#work"
              style={{
                display: "inline-block",
                backgroundColor: "transparent",
                color: "#0F0E0D",
                padding: "16px 40px",
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                textDecoration: "none",
                textAlign: "center",
                border: "1px solid rgba(15,14,13,0.4)",
                marginTop: 12,
                transition: "border-color 300ms",
              }}
              className="max-md:!w-full"
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.borderColor = "#0F0E0D")
              }
              onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.borderColor =
                "rgba(15,14,13,0.4)")
              }
            >
              View Our Portfolio &rarr;
            </a>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          FOOTER
          ═══════════════════════════════════════════════════════ */}
      <footer style={{ backgroundColor: "#0F0E0D" }}>
        {/* TOP ROW */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "60px 48px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gap: 48,
          }}
          className="grid-cols-1 lg:grid-cols-3 max-md:!grid-cols-1 max-md:!gap-10 max-md:!px-6 max-md:!py-12 max-md:!text-center"
        >
          {/* Left — brand */}
          <div className="text-center lg:text-left items-center lg:items-start">
            <p
              style={{
                fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif",
                fontSize: 32,
                color: "#F5EDE0",
                letterSpacing: "0.04em",
              }}
            >
              Decorpot
            </p>
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 12,
                color: "rgba(245,237,224,0.4)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: 8,
              }}
            >
              Luxury Interior Design Studio
            </p>
          </div>

          {/* Center — nav */}
          <div className="text-center lg:text-left items-center lg:items-start">
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 10,
                color: "#C8956C",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              NAVIGATE
            </p>
            {["Work", "Studio", "Process", "Contact"].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                style={{
                  display: "block",
                  fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                  fontSize: 13,
                  color: "rgba(245,237,224,0.6)",
                  textDecoration: "none",
                  lineHeight: 2.2,
                  transition: "color 200ms",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#F5EDE0")
                }
                onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color =
                  "rgba(245,237,224,0.6)")
                }
              >
                {link}
              </a>
            ))}
          </div>

          {/* Right — social */}
          <div className="text-center lg:text-left items-center lg:items-start max-md:!flex max-md:!flex-col max-md:!items-center">
            <p
              style={{
                fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
                fontSize: 10,
                color: "#C8956C",
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              FOLLOW
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              {[
                { Icon: InstagramIcon, label: "Instagram" },
                { Icon: HouzzIcon, label: "Houzz" },
                { Icon: LinkedInIcon, label: "LinkedIn" },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  style={{
                    color: "rgba(245,237,224,0.6)",
                    transition: "color 200ms",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#C8956C")
                  }
                  onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(245,237,224,0.6)")
                  }
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div
          style={{
            borderTop: "1px solid rgba(200,149,108,0.2)",
            maxWidth: 1200,
            margin: "0 auto",
            padding: "24px 48px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="flex-col lg:flex-row text-center lg:text-left gap-y-2 lg:gap-y-0 max-md:!flex-col max-md:!gap-3 max-md:!px-6 max-md:!text-center"
        >
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11,
              color: "rgba(245,237,224,0.3)",
            }}
          >
            &copy; 2025 Decorpot. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "var(--font-dm-sans), 'DM Sans', sans-serif",
              fontSize: 11,
              color: "rgba(245,237,224,0.3)",
              fontStyle: "italic",
            }}
          >
            Crafted with intention.
          </p>
        </div>
      </footer>
    </main>
  );
}
