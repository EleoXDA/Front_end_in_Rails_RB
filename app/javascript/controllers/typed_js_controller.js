import { Controller } from "@hotwired/stimulus"
import Typed from "typed.js"

// Connects to data-controller="typed-js"
export default class extends Controller {
  connect() {
    new Typed(this.element, {
      strings: ["Change your life", "Learn to code"],
      typeSpeed: 50,
      loop: true
    })
  }
}
