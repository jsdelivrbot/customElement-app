import {HTML} from "https://cdn.jsdelivr.net/gh/tonis2/light-html@09048995/build/bundle.js";


class Home extends HTMLElement {
  constructor(container) {
    super();

    // These are injected into Element via App-engine.
    this.api = container.get("api");
    this.router = container.get("router");
  }

  connectedCallback() {
    this.render();
  }

  openPost(post) {
    this.router.navigate(`/post/${post.id}`);
  }

  async render() {
    let notifier = document.querySelector("notifier-el");
    notifier.notify("Posts loading");

    let data = await this.api.get("https://jsonplaceholder.typicode.com/posts");
    let postsElement = HTML `<section id="posts-container">
                               ${data.map(post =>  HTML`<div onclick="${this.openPost.bind(this, post)}" id="post">
                                                          <h3>${post.title}</h3>
                                                          <p>${post.body}</p>
                                                       </div>`
                                )}
                            </section>`;

    notifier.notify("Posts loaded");
    postsElement.render(this);
  }
}

export default Home;
