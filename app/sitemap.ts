import type { MetadataRoute } from "next";
import { productPages } from "@/app/product-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      changeFrequency: "weekly",
      lastModified: new Date(),
      priority: 1,
      url: "https://noviwon.com",
    },
    ...productPages.map((product) => ({
      changeFrequency: "weekly" as const,
      lastModified: new Date(),
      priority: 0.85,
      url: `https://noviwon.com/products/${product.slug}`,
    })),
  ];
}
