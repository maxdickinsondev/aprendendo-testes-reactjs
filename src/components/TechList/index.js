import React, { useState } from 'react';

import Form from '../Form';
import Input from '../Input';
import Button from '../Button';

export default function TechList() {
    const [techs, setTechs] = useState([]);
    const [newTech, setNewTech] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        setTechs([...techs, newTech]);
        setNewTech('');
    }

    return (
        <div>
            <Form  
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