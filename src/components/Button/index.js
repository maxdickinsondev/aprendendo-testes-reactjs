import React from 'react';

export default function Button({ type, onClick, children }) {
    return (
        <div>
            <button
                type={type}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
}