import { useScroll } from "framer-motion";
import React, { useRef } from "react";

export default function FadeOnScroll({
	children,
}: {
	children: React.ReactElement;
}) {
	const element = useRef<any>(null);

	const { scrollYProgress } = useScroll({
		target: element,
		offset: ["start 0.8", "start 0.2"],
	});

	return React.cloneElement(children, {
		ref: element,
		style: {
			opacity: scrollYProgress,
		},
	});
}
