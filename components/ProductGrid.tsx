import React, { useState, useEffect } from 'react';
import { Product, Language } from '../types';
import { Check, Star } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const productImages = {
    standard: 'https://tapnow.ma/img/card-tapnow.svg',
    gold: 'https://tapnow.ma/img/card-tapnow-gold-r.svg',
    custom: 'https://tapnow.ma/img/tapnow-your.svg',
    reviews: 'https://tapnow.ma/img/review-card.svg'
};

const versoImages: Record<string, string> = {
    'Tapnow Pro Standard': 'https://tapnow.ma/img/tapnow-qr.svg',
    'Tapnow Pro Gold': 'https://tapnow.ma/img/card-tapnow-gold-v.svg',
    'Tapnow Pro Custom': 'https://tapnow.ma/img/tapnow-qr.svg',
    'Tapnow Reviews': 'https://tapnow.ma/img/tapnow-review-qr.svg'
};

const mainProducts: Product[] = [
  {
    id: '1',
    name: 'Tapnow Pro Standard',
    price: 290,
    oldPrice: 390,
    image: productImages.standard,
    features: [
        'Unlimited Sharing & Collection',
        'Edit details anytime',
        'Multilingual Profile'
    ]
  },
  {
    id: 'gold-pro',
    name: 'Tapnow Pro Gold',
    price: 499,
    oldPrice: 599,
    image: productImages.gold,
    badge: 'Premium',
    features: [
        'Premium Gold Finish',
        'Laser-Engraved',
        'Unlimited Sharing & Collection',
        'Full Customization',
        'Multilingual Profile'
    ]
  },
  {
    id: '2',
    name: 'Tapnow Pro Custom',
    price: 390,
    oldPrice: 490,
    image: productImages.custom,
    badge: 'Popular',
    features: [
        'Full Customization',
        'Unlimited Sharing & Collection',
        'Multilingual Profile',
        'Edit details anytime'
    ]
  }
];

const reviewsProduct: Product = {
  id: '3',
  name: 'Tapnow Reviews',
  price: 190,
  oldPrice: 290,
  image: productImages.reviews,
  features: [
      'Instant Review Collection',
      'Unlimited Sharing',
      'Review Platforms Compatible',
      'Full Customization'
  ]
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const cardRotationVariants: Variants = {
  initial: { rotateY: 0 },
  hovered: { rotateY: 180 }
};

interface ProductGridProps {
    language: Language;
    onOrderClick?: (productName: string) => void;
    id?: string;
    isShopPage?: boolean;
}

export const ProductGrid: React.FC<ProductGridProps> = ({language, onOrderClick, id, isShopPage}) => {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const content = {
      EN: {
          title: "Cartes de visite digitales Tapnow",
          subtitle: "Designed to match your aesthetic.",
          shopH1: "Cartes de visite digitales Tapnow",
          shopText: "The Tapnow shop offers digital business card solutions adapted to modern networking needs. Each card allows access to a customizable professional profile, ready to be shared instantly.",
          addToBag: "Order Now",
          reviewsTitle: "Google & Business Reviews",
          reviewsSubtitle: "Boost your online presence instantly.",
          features: { 'Laser-Engraved': 'Laser-Engraved', 'Premium Gold Finish': 'Premium Gold Finish', 'Unlimited Sharing & Collection': 'Unlimited Sharing & Collection', 'Edit details anytime': 'Edit details anytime', 'Multilingual Profile': 'Multilingual Profile', 'Full Customization': 'Full Customization', 'Unlimited Sharing': 'Unlimited Sharing', 'Review Platforms Compatible': 'Compatible with all review platforms', 'Instant Review Collection': 'Instant Review Collection' }
      },
      FR: {
          title: "Choisissez votre carte.",
          subtitle: "Conçu pour correspondre à votre esthétique.",
          shopH1: "Cartes de visite digitales Tapnow",
          shopText: "La boutique Tapnow propose des solutions de cartes de visite digitales adaptées aux besoins du networking moderne. Chaque carte permet d’accéder à un profil professionnel personnalisable, prêt à être partagé instantanément.",
          addToBag: "Commander",
          reviewsTitle: "Avis Google & Business",
          reviewsSubtitle: "Boostez votre présence en ligne instantanément.",
          features: { 'Laser-Engraved': 'Gravure laser', 'Premium Gold Finish': 'Finition Or Premium', 'Unlimited Sharing & Collection': 'Partage & Collecte illimitée', 'Edit details anytime': 'Modifiez vos informations à tout moment', 'Multilingual Profile': 'Profil multilingue', 'Full Customization': 'Personnalisation complète', 'Unlimited Sharing': 'Partage illimité', 'Review Platforms Compatible': 'Compatibilité avec toutes les plateformes d\'avis', 'Instant Review Collection': 'Collecte instantanée des avis' }
      },
      AR: {
          title: "اختر بطاقتك.",
          subtitle: "صممت لتناسب ذوقك.",
          shopH1: "بطاقات العمل الرقمية Tapnow",
          shopText: "يقدم متجر Tapnow حلول بطاقات العمل الرقمية المتكيفة مع احتياجات التواصل الحديث. تتيح كل بطاقة الوصول إلى ملف تعريف مهني قابل للتخصيص وجاهز للمشاركة فوراً.",
          addToBag: "اطلب الآن",
          reviewsTitle: "تقييمات جوجل والأعمال",
          reviewsSubtitle: "عزز تواجدك على الإنترنت فورياً.",
          features: { 'Laser-Engraved': 'نقش بالليزر', 'Premium Gold Finish': 'لمسة ذهبية فاخرة', 'Unlimited Sharing & Collection': 'مشاركة وجمع غير محدود', 'Edit details anytime': 'تعديل المعلومات في أي وقت', 'Multilingual Profile': 'ملف تعريف متعدد اللغات', 'Full Customization': 'تخصيص كامل', 'Unlimited Sharing': 'مشاركة غير محدودة', 'Review Platforms Compatible': 'متوافق مع جميع منصات المراجعة', 'Instant Review Collection': 'جمع التقييمات فوريًا' }
      }
  };

  const t = content[language] || content.FR;

  const renderProductCard = (product: Product) => {
    const backImage = versoImages[product.name];
    const isFlipped = flippedCardId === product.id;

    return (
      <motion.div 
        variants={fadeInUp} 
        key={product.id} 
        className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)] sm:hover:shadow-[0_40px_80px_rgba(0,0,0,0.05)] transition-all duration-500 w-full max-w-[310px] sm:max-w-[420px] mx-auto cursor-default relative"
      >
        <motion.div 
            className="relative aspect-[4/3] bg-transparent flex items-center justify-center p-4 sm:p-6 [perspective:2000px] overflow-visible cursor-pointer z-30"
            whileHover={!isMobile ? "hovered" : ""}
            onClick={() => isMobile && setFlippedCardId(isFlipped ? null : product.id)}
            initial="initial"
        >
          {product.badge && (
            <div className="absolute top-4 right-4 z-40 bg-white/95 backdrop-blur text-slate-900 text-[10px] sm:text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-md flex items-center gap-1.5 border border-slate-100 pointer-events-none">
              <Star size={12} className="text-yellow-500 fill-yellow-500" />
              {product.badge}
            </div>
          )}
          
          <motion.div 
            className="relative w-full h-full [transform-style:preserve-3d] pointer-events-none"
            variants={cardRotationVariants}
            animate={isMobile ? (isFlipped ? 'hovered' : 'initial') : undefined}
            transition={{ type: "tween", ease: [0.23, 1, 0.32, 1], duration: 0.5 }}
          >
              <div className="absolute inset-0 w-full h-full flex items-center justify-center [backface-visibility:hidden]">
                 <img
                    src={product.image}
                    alt={product.name}
                    className={`max-w-[105%] max-h-[105%] object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.1)]`}
                 />
              </div>
              <div className="absolute inset-0 w-full h-full flex items-center justify-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <img
                    src={backImage}
                    alt={`${product.name} Verso`}
                    className={`max-w-[105%] max-h-[105%] object-contain drop-shadow-[0_15px_40px_rgba(0,0,0,0.1)]`}
                  />
              </div>
          </motion.div>
        </motion.div>
        
        <div className="flex-1 p-6 sm:p-8 pt-0 flex flex-col justify-between relative z-20 bg-white">
          <div className="text-center sm:text-start">
            <div className="flex flex-col mb-6 items-center sm:items-start">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight leading-tight mb-2">{product.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl sm:text-2xl font-bold text-slate-900">{product.price} MAD</span>
                  {product.oldPrice && <span className="text-sm sm:text-base text-slate-400 line-through decoration-slate-400 font-medium">{product.oldPrice} MAD</span>}
                </div>
            </div>
            <div className="space-y-4 mb-8 text-start max-w-[280px] mx-auto sm:mx-0">
              {product.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start text-slate-600">
                      <div className="w-5 h-5 rounded-full bg-black text-white flex items-center justify-center me-3 shrink-0 mt-0.5">
                          <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-xs sm:text-sm font-medium leading-tight">{(t.features as any)[feature] || feature}</span>
                  </div>
              ))}
            </div>
          </div>
          <button onClick={() => onOrderClick?.(product.name)} className="w-full flex items-center justify-center bg-black text-white px-6 py-4 rounded-full hover:bg-slate-800 transition-all font-bold text-base shadow-lg shadow-black/10 active:scale-[0.98]">
              {t.addToBag}
          </button>
        </div>
      </motion.div>
    );
  };

  return (
    <div id={id} className={`bg-white py-24 min-h-screen w-full overflow-hidden ${isShopPage ? 'pt-32' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center w-full">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp} className="text-center mb-16 max-w-4xl px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            {isShopPage ? t.shopH1 : t.title}
          </h1>
          <p className="text-lg sm:text-xl text-slate-500 mx-auto font-medium leading-relaxed">
            {isShopPage ? t.shopText : t.subtitle}
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center w-full mb-24">
          {mainProducts.map(product => renderProductCard(product))}
        </motion.div>

        <div className="w-full pt-16 border-t border-slate-100 flex flex-col items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 px-4">{t.reviewsTitle}</h2>
            <p className="mt-3 max-w-xl text-lg text-slate-500 mx-auto font-medium px-6">{t.reviewsSubtitle}</p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="w-full flex justify-center">
                {renderProductCard(reviewsProduct)}
            </motion.div>
        </div>
      </div>
    </div>
  );
};