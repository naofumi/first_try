import {Controller} from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['lightbox']
  connect() {
  }

  show(event) {
    const src = event.currentTarget.src
    const image = this.lightboxTarget.querySelector('img')
    image.src = src
    this.lightboxTarget.classList.add('show')
  }

  hide() {
    this.lightboxTarget.classList.remove('show')
  }

}
