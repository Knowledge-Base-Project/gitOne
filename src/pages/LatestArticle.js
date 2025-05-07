/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./LatestArticle.module.css";
import Header from "../util/Header";

const SearchResult = () => {

  // const navigate = useNavigate();     
  
  return (
    <div className={styles.knowledgeBase}>
      {/* Header */}
      <Header/>

      {/* Search Bar */}
      <div className="mt-4 d-flex gap-2">
        <p className={styles.subTitle}>LATEST ARTICLES</p>
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
    </div>
  );
};

export default SearchResult;
