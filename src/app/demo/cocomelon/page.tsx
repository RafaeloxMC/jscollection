"use client";
import React, { useRef, useState } from "react";

function Page() {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const divRef = useRef<HTMLDivElement | null>(null);
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [playing, setPlaying] = useState(false);
	const togglePlay = () => {
		const v = videoRef.current;
		if (!v) return;
		if (v.paused) {
			v.play();
			setPlaying(true);
		}
		divRef.current?.requestFullscreen();
	};
	return (
		<div className="bg-amber-100 min-h-screen min-w-screen text-amber-950 flex flex-col justify-center items-center">
			<h1 className="text-4xl font-extrabold">
				What happened to Cocomelon?
			</h1>
			<p>
				There have been rumors that this clip has recently been removed
				by cocomelon because of a recent lawsuit.
			</p>
			<div
				className="flex justify-center items-center max-w-[33%]"
				ref={divRef}
			>
				<video
					src={"/videos/js/cocomelon.mp4"}
					className="aspect-video rounded-lg"
					onClick={togglePlay}
					ref={videoRef}
				/>
			</div>
		</div>
	);
}

export default Page;
