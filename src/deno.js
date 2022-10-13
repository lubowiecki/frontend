import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

async function handleRequest(request) {
	const { pathname } = new URL(request.url);

	// This is how the server works:
	// 1. A request comes in for a specific asset.
	// 2. We read the asset from the file system.
	// 3. We send the asset back to the client.

	// Check if the request is for index.html.
	if (pathname.startsWith("/index.html")) {
		// Read the index.html file from the file system.
		const file = await Deno.readFile("./index.html");
		// Respond to the request with the index.html file.
		return new Response(file, {
			headers: {
				"content-type": "text/html",
			},
		});
	}
}

serve(handleRequest);
