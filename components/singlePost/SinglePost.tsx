import { useState, useEffect } from "react";
import { getOneBlog } from "../lib/db";
import { useRouter } from "next/router";

type Blog = {
  id: number;
  title: string;
  description: string;
  updated_at: string;
};

interface Props {
  id: number;
}

function SinglePost() {
  const router = useRouter();
  const id = Number(router.query.id);
  const [blog, setBlog] = useState<Blog | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const id = Number(router.query.id);
        if (!isNaN(id)) {
          const response = await getOneBlog(id);
          setBlog(response as Blog);
          console.log(response);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [router.query.id]);

  if (blog === null) return <div> Loading...</div>;

  const humanReadableDate =
    blog && blog.updated_at
      ? new Date(blog.updated_at).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "numeric",
          minute: "numeric",
        })
      : "";

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singleBgPostImage" style={{ minHeight: "430px" }}>
          {blog && blog.title && <h1>{blog.title}</h1>}

          <div className="singlePostInfo">
            <p>Author: Dan Lemaire</p>
            {blog && blog.updated_at && (
              <p className="singlePostdate">{humanReadableDate}</p>
            )}
            <hr />
          </div>

        
        </div>

        {blog && blog.description && (
          <p className="singlePostDesc">{blog.description}</p>
        )}
      </div>
    </div>
  );
}

export default SinglePost;
