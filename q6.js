import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';

http
	.createServer((req,res) => {
		// This context object contains results of the render
		const context = {};

		const html = ReactDOMServer.renderToString(
			<StaticRouter location={req.url} context={context}>
				<App />
			</StaticRouter>
		);

		// context.url will contain the URL to redirect if a <Redirect> was used
		if(context.url) {
			res.writeHead(302, {
				Location: context.url
			});
			res.end();
		} else {
			res.write(html);
			res.end();
		}
	})
	.listen(3000);