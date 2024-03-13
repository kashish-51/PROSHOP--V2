import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png'
import {LinkContainer} from 'react-router-bootstrap'

const HeaderComponent = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
              <div>
          <Navbar.Brand >
            <img src={logo} alt="logo" />
            ProShop
            </Navbar.Brand>
            </div>
            </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='ms-auto'>
                <LinkContainer to='cart'> 
                <div>
                <Nav.Link ><FaShoppingCart />Cart</Nav.Link>
                </div>
                </LinkContainer>
              <LinkContainer to='/login'>
              <div>
                 <Nav.Link ><FaUser />Sign In</Nav.Link>
                 </div>
                 </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderComponent;
