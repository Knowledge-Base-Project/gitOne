
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginModal from './LoginModal'; 
import LogoutModal from './LogoutModal'; 
import DeleteModal from './DeleteModal'; 
import SaveModal from './SaveModal'; 
import PublishModal from './PublishModal'; 
import CancelModal from './CancelModal'; 
import Notification from './Notification'; 

const PopupButtons = () => {
  const navigate = useNavigate();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showSaveModal, setShowSaveModal] = useState(false);
  const [showPublishModal, setShowPublishModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [notification, setNotification] = useState('');

  // LOGIN POPUP

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  const handleLogin = (username, password) => {
    // Insert Login Function
    const DUMMY_USERNAME = 'user';
    const DUMMY_PASSWORD = 'pass123';

    if (username === DUMMY_USERNAME && password === DUMMY_PASSWORD) {
      setNotification('Login successful! Redirecting to user page...');
      setTimeout(() => {
        navigate('/user-page'); 
        handleCloseLoginModal(); 
      }, 2000); 
    } else {
      setNotification('Invalid username or password!'); 
    }
  };

  // LOGOUT POPUP

  const handleOpenLogoutModal = () => {
    setShowLogoutModal(true);
  };

  const handleCloseLogoutModal = () => {
    setShowLogoutModal(false);
  };

  const handleLogout = () => {
    // Insert Logout Function
    // localStorage.removeItem('userToken')
    navigate("/main-page"); 
  };

  //DELETE POPUP

  const handleOpenDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
  };

  const handleDelete = () => {
    // Insert Delete Function
    handleCloseDeleteModal();
  };

  // SAVE POPUP

  const handleOpenSaveModal = () => {
    setShowSaveModal(true);
  };

  const handleCloseSaveModal = () => {
    setShowSaveModal(false);
  };

  const handleSave = () => {
    // Insert Save Function
    handleCloseSaveModal();
  }; 

  // PUBLISH POPUP

  const handleOpenPublishModal = () => {
    setShowPublishModal(true);
  };

  const handleClosePublishModal = () => {
    setShowPublishModal(false);
  };

  const handlePublish = () => {
    // Insert Publish Function
    handleClosePublishModal();
  };

  // CANCEL POPUP

  const handleOpenCancelModal = () => {
    setShowCancelModal(true);
  };

  const handleCloseCancelModal = () => {
    setShowCancelModal(false);
  };

  const handleCancel = () => {
    // Insert Cancel Function
    handleCloseCancelModal();
  };

  return (
  <div className="App">
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
      <title>Knowledge Base</title>
      {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"/>*/}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"></script>

    <div>
      <button type="button" className="btn btn-primary" onClick={handleOpenLoginModal}>
        LOGIN
      </button>
      
      <button type="button" className="btn btn-primary" onClick={handleOpenLogoutModal}>
        LOGOUT
      </button>

      <button type="button" className="btn btn-primary" onClick={handleOpenDeleteModal}>
        DELETE
      </button>

      <button type="button" className="btn btn-primary" onClick={handleOpenSaveModal}>
        SAVE & EXIT
      </button>

      <button type="button" className="btn btn-primary" onClick={handleOpenPublishModal}>
        PUBLISH
      </button>

      <button type="button" className="btn btn-primary" onClick={handleOpenCancelModal}>
        CANCEL
      </button>      

      {/* Modal Componets rendering */}
      <LoginModal show={showLoginModal} onClose={handleCloseLoginModal} onLogin={handleLogin}/>
      <LogoutModal show={showLogoutModal} onClose={handleCloseLogoutModal} onLogout={handleLogout}/>
      <DeleteModal show={showDeleteModal} onClose={handleCloseDeleteModal} onDelete={handleDelete}/>
      <SaveModal show={showSaveModal} onClose={handleCloseSaveModal} onSave={handleSave}/>
      <PublishModal show={showPublishModal} onClose={handleClosePublishModal} onPublish={handlePublish}/>
      <CancelModal show={showCancelModal} onClose={handleCloseCancelModal} onCancel={handleCancel}/>
      {notification && <Notification message={notification} onClose={() => setNotification('')} />} 
    </div>
  </div>
  );
}

export default PopupButtons;