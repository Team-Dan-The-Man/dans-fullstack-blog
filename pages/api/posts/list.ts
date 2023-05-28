import { getAllBlogs } from "@/components/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method === "GET") {
		try {
		  const blogs = await getAllBlogs();
		  res.status(200).json({ posts: blogs });
		} catch (error) {
		  res.status(500).json({ message: "Getting blogs failed." });
		}
	  }
}