import React, { useRef, useState, useEffect } from "react";
import classes from "./edit.module.css";
import WithAuth from "../withauth/WithAuth";
import { getOneBlog, insertBlog, updateBlog } from "../lib/db";
import { useRouter } from "next/router";

interface Post {
  title: string;
  description: string;
}

interface Blog {
    title: string;
    id?: number;
    description?: string;
  }



function EditPost() {
  const [isInvalid, setIsInvalid] = useState(false);
  const titleInputRef = useRef<HTMLInputElement>(null);
  const descriptionInputRef = useRef<HTMLTextAreaElement>(null);
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

    async function sendPostHandler(event: React.FormEvent) {
        event.preventDefault();
      
        const enteredTitle = titleInputRef.current?.value;
        const enteredDescription = descriptionInputRef.current?.value;
      
        if (
          !enteredTitle ||
          enteredTitle.trim() === "" ||
          !enteredDescription ||
          enteredDescription.trim() === ""
        ) {
          setIsInvalid(true);
          return;
        }
      
        await updateBlog({
          id: blog?.id,
          title: enteredTitle,
          description: enteredDescription,
        });
      
        router.replace("/");
      }

      function handleTitleChange(event: React.ChangeEvent<HTMLInputElement>) {
        setBlog((prevBlog) => ({
          id: prevBlog?.id ?? 0, // use 0 as a default id
          title: event.target.value,
          description: prevBlog?.description ?? "", // use an empty string as a default description
        }));
      }
      
      function handleDescriptionChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setBlog((prevBlog) => ({
          id: prevBlog?.id ?? 0,
          title: prevBlog?.title ?? "",
          description: event.target.value,
        }));
      }

  return (
    <div className={classes.form1} >
      <form className={classes.form} onSubmit={sendPostHandler}>
        <div className={classes.row}>
          <div className={classes.control}>
            <label htmlFor="title">Title of the blog</label>
            {blog && blog.title &&<input type="text" id="title" ref={titleInputRef} value={blog.title} onChange={handleTitleChange}/>}
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Write Out Your Blog</label>
          {blog && blog.description && <textarea
            id="description"
            rows={5}
            ref={descriptionInputRef}
            value={blog.description}
            onChange={handleDescriptionChange}
          ></textarea>}
        </div>
        {isInvalid && <p>Please enter a valid email address and comment!</p>}
        <button className={classes.writeFormButton}>Submit</button>
      </form>
    </div>
  );
}

export default WithAuth(EditPost);
