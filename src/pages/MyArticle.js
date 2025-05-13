import { useState } from "react";
import { Dropdown } from "react-bootstrap";
// import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import { PencilSquare, Trash3Fill } from 'react-bootstrap-icons';
import styles from "./MyArticle.module.css";
import DeleteModal from "../util/DeleteModal";
import Header from "../util/Header";

const MyArticle = () => {
  const navigate = useNavigate();
  //Modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Dropdown selected item state
  const [selectedItem, setSelectedItem] = useState("All");

  //Handle delete
  const handleDelete = () => {
    setShowDeleteModal(false);
  };

  // Handle dropdown select
  const handleSelect = (eventKey) => {
    setSelectedItem(eventKey);
  };

  return (
    <div className={styles.knowledgeBase} style={{ backgroundColor: "white" }}>
      {/* Header */}
      <Header/>
      
      {/* Body */}
      <div className={styles.body}>
        {/* Page Title Section */}
        <div className={styles.articlesSection}>
          {/* Page Title */}
          <span className={styles.title}>MY ARTICLES</span>
          {/* React-Bootstrap Dropdown Section */}
          <Dropdown onSelect={handleSelect}>
            <Dropdown.Toggle className={styles.toggleButton}>{selectedItem}</Dropdown.Toggle>
            <Dropdown.Menu className={styles.dropdownMenu}>
              <Dropdown.Item className={styles.dropdownItem} eventKey="Drafts">Drafts</Dropdown.Item>
              <Dropdown.Item className={styles.dropdownItem} eventKey="Published">Published</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item className={styles.dropdownItem} eventKey="All">All</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        {/* Articles List */}
        <div className={styles.articleList}>
          <div>
            {[1, 2, 3, 4, 5].map((id) => (
            <div key={id} className={styles.articleGroup}>
              <div className={styles.articleName2}>
                <div className={styles.articleName1}> "The Secret Life of Socks: Where Do They Really Go?" </div>
                <div className={styles.articleInfo}> Kozai - 2/14/2025 <div className={styles.category}>(Lifestyle)</div></div>
              </div>
              <div className={styles.articleTags}>
                <div className={styles.tag}>Secret</div>
                <div className={styles.tag}>Life</div>
                <div className={styles.tag}>Socks</div>
                <PencilSquare className={styles.iconHover} onClick={() => navigate("/add-article")}/> {/* Edit Icon */}
                <Trash3Fill className={styles.iconHover} onClick={() => setShowDeleteModal(true)}/>{/* Delete Icon */}
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
      {/* Delete Modal */}
      <DeleteModal
        show={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onDelete={handleDelete}
      />
    </div>
  );
};

export default MyArticle;
