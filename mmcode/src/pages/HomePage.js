import React from "react";
import { Link } from "react-router-dom";
import {
  ChevronRight,
  Users,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";
import "../styles/HomePage.css";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Footer from "../components/Footer";

export default function HomePage() {
  const teamMembers = [
    {
      name: "Bc. Michal Lipák",
      role: "CEO",
      experience: "9 rokov skúseností",
      image:
        "https://i.ytimg.com/vi/DirEqlK5Y9w/hqdefault.jpg?sqp=-oaymwEmCOADEOgC8quKqQMa8AEB-AH-A4ACgAOKAgwIABABGH8gOig3MA8=&rs=AOn4CLDgHKtVwyWCOEWWtAO2jWPwHsSd0w",
    },
    {
      name: "Bc. Matúš Kuma",
      role: "CEO",
      experience: "9 rokov skúseností",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY1_3lvtbyvWhY-r3SCnkPqIbDxz7T7d4NnA&s",
    },
  ];

  const achievements = [
    {
      number: "132+",
      label: "Dokončených projektov ",
      icon: <Award className="w-8 h-8" />,
    },
    {
      number: "11+",
      label: "Spokojných zákazníkov",
      icon: <Users className="w-8 h-8" />,
    },
    {
      number: "2",
      label: "Roky skúseností",
      icon: <ChevronRight className="w-8 h-8" />,
    },
    {
      number: "24/7",
      label: "Podpora",
      icon: <Phone className="w-8 h-8" />,
    },
  ];

  return (
    <div className="HomePage">
      <Navbar />
      <Background />

      <main className="HomeContent">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <h1 className="hero-title">
              MMCode
              <br />
              <span className="gradient-text">Webové riešenia</span>
            </h1>
            <p className="hero-description">
              Sme partnerom pre digitálny rast – od prvotného konceptu až po
              hotový web, ktorý nielen dobre vyzerá, ale aj zvyšuje efektivitu,
              a dôveru vašich zákazníkov.
            </p>
            <div className="hero-buttons">
              <button
                className="btn-primary"
                onClick={() => {
                  const section = document.getElementById("what-we-offer");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Objavte naše riešenia
                <ChevronRight className="w-5 h-5" />
              </button>

              <Link to="/Projects" className="btn-secondary">
                Čo sme vytvorili
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
              alt="Tech Innovation"
              className="hero-img"
            />
          </div>
        </section>

        {/* About Section */}
        <section className="about-section" id="what-we-offer">
          <div className="container">
            <h2 className="section-title">Čo ponúkame</h2>
            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">💻</div>
                <h3>Web</h3>
                <p>Vývoj moderných a responzívnych webových riešení na mieru</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🛠</div>
                <h3>Administrácia a údržba webu</h3>
                <p>Udržiavame váš web moderný, bezpečný a plne funkčný</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🤖</div>
                <h3>AI vývoj a integrácia</h3>
                <p>
                  Vyvinieme pre vás AI riešenie a integrujeme ho priamo do vášho webu
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="achievements-section">
          <div className="container">
            <h2 className="section-title">Naše dosiahnuté výsledky</h2>
            <div className="achievements-grid">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <div className="achievement-number">{achievement.number}</div>
                  <div className="achievement-label">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="container">
            <h2 className="section-title">Spoznaj náš tím</h2>
            <p className="section-subtitle">
              Tím nadšených profesionálov, ktorí menia nápady na skutočný úspech.
            </p>
            <div className="team-grid">
              {teamMembers.map((member, index) => (
                <div key={index} className="team-card">
                  <div className="team-image">
                    <img src={member.image} alt={member.name} />
                  </div>
                  <div className="team-info">
                    <h3 className="team-name">{member.name}</h3>
                    <p className="team-role">{member.role}</p>
                    <p className="team-experience">{member.experience}</p>
                    <div className="team-social">
                      <Github className="w-5 h-5" />
                      <Linkedin className="w-5 h-5" />
                      <Twitter className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="experience-section">
          <div className="container">
            <h2 className="section-title">Naše skúsenosti</h2>
            <div className="experience-content">
              <div className="experience-text">
                <h3>9+ rokov vývoju</h3>
                <p>
                  Naše skúsenosti siahajú ešte do pradávnych čias, keď NASA vytvorila prvý Apranet, me sme vytvorili už celú wikipédiu
                </p>
                <ul className="experience-list">
                  <li>Vytváranie webových stránok</li>
                  <li>Prepájanie stránok s databázami</li>
                  <li>Rezervačné systémi</li>
                  <li>Modernizácia a optimalizácia starších IT systémov</li>
                </ul>
              </div>
              <div className="experience-stats">
                <div className="stat">
                  <h4>Technologies Mastered</h4>
                  <div className="tech-tags">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Python</span>
                    <span>AWS</span>
                    <span>Docker</span>
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              Ready to start your next project? Let's discuss how we can help
              you achieve your goals.
            </p>
            <div className="contact-grid">
              <div className="contact-info">
                <div className="contact-item">
                  <Mail className="w-6 h-6" />
                  <div>
                    <h4>Email</h4>
                    <p>hello@techcompany.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <Phone className="w-6 h-6" />
                  <div>
                    <h4>Phone</h4>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="contact-item">
                  <MapPin className="w-6 h-6" />
                  <div>
                    <h4>Location</h4>
                    <p>San Francisco, CA</p>
                  </div>
                </div>
              </div>
              <div className="contact-form">
                <div className="contact-form-wrapper">
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      placeholder="Your Message"
                      rows="5"
                      className="form-textarea"
                    ></textarea>
                  </div>
                  <button className="btn-primary full-width">
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
