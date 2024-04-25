import { cn } from "@/lib/utils";

export default function Clients() {
	const clients = ["Grade Limited", "Fascino", "RayosBD", "Brogrammers Lab"];
	return (
		<>
			<section
				id="clients"
				className="flex flex-col justify-center my-[20vh] space-y-4 max-w-4xl px-10 mx-auto"
			>
				<h3 className="text-2xl tracking-[0.6rem]">Clients</h3>
				<p className="text-6xl child-gradient">
					I worked with some <span>innovative</span> agencies and also with some{" "}
					<span>amazing</span>
					clients independently to build their <span>top-notch products</span>.
				</p>
			</section>
			<section className="mb-[20vh]">
				<hr className="border-slate-700" />
				{clients.map((client, index) => (
					<div
						key={index}
						className={cn("hover:bg-gradient-logo hover:text-background pt-4")}
					>
						<p className="text-6xl leading-[80%] w-full max-w-4xl px-10 mb-2 mx-auto">
							{client}
						</p>
						<hr className="border-slate-700" />
					</div>
				))}
			</section>
		</>
	);
}