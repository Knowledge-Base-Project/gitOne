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
          <div className="nav-btn" onClick={() => navigate("/")}>
            <Icon.HouseFill size={24} color="#2E4A3F" />
          </div>
          <div className="nav-btn" onClick={() => navigate("/searched-articles")}>
            <Icon.Search size={24} color="#2E4A3F"/>
          </div>
          <div className="btn btn-dark rounded-pill px-3" onClick={() => setShowLoginModal(true)}>Login</div>
        </Nav>
      </Navbar>

      {/* Articles Section */}
      <div className="d-flex justify-content-center gap-5 px-5 mt-5">
        {/* Latest Articles */}
        <div className="flex-grow-1 p-4 bg-white rounded shadow-sm">
          <h2 className="mb-4">Latest Articles</h2>
          <ul className="list-unstyled">
            <li>
              <i>"The Secret Life of Socks: Where Do They Really Go?"</i><br />
              <i>Kazi - 2/4/2025 (Lifestyle)</i>
            </li>
            <li>
              <i>"5 Productivity Hacks You Need to Try"</i><br />
              <i>Aisha - 2/10/2025 (Productivity)</i>
            </li>
            <li>
              <i>"Understanding AI: The Future of Tech"</i><br />
              <i>John - 3/1/2025 (Technology)</i>
            </li>
            <li>
              <i>"The Power of Morning Routines"</i><br />
              <i>Sarah - 3/5/2025 (Wellness)</i>
            </li>
            <li>
              <i>"How to Budget Like a Pro"</i><br />
              <i>David - 3/12/2025 (Finance)</i>
            </li>
          </ul>
          <div className="text-start mt-3">
            <div className="btn btn-dark" onClick={() => navigate("/latest-articles")}>More</div>
          </div>
        </div>

        {/* Recent Updates */}
        <div className="flex-grow-1 p-4 bg-light rounded shadow-sm">
          <h2 className="mb-4">Recent Updates</h2>
          <ul className="list-unstyled">
            <li>
              <i>"The Secret Life of Socks: Where Do They Really Go?"</i><br />
              <i>Kazi - 2/4/2025 (Lifestyle)</i>
            </li>
            <li></li>
            <li>
              <i>"Why Minimalism is the Key to Happiness"</i><br />
              <i>Emma - 2/15/2025 (Lifestyle)</i>
            </li>
            <li>
              <i>"Top 10 Travel Destinations for 2025"</i><br />
              <i>Mike - 3/2/2025 (Travel)</i>
            </li>
            <li>
              <i>"The Science Behind Good Sleep"</i><br />
              <i>Olivia - 3/8/2025 (Health)</i>
            </li>
            <li>
              <i>"Mastering Public Speaking: Tips & Tricks"</i><br />
              <i>Chris - 3/11/2025 (Self-Improvement)</i>
            </li>
          </ul>
          <div className="text-end mt-3">
            <div className="btn btn-dark" onClick={() => navigate("/updated-article")}>More</div>
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
