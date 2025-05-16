// import React, { useState } from "react";
// import { Container } from "react-bootstrap";
// import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import Header from "../util/Header";

const KnowledgeBase = () => {

  const navigate = useNavigate();
   
  return (
    <div className={styles.knowledgeBase}>
      {/* Header */}
      <Header back={false} login={false}/>

      {/* Body */}
      <div className={styles.body}>
        {/* Latest Articles */}
        <div className={styles.colLatest}>
          <h2 className={styles.title}>LATEST ARTICLES</h2>
          <div className={styles.articleList}>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"The Secret Life of Socks: Where Do They Really Go?"</div>
              <div className={styles.articleInfo}>Kazi - 2/4/2025 (Lifestyle)</div>
            </div>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"5 Productivity Hacks You Need to Try"</div>
              <div className={styles.articleInfo}>Aisha - 2/10/2025 (Productivity)</div>
            </div>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"Understanding AI: The Future of Tech"</div>
              <div className={styles.articleInfo}>John - 3/1/2025 (Technology)</div>
            </div>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"The Power of Morning Routines"</div>
              <div className={styles.articleInfo}>Sarah - 3/5/2025 (Wellness)</div>
            </div>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"How to Budget Like a Pro"</div>
              <div className={styles.articleInfo}>David - 3/12/2025 (Finance)</div>
            </div>
          </div>
          <div className="text-start mt-3">
            <div className={styles.btnDark} onClick={() => navigate("/latest-articles")}>More</div>
          </div>
        </div>
        {/* Recent Updates */}
        <div className={styles.colUpdates}>
          <h2 className={styles.title}>RECENT UPDATES</h2>
          <div className={styles.articleList}>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"The Secret Life of Socks: Where Do They Really Go?"</div>
              <div className={styles.articleInfo}>Kazi - 2/4/2025 (Lifestyle)</div>
            </div>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"Why Minimalism is the Key to Happiness"</div>
              <div className={styles.articleInfo}>Emma - 2/15/2025 (Lifestyle)</div>
            </div>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"Top 10 Travel Destinations for 2025"</div>
              <div className={styles.articleInfo}>Mike - 3/2/2025 (Travel)</div>
            </div>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"The Science Behind Good Sleep"</div>
              <div className={styles.articleInfo}>Olivia - 3/8/2025 (Health)</div>
            </div>
            <div className={`${styles.articleGroup} border-bottom pb-3`}>
              <div className={styles.articleName1}>"Mastering Public Speaking: Tips & Tricks"</div>
              <div className={styles.articleInfo}>Chris - 3/11/2025 (Self-Improvement)</div>
            </div>
          </div>
          <div className={styles.btnUpdates}>
            <div className={styles.btnDark} onClick={() => navigate("/updated-article")}>More</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
