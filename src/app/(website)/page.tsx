import AboutMe from "./components/about-me";
import Clients from "./components/clients";
import Experience from "./components/experience";
import Hero from "./components/hero";
import History from "./components/history";
import WhatIDo from "./components/what-i-do";

export default function Home() {
	return (
		<main>
			<Hero />
			<AboutMe />
			<WhatIDo />
			<Experience />
			<History />
			<Clients />
		</main>
	);
}
