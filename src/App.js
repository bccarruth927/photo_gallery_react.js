//Import the React library
import React, { useState } from 'react';
//Import application stylesheet
import './App.css';
//Import Thumbnails component
import Thumbnails from './Thumbnails';
//Import LargeImage component
import LargeImage from './LargeImage';
//Import images object
//import { images } from './modules/object.js';

function App() {
  //useState declaration for setting the active border class on the thumbnail image
  const [isActive, setIsActive] = useState()

  return (
    <section id="wrapper">
      <div className="container">
        <h1>Amazing Animal Photos</h1>
      </div>
      <Thumbnails activeClass={isActive} toggleClass={setIsActive}/>
      <LargeImage />
    </section>
  );
}

export default App;
