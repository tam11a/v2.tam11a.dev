import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";
import Cursor from "./cursor";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
	title: "Ibrahim Sadik Tamim - Portfolio",
	description: "Full-Stack Software Engineer based in Dhaka, Bangladesh.",
	icons: ["favicon.svg"],
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={cn(
					bebas.className,
					"cursor-none overflow-x-hidden overflow-y-auto"
				)}
			>
				<Header />
				{children}
				<Footer />
				<Cursor />
			</body>
		</html>
	);
}
