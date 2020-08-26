import React from 'react';
import { useSelector } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';

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
});