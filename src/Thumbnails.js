//Import the images object from the modules folder
import { images } from './modules/object.js';

//Thumbnails Component

function Thumbnails(props) {
    //Created variable for the images array
    const thumbnailImages = [];

    //For...in loop iterating over the images object and pushing them to the thumbnailImgaes array
    for (const image in images) {
        thumbnailImages.push(images[image]);
    };

    //Event listener function to add a border to the thumbnail and change the state of the large image and caption
    const handleClick = (event) => {
        const selectedImage = event.target.alt;
        props.onLargeImage(selectedImage);
    }

    return (
        <figure id="thumbnails">
            {thumbnailImages.map(thumbnail => (
                <img
                    key={thumbnail.name}
                    alt={thumbnail.name}
                    src={thumbnail.src}
                    aria-label={thumbnail.name}
                    role='button'
                    height='19.5%'
                    width='19.5%'
                    onClick={handleClick}
                />
            ))}
        </figure>
    );
};

//Export Thumbnails Component
export default Thumbnails;