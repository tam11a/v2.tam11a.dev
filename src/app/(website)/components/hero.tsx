"use client";
import Image from "next/image";
import MagneticComponent from "../magnetic";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";
import gsap from "gsap";

export default function Hero() {
	useGSAP(() => {
		const myText = new SplitType("#hero-description", {
			split: "words",
		});

		gsap.fromTo(
			myText.words,
			{
				y: 110,
				opacity: 0,
			},
			{
				y: 0,
				opacity: 1,
				stagger: 0.05,
				duration: 0.7,
				delay: 0.2,
				ease: "back.out(1.7)",
			}
		);
	});

	return (
		<section
			id="hero"
			className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center space-y-4"
		>
			<MagneticComponent>
				<Image
					src="/favicon.svg"
					alt="Ibrahim Sadik Tamim"
					width={50}
					height={50}
					className="h-16"
				/>
			</MagneticComponent>
			<div className="h-12" />
			<h1 className="text-2xl font-cover-by-your-grace">Ibrahim Sadik Tamim</h1>
			<h2
				className="text-[5rem] lg:text-[6.5rem] leading-[80%] child-gradient [&>span>div]:text-gradient transition-all duration-75 ease-out [&>div>div]:clip-title [&>*]:clip-title [&>div>span>div>div]:opacity-0"
				id="hero-description"
			>
				Full-Stack <br />
				<span>Software</span> <br />
				<span>Engineer</span> <br />
				Since <br />
				<span>2021</span>
			</h2>
		</section>
	);
}
