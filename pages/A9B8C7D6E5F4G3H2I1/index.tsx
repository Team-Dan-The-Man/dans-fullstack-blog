// Import the Login component from "../../components/login/Login".
// This component likely contains the form or functionality for users to log in to your application.
import Login from "../../components/login/Login";

// Import the Fragment component from React.
// Fragment is a utility component that allows you to return multiple elements in a render method without creating an additional DOM element.
import { Fragment } from "react";

// Define the LoginPage component.
function LoginPage() {
  // Render the Login component inside a Fragment.
  // Using a Fragment prevents an extra node from being added to the DOM.
  return (
    <Fragment>
      <Login />
    </Fragment>
  );
}

// Export the LoginPage component as default.
// This makes importing it elsewhere more convenient.
export default LoginPage;



// This component is the Login page of your application. It uses the Login component to render its contents.
//  Wrapping it in a Fragment allows you to return the Login component without wrapping it in an unnecessary DOM element.