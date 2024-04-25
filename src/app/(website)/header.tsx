"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
	const isTouchDevice = "ontouchstart" in window;
	const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
	useGSAP(() => {
		const { x, y } = cursorPosition;
		console.log(cursorPosition);
		if (x !== 0 && y !== 0) {
			gsap.set("#me-nu", {
				// x: x - 3,
				// y: y - 3,
				// x,
				// y,
				duration: 0.7,
				scale: 1.3,
				ease: "sine.inOut",
				transition: "all 0.3s ease-in-out",
			});
		} else {
			gsap.set("#me-nu", {
				x: 0,
				y: 0,
				duration: 0.7,
				scale: 1,
				ease: "sine.inOut",
				transition: "all 0.3s ease-in-out",
			});
		}
	}, [cursorPosition]);

	return (
		<header className="flex flex-row items-center justify-between max-w-7xl mx-auto px-10 py-9">
			<Link href="/">
				<Image
					src="/favicon.svg"
					alt="Ibrahim Sadik Tamim"
					width={50}
					height={50}
					className="h-12 opacity-0"
				/>
			</Link>
			<p
				id="me-nu"
				className="text-xl p-5"
				onMouseEnter={(e) => {
					setCursorPosition((ocp) => ({
						x: e.pageX - ocp.x,
						y: e.pageY - ocp.y,
					}));
				}}
				onMouseLeave={() => {
					setCursorPosition({ x: 0, y: 0 });
				}}
			>
				ME-NU
			</p>
		</header>
	);
}
