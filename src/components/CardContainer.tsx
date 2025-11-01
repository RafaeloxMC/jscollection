import React from "react";
import JSCard from "./JSCard";

function CardContainer() {
	return (
		<div className="grid grid-cols-3 w-full gap-4 px-8 py-4">
			<JSCard
				id="anne"
				name="Anne.JPG"
				description="The famous Anne.JPG screamer!"
			/>
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
