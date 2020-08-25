import React from 'react';

export default function Input({ placeholder, value, onChange }) {
    return (
        <div>
            <input 
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
}