"use client";

import Image from "next/image";
import { useLocale } from "@/lib/LocaleContext";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    title: "How to Choose the Right Nanny for Your Family",
    excerpt: "Finding the perfect nanny involves more than just checking qualifications. Here are key factors to consider.",
    image: "/images/nanny-playing-baby.jpg",
    date: "2024-12-15",
  },
  {
    title: "Living in Bangkok as an Expat Family",
    excerpt: "Tips and insights for expat families navigating life in Bangkok, from schools to childcare.",
    image: "/images/mom-baby-park.jpg",
    date: "2024-11-28",
  },
  {
    title: "The Benefits of Multilingual Childcare",
    excerpt: "Why having a nanny who speaks multiple languages can benefit your child's development.",
    image: "/images/mom-reading-kids.jpg",
    date: "2024-11-10",
  },
];

export default function BlogPage() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            {t.nav.blog}
          </h1>
          <p className="text-brand-black/70 text-lg max-w-2xl mx-auto">
            Tips, insights, and stories about childcare in Bangkok.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <article
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-3">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h2 className="text-lg font-bold text-brand-black mb-2 group-hover:text-brand-yellow-dark transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-brand-yellow-dark">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
