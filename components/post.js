import {HTML} from "https://cdn.rawgit.com/tonis2/light-html/09048995/build/bundle.js";

class Post extends HTMLElement {
  constructor(container, data) {
    super();
    this.api = container.get("api");
    this.data = data;
  }

  connectedCallback() {
    this.render();
  }

  async render() {
    let notifier = document.querySelector("notifier-el");
    notifier.notify("Post loading");

    let data = await this.api.get(`https://jsonplaceholder.typicode.com/posts/${this.data.id}`);
    let post = HTML`<section id="single-post">
                        <h2>${data.title}</h2>
                        <p>${data.body}</p>
                    </section>`;

    notifier.notify("Post loaded");
    post.render(this);
  }
}

export default Post;
