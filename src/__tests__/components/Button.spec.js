import React from 'react';
import { render, fireEvent, waitForElement } from '@testing-library/react';

import Home from '../../pages/Home';

test('Button component', async () => {
    const { getByText } = render(<Home />);

    const button = await waitForElement(
        () => getByText('Buscar')
    );

    expect(fireEvent.click(button));
});