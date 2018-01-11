import TemplateGallery from './gallery_template';
export default class Gallery {
  /**
   * @static
   * @param {String} _apiKey 
   * @returns the instance
   * Singleton design pattern
   * @memberof Gallery
   */
  static getInstance(_apiKey, _search) {
    if(!Gallery._instance){
      Gallery._instance = new Gallery(_apiKey, _search);
      return Gallery._instance;
    }
    else{
        throw 'the class Gallery was already created'; 
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
      return data;
    } catch (e) {
        return e;
    }
  }

  async search() {
    // Method, ...params
    // params reference https://www.flickr.com/services/api/flickr.photos.search.html
    const searchRequest = await this.apiRequest(
      'flickr.photos.search', 
      `&text=${this.searchInput}`, 
      '&per_page=25', 
      '&safe_search=3'
    );
    const photos = searchRequest.photos.photo;
    const gallery = [];
    
    photos.map(async (p) =>{
      const photoRequest = await this.apiRequest('flickr.photos.getSizes', `&photo_id=${p.id}`);
      gallery.push(photoRequest.sizes.size[8].source);
    });
    TemplateGallery.home(gallery);
  }

}