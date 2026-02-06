import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { categories } from "@/lib/products-data";
import { CategoryShowcase } from "@/components/category-showcase";

export async function generateStaticParams() {
  return Object.keys(categories).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const category = categories[slug];
  if (!category) return {};

  return {
    title: `${category.title} | Oakwood & Co.`,
    description: category.description,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories[slug];
  if (!category) notFound();

  return <CategoryShowcase category={category} />;
}
