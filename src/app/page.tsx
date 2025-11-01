import CardContainer from "@/components/CardContainer";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen items-center justify-center font-sans bg-black">
			<h1 className="text-4xl font-extrabold">JSCollection</h1>
			<h2 className="italic text-2xl">
				This site has every jumpscare you could ever need!
			</h2>

			<p className="mt-4 text-wrap max-w-[60%] text-center">
				JSCollection provides easy-to-use jumpscares for all your needs!
				Whether you want to use a video or implement them in a website -
				JSCollection got you covered!
			</p>

			<h2 className="text-2xl font-extrabold mt-8 mb-4">
				Jumpscares we are providing
			</h2>
			<CardContainer />
		</div>
	);
}
