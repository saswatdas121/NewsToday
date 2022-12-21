import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './submenu.css';
import { Link } from "react-router-dom";

function Submenu() {
  return (
    <Navbar bg="light" expand="lg" style={{margin:'2px',height:'50px',position:"sticky"}}>
      <Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto sub">
            <div className='sub'>
           <Link to="/business"  className='links'>Business</Link>
           <Link to="/entertainment"  className='links' >Entertainment</Link>
            
            <Link to="/health"  className='links' >Health</Link>
            <Link to="/science" className='links' >Science</Link>
            <Link to="/sports"  className='links'>Sports</Link>
            <Link to="/technology" className='links' >Technology</Link>
            </div>
             
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  
}

export default Submenu; 