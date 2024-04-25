import { cn } from "@/lib/utils";

export default function WhatIDo() {
	const whatIDo = ["Front-end", "BACK-END", "User Interface", "Mobile App"];
	return (
		<section
			id="what-i-do"
			className="flex flex-col justify-center min-h-svh"
		>
			<h3 className="w-full text-2xl tracking-[0.6rem] max-w-4xl px-10 mx-auto mb-4">
				What I Do
			</h3>
			<hr className="border-slate-700" />
			{whatIDo.map((skill, index) => (
				<div
					key={index}
					className={cn("hover:bg-gradient-logo hover:text-background pt-4")}
				>
					<p className="text-6xl leading-[80%] w-full max-w-4xl px-10 mb-2 mx-auto">
						{skill}
					</p>
					<hr className="border-slate-700" />
				</div>
			))}
		</section>
	);
}
