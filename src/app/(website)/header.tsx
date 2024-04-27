"use client";
import Image from "next/image";
import Link from "next/link";
import MagneticComponent from "./magnetic";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./nav";
import { cn } from "@/lib/utils";

export default function Header() {
	const [menu, setMenu] = useState(false);

	useEffect(() => {
		if (menu) {
			document.body.classList.remove("overflow-y-auto");
			document.body.classList.add("overflow-y-hidden");
		} else {
			document.body.classList.remove("overflow-y-hidden");
			document.body.classList.add("overflow-y-auto");
		}
	}, [menu]);

	return (
		<header className="flex flex-row items-center justify-between max-w-7xl mx-auto px-10 py-9 relative z-10 min-h-14">
			<Link href="/">
				<Image
					src="/favicon.svg"
					alt="Ibrahim Sadik Tamim"
					width={50}
					height={50}
					className="h-12 opacity-0"
				/>
			</Link>
			<AnimatePresence mode="wait">
				{!menu && (
					<MagneticComponent>
						<p
							id="me-nu"
							className={cn("text-xl p-5 zoom-button z-10 text-foreground")}
							onClick={() => setMenu((m) => !m)}
						>
							ME-NU
						</p>
					</MagneticComponent>
				)}
			</AnimatePresence>
			<AnimatePresence mode="wait">
				{menu && (
					<>
						<Nav />
						<motion.div
							className="fixed top-0 right-0 backdrop-blur-sm blur-sm h-full w-full"
							onClick={() => setMenu((m) => !m)}
						/>
					</>
				)}
			</AnimatePresence>
			{menu && (
				<MagneticComponent>
					<p
						id="me-nu"
						className={cn(
							"text-xl p-5 zoom-button z-[1000] text-background fixed right-10",
							!menu && "hidden"
						)}
						onClick={() => setMenu((m) => !m)}
					>
						CLOSE
					</p>
				</MagneticComponent>
			)}
		</header>
	);
}
