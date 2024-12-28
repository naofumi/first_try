import {Application} from "@hotwired/stimulus"
import GreetingsController from "./controllers/greetings_controller.js"

window.Stimulus = Application.start()
Stimulus.register("greetings", GreetingsController)
