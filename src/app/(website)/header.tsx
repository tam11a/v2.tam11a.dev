"use client";
import Image from "next/image";
import Link from "next/link";
import MagneticComponent from "./magnetic";
import { useState } from "react";
// import { AnimatePresence } from "framer-motion";
// import Nav from "./nav";

export default function Header() {
	const [menu, setMenu] = useState(false);
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
			<MagneticComponent>
				<p
					id="me-nu"
					className="text-xl p-5 zoom-button"
					onClick={() => setMenu((m) => !m)}
				>
					{menu ? "CLOSE" : "ME-NU"}
				</p>
			</MagneticComponent>
			{/* <AnimatePresence mode="wait">{menu && <Nav />}</AnimatePresence> */}
		</header>
	);
}
