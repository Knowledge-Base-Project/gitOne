import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";
// import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./MyArticle.module.css";
import DeleteModal from "../util/DeleteModal";
import Header from "../util/Header";

const MyArticle = () => {
  const navigate = useNavigate();
  //Modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //Handle delete
  const handleDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className={styles.knowledgeBase} style={{ backgroundColor: "white" }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

      {/* Header */}
      <Header/>
      {/* Body */}
      <div className={styles.body}>
        {/* Page Title Section */}
        <div className={styles.articlesSection}>
          {/* Page Title */}
          <span className={styles.title}>MY ARTICLES</span>
          {/* React-Bootstrap Dropdown Section */}
          <Dropdown>
            <Dropdown.Toggle className={styles.draftsButton}>Drafts </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Draft 1</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Published</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#/action-3">All</Dropdown.Item>
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
