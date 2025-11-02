import { IScreamer } from "./types";

export const js: IScreamer[] = [
	{
		id: "anne",
		name: "Anne.JPG",
		description: "The famous Anne.JPG screamer!",
	},
	{
		id: "car",
		name: "Relaxing Car Drive",
		description: "What could possibly go wrong?!",
	},
	{
		id: "chair_rr",
		name: "Paranormal Activity - The Moving Chair",
		description:
			"This chair has been recorded moving out of nowhere. The footage is very rare & exclusive.",
	},
];

export function findJS(id: string): IScreamer | undefined {
	return js.find((v) => v.id == id);
}
