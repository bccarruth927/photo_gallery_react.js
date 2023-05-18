//Import application stylesheet
import './App.css';
//Import Thumbnails component
import Thumbnails from './Thumbnails';
//Import images object
import { images } from './modules/object.js';

//import antelopes from './imgs/antelopes.jpg';

function App() {

  return (
    <section id="wrapper">
      <div className="container">
        <h1>Amazing Animal Photos</h1>
      </div>
      <Thumbnails />
      <figure id="largeImage">
        <img src={images.antelopes.src} alt={images.antelopes.alt}/>
        <figcaption className="caption">
          {images.antelopes.caption}
        </figcaption>
      </figure>
    </section>
  );
}

export default App;
