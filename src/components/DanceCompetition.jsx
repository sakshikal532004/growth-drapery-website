import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DanceCompetition = () => {
  const images = [
    "/images/western/western 1.jpeg",
    "/images/classical/classical 1.jpeg",
    "/images/traditional/traditional 1.jpeg",
    "/images/fancy-dress/fancy 1.jpeg",
    "/images/events/events 1.jpeg",
  ];

  const captions = [
    {
      title: "Make Every Move Stand Out",
      subtitle: "Dance Competition Costumes",
    },
    {
      title: "Grace Meets Performance",
      subtitle: "Classical Dance Costumes",
    },
    {
      title: "Celebrate Every Tradition",
      subtitle: "Traditional & Folk Costumes",
    },
    {
      title: "Bring Your Theme to Life",
      subtitle: "Creative Performance Costumes",
    },
    {
      title: "Own the Stage",
      subtitle: "Stage Performance Costumes",
    },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <div className="dance-page">

        {/* ================= HEADER ================= */}

        <header className="dance-header">
          <Link to="/" className="back-link">
            <span>←</span>
            Back to Collection
          </Link>

          <div className="dance-brand">
            GROWTH <span>DRAPERY</span>
          </div>

          <a
            href="https://wa.me/917083512250"
            target="_blank"
            rel="noopener noreferrer"
            className="header-enquire"
          >
            Enquire
          </a>
        </header>


        {/* ================= HERO ================= */}

        <section className="dance-hero">

          <div className="hero-background-number">
            05
          </div>

          <div className="dance-hero-content">

            <div className="small-label">
              <span></span>
              DANCE COMPETITION
            </div>

            <h1>
              Dress for the
              <em> moment.</em>
            </h1>

            <p>
              Stand out on stage with costumes designed for dance
              competitions, group performances and special events.
            </p>

            <div className="hero-note">
              <span>✦</span>
              Performance-ready rental costumes
            </div>

          </div>

          <div className="hero-side-text">
            DANCE
            <br />
            PERFORMANCE
          </div>

        </section>


        {/* ================= SLIDER ================= */}

        <section className="dance-slider-section">

          <div className="slider-top">

            <div>
              <span className="section-label">
                OUR COLLECTION
              </span>

              <h2>
                Costumes made to
                <span> move.</span>
              </h2>
            </div>

            <div className="slider-counter">
              <strong>
                {String(current + 1).padStart(2, "0")}
              </strong>

              <span>/</span>

              <span>
                {String(images.length).padStart(2, "0")}
              </span>
            </div>

          </div>


          <div className="dance-slider">

            {/* IMAGE */}

            <div className="dance-image-wrapper">

              <img
                key={images[current]}
                src={images[current]}
                alt={captions[current].subtitle}
                className="dance-main-image"
              />

              <div className="dance-image-overlay"></div>

              <div className="slide-caption">

                <span>
                  {captions[current].subtitle}
                </span>

                <h3>
                  {captions[current].title}
                </h3>

              </div>

              <div className="slide-number">
                {String(current + 1).padStart(2, "0")}
              </div>

            </div>


            {/* CONTROLS */}

            <div className="slider-controls">

              <button
                onClick={previousSlide}
                aria-label="Previous costume"
              >
                ←
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next costume"
              >
                →
              </button>

            </div>

          </div>


          {/* PROGRESS */}

          <div className="dance-progress">

            <div className="progress-track">
              <div
                className="progress-active"
                style={{
                  width: `${((current + 1) / images.length) * 100}%`,
                }}
              ></div>
            </div>

            <div className="progress-dots">

              {images.map((_, index) => (
                <button
                  key={index}
                  className={
                    index === current ? "active-dot" : ""
                  }
                  onClick={() => setCurrent(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}

            </div>

          </div>

        </section>


        {/* ================= INFORMATION ================= */}

        <section className="dance-info-section">

          <div className="info-heading">

            <span className="section-label">
              MADE FOR PERFORMERS
            </span>

            <h2>
              Your performance
              <br />
              deserves the <span>right look.</span>
            </h2>

          </div>


          <div className="info-content">

            <p className="info-main-text">
              Whether it is a solo performance, a group dance or a
              school-level competition, the right costume can bring
              the entire performance together.
            </p>

            <div className="info-points">

              <div className="info-point">
                <span>01</span>

                <div>
                  <h3>Stage Presence</h3>

                  <p>
                    Eye-catching costumes that help performers
                    create a strong visual presence on stage.
                  </p>
                </div>
              </div>


              <div className="info-point">
                <span>02</span>

                <div>
                  <h3>Group Coordination</h3>

                  <p>
                    Costume options for groups, teams and
                    coordinated dance performances.
                  </p>
                </div>
              </div>


              <div className="info-point">
                <span>03</span>

                <div>
                  <h3>Multiple Themes</h3>

                  <p>
                    Choose from classical, western, traditional,
                    fancy dress and theme-based styles.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section className="dance-cta-section">

          <div className="cta-decoration">
            ✦
          </div>

          <div className="cta-content">

            <span className="section-label">
              READY FOR THE STAGE?
            </span>

            <h2>
              Let's find your
              <span> perfect costume.</span>
            </h2>

            <p>
              Tell us about your performance, theme and requirements.
              We'll help you explore suitable rental costumes.
            </p>

            <a
              href="https://wa.me/917083512250"
              target="_blank"
              rel="noopener noreferrer"
              className="dance-cta-button"
            >
              Book Your Costume

              <span>↗</span>
            </a>

          </div>

        </section>


        {/* ================= FOOTER ================= */}

        <footer className="dance-footer">

          <div className="footer-brand">
            GROWTH DRAPERY
          </div>

          <p>
            Rental Dress & Stage Costume Shop
          </p>

          <a href="tel:+917083512250">
            7083512250
          </a>

          <span className="footer-copy">
            © {new Date().getFullYear()} Growth Drapery
          </span>

        </footer>

      </div>


      {/* ================= CSS ================= */}

      <style>{`

        * {
          box-sizing: border-box;
        }

        .dance-page {
          width: 100%;
          min-height: 100vh;
          background: #edf6f9;
          color: #17384d;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }


        /* ================= HEADER ================= */

        .dance-header {
          width: 100%;
          height: 78px;
          padding: 0 6%;

          display: flex;
          align-items: center;
          justify-content: space-between;

          background: rgba(237, 246, 249, 0.94);
          border-bottom: 1px solid rgba(49, 100, 123, 0.10);

          position: relative;
          z-index: 10;
        }

        .back-link {
          display: flex;
          align-items: center;
          gap: 10px;

          color: #557789;
          text-decoration: none;

          font-size: 12px;
          font-weight: 700;

          transition: color 0.3s ease;
        }

        .back-link span {
          font-size: 18px;
          transition: transform 0.3s ease;
        }

        .back-link:hover {
          color: #245d78;
        }

        .back-link:hover span {
          transform: translateX(-4px);
        }

        .dance-brand {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);

          font-size: 15px;
          font-weight: 900;
          letter-spacing: 3px;

          color: #245d78;
        }

        .dance-brand span {
          font-weight: 500;
          color: #7193a2;
        }

        .header-enquire {
          padding: 10px 20px;

          border-radius: 30px;

          background: #245d78;
          color: white;

          text-decoration: none;

          font-size: 11px;
          font-weight: 700;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .header-enquire:hover {
          transform: translateY(-2px);
          background: #173f54;
        }


        /* ================= HERO ================= */

        .dance-hero {
          position: relative;

          min-height: 470px;

          padding: 100px 6% 90px;

          display: flex;
          align-items: center;

          background:
            radial-gradient(
              circle at 80% 20%,
              rgba(122, 181, 207, 0.28),
              transparent 32%
            ),
            linear-gradient(
              135deg,
              #d9ebf3,
              #edf6f9 55%,
              #d4e8f1
            );

          overflow: hidden;
        }

        .hero-background-number {
          position: absolute;
          right: 5%;
          top: 20px;

          font-size: clamp(180px, 25vw, 360px);
          font-weight: 900;
          line-height: 1;

          color: rgba(48, 106, 132, 0.055);

          pointer-events: none;
        }

        .dance-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
        }

        .small-label {
          display: flex;
          align-items: center;
          gap: 12px;

          margin-bottom: 25px;

          color: #5e8496;

          font-size: 11px;
          font-weight: 800;
          letter-spacing: 3px;
        }

        .small-label span {
          width: 35px;
          height: 1px;
          background: #719bac;
        }

        .dance-hero h1 {
          margin: 0;

          font-size: clamp(55px, 8vw, 105px);
          line-height: 0.9;

          letter-spacing: -5px;

          color: #17384d;
        }

        .dance-hero h1 em {
          display: block;

          color: #397895;
          font-family: Georgia, serif;
          font-weight: 400;

          letter-spacing: -4px;
        }

        .dance-hero p {
          max-width: 600px;

          margin: 30px 0 0;

          font-size: 16px;
          line-height: 1.8;

          color: #607f8e;
        }

        .hero-note {
          display: flex;
          align-items: center;
          gap: 10px;

          margin-top: 27px;

          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.5px;

          color: #477489;
        }

        .hero-note span {
          width: 28px;
          height: 28px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(255,255,255,0.65);

          color: #397895;
        }

        .hero-side-text {
          position: absolute;
          right: 6%;
          bottom: 55px;

          writing-mode: vertical-rl;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 5px;

          color: rgba(43, 93, 114, 0.42);
        }


        /* ================= SLIDER ================= */

        .dance-slider-section {
          padding: 115px 6% 120px;

          background: #f5fafb;
        }

        .slider-top {
          max-width: 1400px;
          margin: 0 auto 45px;

          display: flex;
          align-items: flex-end;
          justify-content: space-between;
        }

        .section-label {
          display: block;

          margin-bottom: 13px;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;

          color: #6a8d9d;
        }

        .slider-top h2 {
          margin: 0;

          font-size: clamp(38px, 5vw, 65px);
          line-height: 1;

          letter-spacing: -3px;

          color: #17384d;
        }

        .slider-top h2 span {
          color: #397895;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .slider-counter {
          display: flex;
          align-items: baseline;
          gap: 8px;

          color: #8ca4af;
        }

        .slider-counter strong {
          font-size: 32px;
          color: #245d78;
        }

        .slider-counter span {
          font-size: 12px;
        }

        .dance-slider {
          position: relative;

          max-width: 1400px;
          margin: auto;
        }

        .dance-image-wrapper {
          position: relative;

          width: 100%;
          height: min(65vw, 700px);

          min-height: 420px;

          overflow: hidden;

          border-radius: 25px;

          background: #cbdfe7;

          box-shadow:
            0 30px 70px rgba(42, 83, 101, 0.17);

          animation: slideReveal 0.65s ease;
        }

        @keyframes slideReveal {
          from {
            opacity: 0.65;
            transform: scale(0.985);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .dance-main-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          animation: imageZoom 4.5s ease;
        }

        @keyframes imageZoom {
          from {
            transform: scale(1.04);
          }

          to {
            transform: scale(1);
          }
        }

        .dance-image-overlay {
          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              to top,
              rgba(12, 39, 53, 0.78) 0%,
              rgba(12, 39, 53, 0.20) 45%,
              rgba(12, 39, 53, 0.02) 100%
            );
        }

        .slide-caption {
          position: absolute;

          left: 45px;
          bottom: 42px;

          color: white;
        }

        .slide-caption span {
          display: block;

          margin-bottom: 10px;

          font-size: 10px;
          font-weight: 800;
          letter-spacing: 3px;

          opacity: 0.75;
        }

        .slide-caption h3 {
          margin: 0;

          max-width: 600px;

          font-size: clamp(30px, 4.5vw, 62px);
          line-height: 1;

          letter-spacing: -2px;
        }

        .slide-number {
          position: absolute;

          top: 28px;
          right: 32px;

          width: 52px;
          height: 52px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(255,255,255,0.17);
          backdrop-filter: blur(10px);

          color: white;

          font-size: 12px;
          font-weight: 800;
        }


        /* ================= CONTROLS ================= */

        .slider-controls {
          position: absolute;

          right: 30px;
          bottom: 30px;

          display: flex;
          gap: 8px;
        }

        .slider-controls button {
          width: 52px;
          height: 52px;

          border: 1px solid rgba(255,255,255,0.35);
          border-radius: 50%;

          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(12px);

          color: white;

          font-size: 19px;

          cursor: pointer;

          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .slider-controls button:hover {
          background: rgba(255,255,255,0.30);
          transform: translateY(-3px);
        }


        /* ================= PROGRESS ================= */

        .dance-progress {
          max-width: 1400px;

          margin: 24px auto 0;

          display: flex;
          align-items: center;
          gap: 35px;
        }

        .progress-track {
          flex: 1;

          height: 2px;

          background: #d6e5eb;
        }

        .progress-active {
          height: 100%;

          background: #397895;

          transition: width 0.5s ease;
        }

        .progress-dots {
          display: flex;
          gap: 7px;
        }

        .progress-dots button {
          width: 7px;
          height: 7px;

          padding: 0;

          border: none;
          border-radius: 50%;

          background: #b9ccd4;

          cursor: pointer;

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .progress-dots button.active-dot {
          background: #397895;
          transform: scale(1.5);
        }


        /* ================= INFO ================= */

        .dance-info-section {
          max-width: 1400px;

          margin: 0 auto;

          padding: 110px 6%;

          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 90px;
        }

        .info-heading h2 {
          margin: 0;

          font-size: clamp(38px, 5vw, 67px);
          line-height: 1;

          letter-spacing: -3px;

          color: #17384d;
        }

        .info-heading h2 span {
          color: #397895;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .info-content {
          padding-top: 10px;
        }

        .info-main-text {
          max-width: 570px;

          margin: 0 0 45px;

          font-size: 17px;
          line-height: 1.8;

          color: #5f7d8c;
        }

        .info-points {
          display: flex;
          flex-direction: column;
        }

        .info-point {
          display: grid;
          grid-template-columns: 45px 1fr;

          gap: 15px;

          padding: 23px 0;

          border-top: 1px solid #d7e5ea;
        }

        .info-point:last-child {
          border-bottom: 1px solid #d7e5ea;
        }

        .info-point > span {
          font-size: 10px;
          font-weight: 800;
          color: #7799a7;
        }

        .info-point h3 {
          margin: 0 0 7px;

          font-size: 18px;

          color: #214b61;
        }

        .info-point p {
          max-width: 450px;

          margin: 0;

          font-size: 12px;
          line-height: 1.7;

          color: #77919d;
        }


        /* ================= CTA ================= */

        .dance-cta-section {
          position: relative;

          margin: 0 6% 90px;

          padding: 90px 8%;

          overflow: hidden;

          border-radius: 28px;

          background:
            radial-gradient(
              circle at 90% 20%,
              rgba(123, 185, 211, 0.25),
              transparent 30%
            ),
            linear-gradient(
              135deg,
              #d8ebf3,
              #c9e1eb
            );

          text-align: center;
        }

        .cta-decoration {
          position: absolute;

          right: 8%;
          top: 20px;

          font-size: 150px;

          color: rgba(49, 104, 129, 0.07);
        }

        .cta-content {
          position: relative;
          z-index: 2;
        }

        .cta-content h2 {
          margin: 0;

          font-size: clamp(40px, 5vw, 68px);
          line-height: 1;

          letter-spacing: -3px;

          color: #17384d;
        }

        .cta-content h2 span {
          display: block;

          color: #397895;
          font-family: Georgia, serif;
          font-weight: 400;
        }

        .cta-content p {
          max-width: 570px;

          margin: 25px auto 30px;

          font-size: 14px;
          line-height: 1.8;

          color: #628291;
        }

        .dance-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 17px;

          padding: 15px 17px 15px 24px;

          border-radius: 50px;

          background: #245d78;
          color: white;

          text-decoration: none;

          font-size: 12px;
          font-weight: 700;

          box-shadow:
            0 14px 30px rgba(36, 93, 120, 0.20);

          transition:
            transform 0.3s ease,
            background 0.3s ease;
        }

        .dance-cta-button span {
          width: 31px;
          height: 31px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(255,255,255,0.15);

          font-size: 16px;

          transition: transform 0.3s ease;
        }

        .dance-cta-button:hover {
          transform: translateY(-4px);
          background: #173f54;
        }

        .dance-cta-button:hover span {
          transform: rotate(45deg);
        }


        /* ================= FOOTER ================= */

        .dance-footer {
          padding: 35px 6%;

          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;

          border-top: 1px solid rgba(70, 115, 133, 0.12);

          color: #75909c;

          font-size: 11px;
        }

        .footer-brand {
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 2px;
          color: #245d78;
        }

        .dance-footer p {
          margin: 0;
        }

        .dance-footer a {
          color: #397895;
          text-decoration: none;
          font-weight: 700;
        }

        .footer-copy {
          color: #91a5ae;
        }


        /* ================= TABLET ================= */

        @media (max-width: 900px) {

          .dance-info-section {
            grid-template-columns: 1fr;
            gap: 50px;
          }

          .info-content {
            padding-top: 0;
          }

          .dance-hero {
            min-height: 420px;
          }

          .hero-side-text {
            display: none;
          }

        }


        /* ================= MOBILE ================= */

        @media (max-width: 600px) {

          .dance-header {
            height: 68px;
            padding: 0 5%;
          }

          .back-link {
            font-size: 10px;
          }

          .dance-brand {
            font-size: 11px;
            letter-spacing: 2px;
          }

          .header-enquire {
            padding: 8px 13px;
            font-size: 9px;
          }


          .dance-hero {
            min-height: 430px;

            padding: 80px 5% 70px;
          }

          .dance-hero h1 {
            font-size: 58px;
            letter-spacing: -3px;
          }

          .dance-hero h1 em {
            letter-spacing: -2px;
          }

          .dance-hero p {
            margin-top: 24px;
            font-size: 13px;
          }

          .hero-background-number {
            font-size: 180px;
            right: -15px;
            top: 30px;
          }


          .dance-slider-section {
            padding: 80px 5%;
          }

          .slider-top {
            align-items: flex-end;
            gap: 20px;
          }

          .slider-top h2 {
            font-size: 39px;
            letter-spacing: -2px;
          }

          .slider-counter {
            flex-shrink: 0;
          }

          .slider-counter strong {
            font-size: 23px;
          }

          .dance-image-wrapper {
            min-height: 440px;
            height: 115vw;
            max-height: 600px;

            border-radius: 18px;
          }

          .slide-caption {
            left: 22px;
            bottom: 24px;
            right: 80px;
          }

          .slide-caption span {
            font-size: 8px;
            letter-spacing: 2px;
          }

          .slide-caption h3 {
            font-size: 29px;
            letter-spacing: -1px;
          }

          .slide-number {
            top: 18px;
            right: 18px;

            width: 42px;
            height: 42px;
          }

          .slider-controls {
            right: 18px;
            bottom: 18px;
          }

          .slider-controls button {
            width: 42px;
            height: 42px;
            font-size: 15px;
          }

          .dance-progress {
            gap: 18px;
          }


          .dance-info-section {
            padding: 75px 5%;

            gap: 40px;
          }

          .info-heading h2 {
            font-size: 42px;
            letter-spacing: -2px;
          }

          .info-main-text {
            font-size: 14px;
          }

          .info-point {
            grid-template-columns: 35px 1fr;
          }


          .dance-cta-section {
            margin: 0 5% 55px;
            padding: 65px 7%;

            border-radius: 20px;
          }

          .cta-content h2 {
            font-size: 42px;
            letter-spacing: -2px;
          }

          .cta-content p {
            font-size: 12px;
          }

          .cta-decoration {
            font-size: 90px;
          }


          .dance-footer {
            padding: 30px 5%;

            flex-direction: column;
            text-align: center;

            gap: 10px;
          }

        }

      `}</style>
    </>
  );
};

export default DanceCompetition;