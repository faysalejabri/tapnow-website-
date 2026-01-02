import React, { useState } from 'react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';
import { ViewState, Language } from '../types';

interface NavbarProps {
  currentView: ViewState;
  onNavigate: (view: ViewState) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  onOrder?: (planName: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, language, setLanguage, onOrder }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const [isDesktopShopOpen, setIsDesktopShopOpen] = useState(false);
  const [isMobileShopOpen, setIsMobileShopOpen] = useState(false);
  
  const content = {
    EN: {
      home: 'Home',
      shop: 'Shop',
      howItWorks: 'How it Works',
      contact: 'Contact',
      cta: 'Get your Card',
      langLabel: 'Language',
      plans: [
        { name: "Tapnow Pro Standard", price: "290 MAD", image: "https://tapnow.ma/img/card-tapnow.svg" },
        { name: "Tapnow Pro Gold", price: "499 MAD", image: "https://tapnow.ma/img/card-tapnow-gold-r.svg" },
        { name: "Tapnow Pro Custom", price: "390 MAD", image: "https://tapnow.ma/img/tapnow-your.svg" },
        { name: "Tapnow Reviews", price: "190 MAD", image: "https://tapnow.ma/img/review-card.svg" }
      ]
    },
    FR: {
      home: 'Accueil',
      shop: 'Boutique',
      howItWorks: 'Comment ça marche',
      contact: 'Contact',
      cta: 'Acheter ma carte',
      langLabel: 'Langue',
      plans: [
        { name: "Tapnow Pro Standard", price: "290 MAD", image: "https://tapnow.ma/img/card-tapnow.svg" },
        { name: "Tapnow Pro Gold", price: "499 MAD", image: "https://tapnow.ma/img/card-tapnow-gold-r.svg" },
        { name: "Tapnow Pro Personnalisée", price: "390 MAD", image: "https://tapnow.ma/img/tapnow-your.svg" },
        { name: "Tapnow Reviews", price: "190 MAD", image: "https://tapnow.ma/img/review-card.svg" }
      ]
    },
    AR: {
      home: 'الرئيسية',
      shop: 'المتجر',
      howItWorks: 'كيف يعمل',
      contact: 'اتصل بنا',
      cta: 'احصل على بطاقتك',
      langLabel: 'اللغة',
      plans: [
        { name: "Tapnow Pro القياسية", price: "290 MAD", image: "https://tapnow.ma/img/card-tapnow.svg" },
        { name: "Tapnow Pro الذهبية", price: "499 MAD", image: "https://tapnow.ma/img/card-tapnow-gold-r.svg" },
        { name: "Tapnow Pro المخصصة", price: "390 MAD", image: "https://tapnow.ma/img/tapnow-your.svg" },
        { name: "Tapnow Reviews", price: "190 MAD", image: "https://tapnow.ma/img/review-card.svg" }
      ]
    }
  };

  const t = content[language];

  const handleNavClick = (view: ViewState, sectionId?: string) => {
    onNavigate(view);
    setIsMenuOpen(false);

    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handlePlanClick = (planName: string) => {
    setIsDesktopShopOpen(false);
    setIsMobileShopOpen(false);
    setIsMenuOpen(false);
    if (onOrder) {
        onOrder(planName);
    }
  };

  const navItems = [
    { id: 'home', label: t.home, view: 'landing' as ViewState },
    { id: 'shop', label: t.shop, view: 'shop' as ViewState, hasDropdown: true },
    { id: 'howItWorks', label: t.howItWorks, view: 'landing' as ViewState, sectionId: 'how-it-works', hasDropdown: true },
    { id: 'contact', label: t.contact, view: 'landing' as ViewState },
  ];

  const languages: { code: Language; label: string }[] = [
    { code: 'EN', label: 'English' },
    { code: 'FR', label: 'Français' },
    { code: 'AR', label: 'العربية' },
  ];

  const handleLangSelect = (code: Language) => {
    setLanguage(code);
    setIsLangOpen(false);
  };

  return (
    <>
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 transition-all duration-300">
        <nav className="relative w-full max-w-[1000px] bg-[#FFFFFF]/30 backdrop-blur-2xl border border-white/10 rounded-full p-1.5 flex items-center justify-between shadow-[0_12px_40px_-8px_rgba(37,99,235,0.25)] transition-all overflow-hidden sm:overflow-visible">
          
          <div className="md:hidden w-10 shrink-0"></div>

          {/* Logo Section - Centered on mobile via absolute positioning */}
          <div 
            className="flex items-center cursor-pointer group shrink-0 px-2 md:static absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0"
            onClick={() => handleNavClick('landing')}
          >
            <div className="relative h-7 sm:h-8 w-auto">
              <img 
                src="https://tapnow.ma/img/Logo-Black.svg" 
                alt="Tapnow Logo" 
                className="h-full w-auto transition-opacity duration-300 ease-in-out opacity-100 md:group-hover:opacity-0"
              />
              <img 
                src="https://tapnow.ma/img/Logo-Bleu.svg" 
                alt="Tapnow Logo Hover" 
                className="absolute inset-0 h-full w-auto transition-opacity duration-300 ease-in-out opacity-0 hidden md:block md:group-hover:opacity-100"
              />
            </div>
          </div>

          <div className="hidden md:flex items-center gap-1.5 lg:gap-2 justify-center flex-1 px-4">
            {navItems.map((item) => (
              <div 
                key={item.id} 
                className="relative"
                onMouseEnter={() => {
                    if (item.id === 'shop') setIsDesktopShopOpen(true);
                }}
                onMouseLeave={() => {
                    if (item.id === 'shop') setIsDesktopShopOpen(false);
                }}
              >
                <button
                  onClick={() => {
                    if (item.id === 'contact') {
                        window.open('https://wa.me/212672481803', '_blank');
                    } else {
                        handleNavClick(item.view, item.sectionId);
                    }
                  }}
                  className={`px-3 lg:px-4 py-2 rounded-full text-sm font-bold transition-all flex items-center gap-1.5 backdrop-blur-md whitespace-nowrap ${
                    currentView === item.view && !item.sectionId && item.view !== 'landing'
                      ? 'bg-black text-white'
                      : 'bg-white/50 text-slate-900 hover:bg-white/70 hover:text-[#006aff]'
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown size={14} className={`opacity-50 mt-0.5 transition-transform shrink-0 ${item.id === 'shop' && isDesktopShopOpen ? 'rotate-180' : ''}`} />
                  )}
                </button>

                {item.id === 'shop' && isDesktopShopOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-80 pt-4 z-50 animate-in fade-in zoom-in-95 duration-200">
                        <div className="bg-[#1a1a1a]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl overflow-hidden py-2 flex flex-col">
                            {t.plans.map((plan, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => handlePlanClick(plan.name)}
                                    className="px-4 py-4 flex items-center justify-between hover:bg-white/10 transition-colors border-b border-white/5 last:border-0 group text-start w-full"
                                >
                                    <div>
                                        <div className="text-white font-bold text-sm group-hover:text-[#006aff] transition-colors">{plan.name}</div>
                                        <div className="text-slate-400 text-xs mt-1 font-mono">{plan.price}</div>
                                    </div>
                                    <img 
                                    src={plan.image} 
                                    alt={plan.name} 
                                    className="w-20 h-12 rounded-lg object-contain ml-4 bg-white/5 border border-white/10" 
                                    />
                                </button>
                            ))}
                        </div>
                    </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <div className="relative hidden md:block">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-slate-900 bg-white/50 hover:bg-white/70 hover:text-[#006aff] transition-colors px-3 py-2 rounded-full backdrop-blur-md whitespace-nowrap"
              >
                <Globe size={16} />
                <span className="text-xs font-bold">{language}</span>
              </button>

              {isLangOpen && (
                <div className={`absolute top-full mt-3 w-32 bg-[#1a1a1a] border border-white/10 rounded-xl shadow-xl overflow-hidden py-1 flex flex-col z-50 ${language === 'AR' ? 'start-0' : 'end-0'}`}>
                   {languages.map((lang) => (
                     <button
                        key={lang.code}
                        onClick={() => handleLangSelect(lang.code)}
                        className={`px-4 py-2 text-start text-sm hover:bg-white/10 transition-colors ${language === lang.code ? 'text-white font-semibold' : 'text-slate-400'}`}
                     >
                       {lang.label}
                     </button>
                   ))}
                </div>
              )}
            </div>

            <div className="h-6 w-px bg-white/10 hidden md:block"></div>

            <button 
              onClick={() => handleNavClick('landing', 'pricing')}
              className="hidden md:block bg-white text-black px-4 py-2 rounded-full text-sm font-bold hover:bg-slate-200 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.1)] whitespace-nowrap"
            >
              {t.cta}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2.5 text-[#94a3b8] bg-white/10 hover:bg-white/20 rounded-full transition-colors backdrop-blur-md z-50 md:hidden"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed top-24 left-0 right-0 z-40 px-4 flex justify-center md:hidden">
          <div className="w-full max-w-[850px] bg-[#1a1a1a]/80 backdrop-blur-2xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-200">
            {navItems.map((item) => (
              <div key={item.id}>
                <button
                    onClick={() => {
                        if (item.id === 'shop') {
                             setIsMobileShopOpen(!isMobileShopOpen);
                        } else if (item.id === 'contact') {
                             window.open('https://wa.me/212672481803', '_blank');
                        } else {
                             handleNavClick(item.view, item.sectionId);
                             setIsMenuOpen(false);
                        }
                    }}
                    className={`w-full flex items-center justify-between px-5 py-4 rounded-xl text-base font-medium transition-colors ${
                    currentView === item.view && !item.sectionId && item.view !== 'landing'
                        ? 'bg-white/40 text-white'
                        : 'text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                >
                    {item.label}
                    {item.hasDropdown && (
                        <ChevronDown size={16} className={`opacity-50 transition-transform ${item.id === 'shop' && isMobileShopOpen ? 'rotate-180' : ''}`} />
                    )}
                </button>
                {item.id === 'shop' && isMobileShopOpen && (
                    <div className="px-4 pb-2">
                        {t.plans.map((plan, idx) => (
                            <button
                                key={idx}
                                onClick={() => handlePlanClick(plan.name)}
                                className="w-full flex items-center justify-between px-4 py-3 rounded-lg hover:bg-white/5 text-slate-400 hover:text-white transition-colors border-l-2 border-white/10 ml-2"
                            >
                                <div className="text-start">
                                    <span className="text-sm block text-slate-200 font-semibold">{plan.name}</span>
                                    <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-white inline-block mt-1">{plan.price}</span>
                                </div>
                                <img 
                                  src={plan.image} 
                                  alt={plan.name} 
                                  className="w-16 h-10 rounded-lg object-contain ml-2 bg-white/5 border border-white/10" 
                                />
                            </button>
                        ))}
                    </div>
                )}
              </div>
            ))}
            
            <div className="border-t border-white/10 mt-2 pt-2 px-5 py-3">
                <div className="text-xs font-semibold text-slate-500 uppercase mb-3">{t.langLabel}</div>
                <div className="flex gap-2">
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            onClick={() => handleLangSelect(lang.code)}
                            className={`flex-1 py-2 rounded-lg text-sm font-medium border ${
                                language === lang.code 
                                ? 'bg-white/10 text-white border-white/20' 
                                : 'text-slate-400 border-transparent hover:bg-white/5'
                            }`}
                        >
                            {lang.code}
                        </button>
                    ))}
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;