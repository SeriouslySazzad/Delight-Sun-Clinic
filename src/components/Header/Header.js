import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../hooks/useAuth';
import "./Header.css"

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home" className="logo">Delight Sun Clinic</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} className="nav-menu" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-menu" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-menu" to="/about">About</Nav.Link>
                        <Nav.Link as={HashLink} className="nav-menu" to="/departments">Departments</Nav.Link>
                        {/* <Nav.Link as={HashLink} className="nav-menu" to="/home#pricing">Pricing</Nav.Link> */}
                        {user?.email ?
                            <Button className="me-2" onClick={logOut} variant="danger">Sign Out </Button> :
                            <Nav.Link as={Link} className="nav-menu" to="/login">Login</Nav.Link>
                        }
                        <Navbar.Text>
                            <a className="nav-menu" href="#login">  {user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;