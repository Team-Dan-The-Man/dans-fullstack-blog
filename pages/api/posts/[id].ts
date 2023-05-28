// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { deleteBlog, getOneBlog, updateBlog } from "@/components/lib/db";
import type { NextApiRequest, NextApiResponse } from "next";



export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const id = Number(req.query.id);

	if (req.method === "GET") {
		try {
		  const blogs = await getOneBlog(id);
		  res.status(200).json({ posts: blogs });
		} catch (error) {
		  res.status(500).json({ message: "Getting blog failed." });
		}
	  }

	  if (req.method === "DELETE") {
		try {
		  const blogs = await deleteBlog(id);
		  res.status(200).json({ posts: blogs });
		} catch (error) {
		  res.status(500).json({ message: "deleting blogs failed." });
		}
	  }

	  if (req.method === "PATCH") {
		try {
		  const blogs = await updateBlog(req.body);
		  res.status(200).json({ posts: blogs });
		} catch (error) {
		  res.status(500).json({ message: "updating blogs failed." });
		}
	  }
}


