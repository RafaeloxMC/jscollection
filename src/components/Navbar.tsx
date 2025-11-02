import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
	return (
		<div className="flex flex-row gap-8 items-center justify-center p-4 shadow text-xl">
			<Link href="/" className="font-extrabold">
				JSCollection
			</Link>
			<Link href="/">Home</Link>
		</div>
	);
};

export default Navbar;
