import React from "react";
import { FaStar, FaChartLine, FaCheckCircle, FaRocket, FaUser, FaPaintBrush, FaGlobe } from "react-icons/fa";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#footer" },
];

const benefits = [
  { icon: <FaStar color="#66CCFF" size={32} />, text: "Instantly Build Trust" },
  { icon: <FaChartLine color="#66CCFF" size={32} />, text: "Boost Your Local Rankings" },
  { icon: <FaCheckCircle color="#66CCFF" size={32} />, text: "Display Verified Proof Everywhere" },
  { icon: <FaRocket color="#66CCFF" size={32} />, text: "Easy Setup, Big Results" },
];

const steps = [
  { 
    number: 1, 
    title: "Claim Your Profile", 
    icon: <FaUser color="#66CCFF" size={24} />,
    desc: "Sign up and claim your business profile in minutes." 
  },
  { 
    number: 2, 
    title: "Customize Your Proof", 
    icon: <FaPaintBrush color="#66CCFF" size={24} />,
    desc: "Choose the reviews, testimonials, and signals you want to display." 
  },
  { 
    number: 3, 
    title: "Share Everywhere", 
    icon: <FaGlobe color="#66CCFF" size={24} />,
    desc: "Embed and share your proof on your website, social, and more." 
  },
];

export default function App() {
  return (
    <div className="app">
      {/* Header */}
      <header id="home" style={{ background: "#fff", borderBottom: "1px solid #E6ECF1" }}>
        <nav className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.5rem 0" }}>
          <div className="logo" style={{ fontWeight: 700, fontSize: 24, color: "#003366", letterSpacing: 1 }}>LocalProofHQ</div>
          <ul className="nav-links" style={{ display: "flex", gap: 32, listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a href={link.href} style={{ color: "#003366", textDecoration: "none", fontWeight: 500 }}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ textAlign: "center", paddingTop: 64, paddingBottom: 64 }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <h1 style={{ fontSize: 40, fontWeight: 800, color: "#003366", marginBottom: 16 }}>Become the Obvious Local Choice with LocalProofHQ</h1>
          <p style={{ fontSize: 20, color: "#003366", marginBottom: 32 }}>Turn Local Trust Into More Customers — Faster.</p>
          <button className="cta-button" style={{ fontSize: 20, background: "#003366", color: "#fff" }}>Get Started</button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32, background: "#F8FBFD", borderRadius: 16 }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
          <div className="benefits-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item" style={{ flex: "1 1 200px", minWidth: 200, textAlign: "center" }}>
                <div className="benefit-icon" style={{ marginBottom: 12 }}>{benefit.icon}</div>
                <h3 style={{ fontWeight: 600, fontSize: 18 }}>{benefit.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className="how-it-works" style={{ textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 1200, margin: "0 auto", padding: 24 }}>
          <h2 style={{ color: "#003366", fontWeight: 700, fontSize: 32, marginBottom: 32 }}>How It Works</h2>
          <div className="steps-container" style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 32 }}>
            {steps.map((step, index) => (
              <div key={index} className="step" style={{ flex: "1 1 240px", minWidth: 220, background: "#fff", border: "1px solid #E6ECF1", borderRadius: 12, padding: 24 }}>
                <div className="step-number" style={{ fontSize: 24, fontWeight: 600, color: "#003366", marginBottom: 8 }}>{step.number}</div>
                <div className="step-content">
                  <div className="step-icon" style={{ marginBottom: 8 }}>{step.icon}</div>
                  <h3 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>{step.title}</h3>
                  <p style={{ color: "#003366", opacity: 0.85 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser Section */}
      <section id="pricing" className="pricing-teaser" style={{ textAlign: "center", background: "#F8FBFD", borderRadius: 16 }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto", padding: 24 }}>
          <div className="pricing-content" style={{ fontSize: 24, fontWeight: 700, color: "#003366", marginBottom: 16 }}>Simple pricing starting at just $19/month</div>
          <button className="cta-button" style={{ background: "#66CCFF", color: "#003366", fontWeight: 700 }}>See Plans</button>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="footer" style={{ marginTop: 64, padding: "2rem 0", borderTop: "1px solid #E6ECF1", textAlign: "center", fontSize: 14, color: "#003366" }}>
        <div className="container" style={{ maxWidth: 800, margin: "0 auto" }}>
          <div className="footer-links" style={{ marginBottom: 8 }}>
            <a href="#footer" style={{ color: "#003366", margin: "0 8px", textDecoration: "none" }}>Contact</a>|
            <a href="#" style={{ color: "#003366", margin: "0 8px", textDecoration: "none" }}>Terms of Service</a>|
            <a href="#" style={{ color: "#003366", margin: "0 8px", textDecoration: "none" }}>Privacy Policy</a>
          </div>
          <div style={{ opacity: 0.7 }}> {new Date().getFullYear()} LocalProofHQ. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}
