"use client";

import { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { Star, Send, User, Clock } from "lucide-react";

interface Review {
  id: string;
  name: string;
  rating: number;
  service: string;
  text: string;
  date: string;
}

const SEED_REVIEWS: Review[] = [
  {
    id: "1",
    name: "Jennifer Patel",
    rating: 5,
    service: "Flight Club Member",
    text: "Signed up for the Flight Club and it's already paid for itself. They caught a refrigerant leak during a routine tune-up that would have cost us thousands if it went undetected.",
    date: "2025-12-15",
  },
  {
    id: "2",
    name: "Carlos Rivera",
    rating: 5,
    service: "Plumbing",
    text: "Jason and his team handled our plumbing emergency on a Saturday with zero overtime charges because we're Flight Club members. Honest pricing, fast work, and genuinely good people.",
    date: "2025-11-20",
  },
  {
    id: "3",
    name: "Maria Gonzalez",
    rating: 5,
    service: "HVAC Installation",
    text: "Air Force HVAC replaced our entire AC system in one day. The crew was professional, on time, and left our home spotless. Our energy bill dropped by 30% the very first month.",
    date: "2025-10-08",
  },
  {
    id: "4",
    name: "David Thompson",
    rating: 5,
    service: "Duct Cleaning",
    text: "We had no idea how dirty our ducts were until they showed us the before and after. The difference in air quality is incredible. My kids' allergies have improved noticeably.",
    date: "2025-09-12",
  },
  {
    id: "5",
    name: "Sarah Mitchell",
    rating: 5,
    service: "AC Repair",
    text: "Our AC went out at 11 PM on a Friday in July. Air Force had a tech at our door by midnight. Fixed the capacitor on the spot. These guys are lifesavers.",
    date: "2025-08-22",
  },
  {
    id: "6",
    name: "Robert Chen",
    rating: 5,
    service: "Commercial HVAC",
    text: "We manage 12 multifamily properties and Air Force handles all our HVAC maintenance. Their pricing is transparent, their work is quality, and they always show up when they say they will.",
    date: "2025-07-15",
  },
];

function StarRating({
  rating,
  interactive,
  onRate,
}: {
  rating: number;
  interactive?: boolean;
  onRate?: (r: number) => void;
}) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`h-5 w-5 ${
            i <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-gray-200 text-gray-200"
          } ${interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}`}
          onClick={() => interactive && onRate?.(i)}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [reviews, setReviews] = useState<Review[]>(SEED_REVIEWS);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(5);
  const [service, setService] = useState("");
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Load any saved reviews from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("af-reviews");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Review[];
        setReviews([...parsed, ...SEED_REVIEWS]);
      } catch {
        // ignore
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newReview: Review = {
      id: Date.now().toString(),
      name: name.trim(),
      rating,
      service: service.trim() || "General",
      text: text.trim(),
      date: new Date().toISOString().split("T")[0],
    };

    const userReviews = [newReview];
    const saved = localStorage.getItem("af-reviews");
    if (saved) {
      try {
        const parsed = JSON.parse(saved) as Review[];
        userReviews.push(...parsed);
      } catch {
        // ignore
      }
    }
    localStorage.setItem("af-reviews", JSON.stringify(userReviews));

    setReviews([newReview, ...reviews]);
    setName("");
    setRating(5);
    setService("");
    setText("");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/40 to-white py-16">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500 mb-3">
              WHAT OUR CLIENTS SAY
            </p>
            <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
              Customer Reviews
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Real feedback from real South Florida homeowners and property
              managers. We&apos;re proud of our 600+ five-star reviews.
            </p>
            <div className="mt-4 flex items-center justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-6 w-6 fill-yellow-400 text-yellow-400"
                />
              ))}
              <span className="ml-2 font-rubik font-bold text-navy-500 text-lg">
                600+ Reviews
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* Submit Review Form */}
      <section className="py-12 bg-white border-b border-gray-100">
        <Container>
          <div className="mx-auto max-w-2xl">
            <h2 className="font-rubik text-2xl font-bold text-navy-500 mb-6">
              Leave a Review
            </h2>

            {submitted && (
              <div className="mb-6 rounded-lg bg-green-50 border border-green-200 p-4 text-green-700 font-medium">
                Thank you for your review! It has been posted.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Smith"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Service Received
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all bg-white"
                  >
                    <option value="">Select a service...</option>
                    <option value="AC Repair">AC Repair</option>
                    <option value="AC Installation">AC Installation</option>
                    <option value="Duct Cleaning">Duct Cleaning</option>
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Roofing">Roofing</option>
                    <option value="Indoor Air Quality">Indoor Air Quality</option>
                    <option value="Flight Club Member">Flight Club Member</option>
                    <option value="Commercial HVAC">Commercial HVAC</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Rating *
                </label>
                <StarRating rating={rating} interactive onRate={setRating} />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Your Review *
                </label>
                <textarea
                  required
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  placeholder="Tell us about your experience..."
                  rows={4}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-8 py-3 font-rubik font-semibold text-white transition-all hover:bg-cyan-600 focus:ring-2 focus:ring-cyan-500/20 focus:ring-offset-2"
              >
                <Send className="h-4 w-4" />
                Submit Review
              </button>
            </form>
          </div>
        </Container>
      </section>

      {/* Live Reviews */}
      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="font-rubik text-2xl font-bold text-navy-500 mb-8">
            All Reviews ({reviews.length})
          </h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <div
                key={review.id}
                className="flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <StarRating rating={review.rating} />
                <p className="mt-4 flex-1 text-gray-700 text-sm leading-relaxed">
                  &ldquo;{review.text}&rdquo;
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">
                      <User className="h-4 w-4 text-cyan-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-navy-500">
                        {review.name}
                      </p>
                      <p className="text-xs text-gray-400">{review.service}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3" />
                    {new Date(review.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
