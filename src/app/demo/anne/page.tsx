"use client";

import { useRef, useState } from "react";

function AnneDemo() {
	const [isJs, setJs] = useState(false);
	const videoRef = useRef<HTMLVideoElement>(null);
	const siteRef = useRef<HTMLDivElement>(null);
	const handleClick = (): void => {
		setJs(true);

		requestAnimationFrame(() => {
			const v = videoRef.current;
			if (!v) return;
			v.volume = 1;
			v.currentTime = 0;
			const playPromise = v.play();
			if (playPromise?.catch)
				playPromise.catch(() => {
					if (window) window.location.reload();
				});
			siteRef.current?.requestFullscreen();
		});
	};
	return (
		<div ref={siteRef}>
			<video
				ref={videoRef}
				src="/videos/js/anne.mp4"
				preload="auto"
				style={{ display: isJs ? "block" : "none" }}
				className="fixed inset-0 w-full h-full object-cover"
			/>
			{!isJs && (
				<div className="flex flex-col justify-center items-center h-screen">
					<h1 className="text-4xl font-extrabold">
						This site uses cookies.
					</h1>
					<p className="max-w-xl text-center">
						This site uses cookies to provide and improve our
						services, personalize content, analyze traffic, and
						ensure basic functionality. By accepting, you agree to
						the use of cookies as described in our{" "}
						<span
							onClick={handleClick}
							className="text-purple-600 underline cursor-pointer hover:text-purple-500"
						>
							Privacy Policy
						</span>
						. You can modify your preferences before continuing.
					</p>
					<div className="flex flex-row gap-4 mt-4">
						<button
							className="px-6 py-4 font-bold rounded-lg bg-purple-600 hover:bg-purple-500 transition-colors cursor-pointer"
							onClick={handleClick}
						>
							Accept All
						</button>
						<button
							className="px-6 py-4 font-bold rounded-lg border-2 border-white bg-transparent hover:bg-white/20 transition-colors cursor-pointer"
							onClick={handleClick}
						>
							Modify Preferences
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

export default AnneDemo;
