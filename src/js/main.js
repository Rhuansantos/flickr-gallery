import Gallery from './gallery';

// waiting for the page loading
window.addEventListener('load',() => {
    // API KEY
    const apiKey = "a31291fbb92c2078dc081e40fa6ab76c";

    // const searchInput = document.querySelector('.search').submit();

    // console.log(searchInput);
    const searchForm = document.querySelector('.searchForm');
    searchForm.addEventListener('submit', (e) => {
        const searchInput = document.querySelector('.searchInput').value;
        e.preventDefault();
        console.log(searchInput);
        // alert('ok');

        const galleryApp = Gallery.getInstance(apiKey, searchInput);
    });

});