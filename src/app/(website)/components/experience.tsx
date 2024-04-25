import FadeOnScroll from "../fade-on-scroll";
import { motion } from "framer-motion";

export default function Experience() {
	return (
		<section
			id="experience"
			className="flex flex-col justify-center mt-[20vh]  max-w-4xl px-10 mx-auto"
		>
			<FadeOnScroll>
				<motion.div className="space-y-4">
					<h3 className="text-2xl tracking-[0.6rem]">Experience</h3>
					<p className="text-6xl child-gradient">
						Over <span>Three years</span> of experience in software engineering
						and working with some of the most talented people in business.
					</p>
				</motion.div>
			</FadeOnScroll>
		</section>
	);
}
