"use client";

import { useRef, useState } from "react";

function RelaxingCarDrive() {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [showOverlay, setShowOverlay] = useState(true);

	const handlePlay = () => {
		if (videoRef.current) {
			videoRef.current.muted = false;
			videoRef.current.currentTime = 0;
			videoRef.current.play().catch(() => {});
			setShowOverlay(false);
		}
	};

	return (
		<div className="relative w-screen h-screen bg-black">
			<video
				src="/videos/js/car.mp4"
				className="w-screen h-screen"
				playsInline
				ref={videoRef}
				onLoadedMetadata={(e) => {
					e.currentTarget.currentTime = 0;
				}}
			/>
			{showOverlay && (
				<div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 z-10">
					<button
						onClick={handlePlay}
						className="px-8 py-4 text-2xl font-bold text-white bg-blue-600 rounded shadow-lg hover:bg-blue-700 focus:outline-none"
					>
						▶ Play Video
					</button>
				</div>
			)}
		</div>
	);
}

export default RelaxingCarDrive;
