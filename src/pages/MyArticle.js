import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
// import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MyArticle.module.css";
import DeleteModal from "../modal/DeleteModal";

const MyArticle = () => {
  const navigate = useNavigate();
  //Modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //Handle delete
  const handleDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className={`container py-4 ${styles.knowledgeBase}`} style={{ backgroundColor: "white" }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

      {/* Header */}
      <div className="d-flex justify-content-between align-items-center border-bottom pb-3">
        <div className="d-flex align-items-center gap-2">
          <img src="/Username.png" alt="Knowledge Base Logo" style={{ height: "60px", marginRight: "8px", marginBottom: "8px", padding: "0px" }} />
          <h1 className={`${styles.custom_text}`}>
            KNOWLEDGE BASE
          </h1>
        </div>

        {/* Buttons Next to Knowledge Base Section */}
        <div className="d-flex gap-2">
          <Button variant="light" className="icon-btn" onClick={() => navigate(-1)}> {/* ✅ Navigate to ArticleView.js */}
            <i className="fas fa-undo"></i> {/* Return */}
          </Button>
          <Button variant="light" className="icon-btn" onClick={() => navigate(-1)}> {/* ✅ Navigate to ArticleView.js */}
            <i className="fas fa-house-chimney"></i> {/* Home */}
          </Button>
          <Button variant="light" className="icon-btn" onClick={() => navigate(-1)}> {/* ✅ Navigate to ArticleView.js */}
            <i className="fas fa-search"></i> {/* Search */}
          </Button>
          <Button variant="light" className="icon-btn" onClick={() => navigate(-1)}> {/* ✅ Navigate to ArticleView.js */}
            <i className="fas fa-user-circle"></i> {/* Account */}
          </Button>
        </div>
      </div>

      {/* My Articles Section */}
      <div className={styles.articlesSection}>
        <span className={styles.articlesTitle}>MY ARTICLES</span>
        
        {/* React-Bootstrap Dropdown Section */}
        <Dropdown>
          <Dropdown.Toggle variant="secondary" id="dropdown-basic" className={styles.draftsButton}>
            {/* Drafts <i className="fas fa-chevron-down fa-lg" style={{ marginLeft: "8px" }}></i> */}
            Drafts <i style={{ marginLeft: "8px" }}></i>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Draft 1</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Draft 2</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Draft 3</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <div className={styles.articleList}>
        {/* 1 Row (All elements in same row) */}
        <div>
          <strong onClick={() => navigate("/view-article")}>"The Secret Life of Socks- Where Do They Really Go?"</strong>
          <span className="mx-2"><em>Kozai - 2/14/2025</em></span>
          <span className="mx-2" style={{ fontStyle: "italic", textDecoration: "underline" }}>
            (Lifestyle)
          </span>
        </div>

        {/* 2 Row */}
        <div>
          <span style={{ color: "blue", marginRight: "10px", fontStyle: "italic", textDecoration: "underline" }}>
            Secret
          </span>
          <span style={{ color: "blue", marginRight: "10px", fontStyle: "italic",  textDecoration: "underline" }}>
            Life
          </span>
          <span style={{ color: "blue", marginRight: "10px", fontStyle: "italic",  textDecoration: "underline" }}>
            Socks
          </span>
          <i className={`fas fa-edit mx-1 ${styles.iconHover}`} style={{ cursor: "pointer" }} onClick={() => navigate("/add-article")}></i> {/* Edit Icon */}
          <i className={`fas fa-trash mx-1 ${styles.iconHover}`} style={{ cursor: "pointer" }} onClick={() => setShowDeleteModal(true)}></i> {/* Delete Icon */}
        </div>

        {/* 3 Row */}
        <div className="mt-5">
          <strong onClick={() => navigate("/view-article")}>"The Secret Life of Socks- Where Do They Really Go?"</strong>
          <span className="mx-2"><em>Kozai - 2/14/2025</em></span>
          <span className="mx-2" style={{ fontStyle: "italic", textDecoration: "underline" }}>
            (Lifestyle)
          </span>
        </div>

        {/* 4 Row */}
        <div>
          <span style={{ color: "blue", marginRight: "10px", fontStyle: "italic", textDecoration: "underline" }}>
            Secret
          </span>
          <span style={{ color: "blue", marginRight: "10px", fontStyle: "italic",  textDecoration: "underline" }}>
            Life
          </span>
          <span style={{ color: "blue", marginRight: "10px", fontStyle: "italic",  textDecoration: "underline" }}>
            Socks
          </span>
          <i className={`fas fa-edit mx-1 ${styles.iconHover}`} style={{ cursor: "pointer" }} onClick={() => navigate("/add-article")}></i> {/* Edit Icon */}
          <i className={`fas fa-trash mx-1 ${styles.iconHover}`} style={{ cursor: "pointer" }} onClick={() => setShowDeleteModal(true)}></i> {/* Delete Icon */}
        </div>

        {/* 5 Row */}
        <div className="mt-5">
          <strong onClick={() => navigate("/view-article")}>"The Secret Life of Socks- Where Do They Really Go?"</strong>
          <span className="mx-2"><em>Kozai - 2/14/2025</em></span>
          <span className="mx-2" style={{ fontStyle: "italic", textDecoration: "underline" }}>
            (Lifestyle)
          </span>
        </div>

        {/* 6 Row */}
        <div>
          <span style={{ color: "blue", marginRight: "10px", fontStyle: "italic", textDecoration: "underline" }}>
            Secret
          </span>
          <span style={{ color: "blue", marginRight: "10px", fontStyle: "italic",  textDecoration: "underline" }}>
            Life
          </span>
          <span style={{ color: "blue", marginRight: "10px", fontStyle: "italic",  textDecoration: "underline" }}>
            Socks
          </span>
          <i className={`fas fa-edit mx-1 ${styles.iconHover}`} style={{ cursor: "pointer" }} onClick={() => navigate("/add-article")}></i> {/* Edit Icon */}
          <i className={`fas fa-trash mx-1 ${styles.iconHover}`} style={{ cursor: "pointer" }} onClick={() => setShowDeleteModal(true)}></i> {/* Delete Icon */}
        </div>
      </div>
      <DeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MyArticle;
