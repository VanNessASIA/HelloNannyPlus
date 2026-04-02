"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

const blogPosts = [
  {
    slug: "5Checkpoints",
    title: "5 Checkpoints to Evaluate If Your Nanny Is Truly Trustworthy",
    excerpt:
      "The three keys to identifying a truly trustworthy nanny are verifying her background, observing how she interacts with your child, and checking references.",
    image: "/images/nanny-playing-baby.jpg",
    date: "2026-03-19",
  },
  {
    slug: "7Things",
    title: "7 Things to Know Before Hiring a Nanny or Maid in Bangkok",
    excerpt:
      "When hiring a nanny or maid in Bangkok, the two most important things are defining the role clearly and using a trusted placement agency.",
    image: "/images/mom-baby-park.jpg",
    date: "2026-03-19",
  },
  {
    slug: "Interview_Success_Guide",
    title:
      "Interview Success Guide for Nannies: How to Confidently Show Your Best Self",
    excerpt:
      "Meeting a new family can be both exciting and nerve-wracking. During interviews, it's your chance to showcase your experience and personality.",
    image: "/images/mom-reading-kids.jpg",
    date: "2025-06-19",
  },
  {
    slug: "Salaries_2025Edition",
    title: "How Much Are Nanny and Maid Salaries in Bangkok? [2025 Edition]",
    excerpt:
      "Hiring a nanny or maid in Bangkok can significantly improve your family's quality of life. But how much should you expect to pay?",
    image: "/images/couple-with-laptop.jpg",
    date: "2025-05-21",
  },
  {
    slug: "Complete_Guide_Hiring_Nanny_Maid_in_Thailand",
    title:
      "The Complete Guide to Hiring a Nanny Maid in Thailand: Essential Tips for Success",
    excerpt:
      "Hiring a nanny in Thailand is a great way to ease the burden of household chores and childcare, making daily life more comfortable.",
    image: "/images/cleaner-making-bed.jpg",
    date: "2025-02-25",
  },
  {
    slug: "Nationality-Based_Characteristics",
    title:
      "Choosing the Right Nanny in Thailand: Nationality-Based Characteristics and Hiring Tips",
    excerpt:
      "When hiring a nanny, it is important to consider not only experience and skills but also nationality-based characteristics.",
    image: "/images/headset-support.jpg",
    date: "2025-02-07",
  },
  {
    slug: "Success_Stories",
    title:
      "Hiring a Nanny in Thailand: Key Considerations and Success Stories",
    excerpt:
      "Hiring a nanny can be a wonderful decision that enhances your family's quality of life. Learn from real success stories.",
    image: "/images/happy-family.jpg",
    date: "2025-01-29",
  },
  {
    slug: "The_Cost-Effectiveness",
    title: "The Cost-Effectiveness of Hiring a Nanny in Thailand",
    excerpt:
      "Understanding the true costs and benefits of hiring household help in Thailand. A comprehensive guide for families.",
    image: "/images/family-on-bed.jpg",
    date: "2025-01-22",
  },
  {
    slug: "Hiring_a_Nanny_for_the_First_Time",
    title: "Hiring a Nanny for the First Time: A Complete Beginner's Guide",
    excerpt:
      "Everything you need to know before hiring a nanny for the first time, from setting expectations to building trust.",
    image: "/images/baby-crawling.jpg",
    date: "2025-01-15",
  },
  {
    slug: "Building_Trust_and_Longevity",
    title: "Building Trust and Longevity with Your Nanny",
    excerpt:
      "How to create a lasting, positive relationship with your nanny that benefits the entire family.",
    image: "/images/mom-with-phone.jpg",
    date: "2025-01-08",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
            Blog
          </h1>
          <p className="text-brand-black/70 text-lg max-w-2xl mx-auto">
            Tips, insights, and stories about childcare and hiring in Bangkok.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="section-container">
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group grid md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 md:h-auto min-h-[300px]">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="inline-block px-3 py-1 bg-brand-yellow/20 text-brand-yellow-dark text-xs font-semibold rounded-full mb-4 w-fit">
                Latest
              </span>
              <h2 className="text-2xl font-bold text-brand-black mb-3 group-hover:text-brand-yellow-dark transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mb-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <Calendar className="w-4 h-4" />
                {blogPosts[0].date}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
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
                  <h2 className="text-lg font-bold text-brand-black mb-2 group-hover:text-brand-yellow-dark transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center text-sm font-semibold text-brand-yellow-dark">
                    Read more
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
