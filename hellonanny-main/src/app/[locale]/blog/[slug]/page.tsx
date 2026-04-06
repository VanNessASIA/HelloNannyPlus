import { blogData } from "@/lib/blog-data";
import { locales } from "@/lib/i18n-config";
import BlogPostClient from "./BlogPostClient";

export async function generateStaticParams() {
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    for (const post of blogData) {
      params.push({ locale, slug: post.slug });
    }
  }
  return params;
}

export default function BlogPostPage() {
  return <BlogPostClient />;
}
