import React, { useState, useEffect } from 'react';
import { Smartphone, Zap, Leaf, Shield, Check, Star } from 'lucide-react';
import { ViewState, Language } from '../types';
import { motion, Variants } from 'framer-motion';

interface HeroProps {
  onNavigate: (view: ViewState) => void;
  language: Language;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export const Hero: React.FC<HeroProps> = ({ onNavigate, language }) => {
  const [isMobile, setIsMobile] = useState(false);
  const SplineViewer = 'spline-viewer' as any;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const content = {
    EN: {
      titleStart: "The business card,",
      titleSpan: "reinvented.",
      subtitle: "Share your contact info, social media, and portfolio with a single tap. No apps required.",
      ctaBuy: "Buy Tapnow",
      cardName: "Alex Johnson"
    },
    FR: {
      titleStart: "La carte de visite,",
      titleSpan: "réinventée.",
      subtitle: "Partagez vos coordonnées, réseaux sociaux et portfolio d'un simple geste. Aucune application requise.",
      ctaBuy: "Acheter Tapnow",
      cardName: "Alex Dupont"
    },
    AR: {
      titleStart: "بطاقة العمل،",
      titleSpan: "بحلة جديدة.",
      subtitle: "شارك معلومات الاتصال الخاصة بك، ووسائل التواصل الاجتماعي، ومعرض أعمالك بنقرة واحدة. لا حاجة لتطبيقات.",
      ctaBuy: "اشترِ Tapnow",
      cardName: "أحمد علي"
    }
  };

  const t = content[language];

  const handleBuyClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
        pricingSection.scrollIntoView({ behavior: 'smooth' });
    } else {
        onNavigate('landing');
        setTimeout(() => {
            document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    }
  };

  return (
    <div className="bg-white">
      <div className="relative pt-36 pb-20 sm:pt-48 sm:pb-24 overflow-hidden">
        <div className="flex flex-col items-center text-center max-w-[90rem] mx-auto px-4 sm:px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center w-full"
          >
            <motion.h1 variants={fadeInUp} className="text-5xl sm:text-7xl md:text-8xl font-semibold tracking-tight text-slate-900 mb-6 max-w-4xl relative z-10">
              {t.titleStart} <br className="hidden sm:block" />
              <span className="text-slate-400">{t.titleSpan}</span>
            </motion.h1>
            
            <motion.p variants={fadeInUp} className="text-xl sm:text-2xl text-slate-500 max-w-2xl mb-2 font-medium leading-relaxed relative z-10">
              {t.subtitle}
            </motion.p>
            
            {!isMobile && (
                <motion.div variants={fadeInUp} className="hidden sm:flex w-full max-w-4xl h-[650px] mt-8 mb-20 relative justify-center items-center z-0 cursor-grab active:cursor-grabbing">
                     <SplineViewer 
                        url="https://prod.spline.design/qC8fmiDHM7aaI8gB/scene.splinecode"
                        style={{ width: '100%', height: '100%' }}
                     ></SplineViewer>
                     <div className="absolute bottom-0 right-0 w-48 h-16 bg-white z-[100] pointer-events-none"></div>
                </motion.div>
            )}

            {isMobile && (
                <motion.img 
                    variants={fadeInUp}
                    src="https://www.tapnow.ma/img/card-tapnow.svg" 
                    alt="Tapnow Card" 
                    className="sm:hidden w-[85%] max-w-[380px] drop-shadow-[0_12px_40px_rgba(37,99,235,0.25)] mt-20 mb-32 relative z-0 bg-transparent"
                />
            )}
            
            <motion.div variants={fadeInUp} className="flex justify-center w-full px-4 relative z-20 -mt-16 sm:-mt-24">
              <button
                onClick={handleBuyClick}
                className="rounded-full bg-black/90 backdrop-blur-xl border border-white/20 px-8 py-3.5 sm:px-10 sm:py-4 text-white font-bold text-base sm:text-lg hover:bg-black hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] hover:shadow-[0_0_60px_-10px_rgba(0,0,0,0.4)]"
              >
                {t.ctaBuy}
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const Features: React.FC<{language: Language}> = ({language}) => {
    const content = {
        EN: {
            heading: "Everything you need.",
            headingSpan: "Nothing you don't.",
            instant: "Instant Sharing",
            instantDesc: "No app required. Just tap your card to share your profile instantly.",
            secure: "Secure & Private",
            secureDesc: "Bank-level encryption. You control exactly what information is shared.",
            eco: "Eco-Friendly",
            ecoDesc: "One Tapnow replaces thousands of paper business cards. Save trees.",
            videoTitle: "See it in action.",
            videoSubtitle: "Tap, share, and connect in seconds.",
            proHeading: "Designed to impress.",
            proDesc: "Crafted from premium materials including matte soft-touch plastic, sustainable bamboo, and laser-etched stainless steel.",
            materials: ["Matte Black", "Bamboo", "Metal"]
        },
        FR: {
            heading: "Tout ce dont vous avez besoin.",
            headingSpan: "Rien de superflu.",
            instant: "Partage Instantané",
            instantDesc: "Aucune application requise. Tapez simplement votre carte pour partager.",
            secure: "Sécurisé et Privé",
            secureDesc: "Chiffrement bancaire. Vous contrôlez exactement les informations partagées.",
            eco: "Écologique",
            ecoDesc: "Une Tapnow remplace des milliers de cartes en papier. Sauvez des arbres.",
            videoTitle: "Voir en action.",
            videoSubtitle: "Tapez, partagez et connectez-vous en quelques secondes.",
            proHeading: "Conçu pour impressionner.",
            proDesc: "Fabriqué à partir de matériaux haut de gamme : plastique mat doux au toucher, bambou durable et acier inoxydable gravé au laser.",
            materials: ["Noir Mat", "Bambou", "Métal"]
        },
        AR: {
            heading: "كل ما تحتاجه.",
            headingSpan: "لا شيء لا تحتاجه.",
            instant: "مشاركة فورية",
            instantDesc: "لا يلزم تطبيق. فقط اضغط ببطاقتك لمشاركة ملفك الشخصي على الفور.",
            secure: "آمن وخاص",
            secureDesc: "تشفير على مستوى البنوك. أنت تتحكم تماماً في المعلومات التي يتم مشاركتها.",
            eco: "صديق للبيئة",
            ecoDesc: "بطاقة Tapnow واحدة تغنيك عن آلاف البطاقات الورقية. وفر الأشجار.",
            videoTitle: "شاهد كيف يعمل.",
            videoSubtitle: "اضغط، شارك، وتواصل في ثوانٍ.",
            proHeading: "صممت لتبهر.",
            proDesc: "مصنوعة من مواد فاخرة بما في ذلك البلاستيك غير اللامع ناعم الملمس، والخيزران المستدام، والفولاذ المقاوم للصدأ المحفور بالليزر.",
            materials: ["أسود غير لامع", "خيزران", "معدن"]
        }
    };
    const t = content[language];

    return (
        <section className="bg-slate-50 py-24 sm:py-32 relative overflow-hidden">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl mx-auto">
                 <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
                 <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/40 rounded-full blur-[100px] mix-blend-multiply"></div>
             </div>

             <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-20 max-w-3xl"
                >
                     <h2 className="text-4xl sm:text-6xl font-semibold text-slate-900 tracking-tight mb-6">
                        {t.heading}<br/>
                        <span className="text-slate-400">{t.headingSpan}</span>
                     </h2>
                </motion.div>
                
                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
                >
                    <motion.div variants={fadeInUp} className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-10 shadow-lg flex flex-col h-full hover:bg-white/50 transition-colors duration-300">
                        <div className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center mb-8">
                            <Zap className="text-black" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t.instant}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            {t.instantDesc}
                        </p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-10 shadow-lg flex flex-col h-full hover:bg-white/50 transition-colors duration-300">
                        <div className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center mb-8">
                             <Shield className="text-black" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t.secure}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">{t.secureDesc}</p>
                    </motion.div>

                    <motion.div variants={fadeInUp} className="bg-white/40 backdrop-blur-xl border border-white/40 rounded-2xl p-10 shadow-lg flex flex-col h-full hover:bg-white/50 transition-colors duration-300">
                         <div className="w-14 h-14 bg-black/5 rounded-full flex items-center justify-center mb-8">
                             <Leaf className="text-black" size={28} />
                        </div>
                        <h3 className="text-2xl font-semibold text-slate-900 mb-4">{t.eco}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed">{t.ecoDesc}</p>
                    </motion.div>
                </motion.div>

                <motion.div 
                    id="how-it-works"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="mb-24 flex flex-col items-center text-center"
                >
                    <h2 className="text-3xl sm:text-5xl font-semibold text-slate-900 tracking-tight mb-6">{t.videoTitle}</h2>
                    <p className="text-xl text-slate-500 mb-10 max-w-2xl">{t.videoSubtitle}</p>
                    
                    <div className="w-full max-w-5xl mx-auto p-3 sm:p-4 bg-white/30 backdrop-blur-xl rounded-2xl border border-white/50 shadow-xl">
                        <div className="relative w-full rounded-xl overflow-hidden shadow-inner bg-black aspect-video group cursor-pointer">
                            <iframe 
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/LXb3EKWsInQ?si=generic_demo" 
                                title="Tapnow Demo" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </motion.div>

                <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeInUp}
                    className="rounded-2xl bg-black py-24 px-6 sm:px-12 text-center overflow-hidden relative shadow-2xl"
                >
                    <div className="relative z-10 max-w-4xl mx-auto">
                        <h2 className="text-4xl sm:text-6xl font-semibold text-white tracking-tight mb-8">{t.proHeading}</h2>
                        <p className="text-slate-400 text-xl sm:text-2xl mb-12 font-light">
                            {t.proDesc}
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            {t.materials.map(m => (
                                <span key={m} className="px-6 py-3 rounded-full bg-white/10 backdrop-blur text-white border border-white/20">{m}</span>
                            ))}
                        </div>
                    </div>
                     <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none"></div>
                </motion.div>
             </div>
        </section>
    );
};