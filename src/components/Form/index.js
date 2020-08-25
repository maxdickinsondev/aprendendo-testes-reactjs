import React from 'react';

export default function Form({ onSubmit, children }) {
    return (
        <div>
            <form onSubmit={onSubmit}>
                {children}
            </form>
        </div>
    );
}