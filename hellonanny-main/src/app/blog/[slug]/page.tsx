import { blogData } from "@/lib/blog-data";
import BlogSlugRedirect from "./BlogSlugRedirect";

export async function generateStaticParams() {
  return blogData.map((post) => ({ slug: post.slug }));
}

export default function Page() {
  return <BlogSlugRedirect />;
}
