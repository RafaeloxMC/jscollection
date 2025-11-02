"use client";

import { useRef, useState } from "react";

function ChairRR() {
	const videoRef = useRef<HTMLVideoElement | null>(null);
	const [playing, setPlaying] = useState(false);

	const togglePlay = () => {
		const v = videoRef.current;
		if (!v) return;
		if (v.paused) {
			v.play();
			setPlaying(true);
		}
	};

	return (
		<div className="flex flex-col items-center justify-center p-8 md:p-16 bg-black text-gray-100 min-h-screen">
			<div className="max-w-4xl w-full">
				<h1 className="text-5xl font-extrabold text-center mb-4 text-red-500">
					REAL Paranormal Activity Caught on Camera
				</h1>

				<div className="space-y-4 mb-8">
					<p className="text-lg leading-relaxed">
						This footage was recovered from a security camera in an
						abandoned office building in Detroit, Michigan on
						October 13th, 2024. What you&apos;re about to see has
						been verified by THREE independent paranormal
						investigators and is considered one of the most
						compelling pieces of evidence for supernatural activity
						ever recorded.
					</p>

					<p className="text-base text-gray-300 leading-relaxed">
						The building&apos;s owner, who wishes to remain
						anonymous, installed cameras after multiple reports of
						&quot;strange occurrences&quot; by security guards.
						Nobody was in the building at the time of recording. The
						chair you see moving has NO strings, NO wires, and NO
						mechanical devices attached. Forensic analysis confirmed
						the video is 100% UNEDITED.
					</p>

					<div className="bg-neutral-950 bg-opacity-50 rounded p-4 border border-neutral-900">
						<p className="text-red-400 font-semibold mb-2">
							👻 DOCUMENTED PHENOMENA:
						</p>
						<ul className="text-sm text-gray-300 space-y-1 list-disc list-inside">
							<li>
								Chair moves on its own with NO human contact
							</li>
							<li>Temperature dropped 23°F during incident</li>
							<li>
								Electronic equipment malfunctioned
								simultaneously
							</li>
							<li>
								Witnesses reported hearing &quot;whispers&quot;
								in empty rooms
							</li>
							<li>EMF readings spiked to unprecedented levels</li>
						</ul>
					</div>

					<p className="text-base text-gray-300 leading-relaxed">
						Skeptics have tried to debunk this video for months with
						ZERO success. The footage was analyzed by MIT&apos;s
						physics department and Hollywood&apos;s top visual
						effects experts - all confirmed it&apos;s AUTHENTIC.
						Even the most hardcore non-believers have been left
						speechless.
					</p>

					<div className="bg-red-950 bg-opacity-40 rounded p-4 border border-red-800">
						<p className="text-red-300 font-bold text-sm mb-2">
							⚡ BREAKING UPDATE (Nov 2, 2025):
						</p>
						<p className="text-gray-300 text-sm">
							Three people who viewed this footage have reported
							experiencing unexplained phenomena in their own
							homes within 48 hours. We are NOT responsible for
							any paranormal encounters you may experience after
							watching. PROCEED AT YOUR OWN RISK.
						</p>
					</div>
				</div>

				<div className="relative w-full aspect-video mb-6 shadow-2xl">
					<video
						ref={videoRef}
						src="/videos/js/chair_rr.mp4"
						className="w-full rounded-lg border-2 border-red-900"
						onClick={togglePlay}
						playsInline
					/>
					{!playing && (
						<button
							type="button"
							onClick={togglePlay}
							aria-label="Play video"
							className="absolute inset-0 m-auto h-20 w-20 rounded-full bg-red-600 hover:bg-red-500 transition-all bg-opacity-80 flex items-center justify-center text-white text-2xl shadow-lg hover:scale-110"
						>
							▶
						</button>
					)}
					<div className="absolute top-4 left-4 bg-black bg-opacity-70 px-3 py-1 rounded text-xs">
						<span className="text-red-500 font-bold">● REC</span>
						<span className="text-gray-300 ml-2">
							10/13/2024 02:47 AM
						</span>
					</div>
				</div>

				<div className="mt-8 text-center">
					<p className="text-xs text-neutral-500">
						⚠️ By viewing this content, you acknowledge that you are
						18+ and accept full responsibility for any psychological
						or paranormal consequences that may occur.
					</p>
				</div>
			</div>
		</div>
	);
}

export default ChairRR;
