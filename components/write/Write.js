import { useRef, useState } from "react";
import { Form, Button, Col, InputGroup, Row } from "react-bootstrap";
import classes from "./write.module.css";

function AddPost(props) {
  const [isInvalid, setIsInvalid] = useState(false);
  //   const [post, setPost] = useState({
  //     title: "",
  //     description: "",
  //   })

  //   let { title, description } = post
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

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

    props.onAddComment({
      title: enteredTitle,
      description: enteredDescription,
    });
  }

  //   function handleSubmit(event) {
  //     event.preventDefault();
  //     createPost(title, description)
  //   }

  return (
    <div className={classes.form1}  xs={12} md={6} lg={4}>

<form className={classes.form} onSubmit={sendPostHandler}>
      <div className={classes.row}>
        <div className={classes.control}>
          <label htmlFor='title'>Title of the blog</label>
          <input type='text' id='title' ref={titleInputRef} />
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor='description'>Write Out Your Blog</label>
        <textarea id='description' rows='5' ref={descriptionInputRef}></textarea>
      </div>
      {isInvalid && <p>Please enter a valid email address and comment!</p>}
      <button className={classes.writeFormButton}>Submit</button>
    </form>
      {/* <Form onSubmit={handleSubmit}>
        <Row className=" justify-content-center" id="write-card">
          <br />
          <h1>ADD A POST</h1>
          <InputGroup as={Col} id="formLabels">
            <InputGroup.Text>Title</InputGroup.Text>
            <Form.Control
              type="text"
              name="title"
              value={title}
              onChange={handleChange}
            />
          </InputGroup>
          <br />
        </Row>
        <Row className=" justify-content-center" id="write-card">
          <InputGroup>
            <Row className=" justify-content-center" id="write-card-title">
              <InputGroup.Text>Whats On Your Mind?</InputGroup.Text>
            </Row>
            <Form.Control
              as="textarea"
              aria-label="With textarea"
              rows="10"
              name="description"
              value={description}
              onChange={handleChange}
            />
          </InputGroup>
          <br />
        </Row>
        <Row className=" justify-content-center" id="write-card">
          <Button id="writeFormButton" type="submit" className="mt-4 mb-4 ly-0">
            POST
          </Button>
        </Row>
      </Form>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </div>
  );
}

export default AddPost;
