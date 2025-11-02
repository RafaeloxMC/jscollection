import { findJS } from "@/util/js";
import { IScreamer } from "@/util/types";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

async function Page({ params }: { params: { id: string } }) {
	const { id } = await params;
	const js: IScreamer | undefined = findJS(id);
	if (!js) redirect("/");
	return (
		<div className="flex flex-col items-center justify-center w-full h-full min-h-screen bg-black">
			<div className="text-center">
				<h1 className="text-8xl font-extrabold">{js.name}</h1>
				<p className="italic mt-4 mb-16">{js.description}</p>

				<div className="mt-6 flex flex-col items-center justify-center text-center">
					<h3 className="text-4xl mb-2">Preview</h3>
					<Image
						src={"/images/js/" + id + ".png"}
						alt="Demo Image"
						width={1024}
						height={512}
						className="max-w-96 rounded-lg"
					/>
					<p className="mt-4">
						All screamers are also provided with a demo. You can see
						an example integration including the screamer.
					</p>
					<Link
						href={"/demo/" + id}
						className="mt-4 px-4 py-2 text-xl font-bold bg-neutral-800 hover:opacity-80 transition-opacity rounded-lg"
					>
						View Demo
					</Link>
				</div>
			</div>

			<div className="mt-16">
				<h2 className="text-2xl font-bold">How to integrate</h2>
				<div className="bg-neutral-900 rounded-lg p-4 flex flex-col gap-4">
					<div>
						<h3 className="text-xl font-bold">Use the demo</h3>
						<p>
							The simplest integration into a website is by using
							the provided demo as an iFrame. This can be done in
							one line with basic HTML.
						</p>
						<p>Code:</p>
						<code>
							{'<iframe src="/demo/' + id + '"></iframe>'}
						</code>

						<p>The result will look like this:</p>
						<iframe
							className="w-full h-full aspect-video rounded-lg"
							src={"/demo/" + id}
						/>
					</div>
					<div>
						<h3 className="text-xl font-bold">
							Integrate the video directly
						</h3>
						<p>
							If you do not plan on using a website, you can
							simply use the video. Feel free to stream it from
							this URL.
						</p>
						<Link href={"/videos/js/" + id + ".mp4"}>
							Click here!
						</Link>

						<p>The result will look like this:</p>
						<video
							className="w-full h-full aspect-video rounded-lg"
							src={"/videos/js/" + id + ".mp4"}
							controls
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Page;
