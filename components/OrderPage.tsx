import React, { useState, useMemo, useEffect } from 'react';
import { Language } from '../types';
import { useOrders } from '../context/OrderContext';
import { MapPin, User, Phone, Minus, Plus, MessageCircle, ArrowLeft, ShieldCheck, Truck, Clock, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface OrderPageProps {
  initialPlan: string;
  onBack: () => void;
  onPlanChange: (plan: string) => void;
  language: Language;
}

export const OrderPage: React.FC<OrderPageProps> = ({ initialPlan, onBack, onPlanChange, language }) => {
  const { addOrder } = useOrders();
  const [formData, setFormData] = useState({
    name: '',
    city: 'Casablanca',
    phone: '',
    quantity: 1,
    plan: initialPlan || 'Tapnow Pro Standard'
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, plan: initialPlan }));
  }, [initialPlan]);

  const [errors, setErrors] = useState<{name?: boolean; phone?: boolean}>({});

  const content = {
    EN: {
      title: "Order via WhatsApp",
      subtitle: "Fast, secure, and personal. Complete the form to start your order.",
      labelName: "Full Name",
      labelCity: "City",
      labelPhone: "Phone Number",
      labelQuantity: "Quantity",
      labelPlan: "Selected Plan",
      btnOrder: "Order on WhatsApp",
      secure: "Secure Payment on Delivery",
      delivery: "Fast Delivery across Morocco",
      deliveryNote: "Once your order is validated, you will be delivered within 24 to 48 hours anywhere in Morocco.",
      placeholderName: "Ahmed Alami",
      placeholderPhone: "0612345678",
      back: "Back",
      note: "You will be redirected to WhatsApp to confirm your details.",
      plans: [
        { label: "Tapnow Pro Standard", value: "Tapnow Pro Standard" },
        { label: "Tapnow Pro Gold", value: "Tapnow Pro Gold" },
        { label: "Tapnow Pro Custom", value: "Tapnow Pro Custom" },
        { label: "Tapnow Reviews", value: "Tapnow Reviews" }
      ]
    },
    FR: {
      title: "Commander via WhatsApp",
      subtitle: "Rapide, sécurisé et personnel. Remplissez le formulaire pour commencer.",
      labelName: "Nom complet",
      labelCity: "Ville",
      labelPhone: "Numéro de téléphone",
      labelQuantity: "Quantité",
      labelPlan: "Plan sélectionné",
      btnOrder: "Commander sur WhatsApp",
      secure: "Paiement sécurisé à la livraison",
      delivery: "Livraison rapide partout au Maroc",
      deliveryNote: "Une fois votre commande validée, vous serez livré sous 24 à 48 heures partout au Maroc.",
      placeholderName: "Ahmed Alami",
      placeholderPhone: "0612345678",
      back: "Retour",
      note: "Vous serez redirigé vers WhatsApp pour confirmer vos détails.",
      plans: [
        { label: "Tapnow Pro Standard", value: "Tapnow Pro Standard" },
        { label: "Tapnow Pro Gold", value: "Tapnow Pro Gold" },
        { label: "Tapnow Pro Personnalisée", value: "Tapnow Pro Custom" },
        { label: "Tapnow Reviews", value: "Tapnow Reviews" }
      ]
    },
    AR: {
      title: "الطلب عبر واتساب",
      subtitle: "سريع، آمن، وشخصي. أكمل النموذج لبدء طلبك.",
      labelName: "الاسم الكامل",
      labelCity: "المدينة",
      labelPhone: "رقم الهاتف",
      labelQuantity: "الكمية",
      labelPlan: "الخطة المختارة",
      btnOrder: "اطلب عبر واتساب",
      secure: "دفع آمن عند الاستلام",
      delivery: "توصيل سريع لجميع أنحاء المغرب",
      deliveryNote: "بمجرد تأكيد طلبك، سيتم التوصيل خلال 24 إلى 48 ساعة في أي مكان في المغرب.",
      placeholderName: "أحمد علمي",
      placeholderPhone: "0612345678",
      back: "عودة",
      note: "سيتم توجيهك إلى واتساب لتأكيد تفاصيلك.",
      plans: [
        { label: "Tapnow Pro القياسية", value: "Tapnow Pro Standard" },
        { label: "Tapnow Pro الذهبية", value: "Tapnow Pro Gold" },
        { label: "Tapnow Pro المخصصة", value: "Tapnow Pro Custom" },
        { label: "Tapnow Reviews", value: "Tapnow Reviews" }
      ]
    }
  };

  const t = content[language] || content.FR;

  const planImages: Record<string, string> = {
    "Tapnow Pro Standard": "https://tapnow.ma/img/card-tapnow.svg",
    "Tapnow Pro Gold": "https://tapnow.ma/img/card-tapnow-gold-r.svg",
    "Tapnow Pro Custom": "https://tapnow.ma/img/tapnow-your.svg",
    "Tapnow Reviews": "https://tapnow.ma/img/review-card.svg",
    "default": "https://www.getpopcard.com/_next/static/media/backCard.c7d4db94.svg"
  };

  const currentImage = useMemo(() => {
    if (planImages[formData.plan]) return planImages[formData.plan];
    const p = formData.plan.toLowerCase();
    if (p.includes("standard") || p.includes("القياسية")) return planImages["Tapnow Pro Standard"];
    if (p.includes("gold") || p.includes("الذهبية")) return planImages["Tapnow Pro Gold"];
    if (p.includes("custom") || p.includes("personnalisée") || p.includes("المخصصة")) return planImages["Tapnow Pro Custom"];
    if (p.includes("reviews")) return planImages["Tapnow Reviews"];
    return planImages["default"];
  }, [formData.plan]);

  const cityOptions = [
    { id: "Agadir", ar: "أكادير" },
    { id: "Ain Harrouda", ar: "عين حرودة" },
    { id: "Aït Melloul", ar: "أيت ملول" },
    { id: "Al Hoceima", ar: "الحسيمة" },
    { id: "Azrou", ar: "أزرو" },
    { id: "Ben Guerir", ar: "بن جرير" },
    { id: "Beni Ansar", ar: "بني انصار" },
    { id: "Beni Mellal", ar: "بني ملال" },
    { id: "Benslimane", ar: "بنسليمان" },
    { id: "Berkane", ar: "بركان" },
    { id: "Berrechid", ar: "برشيد" },
    { id: "Bouskoura", ar: "بوسكورة" },
    { id: "Casablanca", ar: "الدار البيضاء" },
    { id: "Dar Bouazza", ar: "دار بوعزة" },
    { id: "Dcheira El Jihadia", ar: "الدشيرة الجهادية" },
    { id: "Drargua", ar: "الدراركة" },
    { id: "El Jadida", ar: "الجديدة" },
    { id: "El Kelaa Des Sraghna", ar: "قلعة السراغنة" },
    { id: "Errachidia", ar: "الرشيدية" },
    { id: "Essaouira", ar: "الصويرة" },
    { id: "Fez", ar: "فاس" },
    { id: "Fnideq", ar: "الفنيدق" },
    { id: "Fquih Ben Salah", ar: "الفقيه بن صالح" },
    { id: "Guelmim", ar: "كلميم" },
    { id: "Guercif", ar: "جرسيف" },
    { id: "Inezgane", ar: "إنزكان" },
    { id: "Kenitra", ar: "القنيطرة" },
    { id: "Khemisset", ar: "الخميسات" },
    { id: "Khenifra", ar: "خنيفرة" },
    { id: "Khouribga", ar: "خريبكة" },
    { id: "Ksar El Kebir", ar: "القصر الكبير" },
    { id: "Lahraouyine", ar: "الهراويين" },
    { id: "Larache", ar: "العرائش" },
    { id: "Lqliaa", ar: "القليعة" },
    { id: "M'diq", ar: "المضيق" },
    { id: "Marrakesh", ar: "مراكش" },
    { id: "Martil", ar: "مرتيل" },
    { id: "Meknes", ar: "مكناس" },
    { id: "Midelt", ar: "ميدلت" },
    { id: "Mohammedia", ar: "المحمدية" },
    { id: "Nador", ar: "الناظور" },
    { id: "Ouarzazate", ar: "ورزازات" },
    { id: "Ouazzane", ar: "وزان" },
    { id: "Oued Zem", ar: "وادي زم" },
    { id: "Oujda", ar: "وجدة" },
    { id: "Oulad Teima", ar: "أولاد تايمة" },
    { id: "Rabat", ar: "الرباط" },
    { id: "Safi", ar: "آسفي" },
    { id: "Salé", ar: "سلا" },
    { id: "Sefrou", ar: "صفرو" },
    { id: "Settat", ar: "سطات" },
    { id: "Sidi Bennour", ar: "سيدي بنور" },
    { id: "Sidi Kacem", ar: "سيدي قاسم" },
    { id: "Sidi Slimane", ar: "سيدي سليمان" },
    { id: "Skhirat", ar: "الصخيرات" },
    { id: "Souk El Arbaa", ar: "سوق الأربعاء" },
    { id: "Suq as-Sabt Awlad an-Nama", ar: "سوق السبت أولاد النمة" },
    { id: "Tan-Tan", ar: "طانطان" },
    { id: "Tangier", ar: "طنجة" },
    { id: "Taourirt", ar: "تاوريرت" },
    { id: "Taroudant", ar: "تارودانت" },
    { id: "Taza", ar: "تازة" },
    { id: "Temara", ar: "تمارة" },
    { id: "Tetouan", ar: "تطوان" },
    { id: "Tifelt", ar: "تيفلت" },
    { id: "Tiznit", ar: "تيزنيت" },
    { id: "Youssoufia", ar: "اليوسفية" }
  ].sort((a, b) => a.id.localeCompare(b.id));

  const handleQuantityChange = (delta: number) => {
    setFormData(prev => ({
      ...prev,
      quantity: Math.max(1, prev.quantity + delta)
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'plan') {
        onPlanChange(value);
    }
    
    if (name === 'name' || name === 'phone') {
      if (errors[name as keyof typeof errors]) {
        setErrors(prev => ({ ...prev, [name]: false }));
      }
    }
  };

  const handleSubmit = () => {
    const newErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim() || formData.phone.length < 9
    };

    if (newErrors.name || newErrors.phone) {
      setErrors(newErrors);
      return;
    }

    // Capture the order in our local Admin system
    addOrder({
      customerName: formData.name,
      city: formData.city,
      phone: formData.phone,
      quantity: formData.quantity,
      plan: formData.plan
    });

    const cityLabel = language === 'AR' 
        ? cityOptions.find(c => c.id === formData.city)?.ar || formData.city 
        : formData.city;

    const message = `Hello Tapnow, I would like to order:
    
📦 *Order Details:*
- Plan: ${formData.plan}
- Quantity: ${formData.quantity}

👤 *Customer Info:*
- Name: ${formData.name}
- City: ${cityLabel}
- Phone: ${formData.phone}

Please confirm my order.`;

    const phoneNumber = "212672481803";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    // Slight delay to ensure order is processed in state before tab closes/shifts
    setTimeout(() => {
        window.open(url, '_blank');
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="mb-8 flex items-center text-slate-500 hover:text-black transition-colors font-medium"
        >
          <ArrowLeft size={20} className="me-2 rtl:ms-2 rtl:me-0" />
          {t.back}
        </button>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
          <div className="hidden lg:flex flex-col bg-slate-900">
            <div className="relative flex-1 bg-slate-100 overflow-hidden flex items-center justify-center p-12">
               <motion.img 
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={currentImage}
                  alt={formData.plan} 
                  className="w-full h-full object-contain drop-shadow-2xl"
               />
            </div>
            
            <div className="p-10 bg-slate-900 text-white">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                   <ShieldCheck className="w-6 h-6 text-white shrink-0" />
                   <span className="font-semibold text-base opacity-95">{t.secure}</span>
                </div>
                <div className="flex items-center gap-4">
                   <Truck className="w-6 h-6 text-white shrink-0" />
                   <span className="font-semibold text-base opacity-95">{t.delivery}</span>
                </div>
                
                <div className="pt-4 border-t border-white/10 flex items-start gap-3 mt-4">
                   <Clock className="w-5 h-5 text-white/60 shrink-0 mt-0.5" />
                   <p className="text-sm text-white/80 leading-relaxed font-light">
                     {t.deliveryNote}
                   </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <div className="lg:hidden mb-8 w-full h-48 bg-slate-50 rounded-xl flex items-center justify-center p-4 border border-slate-100">
               <motion.img 
                  key={currentImage}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  src={currentImage}
                  alt={formData.plan} 
                  className="w-full h-full object-contain drop-shadow-lg"
               />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2">{t.title}</h1>
              <p className="text-slate-500 mb-8">{t.subtitle}</p>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.labelPlan}</label>
                  <div className="relative group">
                    <select
                      name="plan"
                      value={formData.plan}
                      onChange={handleInputChange}
                      className="block w-full appearance-none px-4 py-4 pr-10 bg-slate-50 border border-slate-200 text-slate-900 font-semibold rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-all cursor-pointer"
                    >
                      {t.plans.map((p) => (
                        <option key={p.value} value={p.label}>
                          {p.label}
                        </option>
                      ))}
                    </select>
                    <div className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 pr-4 rtl:pl-4 flex items-center pointer-events-none text-slate-400 group-hover:text-black transition-colors">
                      <ChevronDown size={20} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.labelName}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-slate-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t.placeholderName}
                      className={`block w-full pl-10 rtl:pr-10 rtl:pl-3 pr-3 py-3 sm:text-sm bg-slate-50 border ${errors.name ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'} rounded-xl focus:ring-black focus:border-black transition-all`}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">{t.labelCity}</label>
                    <div className="relative group">
                       <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 flex items-center pointer-events-none z-10">
                        <MapPin className="h-5 w-5 text-slate-400" />
                      </div>
                      <select
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="block w-full appearance-none pl-10 rtl:pr-10 rtl:pl-3 pr-10 py-3 text-base bg-slate-50 border border-slate-200 focus:outline-none focus:ring-black focus:border-black sm:text-sm rounded-xl transition-all cursor-pointer"
                      >
                        {cityOptions.map(c => (
                            <option key={c.id} value={c.id}>
                                {language === 'AR' ? c.ar : c.id}
                            </option>
                        ))}
                      </select>
                      <div className="absolute inset-y-0 right-0 rtl:right-auto rtl:left-0 pr-4 rtl:pl-4 flex items-center pointer-events-none text-slate-400 group-hover:text-black transition-colors">
                        <ChevronDown size={18} />
                      </div>
                    </div>
                  </div>

                  <div>
                     <label className="block text-sm font-medium text-slate-700 mb-2">{t.labelQuantity}</label>
                     <div className="flex items-center border border-slate-200 bg-slate-50 rounded-xl overflow-hidden">
                        <button 
                          onClick={() => handleQuantityChange(-1)}
                          className="p-3 hover:bg-slate-200 transition-colors border-r rtl:border-l border-slate-200"
                        >
                          <Minus size={16} />
                        </button>
                        <div className="flex-1 text-center font-semibold text-slate-900">
                          {formData.quantity}
                        </div>
                        <button 
                          onClick={() => handleQuantityChange(1)}
                          className="p-3 hover:bg-slate-200 transition-colors border-l rtl:border-r border-slate-200"
                        >
                          <Plus size={16} />
                        </button>
                     </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">{t.labelPhone}</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 rtl:left-auto rtl:right-0 pl-3 rtl:pr-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-slate-400" />
                    </div>
                    <div className="absolute inset-y-0 left-10 rtl:left-auto rtl:right-10 flex items-center pointer-events-none text-slate-500 text-sm font-medium">
                        +212
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder={t.placeholderPhone}
                      className={`block w-full pl-20 rtl:pr-20 rtl:pl-3 pr-3 py-3 sm:text-sm bg-slate-50 border ${errors.phone ? 'border-red-500 ring-1 ring-red-500' : 'border-slate-200'} rounded-xl focus:ring-black focus:border-black transition-all`}
                    />
                  </div>
                  {errors.phone && <p className="mt-1 text-xs text-red-500">Please enter a valid phone number.</p>}
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full mt-6 bg-black hover:bg-slate-800 disabled:opacity-70 disabled:cursor-not-allowed text-white py-4 px-6 rounded-full font-bold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                    <MessageCircle size={22} className="text-white" />
                    {t.btnOrder}
                </button>
                <p className="text-xs text-center text-slate-400 mt-2">{t.note}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};