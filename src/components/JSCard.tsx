import Image from "next/image";

function JSCard() {
	const imageSrc: string | null = null;

	return (
		<div className="rounded-3xl bg-neutral-900 shadow w-full h-full p-4">
			{imageSrc && (
				<Image
					className="object-cover"
					alt="Jumpscare Preview Image"
					fill
					src={imageSrc}
				/>
			)}
			<h3 className="text-xl font-bold">Some jumpscare</h3>
			<p className="italic">Short description</p>
			<div className="flex flex-row justify-between gap-2">
				<button className="px-4 py-2 bg-neutral-700 rounded-xl w-full hover:opacity-80 transition-opacity">
					Demo
				</button>
				<button className="px-4 py-2 bg-neutral-700 rounded-xl w-full hover:opacity-80 transition-opacity">
					Use now
				</button>
			</div>
		</div>
	);
}

export default JSCard;
