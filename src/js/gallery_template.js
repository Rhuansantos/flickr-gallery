export default class TemplateGallery {
  static home(_data) {
    const printContainer = document.querySelector('.gallery ul');
    let template = `<img src="${_data}"/>`;
    printContainer.insertAdjacentHTML('beforeend', template);
  }
}