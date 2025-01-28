import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "word" ];

  connect() {
    this.element.addEventListener("turbo:submit-end", this.clearFieldAndFocus);
  }

  disconnect() {
    this.element.removeEventListener("turbo:submit-end", this.clearFieldAndFocus);
  }

  clearFieldAndFocus = () => {
    this.wordTarget.value = "";
    this.wordTarget.focus();
  }
}
