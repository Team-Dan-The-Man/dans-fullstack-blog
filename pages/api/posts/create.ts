// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { insertBlog } from "@/components/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "POST") {
		const { title, description } = req.body;
		const newBlog = { title, description };
	
		let result;
	
		try {
		  result = await insertBlog(newBlog);
		  console.log("Blog inserted successfully:", result);
		  res.status(200).json({ message: "Blog inserted successfully" });
		} catch (error) {
		  console.error("Error inserting blog:", error);
		  res.status(500).json({ error: "Error inserting blog" });
		}
	  } else {
		res.status(405).json({ error: "Method not allowed" });
	  }
}
