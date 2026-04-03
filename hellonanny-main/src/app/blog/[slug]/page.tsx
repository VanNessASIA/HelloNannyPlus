"use client";
import { useParams } from "next/navigation";
import { redirect } from "next/navigation";
export default function Page() {
  const params = useParams();
  redirect(`/en/blog/${params.slug}`);
}
