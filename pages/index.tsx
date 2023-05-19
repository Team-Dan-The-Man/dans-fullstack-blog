import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/header/Header";
import Topbar from "@/components/layout/Topbar";
import Login from "@/components/login/Login";
import About from "@/components/about/about";
import Footer from "@/components/layout/Footer";
import BookStore from "@/components/bookstore/Bookstore";
import { Fragment } from "react";


export default function Home() {
	return (
		<Fragment>
			<Header />
			<h1> Posts Will Be Here</h1>
		</Fragment>
		// <>

		// 	<section id="topbar">
		// 		<Topbar />
			
		// 		<div className="topbar">{/* <Posts /> */}</div>
		// 	</section>


		// 	<section id="homeSection">
		// 		<Header />
			
		// 		<div className="home">{/* <Posts /> */}</div>
		// 	</section>

		// 	<section id="login">
		// 		<About />
		// 		<div className="login">{/* <Posts /> */}</div>
		// 	</section>

		// 	<section id="about">
		// 		<Login />
		// 		<div className="about">{/* <Posts /> */}</div>
		// 	</section>
			
			


		// 	<section id="bookstore">
		// 		<BookStore />
		// 		<div className="bookstore">{/* <Posts /> */}</div>
		// 	</section>

		// 	<section id="footer">
		// 		<Footer />
		// 		<div className="footer">{/* <Posts /> */}</div>
		// 	</section>


		// </>
	);
}
