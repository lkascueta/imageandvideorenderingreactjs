
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

      <ReactPlayer
                      controls
                      url={[videohalloffame]}
                      width='100%'
                      height='100%'
                    />  

    </div>
  );
}

export default App;
