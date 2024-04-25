import { cn } from "@/lib/utils";
import StringLine from "./string-line";

export default function WhatIDo() {
	const whatIDo = ["Front-end", "BACK-END", "User Interface", "Mobile App"];
	return (
		<section
			id="what-i-do"
			className="flex flex-col justify-center min-h-svh"
		>
			<h3 className="w-full text-2xl tracking-[0.6rem] max-w-4xl px-10 mx-auto mb-7">
				What I Do
			</h3>
			<StringLine />
			{whatIDo.map((skill, index) => (
				<div
					key={index}
					className="pt-5"
				>
					<p className="text-6xl leading-[80%] w-full max-w-4xl px-10 mb-7 mx-auto">
						{skill}
					</p>
					<StringLine />
				</div>
			))}
		</section>
	);
}
