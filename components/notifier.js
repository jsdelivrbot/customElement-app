import {HTML} from "https://cdn.jsdelivr.net/gh/tonis2/light-html@09048995/build/bundle.js";


class Notifier extends HTMLElement {
  notify(info) {
    let notification = HTML`<span>${info}</span>`;

    notification.render(this);

    setTimeout(() => {
      notification.remove();
    }, 2000);
  }
}

export default Notifier;
