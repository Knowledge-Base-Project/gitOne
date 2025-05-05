import React from 'react';

const DeleteModal = ({ show, onClose, onDelete }) => {
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
                                <h5 className="modal-title mb-1">DELETE</h5>
                                <p className="warning-text">Are you sure to delete this content?</p>
                            </div>
                            <img src="Delete Icon.png" alt="Delete" style={{width: '90px', height: '90px', marginLeft: '10px'}} />
                        </div>
                        <div className="button-container d-flex justify-content-between align-items-center mt-3">
                            <button className="btn-yes" type="button" onClick={onDelete}>YES</button>
                            <button className="btn-no" type="button" onClick={onClose}>NO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
    );
};

export default DeleteModal;