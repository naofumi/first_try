import {Controller} from "https://apache.castle104.com/assets/micro-frontend-demo/javascript/stimulus-3.2.1.js"

export default class extends Controller {
  static targets = ['output']
  connect() {
  }

  greet() {
    this.outputTarget.innerHTML = '<div style="color: red">Hello, World! from Stimulus<div>'
  }
}
