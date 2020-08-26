import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

export default function TechListRedux() {
    const [newTech, setNewTech] = useState('');

    const dispatch = useDispatch();
    const techs = useSelector(state => state.techs);

    function handleSubmit(event) {
        event.preventDefault();

        dispatch({
            type: 'ADD_TECH',
            payload: {
                tech: newTech
            }
        });
        setNewTech('');
    }

    return (
        <div>
            <Form  
                dataTestId="tech-form"
                onSubmit={handleSubmit}
            >
                <Input 
                    placeholder="Insira uma tecnologia"
                    value={newTech}
                    onChange={(event) => setNewTech(event.target.value)}
                />

                <Button 
                    type="submit"
                >
                    Adicionar
                </Button>
            </Form>
            
            <ul data-testid="tech-list">
                {techs.map(tech => (
                    <li key={tech}> {tech} </li>
                ))}
            </ul>
        </div>
    );
}