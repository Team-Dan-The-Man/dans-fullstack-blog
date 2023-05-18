import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import Posts from "@/components/posts/Posts";

export default function Home() {
	return (
		<>
			<section id="homeSection">
				<Header />
				<div className="home">{/* <Posts /> */}</div>
			</section>
		</>
	);
}
