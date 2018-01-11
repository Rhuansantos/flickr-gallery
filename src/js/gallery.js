import TemplateGallery from './gallery_template';
export default class Gallery {
  /**
   * @static
   * @param {String} _apiKey 
   * @param {any} params 
   * @returns 
   * @memberof Gallery
   */
  static getInstance(_apiKey, ...params)  {
    if(!Gallery._instance){
      Gallery._instance = new Gallery(_apiKey);
      return Gallery._instance;
    }
    else{
        throw 'the class Gallery was already created'; 
    }
  }
  
/**
 * Creates an instance of Gallery.
 * @param {String} _apiKey 
 * @param {any} params 
 * @memberof Gallery
 */
constructor(_apiKey, ...params) {
    console.log(_apiKey);
    this.apiKey = _apiKey;
    this.apiRequest(this.apiKey).then((data) => {
      // TemplateGallery.homeGallery(data);
      this.gallery(data);
    });
  }

  async apiRequest(_apiKey) {
    try {
      const flickrApi = await fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${_apiKey}&text=garden&per_page=25&page=&format=json&nojsoncallback=1`);
      const data = await flickrApi.json();
      return data;
    } catch (e) {
        return e;
    }
  }

  gallery(_data){
      const gallery = data.photos.photo;
      // const photos = await fetch();
      gallery.map(photo => { 
        console.log(photo.id);
      });
  }


}