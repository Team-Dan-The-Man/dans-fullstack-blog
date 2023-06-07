// Import the Fragment component from React.
// Fragment is used to return multiple elements from a component without the need to wrap them in a parent DOM element, like div.
import { Fragment } from "react";

// Import the SearchBlogs component from your components directory.
import SearchBlogs from '../../components/search/Search'

// Define the SearchPostPage function component.
function SearchPostPage() {
  return (
    // Use Fragment to wrap multiple elements.
    <Fragment>
      {/* // Create a div with the class 'searchBlogsContainer'.
      // You would usually include some style rules for this class in your CSS file. */}
      <div className="searchBlogsContainer"></div>
      
      {/* // Include the SearchBlogs component.
      // This component will likely contain a search form or similar functionality. */}
      <SearchBlogs />
    </Fragment>
  );
}

// Export the SearchPostPage as the default export.
// This allows the component to be imported using the filename, without destructuring.
export default SearchPostPage;
