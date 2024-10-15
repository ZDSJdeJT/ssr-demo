import type { Serve } from "bun";
import { renderToString } from "react-dom/server";

import { App } from "./App";

export default {
	fetch(req) {
		const url = new URL(req.url);
		switch (url.pathname) {
			case "/favicon.ico":
				return new Response(Bun.file("./public/favicon.ico"), {
					headers: {
						"Content-Type": "image/x-icon",
					},
				});
			case "/":
				return new Response(
					`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="/favicon.ico" type="image/x-icon" />
  <title>Document</title>
</head>
<body>
  <button type="button" onclick="this.innerText = this.innerText.repeat(2)">vanilla</button>
  <div id="react-app">${renderToString(<App />)}</div>
  <script type="module" src="/client.js"></script>
</body>
</html>`,
					{
						headers: {
							"Content-Type": "text/html",
						},
					},
				);
			case "/client.js":
				return new Response(Bun.file("./dist/client.js"), {
					headers: {
						"Content-Type": "text/javascript",
					},
				});
			default:
				return Response.redirect("/");
		}
	},
} satisfies Serve;
