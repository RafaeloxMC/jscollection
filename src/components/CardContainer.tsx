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
			<JSCard
				id={"car"}
				name={"Relaxing car drive"}
				description={"What could possibly go wrong here?"}
			/>
			<JSCard id={""} name={"3"} description={"3"} />
			<JSCard id={""} name={"4"} description={"4"} />
			<JSCard id={""} name={"5"} description={"5"} />
			<JSCard id={""} name={"6"} description={"6"} />
			<JSCard id={""} name={"7"} description={"7"} />
			<JSCard id={""} name={"8"} description={"8"} />
			<JSCard id={""} name={"9"} description={"9"} />
		</div>
	);
}

export default CardContainer;
