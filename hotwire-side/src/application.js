import {Application} from "@hotwired/stimulus"
import GreetingsController from "./controllers/greetings_controller.js"
import LightboxController from "./controllers/lightbox_controller.js"

window.Stimulus = Application.start()
Stimulus.register("greetings", GreetingsController)
Stimulus.register("lightbox", LightboxController)
