// Import the Fragment component from 'react'.
// Fragment allows you to group together a list of children without adding extra nodes to the DOM.
import { Fragment } from "react";

// Import the Write component from the file located at "../components/write/Write".
import Write from "../components/write/Write";

// Create the WritePage functional component.
function WritePage() {
  return (
    // Use the Fragment component to wrap the Write component.
    // This allows for grouping of the Write component without adding an unnecessary div to the DOM.
    <Fragment>
      {/* // Render the Write component. 
      // This could contain the functionality for writing content, such as a form for creating a blog post. */}
      <Write />
    </Fragment>
  );
}

// Export the WritePage component as the default export.
// This means that when you import from this file, you'll get the WritePage component by default.
export default WritePage;

