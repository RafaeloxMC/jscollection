import Link from "next/link";
import React from "react";

function Footer() {
	return (
		<div className="flex flex-row items-center justify-center gap-8 p-4 bg-black">
			<p>
				&copy; 2025 - made by @xvcf -{" "}
				<Link href={"https://xvcf.dev/"}>xvcf.dev</Link> -{" "}
				<Link href="https://github.com/RafaeloxMC/jscollection">
					Source Code
				</Link>
			</p>
		</div>
	);
}

export default Footer;
