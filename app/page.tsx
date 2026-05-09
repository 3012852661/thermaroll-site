"use client";

import React, { useState, useEffect } from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { 
  Menu, X, ArrowRight, Send, Loader2, CheckCircle2, MessageCircle, Link2, Phone, Mail
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- i18next 插件配置 ---
const resources = {
  en: {
    translation: {
      nav: { products: "Products", factory: "Factory", inquiry: "Inquiry" },
      hero: {
        tag: "EST. 2011 / PREMIUM QUALITY",
        title: "The Art of\nTactile Paper",
        sub: "Providing high-quality, eco-friendly paper solutions. From specialty paper wholesale to bespoke packaging.",
        btn: "Explore Collection"
      },
      stats: { area: "Facility Area", output: "Annual Output", export: "Export Countries" },
      factory: {
        title: "Forest to Finish",
        desc: "Equipped with fully automated Heidelberg presses, we ensure every step—from pulp sourcing to final coating—meets global eco-standards.",
        features: ["FSC Certified", "High-Precision", "Eco-Ink"]
      },
      form: {
        title: "Request Quote",
        sub: "Our team will respond within 24 hours.",
        name: "Name",
        email: "Email",
        msg: "Message",
        submit: "Send Inquiry",
        sending: "Sending...",
        success: "Sent successfully!"
      },
      footer: {
        address: "B2, Industrial Park, Dongguan, China",
        rights: "© 2026 PAPER.LAB ARTISAN. ALL RIGHTS RESERVED."
      }
    }
  },
  zh: {
    translation: {
      nav: { products: "产品中心", factory: "生产实力", inquiry: "在线询盘" },
      hero: {
        tag: "始于 2011 / 匠心品质",
        title: "纸张的\n触感艺术",
        sub: "提供高品质、环保的纸张解决方案。从特种纸批发到定制化包装，赋予品牌触手可及的温度。",
        btn: "查看系列"
      },
      stats: { area: "工厂面积", output: "年产值", export: "出口国家" },
      factory: {
        title: "从森林到成品",
        desc: "我们拥有全自动海德堡印刷机及后道加工设备，确保从原纸采购到印刷加工的每一个环节都符合国际环保标准。",
        features: ["FSC 认证原纸", "高精度模切", "环保大豆油墨"]
      },
      form: {
        title: "获取批发报价",
        sub: "请填写您的需求，我们的销售团队将在 24 小时内联系您。",
        name: "姓名",
        email: "邮箱",
        msg: "需求详情",
        submit: "提交询盘",
        sending: "发送中...",
        success: "询盘已成功发送！"
      },
      footer: {
        address: "地址：中国广东省东莞市工业园区 B2 栋",
        rights: "© 2026 PAPER.LAB 艺术纸业版权所有"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

// --- 子组件：移动端全屏菜单 ---
type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  navItems: { id: string }[];
};

const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  const { t, i18n } = useTranslation();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
          className="fixed inset-0 bg-[#FDFCF8] z-[100] flex flex-col p-8 lg:hidden"
        >
          <div className="flex justify-between items-center mb-16">
            <span className="font-bold text-xl tracking-tighter">PAPER.LAB</span>
            <button onClick={onClose} className="p-2"><X size={32} /></button>
          </div>
          <nav className="flex flex-col space-y-8 text-4xl font-serif italic">
            {navItems.map(item => (
              <a key={item.id} href={`#${item.id}`} onClick={onClose} className="border-b border-gray-100 pb-4">
                {t(`nav.${item.id}`)}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex gap-4">
            <button 
              onClick={() => { i18n.changeLanguage('zh'); onClose(); }}
              className={`flex-1 py-4 text-xs tracking-widest uppercase border ${i18n.language.startsWith('zh') ? 'bg-black text-white' : 'border-gray-200'}`}
            >中文</button>
            <button 
              onClick={() => { i18n.changeLanguage('en'); onClose(); }}
              className={`flex-1 py-4 text-xs tracking-widest uppercase border ${i18n.language.startsWith('en') ? 'bg-black text-white' : 'border-gray-200'}`}
            >English</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// --- 主页面组件 ---
export default function PaperTradeSite() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('IDLE');

  const navItems = [{id: 'products'}, {id: 'factory'}, {id: 'inquiry'}];

  // 响应式滚动锁：打开菜单时静止背景滚动
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-[#FDFCF8] text-[#2C2C2C] font-serif scroll-smooth selection:bg-gray-200">
      
      {/* 移动端菜单组件 */}
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navItems={navItems} />

      {/* 导航栏 (响应式：PC+移动) */}
      <nav className="flex justify-between items-center px-6 md:px-12 py-8 sticky top-0 bg-[#FDFCF8]/90 backdrop-blur-md z-50 border-b border-gray-50">
        <div className="text-2xl font-bold tracking-tighter cursor-pointer" onClick={() => window.scrollTo({top:0, behavior:'smooth'})}>
          PAPER.LAB
        </div>
        
        {/* 桌面端导航 (PC ONLY) */}
        <div className="hidden lg:flex items-center space-x-12 text-[10px] uppercase tracking-[0.2em] font-sans font-bold">
          {navItems.map(item => (
            <a key={item.id} href={`#${item.id}`} className="hover:opacity-40 transition-opacity whitespace-nowrap">
              {t(`nav.${item.id}`)}
            </a>
          ))}
          <button 
            onClick={() => i18n.changeLanguage(i18n.language.startsWith('zh') ? 'en' : 'zh')}
            className="px-5 py-2 bg-black text-white rounded-full hover:scale-105 transition-transform"
          >
            {i18n.language.startsWith('zh') ? 'EN' : '中文'}
          </button>
        </div>

        {/* 移动端汉堡按钮 (MOBILE ONLY) */}
        <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(true)}>
          <Menu size={28} />
        </button>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 py-16 lg:py-32 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
          <div className="inline-block px-3 py-1 border border-gray-200 rounded-full text-[9px] uppercase tracking-[0.3em] font-sans text-gray-400 font-bold">
            {t('hero.tag')}
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl leading-[1.1] font-medium tracking-tight whitespace-pre-line">
            {t('hero.title')}
          </h1>
          <p className="text-lg text-gray-400 font-sans font-light leading-relaxed max-w-sm italic">
            {t('hero.sub')}
          </p>
          <a href="#products" className="group flex items-center space-x-4 text-lg border-b border-gray-300 w-fit pb-2 hover:border-black transition-all">
            <span>{t('hero.btn')}</span>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" />
          </a>
        </motion.div>
        <div className="relative aspect-[4/5] bg-gray-50 overflow-hidden shadow-2xl rounded-sm">
          <img 
            src="https://images.unsplash.com/photo-1516533075015-a3838414c3cb?q=80&w=1200" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
            alt="Paper Texture"
          />
        </div>
      </header>

      {/* 数据看板 (响应式网格) */}
      <section className="bg-[#2C2C2C] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-light">12,000 m²</div>
            <div className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-sans font-bold">{t('stats.area')}</div>
          </div>
          <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
            <div className="text-4xl lg:text-5xl font-light">5,000w+</div>
            <div className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-sans font-bold">{t('stats.output')}</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl lg:text-5xl font-light">45+</div>
            <div className="text-[9px] uppercase tracking-[0.4em] text-white/30 font-sans font-bold">{t('stats.export')}</div>
          </div>
        </div>
      </section>

      {/* 工厂展示 (移动端堆叠，PC端并排) */}
      <section id="factory" className="py-24 px-6 md:px-12 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="grid grid-cols-2 gap-4 order-2 lg:order-1">
          <img src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=600" className="aspect-[3/4] object-cover rounded-sm" />
          <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=600" className="aspect-[3/4] object-cover rounded-sm mt-12" />
        </div>
        <div className="space-y-8 order-1 lg:order-2">
          <h2 className="text-[10px] uppercase tracking-[0.4em] text-gray-300 font-sans font-bold uppercase">{t('nav.factory')}</h2>
          <h3 className="text-4xl md:text-5xl italic font-light leading-tight">{t('factory.title')}</h3>
          <p className="text-gray-500 font-sans leading-relaxed text-lg">{t('factory.desc')}</p>
          <div className="flex flex-wrap gap-4 pt-4">
            {(t('factory.features', { returnObjects: true }) as string[]).map((f: string) => (
              <span key={f} className="px-4 py-2 border border-gray-100 bg-white text-[9px] font-sans font-bold uppercase tracking-widest">{f}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 询盘表单 (高度兼容移动端输入) */}
      <section id="inquiry" className="py-24 px-6 md:px-12 bg-[#F9F8F4]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl mb-6">{t('form.title')}</h2>
          <p className="text-gray-400 font-sans mb-16">{t('form.sub')}</p>
          
          <AnimatePresence mode="wait">
            {formStatus === 'SUCCESS' ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white p-12 shadow-xl rounded-sm space-y-6">
                <CheckCircle2 size={48} className="mx-auto text-green-800" />
                <p className="text-xl italic">{t('form.success')}</p>
                <button onClick={() => setFormStatus('IDLE')} className="text-[10px] uppercase tracking-widest border-b border-black pb-1">Send Another</button>
              </motion.div>
            ) : (
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left" onSubmit={(e) => { e.preventDefault(); setFormStatus('SENDING'); setTimeout(()=>setFormStatus('SUCCESS'), 1500); }}>
                <div className="space-y-2 border-b border-gray-200 focus-within:border-black transition-colors">
                  <label className="text-[9px] uppercase tracking-widest font-sans text-gray-400 font-bold">{t('form.name')}</label>
                  <input required className="w-full bg-transparent py-3 outline-none font-sans" />
                </div>
                <div className="space-y-2 border-b border-gray-200 focus-within:border-black transition-colors">
                  <label className="text-[9px] uppercase tracking-widest font-sans text-gray-400 font-bold">{t('form.email')}</label>
                  <input required type="email" className="w-full bg-transparent py-3 outline-none font-sans" />
                </div>
                <div className="md:col-span-2 space-y-2 border-b border-gray-200 focus-within:border-black transition-colors">
                  <label className="text-[9px] uppercase tracking-widest font-sans text-gray-400 font-bold">{t('form.msg')}</label>
                  <textarea required rows={3} className="w-full bg-transparent py-3 outline-none font-sans resize-none" />
                </div>
                <button className="md:col-span-2 w-full bg-[#2C2C2C] text-white py-5 rounded-full font-sans text-[10px] tracking-[0.4em] uppercase flex items-center justify-center space-x-3 shadow-lg hover:bg-black transition-all">
                  {formStatus === 'SENDING' ? <Loader2 className="animate-spin" /> : <Send size={14} />}
                  <span>{formStatus === 'SENDING' ? t('form.sending') : t('form.submit')}</span>
                </button>
              </form>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="py-20 px-6 md:px-12 bg-white border-t border-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-2xl font-bold tracking-tighter">PAPER.LAB</div>
          <div className="flex flex-col items-center md:items-end space-y-4 font-sans text-[10px] text-gray-400 uppercase tracking-widest">
            <div className="flex space-x-6">
              <a href="mailto:sales@paperlab.com" className="hover:text-black transition-colors flex items-center gap-2"><Mail size={14}/> EMAIL</a>
              <a href="tel:+86123456789" className="hover:text-black transition-colors flex items-center gap-2"><Phone size={14}/> WHATSAPP</a>
            </div>
            <p>{t('footer.address')}</p>
            <p>{t('footer.rights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}