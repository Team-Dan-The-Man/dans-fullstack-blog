// Import the Header component from the file located at "@/components/header/Header".
import Header from "@/components/header/Header";

// Import the Fragment component from 'react'.
// Fragments let you group a list of children without adding extra nodes to the DOM.
import { Fragment } from "react";

// Import the Posts component from the file located at "@/pages/posts".
import Posts from "@/pages/posts";

// Export the default function component Home. 
// This will be the main component rendered when the "/" route is accessed.
export default function Home() {
	return (
		// Use the Fragment component to wrap the Header and Posts components.
		// This allows us to group these components without adding an extra div to the DOM.
		<Fragment>
			{/* // Render the Header component. This could include elements like a site title, navigation links, etc. */}
			<Header />

			{/* // Render the Posts component. This could include a list or grid of blog posts, images, etc. */}
			<Posts />
		</Fragment>
	);
}
