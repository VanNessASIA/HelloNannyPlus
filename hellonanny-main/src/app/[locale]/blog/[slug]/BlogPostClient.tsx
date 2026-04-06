"use client";

import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Calendar, ArrowLeft, ChevronRight, User } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";
import { blogData } from "@/lib/blog-data";

export default function BlogPostClient() {
  const params = useParams();
  const slug = params.slug as string;
  const { locale } = useLocale();
  const post = blogData.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href={`/${locale}/blog`} className="text-brand-yellow-dark hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Find related posts (exclude current)
  const relatedPosts = blogData.filter((p) => p.slug !== slug).slice(0, 3);

  // Section images from blog data
  const sectionImages = post.sectionImages || {};

  // Parse content into rich blocks
  const renderContent = (content: string) => {
    const blocks = content.split("\n\n");
    let sectionIndex = 0;

    return blocks.map((block, i) => {
      const trimmed = block.trim();
      if (!trimmed) return null;

      // Main headings (e.g., "Checkpoint 1: ...", "## ...", numbered sections)
      if (/^(Checkpoint|Step)\s+\d+/i.test(trimmed) || /^#{2}\s/.test(trimmed)) {
        sectionIndex++;
        const text = trimmed.replace(/^#{2}\s/, "");
        const sectionImg = sectionImages[sectionIndex];
        return (
          <div key={i}>
            {sectionImg && (
              <div className="my-8 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={sectionImg}
                  alt={text}
                  width={800}
                  height={400}
                  className="w-full h-56 md:h-72 object-cover"
                />
              </div>
            )}
            <div className="mt-12 mb-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-extrabold text-brand-black">{sectionIndex}</span>
              </div>
              <h2 className="text-2xl font-bold text-brand-black leading-snug">
                {text}
              </h2>
            </div>
          </div>
        );
      }

      // Sub headings (### or lines ending with colon-like patterns)
      if (/^#{3}\s/.test(trimmed)) {
        const text = trimmed.replace(/^#{3}\s/, "");
        return (
          <h3 key={i} className="text-xl font-bold text-brand-black mt-10 mb-4 border-l-4 border-brand-yellow pl-4">
            {text}
          </h3>
        );
      }

      // Section-style headings (e.g. "HelloNanny's Ongoing Support")
      if (/^[A-Z][\w\s''-]+$/.test(trimmed) && trimmed.length < 80 && !trimmed.includes('.')) {
        return (
          <h3 key={i} className="text-xl font-bold text-brand-black mt-10 mb-4 border-l-4 border-brand-yellow pl-4">
            {trimmed}
          </h3>
        );
      }

      // Numbered headings like "1. Something"
      if (/^\d+\.\s/.test(trimmed) && trimmed.length < 100 && trimmed.split('.').length <= 2) {
        sectionIndex++;
        const sectionImg = sectionImages[sectionIndex];
        return (
          <div key={i}>
            {sectionImg && (
              <div className="my-8 rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={sectionImg}
                  alt={trimmed}
                  width={800}
                  height={400}
                  className="w-full h-56 md:h-72 object-cover"
                />
              </div>
            )}
            <div className="mt-12 mb-6 flex items-start gap-4">
              <div className="w-10 h-10 bg-brand-yellow rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-sm font-extrabold text-brand-black">{sectionIndex}</span>
              </div>
              <h2 className="text-2xl font-bold text-brand-black leading-snug">
                {trimmed}
              </h2>
            </div>
          </div>
        );
      }

      // Bullet lists
      if (trimmed.startsWith("•") || trimmed.startsWith("-") || trimmed.startsWith("・")) {
        const items = trimmed.split("\n").filter(Boolean);
        return (
          <ul key={i} className="space-y-3 my-6 ml-2">
            {items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 text-gray-700">
                <span className="w-2 h-2 bg-brand-yellow rounded-full flex-shrink-0 mt-2.5" />
                <span className="leading-relaxed">{item.replace(/^[•\-・]\s*/, "")}</span>
              </li>
            ))}
          </ul>
        );
      }

      // Blockquote-style (starts with > or "Note:")
      if (trimmed.startsWith(">") || trimmed.startsWith("Note:") || trimmed.startsWith("Tip:")) {
        const text = trimmed.replace(/^>\s*/, "");
        return (
          <div key={i} className="my-8 bg-brand-yellow/10 border-l-4 border-brand-yellow rounded-r-2xl p-6">
            <p className="text-gray-700 leading-relaxed italic">
              {text}
            </p>
          </div>
        );
      }

      // Regular paragraph
      return (
        <p key={i} className="text-gray-700 leading-[1.9] mb-5 text-[16.5px]">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[45vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-brand-black/40 to-brand-black/20" />
        <div className="relative z-10 section-container pb-12">
          <ScrollAnimation type="fade-in">
            <Link
              href={`/${locale}/blog`}
              className="inline-flex items-center text-white/70 hover:text-white mb-6 transition-colors text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white max-w-4xl leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 mt-6">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <User className="w-4 h-4" />
                Hello Nanny Team
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            {/* Lead paragraph / excerpt highlight */}
            <ScrollAnimation type="fade-in">
              <div className="bg-brand-gray-50 rounded-2xl p-8 mb-12 border-l-4 border-brand-yellow">
                <p className="text-lg text-gray-800 leading-relaxed font-medium">
                  {post.excerpt}
                </p>
              </div>
            </ScrollAnimation>

            {/* Article body */}
            <ScrollAnimation type="fade-in" delay={100}>
              <article className="article-content">
                {renderContent(post.content)}
              </article>
            </ScrollAnimation>

            {/* Share / Tags area */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <Link
                  href={`/${locale}/blog`}
                  className="inline-flex items-center text-brand-yellow-dark hover:text-brand-black transition-colors font-semibold"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to all articles
                </Link>
                <Link href={`/${locale}/contact`} className="btn-primary text-sm py-3 px-6 shimmer">
                  Find Your Nanny
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-brand-gray-50">
          <div className="section-container">
            <ScrollAnimation type="fade-in">
              <h2 className="text-2xl font-bold text-brand-black mb-8 text-center">
                Related Articles
              </h2>
            </ScrollAnimation>
            <ScrollAnimation type="stagger">
              <div className="grid md:grid-cols-3 gap-8">
                {relatedPosts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/${locale}/blog/${related.slug}`}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                  >
                    <div className="relative h-44 overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5">
                      <p className="text-xs text-gray-400 mb-2">{related.date}</p>
                      <h3 className="font-bold text-brand-black text-sm line-clamp-2 group-hover:text-brand-yellow-dark transition-colors">
                        {related.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </ScrollAnimation>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <h2 className="text-2xl font-bold text-brand-black mb-4">
              Ready to find your perfect helper?
            </h2>
            <p className="text-brand-black/70 mb-6">
              Send us your request and get matched within 24 hours.
            </p>
            <Link href={`/${locale}/contact`} className="btn-primary shimmer">
              Send a Request
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
