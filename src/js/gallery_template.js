export default class TemplateGallery {
  static home(_link, _size) {
    const printContainer = document.querySelector('.gallery ul');
    let template = `
    <li style="max-width:${_size}px">
      <div class="bg-photos" style="background-image: url(${_link})"></div>
    </li>`
    ;
    printContainer.insertAdjacentHTML('beforeend', template);
  }
  static cleanContent() {
    const printContainer = document.querySelector('.gallery ul');
    printContainer.innerHTML = null;
  }
  static error(_message) {
    const printContainer = document.querySelector('.gallery ul');
    let template = `<h1 class="alert-no-results">${_message}</h1>`
    printContainer.insertAdjacentHTML('beforeend', template);
  }
}