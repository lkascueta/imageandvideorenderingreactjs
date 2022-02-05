
import React from 'react';
import cardimage from './assets/images/cardimage.jpg';
import videohalloffame from './assets/video/halloffame.mp4';
import ReactPlayer from 'react-player';
import './App.css';

import { Card, Container, Row, Col, Navbar, Nav, NavDropdown } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">


<Navbar bg="light" expand="lg">
  <Container>
  <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://react-bootstrap.github.io/logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      ITBlog
      </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">News</Nav.Link>
        <NavDropdown title="Profile" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Sign Out</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
 
      <header className="App-header">
        
        <Container>
          <Row>
            <Col>
              <Card className='bg-dark'>
                <Card.Header>Image Rendering</Card.Header>
                <Card.Body>
                  
                  <Card.Text>
                    <img className='img-fluid shadow-4'  src={cardimage} alt='Sea'></img>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


          <hr></hr>

            <Col>
              <Card className='bg-white text-dark'>
                <Card.Header>Video Rendering</Card.Header>
                <Card.Body>
                  
                  <Card.Text>

                    <ReactPlayer
                      controls
                      url={[videohalloffame]}
                      width='100%'
                      height='100%'
                    />                
                  
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>

      </header>







    </div>
  );
}

export default App;
