import Link from "next/link";

export default function Footer() {
	return (
		<footer className="flex flex-col items-center justify-between max-w-7xl mx-auto px-10 py-9 pb-44">
			<h3 className="text-2xl tracking-[0.6rem] w-full mb-11">Connect</h3>
			<div className="grid grid-cols-6 gap-4 w-full mx-auto">
				<div className=" flex flex-col col-span-6 md:col-span-1 text-3xl gap-4">
					<Link href="#">LinkedIn</Link>
					<Link href="#">Dribbble</Link>
				</div>
				<div className=" flex flex-col text-3xl gap-4  col-span-6 md:col-span-1">
					<Link href="#">Github</Link>
					<Link href="#">Instagram</Link>
				</div>
				<div className="hidden md:inline md:col-span-2" />
				<div className="col-span-6 md:col-span-2 flex flex-col text-3xl gap-4 md:items-end">
					<div className="flex flex-col gap-3">
						<Link
							href="#"
							className="flex flex-col"
						>
							<span className="text-lg">Email</span>
							<span className="text-base">ibrahimsadiktamim@gmail.com</span>
						</Link>
						<Link
							href="#"
							className="flex flex-col"
						>
							<span className="text-lg">Phone</span>
							<span className="text-base">+880 1768 161994</span>
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
