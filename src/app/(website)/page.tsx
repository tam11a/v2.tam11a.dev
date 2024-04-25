"use client";
import AboutMe from "./components/about-me";
import Clients from "./components/clients";
import Experience from "./components/experience";
import Hero from "./components/hero";
import History from "./components/history";
import WhatIDo from "./components/what-i-do";

import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import LinesSVG from "./lines-svg";

export default function Home() {
	const lenisRef = useRef<Lenis | undefined>(undefined);
	const rafHandleRef = useRef<number | null>(null);

	useEffect(() => {
		// Initialize Lenis on the first render
		if (!lenisRef.current) {
			lenisRef.current = new Lenis();
			const raf = (time: number) => {
				lenisRef.current?.raf(time);
				rafHandleRef.current = requestAnimationFrame(raf);
			};
			rafHandleRef.current = requestAnimationFrame(raf);
		}

		// Clean up on component unmount
		return () => {
			if (lenisRef.current) {
				lenisRef.current.destroy();
				lenisRef.current = undefined;
			}
			if (rafHandleRef.current) {
				cancelAnimationFrame(rafHandleRef.current);
				rafHandleRef.current = null;
			}
		};
	}, []);

	return (
		<>
			<main className="z-10">
				<Hero />
				<AboutMe />
				<WhatIDo />
				<Experience />
				<History />
				<Clients />
			</main>
			<LinesSVG />
		</>
	);
}
