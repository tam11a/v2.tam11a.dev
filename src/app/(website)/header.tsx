import Image from "next/image";
import Link from "next/link";

export default function Header() {
	return (
		<header className="flex flex-row items-center justify-between max-w-7xl mx-auto px-2 py-9">
			<Link href="/">
				<Image
					src="/favicon.svg"
					alt="Ibrahim Sadik Tamim"
					width={50}
					height={50}
					className="h-12"
				/>
			</Link>
			<p className="text-xl">ME-NU</p>
		</header>
	);
}
