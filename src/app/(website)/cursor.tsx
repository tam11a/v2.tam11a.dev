"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Cursor() {
	useGSAP(() => {
		const isTouchDevice = "ontouchstart" in window;
		const createCursorFollower = () => {
			document.addEventListener("mousemove", (e) => {
				const {
					clientX: x,
					clientY: y,
					// target
				} = e;

				// Check if target is inside a link or button
				// const isTargetLinkOrBtn =
				// 	target?.closest("a") || target?.closest("button");

				gsap.set(".cursor", {
					x: x + 3,
					y: y + 3,
					height: 160,
					width: 160,
					duration: 0.7,
					opacity: 1,
					ease: "sine.inOut",
				});
			});
		};

		// Hidding the cursor element when the mouse cursor
		// is moved out of the page
		document.addEventListener("mouseleave", () => {
			gsap.set(".cursor", {
				duration: 0.7,
				height: 0,
				width: 0,
			});
		});

		// Only invoke the function if isn't a touch device
		if (!isTouchDevice) {
			createCursorFollower();
		}
	}, []);

	return (
		<div className="cursor fixed top-0 left-0 mix-blend-difference bg-slate-300 -translate-x-1/2 -translate-y-1/2 transform h-40 w-40 opacity-0 pointer-events-none select-none rounded-full z-[10000]" />
	);
}
