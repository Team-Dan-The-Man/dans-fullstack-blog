// Import the About component from "@/components/about/about".
// This component likely contains content or functionality related to the "About" page of your website.
import About from "@/components/about/about";

// Import the Fragment component from React.
// This is a utility component that allows you to return multiple elements in a render method without creating an additional DOM element.
import { Fragment } from "react";

// Define the AboutPage component.
function AboutPage() {
  // Render the About component inside a Fragment.
  // Using Fragment prevents an extra node from being added to the DOM.
  return (
    <Fragment>
      <About />
    </Fragment>
  );
}

// Export the AboutPage component as default.
// This makes importing it elsewhere more convenient.
export default AboutPage;



// This component is the About page of your application, and it uses the About component to render its contents.
//  Wrapping it in a Fragment allows you to return the About component without wrapping it in an unnecessary DOM element.