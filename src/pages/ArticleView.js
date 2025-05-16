import { useState } from "react";
import { 
    PencilSquare, 
    Trash3Fill,
} from 'react-bootstrap-icons';
//import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./ArticleView.module.css";
import DeleteModal from "../util/DeleteModal";
import Header from "../util/Header";

const ArticleView = () => {
  // const navigate = useNavigate();
  //Modal state
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //Handle delete
  const handleDelete = () => {
    setShowDeleteModal(false);
  };

  return (
    <div className={styles.knowledgeBase}>
      {/* Navbar */}
      <Header back={true} login={true}/>
      {/* Body */}
      <div className={styles.articlesSection}>
        {/* Page Title */}
        <div className={styles.articlesTitle2}>
          <div className={styles.articlesTitle}>How to make coffee.......</div>
          <div className={styles.articlesInfo}>Jack (2025-2-17)</div>
          <PencilSquare className={styles.iconHover}/> {/* Edit Icon */}
          <Trash3Fill className={styles.iconHover} onClick={() => setShowDeleteModal(true)}/> {/* Delete Icon */}
        </div>
        
        {/* Article content */}
        <div className={styles.articleContent}>
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
