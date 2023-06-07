// Import the necessary database functions from "@/components/lib/db".
import { deleteBlog, getOneBlog, updateBlog } from "@/components/lib/db";

// Import the types for Next.js API request and response.
import type { NextApiRequest, NextApiResponse } from "next";

// Define the handler for this API route.
export default async function handler(
	req: NextApiRequest, // The incoming request object
	res: NextApiResponse // The outgoing response object
) {
	// Get the ID from the request query parameters and convert it to a Number
	const id = Number(req.query.id);

	// Handle GET request
	if (req.method === "GET") {
		try {
			// Fetch a single blog post with the given ID
			const blogs = await getOneBlog(id);

			// Send a 200 status response with the fetched blog post
			res.status(200).json({ posts: blogs });
		} catch (error) {
			// Send a 500 status response with an error message if fetching fails
			res.status(500).json({ message: "Getting blog failed." });
		}
	}

	// Handle DELETE request
	if (req.method === "DELETE") {
		try {
			// Delete a blog post with the given ID
			const blogs = await deleteBlog(id);

			// Send a 200 status response with the remaining blog posts
			res.status(200).json({ posts: blogs });
		} catch (error) {
			// Send a 500 status response with an error message if deletion fails
			res.status(500).json({ message: "Deleting blogs failed." });
		}
	}

	// Handle PATCH request
	if (req.method === "PATCH") {
		try {
			// Update a blog post using the data from the request body
			const blogs = await updateBlog(req.body);

			// Send a 200 status response with the updated blog post
			res.status(200).json({ posts: blogs });
		} catch (error) {
			// Send a 500 status response with an error message if updating fails
			res.status(500).json({ message: "Updating blogs failed." });
		}
	}

}


// In this code, you're defining an API route handler in Next.js that responds to GET, DELETE,
//  and PATCH requests. Depending on the HTTP method, it fetches a single blog post, deletes a blog post, or updates a blog post.
//   Each operation targets a blog post identified by an id obtained from the request's query parameters.
//  If something goes wrong with any operation, it sends back an error message with status code 500.
