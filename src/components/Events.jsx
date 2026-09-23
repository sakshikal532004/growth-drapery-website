import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const EventsPage = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const images = [
    {
      src: "/images/image 1.jpeg",
      title: "Make Your School Events Memorable!",
      subtitle: "Annual Day • Cultural Program • Dance Competition",
    },
    {
      src: "/images/image 2.png",
      title: "Growth Drapery and Events",
      subtitle: "Bringing energy to the stage with perfect costumes.",
    },
    {
      src: "/images/image 3.jpeg",
      title: "Tradition in Every Step",
      subtitle: "Culture in Every Move. Express | Inspire | Unite.",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextSlide = () => setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <div className="events-page" id="events">
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        
        .events-page {
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          background: linear-gradient(175deg, #0e1117 0%, #141820 35%, #1a1610 65%, #100e0a 100%);
          color: #e8dcc8;
          font-family: 'Segoe UI', system-ui, Arial, sans-serif;
        }

        .bg-liquid { position: absolute; border-radius: 50%; pointer-events: none; z-index: 0; mix-blend-mode: screen; }
        .bg-liquid-one { width: 520px; height: 520px; left: -200px; top: 4%; background: radial-gradient(circle at 45% 40%, rgba(198,164,82,0.10), transparent 72%); filter: blur(25px); animation: bgFlowOne 11s ease-in-out infinite alternate; }
        .bg-liquid-two { width: 580px; height: 580px; right: -210px; top: 30%; background: radial-gradient(circle at 40% 50%, rgba(160,130,55,0.08), transparent 73%); filter: blur(28px); animation: bgFlowTwo 13s ease-in-out infinite alternate; }
        .bg-ring { position: absolute; border-radius: 50%; border: 1px solid rgba(198,164,82,0.08); pointer-events: none; z-index: 0; }
        .bg-ring-one { width: 500px; height: 500px; right: -190px; bottom: -170px; animation: bgRingPulse 6s ease-in-out infinite; }
        .drapery-line { position: absolute; pointer-events: none; z-index: 0; left: 6%; top: 0; bottom: 0; width: 1px; background: linear-gradient(180deg, transparent, rgba(198,164,82,0.10) 50%, transparent); animation: lineShimmer 8s ease-in-out infinite; }

        @keyframes bgFlowOne { 0% { transform: translate3d(0,0,0) scale(1); } 100% { transform: translate3d(140px,-25px,0) scale(0.96); } }
        @keyframes bgFlowTwo { 0% { transform: translate3d(0,0,0) scale(1); } 100% { transform: translate3d(-35px,120px,0) scale(0.94); } }
        @keyframes bgRingPulse { 0%, 100% { transform: scale(1); opacity: 0.6; } 50% { transform: scale(1.08); opacity: 0.28; } }
        @keyframes lineShimmer { 0%,100% { opacity: 0.5; } 50% { opacity: 1; } }

        .events-header { position: sticky; top: 0; width: 100%; padding: 18px 6%; background: rgba(14, 17, 23, 0.70); border-bottom: 1px solid rgba(198, 164, 82, 0.15); backdrop-filter: blur(20px) saturate(1.4); z-index: 10; display: flex; justify-content: center; align-items: center; }
        .header-brand span { font-size: 12px; font-weight: 900; letter-spacing: 3px; color: #e8dcc8; }

        .container { max-width: 800px; margin: 0 auto; padding: 60px 6% 110px; position: relative; z-index: 2; text-align: center; }

        /* Image Box - Text ke Niche */
        .slider-wrapper { 
          width: 100%; 
          max-width: 500px; 
          margin: 0 auto 40px; /* Niche 40px gap */
          animation: visualEnter 1s 0.3s cubic-bezier(0.16,1,0.3,1) both; 
        }
        
        .slider-image-box { 
          position: relative; 
          width: 100%; 
          aspect-ratio: 1 / 1; 
          overflow: hidden; 
          border-radius: 20px; 
          background: #0e1117; 
          box-shadow: 0 40px 100px rgba(0,0,0,0.50), 0 0 0 1px rgba(198,164,82,0.08); 
          border: 3px solid rgba(26,22,16,0.95); 
        }
        
        /* Image proper uper (top) set karne ke liye object-position: top use kiya */
        .slider-image { 
          position: absolute; 
          inset: 0; 
          width: 100%; 
          height: 100%; 
          object-fit: contain; 
          object-position: top center;
          opacity: 0; 
          transform: scale(1.02); 
          transition: opacity 1s ease, transform 1.2s ease; 
        }
        .slider-image.active { opacity: 1; transform: scale(1); }
        
        .slider-controls { 
          position: absolute; 
          top: 50%; 
          transform: translateY(-50%); 
          width: 100%; 
          display: flex; 
          justify-content: space-between; 
          padding: 0 15px; 
          z-index: 3; 
          pointer-events: none;
        }
        .slider-controls button { 
          pointer-events: all;
          width: 40px; 
          height: 40px; 
          border: 1px solid rgba(198, 164, 82, 0.30); 
          border-radius: 50%; 
          background: rgba(14, 17, 23, 0.80); 
          color: #c6a452; 
          font-size: 16px; 
          cursor: pointer; 
          backdrop-filter: blur(8px); 
          transition: all 0.3s ease; 
        }
        .slider-controls button:hover { background: rgba(198, 164, 82, 0.15); border-color: #c6a452; color: #dbb856; }
        
        /* Text ab image ke uper perfectly center mein */
        .hero-text { 
          text-align: center; 
          margin-bottom: 40px; 
          animation: textEnter 0.9s 0.2s cubic-bezier(0.16,1,0.3,1) both; 
          display: flex; 
          flex-direction: column; 
          align-items: center; 
        }
        .hero-text h1 { 
          width: 100%;
          font-size: clamp(36px, 6vw, 60px); 
          color: #e8dcc8; 
          letter-spacing: -3px; 
          margin-bottom: 15px; 
          line-height: 1.1; 
          text-align: center;
        }
        .hero-text h1 em { 
          display: inline-block; 
          background: linear-gradient(135deg, #c6a452, #dbb856, #e8c860); 
          -webkit-background-clip: text; 
          -webkit-text-fill-color: transparent; 
          background-clip: text;
          font-family: Georgia, serif; 
          font-style: italic; 
          padding: 0 5px; 
        }
        .hero-text p { 
          max-width: 600px; 
          width: 100%;
          margin: 0 auto; 
          color: #7d7768; 
          font-size: 15px; 
          line-height: 1.7; 
          text-align: center;
        }

        /* Slider Caption (Image niche wala text) */
        .slide-caption-below {
          text-align: center;
          margin-top: 20px;
          animation: textEnter 0.9s 0.5s cubic-bezier(0.16,1,0.3,1) both;
          padding-bottom: 30px;
          border-bottom: 1px solid rgba(198, 164, 82, 0.10);
          margin-bottom: 60px;
        }
        .slide-caption-below span { 
          display: block; 
          color: #c6a452; 
          font-size: 10px; 
          font-weight: 800; 
          letter-spacing: 3px; 
          margin-bottom: 8px; 
        }
        .slide-caption-below h3 { 
          font-size: 22px; 
          color: #e8dcc8; 
          line-height: 1.2; 
          margin-bottom: 6px; 
        }
        .slide-caption-below p { 
          color: #7d7768; 
          font-size: 14px; 
        }

        .slider-dots { display: flex; justify-content: center; gap: 9px; margin-top: 15px; }
        .dot { width: 8px; height: 8px; border: none; border-radius: 50%; background: rgba(198, 164, 82, 0.20); cursor: pointer; transition: all 0.3s ease; }
        .dot.active { width: 28px; border-radius: 20px; background: linear-gradient(90deg, #c6a452, #dbb856); }

        .video-section { margin-top: 60px; display: flex; flex-direction: column; align-items: center; animation: textEnter 1s 0.4s cubic-bezier(0.16,1,0.3,1) both; }
        .video-label { color: #c6a452; font-size: 10px; font-weight: 800; letter-spacing: 3px; margin-bottom: 15px; }
        .video-title { font-size: clamp(30px, 4vw, 48px); color: #e8dcc8; text-align: center; margin-bottom: 40px; letter-spacing: -1px; }
        
        .video-thumbnail-wrapper { position: relative; width: 100%; max-width: 800px; height: 450px; border-radius: 20px; overflow: hidden; cursor: pointer; border: 1px solid rgba(198, 164, 82, 0.2); box-shadow: 0 30px 60px rgba(0,0,0,0.5); transition: transform 0.3s ease; }
        .video-thumbnail-wrapper:hover { transform: translateY(-5px); }
        .video-thumbnail-img { width: 100%; height: 100%; object-fit: cover; filter: brightness(0.6); transition: filter 0.3s ease; }
        .video-thumbnail-wrapper:hover .video-thumbnail-img { filter: brightness(0.4); }
        
        .play-button { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 80px; height: 80px; background: rgba(198, 164, 82, 0.9); border-radius: 50%; display: flex; align-items: center; justify-content: center; z-index: 2; box-shadow: 0 0 0 0 rgba(198, 164, 82, 0.7); animation: pulseRing 2s infinite; }
        .play-button::after { content: ''; border-style: solid; border-width: 15px 0 15px 26px; border-color: transparent transparent transparent #0e1117; margin-left: 5px; }
        
        @keyframes pulseRing { 0% { box-shadow: 0 0 0 0 rgba(198, 164, 82, 0.7); } 70% { box-shadow: 0 0 0 20px rgba(198, 164, 82, 0); } 100% { box-shadow: 0 0 0 0 rgba(198, 164, 82, 0); } }

        .modal-overlay { position: fixed; inset: 0; background: rgba(10, 12, 16, 0.85); backdrop-filter: blur(15px); z-index: 1000; display: flex; align-items: center; justify-content: center; padding: 20px; animation: fadeIn 0.3s ease; }
        .modal-content { position: relative; width: 100%; max-width: 900px; background: #0e1117; border: 1px solid rgba(198, 164, 82, 0.3); border-radius: 15px; overflow: hidden; box-shadow: 0 40px 80px rgba(0,0,0,0.6); animation: scaleIn 0.4s cubic-bezier(0.16,1,0.3,1); }
        .modal-close { position: absolute; top: 12px; right: 12px; width: 40px; height: 40px; background: rgba(14, 17, 23, 0.8); border: 1px solid rgba(198, 164, 82, 0.4); border-radius: 50%; color: #dbb856; font-size: 20px; cursor: pointer; z-index: 10; display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
        .modal-close:hover { background: #c6a452; color: #0e1117; transform: rotate(90deg); }
        .modal-video { width: 100%; height: 500px; display: block; background: black; }

        .events-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px; margin-top: 80px; }
        .event-card { background: rgba(198, 164, 82, 0.05); backdrop-filter: blur(8px); border: 1px solid rgba(198, 164, 82, 0.15); padding: 25px; border-radius: 15px; transition: all 0.3s ease; }
        .event-card:hover { transform: translateY(-5px); border-color: rgba(198, 164, 82, 0.4); background: rgba(198, 164, 82, 0.08); }
        .event-card h4 { color: #dbb856; font-size: 18px; margin-bottom: 8px; }
        .event-card p { color: #7d7768; font-size: 13px; line-height: 1.6; }

        @keyframes textEnter { from { opacity: 0; transform: translateY(28px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes visualEnter { from { opacity: 0; transform: translateX(40px) scale(0.96); } to { opacity: 1; transform: translateX(0) scale(1); } }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.9); opacity: 0; } to { transform: scale(1); opacity: 1; } }

        @media (max-width: 768px) {
          .slider-wrapper { max-width: 100%; }
          .slider-controls button { width: 35px; height: 35px; font-size: 14px; }
          .slide-caption-below h3 { font-size: 20px; }
          .slide-caption-below p { font-size: 12px; }
          
          .video-thumbnail-wrapper { height: 250px; }
          .modal-video { height: 250px; }
          .play-button { width: 60px; height: 60px; }
          .play-button::after { border-width: 10px 0 10px 18px; }
          .modal-close { top: 5px; right: 5px; width: 32px; height: 32px; font-size: 16px; }
        }
      `}</style>

      <div className="bg-liquid bg-liquid-one"></div>
      <div className="bg-liquid bg-liquid-two"></div>
      <div className="bg-ring bg-ring-one"></div>
      <div className="drapery-line"></div>

      <header className="events-header">
        <div className="header-brand">
          <span>GROWTH DRAPERY</span>
        </div>
      </header>

      <div className="container">
        {/* 1. Main Text Sabse Uper (Image se upar) */}
        <div className="hero-text">
          <h1>Make Your <em>Events</em> Memorable</h1>
          <p>From school annual days to cultural programs and dance competitions, we provide the perfect costumes to make every performance unforgettable.</p>
        </div>

        {/* 2. Image Text ke Niche */}
        <div className="slider-wrapper">
          <div className="slider-image-box">
            {images.map((image, index) => (
              <img
                key={index}
                src={image.src}
                alt={`Event ${index + 1}`}
                className={index === current ? "slider-image active" : "slider-image"}
              />
            ))}

            <div className="slider-controls">
              <button onClick={prevSlide}>←</button>
              <button onClick={nextSlide}>→</button>
            </div>
          </div>

          <div className="slider-dots">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={index === current ? "dot active" : "dot"}
              ></button>
            ))}
          </div>
        </div>

        {/* 3. Slider Caption (Image niche wala text) */}
        <div className="slide-caption-below">
          <span>GROWTH DRAPERY EVENTS</span>
          <h3>{images[current].title}</h3>
          <p>{images[current].subtitle}</p>
        </div>

        {/* 4. Video Section */}
        <div className="video-section">
          <span className="video-label">WATCH OUR STORY</span>
          <h2 className="video-title">Experience the <em style={{color: '#c6a452', fontStyle: 'normal'}}>Magic</em></h2>
          
          <div className="video-thumbnail-wrapper" onClick={() => setIsVideoOpen(true)}>
            <img 
              src="https://z-cdn-media.chatglm.cn/files/42c2c04b-4c37-49d8-b95d-462f5ea5a220.jpeg?auth_key=1889896364-540cded4844d468082dadd89fd320129-0-7d98120831833e14b26bb1481ec3aa7a" 
              alt="Video Thumbnail" 
              className="video-thumbnail-img" 
            />
            <div className="play-button"></div>
          </div>
        </div>

        {/* 5. Events Grid */}
        <div className="events-grid">
          <div className="event-card">
            <h4>School Annual Day</h4>
            <p>Special costumes for annual functions, making every student shine on stage.</p>
          </div>
          <div className="event-card">
            <h4>Cultural Programs</h4>
            <p>Traditional and folk dresses celebrating culture in every move.</p>
          </div>
          <div className="event-card">
            <h4>Dance Competitions</h4>
            <p>Western and classical dance costumes designed for winners.</p>
          </div>
          <div className="event-card">
            <h4>Theme-Based Events</h4>
            <p>Fancy dress and unique theme costumes for creative performances.</p>
          </div>
        </div>
      </div>

      {isVideoOpen && (
        <div className="modal-overlay" onClick={() => setIsVideoOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsVideoOpen(false)}>✕</button>
            <video className="modal-video" controls autoPlay>
              <source src="/videos/events.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;