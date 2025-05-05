import React, { useState } from "react";
import { Button } from "react-bootstrap";
// import * as Icon from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ArticleView.module.css";
import DeleteModal from "../modal/DeleteModal";

const ArticleView = () => {
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
          <Button variant="light" className="icon-btn" onClick={() => navigate(-1)}> {/* ✅ Navigate to MyArticle.js */}
            <i className="fas fa-undo"></i> {/* Return */}
          </Button>
          <Button variant="light" className="icon-btn" onClick={() => navigate(-1)}> {/* ✅ Navigate to MyArticle.js */}
            <i className="fas fa-house-chimney"></i> {/* Home */}
          </Button>
          <Button variant="light" className="icon-btn" onClick={() => navigate(-1)}> {/* ✅ Navigate to MyArticle.js */}
            <i className="fas fa-search"></i> {/* Search */}
          </Button>
          <Button variant="light" className="icon-btn" onClick={() => navigate(-1)}> {/* ✅ Navigate to MyArticle.js */}
            <i className="fas fa-user-circle"></i> {/* Account */}
          </Button>
        </div>
      </div>

      {/* My Articles Section */}
      <div className={styles.articlesSection}>
        <span className={styles.articlesTitle}>How to make coffee.......</span>
        
        <span style={{ marginRight: "10px", fontStyle: "italic", fontSize: "15px"}}>
          Jack (2025-2-17)
        </span>
          <i className={`fas fa-edit mx-1 ${styles.iconHover}`} style={{ cursor: "pointer" }}></i> {/* Edit Icon */}
          <i className={`fas fa-trash mx-1 ${styles.iconHover}`} style={{ cursor: "pointer" }} onClick={() => setShowDeleteModal(true)}></i> {/* Delete Icon */}
      </div>

      {/* <div className={styles.articleList}>
        <div>
          <span>Coffee is more than just a drink—it’s a ritual, a source of energy, and for many, a daily necessity. While there are many ways to prepare coffee, making a great cup at home is simple with the right ingredients and techniques. Whether you prefer a strong espresso, a smooth pour-over, or a creamy latte, this guide will help you brew the perfect cup. <br /><br />    

          Choosing the Right Coffee Beans : <br />
          The quality of your coffee starts with the beans. There are two main types of coffee beans: <br />
          - Arabica: Smooth, slightly sweet, and less bitter. <br />
          - Robusta: Stronger, more bitter, and higher in caffeine. <br /><br />

          Freshness matters! Always buy whole beans and grind them just before brewing for the best flavor. If possible, choose freshly roasted beans from a local coffee roaster or a reputable brand.<br /><br />
          Selecting a Brewing Method: <br />

          The brewing method you choose affects the flavor, strength, and texture of your coffee. Here are some popular methods: <br />
          - Drip Coffee Maker: Convenient and easy to use, great for making multiple cups. <br />
          - French Press: Produces a rich, full-bodied coffee by steeping coarse grounds in hot water. <br />
          - Espresso Machine: Makes strong, concentrated coffee, used for lattes, cappuccinos, and macchiatos. <br />
          - Pour-Over (e.g., V60, Chemex): Provides a clean and flavorful cup by manually pouring hot water over coffee grounds. <br />
          - Cold Brew: Steeps coffee grounds in cold water for 12-24 hours, resulting in a smooth, less acidic drink. <br />
          Each method requires a different grind size, so be sure to adjust accordingly. For example, espresso needs a fine grind, while a French press requires a coarse grind. <br />
          </span>
        </div>
      </div> */}


      {/* <div className={styles.articleList}>
        <div>
          <span>
            Coffee is more than just a drink—it’s a ritual, a source of energy, and for many, a daily necessity. 
            While there are many ways to prepare coffee, making a great cup at home is simple with the right ingredients and techniques. 
            Whether you prefer a strong espresso, a smooth pour-over, or a creamy latte, this guide will help you brew the perfect cup. 
            <br /><br />    

            Choosing the Right Coffee Beans : <br />
            The quality of your coffee starts with the beans. There are two main types of coffee beans: <br />
            
            <span className={styles.indentedLine}>- Arabica: Smooth, slightly sweet, and less bitter.</span> <br />
            <span className={styles.indentedLine}>- Robusta: Stronger, more bitter, and higher in caffeine.</span> <br /><br />

            Freshness matters! Always buy whole beans and grind them just before brewing for the best flavor. 
            If possible, choose freshly roasted beans from a local coffee roaster or a reputable brand.<br /><br />

            Selecting a Brewing Method: <br />
            The brewing method you choose affects the flavor, strength, and texture of your coffee. Here are some popular methods: <br />

            <span className={styles.indentedLine}>- Drip Coffee Maker: Convenient and easy to use, great for making multiple cups.</span> <br />
            <span className={styles.indentedLine}>- French Press: Produces a rich, full-bodied coffee by steeping coarse grounds in hot water.</span> <br />
            <span className={styles.indentedLine}>- Espresso Machine: Makes strong, concentrated coffee, used for lattes, cappuccinos, and macchiatos.</span> <br />
            <span className={styles.indentedLine}>- Pour-Over (e.g., V60, Chemex): Provides a clean and flavorful cup by manually pouring hot water over coffee grounds.</span> <br />
            <span className={styles.indentedLine}>- Cold Brew: Steeps coffee grounds in cold water for 12-24 hours, resulting in a smooth, less acidic drink.</span> <br />
            
            Each method requires a different grind size, so be sure to adjust accordingly. 
            For example, espresso needs a fine grind, while a French press requires a coarse grind. <br />
          </span>
        </div>
      </div> */}


      <div className={styles.articleList}>
        <div>
          {[
            "Coffee is more than just a drink—it’s a ritual, a source of energy, and for many, a daily necessity.",
            "While there are many ways to prepare coffee, making a great cup at home is simple with the right ingredients and techniques.",
            "", // Empty line before this

            "Choosing the Right Coffee Beans :",
            "The quality of your coffee starts with the beans. There are two main types of coffee beans:",
            "- Arabica: Smooth, slightly sweet, and less bitter.",
            "- Robusta: Stronger, more bitter, and higher in caffeine.",
            "", // Empty line before this

            "Freshness matters! Always buy whole beans and grind them just before brewing for the best flavor.",
            "If possible, choose freshly roasted beans from a local coffee roaster or a reputable brand.",
            "", // Empty line before this
            
            "Selecting a Brewing Method:", 
            "The brewing method you choose affects the flavor, strength, and texture of your coffee.",
            "- Drip Coffee Maker: Convenient and easy to use, great for making multiple cups.",
            "- French Press: Produces a rich, full-bodied coffee by steeping coarse grounds in hot water.",
            "- Espresso Machine: Makes strong, concentrated coffee, used for lattes, cappuccinos, and macchiatos.",
            "- Pour-Over (e.g., V60, Chemex): Provides a clean and flavorful cup by manually pouring hot water over coffee grounds.",
            "- Cold Brew: Steeps coffee grounds in cold water for 12-24 hours, resulting in a smooth, less acidic drink."
          ].map((line, index) => (
            line === "" ? <br key={index} /> : (
              <div key={index} className={line.startsWith("-") ? styles.indentedLine : ""}>
                {line}
              </div>
            )
          ))}
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

export default ArticleView;
