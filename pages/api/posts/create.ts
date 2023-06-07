// Import the insertBlog function from "@/components/lib/db".
// This function is likely used to insert a new blog into your database.
import { insertBlog } from "@/components/lib/db";

// Import the types for Next.js API request and response.
import type { NextApiRequest, NextApiResponse } from "next";

// Define the handler for this API route.
export default async function handler(
	req: NextApiRequest, // The incoming request object
	res: NextApiResponse // The outgoing response object
) {
	// Check if the request method is POST
	if (req.method === "POST") {
		// Destructure the title and description from the request body
		const { title, description } = req.body;
		
		// Create a new blog object with the title and description
		const newBlog = { title, description };
	
		let result;
	
		try {
			// Use the insertBlog function to insert the new blog into the database
			result = await insertBlog(newBlog);

			// Log the successful insertion
			console.log("Blog inserted successfully:", result);

			// Send a 200 status response along with a success message
			res.status(200).json({ message: "Blog inserted successfully" });
		} catch (error) {
			// Log the error
			console.error("Error inserting blog:", error);

			// Send a 500 status response along with an error message
			res.status(500).json({ error: "Error inserting blog" });
		}
	} else {
		// If the request method is not POST, send a 405 status response with an error message
		res.status(405).json({ error: "Method not allowed" });
	}
}



// In this code, you're defining an API route handler in Next.js that responds to
//  POST requests by inserting a new blog post into your database.
//  If the request method is not POST, it returns an error with status code 405,
//   indicating that the method is not allowed.