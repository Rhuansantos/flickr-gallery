export default class TemplateGallery {

  static home(_data){
    console.log('function loaded');
    const printContainer = document.querySelector('.gallery ul');
    // let template = `<img src="${}"/>`;
    
    console.log(_data);

    _data.map((pictures) => {
      console.log(pictures);
    });


    // printContainer.insertAdjacentHTML('beforeend', template);
  }
}