import TemplateGallery from './gallery_template';
import Util from './util';

export default class Gallery {
  /**
   * @static
   * @param {String} _apiKey 
   * @returns the instance
   * Singleton design pattern
   * @memberof Gallery
   * if the gallery has already insert content clean it and make the new request
   */
  static getInstance(_apiKey, _search) {
    if(!Gallery._instance){
      Gallery._instance = new Gallery(_apiKey, _search);
      return Gallery._instance;
    }
    else{
        TemplateGallery.cleanContent();
        Gallery._instance = new Gallery(_apiKey, _search);
        return Gallery._instance;
    }
  }
  /**
   * Creates an instance of Gallery.
   * @param {String} _apiKey 
   * @memberof Gallery
  */
  constructor(_apiKey, _search) {
    // Global configuration
    this.apiKey = `&api_key=${_apiKey}`;
    this.searchInput = _search;
    this.format = '&format=json&nojsoncallback=1'; // default format JSON
    this.search(); // Default function
  }
/**
 * @param {API Methods} _method 
 * @param {any parameters from the API} _params 
 * @return data from the call
 */
async apiRequest(_method, ..._params) {
    const params = [];
    params.push(..._params);
    const apiParams = params.join('');
    try {
      const flickrApi = await fetch(`
      https://api.flickr.com/services/rest/?method=${_method}${this.apiKey}${apiParams}${this.format}`);
      const data = await flickrApi.json();
      if(data.stat === 'fail') {
        TemplateGallery.error('Ops, something went wrong :(');
      }
      return data;
    } catch (e) {
        return e;
    }
  }
  search() {
    // Method, ...params
    // params reference https://www.flickr.com/services/api/flickr.photos.search.html
    const gallery = [];
    this.apiRequest(
      'flickr.photos.search', 
      `&text=${this.searchInput}`, 
      '&per_page=25', 
      '&safe_search=3',
      '&content_type=1'
      // '&page=10'
    ).then((res) => {
      const photos = res.photos.photo;
      if(photos.length === 0) {
        TemplateGallery.error('Sorry, no results found, try another keyword!');
      }
      photos.map(p => {
         const photoRequest = this.apiRequest('flickr.photos.getSizes', `&photo_id=${p.id}`)
        .then(_pictures => {
          const quality = _pictures.sizes.size.length - 1; // grab original size
          TemplateGallery.home(_pictures.sizes.size[quality].source);
        });
      });
    }).then(x => Util.loaded());
  }
}