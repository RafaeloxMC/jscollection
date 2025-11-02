import React from "react";
import JSCard from "./JSCard";
import { js } from "@/util/js";

function CardContainer() {
	return (
		<div className="grid grid-cols-3 w-full gap-4 px-8 py-4">
			{js.map((screamer, index) => {
				return (
					<JSCard
						id={screamer.id}
						description={screamer.description}
						name={screamer.description}
						key={screamer.id + "-" + index}
					/>
				);
			})}
		</div>
	);
}

export default CardContainer;
