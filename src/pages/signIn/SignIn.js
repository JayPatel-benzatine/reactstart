import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuthentication from '../../hooks/useAuthentication'

const SignIn = () => {
    const { handleSignInUser } = useAuthentication()
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')
    const navigate = useNavigate();

    const hadleSubmit = (e) => {
        e.preventDefault()
        handleSignInUser('kminchelle', '0lelplR', navigate)
    }

    return (
        <Form onSubmit={hadleSubmit} className='m-5'>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>username</Form.Label>
                <Form.Control value={username} onChange={e => setusername(e.target.value)} type="text" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control value={password} onChange={e => setpassword(e.target.value)} type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default SignIn