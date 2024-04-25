import Image from "next/image";

export default function Hero() {
	return (
		<section
			id="hero"
			className="flex flex-col items-center justify-center min-h-[calc(100vh-20rem)] text-center space-y-4"
		>
			<Image
				src="/favicon.svg"
				alt="Ibrahim Sadik Tamim"
				width={50}
				height={50}
				className="h-16"
			/>
			<div className="h-12" />
			<h1 className="text-2xl font-cover-by-your-grace">Ibrahim Sadik Tamim</h1>
			<p className="text-[6.5rem] leading-[80%] [&>span]:text-gradient">
				Full-Stack <br />
				<span>Software</span> <br />
				<span>Engineer</span> <br />
				Since <br />
				<span>2021</span>
			</p>
		</section>
	);
}
