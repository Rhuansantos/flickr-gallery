export default class Gallery {
  // singleton
  static getInstance(){
    if(!Gallery._instance){
      Gallery._instance = new Gallery();
      return Gallery._instance;
    }
    else{
        throw 'the class Gallery was already created';
    }
  }

  constructor() {
    this.request().then((data) => { 
      return data
    });
  }

  async request(){
    try {
      const flickrApi = await fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=12c6658dd3fc36b164fee653181086e4&text=garden&per_page=25&page=&format=json&nojsoncallback=1&auth_token=72157662469806357-7999e1dbe0d1fb6c&api_sig=6191a1acee2b8e4374ec6afd94a7ce60');
      const data = await flickrApi.json();
      return data;
    } catch (e) {
        return e;
    }
  }




}