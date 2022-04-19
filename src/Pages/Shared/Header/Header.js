import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css'
import logo from '../../../images/logo.png'
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import Loading from '../Loading/Loading';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    if(loading){
        return<Loading></Loading>
    }

    
    return (
        <Navbar className='navStyle' collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' >
            <Container>
                <Navbar.Brand as={Link} to='/' href="#home">
                    <img style={{ height: '3rem', width: '3rem', color: 'white' }} src={logo} alt="" />  <span className='header-title'>Fitness Fighter</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto ">
                        <Nav.Link as={Link} to='/schedule' href="" className='' >Schedule</Nav.Link>
                        <Nav.Link href="/review">Review</Nav.Link>
                        <Nav.Link as={Link} to='/blog' >Blog</Nav.Link>
                        <Nav.Link as={Link} to='/about' href="#deets" className='nav-title'>About</Nav.Link>
                    </Nav>
                    <Nav>

                        {user ? (
                            <button
                                className="btn btn-link text-white text-decoration-none"
                                onClick={handleSignOut}
                            >
                                Sign Out
                            </button>
                        ) : (
                            <Nav.Link as={Link} to="/register">
                                Sign In
                            </Nav.Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;