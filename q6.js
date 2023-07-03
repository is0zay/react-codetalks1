import http from 'http';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';


// Create an HTTP server and set up a request listener
http
	.createServer((req,res) => {
		// This context object contains results of the render
		const context = {};

		//Render the component to html
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
		//otherwise render the html
		} else {
			res.write(html);
			res.end();
		}
	})
	.listen(3000);

	// Redirect  allows you to specify a target URL to which the user should be redirected when the <Redirect> component is rendered.