import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import SearchResult from "./pages/SearchResult"; 
import "./App.css"; // Import global styles
import MyArticle from './pages/MyArticle';
import LatestArticle from './pages/LatestArticle';
import AddArticle from './pages/ArticleCreationForm';
import ArticleView from './pages/ArticleView';
import RecentUpdates from './pages/RecentUpdates.js';
import LogOut from './pages/LogOut';
import Home from './pages/Home';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/searched-articles" element={<SearchResult />} />  
      <Route path="/latest-articles" element={<LatestArticle />} />
      <Route path="/my-articles" element={<MyArticle />} />
      <Route path="/add-article" element={<AddArticle />} />
      <Route path="/view-article" element={<ArticleView />} />
      <Route path="/updated-article" element={<RecentUpdates />} /> 
      <Route path="/logout" element={<LogOut />} />  
    </Routes>
  );
}

export default App;

 
 