//JavaScript Document containing the images object used in the application

//Import images from the imgs folder for the object
import antelopes from '../imgs/antelopes.jpg';
import dolphins from '../imgs/dolphins.jpg';
import elephants from '../imgs/elephants.jpg';
import horses from '../imgs/horses.jpg';
import tiger from '../imgs/tiger.jpg';

export const images = {
    antelopes: {
        src: antelopes,
        alt: 'antelopes',
        id: 'antelopes',
        caption: 'Two antelopes resting under the shade of a small tree. Photo credit: Bas van Brandwijk from Pexels.com'
    }, 
    dolphins: {
        src: dolphins,
        alt: 'dolphins',
        id: 'dolphins'
    },
    elephants: {
        src: elephants,
        alt: 'elephants',
        id: 'elephants'
    },
    horses: {
        src: horses,
        alt: 'horses',
        id: 'horses'
    },
    tiger: {
        src: tiger,
        alt: 'tiger',
        id: 'tiger'
    }
};
