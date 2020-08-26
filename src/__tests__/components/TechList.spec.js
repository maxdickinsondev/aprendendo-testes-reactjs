import React from 'react';
import { render, act, fireEvent, waitForElement, cleanup } from '@testing-library/react';

import TechList from '../../components/TechList';

describe('TechList component', () => {
    beforeEach(() => {
        Object.defineProperty(window, "localStorage", {
            value: {
              getItem: jest.fn(() => null),
              setItem: jest.fn(() => null)
            },
            writable: true
          });
    });

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

        act(() => {
            fireEvent.click(button);
        });

        const result = await waitForElement(
            () => getByText('ReactJS')
        );

        expect(result).toBeDefined();
    });

    it('should add techs on storage', async () => {
        let { getByPlaceholderText, getByText } = render(<TechList />);

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

        act(() => {
            fireEvent.click(button);
        });

        expect(window.localStorage.setItem).toHaveBeenCalledWith('techs', JSON.stringify(['ReactJS']));
    });
});