"use client";
import { useState } from "react";
import JSCard from "./JSCard";
import { js } from "@/util/js";

function CardContainer() {
	const [searchTerm, setSearchTerm] = useState("");

	return (
		<div className="px-8 py-4">
			<div className="mb-4">
				<input
					type="text"
					className="bg-neutral-950 w-full h-full px-4 py-2 rounded-lg"
					placeholder="Enter Search Term..."
					onChange={(e) => setSearchTerm(e.currentTarget.value)}
				/>
			</div>
			<div className="grid grid-cols-3 w-full gap-4 ">
				{js
					.filter(
						(v) =>
							v.description
								.toLowerCase()
								.includes(searchTerm.toLowerCase()) ||
							v.name
								.toLowerCase()
								.includes(searchTerm.toLowerCase())
					)
					.map((screamer, index) => {
						return (
							<JSCard
								id={screamer.id}
								description={screamer.description}
								name={screamer.name}
								key={screamer.id + "-" + index}
							/>
						);
					})}
			</div>
		</div>
	);
}

export default CardContainer;
