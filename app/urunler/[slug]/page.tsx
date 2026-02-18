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
    title: `${category.title} - Bodrum Özel Tasarım`,
    description: `${category.description} Muğla Bodrum'da proje ve keşif talepleriniz için bizimle iletişime geçin.`,
    alternates: {
      canonical: `/urunler/${category.slug}`,
    },
    openGraph: {
      title: `${category.title} | Oakwood & Co.`,
      description: category.description,
      url: `/urunler/${category.slug}`,
      locale: "tr_TR",
      type: "article",
    },
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
