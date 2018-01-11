import Gallery from './gallery';

// waiting for the page loading
window.addEventListener('load',() => {

    // API KEY
    const apiKey = "a31291fbb92c2078dc081e40fa6ab76c";
    // Initiating Gallery
    const galleryApp = Gallery.getInstance(apiKey, 'cars');
});