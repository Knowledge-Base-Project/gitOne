import React from 'react';

const PublishModal = ({ show, onClose, onPublish }) => {
    return (
        <div className={`modal fade ${show ? 'show' : ''}`} style={show ? { display: 'block' } : { display: 'none' }} aria-modal="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content"> 
                    <div className="modal-body">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                            <img src="Knowledge Base.png" alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
                            <button type="button" className="close" onClick={onClose}>
                                <span>&times;</span>
                            </button>
                        </div>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="flex-grow-1">
                                <h5 className="modal-title mb-1">PUBLISH</h5>
                                <p className="warning-text">Are you sure to publish the article?</p>
                            </div>
                            <img src="Publish Icon.png" alt="Publish" style={{width: '90px', height: '90px', marginLeft: '10px'}} />
                        </div>
                        <div className="button-container d-flex justify-content-between align-items-center mt-3">
                            <button className="btn-yes" type="button" onClick={onPublish}>YES</button>
                            <button className="btn-no" type="button" onClick={onClose}>NO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default PublishModal;