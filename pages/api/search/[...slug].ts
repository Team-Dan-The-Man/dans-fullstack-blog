// Import the searchBlogs function from "@/components/lib/db".
// This function is likely used to search blogs in your database.
import { searchBlogs } from "@/components/lib/db";

// Import the types for Next.js API request and response.
import type { NextApiRequest, NextApiResponse } from "next";

// Define the handler for this API route.
export default async function handler(
	req: NextApiRequest, // The incoming request object
	res: NextApiResponse // The outgoing response object
) {
	// Check if the request method is GET
	if (req.method === "GET") {
		// Destructure the query from the request's query parameters
		const { query } = req.query;
	
		let result;
	
		try {
		  // Use the searchBlogs function to search blogs with the provided query
		  result = await searchBlogs(query);

		  // Log the successful search
		  console.log("Blogs searched successfully:", result);

		  // Send a 200 status response along with a success message
		  res.status(200).json({ message: "Blogs searched successfully" });
		} catch (error) {
		  // Log the error
		  console.error("Error inserting blog:", error);

		  // Send a 500 status response along with an error message
		  res.status(500).json({ error: "Error searching blogs" });
		}
	  } else {
		// If the request method is not GET, send a 405 status response with an error message
		res.status(405).json({ error: "Method not allowed" });
	  }
}
