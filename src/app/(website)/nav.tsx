import { motion } from "framer-motion";
import { menuSlide } from "./anim.curve";
import styles from "./nav.module.css";

export default function Nav() {
	return (
		<motion.div
			variants={menuSlide}
			initial="initial"
			animate="enter"
			exit="exit"
			className={styles.menu}
		>
			Hello World
		</motion.div>
	);
}
