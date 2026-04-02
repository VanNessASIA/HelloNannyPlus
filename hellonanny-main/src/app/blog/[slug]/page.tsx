"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import { blogData } from "@/lib/blog-data";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-brand-yellow-dark hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/60" />
        <div className="relative z-10 section-container">
          <Link
            href="/blog"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-extrabold text-white max-w-3xl">
            {post.title}
          </h1>
          <div className="flex items-center gap-2 text-white/60 mt-4">
            <Calendar className="w-4 h-4" />
            {post.date}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="section-container max-w-3xl">
          <div className="prose prose-lg prose-gray max-w-none">
            {post.content.split("\n\n").map((paragraph, i) => {
              // Check if it's a heading (starts with number and period or all caps)
              if (/^\d+\.\s/.test(paragraph) || /^#{1,3}\s/.test(paragraph)) {
                const text = paragraph.replace(/^#{1,3}\s/, "");
                return (
                  <h2
                    key={i}
                    className="text-xl font-bold text-brand-black mt-8 mb-4"
                  >
                    {text}
                  </h2>
                );
              }
              if (paragraph.startsWith("•") || paragraph.startsWith("-")) {
                return (
                  <ul key={i} className="list-disc pl-6 space-y-2">
                    {paragraph.split("\n").map((item, j) => (
                      <li key={j} className="text-gray-700">
                        {item.replace(/^[•-]\s*/, "")}
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-gray-700 leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-brand-gray-50">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-brand-black mb-4">
            Ready to find your perfect helper?
          </h2>
          <Link href="/contact" className="btn-primary">
            Send a Request
          </Link>
        </div>
      </section>
    </div>
  );
}
