import "@/App.css";
import { useState } from "react";
import {
  ArrowRight, BarChart3, Check, ChevronDown, CircleUserRound, Clock3,
  LockKeyhole, Menu, Play, ShieldCheck, Sparkles, Star, X, Zap,
} from "lucide-react";

const features = [
  { id: "timer", icon: Clock3, label: "Focus Timer", title: "A timer that makes starting feel easy.", body: "Set a session, settle in, and let a calm countdown keep the outside world out of mind.", color: "blue" },
  { id: "block", icon: LockKeyhole, label: "Distraction Blocking", title: "Your attention, protected.", body: "FocusNest helps you close the tabs, pings, and rabbit holes that pull you away from the work.", color: "ink" },
  { id: "analytics", icon: BarChart3, label: "Daily Analytics", title: "See the work you actually did.", body: "Turn focused minutes into a clear daily picture, so progress feels visible and motivating.", color: "sky" },
];

const testimonials = [
  { quote: "It makes a two-hour study block feel like a small, doable promise to myself.", name: "Maya Chen", detail: "Junior · Biology", initials: "MC" },
  { quote: "Seeing my focus streak grow is the first productivity thing that has actually stuck.", name: "Jordan Ellis", detail: "Sophomore · Design", initials: "JE" },
  { quote: "I stop guessing where my day went. FocusNest gives me a little proof I showed up.", name: "Noah Williams", detail: "Senior · Computer Science", initials: "NW" },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState("timer");
  const selectedFeature = features.find((feature) => feature.id === activeFeature);
  const SelectedFeatureIcon = selectedFeature.icon;
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <main className="site-shell">
      <header className="nav-wrap" data-testid="site-navigation">
        <nav className="nav container">
          <button className="brand" onClick={() => scrollTo("top")} data-testid="brand-home-link" aria-label="FocusNest home">
            <span className="brand-mark"><Sparkles size={17} strokeWidth={2.7} /></span>
            <span>focus<span>nest</span></span>
          </button>
          <div className={`nav-links ${menuOpen ? "is-open" : ""}`} data-testid="desktop-navigation-links">
            <button onClick={() => scrollTo("features")} data-testid="nav-features-link">Features</button>
            <button onClick={() => scrollTo("how-it-works")} data-testid="nav-how-it-works-link">How It Works</button>
            <button onClick={() => scrollTo("pricing")} data-testid="nav-pricing-link">Pricing</button>
            <button className="mobile-login" onClick={() => scrollTo("final-cta")} data-testid="mobile-login-link">Log in</button>
          </div>
          <div className="nav-actions">
            <button className="login-link" onClick={() => scrollTo("final-cta")} data-testid="login-link">Log in</button>
            <button className="nav-cta" onClick={() => scrollTo("final-cta")} data-testid="nav-start-focusing-button">Start Focusing <ArrowRight size={15} /></button>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} data-testid="mobile-menu-toggle" aria-label="Toggle navigation">
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </header>

      <section className="hero container" id="top" data-testid="hero-section">
        <div className="hero-copy reveal-up">
          <div className="eyebrow"><span className="eyebrow-dot" /> Built for your best work</div>
          <h1>Make space for <em>deep work.</em></h1>
          <p className="hero-lede">FocusNest helps you turn scattered study time into focused sessions you can feel good about.</p>
          <div className="hero-actions">
            <button className="primary-button" onClick={() => scrollTo("final-cta")} data-testid="hero-start-focusing-button">Start Focusing <ArrowRight size={17} /></button>
            <button className="secondary-button" onClick={() => scrollTo("how-it-works")} data-testid="hero-see-how-it-works-button"><span className="play-icon"><Play size={12} fill="currentColor" /></span> See how it works</button>
          </div>
          <div className="hero-note"><div className="avatar-stack"><span>J</span><span>M</span><span>N</span></div><span>Join 2,000+ students building better focus habits</span></div>
        </div>
        <div className="hero-visual reveal-up delay-2" data-testid="hero-dashboard-mockup">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="dashboard-window">
            <div className="window-bar"><div className="window-dots"><i /><i /><i /></div><span>focusnest / today</span><CircleUserRound size={18} /></div>
            <div className="dashboard-content">
              <div className="dash-top"><div><p className="dash-kicker">THURSDAY, OCTOBER 24</p><h3>Good morning, Parth <span>✦</span></h3></div><button className="small-plus" data-testid="dashboard-add-session-button">+</button></div>
              <div className="focus-card" data-testid="dashboard-focus-card"><div className="focus-card-top"><span className="live-pill"><i /> READY TO FOCUS</span><span className="card-more">···</span></div><div className="timer-display">25<span>:00</span></div><p>Deep work session</p><button className="dashboard-start" onClick={() => scrollTo("final-cta")} data-testid="dashboard-start-session-button"><Play size={13} fill="currentColor" /> Start session</button></div>
              <div className="dash-grid"><div className="mini-stat"><span className="stat-icon blue-icon"><Clock3 size={15} /></span><div><small>Focused today</small><strong>1h 42m</strong></div><span className="trend">+18%</span></div><div className="mini-stat"><span className="stat-icon green-icon"><Zap size={15} fill="currentColor" /></span><div><small>Current streak</small><strong>6 days</strong></div><span className="trend">Best!</span></div></div>
              <div className="week-card"><div className="week-head"><span>This week</span><span className="week-total">8h 24m <ChevronDown size={14} /></span></div><div className="bars"><span style={{ height: "38%" }} /><span style={{ height: "65%" }} /><span style={{ height: "48%" }} /><span className="today-bar" style={{ height: "82%" }} /><span style={{ height: "55%" }} /><span style={{ height: "31%" }} /><span style={{ height: "18%" }} /></div><div className="day-labels"><span>M</span><span>T</span><span>W</span><span>Th</span><span>F</span><span>S</span><span>S</span></div></div>
            </div>
          </div>
          <div className="float-tag focus-tag"><span className="tag-check"><Check size={13} /></span><div><b>Session complete</b><small>Nice work, Parth</small></div></div>
          <div className="float-tag streak-tag"><span>✦</span><div><b>6 day streak</b><small>Keep it going</small></div></div>
        </div>
      </section>

      <section className="trust-strip" data-testid="trust-strip"><div className="container trust-inner"><span className="trust-label">A calmer way to get things done</span><div className="trust-rule" /><span className="trust-stat"><strong>42,000+</strong> focused hours logged</span><span className="trust-stat"><strong>4.9/5</strong> student rating</span></div></section>

      <section className="section container" id="features" data-testid="features-section">
        <div className="section-heading"><div><span className="section-label">WHY FOCUSNEST</span><h2>Your attention is worth protecting.</h2></div><p>Less wrestling with distractions. More time doing the work that matters to you.</p></div>
        <div className="feature-layout"><div className="feature-list">{features.map((feature) => { const Icon = feature.icon; return <button className={`feature-item ${activeFeature === feature.id ? "active" : ""}`} key={feature.id} onClick={() => setActiveFeature(feature.id)} data-testid={`feature-${feature.id}-button`}><span className={`feature-icon ${feature.color}`}><Icon size={20} /></span><span><b>{feature.label}</b><small>{feature.id === "timer" ? "Start with a clear, achievable window." : feature.id === "block" ? "Make room for your attention." : "Understand your effort over time."}</small></span><ArrowRight className="feature-arrow" size={18} /></button> })}</div><div className="feature-detail" data-testid="active-feature-detail"><div className="detail-grid-lines" /><div className={`detail-icon ${selectedFeature.color}`}><SelectedFeatureIcon size={28} /></div><span className="section-label">{selectedFeature.label.toUpperCase()}</span><h3>{selectedFeature.title}</h3><p>{selectedFeature.body}</p><span className="detail-number">0{features.findIndex((feature) => feature.id === selectedFeature.id) + 1} / 03</span></div></div>
      </section>

      <section className="workflow-section" id="how-it-works" data-testid="how-it-works-section"><div className="container"><div className="section-heading centered"><span className="section-label">HOW IT WORKS</span><h2>Three steps to a more focused day.</h2><p>No complicated systems. Just a little more intention behind your time.</p></div><div className="steps-grid"><div className="step-card"><span className="step-number">01</span><span className="step-icon"><Clock3 size={24} /></span><h3>Choose a focus session</h3><p>Pick a length that feels doable and tell FocusNest what you’re working on.</p></div><div className="step-card"><span className="step-number">02</span><span className="step-icon"><ShieldCheck size={24} /></span><h3>Block distractions</h3><p>Set the noise aside and give your attention one clear place to land.</p></div><div className="step-card"><span className="step-number">03</span><span className="step-icon"><BarChart3 size={24} /></span><h3>Review your progress</h3><p>See your focused minutes add up and learn what helps you do your best work.</p></div></div></div></section>

      <section className="section container proof-section" data-testid="social-proof-section"><div className="section-heading"><div><span className="section-label">FROM THE FOCUSNEST COMMUNITY</span><h2>Small sessions. Big difference.</h2></div><span className="demo-note">Demo testimonials · not real endorsements</span></div><div className="testimonial-grid">{testimonials.map((testimonial) => <article className="testimonial" key={testimonial.name} data-testid={`testimonial-${testimonial.initials.toLowerCase()}`}><div className="stars">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" />)}</div><p>“{testimonial.quote}”</p><div className="person"><span className="person-avatar">{testimonial.initials}</span><span><b>{testimonial.name}</b><small>{testimonial.detail}</small></span></div></article>)}</div></section>

      <section className="pricing-section" id="pricing" data-testid="pricing-section"><div className="container"><div className="section-heading centered"><span className="section-label">SIMPLE PRICING</span><h2>Start for free. Go deeper when you’re ready.</h2><p>Your focus habit should be easy to begin.</p></div><div className="pricing-grid"><article className="price-card" data-testid="free-pricing-card"><span className="price-kicker">FREE</span><h3>$0 <small>/ forever</small></h3><p>Everything you need to make focus a habit.</p><ul><li><Check size={16} /> Unlimited focus sessions</li><li><Check size={16} /> Daily focus summary</li><li><Check size={16} /> Basic distraction blocking</li></ul><button className="outline-button" onClick={() => scrollTo("final-cta")} data-testid="free-plan-button">Start for free <ArrowRight size={16} /></button></article><article className="price-card pro-card" data-testid="pro-pricing-card"><span className="pro-badge">MOST POPULAR</span><span className="price-kicker">PRO</span><h3>$4.99 <small>/ month</small></h3><p>More insight and control for serious deep work.</p><ul><li><Check size={16} /> Everything in Free</li><li><Check size={16} /> Advanced weekly analytics</li><li><Check size={16} /> Smart session planning</li></ul><button className="primary-button full-width" onClick={() => scrollTo("final-cta")} data-testid="pro-plan-button">Try Pro free <ArrowRight size={16} /></button></article></div></div></section>

      <section className="final-cta container" id="final-cta" data-testid="final-cta-section"><div className="cta-glow" /><div className="cta-content"><span className="eyebrow light"><span className="eyebrow-dot" /> Your next hour starts here</span><h2>Make today feel a little more yours.</h2><p>One focused session is all it takes to begin.</p><button className="light-button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} data-testid="final-start-focusing-button">Start Focusing <ArrowRight size={17} /></button></div><div className="cta-lines" /></section>

      <footer className="footer"><div className="container footer-inner"><div><button className="brand footer-brand" onClick={() => scrollTo("top")} data-testid="footer-brand-link"><span className="brand-mark"><Sparkles size={17} /></span><span>focus<span>nest</span></span></button><p>A little more focus for the work that matters.</p></div><div className="footer-links"><button onClick={() => scrollTo("features")} data-testid="footer-features-link">Features</button><button onClick={() => scrollTo("how-it-works")} data-testid="footer-how-it-works-link">How it works</button><button onClick={() => scrollTo("pricing")} data-testid="footer-pricing-link">Pricing</button><button onClick={() => scrollTo("final-cta")} data-testid="footer-login-link">Log in</button></div></div><div className="container copyright"><span>© 2024 FocusNest. Made for focused minds.</span><span>Privacy · Terms</span></div></footer>
    </main>
  );
}

export default App;
