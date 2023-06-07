// Import the global styles from the file located at "@/styles/globals.css".
import "@/styles/globals.css";

// Import the type definition for AppProps from "next/app". 
// AppProps type includes properties for the currently active page component and its props.
import type { AppProps } from "next/app";

// Import the minified CSS for Bootstrap from "bootstrap/dist/css/bootstrap.min.css".
// This will apply Bootstrap's styles globally across the entire application.
import "bootstrap/dist/css/bootstrap.min.css";

// Import the React Bootstrap library, which provides Bootstrap components as React components.
import "react-bootstrap";

// Import the Layout component from "@/components/layout/layout".
import Layout from "@/components/layout/layout";

// Import the SSRProvider from "react-bootstrap". 
// SSRProvider ensures correct IDs are generated for server-rendered React Bootstrap components.
import { SSRProvider } from "react-bootstrap";

// Define the main App component which is used by Next.js as the root component for all pages.
export default function App({ Component, pageProps }: AppProps) {
  return (
    // Wrap all child components within the SSRProvider component.
    // This ensures all React Bootstrap components have proper unique IDs for hydration after server-side rendering.
    <SSRProvider>
      {/* // Wrap the Component (current page) with the Layout component.
      // The Layout component can be used to keep consistent structure across different pages (like headers, footers). */}
      <Layout>
        {/* // Render the current page. 
        // This dynamically changes based on the route being accessed.
        // pageProps are any props the page component needs. */}
        <Component {...pageProps} />
      </Layout>
    </SSRProvider>
  );
}
