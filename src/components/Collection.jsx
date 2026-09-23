import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Collection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [active, setActive] = useState(0);
  const [hovering, setHovering] = useState(false);

  const categories = [
    {
      title: "Classical Dance",
      description:
        "Elegant Bharatanatyam, Kathak and Odissi costumes crafted for grace. Rich fabrics, traditional jewellery and perfect draping for every classical performance.",
      image: "/images/classical/classical 1.png",
      path: "/classical-dance",
      number: "01",
      tag: "Most Popular",
    },
    {
      title: "Western Dance",
      description:
        "Bold and stylish costumes for hip-hop, contemporary and jazz. Designed for energy, comfort and maximum stage impact with vibrant colours.",
      image: "/images/western/western 7.png",
      path: "/western-dance",
      number: "02",
      tag: "Trending",
    },
    {
      title: "Traditional & Folk",
      description:
        "Celebrate India's diverse culture — Garba, Bhangra, Lavani and more. Authentic costumes that honour every regional tradition beautifully.",
      image: "/images/traditional/traditional 1.png",
      path: "/traditional-folk",
      number: "03",
      tag: "Cultural",
    },
    {
      title: "Fancy Dress",
      description:
        "Bring any character to life — freedom fighters, leaders, community helpers and fantasy figures. Creative costumes that win competitions.",
      image: "/images/fancy-dress/fancy 10.png",
      path: "/fancy-dress",
      number: "04",
      tag: "Kids Favourite",
    },
    {
      title: "Stage & Events",
      description:
        "Anchor dresses, host outfits, choir gowns and celebration wear. Performance-ready costumes that make every event memorable and special.",
      image: "/images/events/events 7.png",
      path: "/stage-events",
      number: "05",
      tag: "Events",
    },
  ];

  const total = categories.length;

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (hovering) return;
    const t = setInterval(() => {
      setActive((p) => (p + 1) % total);
    }, 5000);
    return () => clearInterval(t);
  }, [hovering, total]);

  const goNext = () => setActive((p) => (p + 1) % total);
  const goPrev = () => setActive((p) => (p - 1 + total) % total);

  return (
    <>
      <section className="coll-sec" id="collection" ref={sectionRef}>

        {/* ===== ANIMATED BACKGROUND LAYER ===== */}
        <div className="coll-bg-anim">
          {/* Liquid blobs */}
          <div className="ab ab-1"></div>
          <div className="ab ab-2"></div>
          <div className="ab ab-3"></div>
          <div className="ab ab-4"></div>
          <div className="ab ab-5"></div>

          {/* Water wave bands */}
          <div className="aw aw-1"></div>
          <div className="aw aw-2"></div>
          <div className="aw aw-3"></div>

          {/* Ripples */}
          <div className="ar ar-1"></div>
          <div className="ar ar-2"></div>
          <div className="ar ar-3"></div>

          {/* Floating gold particles */}
          <div className="ap ap-1"></div>
          <div className="ap ap-2"></div>
          <div className="ap ap-3"></div>
          <div className="ap ap-4"></div>
          <div className="ap ap-5"></div>
          <div className="ap ap-6"></div>
          <div className="ap ap-7"></div>
          <div className="ap ap-8"></div>
          <div className="ap ap-9"></div>
          <div className="ap ap-10"></div>

          {/* Pulse rings */}
          <div className="aRing aRing-1"></div>
          <div className="aRing aRing-2"></div>

          {/* Vertical shimmer lines */}
          <div className="aVl aVl-1"></div>
          <div className="aVl aVl-2"></div>

          {/* Diagonal gold streaks */}
          <div className="aSt aSt-1"></div>
          <div className="aSt aSt-2"></div>
        </div>

        <div className="coll-container">
          {/* ===== HEADING ===== */}
          <div className={`coll-head ${visible ? "vis" : ""}`}>
            <div className="coll-head-left">
              <span className="coll-eyebrow">OUR COLLECTION</span>
              <h2>
                Choose Your <em>Look.</em>
              </h2>
            </div>
            <p>
              From classical elegance to colourful stage costumes — discover the
              perfect look for every performance, celebration and special
              occasion.
            </p>
          </div>

          {/* ===== CAROUSEL ===== */}
          <div
            className={`coll-carousel ${visible ? "vis" : ""}`}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
          >
            <button
              className="coll-arrow coll-arrow-l"
              onClick={goPrev}
              aria-label="Previous"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>

            <div className="coll-slider-outer">
              <div className="coll-slider-inner">
                {categories.map((cat, i) => (
                  <div
                    key={cat.number}
                    className={`coll-slide ${
                      i === active ? "slide-active" : "slide-inactive"
                    }`}
                  >
                    <Link to={cat.path} className="slide-card">
                      <div className="slide-img-wrap">
                        <img src={cat.image} alt={cat.title} />
                        <div className="slide-img-shade"></div>
                        <span className="slide-num">{cat.number}</span>
                        <div className="slide-go">↗</div>
                      </div>
                      <div className="slide-body">
                        <span className="slide-tag">{cat.tag}</span>
                        <h3>{cat.title}</h3>
                        <p>{cat.description}</p>
                        <div className="slide-features">
                          <span className="feat">
                            <span className="feat-dot"></span> Rental Available
                          </span>
                          <span className="feat">
                            <span className="feat-dot"></span> Multiple Sizes
                          </span>
                          <span className="feat">
                            <span className="feat-dot"></span> Quality Fabrics
                          </span>
                        </div>
                        <span className="slide-cta">
                          View Collection <b>→</b>
                        </span>
                      </div>
                      <div className="slide-corner"></div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="coll-arrow coll-arrow-r"
              onClick={goNext}
              aria-label="Next"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* ===== DOTS + COUNTER ===== */}
          <div className={`coll-dots-row ${visible ? "vis" : ""}`}>
            <div className="coll-dots">
              {categories.map((cat, i) => (
                <button
                  key={cat.number}
                  className={`coll-dot ${i === active ? "dot-on" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={cat.title}
                />
              ))}
            </div>
            <span className="coll-counter">
              <b>{String(active + 1).padStart(2, "0")}</b> /{" "}
              {String(total).padStart(2, "0")}
            </span>
          </div>

          {/* ===== CATEGORY TABS ===== */}
          <div className={`coll-tabs ${visible ? "vis" : ""}`}>
            {categories.map((cat, i) => (
              <button
                key={cat.number}
                className={`coll-tab ${i === active ? "tab-on" : ""}`}
                onClick={() => setActive(i)}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* ===== BOTTOM CTA ===== */}
          <div className={`coll-bottom ${visible ? "vis" : ""}`}>
            <Link to="/classical-dance" className="coll-cta-btn">
              Explore All Collections
              <span className="cta-arr">→</span>
              <span className="cta-shine"></span>
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        /* ===========================================
           SECTION — Homepage-matching gradient
           NOT flat black, flows from Hero
        =========================================== */
        .coll-sec {
          position: relative;
          width: 100%;
          padding: 100px 5% 80px;
          background:
            radial-gradient(ellipse at 15% 0%, rgba(198,164,82,0.05), transparent 42%),
            radial-gradient(ellipse at 85% 100%, rgba(198,164,82,0.035), transparent 42%),
            radial-gradient(ellipse at 50% 40%, rgba(21,26,34,0.45), transparent 55%),
            linear-gradient(175deg, #0e1117 0%, #121822 20%, #16191f 40%, #181510 60%, #14110d 80%, #100e0a 100%);
          overflow: hidden;
        }

        /* ===========================================
           ANIMATED BG LAYER — all z-index:0
           Content z-index:5+
        =========================================== */
        .coll-bg-anim {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          overflow: hidden;
        }

        /* ---- LIQUID BLOBS ---- */
        .ab {
          position: absolute;
          border-radius: 50%;
          mix-blend-mode: screen;
        }
        .ab-1 {
          width: 520px; height: 520px;
          left: -190px; top: 3%;
          background: radial-gradient(
            circle at 38% 32%,
            rgba(198,164,82,0.09),
            rgba(198,164,82,0.025) 38%,
            transparent 64%
          );
          filter: blur(30px);
          animation: abA 13s ease-in-out infinite alternate;
        }
        .ab-2 {
          width: 580px; height: 580px;
          right: -210px; top: -5%;
          background: radial-gradient(
            circle at 52% 42%,
            rgba(160,130,55,0.075),
            rgba(140,115,50,0.02) 40%,
            transparent 66%
          );
          filter: blur(34px);
          animation: abB 16s ease-in-out infinite alternate;
        }
        .ab-3 {
          width: 440px; height: 440px;
          left: 25%; bottom: -170px;
          background: radial-gradient(
            circle at 48% 48%,
            rgba(198,164,82,0.06),
            rgba(170,140,60,0.015) 42%,
            transparent 66%
          );
          filter: blur(28px);
          animation: abC 14s ease-in-out infinite alternate;
        }
        .ab-4 {
          width: 360px; height: 360px;
          right: 16%; top: 42%;
          background: radial-gradient(
            circle at 58% 38%,
            rgba(198,164,82,0.045),
            transparent 55%
          );
          filter: blur(26px);
          animation: abD 11s ease-in-out infinite alternate;
        }
        .ab-5 {
          width: 280px; height: 280px;
          left: 55%; top: 68%;
          background: radial-gradient(
            circle at 44% 52%,
            rgba(198,164,82,0.035),
            transparent 52%
          );
          filter: blur(22px);
          animation: abE 17s ease-in-out infinite alternate;
        }

        @keyframes abA {
          0%   { transform: translate3d(0,0,0) scale(1) rotate(0deg); }
          33%  { transform: translate3d(50px,32px,0) scale(1.08) rotate(4deg); }
          66%  { transform: translate3d(100px,-16px,0) scale(0.95) rotate(-2deg); }
          100% { transform: translate3d(140px,22px,0) scale(1.03) rotate(3deg); }
        }
        @keyframes abB {
          0%   { transform: translate3d(0,0,0) scale(1); }
          50%  { transform: translate3d(-68px,44px,0) scale(1.10); }
          100% { transform: translate3d(-24px,82px,0) scale(0.93); }
        }
        @keyframes abC {
          0%   { transform: translateX(-50px) scale(1); }
          50%  { transform: translateX(50px) scale(1.10); }
          100% { transform: translateX(90px) scale(0.94); }
        }
        @keyframes abD {
          0%   { transform: translate3d(0,0,0) scale(1) rotate(0deg); }
          50%  { transform: translate3d(-32px,45px,0) scale(1.06) rotate(3deg); }
          100% { transform: translate3d(22px,-22px,0) scale(0.96) rotate(-2deg); }
        }
        @keyframes abE {
          0%   { transform: translate3d(0,0,0) scale(1); }
          50%  { transform: translate3d(28px,-35px,0) scale(1.05); }
          100% { transform: translate3d(-18px,18px,0) scale(0.94); }
        }

        /* ---- WATER WAVES ---- */
        .aw {
          position: absolute;
          border-radius: 50%;
          opacity: 0.12;
          filter: blur(7px);
        }
        .aw-1 {
          width: 820px; height: 160px;
          right: -260px; top: 26%;
          background: linear-gradient(
            108deg,
            rgba(198,164,82,0.02),
            rgba(198,164,82,0.085),
            rgba(198,164,82,0.015)
          );
          transform: rotate(-9deg);
          animation: awA 15s ease-in-out infinite alternate;
        }
        .aw-2 {
          width: 720px; height: 140px;
          left: -170px; bottom: 8%;
          background: linear-gradient(
            98deg,
            rgba(160,130,55,0.018),
            rgba(198,164,82,0.065),
            rgba(140,115,50,0.012)
          );
          transform: rotate(7deg);
          animation: awB 18s ease-in-out infinite alternate;
        }
        .aw-3 {
          width: 520px; height: 100px;
          left: 20%; top: 60%;
          background: linear-gradient(
            92deg,
            rgba(198,164,82,0.012),
            rgba(198,164,82,0.05),
            rgba(198,164,82,0.008)
          );
          transform: rotate(-3deg);
          animation: awC 21s ease-in-out infinite alternate;
        }

        @keyframes awA {
          0%   { transform: translateX(48px) translateY(0) rotate(-9deg) scale(1); }
          50%  { transform: translateX(-22px) translateY(18px) rotate(-4deg) scale(1.06); }
          100% { transform: translateX(-82px) translateY(-10px) rotate(-13deg) scale(0.95); }
        }
        @keyframes awB {
          0%   { transform: translateX(-30px) translateY(0) rotate(7deg) scale(1); }
          50%  { transform: translateX(45px) translateY(-16px) rotate(3deg) scale(1.07); }
          100% { transform: translateX(90px) translateY(12px) rotate(11deg) scale(0.95); }
        }
        @keyframes awC {
          0%   { transform: translateX(0) translateY(0) rotate(-3deg) scale(1); }
          50%  { transform: translateX(-35px) translateY(10px) rotate(0deg) scale(1.04); }
          100% { transform: translateX(30px) translateY(-7px) rotate(-6deg) scale(0.96); }
        }

        /* ---- RIPPLES ---- */
        .ar {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(198,164,82,0.05);
        }
        .ar-1 { left: 10%; top: 20%; animation: arG 8s ease-out infinite; }
        .ar-2 { right: 16%; top: 50%; animation: arG 10s 2s ease-out infinite; }
        .ar-3 { left: 45%; bottom: 16%; animation: arG 9s 4.5s ease-out infinite; }
        @keyframes arG {
          0%   { width: 0; height: 0; opacity: 0.5; border-width: 2px;; }
          50%  { opacity: 0.22; border-width: 1px; }
          100% { width: 300px; height: 300px; opacity: 0; border-width: 0.5px; margin-left: -150px; margin-top: -150px; }
        }

        /* ---- PARTICLES ---- */
        .ap {
          position: absolute;
          width: 3px; height: 3px;
          border-radius: 50%;
          background: rgba(198,164,82,0.28);
        }
        .ap-1  { left: 6%;  top: 16%; animation: apF 7s 0s ease-in-out infinite; }
        .ap-2  { left: 18%; top: 62%; animation: apF 9s 0.8s ease-in-out infinite; }
        .ap-3  { left: 40%; top: 10%; animation: apF 8s 1.8s ease-in-out infinite; }
        .ap-4  { left: 60%; top: 72%; animation: apF 10s 0.4s ease-in-out infinite; }
        .ap-5  { left: 76%; top: 28%; animation: apF 7.5s 2.5s ease-in-out infinite; }
        .ap-6  { left: 30%; top: 42%; animation: apF 11s 1.2s ease-in-out infinite; }
        .ap-7  { left: 86%; top: 52%; animation: apF 8.5s 2.2s ease-in-out infinite; }
        .ap-8  { left: 9%;  top: 78%; animation: apF 9.5s 3.5s ease-in-out infinite; }
        .ap-9  { left: 50%; top: 32%; animation: apF 6.5s 0.8s ease-in-out infinite; }
        .ap-10 { left: 70%; top: 6%;  animation: apF 12s 1.5s ease-in-out infinite; }
        @keyframes apF {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.28; }
          25%      { transform: translateY(-18px) scale(1.4); opacity: 0.52; }
          50%      { transform: translateY(-9px) scale(0.7); opacity: 0.16; }
          75%      { transform: translateY(-22px) scale(1.2); opacity: 0.42; }
        }

        /* ---- RINGS ---- */
        .aRing {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(198,164,82,0.055);
          animation: aRP 8s ease-in-out infinite;
        }
        .aRing-1 { width: 420px; height: 420px; right: -140px; bottom: -130px; }
        .aRing-2 { width: 260px; height: 260px; left: 3%; top: 6%; animation-direction: reverse; animation-duration: 10s; border-color: rgba(198,164,82,0.035); }
        @keyframes aRP {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50%      { transform: scale(1.06); opacity: 0.2; }
        }

        /* ---- VERTICAL LINES ---- */
        .aVl { position: absolute; width: 1px; }
        .aVl-1 {
          left: 4%; top: 0; bottom: 0;
          background: linear-gradient(180deg, transparent, rgba(198,164,82,0.045) 26%, rgba(198,164,82,0.08) 50%, rgba(198,164,82,0.045) 74%, transparent);
          animation: aVS 8s ease-in-out infinite;
        }
        .aVl-2 {
          right: 4%; top: 0; bottom: 0;
          background: linear-gradient(180deg, transparent, rgba(198,164,82,0.035) 26%, rgba(198,164,82,0.065) 50%, rgba(198,164,82,0.035) 74%, transparent);
          animation: aVS 11s ease-in-out infinite reverse;
        }
        @keyframes aVS { 0%, 100% { opacity: 0.4; } 50% { opacity: 1; } }

        /* ---- DIAGONAL STREAKS ---- */
        .aSt {
          position: absolute;
          width: 180px; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(198,164,82,0.07), transparent);
          transform: rotate(-32deg);
        }
        .aSt-1 { left: -40px; top: 32%; animation: aSM 13s ease-in-out infinite alternate; }
        .aSt-2 { right: -40px; bottom: 28%; animation: aSM 17s ease-in-out infinite alternate-reverse; }
        @keyframes aSM {
          0%   { transform: rotate(-32deg) translateX(0); opacity: 0.35; }
          50%  { transform: rotate(-32deg) translateX(70px); opacity: 0.75; }
          100% { transform: rotate(-32deg) translateX(140px); opacity: 0.25; }
        }

        /* ===========================================
           CONTAINER
        =========================================== */
        .coll-container {
          position: relative;
          z-index: 5;
          max-width: 1260px;
          margin: 0 auto;
        }

        /* ===========================================
           HEADING
        =========================================== */
        .coll-head {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 50px;
          margin-bottom: 48px;
          opacity: 0;
          transform: translateY(28px);
          transition: all 0.8s cubic-bezier(0.16,1,0.3,1);
        }
        .coll-head.vis { opacity: 1; transform: translateY(0); }
        .coll-head-left { flex-shrink: 0; }
        .coll-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 14px;
          color: #c6a452;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .coll-eyebrow::before {
          content: "";
          width: 26px;
          height: 1px;
          background: linear-gradient(90deg, #c6a452, transparent);
        }
        .coll-head h2 {
          margin: 0;
          color: #e8dcc8;
          font-size: clamp(40px, 4.8vw, 62px);
          line-height: 1;
          font-weight: 800;
          letter-spacing: -2px;
        }
        .coll-head h2 em {
          background: linear-gradient(135deg, #c6a452, #dbb856);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-style: normal;
        }
        .coll-head > p {
          max-width: 400px;
          margin: 0 0 4px;
          color: #6b6558;
          font-size: 15px;
          line-height: 1.8;
        }

        /* ===========================================
           CAROUSEL
        =========================================== */
        .coll-carousel {
          position: relative;
          opacity: 0;
          transform: translateY(35px);
          transition: all 0.85s 0.12s cubic-bezier(0.16,1,0.3,1);
        }
        .coll-carousel.vis { opacity: 1; transform: translateY(0); }

        .coll-arrow {
          position: absolute;
          top: 50%;
          z-index: 12;
          width: 50px;
          height: 50px;
          border-radius: 10px;
          border: 1px solid rgba(198,164,82,0.18);
          background: rgba(10,12,16,0.82);
          backdrop-filter: blur(14px);
          color: #c6a452;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .coll-arrow-l { left: -25px; transform: translateY(-50%); }
        .coll-arrow-r { right: -25px; transform: translateY(-50%); }
        .coll-arrow:hover {
          background: rgba(198,164,82,0.14);
          border-color: #c6a452;
          color: #dbb856;
        }
        .coll-arrow-l:hover { transform: translateY(-50%) translateX(-2px); }
        .coll-arrow-r:hover { transform: translateY(-50%) translateX(2px); }

        .coll-slider-outer { overflow: hidden; border-radius: 16px; }
        .coll-slider-inner { display: flex; position: relative; }

        .coll-slide {
          width: 100%;
          flex-shrink: 0;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.55s ease,
            transform 0.55s cubic-bezier(0.4,0,0.2,1);
        }
        .coll-slide.slide-active {
          position: relative;
          opacity: 1;
          pointer-events: auto;
          transform: translateX(0);
        }
        .coll-slide.slide-inactive { transform: translateX(40px); }

        .slide-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          overflow: hidden;
          border-radius: 16px;
          border: 1px solid rgba(198,164,82,0.07);
          background: rgba(18,16,12,0.45);
          text-decoration: none;
          position: relative;
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .slide-card:hover {
          border-color: rgba(198,164,82,0.20);
          box-shadow: 0 24px 70px rgba(0,0,0,0.30),
            0 0 40px rgba(198,164,82,0.04);
        }

        .slide-corner {
          position: absolute;
          top: 0;
          right: 0;
          width: 50px;
          height: 50px;
          pointer-events: none;
          z-index: 5;
        }
        .slide-corner::before,
        .slide-corner::after {
          content: "";
          position: absolute;
          background: rgba(198,164,82,0.12);
          transition: all 0.4s ease;
        }
        .slide-corner::before { top: 0; right: 0; width: 1px; height: 0; }
        .slide-corner::after { top: 0; right: 0; width: 0; height: 1px; }
        .slide-card:hover .slide-corner::before { height: 50px; }
        .slide-card:hover .slide-corner::after { width: 50px; }

        .slide-img-wrap {
          position: relative;
          width: 100%;
          min-height: 400px;
          overflow: hidden;
          background: #0a0c10;
        }
        .slide-img-wrap img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.8s cubic-bezier(0.2,0.7,0.2,1),
            filter 0.5s ease;
          filter: brightness(0.80) saturate(0.85);
        }
        .slide-card:hover .slide-img-wrap img {
          transform: scale(1.05);
          filter: brightness(1) saturate(1);
        }
        .slide-img-shade {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            90deg,
            transparent 55%,
            rgba(8,10,14,0.45) 100%
          );
          pointer-events: none;
        }
        .slide-num {
          position: absolute;
          top: 18px;
          left: 18px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: rgba(8,10,14,0.60);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(198,164,82,0.12);
          color: #c6a452;
          font-size: 12px;
          font-weight: 800;
          z-index: 4;
        }
        .slide-go {
          position: absolute;
          right: 18px;
          bottom: 18px;
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 9px;
          background: rgba(198,164,82,0.10);
          backdrop-filter: blur(10px);
          border: 1px solid rgba<parameter name="198,164,82,0.16);
          color: #c6a452;
          font-size: 17px;
          z-index: 4;
          transition: all 0.3s ease;
        }
        .slide-card:hover .slide-go {
          transform: rotate(45deg) scale(1.05);
          background: rgba(198,164,82,0.20);
          border-color: #c6a452;
          color: #dbb856;
        }

        .slide-body {
          padding: 44px 38px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .slide-tag {
          display: inline-block;
          margin-bottom: 14px;
          padding: 4px 12px;
          border-radius: 5px;
          background: rgba(198,164,82,0.08);
          border: 1px solid rgba(198,164,82,0.14);
          color: #c6a452;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 2px;
          text-transform: uppercase;
          align-self: flex-start;
        }
        .slide-body h3 {
          margin: 0 0 12px;
          color: #e8dcc8;
          font-size: 30px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.6px;
          transition: color 0.3s ease;
        }
        .slide-card:hover .slide-body h3 { color: #dbb856; }
        .slide-body > p {
          margin: 0 0 22px;
          color: #6b6558;
          font-size: 14.5px;
          line-height: 1.75;
          max-width: 360px;
        }
        .slide-features {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-bottom: 24px;
        }
        .feat {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #8a7e6a;
          font-size: 12px;
          font-weight: 600;
        }
        .feat-dot {
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: rgba(198,164,82,0.45);
        }
        .slide-cta {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: #c6a452;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.3px;
        }
        .slide-cta b {
          font-size: 16px;
          transition: transform 0.3s ease;
        }
        .slide-card:hover .slide-cta b { transform: translateX(6px); }

        /* ===========================================
           DOTS + COUNTER
        =========================================== */
        .coll-dots-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-top: 36px;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.7s 0.25s cubic-bezier(0.16,1,0.3,1);
        }
        .coll-dots-row.vis { opacity: 1; transform: translateY(0); }
        .coll-dots { display: flex; align-items: center; gap: 9px; }
        .coll-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          border: 1px solid rgba(198,164,82,0.22);
          background: transparent;
          cursor: pointer;
          padding: 0;
          transition: all 0.35s ease;
        }
        .coll-dot.dot-on {
          background: #c6a452;
          border-color: #c6a452;
          box-shadow: 0 0 8px rgba(198,164,82,0.30);
        }
        .coll-dot:hover { border-color: rgba(198,164,82,0.50); }
        .coll-counter {
          color: #4a453a;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 1px;
        }
        .coll-counter b {
          color: #c6a452;
          font-size: 16px;
          font-weight: 800;
        }

        /* ===========================================
           CATEGORY TABS
        =========================================== */
        .coll-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          margin-top: 24px;
          flex-wrap: wrap;
          opacity: 0;
          transform: translateY(14px);
          transition: all 0.7s 0.35s cubic-bezier(0.16,1,0.3,1);
        }
        .coll-tabs.vis { opacity: 1; transform: translateY(0); }
        .coll-tab {
          padding: 8px 18px;
          border-radius: 7px;
          border: 1px solid rgba(198,164,82,0.08);
          background: transparent;
          color: #5c574a;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.3px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .coll-tab:hover {
          color: #a89870;
          border-color: rgba(198,164,82,0.18);
          background: rgba(198,164,82,0.03);
        }
        .coll-tab.tab-on {
          color: #c6a452;
          border-color: rgba(198,164,82,0.28);
          background: rgba(198,164,82,0.07);
          font-weight: 700;
        }

        /* ===========================================
           BOTTOM CTA
        =========================================== */
        .coll-bottom {
          display: flex;
          justify-content: center;
          margin-top: 44px;
          opacity: 0;
          transform: translateY(18px);
          transition: all 0.7s 0.45s cubic-bezier(0.16,1,0.3,1);
        }
        .coll-bottom.vis { opacity: 1; transform: translateY(0); }
        .coll-cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 11px;
          padding: 15px 32px;
          border-radius: 9px;
          background: linear-gradient(135deg, #c6a452, #a8873a);
          color: #0a0c10;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.3px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }
        .coll-cta-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 16px 36px rgba(198,164,82,0.28);
        }
        .cta-arr {
          font-size: 16px;
          display: inline-block;
          transition: transform 0.3s ease;
        }
        .coll-cta-btn:hover .cta-arr { transform: translateX(5px); }
        .cta-shine {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.16),
            transparent
          );
          transition: left 0.55s ease;
        }
        .coll-cta-btn:hover .cta-shine { left: 100%; }

        /* ===========================================
           TABLET
        =========================================== */
        @media (max-width: 950px) {
          .coll-sec { padding: 85px 5% 70px; }
          .coll-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 38px;
          }
          .coll-head > p { max-width: 520px; }
          .slide-img-wrap { min-height: 340px; }
          .slide-body { padding: 32px 28px; }
          .slide-body h3 { font-size: 25px; }
          .coll-arrow-l { left: -8px; }
          .coll-arrow-r { right: -8px; }
        }

        /* ===========================================
           MOBILE
        =========================================== */
        @media (max-width: 650px) {
          .coll-sec { padding: 65px 4% 55px; }
          .coll-head { margin-bottom: 30px; }
          .coll-eyebrow { font-size: 9px; letter-spacing: 2px; }
          .coll-head h2 { font-size: 36px; letter-spacing: -1px; }
          .coll-head > p { font-size: 14px; line-height: 1.7; }
          .slide-card { grid-template-columns: 1fr; }
          .slide-img-wrap { min-height: 260px; }
          .slide-body { padding: 22px 20px 26px; }
          .slide-body h3 { font-size: 22px; }
          .slide-body > p { font-size: 13px; margin-bottom: 16px; }
          .slide-features { gap: 10px; margin-bottom: 18px; }
          .feat { font-size: 11px; }
          .coll-arrow { width: 42px; height: 42px; border-radius: 8px; }
          .coll-arrow-l { left: 6px; }
          .coll-arrow-r { right: 6px; }
          .coll-dots-row { margin-top: 28px; gap: 18px; }
          .coll-tabs { gap: 5px; margin-top: 18px; }
          .coll-tab { padding: 6px 13px; font-size: 11px; }
          .coll-bottom { margin-top: 32px; }
          .ar, .aRing, .aVl, .aSt { display: none; }
          .ab-1 { width: 280px; height: 280px; left: -140px; }
          .ab-2 { width: 300px; height: 300px; right: -150px; }
        }

        @media (max-width: 400px) {
          .coll-head h2 { font-size: 30px; }
          .slide-img-wrap { min-height: 220px; }
          .slide-body { padding: 18px 16px 22px; }
          .slide-body h3 { font-size: 20px; }
        }
      `}</style>
    </>
  );
};

export default Collection;