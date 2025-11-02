import mongoose, { Schema } from "mongoose";

export interface IReview {
	jsId: string;
	author: string;
	rating: number;
	message: string;
	createdAt: string;
}

const reviewSchema = new Schema<IReview>({
	jsId: { type: String, required: true, trim: true },
	author: { type: String, required: true, trim: true },
	rating: { type: Number, required: true, min: 0, max: 5 },
	message: { type: String, required: true, trim: true },
	createdAt: {
		type: String,
		required: true,
		default: () => new Date().toISOString(),
	},
});

export default (mongoose.models && mongoose.models.review) ||
	mongoose.model("review", reviewSchema);
