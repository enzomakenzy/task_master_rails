import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "scratchtask" ];

  scratch(event) {
      if (event.target.checked) {
        this.scratchtaskTarget.classList.add("cutLine");
      } else {
        this.scratchtaskTarget.classList.remove("cutLine");
      }
  }
}
