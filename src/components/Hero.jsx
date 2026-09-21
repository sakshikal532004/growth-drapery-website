import React, { useEffect, useState } from "react";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [slidePhase, setSlidePhase] = useState("visible"); // "visible" | "folding" | "unfolding"
  const [displaySlide, setDisplaySlide] = useState(0);

  const slides = [
    {
      image: "/images/homepage.jpeg",
      category: "Featured",
      title: "Dress Your Dreams On Stage",
      subtitle: "Costumes for every story — rental dresses for all performances.",
      accent: "#c6a452",
    },
    {
      image: "/images/western/western 1.jpeg",
      category: "Western Dance",
      title: "Own the Stage",
      subtitle: "Bold looks designed for energetic performances.",
      accent: "#d4764e",
    },
    {
      image: "/images/traditional/traditional 1.jpeg",
      category: "Traditional & Folk",
      title: "Celebrate Tradition",
      subtitle: "Beautiful costumes for cultural performances.",
      accent: "#6ba58a",
    },
    {
      image: "/images/events/events 3.jpeg",
      category: "Stage & Events",
      title: "Make Your Event Special",
      subtitle: "Performance-ready costumes for every celebration.",
      accent: "#cf6b6b",
    },
  ];

  /* ---- Scroll ---- */
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h);
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* ---- Auto slider with paper fold ---- */
  useEffect(() => {
    const interval = setInterval(() => {
      setSlidePhase("folding");
      setTimeout(() => {
        setActiveSlide((prev) => {
          const next = (prev + 1) % slides.length;
          setDisplaySlide(next);
          return next;
        });
        setSlidePhase("unfolding");
        setTimeout(() => setSlidePhase("visible"), 700);
      }, 600);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (slidePhase !== "visible") return;
    setSlidePhase("folding");
    setTimeout(() => {
      setActiveSlide((prev) => {
        const next = (prev + 1) % slides.length;
        setDisplaySlide(next);
        return next;
      });
      setSlidePhase("unfolding");
      setTimeout(() => setSlidePhase("visible"), 700);
    }, 600);
  };

  const previousSlide = () => {
    if (slidePhase !== "visible") return;
    setSlidePhase("folding");
    setTimeout(() => {
      setActiveSlide((prev) => {
        const next = (prev - 1 + slides.length) % slides.length;
        setDisplaySlide(next);
        return next;
      });
      setSlidePhase("unfolding");
      setTimeout(() => setSlidePhase("visible"), 700);
    }, 600);
  };

  const current = slides[displaySlide];

  return (
    <>
      <style>{`
        /* =====================================================
           GLOBAL
        ===================================================== */
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0; overflow-x: hidden;
          font-family: 'Segoe UI', system-ui, Arial, sans-serif;
          background: #0e1117;
        }
        #root { width: 100%; min-height: 100vh; }

        /* =====================================================
           NAVBAR
        ===================================================== */
        .navbar {
          position: fixed; top: 0; left: 0; width: 100%;
          z-index: 100; padding: 0;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          background: transparent;
        }
        .navbar-scrolled {
          background: rgba(10, 12, 18, 0.80);
          backdrop-filter: blur(28px) saturate(1.4);
          -webkit-backdrop-filter: blur(28px) saturate(1.4);
          box-shadow: 0 1px 0 rgba(198, 164, 82, 0.10), 0 20px 60px rgba(0,0,0,0.40);
        }
        .navbar-container {
          width: 100%; max-width: 1500px; margin: 0 auto;
          padding: 20px 5%;
          display: flex; align-items: center; justify-content: space-between; gap: 30px;
          transition: padding 0.5s ease;
        }
        .navbar-scrolled .navbar-container { padding: 14px 5%; }

        /* =====================================================
           LOGO
        ===================================================== */
        .logo {
          display: flex; flex-direction: column;
          text-decoration: none; line-height: 1; flex-shrink: 0;
          position: relative;
        }
        .logo-main {
          color: #e8dcc8; font-size: 26px; font-weight: 800;
          letter-spacing: 5px; transition: all 0.3s ease;
        }
        .logo-sub {
          margin-top: 6px; color: #c6a452; font-size: 10px;
          font-weight: 800; letter-spacing: 7px; transition: all 0.3s ease;
        }
        .logo::after {
          content: ""; position: absolute; bottom: -4px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #c6a452, transparent);
          transition: width 0.4s ease;
        }
        .logo:hover::after { width: 100%; }
        .logo:hover .logo-main { color: #fff; }

        /* =====================================================
           NAV LINKS — INNOVATIVE
        ===================================================== */
        .nav-links {
          display: flex; align-items: center; gap: 8px; margin-left: auto;
        }
        .nav-link-item {
          position: relative; overflow: hidden;
          padding: 10px 18px; border-radius: 8px;
          transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .nav-link-item::before {
          content: ""; position: absolute; inset: 0;
          background: rgba(198, 164, 82, 0.08);
          border-radius: 8px; opacity: 0;
          transition: opacity 0.35s ease;
        }
        .nav-link-item:hover::before { opacity: 1; }
        .nav-link-item a {
          position: relative; z-index: 1;
          color: #8a8478; text-decoration: none;
          font-size: 14px; font-weight: 600; letter-spacing: 0.8px;
          transition: color 0.3s ease;
        }
        .nav-link-item:hover a { color: #e8dcc8; }
        .nav-link-item .link-dot {
          position: absolute; bottom: 6px; left: 50%;
          transform: translateX(-50%) scale(0);
          width: 4px; height: 4px; border-radius: 50%;
          background: #c6a452; transition: transform 0.3s ease;
        }
        .nav-link-item:hover .link-dot { transform: translateX(-50%) scale(1); }

        /* ---- Staggered load animation ---- */
        .nav-link-item:nth-child(1) { animation: navSlideIn 0.5s 0.1s cubic-bezier(0.16,1,0.3,1) both; }
        .nav-link-item:nth-child(2) { animation: navSlideIn 0.5s 0.18s cubic-bezier(0.16,1,0.3,1) both; }
        .nav-link-item:nth-child(3) { animation: navSlideIn 0.5s 0.26s cubic-bezier(0.16,1,0.3,1) both; }
        .nav-link-item:nth-child(4) { animation: navSlideIn 0.5s 0.34s cubic-bezier(0.16,1,0.3,1) both; }
        .nav-link-item:nth-child(5) { animation: navSlideIn 0.5s 0.42s cubic-bezier(0.16,1,0.3,1) both; }

        @keyframes navSlideIn {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* =====================================================
           CALL BUTTON
        ===================================================== */
        .nav-contact {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 12px 24px; border-radius: 8px;
          background: linear-gradient(135deg, #c6a452, #a8873a);
          color: #0e1117; text-decoration: none;
          font-size: 13px; font-weight: 700; letter-spacing: 0.5px;
          transition: all 0.35s ease; flex-shrink: 0;
          position: relative; overflow: hidden;
        }
        .nav-contact::before {
          content: ""; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }
        .nav-contact:hover::before { left: 100%; }
        .nav-contact:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(198, 164, 82, 0.35);
        }
        .nav-contact-icon {
          width: 16px; height: 16px; fill: #0e1117;
        }

        /* =====================================================
           HERO
        ===================================================== */
        .hero {
          position: relative; width: 100%; min-height: 100vh;
          overflow: hidden; display: flex; align-items: center;
          background:
            radial-gradient(ellipse at 10% 20%, rgba(198,164,82,0.05), transparent 45%),
            radial-gradient(ellipse at 90% 80%, rgba(198,164,82,0.04), transparent 40%),
            radial-gradient(ellipse at 50% 100%, rgba(30,24,14,0.9), transparent 50%),
            linear-gradient(175deg, #0e1117 0%, #141820 35%, #1a1610 65%, #100e0a 100%);
        }

        /* =====================================================
           BACKGROUND VIDEO — UNCHANGED
        ===================================================== */
        .hero-background-video {
          position: absolute; top: 0; left: 0;
          width: 100%; height: 100%;
          object-fit: cover; z-index: 0;
          opacity: 0.13; pointer-events: none;
          filter: saturate(0.70) contrast(0.90);
          transform: scale(1.02);
        }

        /* =====================================================
           AMBIENT BLOBS
        ===================================================== */
        .liquid-water {
          position: absolute; border-radius: 50%;
          pointer-events: none; z-index: 1; mix-blend-mode: screen;
        }
        .liquid-one {
          width: 520px; height: 520px; left: -200px; top: 8%;
          background: radial-gradient(circle at 45% 40%, rgba(198,164,82,0.10), rgba(198,164,82,0.02) 45%, transparent 72%);
          filter: blur(25px);
          animation: waterFlowOne 11s ease-in-out infinite alternate;
        }
        .liquid-two {
          width: 580px; height: 580px; right: -210px; top: -5%;
          background: radial-gradient(circle at 40% 50%, rgba(160,130,55,0.08), rgba(120,100,40,0.02) 45%, transparent 73%);
          filter: blur(28px);
          animation: waterFlowTwo 13s ease-in-out infinite alternate;
        }
        .liquid-three {
          width: 450px; height: 450px; left: 35%; bottom: -280px;
          background: radial-gradient(circle, rgba(198,164,82,0.06), transparent 50%);
          filter: blur(25px);
          animation: waterFlowThree 12s ease-in-out infinite alternate;
        }
        .water-wave {
          position: absolute; pointer-events: none; z-index: 2;
          border-radius: 48%; opacity: 0.15; filter: blur(10px);
        }
        .wave-one {
          width: 800px; height: 260px; right: -250px; top: 35%;
          background: linear-gradient(120deg, rgba(198,164,82,0.03), rgba(198,164,82,0.10), rgba(198,164,82,0.02));
          transform: rotate(-18deg);
          animation: waveMoveOne 13s ease-in-out infinite alternate;
        }
        .wave-two {
          width: 750px; height: 230px; left: -180px; bottom: 2%;
          background: linear-gradient(120deg, rgba(160,130,55,0.02), rgba(198,164,82,0.08), rgba(140,115,50,0.02));
          transform: rotate(14deg);
          animation: waveMoveTwo 15s ease-in-out infinite alternate;
        }
        .hero-decoration {
          position: absolute; width: 500px; height: 500px;
          right: -190px; bottom: -170px; border-radius: 50%;
          border: 1px solid rgba(198,164,82,0.08);
          pointer-events: none; z-index: 2;
          animation: ringPulse 6s ease-in-out infinite;
        }
        .hero-decoration-two {
          position: absolute; width: 300px; height: 300px;
          right: 8%; top: 10%; border-radius: 50%;
          border: 1px solid rgba(198,164,82,0.06);
          pointer-events: none; z-index: 2;
          animation: ringPulse 7s ease-in-out infinite reverse;
        }
        .drapery-line { position: absolute; pointer-events: none; z-index: 2; }
        .drapery-line-one {
          left: 6%; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(180deg, transparent, rgba(198,164,82,0.06) 30%, rgba(198,164,82,0.10) 50%, rgba(198,164,82,0.06) 70%, transparent);
          animation: lineShimmer 8s ease-in-out infinite;
        }
        .drapery-line-two {
          right: 6%; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(180deg, transparent, rgba(198,164,82,0.04) 30%, rgba(198,164,82,0.08) 50%, rgba(198,164,82,0.04) 70%, transparent);
          animation: lineShimmer 10s ease-in-out infinite reverse;
        }

        /* =====================================================
           HERO CONTENT
        ===================================================== */
        .hero-content {
          width: 100%; max-width: 1550px; margin: 0 auto;
          padding: 120px 4% 50px;
          display: grid; grid-template-columns: 0.72fr 1.28fr;
          align-items: center; gap: 50px;
          position: relative; z-index: 5;
        }

        /* =====================================================
           HERO TEXT
        ===================================================== */
        .hero-text { max-width: 590px; }
        .hero-eyebrow {
          display: inline-flex; align-items: center; gap: 12px;
          margin-bottom: 28px;
          color: #c6a452; font-size: 11px; font-weight: 800;
          letter-spacing: 3.5px; text-transform: uppercase;
          animation: textEnter 0.8s 0.2s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero-eyebrow::before {
          content: ""; width: 40px; height: 2px;
          background: linear-gradient(90deg, #c6a452, transparent);
        }
        .hero-eyebrow::after {
          content: ""; width: 6px; height: 6px; border-radius: 50%;
          background: #c6a452; animation: dotPulse 2s ease-in-out infinite;
        }

        /* =====================================================
           HEADING
        ===================================================== */
        .hero h1 {
          color: #e8dcc8;
          font-size: clamp(56px, 6.2vw, 92px);
          line-height: 0.95; font-weight: 800; letter-spacing: -3px;
          margin-bottom: 26px;
          animation: textEnter 0.9s 0.35s cubic-bezier(0.16,1,0.3,1) both;
        }
        .hero h1 span {
          background: linear-gradient(135deg, #c6a452, #dbb856, #e8c860);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: Georgia, "Times New Roman", serif;
          font-style: italic; font-weight: 600;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */
        .hero-description {
          max-width: 480px; color: #7d7768; font-size: 16px;
          line-height: 1.75; margin-bottom: 32px;
          animation: textEnter 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* =====================================================
           BUTTONS
        ===================================================== */
        .hero-buttons {
          display: flex; align-items: center; gap: 14px;
          animation: textEnter 0.9s 0.65s cubic-bezier(0.16,1,0.3,1) both;
        }
        .btn-primary, .btn-secondary {
          display: inline-flex; align-items: center; justify-content: center;
          padding: 16px 32px; border-radius: 8px;
          text-decoration: none; font-size: 14px; font-weight: 700;
          letter-spacing: 0.5px;
          transition: all 0.35s cubic-bezier(0.4,0,0.2,1);
          position: relative; overflow: hidden;
        }
        .btn-primary {
          background: linear-gradient(135deg, #c6a452, #a8873a);
          color: #0e1117;
          box-shadow: 0 12px 32px rgba(198,164,82,0.25);
        }
        .btn-primary::after {
          content: ""; position: absolute; top: 0; left: -100%;
          width: 100%; height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          transition: left 0.6s ease;
        }
        .btn-primary:hover::after { left: 100%; }
        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 40px rgba(198,164,82,0.35);
        }
        .btn-secondary {
          border: 1px solid rgba(198,164,82,0.30); color: #c6a452;
          background: rgba(198,164,82,0.05);
          backdrop-filter: blur(8px);
        }
        .btn-secondary:hover {
          background: rgba(198,164,82,0.12); border-color: #c6a452;
          color: #dbb856; transform: translateY(-3px);
        }

        /* =====================================================
           META
        ===================================================== */
        .hero-meta {
          display: flex; align-items: center; gap: 28px; margin-top: 42px;
          animation: textEnter 0.9s 0.8s cubic-bezier(0.16,1,0.3,1) both;
        }
        .meta-item { display: flex; flex-direction: column; gap: 6px; }
        .meta-number {
          color: #e8dcc8; font-size: 24px; font-weight: 800;
          letter-spacing: -0.5px;
        }
        .meta-label {
          color: #5c574a; font-size: 10px; letter-spacing: 1.2px;
          text-transform: uppercase; font-weight: 600;
        }
        .meta-divider {
          width: 1px; height: 40px;
          background: rgba(198,164,82,0.12);
        }

        /* =====================================================
           IMAGE AREA
        ===================================================== */
        .hero-visual {
          position: relative; height: 720px; width: 100%;
          display: flex; align-items: center; justify-content: center;
          animation: visualEnter 1s 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }

        /* =====================================================
           IMAGE CARD — PAPER FOLD CONTAINER
        ===================================================== */
        .image-card-wrapper {
          position: relative;
          width: min(100%, 660px); height: 680px;
          perspective: 1800px;
        }
        .image-card {
          position: relative; width: 100%; height: 100%;
          overflow: hidden; border-radius: 220px 220px 28px 28px;
          background: #1a1610;
          box-shadow:
            0 40px 100px rgba(0,0,0,0.50),
            0 0 0 1px rgba(198,164,82,0.08);
          border: 5px solid rgba(26,22,16,0.95);
          transform-style: preserve-3d;
          transform-origin: center center;
          transition: none;
        }

        /* ---- FOLD PHASES ---- */
        .image-card.fold-folding {
          animation: paperFold 0.6s cubic-bezier(0.6,0,0.4,1) forwards;
        }
        .image-card.fold-unfolding {
          animation: paperUnfold 0.7s cubic-bezier(0.16,1,0.3,1) forwards;
        }
        .image-card.fold-visible {
          animation: none;
        }

        @keyframes paperFold {
          0%   { transform: rotateY(0deg) scale(1); opacity: 1; filter: brightness(1); }
          40%  { transform: rotateY(-12deg) scale(0.97); opacity: 1; filter: brightness(0.8); }
          100% { transform: rotateY(-90deg) scale(0.88); opacity: 0; filter: brightness(0.4); }
        }
        @keyframes paperUnfold {
          0%   { transform: rotateY(90deg) scale(0.88); opacity: 0; filter: brightness(0.4); }
          60%  { transform: rotateY(8deg) scale(1.01); opacity: 1; filter: brightness(1.1); }
          100% { transform: rotateY(0deg) scale(1); opacity: 1; filter: brightness(1); }
        }

        /* ---- Fold shadow on wrapper ---- */
        .fold-shadow {
          position: absolute; inset: 0;
          border-radius: 220px 220px 28px 28px;
          pointer-events: none; z-index: 2;
          transition: opacity 0.4s ease;
        }
        .fold-shadow.fold-active {
          background: linear-gradient(90deg, rgba(0,0,0,0.5) 0%, transparent 40%);
          opacity: 1;
        }

        .main-image {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center; display: block;
        }
        .image-gradient {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, transparent 30%, rgba(10,12,16,0.88) 100%);
          pointer-events: none;
        }
        .image-info {
          position: absolute; left: 34px; right: 34px; bottom: 32px;
          z-index: 5; color: #ffffff;
        }
        .image-category {
          display: inline-block; margin-bottom: 10px;
          color: #c6a452; font-size: 10px; font-weight: 800;
          letter-spacing: 3px; text-transform: uppercase;
          padding: 5px 12px; border-radius: 4px;
          background: rgba(198,164,82,0.10);
          border: 1px solid rgba(198,164,82,0.20);
        }
        .image-title {
          font-size: 30px; line-height: 1.1; font-weight: 700;
          margin-bottom: 8px; letter-spacing: -0.5px;
        }
        .image-subtitle {
          max-width: 360px; color: rgba(255,255,255,0.68);
          font-size: 13px; line-height: 1.6;
        }

        /* =====================================================
           FEATURED LABEL
        ===================================================== */
        .floating-label {
          position: absolute; top: 65px; right: -10px; z-index: 10;
          padding: 14px 22px; border-radius: 8px;
          background: rgba(14,17,23,0.75);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(198,164,82,0.20);
          color: #c6a452; font-size: 10px; font-weight: 800;
          letter-spacing: 2px; text-transform: uppercase;
          box-shadow: 0 12px 30px rgba(0,0,0,0.40);
          animation: floatLabel 3s ease-in-out infinite;
        }
        .floating-label .label-line {
          display: block; width: 20px; height: 1px;
          background: rgba(198,164,82,0.40); margin-top: 8px;
        }

        /* =====================================================
           SLIDER CONTROLS
        ===================================================== */
        .slider-controls {
          position: absolute; right: -5px; bottom: 40px;
          display: flex; align-items: center; gap: 10px; z-index: 20;
        }
        .arrow-button {
          width: 46px; height: 46px; border-radius: 8px;
          border: 1px solid rgba(198,164,82,0.25);
          background: rgba(14,17,23,0.80);
          backdrop-filter: blur(8px);
          color: #c6a452; font-size: 18px; cursor: pointer;
          transition: all 0.3s ease;
          display: flex; align-items: center; justify-content: center;
        }
        .arrow-button:hover {
          background: rgba(198,164,82,0.15); border-color: #c6a452;
          color: #dbb856; transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(198,164,82,0.15);
        }

        /* =====================================================
           DOTS
        ===================================================== */
        .slider-dots {
          position: absolute; left: 50%; bottom: 2px;
          transform: translateX(-50%);
          display: flex; align-items: center; gap: 9px; z-index: 20;
        }
        .slider-dot {
          width: 8px; height: 8px; border: none; border-radius: 50%;
          background: rgba(198,164,82,0.20); cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4,0,0.2,1);
        }
        .slider-dot:hover { background: rgba(198,164,82,0.45); }
        .slider-dot.active {
          width: 32px; border-radius: 20px;
          background: linear-gradient(90deg, #c6a452, #dbb856);
        }

        /* =====================================================
           SIDE TEXT
        ===================================================== */
        .visual-side-text {
          position: absolute; left: -34px; top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          color: rgba(198,164,82,0.22); font-size: 9px;
          font-weight: 700; letter-spacing: 6px; text-transform: uppercase;
        }

        /* =====================================================
           ALL KEYFRAMES
        ===================================================== */
        @keyframes waterFlowOne {
          0%   { transform: translate3d(0,0,0) scale(1) rotate(0deg); }
          50%  { transform: translate3d(80px,45px,0) scale(1.12) rotate(8deg); }
          100% { transform: translate3d(140px,-25px,0) scale(0.96) rotate(-5deg); }
        }
        @keyframes waterFlowTwo {
          0%   { transform: translate3d(0,0,0) scale(1); }
          50%  { transform: translate3d(-90px,65px,0) scale(1.13); }
          100% { transform: translate3d(-35px,120px,0) scale(0.94); }
        }
        @keyframes waterFlowThree {
          0%   { transform: translateX(-70px) scale(1); }
          50%  { transform: translateX(70px) scale(1.15); }
          100% { transform: translateX(130px) scale(0.96); }
        }
        @keyframes waveMoveOne {
          0%   { transform: translateX(80px) translateY(0) rotate(-18deg) scale(1); }
          50%  { transform: translateX(-40px) translateY(30px) rotate(-10deg) scale(1.10); }
          100% { transform: translateX(-120px) translateY(-20px) rotate(-22deg) scale(0.96); }
        }
        @keyframes waveMoveTwo {
          0%   { transform: translateX(-50px) translateY(0) rotate(14deg) scale(1); }
          50%  { transform: translateX(80px) translateY(-30px) rotate(7deg) scale(1.12); }
          100% { transform: translateX(150px) translateY(25px) rotate(18deg) scale(0.95); }
        }
        @keyframes ringPulse {
          0%,100% { transform: scale(1); opacity: 0.60; }
          50%     { transform: scale(1.08); opacity: 0.28; }
        }
        @keyframes lineShimmer {
          0%,100% { opacity: 0.5; }
          50%     { opacity: 1; }
        }
        @keyframes textEnter {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes visualEnter {
          from { opacity: 0; transform: translateX(40px) scale(0.96); }
          to   { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes floatLabel {
          0%,100% { transform: translateY(0); }
          50%     { transform: translateY(-8px); }
        }
        @keyframes dotPulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50%     { opacity: 0.4; transform: scale(0.6); }
        }

        /* =====================================================
           TABLET
        ===================================================== */
        @media (max-width: 1050px) {
          .nav-links { gap: 4px; }
          .hero-content { grid-template-columns: 0.80fr 1.20fr; gap: 30px; }
          .hero h1 { font-size: clamp(48px, 5.8vw, 70px); }
          .image-card-wrapper { width: 480px; height: 600px; }
          .hero-visual { height: 650px; }
        }

        /* =====================================================
           MOBILE
        ===================================================== */
        @media (max-width: 750px) {
          .navbar-container { padding: 17px 6%; }
          .navbar-scrolled .navbar-container { padding: 12px 6%; }
          .nav-links { display: none; }
          .logo-main { font-size: 20px; letter-spacing: 3px; }
          .logo-sub { font-size: 8px; letter-spacing: 4px; }
          .nav-contact { padding: 10px 17px; font-size: 12px; }
          .hero { min-height: 100svh; align-items: flex-start; }
          .hero-content {
            padding: 105px 6% 50px;
            display: flex; flex-direction: column; gap: 30px;
          }
          .hero-text { width: 100%; max-width: 100%; }
          .hero-eyebrow { font-size: 9px; letter-spacing: 2px; margin-bottom: 18px; }
          .hero-eyebrow::before { width: 24px; }
          .hero h1 {
            font-size: clamp(40px, 11vw, 58px);
            line-height: 1; letter-spacing: -2px; margin-bottom: 20px;
          }
          .hero-description { font-size: 14px; line-height: 1.7; margin-bottom: 26px; }
          .hero-buttons {
            flex-direction: column; align-items: stretch;
            width: 100%; max-width: 280px;
          }
          .btn-primary, .btn-secondary { width: 100%; }
          .hero-meta { margin-top: 28px; gap: 18px; }
          .meta-number { font-size: 18px; }
          .meta-label { font-size: 9px; }
          .hero-visual { width: 100%; height: 520px; }
          .image-card-wrapper { width: min(84vw, 360px); height: 460px; }
          .image-card { border-radius: 150px 150px 18px 18px; }
          .image-info { left: 22px; right: 22px; bottom: 22px; }
          .image-title { font-size: 22px; }
          .image-subtitle { font-size: 11px; }
          .floating-label { top: 30px; right: 2%; font-size: 8px; padding: 10px 14px; }
          .slider-controls { right: 4%; bottom: 28px; }
          .arrow-button { width: 40px; height: 40px; }
          .slider-dots { bottom: -2px; }
          .visual-side-text { display: none; }
          .hero-decoration { width: 300px; height: 300px; right: -180px; }
          .liquid-one { width: 330px; height: 330px; left: -170px; }
          .liquid-two { width: 380px; height: 380px; right: -210px; }
          .hero-background-video { opacity: 0.09; }
          .drapery-line { display: none; }
        }

        @media (max-width: 400px) {
          .logo-main { font-size: 18px; }
          .logo-sub { font-size: 7px; }
          .nav-contact { padding: 8px 14px; font-size: 11px; }
          .hero-content { padding-top: 100px; }
          .hero h1 { font-size: 36px; }
          .hero-visual { height: 440px; }
          .image-card-wrapper { height: 400px; }
        }
      `}</style>

      {/* ========== NAVBAR ========== */}
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          <a href="#home" className="logo">
            <span className="logo-main">GROWTH</span>
            <span className="logo-sub">DRAPERY</span>
          </a>
          <div className="nav-links">
            {["Home","Collection","Events","About","Contact"].map((name, i) => (
              <div key={name} className="nav-link-item">
                <a href={`#${name.toLowerCase() === "home" ? "home" : name.toLowerCase()}`}>{name}</a>
                <span className="link-dot"></span>
              </div>
            ))}
          </div>
          <a href="tel:7083512250" className="nav-contact">
            <svg className="nav-contact-icon" viewBox="0 0 24 24"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24 11.72 11.72 0 003.68 1.18 1 1 0 01.86.99V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 01.99.86 11.72 11.72 0 001.18 3.68 1 1 0 01-.24 1.01l-2.2 2.2z"/></svg>
            Call Us
          </a>
        </div>
      </nav>

      {/* ========== HERO ========== */}
      <section className="hero" id="home">
        <video className="hero-background-video" autoPlay muted loop playsInline preload="auto" aria-hidden="true">
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        <div className="liquid-water liquid-one"></div>
        <div className="liquid-water liquid-two"></div>
        <div className="liquid-water liquid-three"></div>
        <div className="water-wave wave-one"></div>
        <div className="water-wave wave-two"></div>
        <div className="hero-decoration"></div>
        <div className="hero-decoration-two"></div>
        <div className="drapery-line drapery-line-one"></div>
        <div className="drapery-line drapery-line-two"></div>

        <div className="hero-content">
          {/* LEFT */}
          <div className="hero-text">
            <p className="hero-eyebrow">Rental Costumes & Stage Dresses</p>
            <h1>
              Dress the<br />
              <span>Moment.</span><br />
              Own the Stage.
            </h1>
            <p className="hero-description">
              Discover beautiful rental costumes for school functions, dance competitions, cultural programs, fancy dress and special events.
            </p>
            <div className="hero-buttons">
              <a href="#collection" className="btn-primary">Explore Collection</a>
              
              <a href="#contact" className="btn-secondary">Contact Us</a>
            </div>
            <div className="hero-meta">
              <div className="meta-item">
                <span className="meta-number">15+</span>
                <span className="meta-label">Years Experience</span>
              </div>
              <span className="meta-divider"></span>
              <div className="meta-item">
                <span className="meta-number">100+</span>
                <span className="meta-label">Costume Styles</span>
              </div>
              <span className="meta-divider"></span>
              <div className="meta-item">
                <span className="meta-number">Rental</span>
                <span className="meta-label">Available</span>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hero-visual">
            <div className="visual-side-text">Growth Drapery Collection</div>
            <div className="floating-label">
              ✦ Featured Look
              <span className="label-line"></span>
            </div>

            <div className="image-card-wrapper">
              <div className={`image-card fold-${slidePhase}`}>
                <img key={displaySlide} src={current.image} alt={current.category} className="main-image" />
                <div className="image-gradient"></div>
                <div className="image-info">
                  <span className="image-category">{current.category}</span>
                  <h2 className="image-title">{current.title}</h2>
                  <p className="image-subtitle">{current.subtitle}</p>
                </div>
              </div>
              <div className={`fold-shadow ${slidePhase === "folding" ? "fold-active" : ""}`}></div>
            </div>

            <div className="slider-controls">
              <button className="arrow-button" onClick={previousSlide} aria-label="Previous costume">←</button>
              <button className="arrow-button" onClick={nextSlide} aria-label="Next costume">→</button>
            </div>
            <div className="slider-dots">
              {slides.map((slide, index) => (
                <button
                  key={slide.category}
                  className={`slider-dot ${activeSlide === index ? "active" : ""}`}
                  onClick={() => {
                    if (slidePhase !== "visible") return;
                    setSlidePhase("folding");
                    setTimeout(() => {
                      setDisplaySlide(index);
                      setActiveSlide(index);
                      setSlidePhase("unfolding");
                      setTimeout(() => setSlidePhase("visible"), 700);
                    }, 600);
                  }}
                  aria-label={`Show ${slide.category}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}