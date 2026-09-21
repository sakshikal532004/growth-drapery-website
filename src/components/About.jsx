import React from "react";

const About = () => {
  return (
    <>
      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        
        /* ================================
           ABOUT SECTION - DARK PREMIUM THEME
        ================================= */
        .about-section {
          position: relative;
          width: 100%;
          padding: 125px 6%;
          background: linear-gradient(175deg, #0e1117 0%, #141820 35%, #1a1610 65%, #100e0a 100%);
          overflow: hidden;
          font-family: 'Segoe UI', system-ui, Arial, sans-serif;
        }

        /* Ambient Background Blobs (Same as Hero) */
        .liquid-water {
          position: absolute; border-radius: 50%;
          pointer-events: none; z-index: 0; mix-blend-mode: screen;
        }
        .liquid-one {
          width: 520px; height: 520px; left: -200px; top: 8%;
          background: radial-gradient(circle at 45% 40%, rgba(198,164,82,0.10), rgba(198,164,82,0.02) 45%, transparent 72%);
          filter: blur(25px);
          animation: waterFlowOne 11s ease-in-out infinite alternate;
        }
        .liquid-two {
          width: 580px; height: 580px; right: -210px; top: 30%;
          background: radial-gradient(circle at 40% 50%, rgba(160,130,55,0.08), rgba(120,100,40,0.02) 45%, transparent 73%);
          filter: blur(28px);
          animation: waterFlowTwo 13s ease-in-out infinite alternate;
        }
        .drapery-line { position: absolute; pointer-events: none; z-index: 0; }
        .drapery-line-one {
          left: 6%; top: 0; bottom: 0; width: 1px;
          background: linear-gradient(180deg, transparent, rgba(198,164,82,0.06) 30%, rgba(198,164,82,0.10) 50%, rgba(198,164,82,0.06) 70%, transparent);
          animation: lineShimmer 8s ease-in-out infinite;
        }

        .about-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.95fr 1.05fr;
          gap: 95px;
          align-items: center;
          position: relative;
          z-index: 2;
        }

        /* ================================
           VISUAL
        ================================= */
        .about-visual {
          position: relative;
          padding: 0 25px 25px 0;
          animation: visualEnter 1s 0.2s cubic-bezier(0.16,1,0.3,1) both;
        }

        .about-image {
          position: relative;
          width: 100%;
          height: 610px;
          overflow: hidden;
          border-radius: 25px;
          background: #1a1610;
          box-shadow: 0 40px 100px rgba(0,0,0,0.50), 0 0 0 1px rgba(198,164,82,0.08);
          border: 5px solid rgba(26,22,16,0.95);
        }

        .about-image img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          transition: transform 0.8s ease;
          filter: saturate(0.9) contrast(1.05);
        }

        .about-image:hover img {
          transform: scale(1.05);
        }

        .about-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10, 12, 16, 0.85) 0%, rgba(10, 12, 16, 0.2) 55%, rgba(10, 12, 16, 0.02) 100%);
        }

        .about-image-text {
          position: absolute;
          left: 32px;
          right: 32px;
          bottom: 32px;
          color: white;
        }

        .about-image-text span {
          display: block;
          margin-bottom: 10px;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #c6a452;
          opacity: 0.9;
        }

        .about-image-text strong {
          display: block;
          font-size: clamp(30px, 4vw, 52px);
          line-height: 1;
          letter-spacing: -2px;
          color: #e8dcc8;
        }

        /* EXPERIENCE BADGE - Glassmorphism */
        .about-experience {
          position: absolute;
          right: -5px;
          bottom: -5px;
          width: 135px;
          height: 135px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: rgba(14,17,23,0.80);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(198,164,82,0.30);
          color: #e8dcc8;
          box-shadow: 0 15px 35px rgba(0,0,0,0.40);
          animation: floatBadge 4s ease-in-out infinite;
        }

        .about-experience strong {
          font-size: 35px;
          line-height: 1;
          color: #dbb856;
        }

        .about-experience span {
          margin-top: 7px;
          font-size: 8px;
          line-height: 1.4;
          font-weight: 800;
          letter-spacing: 1.5px;
          text-align: center;
          color: #8a8478;
        }

        /* ================================
           CONTENT
        ================================= */
        .about-content {
          padding-right: 20px;
          animation: textEnter 0.9s 0.4s cubic-bezier(0.16,1,0.3,1) both;
        }

        .about-label {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 22px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #c6a452;
        }

        .about-label span {
          width: 35px;
          height: 1px;
          background: #c6a452;
        }

        .about-content h2 {
          margin: 0;
          font-size: clamp(48px, 6vw, 78px);
          line-height: 0.94;
          letter-spacing: -4px;
          color: #e8dcc8;
        }

        .about-content h2 em {
          background: linear-gradient(135deg, #c6a452, #dbb856, #e8c860);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-family: Georgia, serif;
          font-weight: 400;
          letter-spacing: -2px;
        }

        .about-intro {
          max-width: 600px;
          margin: 32px 0 18px;
          font-size: 18px;
          line-height: 1.75;
          color: #9a9486;
        }

        .about-text {
          max-width: 590px;
          margin: 0 0 15px;
          font-size: 14px;
          line-height: 1.85;
          color: #6e6a5e;
        }

        /* ================================
           HIGHLIGHTS - Glassmorphism Cards
        ================================= */
        .about-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 38px;
        }

        .about-highlight {
          min-height: 110px;
          padding: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-radius: 15px;
          background: rgba(198,164,82,0.05);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(198,164,82,0.15);
          transition: transform 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        }

        .about-highlight:hover {
          transform: translateY(-5px);
          background: rgba(198,164,82,0.10);
          border-color: rgba(198,164,82,0.40);
        }

        .about-highlight strong {
          font-size: 25px;
          line-height: 1;
          color: #dbb856;
        }

        .about-highlight span {
          font-size: 9px;
          line-height: 1.4;
          color: #8a8478;
          font-weight: 700;
          letter-spacing: 0.5px;
        }

        /* ================================
           ANIMATIONS
        ================================= */
        @keyframes waterFlowOne {
          0% { transform: translate3d(0,0,0) scale(1) rotate(0deg); }
          50% { transform: translate3d(80px,45px,0) scale(1.12) rotate(8deg); }
          100% { transform: translate3d(140px,-25px,0) scale(0.96) rotate(-5deg); }
        }
        @keyframes waterFlowTwo {
          0% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-90px,65px,0) scale(1.13); }
          100% { transform: translate3d(-35px,120px,0) scale(0.94); }
        }
        @keyframes lineShimmer {
          0%,100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        @keyframes textEnter {
          from { opacity: 0; transform: translateY(28px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes visualEnter {
          from { opacity: 0; transform: translateX(40px) scale(0.96); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
        @keyframes floatBadge {
          0%,100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        /* ================================
           TABLET
        ================================= */
        @media (max-width: 950px) {
          .about-section { padding: 100px 5%; }
          .about-container {
            grid-template-columns: 1fr;
            gap: 65px;
          }
          .about-content { padding-right: 0; }
          .about-content h2 { max-width: 700px; }
          .about-intro, .about-text { max-width: 700px; }
          .about-image { height: 550px; }
        }

        /* ================================
           MOBILE
        ================================= */
        @media (max-width: 600px) {
          .about-section { padding: 80px 5%; }
          .about-container { gap: 50px; }
          .about-visual { padding: 0 12px 15px 0; }
          .about-image { height: 450px; border-radius: 19px; }
          .about-image-text { left: 22px; right: 22px; bottom: 22px; }
          .about-image-text strong { font-size: 31px; }
          
          .about-experience {
            width: 105px; height: 105px; right: -2px; bottom: -2px;
          }
          .about-experience strong { font-size: 28px; }
          .about-experience span { font-size: 7px; }

          .about-label { font-size: 9px; letter-spacing: 2px; }
          .about-content h2 { font-size: 48px; letter-spacing: -2px; }
          .about-intro { margin-top: 25px; font-size: 15px; line-height: 1.7; }
          .about-text { font-size: 13px; line-height: 1.8; }
          
          .about-highlights {
            grid-template-columns: 1fr;
            gap: 10px; margin-top: 28px;
          }
          .about-highlight { min-height: 90px; padding: 16px; }
        }
      `}</style>

      <section className="about-section" id="about">
        {/* Ambient Background Elements */}
        <div className="liquid-water liquid-one"></div>
        <div className="liquid-water liquid-two"></div>
        <div className="drapery-line drapery-line-one"></div>

        <div className="about-container">
          {/* LEFT VISUAL */}
          <div className="about-visual">
            <div className="about-image">
              <img
                src="/images/about.jpeg"
                alt="Growth Drapery stage costume collection"
              />
              <div className="about-image-overlay"></div>
              <div className="about-image-text">
                <span>GROWTH DRAPERY</span>
                <strong>
                  15+ Years of
                  <br />
                  Dressing Dreams
                </strong>
              </div>
            </div>

            <div className="about-experience">
              <strong>15+</strong>
              <span>
                YEARS
                <br />
                EXPERIENCE
              </span>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="about-content">
            <div className="about-label">
              <span></span>
              ABOUT US
            </div>

            <h2>
              More than
              <br />
              just a <em>costume.</em>
            </h2>

            <p className="about-intro">
              Growth Drapery is your one-stop destination for
              rental costumes and stage dresses designed to make
              every performance memorable.
            </p>

            <p className="about-text">
              With more than 15 years of experience, we offer a
              wide range of costumes for school annual functions,
              dance competitions, cultural programs, fancy dress
              events, theme performances, fashion shows and
              special occasions.
            </p>

            <p className="about-text">
              From classical and traditional looks to western,
              Bollywood, fantasy and theme-based costumes,
              our collection is created to help performers feel
              confident and stage-ready.
            </p>

            {/* MINI HIGHLIGHTS */}
            <div className="about-highlights">
              <div className="about-highlight">
                <strong>15+</strong>
                <span>Years of Experience</span>
              </div>

              <div className="about-highlight">
                <strong>∞</strong>
                <span>Performance Possibilities</span>
              </div>

              <div className="about-highlight">
                <strong>01</strong>
                <span>One-Stop Costume Destination</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;