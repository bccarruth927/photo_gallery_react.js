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
  //useState declaration for changing the large image's src attribute
  const [src, setSrc] = useState(images.antelopes.src);
  //useState declaration for changing the large image's alt attribute
  const [alt, setAlt] = useState(images.antelopes.alt);
  //useState declaration for changing the large image's corresponding caption
  const [caption, setCaption] = useState(images.antelopes.caption);

  const onLargeImageHandler = (newImage) => {
    setSrc(images[newImage].src);
    setAlt(images[newImage].alt);
    setCaption(images[newImage].caption);
  }

  return (
    <section id="wrapper">
      <div className="container">
        <h1>Amazing Animal Photos</h1>
      </div>
      <Thumbnails onLargeImage={onLargeImageHandler}/>
      <LargeImage src={src} alt={alt} caption={caption}/>
    </section>
  );
}

export default App;
