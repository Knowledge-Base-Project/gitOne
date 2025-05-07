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
    </div>
  );
};

export default SearchResult;
