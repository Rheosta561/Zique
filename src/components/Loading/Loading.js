import React from 'react';
import './Loading.css'; // Add styles for the loader

const Loading = () => (
    <div className="loading-screen">
        <div className="spinner"></div>
        <p>Loading restaurant details...</p>
    </div>
);

export default Loading;
