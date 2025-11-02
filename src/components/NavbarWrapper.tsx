"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Navbar from "./Navbar";

function NavbarWrapper({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const isDemo = pathname.startsWith("/demo");

	return (
		<>
			{!isDemo && <Navbar />}
			{children}
		</>
	);
}

export default NavbarWrapper;
