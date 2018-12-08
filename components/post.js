import {HTML} from "https://cdn.jsdelivr.net/gh/tonis2/light-html@09048995/build/bundle.js";

class Post extends HTMLElement {
  constructor(container, data) {
    super();
    this.api = container.get("api");

    // Get data injeted from router
    this.data = data;
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    let notifier = document.querySelector("notifier-el");
    let post = HTML`<section id="single-post">
                        <h2>${this.data.title}</h2>
                        <p>${this.data.body}</p>
                    </section>`;

    notifier.notify("Post loaded");
    post.render(this);
  }
}

export default Post;
