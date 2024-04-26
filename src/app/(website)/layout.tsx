import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import Header from "./header";
import Footer from "./footer";
import Cursor from "./cursor";
import { Person, WithContext } from "schema-dts";

const bebas = Bebas_Neue({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
	title: "Ibrahim Sadik Tamim - Portfolio",
	description: "Full-Stack Software Engineer based in Dhaka, Bangladesh.",
	icons: ["favicon.svg"],
	keywords: [
		"Ibrahim Sadik Tamim",
		"Software Engineer",
		"Full-Stack Developer",
		"Engineer",
		"Developer",
		"Dhaka",
		"Bangladesh",
	],
	openGraph: {
		title: "Ibrahim Sadik Tamim - Portfolio",
		description: "Full-Stack Software Engineer based in Dhaka, Bangladesh.",
		images: [{ url: "https://tam11a.dev/screenshot.png" }],
		type: "website",
		countryName: "Bangladesh",
		emails: ["ibrahimsadiktamim@gmail.com"],
		phoneNumbers: ["+880 1768 161994", "+880 1521 579148"],
		siteName: "Ibrahim Sadik Tamim - Portfolio",
		url: "https://tam11a.dev",
	},
};

const jsonLd: WithContext<Person> = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Ibrahim Sadik Tamim",
	additionalName: "tam11a",
	alternateName: "tam11a",
	disambiguatingDescription:
		"Full-Stack Software Engineer based in Dhaka, Bangladesh.",
	birthDate: "2000-01-19",
	email: "ibrahimsadiktamim@gmail.com",
	birthPlace: {
		"@type": "Place",
		address: {
			"@type": "PostalAddress",
			addressLocality: "Dhaka",
			addressRegion: "Dhaka",
			addressCountry: "Bangladesh",
		},
	},
	address: {
		"@type": "PostalAddress",
		addressLocality: "Dhaka",
		addressRegion: "Dhaka",
		addressCountry: "Bangladesh",
	},
	awards: ["National Champion of NASA Space Apps Challenge 2020"],
	description: "Full-Stack Software Engineer based in Dhaka, Bangladesh.",
	gender: "Male",
	jobTitle: "Software Engineer",
	image: "https://tam11a.dev/tam.jpg",
	url: "https://tam11a.dev",
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
					"cursor-none overflow-x-hidden overflow-y-hidden relative"
				)}
			>
				<Header />
				{children}
				<Footer />
				<Cursor />
				{/* Add JSON-LD to your page */}
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
				{/* ... */}
			</body>
		</html>
	);
}
