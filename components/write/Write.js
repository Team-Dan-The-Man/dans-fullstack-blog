import { useRef, useState } from "react";
import classes from "./write.module.css";
import WithAuth from "../withauth/WithAuth";
import { insertBlog } from "../lib/db";
import { useRouter } from "next/router";

function AddPost() {
  const [isInvalid, setIsInvalid] = useState(false);
 
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();
  const router = useRouter();

  function sendPostHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    if (
      !enteredTitle ||
      enteredTitle.trim() === "" ||
      !enteredDescription ||
      enteredDescription.trim() === ""
    ) {
      setIsInvalid(true);
      return;
    }

    insertBlog({
      title: enteredTitle,
      description: enteredDescription,
    });

    router.replace("/");
  }

  return (
    <div className={classes.form1} xs={12} md={6} lg={4}>
      <form className={classes.form} onSubmit={sendPostHandler}>
        <div className={classes.row}>
          <div className={classes.control}>
            <label htmlFor="title">Title of the blog</label>
            <input type="text" id="title" ref={titleInputRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Write Out Your Blog</label>
          <textarea
            id="description"
            rows="12"
            ref={descriptionInputRef}
          ></textarea>
        </div>
        {isInvalid && <p>Please enter a valid email address and comment!</p>}
        <button className={classes.writeFormButton}>Submit</button>
      </form>
    </div>
  );
}

export default WithAuth(AddPost);
