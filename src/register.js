import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Register = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange=(e)=>{
    setName(e.target.value)
  }
  const handleEmailchange=(e)=>{
    setEmail(e.target.value)
  } 
  const handlepasswordChange=(e)=>{
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    e.preventDefault();
    
    const newResponse = {
      email,
      name,
      password}
      fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newResponse),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          // You can handle the response here, for example, show a success message to the user
        })
        .catch((error) => {
          console.error('Error:', error);
          // Handle any errors that occurred during the API call
        });
    // Here, you can handle the registration logic and API calls to register the user
    console.log('Registration submitted:', email, name, password);
  };

  return (
    <div>
      <h2>Register Page</h2>
      <form className='form' onSubmit={handleSubmit}>
      <div>
         
          <InputGroup className="mb-3">
  <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
  <Form.Control 
  className='input'
  value={name}
  onChange={handleUsernameChange}
    style={{ width: "50%" }} 
    type='text'// Adjust the width here as per your preference
    placeholder="Username"
    aria-label="Username"
    aria-describedby="basic-addon1"
    
  />
</InputGroup>
        </div>
        <div>
        <InputGroup className="mb-3">
  <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
  <Form.Control 
  className='input'
  type='email'
  value={email}
  onChange={handleEmailchange}
    style={{ width: "50%" }} // Adjust the width here as per your preference
    placeholder="email"
    aria-label="email"
    aria-describedby="basic-addon1"
    
  />
</InputGroup>
        </div>
        <div>
        <InputGroup className="mb-3">
  <InputGroup.Text id="basic-addon1" >@</InputGroup.Text>
  <Form.Control 
  className='input'
  value={password}
  onChange={handlepasswordChange}
  type='password'
    style={{ width: "50%" }} // Adjust the width here as per your preference
    placeholder="password"
    aria-label="password"
    aria-describedby="basic-addon1"
    
  />
</InputGroup>
        </div>
        <Link to="/login"><Button type="submit">Register</Button></Link>
      </form>
    </div>
  );
};

export default Register;
