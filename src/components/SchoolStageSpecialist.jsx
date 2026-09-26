import React from "react";

const SchoolStageSpecialist = () => {
  const highlights = [
    {
      number: "01",
      title: "School Annual Functions",
      text: "Specially selected costumes for annual day performances, group dances and school cultural programs.",
    },
    {
      number: "02",
      title: "Cultural Programs",
      text: "Traditional, folk and theme-based costumes designed to bring every cultural performance to life.",
    },
    {
      number: "03",
      title: "Stage Performances",
      text: "Performance-ready costumes for dance shows, competitions, events and special stage programs.",
    },
  ];

  return (
    <>
      <section className="school-stage-section">
        {/* Decorative Background */}
        <div className="school-glow school-glow-one"></div>
        <div className="school-glow school-glow-two"></div>

        <div className="school-stage-container">

          {/* TOP LABEL */}
          <div className="school-label">
            <span></span>
            OUR SPECIALITY
            <span></span>
          </div>

          {/* MAIN CONTENT */}
          <div className="school-stage-main">

            {/* LEFT CONTENT */}
            <div className="school-stage-content">

              <div className="experience-badge">
                <strong>15+</strong>
                <small>YEARS OF<br />EXPERIENCE</small>
              </div>

              <h2>
                Made for the
                <span> Spotlight.</span>
              </h2>

              <p className="school-intro">
                From school annual functions to grand stage performances,
                Growth Drapery brings together costumes that make every
                performance look special.
              </p>

              <p className="school-description">
                We understand that a great performance needs more than
                talent. The right costume helps performers feel confident,
                look coordinated and create a memorable impression on stage.
              </p>

              <a
                href="https://wa.me/917083512250"
                target="_blank"
                rel="noopener noreferrer"
                className="school-cta"
              >
                Enquire for Your Event
                <span>↗</span>
              </a>
            </div>

            {/* RIGHT VISUAL */}
            <div className="school-stage-visual">

              <div className="image-frame">
                <img
                  src="/images/events/events 3.png"
                  alt="Growth Drapery stage costumes"
                />

                <div className="image-overlay"></div>

                <div className="image-caption">
                  <span>GROWTH DRAPERY</span>
                  <strong>Costumes that perform with you.</strong>
                </div>
              </div>

              <div className="floating-card">
                <span className="floating-icon">✦</span>
                <div>
                  <strong>Stage Ready</strong>
                  <p>Costumes for every performance</p>
                </div>
              </div>

            </div>
          </div>

          {/* HIGHLIGHTS */}
          <div className="school-highlights">

            {highlights.map((item) => (
              <div className="highlight-card" key={item.number}>

                <div className="highlight-top">
                  <span>{item.number}</span>
                  <div className="highlight-line"></div>
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <div className="highlight-arrow">↗</div>
              </div>
            ))}

          </div>

        </div>
      </section>

      <style>{`

        /* ================================
           SCHOOL & STAGE SPECIALIST
        ================================= */

        .school-stage-section {
          position: relative;
          width: 100%;
          padding: 125px 6%;
          overflow: hidden;
          background:
            linear-gradient(
              135deg,
              #dcecf5 0%,
              #edf6f9 48%,
              #d5e9f2 100%
            );
          color: #17384d;
        }

        .school-stage-container {
          position: relative;
          max-width: 1400px;
          margin: 0 auto;
          z-index: 2;
        }

        /* Decorative Glow */

        .school-glow {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          pointer-events: none;
        }

        .school-glow-one {
          width: 430px;
          height: 430px;
          top: -180px;
          right: -130px;
          background: rgba(120, 184, 211, 0.22);
        }

        .school-glow-two {
          width: 330px;
          height: 330px;
          bottom: -170px;
          left: -120px;
          background: rgba(147, 201, 221, 0.20);
        }

        /* Label */

        .school-label {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          margin-bottom: 45px;

          font-size: 12px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #c6a452; /* Dark Yellow */
        }

        .school-label span {
          width: 38px;
          height: 1px;
          background: #c6a452; /* Dark Yellow */
        }

        /* Main Layout */

        .school-stage-main {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 80px;
          align-items: center;
        }

        /* Content */

        .school-stage-content {
          position: relative;
        }

        .experience-badge {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding: 10px 17px;
          border: 1px solid rgba(198, 164, 82, 0.30); /* Dark Yellow Border */
          border-radius: 50px;
          background: rgba(14, 17, 23, 0.4);
          backdrop-filter: blur(10px);
        }

        .experience-badge strong {
          font-size: 28px;
          line-height: 1;
          color: #c6a452; /* Dark Yellow */
        }

        .experience-badge small {
          font-size: 9px;
          line-height: 1.3;
          font-weight: 800;
          letter-spacing: 1.5px;
          color: #e8dcc8; /* Dark White */
        }

        .school-stage-content h2 {
          margin: 0;
          max-width: 600px;
          font-size: clamp(48px, 5.5vw, 82px);
          line-height: 0.98;
          letter-spacing: -3px;
          font-weight: 800;
          color: #e8dcc8; /* Dark White */
        }

        .school-stage-content h2 span {
          display: block;
          color: #c6a452; /* Dark Yellow */
        }

        .school-intro {
          max-width: 590px;
          margin: 32px 0 15px;
          font-size: 18px;
          line-height: 1.75;
          color: #e8dcc8; /* Dark White */
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }

        .school-description {
          max-width: 570px;
          margin: 0;
          font-size: 14px;
          line-height: 1.8;
          color: #e8dcc8; /* Dark White */
          text-shadow: 0 1px 2px rgba(0,0,0,0.3);
        }

        /* CTA */

        .school-cta {
          display: inline-flex;
          align-items: center;
          gap: 20px;
          margin-top: 34px;
          padding: 15px 22px 15px 25px;

          text-decoration: none;
          border-radius: 50px;

          background: #c6a452; /* Dark Yellow */
          color: #0e1117;

          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.3px;

          box-shadow: 0 14px 30px rgba(198, 164, 82, 0.30);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;
        }

        .school-cta span {
          width: 31px;
          height: 31px;
          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: rgba(14, 17, 23, 0.15);

          font-size: 17px;

          transition: transform 0.3s ease;
        }

        .school-cta:hover {
          transform: translateY(-4px);
          background: #dbb856;
          box-shadow: 0 18px 35px rgba(198, 164, 82, 0.40);
        }

        .school-cta:hover span {
          transform: rotate(45deg);
        }

        /* Visual */

        .school-stage-visual {
          position: relative;
          min-height: 570px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .image-frame {
          position: relative;
          width: min(100%, 650px);
          height: 570px;
          overflow: hidden;
          border-radius: 28px;
          background: #1a1610; /* Dark BG */

          box-shadow:
            0 30px 70px rgba(0, 0, 0, 0.50);

          transform: rotate(1deg);
          transition: transform 0.5s ease;
          border: 3px solid rgba(198, 164, 82, 0.15);
        }

        .image-frame:hover {
          transform: rotate(0deg) scale(1.01);
        }

        .image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;

          transition: transform 0.8s ease;
        }

        .image-frame:hover img {
          transform: scale(1.05);
        }

        .image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(10, 12, 16, 0.85) 0%,
              rgba(10, 12, 16, 0.20) 48%,
              rgba(10, 12, 16, 0.02) 100%
            );
        }

        .image-caption {
          position: absolute;
          left: 32px;
          right: 32px;
          bottom: 30px;

          display: flex;
          flex-direction: column;
          gap: 7px;

          color: white;
        }

        .image-caption span {
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;
          color: #c6a452; /* Dark Yellow */
          opacity: 1;
        }

        .image-caption strong {
          max-width: 400px;
          font-size: clamp(24px, 3vw, 38px);
          line-height: 1.1;
          letter-spacing: -1px;
          color: #e8dcc8; /* Dark White */
        }

        /* Floating Card */

        .floating-card {
          position: absolute;
          left: -30px;
          bottom: 55px;

          display: flex;
          align-items: center;
          gap: 13px;

          padding: 15px 20px;

          border-radius: 17px;
          background: rgba(14, 17, 23, 0.85); /* Dark Glass */
          backdrop-filter: blur(15px);
          border: 1px solid rgba(198, 164, 82, 0.20);

          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.40);

          animation: floatingCard 3.5s ease-in-out infinite;
        }

        .floating-icon {
          width: 40px;
          height: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: rgba(198, 164, 82, 0.15);

          color: #c6a452; /* Dark Yellow */
          font-size: 20px;
        }

        .floating-card strong {
          display: block;
          font-size: 13px;
          color: #e8dcc8; /* Dark White */
        }

        .floating-card p {
          margin: 3px 0 0;
          font-size: 10px;
          color: #b3a994; /* Muted Dark White */
        }

        @keyframes floatingCard {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        /* Highlights */

        .school-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;

          margin-top: 100px;
        }

        .highlight-card {
          position: relative;
          min-height: 235px;

          padding: 28px;

          border: 1px solid rgba(198, 164, 82, 0.15);
          border-radius: 20px;

          background: rgba(14, 17, 23, 0.4); /* Dark Glass */
          backdrop-filter: blur(10px);

          overflow: hidden;

          transition:
            transform 0.35s ease,
            background 0.35s ease,
            box-shadow 0.35s ease;
        }

        .highlight-card:hover {
          transform: translateY(-8px);
          background: rgba(14, 17, 23, 0.6);
          box-shadow: 0 18px 40px rgba(0, 0, 0, 0.30);
          border-color: rgba(198, 164, 82, 0.30);
        }

        .highlight-top {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-bottom: 35px;
        }

        .highlight-top span {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 1px;
          color: #c6a452; /* Dark Yellow */
        }

        .highlight-line {
          width: 45px;
          height: 1px;
          background: #c6a452; /* Dark Yellow */
        }

        .highlight-card h3 {
          margin: 0 0 13px;
          font-size: 21px;
          line-height: 1.2;
          color: #e8dcc8; /* Dark White */
        }

        .highlight-card p {
          max-width: 340px;
          margin: 0;

          font-size: 13px;
          line-height: 1.75;
          color: #e8dcc8; /* Dark White */
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        }

        .highlight-arrow {
          position: absolute;
          right: 25px;
          bottom: 22px;

          width: 32px;
          height: 32px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;
          background: rgba(198, 164, 82, 0.15);

          color: #c6a452; /* Dark Yellow */
          font-size: 15px;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .highlight-card:hover .highlight-arrow {
          transform: rotate(45deg);
          background: rgba(198, 164, 82, 0.30);
        }

        /* ================================
           TABLET
        ================================= */

        @media (max-width: 1000px) {

          .school-stage-section {
            padding: 100px 5%;
          }

          .school-stage-main {
            grid-template-columns: 1fr;
            gap: 60px;
          }

          .school-stage-content {
            text-align: center;
          }

          .school-stage-content h2 {
            margin: 0 auto;
          }

          .school-intro,
          .school-description {
            margin-left: auto;
            margin-right: auto;
          }

          .school-stage-visual {
            min-height: auto;
          }

          .image-frame {
            height: 500px;
          }

          .floating-card {
            left: 20px;
          }

          .school-highlights {
            margin-top: 70px;
          }
        }

        /* ================================
           MOBILE
        ================================= */

        @media (max-width: 650px) {

          .school-stage-section {
            padding: 80px 5%;
          }

          .school-label {
            margin-bottom: 30px;
            font-size: 10px;
            letter-spacing: 2px;
          }

          .school-label span {
            width: 25px;
          }

          .experience-badge {
            padding: 8px 13px;
          }

          .experience-badge strong {
            font-size: 23px;
          }

          .school-stage-content h2 {
            font-size: 48px;
            letter-spacing: -2px;
          }

          .school-intro {
            margin-top: 24px;
            font-size: 15px;
            line-height: 1.7;
          }

          .school-description {
            font-size: 13px;
          }

          .school-cta {
            margin-top: 27px;
          }

          .school-stage-visual {
            margin-top: 10px;
            padding-bottom: 35px;
          }

          .image-frame {
            width: 100%;
            height: 430px;
            border-radius: 20px;
          }

          .image-caption {
            left: 22px;
            right: 22px;
            bottom: 22px;
          }

          .image-caption strong {
            font-size: 27px;
          }

          .floating-card {
            left: 8px;
            bottom: 5px;
            padding: 11px 14px;
          }

          .floating-icon {
            width: 34px;
            height: 34px;
            font-size: 16px;
          }

          .floating-card strong {
            font-size: 11px;
          }

          .floating-card p {
            font-size: 9px;
          }

          .school-highlights {
            grid-template-columns: 1fr;
            gap: 14px;
            margin-top: 45px;
          }

          .highlight-card {
            min-height: auto;
            padding: 23px;
          }

          .highlight-top {
            margin-bottom: 25px;
          }

          .highlight-card h3 {
            font-size: 19px;
          }

          .highlight-card p {
            font-size: 12px;
          }
        }

      `}</style>
    </>
  );
};

export default SchoolStageSpecialist;