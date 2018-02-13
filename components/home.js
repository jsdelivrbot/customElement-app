import html from "https://cdn.rawgit.com/tonis2/light-html/e1497d71/index.js";

class Home extends HTMLElement {
  constructor(container) {
    super();
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
    let postsElement = html `<section id="posts-container">
                               ${data.map(post => {
                                   let item = html`<div onclick="${this.openPost.bind(this, post)}" id="post">
                                                    <h3>${post.title}</h3>
                                                    <p>${post.body}</p>
                                                 </div>`
                                     return item.dom;
                                })}
                            </section>`;

    notifier.notify("Posts loaded");
    postsElement.render(this);
  }
}

export default Home;
