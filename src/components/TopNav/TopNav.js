import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import{ Navbar, Nav, Container, Redirect} from 'react-bootstrap'

import Home from '../Home/Home';


import {
  Routes,
  Route,
  Link,
 HashRouter
} from "react-router-dom";


function TopNav() {
  return (
    <HashRouter>
    <div className='App'>
      <>
       <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand as={Link} to='/'>BC Recycle</Navbar.Brand>
    <Nav className="ms-auto">
      <Nav.Link as={Link} to='/'>Home</Nav.Link>
      
    </Nav>
    
    </Container>
  </Navbar>

  </>
  <div>
    <Routes>
      
      <Route path='/' element={<Home />} />
    </Routes>
  </div>
    </div>
    </HashRouter>
  
  );
}

export default TopNav;
