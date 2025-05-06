/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useRef } from "react";
import { Dropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./SearchResult.module.css";
import LogoutModal from "../modal/LogoutModal";

const SearchResult = () => {

  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  //Modal state
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  
  const handleSearchClick = () => {
    if (searchInputRef.current) {
      searchInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      searchInputRef.current.focus(); // Step 3: Scroll & focus input field
    }
  };

  //Handle logout
  const handleLogout = () => {
    setShowLogoutModal(false);
     navigate("/logout"); // or clear session & redirect to login
  };
   
  
  return (
    <div className={`container py-4 ${styles.knowledgeBase}`}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
        <div className="d-flex align-items-center gap-2">
          <img src="/Username.png" alt="Knowledge Base Logo" style={{ height: "60px", marginRight: "8px" , marginBottom: "8px", padding: "0px"}} />
          <h1 className={`${styles.custom_text}`}>
            KNOWLEDGE BASE
          </h1>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-1 p-2">
        {/* Back Button */}
          <button className="btn btn-light border-0" onClick={() => navigate(-1)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#2d5157" class="bi bi-arrow-left" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
            </svg>
          </button>

          {/* Home Button */}
          <button className="btn btn-light border-0" onClick={() => navigate("/")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#2d5157" class="bi bi-house-door-fill" viewBox="0 0 16 16">
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5"/>
            </svg>
          </button>

          {/* Search Button */}
          <button className="btn btn-light border-0" onClick={handleSearchClick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#2d5157" class="bi bi-search" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
          </button>

          {/* Profile Dropdown */}
          <Dropdown>
            <Dropdown.Toggle variant="light" className="border-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#2d5157" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
              </svg>
            </Dropdown.Toggle>

            <Dropdown.Menu align="end" style={{ backgroundColor: "#2d5157", borderRadius: "8px" }}>
              <Dropdown.Item style={{ color: "white" }} onClick={() => navigate("/my-articles")}>My Article</Dropdown.Item>
              <Dropdown.Item style={{ color: "white" }} onClick={() => navigate("/add-article")}>Add Article</Dropdown.Item>
              <Dropdown.Divider style={{ backgroundColor: "white" }} />
              <Dropdown.Item style={{ color: "white" }} onClick={() => setShowLogoutModal(true)}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>

      {/* Search Bar */}
      <div className="mt-4 d-flex gap-2">
        <input 
          type="text"
          ref={searchInputRef}
          className="searchBar form-control" 
          placeholder="Search..." />
        <button className={`${styles.custom_btn} btn`}>Search</button>
      </div>

      {/* Search Results */}
      <div className="mt-4">
        <p className="fst-italic">Search Result for (React JS): 143 Results</p>

        {[1, 2].map((id) => (
          <div key={id} className={`${styles.resultItem} border-bottom pb-3`}>
            <h4 className="fw-bold">
              "The Secret Life of Socks: Where Do They Really Go?"
              <span className="text-secondary fst-italic"> Kozai - 2/14/2025</span>
            </h4>
            <p className={styles.resultLinks}>
              <a href="#" className="text-primary fst-italic">Secret</a>{" "}
              <a href="#" className="text-primary fst-italic">Life</a>{" "}
              <a href="#" className="text-primary fst-italic">Socks</a>
            </p>
          </div>
        ))}
      </div>
      <LogoutModal
        show={showLogoutModal}
        onClose={() => setShowLogoutModal(false)}
        onLogout={handleLogout}
      />
    </div>
  );
};

export default SearchResult;
