import React from 'react';
import './NeedAPartner.css';

function NeedAPartner({ onClick, isOwner }) {
    return (
    <div className="holder">
        <button className="add-button" disabled={isOwner} onClick={onClick}>
            <span aria-label="sparkle">
                ✨
            </span>
            <span style={{ color: isOwner ? "grey" : undefined }}>Join</span>
            <span aria-label="sparkle">
                ✨
            </span>
        </button>
    </div>
    );
}

export default NeedAPartner;