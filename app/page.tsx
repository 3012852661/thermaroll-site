"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
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
        samples: "Samples",
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
      samples: {
        eyebrow: "Thermal Paper Samples",
        title: "Common roll formats buyers can request first",
        sub: "Thermal paper remains a practical anchor category for Noviwon Materials. These sample formats help overseas buyers confirm size, coating, core, packing and print requirements before volume orders.",
        labels: { spec: "Spec", use: "Use" },
        items: [
          {
            name: "POS Receipt Rolls",
            slug: "thermal-paper-rolls",
            spec: "57x40mm / 80x80mm / custom length",
            use: "Retail, restaurant, payment terminal and supermarket checkout",
            options: "BPA-free, smooth cut, private label carton",
          },
          {
            name: "Thermal Label Rolls",
            slug: "thermal-label-rolls",
            spec: "40x30mm / 50x30mm / 100x150mm",
            use: "Shipping labels, barcode labels and warehouse identification",
            options: "Permanent adhesive, removable adhesive, custom die-cut",
          },
          {
            name: "ATM & Kiosk Rolls",
            slug: "thermal-paper-rolls",
            spec: "80mm / 82.5mm width, high meter length",
            use: "Banking, parking, queue machines and self-service terminals",
            options: "High sensitivity coating, low dust, jumbo roll conversion",
          },
          {
            name: "Printed Thermal Rolls",
            slug: "custom-printed-thermal-paper",
            spec: "Logo, warning text, back print or color core",
            use: "Brand chains, distributors and OEM supply programs",
            options: "1-4 color printing, custom packing, export palletizing",
          },
        ],
      },
      wholesale: {
        eyebrow: "Wholesale Supply Capability",
        title: "Thermal paper rolls for importers, distributors and OEM buyers",
        sub: "Noviwon supports wholesale thermal paper procurement from sample confirmation to repeat export orders. Buyers can request POS receipt rolls, thermal label rolls, ATM paper rolls, jumbo roll conversion, custom logo printing and private label cartons.",
        points: [
          "Popular sizes: 57mm, 80mm, 82.5mm and custom roll lengths",
          "Material options: BPA-free, high sensitivity coating and low-dust paper",
          "Packing options: shrink wrap, 5-roll packs, printed boxes and export cartons",
          "Trade support: mixed SKUs, QC photos, palletizing and shipment documents",
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
      faq: {
        eyebrow: "Buyer FAQ",
        title: "Questions thermal paper buyers usually ask",
        items: [
          {
            question: "Can Noviwon provide thermal paper samples before bulk orders?",
            answer:
              "Yes. Buyers can request samples for POS receipt rolls, thermal labels, ATM rolls or printed thermal rolls to confirm size, coating, core, image quality and packaging.",
          },
          {
            question: "Do you support custom printed thermal paper rolls?",
            answer:
              "Yes. Noviwon supports logo printing, warning text, back print, custom carton design and private label packing for distributors and chain-store buyers.",
          },
          {
            question: "Can you consolidate different paper products in one shipment?",
            answer:
              "Yes. Noviwon Global can coordinate mixed SKUs, supplier communication, QC records, export cartons, pallets and shipping documents for overseas buyers.",
          },
        ],
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
        samples: "热敏纸样品",
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
      samples: {
        eyebrow: "热敏纸样品展示",
        title: "海外买家可优先确认的常用卷材规格",
        sub: "热敏纸仍然是 Noviwon Materials 的重要落地品类。通过样品规格，客户可以先确认尺寸、涂层、管芯、包装和印刷要求，再进入批量订单。",
        labels: { spec: "规格", use: "应用" },
        items: [
          {
            name: "POS 收银纸卷",
            slug: "thermal-paper-rolls",
            spec: "57x40mm / 80x80mm / 支持定制长度",
            use: "零售、餐饮、支付终端、商超收银",
            options: "无 BPA、切口平整、客户品牌外箱",
          },
          {
            name: "热敏标签纸卷",
            slug: "thermal-label-rolls",
            spec: "40x30mm / 50x30mm / 100x150mm",
            use: "物流面单、条码标签、仓储识别",
            options: "永久胶、可移胶、异形模切",
          },
          {
            name: "ATM 与自助终端纸",
            slug: "thermal-paper-rolls",
            spec: "80mm / 82.5mm 宽，高米数卷材",
            use: "银行、停车、排队机、自助终端",
            options: "高灵敏涂层、低纸粉、母卷分切",
          },
          {
            name: "定制印刷热敏纸",
            slug: "custom-printed-thermal-paper",
            spec: "LOGO、提示文字、背印、彩色管芯",
            use: "连锁品牌、经销商、OEM 长期供货",
            options: "1-4 色印刷、定制包装、出口托盘",
          },
        ],
      },
      wholesale: {
        eyebrow: "批发供货能力",
        title: "面向进口商、经销商和 OEM 客户的热敏纸卷",
        sub: "Noviwon 支持从样品确认到长期复购的热敏纸批发采购。客户可询价 POS 收银纸、热敏标签、ATM 纸卷、母卷分切、LOGO 印刷和品牌外箱。",
        points: [
          "常用尺寸：57mm、80mm、82.5mm 及定制长度",
          "材料选项：无 BPA、高灵敏涂层、低纸粉原纸",
          "包装选项：热缩包装、5 卷装、印刷彩盒、出口外箱",
          "外贸支持：多 SKU 拼单、质检照片、托盘包装、出货单证",
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
      faq: {
        eyebrow: "采购常见问题",
        title: "热敏纸买家通常会问的问题",
        items: [
          {
            question: "批量订单前可以提供热敏纸样品吗？",
            answer:
              "可以。客户可申请 POS 收银纸、热敏标签、ATM 纸卷或定制印刷纸卷样品，用于确认尺寸、涂层、管芯、显色效果和包装。",
          },
          {
            question: "是否支持定制印刷热敏纸卷？",
            answer:
              "支持。Noviwon 可提供 LOGO 印刷、提示文字、背印、定制外箱和客户品牌包装，适合经销商和连锁品牌客户。",
          },
          {
            question: "不同纸制品可以拼单出货吗？",
            answer:
              "可以。Noviwon Global 可协助多 SKU 整合、供应商沟通、质检记录、出口外箱、托盘和出货单证。",
          },
        ],
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
  id: "platform" | "materials" | "samples" | "systems" | "global" | "inquiry";
};

type Pillar = {
  desc: string;
  label: string;
  name: string;
};

type Sample = {
  name: string;
  options: string;
  spec: string;
  slug?: string;
  use: string;
};

type Faq = {
  answer: string;
  question: string;
};

const navItems: NavItem[] = [
  { id: "platform" },
  { id: "materials" },
  { id: "samples" },
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
  const samples = t("samples.items", { returnObjects: true }) as Sample[];
  const wholesalePoints = t("wholesale.points", { returnObjects: true }) as string[];
  const systemModules = t("systems.modules", { returnObjects: true }) as string[];
  const globalSteps = t("global.steps", { returnObjects: true }) as string[];
  const faqs = t("faq.items", { returnObjects: true }) as Faq[];
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@id": "https://noviwon.com/#organization",
        "@type": "Organization",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "sales",
            "email": "sales@noviwon.com",
          },
        ],
        "legalName": "Shenzhen Nuowei Advanced Materials Co., Ltd.",
        "logo": "https://noviwon.com/noviwon-mark.svg",
        "name": "Noviwon",
        "url": "https://noviwon.com",
      },
      {
        "@id": "https://noviwon.com/#website",
        "@type": "WebSite",
        "name": "Noviwon",
        "publisher": { "@id": "https://noviwon.com/#organization" },
        "url": "https://noviwon.com",
      },
      {
        "@type": "ItemList",
        "itemListElement": samples.map((sample, index) => ({
          "@type": "ListItem",
          "item": {
            "@type": "Product",
            "category": "Thermal paper rolls",
            "description": `${sample.spec}. ${sample.use}. ${sample.options}.`,
            "name": sample.name,
          },
          "position": index + 1,
        })),
        "name": "Thermal Paper Samples",
      },
      {
        "@type": "FAQPage",
        "mainEntity": faqs.map((faq) => ({
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

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <main className="min-h-screen bg-[#f7f8f5] text-slate-950">
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        type="application/ld+json"
      />
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

      <section id="samples" className="border-y border-slate-200 bg-white px-5 py-18 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
                {t("samples.eyebrow")}
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
                {t("samples.title")}
              </h2>
            </div>
            <p className="text-lg leading-8 text-slate-600">{t("samples.sub")}</p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {samples.map((sample, index) => {
              const rollSizes = [
                ["h-20 w-20", "h-14 w-14"],
                ["h-18 w-18", "h-24 w-24"],
                ["h-24 w-24", "h-16 w-16"],
                ["h-16 w-16", "h-16 w-28"],
              ];
              const [primarySize, secondarySize] = rollSizes[index] ?? rollSizes[0];

              return (
                <Link
                  className="group block border border-slate-200 bg-[#f7f8f5] p-5 transition hover:border-cyan-300 hover:bg-white"
                  href={sample.slug ? `/products/${sample.slug}` : "#inquiry"}
                  key={sample.name}
                >
                  <div className="relative h-44 overflow-hidden border border-slate-200 bg-white">
                    <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fafc_0%,#eef2f7_55%,#ecfeff_100%)]" />
                    <div className="absolute left-5 top-5 h-6 w-24 border border-slate-200 bg-white" />
                    <div
                      className={`absolute bottom-8 left-8 rounded-full border-[14px] border-slate-100 bg-white shadow-inner ${primarySize}`}
                    >
                      <div className="absolute inset-1 rounded-full border border-cyan-200" />
                      <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-slate-200" />
                    </div>
                    <div
                      className={`absolute bottom-8 right-8 rounded-full border-[10px] border-cyan-50 bg-white shadow-inner ${secondarySize}`}
                    >
                      <div className="absolute inset-1 rounded-full border border-slate-200" />
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 h-2 bg-slate-200" />
                  </div>

                  <h3 className="mt-5 text-xl font-black tracking-tight">{sample.name}</h3>
                  <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-600">
                    <p>
                      <span className="font-black text-slate-950">{t("samples.labels.spec")}: </span>
                      {sample.spec}
                    </p>
                    <p>
                      <span className="font-black text-slate-950">{t("samples.labels.use")}: </span>
                      {sample.use}
                    </p>
                    <p className="border-t border-slate-200 pt-3 font-semibold text-slate-800">
                      {sample.options}
                    </p>
                    <span className="inline-flex items-center gap-2 pt-1 text-sm font-black text-cyan-700">
                      View details
                      <ArrowRight size={15} />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-5 py-18 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              {t("wholesale.eyebrow")}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              {t("wholesale.title")}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{t("wholesale.sub")}</p>
            <a
              className="mt-7 inline-flex h-12 items-center justify-center gap-2 bg-slate-950 px-5 text-sm font-black text-white transition hover:bg-slate-800"
              href="#inquiry"
            >
              {t("hero.primary")}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-3">
            {wholesalePoints.map((point, index) => (
              <div className="flex items-start gap-4 border border-slate-200 bg-white p-5" key={point}>
                <div className="grid h-9 w-9 shrink-0 place-items-center bg-cyan-700 text-sm font-black text-white">
                  {index + 1}
                </div>
                <p className="text-base font-bold leading-7 text-slate-800">{point}</p>
              </div>
            ))}
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

      <section className="border-y border-slate-200 bg-[#f7f8f5] px-5 py-18 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">
              {t("faq.eyebrow")}
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
              {t("faq.title")}
            </h2>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {faqs.map((faq) => (
              <article className="border border-slate-200 bg-white p-6" key={faq.question}>
                <h3 className="text-xl font-black leading-7 tracking-tight">{faq.question}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{faq.answer}</p>
              </article>
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
