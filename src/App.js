
import React from 'react';
import cardimage from './assets/images/cardimage.jpg';
import videohalloffame from './assets/video/halloffame.mp4';
import ReactPlayer from 'react-player';
import './App.css';

import { Card, Button, Container, Row, Col, Image } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
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
