// Import the Post component from your components directory.
import Post from "../../components/post/Post";

// Define the Posts function component.
function Posts() {
  return (
    // Use shorthand syntax for React Fragment. This lets you group multiple elements without adding an extra node to the DOM.
    <>
      {/* // Create a div with class "posts" to wrap the Post component. This could be used for applying specific styles to the Post component. */}
      <div className="posts">
        {/* // Include the Post component, which likely displays individual post content. */}
        <Post />
      </div>
    </>
  );
}

// Export Posts as the default export. This allows the component to be imported using the filename, without destructuring.
export default Posts;



// // In this code, you're creating a Posts component that includes a Post component. The Post component
//  is likely responsible for displaying the content of an individual post. You're
//  using a shorthand syntax for Fragment (i.e., <>...</>) to group your components without adding extra nodes to the DOM.