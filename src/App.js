//Import application stylesheet
import './App.css';
//Import images object
import { images } from './modules/object.js';

//import antelopes from './imgs/antelopes.jpg';

function App() {
  //Images array set to empty
  const contentImages = [];

  //For...in loop iterating through the images object and adding <img/> tags to the contentImages array
  for (const image in images) {
    contentImages.push (
      <img
        key={image}
        alt={image}
        src={images[image].src}
        ariaLabel={image}
        role="button"
        width="19.5%"
        height="19.5%"
      />
    );
  };

  return (
    <section id="wrapper">
      <div class="container">
        <h1>Amazing Animal Photos</h1>
      </div>
      <figure id="thumbnails">
        {contentImages}
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
