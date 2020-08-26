import React, { useState, useEffect } from 'react';

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

    useEffect(() => {
        const techs = localStorage.getItem('techs');

        if (techs) {
            setTechs(JSON.parse(techs));
        }
    }, []);

    useEffect(() => {
       localStorage.setItem('techs', JSON.stringify(techs));
    }, [techs]);

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