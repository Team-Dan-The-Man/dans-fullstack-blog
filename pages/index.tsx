import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import Posts from "@/components/posts/Posts";
import Topbar from "@/components/posts/Posts";
import Login from "@/components/login/login/Login";
import About from "@/components/about/about";
import Footer from "@/components/footer/Footer";

export default function Home() {
	return (
		<>
			<section id="homeSection">
				<Header />
			
				<div className="home">{/* <Posts /> */}</div>
			</section>

			<section id="login">
				<About />
				<div className="login">{/* <Posts /> */}</div>
			</section>

			<section id="about">
				<Login />
				<div className="about">{/* <Posts /> */}</div>
			</section>
			
			<section id="footer">
				<Footer />
				<div className="footer">{/* <Posts /> */}</div>
			</section>

		</>
	);
}
