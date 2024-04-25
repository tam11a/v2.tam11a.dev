"use client";
import Image from "next/image";
import MagneticComponent from "../magnetic";

export default function Hero() {
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
			<h2 className="text-[5rem] lg:text-[6.5rem] leading-[80%] [&>span]:text-gradient transition-all duration-75 ease-out">
				Full-Stack <br />
				<span>Software</span> <br />
				<span>Engineer</span> <br />
				Since <br />
				<span>2021</span>
			</h2>
		</section>
	);
}
