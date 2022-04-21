import { Button } from 'react-bootstrap';
import React, { useRef, useState } from 'react';
import { Form } from 'react-bootstrap';
import Social from '../Social/Social';
import './Register.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import Loading from '../../Shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const navigate = useNavigate('')
    const emailRef = useRef('')
    const passwordRef = useRef('')
    const confirmPasswordRef = useRef('')
    const nameRef = useRef('')
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user1,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
const[user]=useAuthState(auth)
    const handleRegister = event => {
        event.preventDefault()
        const name = nameRef.current.value
        const email = emailRef.current.value
        const password = passwordRef.current.value;
        const confirmPassword = confirmPasswordRef.current.value;

        if(password !== confirmPassword){
            toast('Your two passwords did not match');
            return;
        }
        if(password.length <6){
            toast('Password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }


    if (user) {
        navigate('/home')
    }

    let errorElement;
    if (error) {
        errorElement = <p>{error.message}</p>
    }
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <Form className='register-container' onSubmit={handleRegister}>
                <h1 className='register-title'>Register</h1>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text" name="name" placeholder="Enter Name" ref={nameRef} required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">

                    <Form.Control name="email" type="email" placeholder="Enter Your E-mail" ref={emailRef} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">

                    <Form.Control type="password" name="password" placeholder="Enter Your Password" ref={passwordRef} required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name="confirmPasswor" ref={confirmPasswordRef} placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox" onClick={() => setAgree(!agree)}><label htmlFor="" className={`ps-4  ${agree ? 'text-primary' : 'text-danger'}`}>Accept Genius car terms and condition</label>
                    <Form.Check type="checkbox" />
                </Form.Group>


                {errorElement}

                <Button
                    disabled={!agree}
                    variant="info" type="submit" className='register-btn'>
                    Submit
                </Button>
                <p className='text-center mt-2'>Already Have Account ? <Link to='/login'>
                    Please Login
                </Link></p>

                <Social></Social>
                <ToastContainer />
            </Form>


        </div>
    );
};

export default Register;