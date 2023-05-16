//Import application stylesheet
import './App.css';
//Import images object
import { images } from './modules/object.js';

//import antelopes from './imgs/antelopes.jpg';

function App() {
  return (
    <section id="wrapper">
      <div class="container">
        <h1>Amazing Animal Photos</h1>
      </div>
      <figure id="thumbnails">
        <img src={images.antelopes.src} width="19.5%" height="19.5%" alt={images.antelopes.alt}/>
        <img src={images.dolphins.src} width="19.5%" height="19.5%" alt={images.dolphins.alt}/>
        <img src={images.elephants.src} width="19.5%" height="19.5%" alt={images.elephants.alt}/>
        <img src={images.horses.src} width="19.5%" height="19.5%" alt={images.elephants.alt}/>
        <img src={images.tiger.src} width="19.5%" height="19.5%" alt={images.tiger.alt}/>
      </figure>
      <figure id="largeImage">
        <img src={images.antelopes.src} alt={images.antelopes.alt}/>
        <figcaption class="caption">
          {images.antelopes.caption}
        </figcaption>
      </figure>
    </section>
  );
}

export default App;
