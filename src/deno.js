import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handleRequest(request) {
	const { pathname } = new URL(request.url);
	// This is how the server works:
	// 1. A request comes in for a specific asset.
	// 2. We read the asset from the file system.
	// 3. We send the asset back to the client.

	// Check if the request is for html.
	if (request.url.match(/.html$/)) {
		// Read the html file from the file system.
		const file = await Deno.readFile(pathname);
		// Respond to the request with the html file.
		return new Response(file, {
			headers: {
				"content-type": "text/html",
			},
		});
	}

	if (request.url.match(/.css$/)) {
		const file = await Deno.readFile(`.${pathname}`);
		return new Response(file, {
			headers: {
				"content-type": "text/css",
			},
		});
	}

	if (request.url.match(/.ico$/)) {
		const file = await Deno.readFile(`.${pathname}`);
		return new Response(file, {
			headers: {
				"content-type": "image/x-icon",
			},
		});
	}

	if (request.url.match(/.js$/)) {
		const file = await Deno.readFile(`.${pathname}`);
		return new Response(file, {
			headers: {
				"content-type": "text/javascript; charset=utf-8",
			},
		});
	}

	const file = await Deno.readFile("./index.html");
	return new Response(file, {
		headers: {
			"content-type": "text/html; charset=utf-8",
		},
	});
}

serve(handleRequest);
