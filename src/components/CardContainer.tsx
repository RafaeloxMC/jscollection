import React from "react";
import JSCard from "./JSCard";

function CardContainer() {
	return (
		<div className="grid grid-cols-3 w-full gap-4 px-8 py-4">
			<JSCard />
			<JSCard />
			<JSCard />
			<JSCard />
			<JSCard />
			<JSCard />
			<JSCard />
			<JSCard />
			<JSCard />
		</div>
	);
}

export default CardContainer;
