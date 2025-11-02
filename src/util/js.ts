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
];

export function findJS(id: string): IScreamer | undefined {
	return js.find((v) => v.id == id);
}
