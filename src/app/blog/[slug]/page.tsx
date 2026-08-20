import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/data/blog";
import {
  Calendar,
  Clock,
  Tag,
  ChevronRight,
  ArrowLeft,
  Phone,
} from "lucide-react";

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

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Air Force HVAC Blog`,
    description: post.description,
    keywords: [
      post.service || "",
      post.category,
      "South Florida",
      "Air Force HVAC",
      "HVAC tips",
    ].filter(Boolean),
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

function renderContent(paragraphs: string[]) {
  return paragraphs.map((p, i) => {
    if (p.startsWith("## ")) {
      return (
        <h2
          key={i}
          className="font-rubik text-xl font-bold text-navy-500 mt-8 mb-3"
        >
          {p.replace("## ", "")}
        </h2>
      );
    }
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <p key={i} className="font-semibold text-navy-500 mt-4 mb-1">
          {p.replace(/\*\*/g, "")}
        </p>
      );
    }
    const parts = p.split(/(\*\*[^*]+\*\*)/g);
    return (
      <p key={i} className="text-gray-700 leading-relaxed mb-4">
        {parts.map((part, j) => {
          if (part.startsWith("**") && part.endsWith("**")) {
            return (
              <strong key={j} className="font-semibold text-navy-500">
                {part.replace(/\*\*/g, "")}
              </strong>
            );
          }
          return <span key={j}>{part}</span>;
        })}
      </p>
    );
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter(
    (p) => p.category === post.category && p.slug !== post.slug
  ).slice(0, 3);

  return (
    <>
      <div className="border-b border-gray-100 bg-gray-50">
        <Container>
          <nav className="flex items-center gap-2 py-3 text-sm text-gray-500">
            <Link href="/" className="hover:text-cyan-500 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3" />
            <Link
              href="/blog"
              className="hover:text-cyan-500 transition-colors"
            >
              Blog
            </Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-gray-700 truncate max-w-[250px]">
              {post.title}
            </span>
          </nav>
        </Container>
      </div>

      <article className="py-12 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span
                className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[post.category]}`}
              >
                <Tag className="h-3 w-3" />
                {categoryLabels[post.category]}
              </span>
              {post.service && (
                <span className="text-sm text-gray-400">{post.service}</span>
              )}
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-400">
                <Clock className="h-3.5 w-3.5" />
                {post.readTime}
              </span>
            </div>

            <h1 className="font-rubik text-3xl font-bold text-navy-500 leading-tight md:text-4xl">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              {post.description}
            </p>

            <div className="my-8 flex items-center gap-3">
              <div className="h-px flex-1 bg-gray-200" />
              <div className="h-2 w-2 rounded-full bg-cyan-400" />
              <div className="h-px flex-1 bg-gray-200" />
            </div>

            <div className="prose-like">{renderContent(post.content)}</div>

            <div className="mt-12 rounded-2xl border border-cyan-200 bg-cyan-50 p-8 text-center">
              <h3 className="font-rubik text-xl font-bold text-navy-500">
                Ready to Get Started?
              </h3>
              <p className="mt-2 text-gray-600">
                Contact Air Force HVAC for expert{" "}
                {post.category === "residential"
                  ? "residential"
                  : "commercial"}{" "}
                service across South Florida.
              </p>
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  href={
                    post.category === "residential"
                      ? "/residential"
                      : "/commercial"
                  }
                  size="md"
                >
                  {post.category === "residential"
                    ? "Residential Services"
                    : "Commercial Services"}
                </Button>
                <Button href="tel:+18552917007" variant="outline" size="md">
                  <Phone className="h-4 w-4 mr-1" />
                  1-855-291-7007
                </Button>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-cyan-500 hover:text-cyan-600 font-semibold text-sm transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to All Articles
              </Link>
            </div>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <section className="py-12 bg-gray-50 border-t border-gray-100">
          <Container>
            <h2 className="font-rubik text-2xl font-bold text-navy-500 mb-8">
              Related Articles
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((relPost) => (
                <Link
                  key={relPost.slug}
                  href={`/blog/${relPost.slug}`}
                  className="group flex flex-col rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-cyan-200"
                >
                  <span
                    className={`self-start inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold mb-3 ${categoryColors[relPost.category]}`}
                  >
                    {categoryLabels[relPost.category]}
                  </span>
                  <h3 className="font-rubik text-lg font-bold text-navy-500 group-hover:text-cyan-600 transition-colors leading-snug">
                    {relPost.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {relPost.description}
                  </p>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
