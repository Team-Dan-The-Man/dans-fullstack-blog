import Header from "@/components/header/Header";
import { Fragment } from "react";
import Posts from "@/pages/posts";

export default function Home() {
	return (
		<Fragment>
			<Header />
			<h1> Posts Will Be Here</h1>

			<Posts />
		</Fragment>
	);
}
