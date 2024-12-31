import {Application} from "https://apache.castle104.com/assets/micro-frontend-demo/javascript/stimulus-3.2.1.js"
import LightboxController from "./controllers/lightbox_controller.js"

window.Stimulus = Application.start()
Stimulus.register("lightbox", LightboxController)
