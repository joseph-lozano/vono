import { Server, html, redirect } from "../../src/runtime/server";
import { renderToString } from "react-dom/server.browser"
import { createElement } from "react";

const app = new Server();

app.get("/ping", c => ({ hello: "ponger" }));

app.get("/throw", () => {
  throw new Error("test");
})

app.get("/redir", () => {
  throw redirect("/ping");
})

app.get("/ssr", async () => {
  const App = await import("../src/index").then(m => m.default);
  return html(renderToString(createElement(App)));
})

export default app;
