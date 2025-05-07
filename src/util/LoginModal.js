import React, { useState } from 'react';

const LoginModal = ({ show, onClose, onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        onLogin(username, password); // Invoke the onLogin function with credentials
    };

    return (
        <div className={`modal fade ${show ? 'show' : ''}`} style={show ? { display: 'block' } : { display: 'none' }} aria-modal="true">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                    <form onSubmit={handleSubmit}>
                        <div className="modal-body">
                            <div className="d-flex justify-content-between align-items-center mb-1">
                                <img src="Knowledge Base.png" alt="Logo" className="img-fluid" style={{ maxHeight: '50px' }} />
                                <button type="button" className="close" onClick={onClose}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="flex-grow-1">
                                    <h5 className="modal-title mb-1">WELCOME BACK</h5>
                                    <input
                                        type="text" 
                                        className="form-control"
                                        name="username"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <img src="Bulb Icon.png" alt="Login" style={{ width: '100px', height: '100px' }} />
                            </div>
                            <button className="btn-login" type="submit">LOGIN</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;