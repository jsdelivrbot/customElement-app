import html from "https://cdn.rawgit.com/tonis2/light-html/e1497d71/index.js";

class Notifier extends HTMLElement {
  notify(info) {
    let notification = html`<span>${info}</span>`;

    notification.render(this);

    setTimeout(() => {
      notification.remove();
    }, 2000);
  }
}

export default Notifier;
