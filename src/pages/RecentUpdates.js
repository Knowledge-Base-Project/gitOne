/* eslint-disable jsx-a11y/anchor-is-valid */
// import React from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./RecentUpdates.module.css";
import Header from "../util/Header";

const RecentUpdates = () => {

  // const navigate = useNavigate();     
  
  return (
    <div className={styles.knowledgeBase}>

      {/* Header */}
      <Header/>

      {/* Body */}
      <div className={styles.body}>
        {/* Page Title */}
        <p className={styles.title}>RECENT UPDATES</p>      

        {/* Latest Articles */}
        <div className={styles.recentArtcl}>
          {[1, 2, 3, 4, 5].map((id) => (
            <div key={id} className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}> "The Secret Life of Socks: Where Do They Really Go?" </div>
              <div className={styles.articleInfo}> Kozai - 2/14/2025 (Lifestyle)</div>
            </div>
          ))}
        </div>      
      </div>
    </div>
  );
};

export default RecentUpdates;
