import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BLOG_POSTS } from "@/data/blog";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Air Force HVAC | South Florida HVAC Tips & Industry Insights",
  description:
    "Expert tips, guides, and insights on HVAC, plumbing, electrical, roofing, and commercial building services from Air Force HVAC in South Florida.",
  keywords: [
    "HVAC blog",
    "South Florida HVAC tips",
    "commercial HVAC guide",
    "AC maintenance tips",
    "plumbing tips Florida",
    "ductwork maintenance",
    "indoor air quality",
    "commercial savings HVAC",
  ],
};

const categoryLabels: Record<string, string> = {
  residential: "Residential",
  commercial: "Commercial",
  savings: "Cost Savings",
};

const categoryColors: Record<string, string> = {
  residential: "bg-cyan-100 text-cyan-700",
  commercial: "bg-navy-100 text-navy-700",
  savings: "bg-emerald-100 text-emerald-700",
};

export default function BlogPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-cyan-50/40 to-white py-16">
        <Container>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-500 mb-3">
              INSIGHTS & EXPERTISE
            </p>
            <h1 className="font-rubik text-4xl font-bold text-navy-500 md:text-5xl">
              Air Force HVAC Blog
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              Expert tips, industry guides, and cost-saving strategies for
              homeowners, property managers, and commercial developers in South
              Florida.
            </p>
          </div>
        </Container>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <Container>
          <Link
            href={`/blog/${featured.slug}`}
            className="group block overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg hover:border-cyan-200"
          >
            <div className="p-8 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[featured.category]}`}
                >
                  <Tag className="h-3 w-3" />
                  {categoryLabels[featured.category]}
                </span>
                {featured.service && (
                  <span className="text-xs text-gray-400">
                    {featured.service}
                  </span>
                )}
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Calendar className="h-3 w-3" />
                  {new Date(featured.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-1 text-xs text-gray-400">
                  <Clock className="h-3 w-3" />
                  {featured.readTime}
                </span>
              </div>
              <h2 className="font-rubik text-2xl font-bold text-navy-500 group-hover:text-cyan-600 transition-colors md:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-gray-600 text-lg">
                {featured.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-cyan-500 font-semibold text-sm">
                Read Article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        </Container>
      </section>

      {/* All Posts Grid */}
      <section className="py-12 bg-gray-50">
        <Container>
          <h2 className="font-rubik text-2xl font-bold text-navy-500 mb-8">
            All Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md hover:border-cyan-200"
              >
                <div className="flex-1 p-6">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-semibold ${categoryColors[post.category]}`}
                    >
                      {categoryLabels[post.category]}
                    </span>
                    {post.service && (
                      <span className="text-xs text-gray-400">
                        {post.service}
                      </span>
                    )}
                  </div>
                  <h3 className="font-rubik text-lg font-bold text-navy-500 group-hover:text-cyan-600 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {post.description}
                  </p>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 px-6 py-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
