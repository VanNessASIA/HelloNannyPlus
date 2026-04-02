"use client";

import Image from "next/image";
import Link from "next/link";
import ScrollAnimation from "@/components/ScrollAnimation";
import { Calendar, ArrowRight } from "lucide-react";
import { useLocale } from "@/lib/LocaleContext";

const blogPosts = [
  {
    slug: "5Checkpoints",
    title: "5 Checkpoints to Evaluate If Your Nanny Is Truly Trustworthy",
    excerpt:
      "The short answer: the three keys to identifying a truly trustworthy nanny are verifying her background, observing how she interacts with your child, and assessing her ability to handle emergencies.",
    image: "/images/nanny-playing-baby.jpg",
    date: "2024-09-29",
  },
  {
    slug: "7Things",
    title: "7 Things to Know Before Hiring a Nanny or Maid in Bangkok",
    excerpt:
      "The bottom line: when hiring a nanny or maid in Bangkok, the two most important things are defining the role clearly and using a trusted placement agency.",
    image: "/images/mom-baby-park.jpg",
    date: "2024-12-20",
  },
  {
    slug: "Interview_Success_Guide",
    title:
      "Interview Success Guide for Nannies: How to Confidently Show Your Best Self",
    excerpt:
      "Meeting a new family can be both exciting and nerve-wracking. Especially during interviews, it's your chance to showcase your experience and personality.",
    image: "/images/mom-reading-kids.jpg",
    date: "2024-12-20",
  },
  {
    slug: "Salaries_2025Edition",
    title:
      "How much are Nanny and Maid Salaries in Bangkok? [2025 Edition!!]",
    excerpt:
      "Hiring a nanny or maid in Bangkok can significantly improve your family's quality of life—especially for working parents or expat households.",
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
    date: "2024-11-12",
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
      "Hiring a Nanny in Thailand: Key Considerations and Success Stories for a Smooth Start and Strong Relationship",
    excerpt:
      "Hiring a nanny can be a wonderful decision that enriches your family's life. However, if it's your first time hiring, you may have concerns or questions.",
    image: "/images/happy-family.jpg",
    date: "2025-01-29",
  },
  {
    slug: "The_Cost-Effectiveness",
    title:
      "Maximizing Value: Cost-Effective Tips for Hiring a Nanny or Maid in Thailand",
    excerpt:
      "When hiring a nanny or maid, costs are often a primary consideration. However, choosing the cheapest option may not always guarantee the quality of service you need.",
    image: "/images/family-on-bed.jpg",
    date: "2025-01-28",
  },
  {
    slug: "Hiring_a_Nanny_for_the_First_Time",
    title:
      "Successfully Hiring Your First Nanny in Bangkok: Tips to Build Trust and Start Strong",
    excerpt:
      "Congratulations on your new life in Bangkok! Adjusting to a new environment while managing childcare and household tasks can be challenging.",
    image: "/images/baby-crawling.jpg",
    date: "2025-01-21",
  },
  {
    slug: "Building_Trust_and_Longevity",
    title:
      "Why Your Nanny or Maid Keeps Leaving—and How to Build Lasting Relationships in Bangkok",
    excerpt:
      "If you've hired a nanny or maid in Bangkok, Thailand, only to see them leave soon after, you're not alone.",
    image: "/images/mom-with-phone.jpg",
    date: "2024-12-25",
  },
];

export default function BlogPage() {
  const { locale } = useLocale();

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="py-20 bg-brand-yellow">
        <div className="section-container text-center">
          <ScrollAnimation type="fade-in">
            <h1 className="text-4xl md:text-5xl font-extrabold text-brand-black mb-4">
              Blog
            </h1>
            <p className="text-brand-black/70 text-lg max-w-2xl mx-auto">
              Tips, insights, and stories about childcare and hiring in Bangkok.
            </p>
          </ScrollAnimation>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="section-container">
          <ScrollAnimation type="scale-in">
            <Link
              href={`/${locale}/blog/${blogPosts[0].slug}`}
              className="group grid md:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 md:h-auto min-h-[300px] overflow-hidden">
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
          </ScrollAnimation>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12">
        <div className="section-container">
          <ScrollAnimation type="stagger">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <Link
                  key={post.slug}
                  href={`/${locale}/blog/${post.slug}`}
                  className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
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
                      <ArrowRight className="w-4 h-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </div>
  );
}
