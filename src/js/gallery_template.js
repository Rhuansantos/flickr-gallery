export default class TemplateGallery {

  static home(_data){
    console.log('function loaded');
    const printContainer = document.querySelector('.gallery ul');
    // let template = `<h1>Hello</h1>`;

    // const template = data.map(x => console.log(data));
    
    console.log(_data);

    // printContainer.insertAdjacentHTML('beforeend', template.id)
    // photos.forEach(element => {
    //   console.log(element);
    // });
    // console.log(data);

    // printContainer.insertAdjacentHTML('beforeend', template);
  }
}