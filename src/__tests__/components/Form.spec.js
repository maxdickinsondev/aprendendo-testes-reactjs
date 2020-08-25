import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import Home from '../../pages/Home';
import { act } from 'react-dom/test-utils';

test('Form component', async () => {
    const { getByTestId, getByText, getByPlaceholderText } = render(<Home />);

    const [inputLogin, form] = await waitForElement(() => [
        getByPlaceholderText('Login'),
        getByTestId('form-field'),
    ]);

    act(() => {
        fireEvent.change(inputLogin, { target: { value: 'max dickinson' } });
        fireEvent.submit(form);
    });

    const name = document.getElementById('username').innerHTML; 
    
    expect(name).toEqual('max dickinson');
});