import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { BsEyeFill } from "react-icons/bs";
import { BsEyeSlashFill } from "react-icons/bs";



const Register = () => {
    const [registerData, setRegisterData] = useState({
        "userName": "",
        "email": "",
        "password": "",
        "confirm_password": ""
    })

    const [isValidationSuccessed, setValidationSuccessed] = useState(false)
    const [isLoading, setLoading] = useState(false)
    const [showHide, setShowHide] = useState({
        'pass': 'password',
        'confirm': 'text'
    })

    if (isValidationSuccessed) {
        return (
            <h1 style={{ color: '#2acd6bff' }}>Registeration Done Successfully</h1>
        )
    }

    return (
        <div className='register-container p-4'>
            <Form onSubmit={e => {
                e.preventDefault()
                setLoading(true)
                setTimeout(() => {
                    setValidationSuccessed(true)
                }, 2000)
            }
            }>
                <h1 className='text-center'>Register Form</h1>
                <Form.Group className="mb-3" controlId="formGroupUserName">
                    <Form.Label>UserName</Form.Label>
                    <Form.Control type="text" placeholder="Enter user name" id="userName" onInput={e =>

                        setRegisterData(
                            {
                                ...registerData,
                                "userName": e.target.value
                            }
                        )
                    } />
                    {
                        (registerData.userName.length > 0 && registerData.userName.length < 3) ?
                            <p className='text text-danger' style={{ fontSize: '18px' }}>User name must have at least 3 characters</p>
                            :
                            ""
                    }
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onInput={e => 
                        setRegisterData({
                            ...registerData,
                            "email": e.target.value
                        })
                    } />
                    {
                        (!String(registerData.email)
                            .toLowerCase()
                            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
                            && registerData.email.length > 0) ?
                            <p className='text text-danger' style={{ fontSize: '18px' }}>Email must be in right format</p>
                            :
                            ""
                    }
                </Form.Group>
                <Row className="mb-4">
                    <Form.Group as={Col} controlId="formGroupPassword" className="position-relative">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type={showHide.pass} placeholder="Password" onInput={e => 
                            setRegisterData({
                                ...registerData,
                                "password": e.target.value
                            })
                        } />

                        <button className='position-absolute border-0' type="button" onClick={
                            () => {
                                setShowHide(

                                    {
                                        ...showHide,
                                        'pass': showHide.pass == 'password' ? 'text' : 'password'
                                    }
                                )
                            }}>

                            {
                                showHide.pass == 'password' ?
                                    <BsEyeFill />
                                    :
                                    <BsEyeSlashFill />
                            }
                        </button>
                        {
                            (registerData.password.length < 6 && registerData.password.length > 0) ?
                                <p className='text text-warning' style={{ fontSize: '18px' }}>Password must have at least 6 characters</p>
                                :
                                ""
                        }

                    </Form.Group>
                    <Form.Group as={Col} controlId="formGroupConfirmPassword" className='position-relative'>
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type={showHide.confirm} placeholder="Confirm Password" onInput={e => 
                            setRegisterData({
                                ...registerData,
                                'confirm_password': e.target.value
                            })
                        } />
                        <button className='position-absolute border-0' type="button" onClick={
                            () => {
                                setShowHide(
                                    {
                                        ...showHide,
                                        'confirm': showHide.confirm == 'password' ? 'text' : 'password'
                                    }
                                )
                            }}>

                            {
                                showHide.confirm == 'password' ?
                                    <BsEyeFill />
                                    :
                                    <BsEyeSlashFill />
                            }
                        </button>
                        {

                            (registerData.password !== registerData.confirm_password && registerData.confirm_password.length > 0) ?
                                <p className='text text-warning' style={{ fontSize: '18px' }}>Confirm password must be matched!</p>
                                :
                                ""
                        }
                    </Form.Group>
                </Row>
                <Form.Group as={Row} className="mt-4">
                    <center>
                        <Button type="submit" className='border-0' disabled={
                            registerData.userName.length === 0 ||
                            (!String(registerData.email)
                                .toLowerCase()
                                .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) ||
                            registerData.password.length < 6 ||
                            registerData.password !== registerData.confirm_password
                        }>
                            {
                                (isLoading) ?
                                    'Registering..'
                                    :
                                    'Register'
                            }

                        </Button>
                    </center>
                </Form.Group>
            </Form>
        </div>
    )
}

export default Register
