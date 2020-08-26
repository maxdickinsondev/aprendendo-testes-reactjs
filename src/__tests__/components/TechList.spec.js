import React from 'react';
import { render, act, fireEvent, waitForElement } from '@testing-library/react';

import TechList from '../../components/TechList';

describe('TechList component', () => {
    it('should be able to add new tech', async () => {
        const { getByPlaceholderText, getByText } = render(<TechList />);

        const input = await waitForElement(
            () => getByPlaceholderText('Insira uma tecnologia')
        );

        act(() => {
            fireEvent.change(input, { target: { value: 'ReactJS' } });
        });

        expect(input.value).toEqual('ReactJS');

        const button = await waitForElement(
            () => getByText('Adicionar')
        );

        fireEvent.click(button);

        const result = await waitForElement(
            () => getByText('ReactJS')
        );

        expect(result).toBeDefined();
    });
});