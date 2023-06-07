// Import the Fragment component from 'react'.
// Fragment is used to group multiple elements without adding an extra node to the DOM.
import { Fragment } from "react";

// Import the SinglePost component from "@/components/singlePost/SinglePost".
import SinglePost from "@/components/singlePost/SinglePost";

// Define the SinglePostPage functional component.
function SinglePostPage() {
  return (
    // Use the Fragment component to wrap the SinglePost component.
    // In this case, it might not be strictly necessary since there's only one component,
    // but it could be useful if more components or elements were to be added in the future.
    <Fragment>
      {/* // Render the SinglePost component.
      // This component is likely to display a single blog post or article. */}
      <SinglePost  />
    </Fragment>
  )
}

// Export SinglePostPage as the default export.
// This means that when you import from this file, you'll get the SinglePostPage component by default.
export default SinglePostPage;
