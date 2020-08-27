import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';

import { addTech } from '../../store/modules/techs/actions';
import TechListRedux from '../../components/TechListRedux';

jest.mock('react-redux');

describe('TechListRedux component', () => {
    it('should render tech list', async () => {
        useSelector.mockImplementation(callback => callback({
            techs: ['Node.js', 'ReactJS']
        }));

        const { getByTestId, getByText } = render(<TechListRedux />);

        expect(getByTestId('tech-list')).toContainElement(getByText('Node.js'));
        expect(getByTestId('tech-list')).toContainElement(getByText('ReactJS'));
    });

    it('should be able to add new tech', () => {
        const { getByTestId, getByPlaceholderText } = render(<TechListRedux />);

        const dispatch = jest.fn();
        useDispatch.mockReturnValue(dispatch);

        fireEvent.change(getByPlaceholderText('Insira uma tecnologia'), { target: { value: 'Node.js' } });
        fireEvent.submit(getByTestId('tech-form'));

        expect(dispatch).toHaveBeenCalledWith(addTech('Node.js'));
    });
});