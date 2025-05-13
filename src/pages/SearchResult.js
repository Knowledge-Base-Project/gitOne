/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useRef } from "react";
// import { useNavigate } from "react-router-dom";
import styles from "./SearchResult.module.css";
import Header from "../util/Header";

const SearchResult = () => {

  // const navigate = useNavigate();
  const searchInputRef = useRef(null);
  
  // const handleSearchClick = () => {
  //   if (searchInputRef.current) {
  //     searchInputRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  //     searchInputRef.current.focus(); // Step 3: Scroll & focus input field
  //   }
  // };
   
  return (
    <div className={styles.knowledgeBase}>
      {/* Header */}
      <Header/>
      {/* Body */}
      <div className={styles.body}>
        {/* Search Bar */}  
        <input 
          ref={searchInputRef}
          type="text" 
          placeholder="Search..." 
          className={styles.searchBar}
        />  
        {/* Search Button */}
        <button className={`${styles.custom_btn} btn`}>Search</button>
        {/* Search Results */}        
        <p className={styles.searchResult}>Search Result for (React JS): 143 Results</p>
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
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>      
    </div>
  );
};

export default SearchResult;
