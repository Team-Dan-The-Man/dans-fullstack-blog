// Import the getAllBlogs function from "@/components/lib/db".
// This function likely retrieves all blog posts from your database.
import { getAllBlogs } from "@/components/lib/db";

// Import the types for Next.js API request and response.
import type { NextApiRequest, NextApiResponse } from "next";

// Define the handler for this API route.
export default async function handler(
	req: NextApiRequest, // The incoming request object
	res: NextApiResponse // The outgoing response object
) {
	// Check if the request method is GET
	if (req.method === "GET") {
		try {
			// Use the getAllBlogs function to get all blogs from your database
			const blogs = await getAllBlogs();

			// If successful, send a 200 status response with the blogs data
			res.status(200).json({ posts: blogs });
		} catch (error) {
			// If something goes wrong, send a 500 status response with an error message
			res.status(500).json({ message: "Getting blogs failed." });
		}
	} 
}



// In this code, you're defining an API route handler in Next.js that responds to GET
//  requests by fetching all blog posts from your database. If the fetch operation is successful, 
//  it sends back the blogs data;
//   if something goes wrong,
//  it sends back an error message with status code 500. It doesn't specify any behaviour for methods other than GET.