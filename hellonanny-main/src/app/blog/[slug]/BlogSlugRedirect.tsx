"use client";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function BlogSlugRedirect() {
  const params = useParams();
  const router = useRouter();
  useEffect(() => {
    router.replace(`/en/blog/${params.slug}`);
  }, [params.slug, router]);
  return null;
}
