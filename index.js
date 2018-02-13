import App from "https://cdn.rawgit.com/tonis2/component-engine/4bafee6a/index.js";
import * as components from "./components/index.js";
import * as utils from "./utils/index.js";

App.register({ components, utils });

App.render("notifier-el");

App.router
  .on("/", params => {
    App.renderPage("home-el");
  })
  .on("/post/:id", params => {
    App.renderPage("post-el", { id: params.id });
  })
  .resolve();

App.router.notFound(() => {
  App.renderPage("home-el");
});
