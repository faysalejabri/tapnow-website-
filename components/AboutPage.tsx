import React, { useEffect } from 'react';
import { Language } from '../types';
import { motion } from 'framer-motion';

export const AboutPage: React.FC<{ language: Language }> = ({ language }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    EN: {
      h1: "Tapnow, the next generation digital business card",
      p1: "Business cards have long been a staple of the professional world. However, in the era of mobile, digital, and instant networking, this traditional format is showing its limits today. Expensive printing, quickly obsolete information, frequent loss: the paper card no longer matches modern uses.",
      p2: "Tapnow offers a different approach through the digital business card, designed to adapt to new ways of connecting, sharing, and building lasting professional relationships.",
      q1: "What is a digital business card?",
      a1: "A digital business card is a digital version of the traditional card. It allows sharing professional information via a link, a smartphone, or contactless technology. Unlike a paper card, it is:",
      list1: ["Always accessible", "Easily editable", "Instantly shareable", "Compatible with all devices"],
      p3: "Tapnow transforms this digital card into a centralized professional profile, designed to be simple, clear, and effective.",
      q2: "Centralize your professional identity with Tapnow",
      p4: "Tapnow allows you to bring together in one place:",
      list2: ["Name and activity", "Professional contact details", "Social networks", "Useful links", "Quick contact means"],
      p5: "This centralization improves profile readability and facilitates exchanges. The contact no longer needs to search for information: everything is available immediately.",
      q3: "A business card that's always up to date",
      p6: "One of the main advantages of the Tapnow virtual business card is its flexibility. Information can be changed at any time. Every change is automatically applied, without having to resend a new card. This allows maintaining a consistent professional image, even as the business evolves.",
      q4: "Digital networking at the heart of current uses",
      p7: "Today, networking happens everywhere: events, coworking spaces, cafes, social networks, online meetings. Tapnow integrates naturally into these situations by allowing fast and fluid contact sharing. The digital business card becomes an active connection tool, much more than a simple static support.",
      q5: "A modern and responsible alternative",
      p8: "Adopting a digital business card also reduces paper use. A single Tapnow card can replace hundreds of printed cards, while always remaining relevant. Tapnow is thus part of a modern vision of networking: digital, sustainable, and evolving.",
      faqQ1: "What is a virtual business card?",
      faqA1: "A virtual business card is a digital format allowing professional information sharing online, without paper support.",
      faqQ2: "Does Tapnow replace paper cards?",
      faqA2: "Yes, Tapnow is designed as a modern alternative to traditional business cards."
    },
    FR: {
      h1: "Tapnow, la carte de visite digitale nouvelle génération",
      p1: "Les cartes de visite ont longtemps été un élément incontournable du monde professionnel. Pourtant, à l’ère du mobile, du digital et du networking instantané, ce format traditionnel montre aujourd’hui ses limites. Impression coûteuse, informations rapidement obsolètes, perte fréquente : la carte papier ne correspond plus aux usages modernes.",
      p2: "Tapnow propose une approche différente grâce à la carte de visite digitale, conçue pour s’adapter aux nouvelles façons de se connecter, de partager et de construire des relations professionnelles durables.",
      q1: "Qu’est-ce qu’une carte de visite digitale ?",
      a1: "Une carte de visite digitale est une version numérique de la carte traditionnelle. Elle permet de partager ses informations professionnelles via un lien, un smartphone ou une technologie sans contact. Contrairement à une carte papier, elle est :",
      list1: ["Toujours accessible", "Facilement modifiable", "Partageable instantanément", "Compatible avec tous les appareils"],
      p3: "Tapnow transforme cette carte digitale en un profil professionnel centralisé, pensé pour être simple, clair et efficace.",
      q2: "Centraliser son identité professionnelle avec Tapnow",
      p4: "Tapnow permet de réunir en un seul endroit :",
      list2: ["Nom et activité", "Coordonnées professionnelles", "Réseaux sociaux", "Liens utiles", "Moyens de contact rapide"],
      p5: "Cette centralisation améliore la lisibilité du profil et facilite les échanges. Le contact n’a plus besoin de rechercher les informations : tout est disponible immédiatement.",
      q3: "Une carte de visite toujours à jour",
      p6: "L’un des principaux avantages de la carte de visite virtuelle Tapnow est sa flexibilité. Les informations peuvent être modifiées à tout moment. Chaque changement est automatiquement appliqué, sans avoir à renvoyer une nouvelle carte. Cela permet de conserver une image professionnelle cohérente, même lorsque l’activité évolue.",
      q4: "Le networking digital au cœur des usages actifs",
      p7: "Aujourd’hui, le networking se fait partout : événements, coworkings, cafés, réseaux sociaux, réunions en ligne. Tapnow s’intègre naturellement à ces situations en permettant un partage de contact rapide et fluide. La carte de visite numérique devient un outil actif de connexion, bien plus qu’un simple support statique.",
      q5: "Une alternative moderne et responsable",
      p8: "Adopter une carte de visite digitale permet également de réduire l’utilisation du papier. Une seule carte Tapnow peut remplacer des centaines de cartes imprimées, tout en restant toujours pertinente. Tapnow s’inscrit ainsi dans une vision moderne du networking : digitale, durable et évolutive.",
      faqQ1: "Qu’est-ce qu’une carte de visite virtuelle ?",
      faqA1: "Une carte de visite virtuelle est un format numérique permettant de partager ses informations professionnelles en ligne, sans support papier.",
      faqQ2: "Tapnow remplace-t-il les cartes papier ?",
      faqA2: "Oui, Tapnow est conçu comme une alternative moderne aux cartes de visite traditionnelles."
    },
    AR: {
      h1: "Tapnow، الجيل الجديد من بطاقات العمل الرقمية",
      p1: "لطالما كانت بطاقات العمل عنصراً أساسياً في العالم المهني. ومع ذلك، في عصر الهاتف المحمول والرقمنة والتواصل الفوري، يُظهر هذا التنسيق التقليدي حدوده اليوم. طباعة مكلفة، معلومات تصبح قديمة بسرعة، وفقدان متكرر: البطاقة الورقية لم تعد تتوافق مع الاستخدامات الحديثة.",
      p2: "تقدم Tapnow نهجاً مختلفاً من خلال بطاقة العمل الرقمية، المصممة للتكيف مع الطرق الجديدة للتواصل والمشاركة وبناء علاقات مهنية مستدامة.",
      q1: "ما هي بطاقة العمل الرقمية؟",
      a1: "بطاقة العمل الرقمية هي نسخة رقمية من البطاقة التقليدية. تسمح بمشاركة معلوماتك المهنية عبر رابط أو هاتف ذكي أو تقنية عدم التلامس. على عكس البطاقة الورقية، فهي:",
      list1: ["متاحة دائماً", "سهلة التعديل", "قابلة للمشاركة فوراً", "متوافقة مع جميع الأجهزة"],
      p3: "تقوم Tapnow بتحويل هذه البطاقة الرقمية إلى ملف تعريف مهني مركزي، مصمم ليكون بسيطاً وواضحاً وفعالاً.",
      q2: "ركز هويتك المهنية مع Tapnow",
      p4: "تسمح لك Tapnow بجمع كل ما يلي في مكان واحد:",
      list2: ["الاسم والنشاط", "بيانات الاتصال المهنية", "شبكات التواصل الاجتماعي", "روابط مفيدة", "وسائل اتصال سريعة"],
      p5: "تعمل هذه المركزية على تحسين وضوح ملف التعريف وتسهيل التبادلات. لم يعد المتصل بحاجة للبحث عن المعلومات: كل شيء متاح على الفور.",
      q3: "بطاقة عمل محدثة دائماً",
      p6: "واحدة من المزايا الرئيسية لبطاقة العمل الافتراضية Tapnow هي مرونتها. يمكن تغيير المعلومات في أي وقت. يتم تطبيق كل تغيير تلقائياً، دون الحاجة إلى إرسال بطاقة جديدة. وهذا يسمح بالحفاظ على صورة مهنية متسقة، حتى مع تطور النشاط.",
      q4: "التواصل الرقمي في قلب الاستخدامات الحالية",
      p7: "اليوم، يتم التواصل في كل مكان: الفعاليات، مساحات العمل المشتركة، المقاهي، شبكات التواصل الاجتماعي، الاجتماعات عبر الإنترنت. تندمج Tapnow بشكل طبيعي في هذه المواقف من خلال السماح بمشاركة جهات الاتصال بشكل سريع وسلس. تصبح بطاقة العمل الرقمية أداة اتصال فعالة، أكثر بكثير من مجرد دعم ثابت بسيط.",
      q5: "بديل حديث ومسؤول",
      p8: "يؤدي اعتماد بطاقة عمل رقمية أيضاً إلى تقليل استخدام الورق. يمكن لبطاقة Tapnow واحدة أن تحل محل مئات البطاقات المطبوعة، مع بقائها دائماً ذات صلة. وبالتالي، فإن Tapnow جزء من رؤية حديثة للتواصل: رقمية ومستدامة ومتطورة.",
      faqQ1: "ما هي بطاقة العمل الافتراضية؟",
      faqA1: "بطاقة العمل الافتراضية هي تنسيق رقمي يسمح بمشاركة المعلومات المهنية عبر الإنترنت، دون الحاجة إلى ورق.",
      faqQ2: "هل تعوض Tapnow البطاقات الورقية؟",
      faqA2: "نعم، تم تصميم Tapnow كبديل حديث لبطاقات العمل التقليدية."
    }
  };

  const t = content[language] || content.FR;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": t.faqQ1,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t.faqA1
        }
      },
      {
        "@type": "Question",
        "name": t.faqQ2,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": t.faqA2
        }
      }
    ]
  };

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify(faqSchema);
    document.head.appendChild(script);
    return () => {
        try {
            document.head.removeChild(script);
        } catch (e) {
            // ignore
        }
    };
  }, [t]);

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.article 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`prose prose-slate prose-lg lg:prose-xl max-w-none ${language === 'AR' ? 'text-right' : 'text-left'}`}
          dir={language === 'AR' ? 'rtl' : 'ltr'}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{t.h1}</h1>
          
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            {t.p1}
            <br /><br />
            {t.p2}
          </p>

          <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">{t.q1}</h2>
          <p className="text-slate-600 mb-8">{t.a1}</p>
          <ul className={`list-disc ${language === 'AR' ? 'pr-6 pl-0' : 'pl-6 pr-0'} space-y-2 text-slate-600 mb-12`}>
            {t.list1.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <p className="text-slate-600 mb-8">{t.p3}</p>

          <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">{t.q2}</h2>
          <p className="text-slate-600 mb-8">{t.p4}</p>
          <ul className={`list-disc ${language === 'AR' ? 'pr-6 pl-0' : 'pl-6 pr-0'} space-y-2 text-slate-600 mb-12`}>
            {t.list2.map((item, idx) => <li key={idx}>{item}</li>)}
          </ul>
          <p className="text-slate-600 mb-8">{t.p5}</p>

          <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">{t.q3}</h2>
          <p className="text-slate-600 mb-12">{t.p6}</p>

          <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">{t.q4}</h2>
          <p className="text-slate-600 mb-12">{t.p7}</p>

          <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">{t.q5}</h2>
          <p className="text-slate-600 mb-12">{t.p8}</p>

          <div className="mt-20 pt-10 border-t border-slate-100 text-slate-500">
            <p className="mb-2 font-medium">📩 Contact : contact@tapnow.ma</p>
            <p className="font-medium">🌐 Site officiel : www.tapnow.ma</p>
          </div>
        </motion.article>
      </div>
    </div>
  );
};