// Import the BookStore component from "@/components/bookstore/Bookstore".
// This component is likely used to display a list of books or book-related content.
import BookStore from "@/components/bookstore/Bookstore";

// Import the Fragment component from 'react'.
// Fragment allows you to group together a list of children without adding extra nodes to the DOM.
import { Fragment } from "react";

// Create the BookstorePage functional component.
function BookstorePage() {
  return (
    // Use the Fragment component to wrap the BookStore component.
    // This allows for grouping of the BookStore component without adding an unnecessary div to the DOM.
    <Fragment>
      {/* // Render the BookStore component.
      // This component likely displays a list of books or book-related content. */}
      <BookStore />
    </Fragment>
  );
}

// Export the BookstorePage component as the default export.
// This means that when you import from this file, you'll get the BookstorePage component by default.
export default BookstorePage;
