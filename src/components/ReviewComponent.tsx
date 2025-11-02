"use client";
import { IReview } from "@/db/schemas/Review";
import { useEffect, useState } from "react";

interface ReviewComponentProps {
	jsId: string;
}

function ReviewComponent({ jsId }: ReviewComponentProps) {
	const [reviews, setReviews] = useState<IReview[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [username, setUsername] = useState("");
	const [rating, setRating] = useState(5);
	const [message, setMessage] = useState("");
	const [submitting, setSubmitting] = useState(false);

	const fetchReviews = async () => {
		try {
			setLoading(true);
			const response = await fetch(`/api/js/${jsId}/reviews`);
			const data = await response.json();
			if (response.ok) {
				setReviews(data.reviews);
			} else {
				setError(data.error || "Failed to load reviews");
			}
		} catch (err) {
			setError("Failed to load reviews");
			console.error(err);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchReviews();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [jsId]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!username.trim()) {
			setError("Username is required");
			return;
		}

		try {
			setSubmitting(true);
			setError(null);
			const response = await fetch(`/api/js/${jsId}/reviews`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: username.trim(),
					rating,
					message: message.trim(),
				}),
			});

			const data = await response.json();
			if (response.ok) {
				setUsername("");
				setRating(5);
				setMessage("");
				fetchReviews();
			} else {
				setError(data.error || "Failed to submit review");
			}
		} catch (err) {
			setError("Failed to submit review");
			console.error(err);
		} finally {
			setSubmitting(false);
		}
	};

	const renderStars = (rating: number) => {
		return (
			<div className="flex gap-1">
				{[1, 2, 3, 4, 5].map((star) => (
					<span
						key={star}
						className={
							star <= rating
								? "text-yellow-500"
								: "text-neutral-600"
						}
					>
						★
					</span>
				))}
			</div>
		);
	};

	const averageRating =
		reviews.length > 0
			? (
					reviews.reduce((sum, review) => sum + review.rating, 0) /
					reviews.length
			  ).toFixed(1)
			: "0.0";

	return (
		<div className="mt-16 m-8 max-w-[50%] w-full">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-2xl font-bold">Reviews</h2>
				<div className="flex items-center gap-2">
					{renderStars(Math.round(parseFloat(averageRating)))}
					<span className="text-lg">
						{averageRating} ({reviews.length})
					</span>
				</div>
			</div>

			<div className="bg-neutral-900 rounded-lg p-4 flex flex-col gap-6">
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<h3 className="text-xl font-bold">Write a Review</h3>
					{error && (
						<div className="bg-red-900/50 text-red-200 p-3 rounded-lg">
							{error}
						</div>
					)}
					<div>
						<label className="block mb-2">Username</label>
						<input
							type="text"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full bg-neutral-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-neutral-700"
							placeholder="Enter your username"
							disabled={submitting}
						/>
					</div>
					<div>
						<label className="block mb-2">Rating</label>
						<div className="flex gap-2">
							{[1, 2, 3, 4, 5].map((star) => (
								<button
									key={star}
									type="button"
									onClick={() => setRating(star)}
									className={`text-3xl ${
										star <= rating
											? "text-yellow-500"
											: "text-neutral-600"
									} hover:scale-110 transition-transform`}
									disabled={submitting}
								>
									★
								</button>
							))}
						</div>
					</div>
					<div>
						<label className="block mb-2">Message (optional)</label>
						<textarea
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className="w-full bg-neutral-800 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-neutral-700 min-h-24"
							placeholder="Share your thoughts..."
							disabled={submitting}
						/>
					</div>
					<button
						type="submit"
						disabled={submitting}
						className="px-4 py-2 bg-neutral-700 rounded-lg hover:opacity-80 transition-opacity disabled:opacity-50"
					>
						{submitting ? "Submitting..." : "Submit Review"}
					</button>
				</form>

				{/* Reviews List */}
				<div>
					<h3 className="text-xl font-bold mb-4">
						All Reviews ({reviews.length})
					</h3>
					{loading ? (
						<p className="text-neutral-400">Loading reviews...</p>
					) : reviews.length === 0 ? (
						<p className="text-neutral-400">
							No reviews yet. Be the first to review!
						</p>
					) : (
						<div className="flex flex-col gap-4">
							{reviews.map((review, index) => (
								<div
									key={index}
									className="bg-neutral-800 rounded-lg p-4"
								>
									<div className="flex items-center justify-between mb-2">
										<span className="font-bold">
											{review.author}
										</span>
										{renderStars(review.rating)}
									</div>
									{review.message && (
										<p className="text-neutral-300">
											{review.message}
										</p>
									)}
									<p className="text-sm text-neutral-500 mt-2">
										{new Date(
											review.createdAt
										).toLocaleDateString("en-US", {
											year: "numeric",
											month: "long",
											day: "numeric",
										})}
									</p>
								</div>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default ReviewComponent;
