import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StageEvents = () => {
  const navigate = useNavigate();

  const images = [
    "/images/events/events 1.png",
    "/images/events/events 2.png",
    "/images/events/events 3.png",
    "/images/events/events 4.png",
    "/images/events/events 5.png",
    "/images/events/events 6.png",
    "/images/events/events 7.png",
    "/images/events/events 8.png"
  ];

  const [current, setCurrent] = useState(0);

  /* =========================================
     AUTO SLIDER
  ========================================= */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const backToCollection = () => {
    navigate("/");
    setTimeout(() => {
      const collectionSection = document.getElementById("collection");
      if (collectionSection) {
        collectionSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <div className="stage-page">
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        .stage-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background: linear-gradient(175deg, #0e1117 0%, #141820 35%, #1a1610 65%, #100e0a 100%);
          color: #e8dcc8;
          font-family: 'Segoe UI', system-ui, Arial, sans-serif;
        }

        /* =========================================
           ANIMATED BACKGROUND (MATCHING HERO)
        ========================================= */
        .bg-liquid {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          z-index: 0;
          mix-blend-mode: screen;
        }
        .bg-liquid-one {
          width: 520px; height: 520px; left: -200px; top: 4%;
          background: radial-gradient(circle at 45% 40%, rgba(198,164,82,0.10), rgba(198,164,82,0.02) 45%, transparent 72%);
          filter: blur(25px);
          animation: bgFlowOne 11s ease-in-out infinite alternate;
        }
        .bg-liquid-two {
          width: 580px; height: 580px; right: -210px; top: 20%;
          background: radial-gradient(circle at 40% 50%, rgba(160,130,55,0.08), rgba(120,100,40,0.02) 45%, transparent 73%);
          filter: blur(28px);
          animation: bgFlowTwo 13s ease-in-out infinite alternate;
        }
        .bg-liquid-three {
          width: 450px; height: 450px; left: 35%; bottom: -260px;
          background: radial-gradient(circle, rgba(198,164,82,0.06), transparent 50%);
          filter: blur(25px);
          animation: bgFlowThree 12s ease-in-out infinite alternate;
        }
        
        .bg-ring {
          position: absolute;
          border-radius: 50%;
          border: 1px solid rgba(198,164,82,0.08);
          pointer-events: none;
          z-index: 0;
        }
        .bg-ring-one {
          width: 500px; height: 500px; right: -190px; bottom: -170px;
          animation: bgRingPulse 6s ease-in-out infinite;
        }
        .bg-ring-two {
          width: 300px; height: 300px; right: 8%; top: 8%;
          animation: bgRingPulse 7s ease-in-out infinite reverse;
        }

        .drapery-line { position: absolute; pointer-events: none; z-index: 0; }
        .drapery-line-one {
          left: 6%; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(180deg, transparent, rgba(198,164,82,0.06) 30%, rgba(198,164,82,0.10) 50%, rgba(198,164,82,0.06) 70%, transparent);
          animation: lineShimmer 8s ease-in-out infinite;
        }

        @keyframes bgFlowOne {
          0% { transform: translate3d(0,0,0) scale(1) rotate(0deg); }
          50% { transform: translate3d(80px,45px,0) scale(1.12) rotate(8deg); }
          100% { transform: translate3d(140px,-25px,0) scale(0.96) rotate(-5deg); }
        }
        @keyframes bgFlowTwo {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-90px,65px,0) scale(1.13); }
          100% { transform: translate3d(-35px,120px,0) scale(0.94); }
        }
        @keyframes bgFlowThree {
          0% { transform: translateX(-70px) scale(1); }
          50% { transform: translateX(70px) scale(1.15); }
          100% { transform: translateX(130px) scale(0.96); }
        }
        @keyframes bgRingPulse {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.08); opacity: 0.28; }
        }
        @keyframes lineShimmer {
          0%,100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        /* =========================================
           HEADER (GLASSMORPHISM)
        ========================================= */
        .stage-header {
          position: sticky;
          top: 0;
          width: 100%;
          padding: 18px 6%;
          background: rgba(14, 17, 23, 0.70);
          border-bottom: 1px solid rgba(198, 164, 82, 0.15);
          backdrop-filter: blur(20px) saturate(1.4);
          -webkit-backdrop-filter: blur(20px) saturate(1.4);
          z-index: 10;
        }
        .header-inner {
          max-width: 1250px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }
        .header-brand span {
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 3px;
          color: #e8dcc8;
        }

        /* =========================================
           BACK BUTTON
        ========================================= */
        .back-collection-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 11px 19px;
          border: 1px solid rgba(198, 164, 82, 0.25);
          border-radius: 50px;
          background: rgba(198, 164, 82, 0.05);
          color: #dbb856;
          font-size: 13px;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .back-collection-btn:hover {
          transform: translateX(-4px);
          background: #c6a452;
          color: #0e1117;
          border-color: #c6a452;
        }
        .back-collection-btn span {
          font-size: 18px;
          line-height: 1;
          transition: transform 0.3s ease;
        }
        .back-collection-btn:hover span {
          transform: translateX(-4px);
        }

        /* =========================================
           HERO
        ========================================= */
        .stage-hero {
          position: relative;
          padding: 100px 6% 75px;
          overflow: hidden;
          z-index: 2;
        }
        .stage-hero-content {
          position: relative;
          z-index: 2;
          max-width: 1250px;
          margin: 0 auto;
          animation: textEnter 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) both;
        }
        .eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
          color: #c6a452;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 4px;
        }
        .eyebrow::before {
          content: "";
          width: 35px;
          height: 1px;
          background: #c6a452;
        }
        .stage-hero h1 {
          margin: 0;
          max-width: 900px;
          color: #e8dcc8;
          font-size: clamp(52px, 8vw, 100px);
          line-height: 0.95;
          letter-spacing: -4px;
          font-weight: 900;
        }
        .stage-hero h1 em {
          background: linear-gradient(135deg, #c6a452, #dbb856, #e8c860);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: Georgia, serif;
          font-style: italic;
          font-weight: 600;
        }
        .stage-hero p {
          max-width: 650px;
          margin: 28px 0 0;
          color: #7d7768;
          font-size: 16px;
          line-height: 1.8;
        }

        /* =========================================
           SLIDER SECTION
        ========================================= */
        .stage-slider-section {
          position: relative;
          z-index: 2;
          padding: 30px 6% 110px;
        }
        .slider-container {
          max-width: 1250px;
          margin: 0 auto;
        }
        .slider-top {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 30px;
          animation: textEnter 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }
        .small-label {
          display: inline-block;
          margin-bottom: 12px;
          color: #c6a452;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }
        .slider-top h2 {
          margin: 0;
          color: #e8dcc8;
          font-size: clamp(35px, 5vw, 58px);
          line-height: 1;
          letter-spacing: -2px;
        }
        .slider-top h2 em {
          color: #c6a452;
          font-style: normal;
        }
        .counter {
          display: flex;
          align-items: baseline;
          gap: 4px;
          color: #e8dcc8;
        }
        .counter span { font-size: 28px; font-weight: 900; color: #dbb856; }
        .counter small { color: #5c574a; font-size: 12px; }

        /* =========================================
           IMAGE BOX
        ========================================= */
        .slider-wrapper { width: 100%; animation: visualEnter 1s 0.3s cubic-bezier(0.16,1,0.3,1) both; }
        .slider-image-box {
          position: relative;
          width: 100%;
          height: min(680px, 65vw);
          min-height: 480px;
          overflow: hidden;
          border-radius: 25px;
          background: #1a1610;
          box-shadow: 0 40px 100px rgba(0,0,0,0.50), 0 0 0 1px rgba(198,164,82,0.08);
          border: 5px solid rgba(26,22,16,0.95);
        }
        .slider-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0;
          transform: scale(1.05);
          transition: opacity 0.8s ease, transform 1.1s ease;
        }
        .slider-image.active {
          opacity: 1;
          transform: scale(1);
        }

        /* =========================================
           OVERLAY & CAPTION
        ========================================= */
        .slider-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, rgba(10,12,16,0.75), rgba(10,12,16,0.1) 65%, rgba(10,12,16,0.2));
          pointer-events: none;
        }
        .slide-caption {
          position: absolute;
          left: 55px;
          bottom: 55px;
          max-width: 450px;
          color: white;
          z-index: 2;
        }
        .slide-caption span {
          display: inline-block;
          margin-bottom: 13px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #c6a452;
        }
        .slide-caption h3 {
          margin: 0 0 10px;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1;
          letter-spacing: -1px;
          color: #e8dcc8;
        }
        .slide-caption p {
          margin: 0;
          max-width: 370px;
          color: rgba(255, 255, 255, 0.68);
          font-size: 14px;
          line-height: 1.7;
        }

        /* =========================================
           CONTROLS & PROGRESS
        ========================================= */
        .slider-controls {
          position: absolute;
          right: 35px;
          bottom: 35px;
          display: flex;
          gap: 10px;
          z-index: 3;
        }
        .slider-controls button {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(198, 164, 82, 0.30);
          border-radius: 8px;
          background: rgba(14, 17, 23, 0.80);
          color: #c6a452;
          font-size: 19px;
          cursor: pointer;
          backdrop-filter: blur(8px);
          transition: all 0.3s ease;
        }
        .slider-controls button:hover {
          background: rgba(198, 164, 82, 0.15);
          border-color: #c6a452;
          color: #dbb856;
          transform: translateY(-2px);
        }
        .progress-track {
          width: 100%;
          height: 3px;
          margin-top: 22px;
          overflow: hidden;
          border-radius: 5px;
          background: rgba(198, 164, 82, 0.10);
        }
        .progress-fill {
          height: 100%;
          border-radius: 5px;
          background: linear-gradient(90deg, #c6a452, #dbb856);
          transition: width 0.5s ease;
        }
        .slider-dots {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 9px;
          margin-top: 22px;
        }
        .dot {
          width: 8px;
          height: 8px;
          padding: 0;
          border: none;
          border-radius: 50%;
          background: rgba(198, 164, 82, 0.20);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .dot.active {
          width: 28px;
          border-radius: 20px;
          background: linear-gradient(90deg, #c6a452, #dbb856);
        }

        /* =========================================
           INFO (GLASS CARDS)
        ========================================= */
        .stage-info {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          padding: 100px 0;
          animation: textEnter 1s 0.5s cubic-bezier(0.16,1,0.3,1) both;
        }
        .info-text h2 {
          margin: 0 0 22px;
          color: #e8dcc8;
          font-size: clamp(35px, 4vw, 55px);
          line-height: 1.05;
          letter-spacing: -2px;
        }
        .info-text p {
          max-width: 520px;
          margin: 0;
          color: #7d7768;
          font-size: 15px;
          line-height: 1.8;
        }
        .info-points {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .info-point {
          display: flex;
          gap: 20px;
          padding: 23px;
          border: 1px solid rgba(198, 164, 82, 0.15);
          border-radius: 15px;
          background: rgba(198, 164, 82, 0.05);
          backdrop-filter: blur(8px);
          transition: transform 0.3s ease, border-color 0.3s ease;
        }
        .info-point:hover {
          transform: translateY(-4px);
          border-color: rgba(198, 164, 82, 0.4);
        }
        .info-point > span {
          color: #c6a452;
          font-size: 12px;
          font-weight: 900;
        }
        .info-point h4 {
          margin: 0 0 6px;
          color: #e8dcc8;
          font-size: 17px;
        }
        .info-point p {
          margin: 0;
          color: #8a8478;
          font-size: 13px;
          line-height: 1.6;
        }

        /* =========================================
           BOOKING CTA
        ========================================= */
        .booking-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 30px;
          padding: 45px;
          border-radius: 28px;
          background: linear-gradient(135deg, rgba(198,164,82,0.10), rgba(14,17,23,0.8));
          border: 1px solid rgba(198, 164, 82, 0.20);
          backdrop-filter: blur(12px);
          animation: textEnter 1s 0.6s cubic-bezier(0.16,1,0.3,1) both;
        }
        .booking-content span {
          display: inline-block;
          margin-bottom: 10px;
          color: #c6a452;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
        }
        .booking-content h2 {
          margin: 0 0 10px;
          color: #e8dcc8;
          font-size: clamp(27px, 4vw, 42px);
          letter-spacing: -1px;
        }
        .booking-content p {
          margin: 0;
          color: #7d7768;
          font-size: 14px;
        }
        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-shrink: 0;
          padding: 16px 25px;
          border-radius: 50px;
          background: linear-gradient(135deg, #c6a452, #a8873a);
          color: #0e1117;
          text-decoration: none;
          font-size: 13px;
          font-weight: 800;
          box-shadow: 0 12px 32px rgba(198,164,82,0.25);
          transition: all 0.3s ease;
        }
        .whatsapp-btn span {
          font-size: 18px;
          transition: transform 0.3s ease;
        }
        .whatsapp-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 18px 40px rgba(198,164,82,0.35);
        }
        .whatsapp-btn:hover span {
          transform: translate(3px, -3px);
        }

        /* =========================================
           FOOTER
        ========================================= */
        .stage-footer {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
          padding: 35px 6%;
          border-top: 1px solid rgba(198, 164, 82, 0.08);
          background: rgba(14, 17, 23, 0.5);
        }
        .stage-footer div {
          display: flex;
          flex-direction: column;
          gap: 5px;
        }
        .stage-footer strong {
          color: #e8dcc8;
          font-size: 12px;
          letter-spacing: 2px;
        }
        .stage-footer span,
        .stage-footer p {
          color: #5c574a;
          font-size: 11px;
        }
        .stage-footer p { margin: 0; }

        /* =========================================
           KEYFRAMES FOR ENTRY ANIMATIONS
        ========================================= */
        @keyframes textEnter {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes visualEnter {
          from { opacity: 0; transform: translateX(40px) scale(0.96); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }

        /* =========================================
           TABLET & MOBILE
        ========================================= */
        @media (max-width: 900px) {
          .stage-info {
            grid-template-columns: 1fr;
            gap: 50px;
            padding: 75px 0;
          }
          .booking-box {
            flex-direction: column;
            align-items: flex-start;
          }
          .whatsapp-btn {
            width: 100%;
            max-width: 230px;
          }
        }

        @media (max-width: 600px) {
          .bg-liquid-one { width: 340px; height: 340px; left: -170px; }
          .bg-liquid-two { width: 380px; height: 380px; right: -210px; }
          .bg-ring-one { width: 300px; height: 300px; right: -180px; }
          .bg-ring-two { display: none; }

          .stage-header { padding: 15px 18px; }
          .header-brand span { font-size: 8px; letter-spacing: 2px; }
          .back-collection-btn { padding: 9px 14px; font-size: 11px; }

          .stage-hero { padding: 60px 18px; }
          .stage-hero h1 { font-size: 55px; letter-spacing: -3px; }
          .stage-hero p { font-size: 14px; }

          .stage-slider-section { padding: 20px 18px 70px; }
          .slider-top h2 { font-size: 35px; }
          .counter span { font-size: 22px; }

          .slider-image-box { height: 450px; min-height: 0; border-radius: 19px; }
          .slider-overlay { background: linear-gradient(0deg, rgba(10,12,16,0.85), rgba(10,12,16,0.05) 70%); }
          .slide-caption { left: 22px; bottom: 28px; max-width: 270px; }
          .slide-caption h3 { font-size: 30px; }
          .slide-caption p { font-size: 12px; }
          
          .slider-controls { right: 18px; bottom: 20px; }
          .slider-controls button { width: 43px; height: 43px; }

          .stage-info { padding: 65px 0; }
          .info-text h2 { font-size: 38px; }
          
          .booking-box { padding: 30px 24px; border-radius: 22px; }
          .booking-content h2 { font-size: 29px; }
          .whatsapp-btn { max-width: none; }

          .stage-footer { flex-direction: column; align-items: flex-start; padding: 30px 18px; }
        }
      `}</style>

      {/* ANIMATED BACKGROUND */}
      <div className="bg-liquid bg-liquid-one"></div>
      <div className="bg-liquid bg-liquid-two"></div>
      <div className="bg-liquid bg-liquid-three"></div>
      <div className="bg-ring bg-ring-one"></div>
      <div className="bg-ring bg-ring-two"></div>
      <div className="drapery-line drapery-line-one"></div>

      {/* HEADER */}
      <header className="stage-header">
        <div className="header-inner">
          <button className="back-collection-btn" onClick={backToCollection}>
            <span>←</span>
            Back to Collection
          </button>
          <div className="header-brand">
            <span>GROWTH DRAPERY</span>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="stage-hero">
        <div className="stage-hero-content">
          <span className="eyebrow">GROWTH DRAPERY</span>
          <h1>
            Stage
            <em> & Events</em>
          </h1>
          <p>
            Complete costume solutions for school annual functions, cultural programs, stage shows, fashion shows and special events.
          </p>
        </div>
      </section>

      {/* SLIDER SECTION */}
      <section className="stage-slider-section">
        <div className="slider-container">
          <div className="slider-top">
            <div>
              <span className="small-label">OUR COLLECTION</span>
              <h2>Make Every <em>Event Special.</em></h2>
            </div>
            <div className="counter">
              <span>{String(current + 1).padStart(2, "0")}</span>
              <small>/{String(images.length).padStart(2, "0")}</small>
            </div>
          </div>

          <div className="slider-wrapper">
            <div className="slider-image-box">
              {images.map((image, index) => (
                <img
                  key={image}
                  src={image}
                  alt={`Stage Event Costume ${index + 1}`}
                  className={index === current ? "slider-image active" : "slider-image"}
                />
              ))}
              <div className="slider-overlay"></div>
              <div className="slide-caption">
                <span>STAGE & EVENTS COLLECTION</span>
                <h3>Costumes Made for the Stage</h3>
                <p>Beautiful costumes for annual functions, cultural programs, stage performances, fashion shows and special events.</p>
              </div>
              <div className="slider-controls">
                <button onClick={previousSlide} aria-label="Previous image">←</button>
                <button onClick={nextSlide} aria-label="Next image">→</button>
              </div>
            </div>

            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${((current + 1) / images.length) * 100}%` }}></div>
            </div>

            <div className="slider-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={index === current ? "dot active" : "dot"}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>

          {/* INFORMATION */}
          <div className="stage-info">
            <div className="info-text">
              <span className="small-label">PERFECT FOR</span>
              <h2>Annual Functions,<br />Stage Shows & Events</h2>
              <p>
                Our stage and events collection is ideal for school annual functions, cultural programs, dance performances, fashion shows, theme events and special occasions.
              </p>
            </div>
            <div className="info-points">
              <div className="info-point">
                <span>01</span>
                <div>
                  <h4>Stage Ready</h4>
                  <p>Costumes selected to create a strong and beautiful stage presence.</p>
                </div>
              </div>
              <div className="info-point">
                <span>02</span>
                <div>
                  <h4>Event Themes</h4>
                  <p>Flexible costume options for different themes, performances and occasions.</p>
                </div>
              </div>
              <div className="info-point">
                <span>03</span>
                <div>
                  <h4>Rental Available</h4>
                  <p>Get event-ready costumes without the need to purchase them.</p>
                </div>
              </div>
            </div>
          </div>

          {/* BOOKING CTA */}
          <div className="booking-box">
            <div className="booking-content">
              <span>READY FOR YOUR EVENT?</span>
              <h2>Book Your Costume Today</h2>
              <p>Contact Growth Drapery for availability, sizes and rental details.</p>
            </div>
            <a href="https://wa.me/917083512250" target="_blank" rel="noopener noreferrer" className="whatsapp-btn">
              WhatsApp Us
              <span>↗</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="stage-footer">
        <div>
          <strong>GROWTH DRAPERY</strong>
          <span>Rental Dress & Stage Costume Shop</span>
        </div>
        <p>© {new Date().getFullYear()} Growth Drapery. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default StageEvents;