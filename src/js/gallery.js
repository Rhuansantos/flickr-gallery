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
    
  }




}