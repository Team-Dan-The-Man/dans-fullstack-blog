import React, { useState, useEffect, ReactElement } from "react";
import { Button } from "react-bootstrap";
import { deleteBlog, getAllBlogs } from "../lib/db";
import { useRouter } from "next/router";

interface Blog {
  id: number;
  title: string;
  description: string;
  updated_at: string;
}

export default function Post(): ReactElement {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      await getAllBlogs().then((response) => setBlogs(response as Blog[]));
      console.log(blogs);
    }
    fetchData();
  }, []);

  function handleDeletePost(id: number): void {
    deleteBlog(id);
    router.reload();
  }

  if (!blogs) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {blogs.map((b: Blog) => {
        const humanReadableDate = new Date(b.updated_at).toLocaleDateString(
          "en-US",
          {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          }
        );
        return (
          <div className="post" key={b.id}>
            <div className="postInfo">
              <a href={`/posts/${b.id}`} className="no-underline">
                <span className="postTitle">{b.title}</span>
              </a>
              <hr />
              <span className="postDate">{humanReadableDate}</span>
            </div>
            <p className="postDesc">{b.description}</p>
            <div className="postButtons">
              <a href={`/edit/${b.id}`}>
                <Button className="glow-on-hover">Edit</Button>
              </a>
              <Button
                className="glow-on-hover"
                variant="danger"
                onClick={() => handleDeletePost(b.id)}
              >
                Delete
              </Button>
            </div>
          </div>
        );
      })}
    </>
  );
}
