// Import the required components from 'next/document'.
import { Html, Head, Main, NextScript } from 'next/document'

// Create a custom Document. This is primarily used for augmenting your application's <html> and <body> tags.
export default function Document() {
  return (
    // The Html component is a replacement for the <html> tag and it's used to wrap your page content.
    // Here we set the language of our page to English with the 'lang' attribute.
    <Html lang="en">
      {/* // The Head component is a replacement for the <head> tag.
      // It's used in your custom '_document.js' file to include elements like <title>, <meta>, etc.*/}
      <Head /> 
      <body>
        {/* // The Main component is a replacement for the <body> tag.
        // It's used to specify where Next.js will inject the application's content. */}
        <Main />
{/* 
        // The NextScript component is used by Next.js to add various scripts to your application.
        // These scripts are necessary for your Next.js application to function correctly. */}
        <NextScript />
      </body>
    </Html>
  )
}
