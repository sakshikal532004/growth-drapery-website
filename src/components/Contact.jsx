import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    event: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Growth Drapery!%0A%0AName: ${formData.name}%0APhone: ${formData.phone}%0AEvent: ${formData.event}%0AMessage: ${formData.message}`;
    window.open(`https://wa.me/917499419564?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <>
      <section className="contact-sec" id="contact" ref={sectionRef}>
        {/* Animated BG */}
        <div className="contact-bg-anim">
          <div className="cab cab-1"></div>
          <div className="cab cab-2"></div>
          <div className="cab cab-3"></div>
          <div className="caw caw-1"></div>
          <div className="caw caw-2"></div>
          <div className="car car-1"></div>
          <div className="car car-2"></div>
          <div className="cap cap-1"></div>
          <div className="cap cap-2"></div>
          <div className="cap cap-3"></div>
          <div className="cap cap-4"></div>
          <div className="cap cap-5"></div>
          <div className="cap cap-6"></div>
        </div>

        <div className="contact-container">
          {/* HEADING */}
          <div className={`contact-head ${visible ? "vis" : ""}`}>
            <span className="contact-eyebrow">GET IN TOUCH</span>
            <h2>
              Let's <em>Talk.</em>
            </h2>
            <p>
              Designer outfits on rent for weddings, parties, festive wear and
              stage performances. Reach out — we'd love to help you shine!
            </p>
          </div>

          {/* SERVICE TAGS */}
          <div className={`contact-tags ${visible ? "vis" : ""}`}>
            <span className="ctag">Designer Outfits on Rent</span>
            <span className="ctag">Party</span>
            <span className="ctag">Festive Wear</span>
            <span className="ctag">Stage Performances</span>
            <span className="ctag">Dance Costumes</span>
          </div>

          <div className={`contact-grid ${visible ? "vis" : ""}`}>
            {/* LEFT — INFO CARDS */}
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Call Us</h3>
                  <a href="tel:7499419564">+91 74994 19564</a>
                  <span className="info-sub">Have a question? Give us a call, we’re happy to help!</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>WhatsApp</h3>
                  <a
                    href="https://wa.me/917499419564?text=Hi%20Growth%20Drapery!%20I%20want%20to%20enquire%20about%20rental%20costumes."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat on WhatsApp
                  </a>
                  <span className="info-sub">Quick response guaranteed</span>
                </div>
              </div>

              <div className="info-card">
                <div className="info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Instagram</h3>
                  <a
                    href="https://www.instagram.com/growth_drapery__and_events?utm_source=qr&stkn=MTI0M29id2c0YnlzMg=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @growth_drapery_and_events
                  </a>
                  <span className="info-sub">586 followers • 120 posts</span>
                </div>
              </div>
            </div>

            {/* RIGHT — FORM */}
            <div className="contact-form-wrap">
              <div className="form-card">
                <h3>Send Enquiry</h3>
                <p className="form-sub">
                  Fill details and we'll connect on WhatsApp
                </p>

                {submitted && (
                  <div className="form-success">
                    ✓ Redirecting to WhatsApp...
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Event Type</label>
                    <select
                      name="event"
                      value={formData.event}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select event type</option>
                    
                      <option value="Party / Birthday">Party / Birthday</option>
                      <option value="Festive / Religious">Festive / Religious Event</option>
                      <option value="School Function">School Function</option>
                      <option value="Dance Competition">Dance Competition</option>
                      <option value="Fancy Dress Competition">
                        Fancy Dress Competition
                      </option>
                      <option value="Stage Show / Play">Stage Show / Play</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us what costumes you need, dates, etc."
                      rows="4"
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit">
                    Send via WhatsApp
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.05-.669.149-.197.198-.967 1.02-1.182 1.222-.215.202-.43.222-.727.074-.297-.149-1.255-.463-2.39-.918-.888-.388-1.458-.877-1.636-1.082-.215-.222-.024-.346.066-.466.098-.121.215-.222.322-.346.107-.124.215-.248.322-.372.107-.124.143-.198.215-.346.074-.149.037-.273-.074-.372-.107-.099-.967-.918-1*1.327-1.222-.36-.304-.669-.322-.967-.074l-.03.03c-.297.149-.967.867-1.182 1.02-.215.149-.43.222-.727.074-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.05-.669.149-.197.198-.967 1.02-1.182 1.222-.215.202-.43.222-.727.074-.297-.149-1.255-.463-2.39-.918-.888-.388-1.458-.877-1.636-1.082-.215-.222-.024-.346.066-.466.098-.121.215-.222.322-.346.107-.124.215-.248.322-.372.107-.124.143-.198.215-.346.074-.149.037-.273-.074-.372-.107-.099-.967-.918-1.327-1.222-.36-.304-.669-.322-.967-.074z"/>
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .contact-sec {
          position: relative; width: 100%;
          padding: 100px 5% 80px;
          background:
            radial-gradient(ellipse at 20% 0%, rgba(198,164,82,0.045), transparent 40%),
            radial-gradient(ellipse at 80% 100%, rgba(198,164,82,0.03), transparent 40%),
            linear-gradient(175deg, #0e1117 0%, #111520 25%, #151a12 50%, #1a1610 75%, #100e0a 100%);
          overflow: hidden;
        }

        .contact-bg-anim { position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
        .cab { position: absolute; border-radius: 50%; mix-blend-mode: screen; }
        .cab-1 { width: 480px; height: 480px; left: -180px; top: 8%; background: radial-gradient(circle, rgba(198,164,82,0.08), transparent 60%); filter: blur(30px); animation: cabA 14s ease-in-out infinite alternate; }
        .cab-2 { width: 520px; height: 520px; right: -200px; bottom: 5%; background: radial-gradient(circle, rgba(160,130,55,0.06), transparent 60%); filter: blur(32px); animation: cabB 17s ease-in-out infinite alternate; }
        .cab-3 { width: 350px; height: 350px; left: 40%; top: 55%; background: radial-gradient(circle, rgba(198,164,82,0.05), transparent 55%); filter: blur(25px); animation: cabC 12s ease-in-out infinite alternate; }
        @keyframes cabA { 0% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(50px,30px,0) scale(1.08); } 100% { transform: translate3d(100px,-15px,0) scale(0.95); } }
        @keyframes cabB { 0% { transform: translate3d(0,0,0) scale(1); } 50% { transform: translate3d(-60px,40px,0) scale(1.10); } 100% { transform: translate3d(-20px,70px,0) scale(0.94); } }
        @keyframes cabC { 0% { transform: translateX(-40px) scale(1); } 50% { transform: translateX(40px) scale(1.08); } 100% { transform: translateX(80px) scale(0.96); } }

        .caw { position: absolute; border-radius: 50%; opacity: 0.10; filter: blur(7px); }
        .caw-1 { width: 700px; height: 140px; right: -200px; top: 35%; background: linear-gradient(110deg, rgba(198,164,82,0.02), rgba(198,164,82,0.07), rgba(198,164,82,0.01)); transform: rotate(-8deg); animation: cawA 16s ease-in-out infinite alternate; }
        .caw-2 { width: 600px; height: 120px; left: -150px; bottom: 15%; background: linear-gradient(100deg, rgba(198,164,82,0.01), rgba(198,164,82,0.05), rgba(198,164,82,0.01)); transform: rotate(6deg); animation: cawB 19s ease-in-out infinite alternate; }
        @keyframes cawA { 0% { transform: translateX(40px) rotate(-8deg) scale(1); } 50% { transform: translateX(-20px) rotate(-4deg) scale(1.05); } 100% { transform: translateX(-70px) rotate(-12deg) scale(0.96); } }
        @keyframes cawB { 0% { transform: translateX(-25px) rotate(6deg) scale(1); } 50% { transform: translateX(35px) rotate(3deg) scale(1.06); } 100% { transform: translateX(70px) rotate(9deg) scale(0.96); } }

        .car { position: absolute; border-radius: 50%; border: 1px solid rgba(198,164,82,0.04); }
        .car-1 { left: 15%; top: 25%; animation: carG 9s ease-out infinite; }
        .car-2 { right: 20%; bottom: 20%; animation: carG 11s 3s ease-out infinite; }
        @keyframes carG { 0% { width: 0; height: 0; opacity: 0.5; } 100% { width: 280px; height: 280px; opacity: 0; margin-left: -140px; margin-top: -140px; } }

        .cap { position: absolute; width: 3px; height: 3px; border-radius: 50%; background: rgba(198,164,82,0.25); }
        .cap-1 { left: 8%; top: 15%; animation: capF 7s 0s ease-in-out infinite; }
        .cap-2 { left: 25%; top: 70%; animation: capF 9s 1s ease-in-out infinite; }
        .cap-3 { left: 50%; top: 10%; animation: capF 8s 2s ease-in-out infinite; }
        .cap-4 { left: 70%; top: 65%; animation: capF 10s 0.5s ease-in-out infinite; }
        .cap-5 { left: 85%; top: 30%; animation: capF 7.5s 3s ease-in-out infinite; }
        .cap-6 { left: 40%; top: 85%; animation: capF 11s 1.5s ease-in-out infinite; }
        @keyframes capF { 0%,100% { transform: translateY(0) scale(1); opacity: 0.25; } 25% { transform: translateY(-16px) scale(1.4); opacity: 0.50; } 50% { transform: translateY(-8px) scale(0.7); opacity: 0.15; } 75% { transform: translateY(-20px) scale(1.2); opacity: 0.40; } }

        .contact-container { position: relative; z-index: 5; max-width: 1260px; margin: 0 auto; }

        .contact-head { margin-bottom: 20px; opacity: 0; transform: translateY(28px); transition: all 0.8s cubic-bezier(0.16,1,0.3,1); }
        .contact-head.vis { opacity: 1; transform: translateY(0); }
        .contact-eyebrow { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 14px; color: #c6a452; font-size: 11px; font-weight: 800; letter-spacing: 3px; text-transform: uppercase; }
        .contact-eyebrow::before { content: ""; width: 26px; height: 1px; background: linear-gradient(90deg, #c6a452, transparent); }
        .contact-head h2 { margin: 0; color: #e8dcc8; font-size: clamp(40px, 4.8vw, 62px); line-height: 1; font-weight: 800; letter-spacing: -2px; }
        .contact-head h2 em { background: linear-gradient(135deg, #c6a452, #dbb856); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; font-style: normal; }
        .contact-head > p { max-width: 520px; margin: 12px 0 0; color: #6b6558; font-size: 15px; line-height: 1.8; }

        /* SERVICE TAGS */
        .contact-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 45px; opacity: 0; transform: translateY(18px); transition: all 0.7s 0.15s cubic-bezier(0.16,1,0.3,1); }
        .contact-tags.vis { opacity: 1; transform: translateY(0); }
        .ctag { padding: 7px 16px; border-radius: 6px;8 border: 1px solid rgba(198,164,82,0.12); background: rgba(198,164,82,0.06); color: #a89870; font-size: 12px; font-weight: 600; letter-spacing: 0.3px; transition: all 0.3s ease; }
        .ctag:hover { background: rgba(198,164,82,0.12); color: #c6a452; border-color: rgba(198,164,82,0.25); }

        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; opacity: 0; transform: translateY(35px); transition: all 0.85s 0.2s cubic-bezier(0.16,1,0.3,1); }
        .contact-grid.vis { opacity: 1; transform: translateY(0); }

        /* INFO CARDS */
        .contact-info { display: flex; flex-direction: column; gap: 16px; }
        .info-card { display: flex; align-items: flex-start; gap: 16px; padding: 22px; border-radius: 14px; border: 1px solid rgba(198,164,82,0.07); background: rgba(18,16,12,0.40); transition: all 0.35s ease; }
        .info-card:hover { border-color: rgba(198,164,82,0.18); background: rgba(18,16,12,0.55); transform: translateX(4px); }
        .info-icon { width: 46px; height: 46px; border-radius: 10px; background: rgba(198,164,82,0.08); border: 1px solid rgba(198,164,82,0.12); display: flex; align-items: center; justify-content: center; flex-shrink: 0;: color: #c6a452; }
        .info-icon svg { width: 20px; height: 20px; }
        .info-content h3 { margin: 0 0 5px; color: #e8dcc8; font-size: 16px; font-weight: 700; }
        .info-content a { color: #c6a452; text-decoration: none; font-size: 14px; font-weight: 600; transition: color 0.3s ease; display: block; margin-bottom: 3px; }
        .info-content a:hover { color: #dbb856; }
        .info-address { color: #8a7e6a; font-size: 13px; line-height: 1.6; margin: 0 0 3px; }
        .info-sub { color: #5c574a; font-size: 11px; letter-spacing: 0.3px; }

        /* FORM */
        .contact-form-wrap { display: flex; flex-direction: column; }
        .form-card { padding: 34px; border-radius: 16px; border: 1px solid rgba(198,164,82,0.08); background: rgba(18,16,12,0.45); backdrop-filter: blur(8px); }
        .form-card h3 { margin: 0 0 5px; color: #e8dcc8; font-size: 22px; font-weight: 700; }
        .form-sub { color: #6b6558; font-size: 13px; margin: 0 0 26px; line-height: 1.5; }
        .form-success { padding: 12px 18px; border-radius: 8px; background: rgba(198,164,82,0.10); border: 1px solid rgba(198,164,82,0.20); color: #c6a452; font-size: 13px; font-weight: 600; margin-bottom: 20px; }

        .form-group { margin-bottom: 18px; }
        .form-group label { display: block; color: #8a7e6a; font-size: 11px; font-weight: 700; letter-spacing: 0.8px; text-transform: uppercase; margin-bottom: 7px; }
        .form-group input, .form-group select, .form-group textarea {
          width: 100%; padding: 13px 16px; border-radius: 10px;
          border: 1px solid rgba(198,164,82,0.12); background: rgba(10,12,16,0.60);
          color: #e8dcc8; font-size: 14px; font-family: inherit;
          transition: all 0.3s ease; outline: none;
        }
        .form-group input::placeholder, .form-group textarea::placeholder { color: #4a453a; }
        .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
          border-color: rgba(198,164,82,0.35); background: rgba(10,12,16,0.75);
          box-shadow: 0 0 0 3px rgba(198,164,82,0.06);
        }
        .form-group select { cursor: pointer; appearance: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' fill='%23c6a452' viewBox='0 0 16 16'%3E%3Cpath d='M8 11L3 6h10z'/%3E%3C/svg%3E"); background-repeat: no-repeat; background-position: right 14px center; }
        .form-group select option { background: #0e1117; color: #e8dcc8; }
        .form-group textarea { resize: vertical; min-height: 90px; }

        .form-submit {
          width: 100%; padding: 15px; border-radius: 10px; border: none;
          background: linear-gradient(135deg, #c6a452, #a8873a);
          color: #0a0c10; font-size: 15px; font-weight: 700; letter-spacing: 0.3px;
          cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 10px;
          transition: all 0.3s ease; margin-top: 6px;
        }
        .form-submit:hover { transform: translateY(-2px); box-shadow: 0 14px 32px rgba(198,164,82,0.30); }

        /* TABLET */
        @media (max-width: 950px) {
          .contact-sec { padding: 85px 5% 70px; }
          .contact-grid { grid-template-columns: 1fr; gap: 30px; }
        }

        /* MOBILE */
        @media (max-width: 650px) {
          .contact-sec { padding: 65px 4% 55px; }
          .contact-head h2 { font-size: 36px; }
          .contact-head > p { font-size: 14px; }
          .contact-tags { gap: 6px; }
          .ctag { padding: 5px 12px; font-size: 11px; }
          .contact-grid { grid-template-columns: 1fr; }
          .info-card { padding: 16px; gap: 14px; }
          .info-icon { width: 40px; height: 40px; }
          .form-card { padding: 22px; }
          .car { display: none; }
        }
        @media (max-width: 400px) {
          .contact-head h2 { font-size: 30px; }
          .form-card { padding: 18px; }
        }
      `}</style>
    </>
  );
}