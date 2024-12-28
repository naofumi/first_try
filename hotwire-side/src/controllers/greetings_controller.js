import {Controller} from '@hotwired/stimulus'

export default class extends Controller {
  static targets = ['output']
  connect() {
  }

  greet() {
    this.outputTarget.innerHTML = '<div style="color: red">Hello, World! from Stimulus<div>'
  }
}
