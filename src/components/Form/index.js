import React from 'react';

export default function Form({ dataTestId, onSubmit, children }) {
    return (
        <div>
            <form
                data-testid={dataTestId} 
                onSubmit={onSubmit}
            >
                {children}
            </form>
        </div>
    );
}