import Review, { IReview } from "@/db/schemas/Review";
import connectDB from "@/db/mongoose";
import { Filter } from "bad-words";
import { NextRequest, NextResponse } from "next/server";
import { findJS } from "@/util/js";

export async function GET(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	await connectDB();
	const { id: js } = await params;
	const reviews: IReview[] = await Review.find({ jsId: js });
	return NextResponse.json({ reviews }, { status: 200 });
}

export async function POST(
	request: NextRequest,
	{ params }: { params: Promise<{ id: string }> }
) {
	try {
		await connectDB();
		const filter = new Filter();
		const { id: js } = await params;

		const jumpscare = findJS(js);
		if (!jumpscare) {
			return NextResponse.json(
				{ error: "Jumpscare not found" },
				{ status: 404 }
			);
		}

		const body = await request.json();
		const { username, rating, message } = body;

		if (!username || !rating) {
			return NextResponse.json(
				{ error: "Username and rating are required" },
				{ status: 400 }
			);
		}

		if (rating < 1 || rating > 5) {
			return NextResponse.json(
				{ error: "Rating must be between 1 and 5" },
				{ status: 400 }
			);
		}

		const cleanUsername = filter.clean(username);
		const cleanMessage = message ? filter.clean(message) : "";

		const review = new Review({
			jsId: js,
			author: cleanUsername,
			rating,
			message: cleanMessage,
			createdAt: new Date().toISOString(),
		});

		await review.save();

		return NextResponse.json(
			{ message: "Review created successfully", review },
			{ status: 201 }
		);
	} catch (error) {
		console.error("Error creating review:", error);
		return NextResponse.json(
			{ error: "Failed to create review" },
			{ status: 500 }
		);
	}
}
