export default class TemplateGallery {

  static home(_data) {
    const printContainer = document.querySelector('.gallery ul');
    _data.map((_pictures) => {
      let template = `<img src="${_pictures}"/>`;
      printContainer.insertAdjacentHTML('beforeend', template);
    });

  }
}