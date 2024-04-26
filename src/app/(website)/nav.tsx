import { motion } from "framer-motion";
import { menuSlide } from "./anim.curve";
import Curve from "./curve";
import { useState } from "react";
import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
import Link from "next/link";
const navItems = [
	{
		title: "Home",
		href: "/",
	},
	{
		title: "Articles",
		href: "#",
		disabled: true,
	},
	{
		title: "Contact",
		href: "#",
		disabled: true,
	},
];

export default function Nav() {
	const pathname = usePathname();

	const [selectedIndicator, setSelectedIndicator] = useState(pathname);

	return (
		<>
			<motion.div
				variants={menuSlide}
				initial="initial"
				animate="enter"
				exit="exit"
				className="bg-opacity-15 fixed top-0 right-0 h-[100vh] bg-foreground text-background text-4xl z-[999] transition-all duration-700"
			>
				<div
					className={`
				flex flex-col box-border h-full p-24 justify-between
				`}
				>
					<div
						onMouseLeave={() => {
							setSelectedIndicator(pathname);
						}}
						className="flex flex-col gap-3 mt-20"
					>
						<div
							className={`border-b border-b-slate-500 uppercase text-xl mb-10 pb-4`}
						>
							<p>Navigation</p>
						</div>

						{navItems.map((data, index) => {
							return (
								<NavLink
									key={index}
									data={{ ...data, index }}
									isActive={selectedIndicator == data.href}
									setSelectedIndicator={setSelectedIndicator}
								/>
							);
						})}
					</div>

					<div className={`flex w-full justify-between text-lg gap-5`}>
						<Link
							href={"https://www.linkedin.com/in/ibrahimsadiktamim/"}
							target="_blank"
						>
							LinkedIn
						</Link>

						<Link
							href={"https://github.com/tam11a"}
							target="_blank"
						>
							GitHub
						</Link>
						<Link
							href={"https://dribbble.com/tam11a"}
							target="_blank"
						>
							Dribble
						</Link>
						<Link
							href={"https://www.instagram.com/tam11a/"}
							target="_blank"
						>
							Instagram
						</Link>
					</div>
				</div>
				<Curve />
			</motion.div>
		</>
	);
}
