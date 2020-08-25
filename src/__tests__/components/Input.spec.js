import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import Home from '../../pages/Home';

test('Input component', async () => {
    const { getByPlaceholderText } = render(<Home />);

    const [login, password] = await waitForElement(() => [
        getByPlaceholderText('Login'),
        getByPlaceholderText('Password')
    ]);

    fireEvent.change(login, { target: { value: 'my login' } });
    fireEvent.change(password, { target: { value: 'my password' } });

    expect(login.value).toEqual('my login');
    expect(password.value).toEqual('my password');
});