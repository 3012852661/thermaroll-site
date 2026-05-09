"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import i18n from "i18next";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Boxes,
  CheckCircle2,
  ChevronRight,
  Cloud,
  Cpu,
  Database,
  Factory,
  FileText,
  Globe2,
  Layers3,
  Mail,
  Menu,
  MessageCircle,
  Network,
  Send,
  ShieldCheck,
  Sparkles,
  Truck,
  X,
} from "lucide-react";
import { initReactI18next, useTranslation } from "react-i18next";

const resources = {
  en: {
    translation: {
      brand: "Noviwon",
      company: "Shenzhen Nuowei Advanced Materials Co., Ltd.",
      nav: {
        platform: "Platform",
        materials: "Materials",
        systems: "Systems",
        global: "Global Trade",
        inquiry: "Contact",
      },
      hero: {
        badge: "Industrial Materials & Smart Supply Chain Solutions",
        title: "Where advanced materials meet supply chain intelligence",
        sub: "Noviwon connects industrial materials sourcing, SaaS workflow systems and global trade execution for manufacturers, importers and fast-growing B2B brands.",
        primary: "Start a Project",
        secondary: "Explore Structure",
      },
      stats: {
        markets: "Global markets served",
        categories: "Material categories",
        workflow: "Digital workflow nodes",
        response: "RFQ response window",
      },
      platform: {
        eyebrow: "Noviwon Operating System",
        title: "A technology company built around real supply chains",
        sub: "We organize material procurement, production coordination, quality documents, shipment milestones and customer communication into one connected operating layer.",
        pillars: [
          {
            name: "Noviwon Materials",
            label: "Industrial Materials",
            desc: "Functional films, paper-based materials, labels, packaging substrates and custom industrial consumables for manufacturing and distribution.",
          },
          {
            name: "Noviwon Systems",
            label: "SaaS & Data",
            desc: "RFQ management, supplier collaboration, order tracking, QC records and purchasing analytics for smarter B2B operations.",
          },
          {
            name: "Noviwon Global",
            label: "International Trade",
            desc: "Export sourcing, supplier coordination, consolidation, documentation and logistics execution for overseas buyers.",
          },
        ],
      },
      materials: {
        eyebrow: "Noviwon Materials",
        title: "Material supply with engineering context",
        sub: "Beyond catalog trading, we help buyers define specifications, match supplier capabilities and keep repeat orders stable across batches.",
        items: [
          "Functional films and laminated materials",
          "Paper-based packaging and label substrates",
          "Adhesive, coating and converted roll materials",
          "Custom industrial consumables and OEM programs",
        ],
      },
      systems: {
        eyebrow: "Noviwon Systems",
        title: "SaaS tools for sourcing, orders and visibility",
        sub: "A modular digital layer for trade teams that need cleaner RFQs, faster supplier responses and traceable order execution.",
        modules: [
          "RFQ pipeline",
          "Supplier workspace",
          "Order milestone tracking",
          "QC document center",
          "Inventory and reorder alerts",
          "Trade analytics dashboard",
        ],
      },
      global: {
        eyebrow: "Noviwon Global",
        title: "From qualified suppliers to landed delivery",
        sub: "We combine China-based sourcing execution with international buyer communication, helping overseas customers reduce uncertainty before, during and after shipment.",
        steps: ["Brief", "Supplier match", "Sample & quote", "Production", "QC docs", "Shipment"],
      },
      inquiry: {
        eyebrow: "Build With Noviwon",
        title: "Tell us what you want to source, digitize or expand",
        sub: "Share your material requirement, SaaS workflow pain point or global trade project. Our team will route it to the right Noviwon business unit.",
        name: "Name",
        email: "Email",
        product: "Business interest",
        quantity: "Project scale",
        message: "Requirement / workflow / destination market",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent. The Noviwon team will reply within 24 hours.",
        another: "Send Another",
      },
      footer: {
        company: "Shenzhen Nuowei Advanced Materials Co., Ltd.",
        line: "Industrial materials, SaaS systems and smart global supply chain solutions.",
        email: "sales@noviwon.com",
        phone: "+86 123 4567 8900",
        address: "Shenzhen, Guangdong, China",
        rights: "© 2026 Noviwon. All rights reserved.",
      },
    },
  },
  zh: {
    translation: {
      brand: "Noviwon",
      company: "深圳市诺维新材有限公司",
      nav: {
        platform: "平台能力",
        materials: "材料业务",
        systems: "软件系统",
        global: "全球外贸",
        inquiry: "联系合作",
      },
      hero: {
        badge: "Industrial Materials & Smart Supply Chain Solutions",
        title: "让工业材料与智能供应链系统协同增长",
        sub: "Noviwon 面向制造商、进口商和 B2B 品牌，整合工业材料供应、SaaS 流程系统与全球外贸执行能力。",
        primary: "发起合作",
        secondary: "了解业务结构",
      },
      stats: {
        markets: "服务全球市场",
        categories: "材料品类覆盖",
        workflow: "数字流程节点",
        response: "询盘响应周期",
      },
      platform: {
        eyebrow: "Noviwon Operating System",
        title: "围绕真实供应链构建的科技公司",
        sub: "我们把材料采购、生产协同、质检文件、出货节点和客户沟通整合为一套可追踪、可复用的业务操作层。",
        pillars: [
          {
            name: "Noviwon Materials",
            label: "工业材料",
            desc: "功能薄膜、纸基材料、标签材料、包装基材及工业消耗品定制，服务制造与分销场景。",
          },
          {
            name: "Noviwon Systems",
            label: "SaaS 与数据",
            desc: "覆盖询报价、供应商协同、订单跟踪、质检文件和采购分析，提升 B2B 业务效率。",
          },
          {
            name: "Noviwon Global",
            label: "全球外贸",
            desc: "为海外买家提供出口选品、供应商协调、拼柜整合、单证和物流执行。",
          },
        ],
      },
      materials: {
        eyebrow: "Noviwon Materials",
        title: "带工程语境的材料供应能力",
        sub: "我们不只做目录式贸易，而是帮助客户明确规格、匹配供应商能力，并保证复购批次的稳定性。",
        items: [
          "功能薄膜与复合材料",
          "纸基包装与标签基材",
          "胶粘、涂布与卷材加工材料",
          "工业消耗品定制与 OEM 项目",
        ],
      },
      systems: {
        eyebrow: "Noviwon Systems",
        title: "面向采购、订单和可视化的 SaaS 工具",
        sub: "为外贸和供应链团队提供模块化数字系统，让询盘更清晰、供应商反馈更快、订单执行可追踪。",
        modules: [
          "RFQ 询价管线",
          "供应商协作空间",
          "订单节点跟踪",
          "质检文件中心",
          "库存与复购提醒",
          "贸易数据看板",
        ],
      },
      global: {
        eyebrow: "Noviwon Global",
        title: "从合格供应商到交付落地",
        sub: "我们结合中国本地供应链执行与国际买家沟通能力，帮助海外客户降低发货前、中、后的不确定性。",
        steps: ["需求简报", "供应商匹配", "样品报价", "批量生产", "质检单证", "物流出货"],
      },
      inquiry: {
        eyebrow: "Build With Noviwon",
        title: "告诉我们你想采购、数字化或拓展的业务",
        sub: "填写材料需求、SaaS 流程痛点或外贸项目，我们会分配给对应的 Noviwon 业务线跟进。",
        name: "姓名",
        email: "邮箱",
        product: "合作方向",
        quantity: "项目规模",
        message: "需求 / 流程痛点 / 目标市场",
        submit: "发送信息",
        sending: "发送中...",
        success: "信息已发送，Noviwon 团队将在 24 小时内回复。",
        another: "继续发送",
      },
      footer: {
        company: "深圳市诺维新材有限公司",
        line: "工业材料、SaaS 系统与智能全球供应链解决方案。",
        email: "sales@noviwon.com",
        phone: "+86 123 4567 8900",
        address: "中国广东省深圳市",
        rights: "© 2026 Noviwon. All rights reserved.",
      },
    },
  },
};

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
}

type NavItem = {
  id: "platform" | "materials" | "systems" | "global" | "inquiry";
};

type Pillar = {
  desc: string;
  label: string;
  name: string;
};

const navItems: NavItem[] = [
  { id: "platform" },
  { id: "materials" },
  { id: "systems" },
  { id: "global" },
  { id: "inquiry" },
];

const heroImage =
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1500&auto=format&fit=crop";

const systemsImage =
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1400&auto=format&fit=crop";

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const { t, i18n: i18nInstance } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          animate={{ x: 0 }}
          className="fixed inset-0 z-[100] flex flex-col bg-[#f7f8f5] p-6 lg:hidden"
          exit={{ x: "100%" }}
          initial={{ x: "100%" }}
          transition={{ duration: 0.25, type: "tween" }}
        >
          <div className="flex items-center justify-between">
            <a className="block" href="#" onClick={onClose}>
              <Image
                alt="Noviwon logo"
                className="h-14 w-auto"
                height={180}
                priority
                src="/noviwon-logo.svg"
                width={760}
              />
            </a>
            <button
              aria-label="Close menu"
              className="grid h-11 w-11 place-items-center border border-slate-200 bg-white"
              onClick={onClose}
            >
              <X size={22} />
            </button>
          </div>

          <nav className="mt-14 flex flex-col gap-5 text-3xl font-semibold tracking-tight">
            {navItems.map((item) => (
              <a
                className="flex items-center justify-between border-b border-slate-200 pb-5"
                href={`#${item.id}`}
                key={item.id}
                onClick={onClose}
              >
                {t(`nav.${item.id}`)}
                <ChevronRight size={22} />
              </a>
            ))}
          </nav>

          <div className="mt-auto grid grid-cols-2 gap-3">
            {["en", "zh"].map((lang) => (
              <button
                className={`h-12 border text-sm font-bold ${
                  i18nInstance.language.startsWith(lang)
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white text-slate-950"
                }`}
                key={lang}
                onClick={() => {
                  i18nInstance.changeLanguage(lang);
                  onClose();
                }}
              >
                {lang === "en" ? "English" : "中文"}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function NoviwonSite() {
  const { t, i18n: i18nInstance } = useTranslation();
  const [formStatus, setFormStatus] = useState<"IDLE" | "SENDING" | "SUCCESS" | "ERROR">(
    "IDLE",
  );
  const [formError, setFormError] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pillars = t("platform.pillars", { returnObjects: true }) as Pillar[];
  const materialItems = t("materials.items", { returnObjects: true }) as string[];
  const systemModules = t("systems.modules", { returnObjects: true }) as string[];
  const globalSteps = t("global.steps", { returnObjects: true }) as string[];

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      <nav className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#f7f8f5]/90 px-5 py-4 backdrop-blur md:px-10">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6">
          <a className="block shrink-0" href="#">
            <Image
              alt="Noviwon logo"
              className="h-12 w-auto md:h-14"
              height={180}
              priority
              src="/noviwon-logo.svg"
              width={760}
            />
          </a>

          <div className="hidden items-center gap-7 text-sm font-semibold text-slate-600 lg:flex">
            {navItems.map((item) => (
              <a className="transition hover:text-slate-950" href={`#${item.id}`} key={item.id}>
                {t(`nav.${item.id}`)}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <button
              className="h-10 border border-slate-300 px-4 text-sm font-bold transition hover:border-slate-950"
              onClick={() =>
                i18nInstance.changeLanguage(i18nInstance.language.startsWith("zh") ? "en" : "zh")
              }
            >
              {i18nInstance.language.startsWith("zh") ? "EN" : "中文"}
            </button>
            <a
              className="inline-flex h-10 items-center gap-2 bg-slate-950 px-5 text-sm font-bold text-white transition hover:bg-slate-800"
              href="#inquiry"
            >
              {t("nav.inquiry")}
              <ArrowRight size={16} />
            </a>
          </div>

          <button
            aria-label="Open menu"
            className="grid h-11 w-11 place-items-center border border-slate-200 bg-white lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-10 lg:grid-cols-[1fr_0.9fr] lg:py-20">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col justify-center"
          initial={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.45 }}
        >
          <div className="mb-6 inline-flex w-fit items-center gap-2 border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-cyan-800">
            <Network size={15} />
            {t("hero.badge")}
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-slate-500">
            {t("company")}
          </p>
          <h1 className="max-w-5xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
            {t("hero.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 md:text-xl">
            {t("hero.sub")}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              className="inline-flex h-13 items-center justify-center gap-2 bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-slate-800"
              href="#inquiry"
            >
              {t("hero.primary")}
              <Send size={17} />
            </a>
            <a
              className="inline-flex h-13 items-center justify-center gap-2 border border-slate-300 bg-white px-6 text-sm font-black transition hover:border-slate-950"
              href="#platform"
            >
              {t("hero.secondary")}
              <ArrowRight size={17} />
            </a>
          </div>
        </motion.div>

        <div className="relative min-h-[460px] overflow-hidden bg-slate-200">
          <Image
            alt="Industrial automation and smart manufacturing"
            className="object-cover"
            fill
            priority
            sizes="(min-width: 1024px) 45vw, 100vw"
            src={heroImage}
          />
          <div className="absolute inset-0 bg-slate-950/18" />
          <div className="absolute bottom-0 left-0 right-0 grid grid-cols-2 bg-white/94 backdrop-blur md:grid-cols-4">
            {[
              ["30+", t("stats.markets")],
              ["120+", t("stats.categories")],
              ["18", t("stats.workflow")],
              ["24h", t("stats.response")],
            ].map(([value, label]) => (
              <div className="border-r border-slate-200 p-4 last:border-r-0" key={label}>
                <div className="text-2xl font-black">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="platform" className="border-y border-slate-200 bg-white px-5 py-18 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
                {t("platform.eyebrow")}
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                {t("platform.title")}
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">{t("platform.sub")}</p>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const icons = [Layers3, Cpu, Globe2];
              const Icon = icons[index] ?? Layers3;

              return (
                <article className="border border-slate-200 bg-[#f7f8f5] p-6" key={pillar.name}>
                  <div className="grid h-12 w-12 place-items-center bg-slate-950 text-white">
                    <Icon size={22} />
                  </div>
                  <div className="mt-6 text-xs font-black uppercase tracking-[0.18em] text-cyan-700">
                    {pillar.label}
                  </div>
                  <h3 className="mt-2 text-2xl font-black tracking-tight">{pillar.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{pillar.desc}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="materials" className="px-5 py-18 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              {t("materials.eyebrow")}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              {t("materials.title")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t("materials.sub")}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {materialItems.map((item, index) => {
              const icons = [FileText, Boxes, Factory, ShieldCheck];
              const Icon = icons[index] ?? BadgeCheck;

              return (
                <div className="flex min-h-28 items-start gap-4 border border-slate-200 bg-white p-5" key={item}>
                  <Icon className="mt-1 shrink-0 text-cyan-700" size={22} />
                  <span className="text-lg font-black leading-7">{item}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="systems" className="bg-slate-950 px-5 py-18 text-white md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative h-[430px] overflow-hidden bg-slate-900">
            <Image
              alt="Supply chain analytics dashboard"
              className="object-cover opacity-80"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={systemsImage}
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-300">
              {t("systems.eyebrow")}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              {t("systems.title")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">{t("systems.sub")}</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {systemModules.map((module, index) => {
                const icons = [Database, Network, Truck, FileText, Cloud, BarChart3];
                const Icon = icons[index] ?? Database;

                return (
                  <div className="flex items-center gap-3 border border-white/12 bg-white/6 p-4" key={module}>
                    <Icon className="shrink-0 text-cyan-300" size={20} />
                    <span className="font-semibold leading-6 text-slate-100">{module}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="global" className="px-5 py-18 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              {t("global.eyebrow")}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              {t("global.title")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t("global.sub")}</p>
          </div>

          <div className="mt-10 grid gap-3 md:grid-cols-3 lg:grid-cols-6">
            {globalSteps.map((step, index) => (
              <div className="border border-slate-200 bg-white p-5" key={step}>
                <div className="text-sm font-black text-cyan-700">{String(index + 1).padStart(2, "0")}</div>
                <div className="mt-8 text-lg font-black">{step}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="border-t border-slate-200 bg-white px-5 py-18 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.78fr_1fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              {t("inquiry.eyebrow")}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              {t("inquiry.title")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t("inquiry.sub")}</p>

            <div className="mt-8 grid gap-3 text-sm font-semibold text-slate-700">
              <a className="flex items-center gap-3" href={`mailto:${t("footer.email")}`}>
                <Mail className="text-cyan-700" size={19} />
                {t("footer.email")}
              </a>
              <a className="flex items-center gap-3" href="https://wa.me/861234567890">
                <MessageCircle className="text-cyan-700" size={19} />
                WhatsApp: {t("footer.phone")}
              </a>
              <span className="flex items-center gap-3">
                <Globe2 className="text-cyan-700" size={19} />
                Noviwon Materials / Systems / Global
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            {formStatus === "SUCCESS" ? (
              <motion.div
                animate={{ opacity: 1, y: 0 }}
                className="border border-cyan-200 bg-[#f7f8f5] p-8 text-center"
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: 10 }}
              >
                <CheckCircle2 className="mx-auto text-cyan-700" size={52} />
                <p className="mx-auto mt-5 max-w-md text-xl font-bold leading-8">
                  {t("inquiry.success")}
                </p>
                <button
                  className="mt-7 border border-slate-300 px-5 py-3 text-sm font-black transition hover:border-slate-950"
                  onClick={() => setFormStatus("IDLE")}
                >
                  {t("inquiry.another")}
                </button>
              </motion.div>
            ) : (
              <motion.form
                animate={{ opacity: 1, y: 0 }}
                className="grid gap-4 border border-slate-200 bg-[#f7f8f5] p-5 md:grid-cols-2 md:p-8"
                exit={{ opacity: 0, y: -10 }}
                initial={{ opacity: 0, y: 10 }}
                onSubmit={async (event) => {
                  event.preventDefault();
                  setFormStatus("SENDING");
                  setFormError("");

                  const formData = new FormData(event.currentTarget);
                  const response = await fetch("/api/inquiry", {
                    body: JSON.stringify(Object.fromEntries(formData.entries())),
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                  });

                  if (response.ok) {
                    event.currentTarget.reset();
                    setFormStatus("SUCCESS");
                    return;
                  }

                  const result = (await response.json().catch(() => null)) as {
                    error?: string;
                  } | null;
                  setFormError(result?.error ?? "Unable to send message. Please email us directly.");
                  setFormStatus("ERROR");
                }}
              >
                {[
                  ["name", "text"],
                  ["email", "email"],
                  ["product", "text"],
                  ["quantity", "text"],
                ].map(([field, type]) => (
                  <label className="block" key={field}>
                    <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                      {t(`inquiry.${field}`)}
                    </span>
                    <input
                      className="mt-2 h-12 w-full border border-slate-200 bg-white px-4 outline-none transition focus:border-slate-950"
                      name={field}
                      required
                      type={type}
                    />
                  </label>
                ))}

                <label className="block md:col-span-2">
                  <span className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">
                    {t("inquiry.message")}
                  </span>
                  <textarea
                    className="mt-2 min-h-32 w-full resize-none border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-slate-950"
                    name="message"
                    required
                  />
                </label>

                {formStatus === "ERROR" && (
                  <p className="border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold leading-6 text-red-700 md:col-span-2">
                    {formError}
                  </p>
                )}

                <button
                  className="inline-flex h-13 items-center justify-center gap-2 bg-slate-950 px-6 text-sm font-black text-white transition hover:bg-slate-800 md:col-span-2"
                  disabled={formStatus === "SENDING"}
                >
                  {formStatus === "SENDING" ? (
                    <Sparkles className="animate-pulse" size={17} />
                  ) : (
                    <Send size={17} />
                  )}
                  {formStatus === "SENDING" ? t("inquiry.sending") : t("inquiry.submit")}
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-slate-950 px-5 py-10 text-white md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <div>
              <Image
                alt="Noviwon logo"
                className="h-16 w-auto"
                height={180}
                src="/noviwon-logo.svg"
                width={760}
              />
            </div>
            <p className="mt-3 font-semibold text-slate-300">{t("footer.company")}</p>
            <p className="mt-2 max-w-xl text-sm leading-7 text-slate-400">{t("footer.line")}</p>
          </div>
          <div className="text-sm font-semibold leading-7 text-slate-300 md:text-right">
            <p>{t("footer.address")}</p>
            <p>{t("footer.email")}</p>
            <p>{t("footer.rights")}</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
