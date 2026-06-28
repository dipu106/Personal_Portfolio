import { useState } from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import {
  FaGithub, FaLinkedin,FaFacebook,
  FaInstagram,
  FaCode, FaPaintBrush, FaServer, FaMobileAlt,
  FaBriefcase, FaGraduationCap, FaExternalLinkAlt,
  FaDownload, FaPhone,
} from "react-icons/fa";

import profileMe from "../assets/profileMe.jpeg";
import cvFile from "../assets/Dipendra_Paudyal_CV.pdf";
 
// ─────────────────────────────────────────────
//  ABOUT
// ─────────────────────────────────────────────
const About = () => (
  <div className="pf-section">
    <div className="pf-heading">
      <h2>About Me</h2>
      <div className="pf-bar" />
    </div>
 
    <p className="pf-body">
      Enthusiastic BCA student at Texas International College with a strong foundation in
      full-stack web development using the MERN stack. Proficient in building RESTful APIs,
      implementing authentication and authorization systems, and connecting frontend and
      backend services. Eager to contribute hands-on backend development skills in a
      professional internship environment and grow within a collaborative engineering team.
    </p>
    <p className="pf-body pf-highlight">
      If you're seeking a skilled MERN Stack Developer to breathe life into your project,
      I am here to collaborate and create solutions together. Reach out — let's transform
      your vision into a reality!
    </p>
 
    <div>
      <h3 className="pf-subheading">What I'm Doing</h3>
      <div className="pf-grid2">
        {[
          { icon: <FaServer />, title: "Backend Development", desc: "High-performance Node.js & Express.js APIs designed for scalability and security." },
          { icon: <FaCode />, title: "MERN Stack Development", desc: "End-to-end web apps using MongoDB, Express.js, React.js, and Node.js." },
          { icon: <FaMobileAlt />, title: "REST API Design", desc: "JWT-secured RESTful APIs with role-based access control and clean architecture." },
          { icon: <FaPaintBrush />, title: "Frontend Development", desc: "Responsive React.js UIs with Context API, React Router, and Axios integration." },
        ].map(({ icon, title, desc }) => (
          <div key={title} className="pf-card">
            <div className="pf-card-icon">{icon}</div>
            <div>
              <h4 className="pf-card-title">{title}</h4>
              <p className="pf-card-desc">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
 
// ─────────────────────────────────────────────
//  RESUME
// ─────────────────────────────────────────────
const Resume = () => (
  <div className="pf-section">
    <div className="pf-heading">
      <h2>Resume</h2>
      <div className="pf-bar" />
    </div>
 
    {/* Education */}
    <div>
      <h3 className="pf-subheading pf-icon-row">
        <FaGraduationCap className="pf-accent" /> Education
      </h3>
      <div className="pf-timeline">
        <div className="pf-timeline-item">
          <div className="pf-dot" />
          <span className="pf-period">2022 – Running (7th Semester)</span>
          <h4 className="pf-role">Bachelor of Computer Applications (BCA)</h4>
          <p className="pf-company">Texas International College · Chabhail, Kathmandu</p>
          <p className="pf-desc">Relevant Subjects: Data Structures & Algorithms, Web Technology, Database Management Systems, Object-Oriented Programming, Computer Networks.</p>
        </div>
        <div className="pf-timeline-item">
          <div className="pf-dot" />
          <span className="pf-period">2022 – Present</span>
          <h4 className="pf-role">Active Member — College Tech Community</h4>
          <p className="pf-company">Texas International College</p>
          <p className="pf-desc">Participated in college workshops on web development, databases, and software engineering best practices.</p>
        </div>
      </div>
    </div>
 
    {/* Experience */}
    <div>
      <h3 className="pf-subheading pf-icon-row">
        <FaBriefcase className="pf-accent" /> Experience
      </h3>
      <div className="pf-timeline">
        <div className="pf-timeline-item">
          <div className="pf-dot" />
          <span className="pf-period">2024 – Present</span>
          <h4 className="pf-role">Backend Developer Intern Candidate</h4>
          <p className="pf-company">Seeking Internship · MERN Stack</p>
          <p className="pf-desc">Self-driven developer with hands-on project experience in Node.js, Express.js, MongoDB, React.js, and JWT authentication. All projects version-controlled on GitHub following MVC architecture.</p>
        </div>
      </div>
    </div>
 
    {/* Skills */}
    <div>
      <h3 className="pf-subheading">Technical Skills</h3>
      <div className="pf-skills-grid">
        {[
          { cat: "Backend",         skills: ["Node.js","Express.js","REST API","JWT Auth","Bcrypt","Session Mgmt"] },
          { cat: "Frontend",        skills: ["React.js","Context API","React Router","Axios","HTML5","CSS3","JavaScript ES6+"] },
          { cat: "Auth & Security", skills: ["Authentication","Authorization","2FA","RBAC"] },
          { cat: "Databases",       skills: ["MongoDB","Mongoose ODM","MySQL"] },
          { cat: "Tools",           skills: ["Git","GitHub","VS Code","Postman","npm"] },
          { cat: "Other Languages", skills: ["Java (Basics)","PHP (Basics)"] },
        ].map(({ cat, skills }) => (
          <div key={cat} className="pf-skill-group">
            <p className="pf-skill-cat">{cat}</p>
            <div className="pf-chips">
              {skills.map(s => <span key={s} className="pf-chip">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
 
    {/* Languages */}
    <div>
      <h3 className="pf-subheading">Languages</h3>
      <div className="pf-chips">
        <span className="pf-chip">Nepali (Native)</span>
        <span className="pf-chip">English (Professional Working Proficiency)</span>
      </div>
    </div>
 
    {/* Download CV */}
    <div className="pf-download-wrap">
      <a href={cvFile} download="Dipendra_Paudyal_CV.pdf" className="pf-download-btn">
        <FaDownload /> Download CV
      </a>
    </div>
  </div>
);
 
// ─────────────────────────────────────────────
//  PORTFOLIO
// ─────────────────────────────────────────────
const Portfolio = () => (
  <div className="pf-section">
    <div className="pf-heading">
      <h2>Portfolio</h2>
      <div className="pf-bar" />
    </div>
    <div className="pf-grid2">
      {[
        {
          title: "Shop Inventory Management System",
          tag: "Node.js · Express.js · MongoDB · React.js · JWT",
          type: "Personal Project",
          points: [
            "Full-stack system for shop owners to add, update, and delete products with real-time stock tracking.",
            "Secure REST API with JWT-based authentication protecting all routes.",
            "Responsive React frontend with dynamic product listing, search filtering, and role-based dashboard.",
            "Axios integration handling loading states, error responses, and token refresh logic.",
          ],
        },
        {
          title: "Two-Factor Authentication (2FA) App",
          tag: "React.js · Node.js · Express.js · MongoDB · Nodemailer",
          type: "Academic Project",
          points: [
            "Secure login with email-based OTP two-factor authentication on top of standard credentials.",
            "Session management and token expiry ensuring OTP codes are single-use and time-limited.",
            "Clean React UI guiding users through multi-step auth flow with real-time feedback.",
            "MVC pattern on backend for maintainability and separation of concerns.",
          ],
        },
      ].map(({ title, tag, type, points }) => (
        <div key={title} className="pf-project-card">
          <div className="pf-project-header">
            <FaCode className="pf-project-icon" />
          </div>
          <div className="pf-project-body">
            <div className="pf-project-meta">
              <span className="pf-project-type">{type}</span>
              <FaExternalLinkAlt className="pf-ext-icon" />
            </div>
            <h4 className="pf-project-title">{title}</h4>
            <p className="pf-project-tag">{tag}</p>
            <ul className="pf-project-points">
              {points.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </div>
  </div>
);
 
// ─────────────────────────────────────────────
//  BLOG
// ─────────────────────────────────────────────
const Blog = () => (
  <div className="pf-section">
    <div className="pf-heading">
      <h2>Blog</h2>
      <div className="pf-bar" />
    </div>
    <div className="pf-blog-list">
      {[
        { title: "Building Scalable REST APIs with Node.js & Express", date: "June 2025", tag: "Backend", desc: "A deep dive into designing REST APIs that scale — covering pagination, rate limiting, JWT auth, and caching strategies." },
        { title: "MongoDB vs MySQL: Choosing the Right Database", date: "April 2025", tag: "Database", desc: "A practical comparison of NoSQL and relational databases with real-world MERN stack use cases." },
        { title: "Implementing 2FA in a MERN Stack App", date: "March 2025", tag: "Security", desc: "Step-by-step guide to adding email-based OTP two-factor authentication to your Node.js and React application." },
        { title: "MVC Architecture in Node.js: Why It Matters", date: "January 2025", tag: "Architecture", desc: "How structuring your Express.js backend with MVC improves maintainability, scalability, and team collaboration." },
      ].map(({ title, date, tag, desc }) => (
        <div key={title} className="pf-blog-card">
          <div className="pf-blog-meta">
            <span className="pf-blog-tag">{tag}</span>
            <span className="pf-blog-date">{date}</span>
          </div>
          <h4 className="pf-blog-title">{title}</h4>
          <p className="pf-blog-desc">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);
 
// ─────────────────────────────────────────────
//  CONTACT
// ─────────────────────────────────────────────



const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setStatus("");

      const res = await axios.post(
        "http://localhost:3000/send/request/submitMail",
        form
      );

      setStatus(res.data.message);

      setForm({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setStatus("");
      }, 3000);
    } catch (error) {
      setStatus(
        error.response?.data?.message || "Something went wrong!"
      );

      setTimeout(() => {
        setStatus("");
      }, 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pf-section">
      <div className="pf-heading">
        <h2>Contact</h2>
        <div className="pf-bar"></div>
      </div>

      <p className="pf-body">
        Have a project in mind or looking for a MERN Stack intern? Feel free
        to reach out — I'd love to hear from you!
      </p>

      <form onSubmit={handleSubmit} className="pf-form">
        <div className="pf-form-row">
          <div className="pf-form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  name: e.target.value,
                }))
              }
            />
          </div>

          <div className="pf-form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              value={form.email}
              onChange={(e) =>
                setForm((prev) => ({
                  ...prev,
                  email: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="pf-form-group">
          <label>Message</label>

          <textarea
            rows={6}
            name="message"
            placeholder="Tell me about your project or opportunity..."
            required
            value={form.message}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                message: e.target.value,
              }))
            }
          />
        </div>

        <button
          type="submit"
          className="pf-submit"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p
            className={`mt-4 text-center font-medium ${
              status.toLowerCase().includes("success") ||
              status.toLowerCase().includes("sent")
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {status}
          </p>
        )}
      </form>
    </div>
  );
};


 
// ─────────────────────────────────────────────
//  MAIN
// ─────────────────────────────────────────────
const TABS = ["About", "Resume", "Portfolio", "Blog", "Contact"];
const TAB_CONTENT = { About, Resume, Portfolio, Blog, Contact };
 
export const Header = () => {
  const [activeTab, setActiveTab] = useState("About");
  const [menuOpen, setMenuOpen] = useState(false);
  const ActiveContent = TAB_CONTENT[activeTab];
 
  return (
    <>
      <style>{`
        /* ── Reset / Base ── */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
 
        .pf-root {
          min-height: 100vh;
          width: 100%;
          background: #111318;
          color: #fff;
          font-family: 'Inter', 'Segoe UI', sans-serif;
          padding: clamp(1rem, 3vw, 2.5rem);
        }
 
        /* ── Layout ── */
        .pf-layout {
          display: flex;
          flex-direction: column;
          gap: clamp(1rem, 2vw, 1.5rem);
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
        }
        @media (min-width: 1024px) {
          .pf-layout { flex-direction: row; align-items: flex-start; }
        }
 
        /* ── Sidebar ── */
        .pf-sidebar {
          background: #1a1d23;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1.25rem;
          padding: clamp(1.25rem, 3vw, 2rem);
          width: 100%;
        }
        @media (min-width: 1024px) {
          .pf-sidebar {
            width: clamp(260px, 22vw, 340px);
            flex-shrink: 0;
            position: sticky;
            top: 1.5rem;
          }
        }
 
        .pf-avatar-block {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 1.25rem;
        }
        @media (min-width: 1024px) {
          .pf-avatar-block { flex-direction: column; text-align: center; gap: 0; }
        }
 
        .pf-avatar {
          width: clamp(72px, 10vw, 130px);
          height: clamp(72px, 10vw, 130px);
          border-radius: 0.875rem;
          object-fit: cover;
          flex-shrink: 0;
        }
        @media (min-width: 1024px) {
          .pf-avatar { width: clamp(100px, 12vw, 140px); height: clamp(100px, 12vw, 140px); }
        }
 
        .pf-name {
          font-size: clamp(1.1rem, 2.2vw, 1.6rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.2;
          margin-top: 0;
        }
        @media (min-width: 1024px) {
          .pf-name { margin-top: 1rem; }
        }
 
        .pf-role-badge {
          display: inline-block;
          margin-top: 0.5rem;
          padding: 0.3rem 1rem;
          background: rgba(255,255,255,0.07);
          border-radius: 2rem;
          font-size: clamp(0.75rem, 1.2vw, 0.95rem);
          color: #ccc;
        }
 
        .pf-divider { border: none; border-top: 1px solid rgba(255,255,255,0.08); margin: 1.25rem 0; }
 
        .pf-contact-list { display: flex; flex-direction: column; gap: 1rem; }
        .pf-contact-item { display: flex; align-items: center; gap: 0.875rem; }
        .pf-contact-icon {
          padding: 0.6rem;
          background: #111318;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.75rem;
          color: #facc15;
          flex-shrink: 0;
          font-size: clamp(1rem, 1.5vw, 1.25rem);
          display: flex; align-items: center; justify-content: center;
        }
        .pf-contact-label {
          font-size: clamp(0.65rem, 1vw, 0.75rem);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #6b7280;
          margin-bottom: 0.15rem;
        }
        .pf-contact-value {
          font-size: clamp(0.78rem, 1.1vw, 0.92rem);
          color: #e5e7eb;
          font-weight: 500;
          word-break: break-all;
        }
 
        .pf-socials { display: flex; gap: 0.6rem; flex-wrap: wrap; justify-content: center; }
        .pf-social-btn {
          padding: 0.55rem;
          background: #111318;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.6rem;
          color: #9ca3af;
          cursor: pointer;
          transition: color 0.2s, border-color 0.2s;
          font-size: clamp(0.9rem, 1.3vw, 1.1rem);
          display: flex; align-items: center;
        }
        .pf-social-btn:hover { color: #facc15; border-color: rgba(250,204,21,0.4); }
 
        /* ── Main panel ── */
        .pf-main {
          flex: 1;
          min-width: 0;
          background: #1a1d23;
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 1.25rem;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
 
        /* ── Tab nav desktop ── */
        .pf-tabs {
          display: none;
          align-items: center;
          justify-content: flex-end;
          gap: 0.25rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
          padding: 0 1.25rem;
          flex-shrink: 0;
        }
        @media (min-width: 640px) { .pf-tabs { display: flex; } }
 
        .pf-tab {
          position: relative;
          padding: clamp(0.75rem, 1.2vw, 1rem) clamp(0.75rem, 1.5vw, 1.25rem);
          font-size: clamp(0.85rem, 1.2vw, 1.05rem);
          font-weight: 500;
          color: #9ca3af;
          background: none;
          border: none;
          cursor: pointer;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .pf-tab:hover { color: #e5e7eb; }
        .pf-tab.active { color: #facc15; }
        .pf-tab-underline {
          position: absolute;
          bottom: 0; left: 0.5rem; right: 0.5rem;
          height: 2px;
          background: #facc15;
          border-radius: 2px;
        }
 
        /* ── Tab nav mobile ── */
        .pf-mobile-menu { display: block; border-bottom: 1px solid rgba(255,255,255,0.08); }
        @media (min-width: 640px) { .pf-mobile-menu { display: none; } }
        .pf-mobile-toggle {
          width: 100%;
          display: flex; align-items: center; justify-content: space-between;
          padding: 1rem 1.25rem;
          color: #facc15;
          font-weight: 600;
          font-size: clamp(0.9rem, 2vw, 1.05rem);
          background: none; border: none; cursor: pointer;
        }
        .pf-mobile-chevron { transition: transform 0.2s; }
        .pf-mobile-chevron.open { transform: rotate(180deg); }
        .pf-mobile-dropdown { border-top: 1px solid rgba(255,255,255,0.08); }
        .pf-mobile-item {
          width: 100%; text-align: left;
          padding: 0.875rem 1.25rem;
          font-size: clamp(0.875rem, 2vw, 1rem);
          color: #d1d5db; background: none; border: none; cursor: pointer;
          transition: color 0.2s, background 0.2s;
        }
        .pf-mobile-item:hover { color: #facc15; background: rgba(255,255,255,0.04); }
 
        /* ── Content area ── */
        .pf-content {
          padding: clamp(1.25rem, 3vw, 2.5rem);
          overflow-y: auto;
          flex: 1;
        }
 
        /* ── Section shared ── */
        .pf-section { display: flex; flex-direction: column; gap: clamp(1.5rem, 2.5vw, 2rem); animation: pfFade 0.25s ease both; }
        @keyframes pfFade { from { opacity:0; transform: translateY(8px); } to { opacity:1; transform: none; } }
 
        .pf-heading h2 {
          font-size: clamp(1.5rem, 3.5vw, 2.5rem);
          font-weight: 700; color: #fff; line-height: 1.15;
        }
        .pf-bar { width: 2.5rem; height: 3px; background: #facc15; border-radius: 2px; margin-top: 0.5rem; }
 
        .pf-subheading {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 700; color: #fff; margin-bottom: clamp(0.75rem, 1.5vw, 1.25rem);
        }
        .pf-icon-row { display: flex; align-items: center; gap: 0.5rem; }
        .pf-accent { color: #facc15; }
 
        .pf-body {
          font-size: clamp(0.9rem, 1.4vw, 1.1rem);
          color: #d1d5db; line-height: 1.8;
        }
        .pf-highlight { color: #facc15 !important; }
 
        /* ── 2-col grid ── */
        .pf-grid2 { display: grid; grid-template-columns: 1fr; gap: clamp(0.75rem, 1.5vw, 1.25rem); }
        @media (min-width: 640px) { .pf-grid2 { grid-template-columns: 1fr 1fr; } }
 
        /* ── Service cards ── */
        .pf-card {
          display: flex; gap: 1rem; align-items: flex-start;
          background: #111318; border: 1px solid rgba(255,255,255,0.08);
          border-radius: 0.875rem; padding: clamp(1rem, 1.8vw, 1.5rem);
          transition: border-color 0.2s;
        }
        .pf-card:hover { border-color: rgba(250,204,21,0.35); }
        .pf-card-icon { color: #facc15; font-size: clamp(1.4rem, 2vw, 1.9rem); flex-shrink: 0; margin-top: 2px; }
        .pf-card-title { font-size: clamp(0.9rem, 1.3vw, 1.1rem); font-weight: 600; color: #fff; margin-bottom: 0.35rem; }
        .pf-card-desc { font-size: clamp(0.8rem, 1.1vw, 0.95rem); color: #9ca3af; line-height: 1.6; }
 
        /* ── Timeline ── */
        .pf-timeline { display: flex; flex-direction: column; gap: 1.5rem; }
        .pf-timeline-item { position: relative; padding-left: 1.5rem; border-left: 2px solid rgba(250,204,21,0.4); }
        .pf-dot {
          position: absolute; left: -5px; top: 4px;
          width: 8px; height: 8px; border-radius: 50%; background: #facc15;
        }
        .pf-period { font-size: clamp(0.75rem, 1.1vw, 0.9rem); color: #facc15; font-weight: 500; display: block; margin-bottom: 0.2rem; }
        .pf-role { font-size: clamp(0.95rem, 1.4vw, 1.15rem); font-weight: 600; color: #fff; margin-bottom: 0.2rem; }
        .pf-company { font-size: clamp(0.8rem, 1.1vw, 0.95rem); color: #6b7280; margin-bottom: 0.4rem; }
        .pf-desc { font-size: clamp(0.8rem, 1.1vw, 0.95rem); color: #d1d5db; line-height: 1.7; }
 
        /* ── Skills ── */
        .pf-skills-grid { display: flex; flex-direction: column; gap: 1rem; }
        @media (min-width: 640px) {
          .pf-skills-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
        }
        .pf-skill-group { background: #111318; border: 1px solid rgba(255,255,255,0.07); border-radius: 0.75rem; padding: 1rem; }
        .pf-skill-cat { font-size: clamp(0.72rem, 1vw, 0.85rem); text-transform: uppercase; letter-spacing: 0.06em; color: #facc15; margin-bottom: 0.6rem; font-weight: 600; }
        .pf-chips { display: flex; flex-wrap: wrap; gap: 0.5rem; }
        .pf-chip {
          padding: 0.3rem 0.75rem;
          background: #1a1d23; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 2rem; font-size: clamp(0.72rem, 1vw, 0.88rem); color: #d1d5db;
          transition: border-color 0.2s, color 0.2s;
        }
        .pf-chip:hover { border-color: rgba(250,204,21,0.5); color: #facc15; }
 
        /* ── Download ── */
        .pf-download-wrap { padding-top: 0.5rem; }
        .pf-download-btn {
          display: inline-flex; align-items: center; gap: 0.6rem;
          padding: clamp(0.7rem, 1.2vw, 0.9rem) clamp(1.5rem, 2.5vw, 2rem);
          background: #facc15; color: #111318;
          border-radius: 0.6rem; font-weight: 700;
          font-size: clamp(0.875rem, 1.3vw, 1.05rem);
          text-decoration: none; transition: background 0.2s, transform 0.15s;
        }
        .pf-download-btn:hover { background: #fde047; transform: translateY(-1px); }
 
        /* ── Portfolio ── */
        .pf-project-card {
          background: #111318; border: 1px solid rgba(255,255,255,0.08);
          border-radius: 0.875rem; overflow: hidden;
          transition: border-color 0.2s; display: flex; flex-direction: column;
        }
        .pf-project-card:hover { border-color: rgba(250,204,21,0.35); }
        .pf-project-header {
          height: clamp(80px, 10vw, 120px);
          background: linear-gradient(135deg, #1f2937, #111827);
          display: flex; align-items: center; justify-content: center;
        }
        .pf-project-icon { color: rgba(250,204,21,0.25); font-size: clamp(2rem, 3.5vw, 3rem); transition: color 0.2s; }
        .pf-project-card:hover .pf-project-icon { color: rgba(250,204,21,0.6); }
        .pf-project-body { padding: clamp(1rem, 1.8vw, 1.5rem); display: flex; flex-direction: column; gap: 0.5rem; flex: 1; }
        .pf-project-meta { display: flex; align-items: center; justify-content: space-between; }
        .pf-project-type { font-size: clamp(0.7rem, 1vw, 0.82rem); color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; }
        .pf-ext-icon { color: #374151; font-size: 0.7rem; transition: color 0.2s; }
        .pf-project-card:hover .pf-ext-icon { color: #facc15; }
        .pf-project-title { font-size: clamp(0.95rem, 1.4vw, 1.15rem); font-weight: 600; color: #fff; }
        .pf-project-tag { font-size: clamp(0.72rem, 1vw, 0.85rem); color: #facc15; }
        .pf-project-points { list-style: none; display: flex; flex-direction: column; gap: 0.4rem; margin-top: 0.25rem; }
        .pf-project-points li { font-size: clamp(0.78rem, 1.1vw, 0.92rem); color: #9ca3af; line-height: 1.6; padding-left: 1rem; position: relative; }
        .pf-project-points li::before { content: "•"; position: absolute; left: 0; color: #facc15; }
 
        /* ── Blog ── */
        .pf-blog-list { display: flex; flex-direction: column; gap: 1rem; }
        .pf-blog-card {
          background: #111318; border: 1px solid rgba(255,255,255,0.08);
          border-radius: 0.875rem; padding: clamp(1rem, 1.8vw, 1.5rem);
          cursor: pointer; transition: border-color 0.2s;
        }
        .pf-blog-card:hover { border-color: rgba(250,204,21,0.35); }
        .pf-blog-meta { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.6rem; }
        .pf-blog-tag {
          font-size: clamp(0.7rem, 1vw, 0.8rem); padding: 0.2rem 0.6rem;
          background: rgba(250,204,21,0.1); color: #facc15;
          border: 1px solid rgba(250,204,21,0.2); border-radius: 2rem;
        }
        .pf-blog-date { font-size: clamp(0.72rem, 1vw, 0.85rem); color: #6b7280; }
        .pf-blog-title { font-size: clamp(0.95rem, 1.4vw, 1.15rem); font-weight: 600; color: #fff; margin-bottom: 0.5rem; transition: color 0.2s; }
        .pf-blog-card:hover .pf-blog-title { color: #facc15; }
        .pf-blog-desc { font-size: clamp(0.8rem, 1.1vw, 0.95rem); color: #9ca3af; line-height: 1.7; }
 
        /* ── Contact form ── */
        .pf-form { display: flex; flex-direction: column; gap: 1rem; }
        .pf-form-row { display: grid; grid-template-columns: 1fr; gap: 1rem; }
        @media (min-width: 640px) { .pf-form-row { grid-template-columns: 1fr 1fr; } }
        .pf-form-group { display: flex; flex-direction: column; gap: 0.4rem; }
        .pf-form-group label { font-size: clamp(0.78rem, 1.1vw, 0.9rem); color: #9ca3af; }
        .pf-form-group input,
        .pf-form-group textarea {
          background: #111318; border: 1px solid rgba(255,255,255,0.1);
          border-radius: 0.6rem; padding: clamp(0.65rem, 1.2vw, 0.9rem) 1rem;
          color: #fff; font-size: clamp(0.85rem, 1.2vw, 1rem);
          outline: none; transition: border-color 0.2s; resize: none;
          font-family: inherit; width: 100%;
        }
        .pf-form-group input:focus,
        .pf-form-group textarea:focus { border-color: rgba(250,204,21,0.5); }
        .pf-form-group input::placeholder,
        .pf-form-group textarea::placeholder { color: #4b5563; }
        .pf-submit {
          align-self: flex-start;
          padding: clamp(0.7rem, 1.2vw, 0.9rem) clamp(1.5rem, 2.5vw, 2rem);
          background: #facc15; color: #111318; border: none;
          border-radius: 0.6rem; font-weight: 700;
          font-size: clamp(0.875rem, 1.3vw, 1.05rem);
          cursor: pointer; transition: background 0.2s, transform 0.15s;
          font-family: inherit;
        }
        .pf-submit:hover { background: #fde047; transform: translateY(-1px); }
      `}</style>
 
      <div className="pf-root">
        <div className="pf-layout">
 
          {/* ── Sidebar ── */}
          <aside className="pf-sidebar">
            <div className="pf-avatar-block">
              <img src={profileMe} alt="Dipendra Paudyal" className="pf-avatar" />
              <div style={{ marginTop: 0 }}>
                <h1 className="pf-name">Dipendra Paudyal</h1>
                <span className="pf-role-badge">MERN Stack Developer</span>
              </div>
            </div>
 
            <hr className="pf-divider" />
 
            <div className="pf-contact-list">
              <div className="pf-contact-item">
                <div className="pf-contact-icon"><AiOutlineMail /></div>
                <div>
                  <p className="pf-contact-label">Email</p>
                  <p className="pf-contact-value">dipendrapaudyal9789@gmail.com</p>
                </div>
              </div>
              <div className="pf-contact-item">
                <div className="pf-contact-icon"><FaPhone /></div>
                <div>
                  <p className="pf-contact-label">Phone</p>
                  <p className="pf-contact-value">+977-9861009789</p>
                </div>
              </div>
              <div className="pf-contact-item">
                <div className="pf-contact-icon"><MdOutlineLocationOn /></div>
                <div>
                  <p className="pf-contact-label">Location</p>
                  <p className="pf-contact-value">Kapan, Kathmandu, Nepal</p>
                </div>
              </div>
            </div>
 
            <hr className="pf-divider" />
 
          <div className="pf-socials">
  {[
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/dipendra-paudel-8ba4aa418/",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      url: "https://github.com/dipu106",
    },
    {
      icon: <FaFacebook />,
      label: "Website",
      url: "https://www.facebook.com/DipendraPaudel1414",
    },
    {
      icon: <FaInstagram />,
      label: "Twitter",
      url: "https://www.instagram.com/dipendra_paudel14/",
    },
  ].map(({ icon, label, url }) =>
    url ? (
      <a
        key={label}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="pf-social-btn"
      >
        {icon}
      </a>
    ) : (
      <button
        key={label}
        aria-label={label}
        className="pf-social-btn"
      >
        {icon}
      </button>
    )
  )}
</div>
          </aside>
 
          {/* ── Main ── */}
          <main className="pf-main">
 
            {/* Desktop tabs */}
            <nav className="pf-tabs">
              {TABS.map(tab => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pf-tab${activeTab === tab ? " active" : ""}`}
                >
                  {tab}
                  {activeTab === tab && <span className="pf-tab-underline" />}
                </button>
              ))}
            </nav>
 
            {/* Mobile dropdown */}
            <div className="pf-mobile-menu">
              <button className="pf-mobile-toggle" onClick={() => setMenuOpen(o => !o)}>
                <span>{activeTab}</span>
                <span className={`pf-mobile-chevron${menuOpen ? " open" : ""}`}>▾</span>
              </button>
              {menuOpen && (
                <div className="pf-mobile-dropdown">
                  {TABS.filter(t => t !== activeTab).map(tab => (
                    <button key={tab} className="pf-mobile-item"
                      onClick={() => { setActiveTab(tab); setMenuOpen(false); }}>
                      {tab}
                    </button>
                  ))}
                </div>
              )}
            </div>
 
            {/* Tab content */}
            <div className="pf-content">
              <ActiveContent key={activeTab} />
            </div>
 
          </main>
        </div>
      </div>
    </>
  );
};
 
export default Header;
 


