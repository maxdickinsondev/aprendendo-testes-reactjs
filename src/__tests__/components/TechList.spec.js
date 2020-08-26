import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, act, fireEvent, waitForElement } from '@testing-library/react';

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
        const { getByPlaceholderText, getByText, getByTestId } = render(<TechList />);

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

        expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
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

    it('should get techs on storage', () => {
        render(<TechList />);

        expect(window.localStorage.getItem).toHaveBeenCalledWith('techs');
    });
});