import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BadgeCheck, Boxes, CheckCircle2, FileText, Globe2 } from "lucide-react";
import { getProductPage, productPages } from "@/app/product-data";

type ProductRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productPages.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductPage(slug);

  if (!product) {
    return {};
  }

  return {
    alternates: {
      canonical: `/products/${product.slug}`,
    },
    description: product.description,
    keywords: product.keywords,
    openGraph: {
      description: product.description,
      title: `${product.title} | Noviwon`,
      type: "website",
      url: `https://noviwon.com/products/${product.slug}`,
    },
    title: product.title,
  };
}

export default async function ProductPage({ params }: ProductRouteProps) {
  const { slug } = await params;
  const product = getProductPage(slug);

  if (!product) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        "brand": { "@type": "Brand", "name": "Noviwon" },
        "category": "Thermal paper products",
        "description": product.description,
        "name": product.title,
        "url": `https://noviwon.com/products/${product.slug}`,
      },
      {
        "@type": "FAQPage",
        "mainEntity": product.faqs.map((faq) => ({
          "@type": "Question",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer,
          },
          "name": faq.question,
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />

      <nav className="border-b border-slate-200 bg-white px-5 py-4 md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <Link className="block shrink-0" href="/">
            <Image
              alt="Noviwon logo"
              className="h-12 w-auto md:h-14"
              height={180}
              priority
              src="/noviwon-logo.svg"
              width={760}
            />
          </Link>
          <Link
            className="inline-flex h-10 items-center gap-2 border border-slate-300 px-4 text-sm font-black transition hover:border-slate-950"
            href="/#inquiry"
          >
            Get Quote
            <ArrowRight size={16} />
          </Link>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-10 lg:grid-cols-[1fr_0.85fr] lg:py-20">
        <div>
          <Link
            className="inline-flex items-center gap-2 text-sm font-black text-cyan-700 transition hover:text-slate-950"
            href="/#samples"
          >
            <ArrowLeft size={16} />
            Thermal paper samples
          </Link>
          <p className="mt-8 text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
            Noviwon Materials
          </p>
          <h1 className="mt-3 max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            {product.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
            {product.description}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex h-13 items-center justify-center gap-2 bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-slate-800"
              href="/#inquiry"
            >
              Request Price
              <ArrowRight size={17} />
            </Link>
            <a
              className="inline-flex h-13 items-center justify-center gap-2 border border-slate-300 bg-white px-6 text-sm font-black transition hover:border-slate-950"
              href="mailto:sales@noviwon.com"
            >
              sales@noviwon.com
            </a>
          </div>
        </div>

        <div className="border border-slate-200 bg-white p-6">
          <div className="relative h-64 overflow-hidden border border-slate-200 bg-[linear-gradient(135deg,#f8fafc_0%,#eef2f7_55%,#ecfeff_100%)]">
            <div className="absolute bottom-10 left-10 h-32 w-32 rounded-full border-[22px] border-slate-100 bg-white shadow-inner">
              <div className="absolute inset-2 rounded-full border border-cyan-200" />
              <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200" />
            </div>
            <div className="absolute bottom-10 right-12 h-24 w-24 rounded-full border-[16px] border-cyan-50 bg-white shadow-inner">
              <div className="absolute inset-2 rounded-full border border-slate-200" />
            </div>
            <div className="absolute left-8 top-8 h-7 w-36 border border-slate-200 bg-white" />
            <div className="absolute bottom-7 left-8 right-8 h-2 bg-slate-200" />
          </div>
          <div className="mt-6 grid gap-3">
            {product.specs.map((spec) => (
              <div className="grid gap-1 border-b border-slate-100 pb-3 last:border-b-0" key={spec.label}>
                <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                  {spec.label}
                </span>
                <span className="font-bold leading-7 text-slate-900">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              Supply Highlights
            </p>
            <div className="mt-6 grid gap-3">
              {product.highlights.map((highlight) => (
                <div className="flex items-start gap-3 border border-slate-200 bg-[#f7f8f5] p-4" key={highlight}>
                  <CheckCircle2 className="mt-1 shrink-0 text-cyan-700" size={20} />
                  <span className="font-bold leading-7">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              Applications
            </p>
            <div className="mt-6 grid gap-3">
              {product.applications.map((application, index) => {
                const icons = [Boxes, FileText, BadgeCheck, Globe2];
                const Icon = icons[index] ?? BadgeCheck;

                return (
                  <div className="flex items-start gap-3 border border-slate-200 bg-[#f7f8f5] p-4" key={application}>
                    <Icon className="mt-1 shrink-0 text-cyan-700" size={20} />
                    <span className="font-bold leading-7">{application}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
            Buyer FAQ
          </p>
          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {product.faqs.map((faq) => (
              <article className="border border-slate-200 bg-white p-6" key={faq.question}>
                <h2 className="text-xl font-black leading-7 tracking-tight">{faq.question}</h2>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 px-5 py-14 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Ready to quote this product?</h2>
            <p className="mt-3 max-w-2xl leading-7 text-slate-300">
              Send size, paper gsm, roll length, quantity, packing and destination market. Noviwon will route the request to the right sourcing and export workflow.
            </p>
          </div>
          <Link
            className="inline-flex h-13 shrink-0 items-center justify-center gap-2 bg-white px-6 text-sm font-black text-slate-950 transition hover:bg-cyan-50"
            href="/#inquiry"
          >
            Send Inquiry
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
