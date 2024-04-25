import { motion } from "framer-motion";
import { menuSlide } from "./anim.curve";
import Curve from "./curve";

export default function Nav() {
	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className="fixed top-0 left-0 w-full h-full bg-slate-900 z-[999] flex items-center justify-center text-white text-4xl font-bold cursor-pointer select-none"
		>
			Hello World
			<Curve />
		</motion.div>
	);
}
