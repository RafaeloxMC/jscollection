"use client";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Footer from "./Footer";

function FooterWrapper({ children }: { children: ReactNode }) {
	const pathname = usePathname();
	const isDemo = pathname.startsWith("/demo");

	return (
		<>
			{children}
			{!isDemo && <Footer />}
		</>
	);
}

export default FooterWrapper;
