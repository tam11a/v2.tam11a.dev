"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import SplitType from "split-type";

export default function AboutMe() {
	const main = useRef<any>();

	const titleRef = useRef<any>(null);
	const paragraphRef = useRef<any>(null);

	useGSAP(() => {
		const splitText1 = new SplitType(titleRef.current, { types: "chars" });
		const splitText2 = new SplitType(paragraphRef.current, { types: "chars" });

		const chars1 = splitText1.chars;
		const chars2 = splitText2.chars;

		gsap.set([...(chars1 ? chars1 : []), ...(chars2 ? chars2 : [])], {
			opacity: 0.5,
		});

		const tl = gsap.timeline({ paused: true });

		tl.fromTo(
			chars1,
			{ opacity: 0, stagger: 0.1 },
			{
				opacity: 1,
				stagger: 0.1,
			}
		);
		tl.fromTo(
			chars2,
			{ opacity: 0, stagger: 0.1 },
			{
				opacity: 1,
				stagger: 0.1,
			},
			"-=0.5"
		);

		const handleScroll = () => {
			const scrollTop = window.scrollY;
			const windowHeight = window.innerHeight;
			const triggerOffset = windowHeight / 2;

			if (
				paragraphRef.current.offsetTop - triggerOffset <
					scrollTop + windowHeight &&
				!tl.isActive()
			) {
				tl.play();
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section
			id="about-me"
			ref={main}
			className="flex flex-col justify-center min-h-svh space-y-4 max-w-4xl px-10 mx-auto"
		>
			<h3
				className="text-2xl tracking-[0.6rem] box"
				id="st-01"
				ref={titleRef}
			>
				About Me
			</h3>
			<p
				className="text-6xl child-gradient box"
				id="st-02"
				ref={paragraphRef}
			>
				I&apos;m a software engineer with strong focus on{" "}
				<span>software interface</span> & <span>digital experience</span>.
			</p>
		</section>
	);
}
