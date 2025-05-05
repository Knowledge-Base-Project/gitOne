import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import LoginModal from "../modal/LoginModal";

const KnowledgeBase = () => {

  const navigate = useNavigate();
  //Modal state
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  //Handle login
  const handleLogin = () => {
    setShowLoginModal(false);
    navigate("/"); // or clear session & redirect to login
  };  
  return (
    <Container fluid className={`py-4 ${styles.knowledgeBase}`} style={{ backgroundColor: "white" }}>
      {/* Header */}
      <Navbar className="d-flex justify-content-between align-items-center border-bottom pb-3">
        <div className="d-flex align-items-center gap-2">
          <img src="Username.png" alt="Knowledge Base Logo" style={{ height: "60px" }} />
          <h1 className={styles.custom_text}>KNOWLEDGE BASE</h1>
        </div>
        <Nav className="d-flex align-items-center gap-3">
          <a href="/" className="nav-btn">
            <Icon.HouseFill size={24} color="#2E4A3F" />
          </a>
          <a href="searched-articles" className="nav-btn">
            <Icon.Search size={24} color="#2E4A3F"/>
          </a>
          <div href="LoginIndex.js" className="btn btn-dark rounded-pill px-3" onClick={() => setShowLoginModal(true)}>Login</div>
        </Nav>
      </Navbar>

      {/* Articles Section */}
      <div className="d-flex justify-content-center gap-5 px-5 mt-5">
        {/* Latest Articles */}
        <div className="flex-grow-1 p-4 bg-white rounded shadow-sm">
          <h2 className="mb-4">Latest Articles</h2>
          <ul className="list-unstyled">
            <li>
              <a href="article.html">"The Secret Life of Socks: Where Do They Really Go?"</a><br />
              <i>Kazi - 2/4/2025 (Lifestyle)</i>
            </li>
            <li>
              <a href="article.html">"5 Productivity Hacks You Need to Try"</a><br />
              <i>Aisha - 2/10/2025 (Productivity)</i>
            </li>
            <li>
              <a href="article.html">"Understanding AI: The Future of Tech"</a><br />
              <i>John - 3/1/2025 (Technology)</i>
            </li>
            <li>
              <a href="article.html">"The Power of Morning Routines"</a><br />
              <i>Sarah - 3/5/2025 (Wellness)</i>
            </li>
            <li>
              <a href="article.html">"How to Budget Like a Pro"</a><br />
              <i>David - 3/12/2025 (Finance)</i>
            </li>
          </ul>
          <div className="text-start mt-3">
          <a href="/latest-articles" className="btn btn-dark">More</a>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="flex-grow-1 p-4 bg-light rounded shadow-sm">
          <h2 className="mb-4">Recent Updates</h2>
          <ul className="list-unstyled">
            <li>
              <a href="article.html">"The Secret Life of Socks: Where Do They Really Go?"</a><br />
              <i>Kazi - 2/4/2025 (Lifestyle)</i>
            </li>
            <li></li>
            <li>
              <a href="article.html">"Why Minimalism is the Key to Happiness"</a><br />
              <i>Emma - 2/15/2025 (Lifestyle)</i>
            </li>
            <li>
              <a href="article.html">"Top 10 Travel Destinations for 2025"</a><br />
              <i>Mike - 3/2/2025 (Travel)</i>
            </li>
            <li>
              <a href="article.html">"The Science Behind Good Sleep"</a><br />
              <i>Olivia - 3/8/2025 (Health)</i>
            </li>
            <li>
              <a href="article.html">"Mastering Public Speaking: Tips & Tricks"</a><br />
              <i>Chris - 3/11/2025 (Self-Improvement)</i>
            </li>
          </ul>
          <div className="text-end mt-3">
          <a href="/updated-article" className="btn btn-dark">More</a>
          
          </div>
        </div>
      </div>
      <LoginModal
        show={showLoginModal}
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </Container>
  );
};

export default KnowledgeBase;
