//Import the React library
import React, { useState } from 'react';
//Import application stylesheet
import './App.css';
//Import Thumbnails component
import Thumbnails from './Thumbnails';
//Import LargeImage component
import LargeImage from './LargeImage';
//Import images object
import { images } from './modules/object.js';

function App() {
  //useState declaration for setting the active border class on the thumbnail image
  const [isActive, setIsActive] = useState();
  //useState declaration for setting the LargeImage Component's src attribute
  const [src, setSrc] = useState(images.antelopes.src);
  //useState declaration for setting the LargeImage Component's alt attribute
  const [alt, setAlt] = useState(images.antelopes.alt);
  //useState declaration for setting the LargeImage Component's corresponding caption
  const [caption, setCaption] = useState(images.antelopes.caption);

  //LargeImage handler function to control the src, alt attributes and corresponding caption
  const largeImageHandler = (newImage) => {
    setSrc(images[newImage].src);
    setAlt(images[newImage].alt);
    setCaption(images[newImage].caption);
  }

  return (
    <section id="wrapper">
      <div className="container">
        <h1>Amazing Animal Photos</h1>
      </div>
      <Thumbnails activeClass={isActive} toggleClass={setIsActive} largeImageHandle={largeImageHandler}/>
      <LargeImage src={src} alt={alt} caption={caption}/>
    </section>
  );
}

export default App;
