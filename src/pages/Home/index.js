import React, { useState } from 'react';

import Form from '../../components/Form';
import Input from '../../components/Input';
import Button from '../../components/Button';

function Home() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isClick, setIsClick] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    setIsClick(true);
  }

  return (
    <div className="App">
      <Form onSubmit={handleSubmit}>
        <Input 
          placeholder="Login"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />

        <Input 
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button
          type="submit"
        >
          Buscar
        </Button>
      </Form>

      {isClick ? (
        <h1> {username} </h1>
      ) : null}
    </div>
  );
}

export default Home;
