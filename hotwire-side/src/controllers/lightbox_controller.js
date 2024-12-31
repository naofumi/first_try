import {Controller} from "https://apache.castle104.com/assets/micro-frontend-demo/javascript/stimulus-3.2.1.js"

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
