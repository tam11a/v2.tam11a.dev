import AboutMe from "./components/about-me";
import Hero from "./components/hero";
import WhatIDo from "./components/what-i-do";

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutMe />
			<WhatIDo />
		</main>
	);
}
