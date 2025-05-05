import React from 'react';

const Notification = ({ message, onClose }) => {
    // Automatically close the notification after 2 seconds
    React.useEffect(() => {
        const timer = setTimeout(() => {
            onClose();
        }, 2000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return (
        <div className="notification">
            {message}
        </div>
    );
};

export default Notification;