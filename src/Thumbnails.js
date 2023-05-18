//Import the images object from the modules folder
import { images } from './modules/object.js';

function Thumbnails() {
    //Created variable for the images array
    const thumbnailImages = [];

    //For...in loop iterating over the images object and pushing them to the thumbnailImgaes array
    for (const image in images) {
        thumbnailImages.push(images[image]);
    };

    return (
        <figure id="thumbnails">
            {thumbnailImages.map(thumbnail => (
                <img
                    key={thumbnail.id}
                    alt={thumbnail.alt}
                    src={thumbnail.src}
                    aria-label={thumbnail.id}
                    role='button'
                    height='19.5%'
                    width='19.5%'
                />
            ))}
        </figure>
    );
};

//Export Thumbnails Component
export default Thumbnails;