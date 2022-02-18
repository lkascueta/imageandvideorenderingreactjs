
import React from 'react';

import videohalloffame from './assets/video/halloffame.mp4';
import ReactPlayer from 'react-player';
import './App.css';


import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">

      <ReactPlayer
                      url={[videohalloffame]}
                      width='100%'
                      height='100%'
                      playing= 'true'
                      loop= 'true'
                      muted='true'
                    /> 

    </div>
  );
}

export default App;
