import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import Layout from "@/components/layout/layout";
import { SSRProvider } from "react-bootstrap";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<SSRProvider>
			
				<Layout>
					<Component {...pageProps} />
				</Layout>
			
		</SSRProvider>
	);
}
