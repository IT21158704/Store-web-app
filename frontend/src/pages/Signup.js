import React, { useState } from 'react'
import {Button, Container, Row,  Col, Form, Alert} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Signup.css';
import { useSignupMutation } from "../services/appApi";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [signup, {error, isLoading, isError}] =useSignupMutation();
  
    function handleSignup(e){
    e.preventDefault();
    signup({name, email, password});

  }
  
  return (
    <Container>
        <Row>
            <Col md={6} className="login__form--container">
                <Form style={{width: "100%"}} onSubmit={handleSignup}>
                    <h1>Create an account</h1>
                    {isError && <Alert variant='danger'>{error.data}</Alert>}
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter Name" value={name} required 
                        onChange={e => setName(e.target.value)}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter Email" value={email} required 
                        onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" value={password} required 
                        onChange={e => setPassword(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group>
                        <Button type='submit' className=' mt-3' disabled = {isLoading}>Register</Button>
                    </Form.Group>
                    <p>Already have an account?<Link to="/login"> Log In? </Link></p>
                </Form>
            </Col>
            <Col md={6} className='signup__image--container mt-3'></Col>
        </Row>
    </Container>
  )
}

export default Signup