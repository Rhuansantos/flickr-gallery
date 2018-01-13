import Gallery from './gallery';
import Util from './util';
import TemplateGallery from './gallery_template';





// waiting for the page loading
window.addEventListener('load',() => {

    Util.startTime();
    
    // API KEY
    const apiKey = "a31291fbb92c2078dc081e40fa6ab76c";
    const searchForm = document.querySelector('.searchForm')
    .addEventListener('submit', (e) => {
        e.preventDefault();
        const searchInput = document.querySelector('.searchInput').value;
        if(searchInput !== ''){
            TemplateGallery.cleanContent();
            const galleryApp = Gallery.getInstance(apiKey, searchInput);
        }else{
            TemplateGallery.cleanContent();
            let emoji = String.fromCodePoint(0x1F605);
            TemplateGallery.error(`Don't be shy! just type on the search ${emoji}`);
        }     
    });

});