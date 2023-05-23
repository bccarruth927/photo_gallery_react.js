//JavaScript Document containing the images object used in the application

//Import images from the imgs folder for the object
import antelopes from '../imgs/antelopes.jpg';
import dolphins from '../imgs/dolphins.jpg';
import elephants from '../imgs/elephants.jpg';
import horses from '../imgs/horses.jpg';
import tiger from '../imgs/tiger.jpg';

export const images = {
    antelopes: {
        id: 1,
        src: antelopes,
        name: 'antelopes',
        caption: 'Two antelopes resting under the shade of a small tree. Photo credit: Bas van Brandwijk from Pexels.com'
    },
    dolphins: {
        id: 2,
        src: dolphins,
        name: 'dolphins',
        caption: 'A school of dolphins swimming peacefully through the ocean. Photo credit: Jeremy Bishop from Pexels.com'
    },
    elephants: {
        id: 3,
        src: elephants,
        name: 'elephants',
        caption: 'A mother and baby elephant being sprayed off in an old parking lot. Photo credit: Oleksandr Pidvalnyi from Pexels.com'
    },
    horses: {
        id: 4,
        src: horses,
        name: 'horses',
        caption: 'A herd of horses prancing through a field in the early morning. Photo credit: Milena de Narvaez Ayllon from Pexels.com'
    },
    tiger: {
        id: 5,
        src: tiger,
        name: 'tiger',
        caption: 'A powerful portrait photo a Bengal Tiger. Photo credit: George Desipris from Pexels.com'
    }
};
