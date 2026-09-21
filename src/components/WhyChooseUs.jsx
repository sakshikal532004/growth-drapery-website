import React, { useEffect, useRef, useState, useCallback } from "react";

export default function WhyChooseUs() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeModal, setActiveModal] = useState(null);
  const [slideIdx, setSlideIdx] = useState(0);
  const touchStartX = useRef(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const openModal = (i) => {
    if (!features[i].slides) return;
    setActiveModal(i);
    setSlideIdx(0);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setActiveModal(null);
    setSlideIdx(0);
    document.body.style.overflow = "";
  };

  const nextSlide = useCallback(() => {
    if (activeModal === null) return;
    const t = features[activeModal].slides.length;
    setSlideIdx((p) => (p + 1) % t);
  }, [activeModal]);

  const prevSlide = useCallback(() => {
    if (activeModal === null) return;
    const t = features[activeModal].slides.length;
    setSlideIdx((p) => (p - 1 + t) % t);
  }, [activeModal]);

  const handleTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e) => {
    const d = touchStartX.current - e.changedTouches[0].clientX;
    if (d > 40) nextSlide();
    else if (d < -40) prevSlide();
  };

  useEffect(() => {
    if (activeModal === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeModal, nextSlide, prevSlide]);

  const features = [
    {
      number: "01",
      title: "Affordable Rentals",
      desc: "Premium costumes on rent — no need to buy.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
          <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
        </svg>
      ),
    },
    {
      number: "02",
      title: "Costume Styles",
      desc: "Classical, traditional, western, fancy dress & more.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      ),
      slides: [
        { title: "Classical Dance", desc: "Bharatanatyam, Kathak, Odissi — full set with temple jewelry and ghungroo." },
        { title: "Traditional Maharashtrian", desc: "Nauvari saree, dhoti-kurta, pheta, kurta-pyjama for cultural events." },
        { title: "Historical Figures", desc: "Chhatrapati Shivaji, Jijau, Rani Laxmibai, Mahatma Gandhi, Subhash Chandra Bose." },
        { title: "Western & Fancy", desc: "Superhero, princess, pirate, cowboy, astronaut, fairy and cartoon characters." },
        { title: "Nature & Eco Themes", desc: "Tree, flower, peacock, tiger, butterfly — perfect for eco-day events." },
        { title: "Community & Profession", desc: "Doctor, nurse, police, army, teacher, farmer — career-day costumes." },
      ],
    },
    {
      number: "03",
      title: "Multiple Sizes",
      desc: "S to XXL — perfect fit for kids and adults.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
          <line x1="3" y1="9" x2="21" y2="9"/>
          <line x1="9" y1="21" x2="9" y2="9"/>
        </svg>
      ),
      slides: [
        { title: "Size S (Age 3–5)", desc: "Chest 22″, Waist 20″, Height 36–42″. Fits nursery & LKG kids." },
        { title: "Size M (Age 6–8)", desc: "Chest 25″, Waist 22″, Height 42–48″. For primary school children." },
        { title: "Size L (Age 9–12)", desc: "Chest 28″, Waist 24″, Height 48–54″. For middle school performers." },
        { title: "Size XL (Age 13–16)", desc: "Chest 32″, Waist 27″, Height 54–60″. For teens and young adults." },
        { title: "Size XXL (Adults)", desc: "Chest 36″+, Waist 30″+, Height 58″+. Full adult sizes available." },
      ],
    },
    {
      number: "04",
      title: "Quality Fabrics",
      desc: "Comfortable, durable and stage-ready every time.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
    },
    {
      number: "05",
      title: "WhatsApp Booking",
      desc: "Quick booking — just send your requirement.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
        </svg>
      ),
      slides: [
        { title: "Step 1 — Send Message", desc: "WhatsApp us your event date, costume name and quantity needed." },
        { title: "Step 2 — Browse Catalog", desc: "We share the latest catalog with real photos, prices and availability." },
        { title: "Step 3 — Confirm & Pay", desc: "Confirm your selection, pay 50% advance via UPI and you're booked." },
        { title: "Step 4 — Pickup / Delivery", desc: "Pickup from store or get home delivery. Return next day — that simple." },
      ],
    },
  ];

  return (
    <>
      <section className="wcu-sec" ref={sectionRef}>
        <div className="wcu-bg-anim">
          <div className="wb wb-1"></div>
          <div className="wb wb-2"></div>
          <div className="wb wb-3"></div>
          <div className="ww ww-1"></div>
          <div className="ww ww-2"></div>
          <div className="wp wp-1"></div>
          <div className="wp wp-2"></div>
          <div className="wp wp-3"></div>
          <div className="wp wp-4"></div>
        </div>

        <div className="wcu-container">
          <div className={`wcu-head ${visible ? "vis" : ""}`}>
            <span className="wcu-eyebrow">WHY CHOOSE US</span>
            <h2>Why <em>Growth Drapery?</em></h2>
            <p>We help you create unforgettable stage moments. Here is why thousands trust us.</p>
          </div>

          <div className="wcu-grid">
            {features.map((feat, i) => {
              const hasSlides = !!feat.slides;
              return (
                <div
                  key={i}
                  className={`wcu-card ${visible ? "vis" : ""} ${hasSlides ? "has-slider" : ""}`}
                  style={{ transitionDelay: `${i * 0.09}s` }}
                  onClick={() => openModal(i)}
                  role={hasSlides ? "button" : undefined}
                  tabIndex={hasSlides ? 0 : undefined}
                  onKeyDown={(e) => { if (e.key === "Enter" && hasSlides) openModal(i); }}
                  aria-label={hasSlides ? `View details about ${feat.title}` : undefined}
                >
                  <div className="wcu-card-inner">
                    <span className="wcu-num">{feat.number}</span>
                    <div className="wcu-icon">{feat.icon}</div>
                    <h3>{feat.title}</h3>
                    <p>{feat.desc}</p>
                    {hasSlides && <span className="wcu-tap-hint">Tap to explore →</span>}
                  </div>
                  <div className="wcu-glow"></div>
                  <div className="wcu-corner"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {activeModal !== null && (
        <div className="wcu-overlay" onClick={closeModal}>
          <div
            className="wcu-modal"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <button className="wcu-modal-x" onClick={closeModal} aria-label="Close">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>

            <div className="wcu-modal-head">
              <div className="wcu-modal-icon">{features[activeModal].icon}</div>
              <h3>{features[activeModal].title}</h3>
            </div>

            <div className="wcu-slider-wrap">
              <div className="wcu-slider-track" style={{ transform: `translateX(-${slideIdx * 100}%)` }}>
                {features[activeModal].slides.map((sl, si) => (
                  <div className="wcu-slide" key={si}>
                    <span className="wcu-slide-idx">{String(si + 1).padStart(2, "0")}</span>
                    <h4>{sl.title}</h4>
                    <p>{sl.desc}</p>
                  </div>
                ))}
              </div>
              {features[activeModal].slides.length > 1 && (
                <>
                  <button className="wcu-arr wcu-arr-l" onClick={prevSlide} aria-label="Previous">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
                  </button>
                  <button className="wcu-arr wcu-arr-r" onClick={nextSlide} aria-label="Next">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
                  </button>
                </>
              )}
            </div>

            <div className="wcu-dots">
              {features[activeModal].slides.map((_, di) => (
                <span key={di} className={`wcu-dot ${di === slideIdx ? "act" : ""}`} onClick={() => setSlideIdx(di)} />
              ))}
            </div>
            <div className="wcu-counter">{slideIdx + 1} / {features[activeModal].slides.length}</div>
          </div>
        </div>
      )}

      <style>{`
        .wcu-sec {
          position:relative; width:100%; padding:90px 5% 80px;
          background:
            radial-gradient(ellipse at 25% 0%,rgba(198,164,82,0.04),transparent 40%),
            radial-gradient(ellipse at 75% 100%,rgba(198,164,82,0.03),transparent 40%),
            linear-gradient(175deg,#0e1117 0%,#111520 30%,#151a12 55%,#100e0a 100%);
          overflow:hidden;
        }

        .wcu-bg-anim { position:absolute; inset:0; pointer-events:none; z-index:0; overflow:hidden; }
        .wb { position:absolute; border-radius:50%; mix-blend-mode:screen; }
        .wb-1 { width:450px; height:450px; left:-170px; top:10%; background:radial-gradient(circle,rgba(198,164,82,0.07),transparent 58%); filter:blur(28px); animation:wbA 13s ease-in-out infinite alternate; }
        .wb-2 { width:500px; height:500px; right:-190px; bottom:8%; background:radial-gradient(circle,rgba(160,130,55,0.05),transparent 58%); filter:blur(30px); animation:wbB 16s ease-in-out infinite alternate; }
        .wb-3 { width:320px; height:320px; left:45%; top:50%; background:radial-gradient(circle,rgba(198,164,82,0.04),transparent 50%); filter:blur(22px); animation:wbC 11s ease-in-out infinite alternate; }
        @keyframes wbA { 0%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(40px,25px,0) scale(1.06)} 100%{transform:translate3d(80px,-12px,0) scale(0.95)} }
        @keyframes wbB { 0%{transform:translate3d(0,0,0) scale(1)} 50%{transform:translate3d(-50px,35px,0) scale(1.08)} 100%{transform:translate3d(-18px,60px,0) scale(0.95)} }
        @keyframes wbC { 0%{transform:translateX(-30px) scale(1)} 50%{transform:translateX(30px) scale(1.06)} 100%{transform:translateX(60px) scale(0.96)} }

        .ww { position:absolute; border-radius:50%; opacity:0.09; filter:blur(6px); }
        .ww-1 { width:650px; height:130px; right:-180px; top:30%; background:linear-gradient(110deg,rgba(198,164,82,0.015),rgba(198,164,82,0.06),rgba(198,164,82,0.01)); transform:rotate(-7deg); animation:wwA 15s ease-in-out infinite alternate; }
        .ww-2 { width:550px; height:110px; left:-130px; bottom:12%; background:linear-gradient(100deg,rgba(198,164,82,0.01),rgba(198,164,82,0.04),rgba(198,164,82,0.01)); transform:rotate(5deg); animation:wwB 18s ease-in-out infinite alternate; }
        @keyframes wwA { 0%{transform:translateX(30px) rotate(-7deg) scale(1)} 50%{transform:translateX(-15px) rotate(-3deg) scale(1.04)} 100%{transform:translateX(-55px) rotate(-10deg) scale(0.96)} }
        @keyframes wwB { 0%{transform:translateX(-20px) rotate(5deg) scale(1)} 50%{transform:translateX(28px) rotate(2deg) scale(1.05)} 100%{transform:translateX(55px) rotate(8deg) scale(0.96)} }

        .wp { position:absolute; width:3px; height:3px; border-radius:50%; background:rgba(198,164,82,0.22); }
        .wp-1 { left:7%; top:20%; animation:wpF 7s 0s ease-in-out infinite; }
        .wp-2 { left:30%; top:75%; animation:wpF 9s 1s ease-in-out infinite; }
        .wp-3 { left:55%; top:15%; animation:wpF 8s 2s ease-in-out infinite; }
        .wp-4 { left:80%; top:60%; animation:wpF 10s 0.5s ease-in-out infinite; }
        @keyframes wpF { 0%,100%{transform:translateY(0) scale(1); opacity:0.22} 25%{transform:translateY(-14px) scale(1.3); opacity:0.45} 50%{transform:translateY(-7px) scale(0.7); opacity:0.14} 75%{transform:translateY(-18px) scale(1.1); opacity:0.38} }

        .wcu-container { position:relative; z-index:5; max-width:1260px; margin:0 auto; }

        .wcu-head { margin-bottom:48px; opacity:0; transform:translateY(28px); transition:all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .wcu-head.vis { opacity:1; transform:translateY(0); }
        .wcu-eyebrow { display:inline-flex; align-items:center; gap:10px; margin-bottom:14px; color:#c6a452; font-size:11px; font-weight:800; letter-spacing:3px; text-transform:uppercase; }
        .wcu-eyebrow::before { content:""; width:26px; height:1px; background:linear-gradient(90deg,#c6a452,transparent); }
        .wcu-head h2 { margin:0; color:#e8dcc8; font-size:clamp(36px,4.5vw,58px); line-height:1; font-weight:800; letter-spacing:-2px; }
        .wcu-head h2 em { background:linear-gradient(135deg,#c6a452,#dbb856); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; font-style:normal; }
        .wcu-head > p { max-width:480px; margin:12px 0 0; color:#6b6558; font-size:15px; line-height:1.8; }

        .wcu-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:22px; }

        .wcu-card {
          border-radius:16px; border:1px solid rgba(198,164,82,0.06);
          background:rgba(18,16,12,0.35); position:relative; overflow:hidden;
          opacity:0; transform:translateY(30px);
          transition: opacity 0.6s cubic-bezier(0.16,1,0.3,1), transform 0.6s cubic-bezier(0.16,1,0.3,1), border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .wcu-card.vis { opacity:1; transform:translateY(0); }
        .wcu-card.has-slider { cursor:pointer; }
        .wcu-card:hover { border-color:rgba(198,164,82,0.22); box-shadow:0 25px 60px rgba(0,0,0,0.30),0 0 40px rgba(198,164,82,0.04); transform:translateY(-6px); }
        .wcu-card.has-slider:active { transform:translateY(-2px) scale(0.98); }

        .wcu-card-inner { padding:28px 24px 24px; position:relative; z-index:2; }
        .wcu-num { position:absolute; top:14px; right:16px; color:rgba(198,164,82,0.08); font-size:48px; font-weight:800; line-height:1; transition:color 0.3s ease; }
        .wcu-card:hover .wcu-num { color:rgba(198,164,82,0.18); }

        .wcu-icon { width:52px; height:52px; border-radius:14px; background:rgba(198,164,82,0.08); border:1px solid rgba(198,164,82,0.12); display:flex; align-items:center; justify-content:center; color:#c6a452; margin-bottom:18px; transition:all 0.35s ease; }
        .wcu-icon svg { width:24px; height:24px; }
        .wcu-card:hover .wcu-icon { background:rgba(198,164,82,0.15); border-color:rgba(198,164,82,0.30); transform:scale(1.08); box-shadow:0 8px 20px rgba(198,164,82,0.12); }

        .wcu-card-inner h3 { margin:0 0 6px; color:#e8dcc8; font-size:17px; font-weight:700; letter-spacing:-0.3px; transition:color 0.3s ease; }
        .wcu-card:hover .wcu-card-inner h3 { color:#dbb856; }
        .wcu-card-inner p { margin:0; color:#6b6558; font-size:13px; line-height:1.6; }

        .wcu-tap-hint { display:inline-block; margin-top:12px; color:rgba(198,164,82,0.5); font-size:11px; font-weight:700; letter-spacing:0.5px; text-transform:uppercase; opacity:0; transform:translateX(-6px); transition:all 0.35s ease; }
        .wcu-card:hover .wcu-tap-hint { opacity:1; transform:translateX(0); color:rgba(198,164,82,0.7); }

        .wcu-glow { position:absolute; bottom:-50px; left:50%; transform:translateX(-50%); width:120px; height:100px; border-radius:50%; background:radial-gradient(circle,rgba(198,164,82,0.08),transparent 65%); filter:blur(18px); pointer-events:none; opacity:0; transition:opacity 0.4s ease; }
        .wcu-card:hover .wcu-glow { opacity:1; }
        .wcu-corner { position:absolute; top:0; right:0; width:40px; height:40px; pointer-events:none; z-index:5; }
        .wcu-corner::before,.wcu-corner::after { content:""; position:absolute; background:rgba(198,164,82,0.10); transition:all 0.35s ease; }
        .wcu-corner::before { top:0; right:0; width:1px; height:0; }
        .wcu-corner::after { top:0; right:0; width:0; height:1px; }
        .wcu-card:hover .wcu-corner::before { height:40px; }
        .wcu-card:hover .wcu-corner::after { width:40px; }

        /* ═══════ MODAL — BIGGER ═══════ */
        .wcu-overlay {
          position:fixed; inset:0; z-index:9999;
          background:rgba(5,5,3,0.84); backdrop-filter:blur(16px);
          display:flex; align-items:center; justify-content:center; padding:24px;
          animation:wcuFI 0.25s ease forwards;
        }
        @keyframes wcuFI { from{opacity:0} to{opacity:1} }

        .wcu-modal {
          position:relative; width:100%; max-width:640px;
          background:linear-gradient(170deg,#16130e,#111018);
          border:1px solid rgba(198,164,82,0.12); border-radius:22px;
          overflow:hidden; display:flex; flex-direction:column;
          animation:wcuSU 0.35s cubic-bezier(0.16,1,0.3,1) forwards;
          box-shadow:0 50px 120px rgba(0,0,0,0.55),0 0 100px rgba(198,164,82,0.06);
        }
        @keyframes wcuSU { from{opacity:0; transform:translateY(28px) scale(0.95)} to{opacity:1; transform:translateY(0) scale(1)} }

        .wcu-modal-x {
          position:absolute; top:16px; right:16px; z-index:10;
          width:40px; height:40px; border-radius:12px;
          border:1px solid rgba(198,164,82,0.18); background:rgba(14,11,10,0.75);
          color:#c6a452; display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:all 0.25s ease;
        }
        .wcu-modal-x svg { width:18px; height:18px; }
        .wcu-modal-x:hover { background:rgba(198,164,82,0.15); border-color:rgba(198,164,82,0.35); transform:rotate(90deg); }

        .wcu-modal-head {
          padding:30px 32px 0; display:flex; align-items:center; gap:16px;
        }
        .wcu-modal-icon {
          width:50px; height:50px; border-radius:14px;
          background:rgba(198,164,82,0.12); border:1px solid rgba(198,164,82,0.18);
          display:flex; align-items:center; justify-content:center; color:#c6a452; flex-shrink:0;
        }
        .wcu-modal-icon svg { width:22px; height:22px; }
        .wcu-modal-head h3 {
          margin:0; color:#e8dcc8; font-size:22px; font-weight:700; letter-spacing:-0.4px;
        }

        /* SLIDER */
        .wcu-slider-wrap {
          position:relative; padding:24px 0 0; overflow:hidden; flex:1; min-height:0;
        }
        .wcu-slider-track {
          display:flex; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); will-change:transform;
        }
        .wcu-slide {
          min-width:100%; padding:0 32px; box-sizing:border-box;
          display:flex; flex-direction:column; gap:8px;
        }
        .wcu-slide-idx {
          font-size:13px; font-weight:800; color:#c6a452; letter-spacing:1.5px; opacity:0.45; margin-bottom:4px;
        }
        .wcu-slide h4 {
          margin:0; color:#dbb856; font-size:20px; font-weight:700; letter-spacing:-0.2px;
        }
        .wcu-slide p {
          margin:0; color:#9a907a; font-size:15px; line-height:1.75;
        }

        /* ARROWS */
        .wcu-arr {
          position:absolute; top:50%; transform:translateY(-50%); z-index:10;
          width:38px; height:38px; border-radius:50%;
          border:1px solid rgba(198,164,82,0.20); background:rgba(14,11,10,0.80);
          color:#c6a452; display:flex; align-items:center; justify-content:center;
          cursor:pointer; transition:all 0.25s ease; backdrop-filter:blur(6px);
        }
        .wcu-arr svg { width:16px; height:16px; }
        .wcu-arr:hover { background:rgba(198,164,82,0.18); border-color:rgba(198,164,82,0.40); transform:translateY(-50%) scale(1.1); }
        .wcu-arr-l { left:10px; }
        .wcu-arr-r { right:10px; }

        /* DOTS */
        .wcu-dots { display:flex; justify-content:center; gap:8px; padding:22px 0 8px; }
        .wcu-dot {
          width:8px; height:8px; border-radius:4px;
          background:rgba(198,164,82,0.15); cursor:pointer; transition:all 0.3s ease;
        }
        .wcu-dot:hover { background:rgba(198,164,82,0.35); }
        .wcu-dot.act { background:#c6a452; width:24px; box-shadow:0 0 10px rgba(198,164,82,0.4); }

        .wcu-counter {
          text-align:center; padding:6px 0 24px; color:#4a4639;
          font-size:12px; font-weight:600; letter-spacing:1.5px;
        }

        /* ═══ RESPONSIVE ═══ */
        @media (max-width:950px) {
          .wcu-sec { padding:80px 5% 70px; }
          .wcu-grid { grid-template-columns:repeat(2,1fr); }
        }
        @media (max-width:650px) {
          .wcu-sec { padding:65px 4% 55px; }
          .wcu-head h2 { font-size:34px; }
          .wcu-head > p { font-size:14px; }
          .wcu-grid { grid-template-columns:1fr; gap:16px; }
          .wcu-card-inner { padding:22px 20px 20px; }
          .wcu-card-inner h3 { font-size:16px; }
          .wcu-icon { width:44px; height:44px; }
          .wcu-icon svg { width:20px; height:20px; }
          .wcu-num { font-size:38px; }

          .wcu-modal { max-width:100%; border-radius:18px; }
          .wcu-modal-head { padding:24px 24px 0; }
          .wcu-modal-head h3 { font-size:19px; }
          .wcu-modal-icon { width:44px; height:44px; }
          .wcu-slide { padding:0 24px; }
          .wcu-slide h4 { font-size:18px; }
          .wcu-slide p { font-size:14px; }
          .wcu-arr { width:32px; height:32px; }
          .wcu-arr svg { width:14px; height:14px; }
        }
        @media (max-width:400px) {
          .wcu-head h2 { font-size:28px; }
          .wcu-modal-head h3 { font-size:17px; }
          .wcu-slide h4 { font-size:16px; }
          .wcu-slide p { font-size:13px; line-height:1.65; }
        }
      `}</style>
    </>
  );
}