import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Layout from "@/components/layout/layout";
import { SSRProvider } from "react-bootstrap";
import { PostProvider } from "@/context/PostProvider";
import Post from "@/components/post/Post";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SSRProvider>
			<PostProvider>
				<Layout>
					<Component {...pageProps} />;
				</Layout>
			</PostProvider>
		</SSRProvider>
	);
}
