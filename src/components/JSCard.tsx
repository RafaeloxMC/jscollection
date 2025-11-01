"use client";
import { IScreamer } from "@/util/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

function JSCard({ id, name, description }: IScreamer) {
	let imageSrc: string | null = null;
	if (id) imageSrc = "/images/js/" + id + ".png";
	const router = useRouter();

	return (
		<div className="rounded-3xl bg-neutral-900 shadow w-full h-full p-4 flex flex-col justify-between">
			<div className="flex flex-col">
				{imageSrc && (
					<div className="relative w-full h-60 rounded-2xl overflow-hidden mb-4">
						<Image
							className="object-cover"
							alt="Jumpscare Preview Image"
							fill
							src={imageSrc}
						/>
					</div>
				)}
			</div>
			<div className="flex flex-col">
				<h3 className="text-xl font-bold">{name ?? "No name"}</h3>
				<p className="italic my-2">
					{description ?? "This Jumpscare has no description."}
				</p>
				<div className="flex flex-row justify-between gap-2">
					<button
						className="px-4 py-2 bg-neutral-700 rounded-xl w-full hover:opacity-80 transition-opacity"
						onClick={() => router.push("/demo/" + id)}
					>
						Demo
					</button>
					<button
						className="px-4 py-2 bg-neutral-700 rounded-xl w-full hover:opacity-80 transition-opacity"
						onClick={() => router.push("/js/" + id)}
					>
						Use now
					</button>
				</div>
			</div>
		</div>
	);
}

export default JSCard;
