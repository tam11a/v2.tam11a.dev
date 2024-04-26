import Link from "next/link";

import { motion } from "framer-motion";
import { scale, slide } from "./anim.curve";

export default function NavLink({
	data,
	isActive,
	setSelectedIndicator,
}: {
	data: any;
	isActive: boolean;
	setSelectedIndicator: any;
}) {
	const { title, href, index, disabled } = data;

	return (
		<motion.div
			className={`relative flex items-center`}
			onMouseEnter={() => {
				setSelectedIndicator(href);
			}}
			custom={index}
			variants={slide}
			initial="initial"
			animate="enter"
			exit="exit"
		>
			<motion.div
				variants={scale}
				animate={isActive ? "open" : "closed"}
				className={`w-3 h-3 bg-background rounded-[50%] absolute -left-7`}
			></motion.div>

			<Link
				href={href}
				aria-disabled={disabled}
				className="flex flex-row items-center gap-4"
			>
				{title}{" "}
				{disabled && (
					<span className="text-xs tracking-widest bg-gradient-logo px-2 py-1 rounded-full font-cover-by-your-grace font-bold border-background border text-background">
						Coming Soon
					</span>
				)}
			</Link>
		</motion.div>
	);
}
