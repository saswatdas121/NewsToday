import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import {Link } from "react-router-dom";
import logo from './logo.jpg';


function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container style={{justifyContent:'center'}}>
       <Link to="/" ><img src={logo} alt="Logo" height="80px" width="200px"/></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
      </Container>
    </Navbar>
  );
}

export default NavigationBar;