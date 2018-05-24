import App from "https://cdn.rawgit.com/tonis2/component-engine/58660d22/build/bundle.js";
import * as components from "./components/index.js";
import * as utils from "./utils/index.js";

App.register({ components, utils });

// notifier contains the notifier component and its functions.
const notifier = App.render("notifier-el");

// Get the api module from UTILS
const api = App.container.get("api");


/// Create a router for the application, when route is landed fire the function,
//  which tells our APP engine, to remove old rendered component and then render a new one.

App.router
  .on("/", params => {
    App.renderPage("home-el");
  })
  .on("/post/:id", async params => {

    //Notify that post loading starts
    notifier.notify("Post loading");

    /// Use the API to pull the data and the inject it into posts component, thats then rendered after data is ready.
    const data = await api.get(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    App.renderPage("post-el", data);
  })
  .resolve();

App.router.notFound(() => {
  App.renderPage("home-el");
});
