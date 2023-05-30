import { searchBlogs } from "@/components/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		const { query } = req.query;
	
		let result;
	
		try {
		  result = await searchBlogs(query);
		  console.log("Blogs searched successfully:", result);
		  res.status(200).json({ message: "Blogs searched successfully" });
		} catch (error) {
		  console.error("Error inserting blog:", error);
		  res.status(500).json({ error: "Error searching blogs" });
		}
	  } else {
		res.status(405).json({ error: "Method not allowed" });
	  }
}