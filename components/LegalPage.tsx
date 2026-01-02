import React, { useEffect } from 'react';
import { Language } from '../types';
import { motion } from 'framer-motion';

export const LegalPage: React.FC<{ type: 'privacy' | 'terms', language: Language }> = ({ type, language }) => {
  // Use a standard scroll-to-top that is compatible across all browsers
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const content = {
    EN: {
      privacy: {
        title: "Privacy and Data Protection on Tapnow",
        intro: "Tapnow places special importance on the protection of personal data related to the use of digital business cards.",
        h1: "Data collected",
        list1: ["Information entered voluntarily on the profile", "Technical data of navigation on www.tapnow.ma", "Information necessary for the operation of the service"],
        h2: "Data usage",
        p1: "The data is used only to:",
        list2: ["Provide Tapnow features", "Improve user experience", "Ensure security and stability of the service"],
        note: "No data is sold or exploited for external commercial purposes.",
        h3: "Security & management",
        p2: "Reasonable measures are in place to protect data. Users can modify or delete their information when features allow it.",
        contact: "📩 Privacy: contact@tapnow.ma"
      },
      terms: {
        title: "Terms of Use of Tapnow",
        intro: "Using Tapnow implies acceptance of these conditions. The service is intended for responsible sharing of professional information via a virtual business card.",
        h1: "Content responsibility",
        p1: "Each user is responsible for the information published on their profile. Content must be accurate, legal, and respectful.",
        h2: "Misuse",
        p2: "Any misuse, fraudulent use, or use contrary to these conditions may lead to limitation or suspension of access.",
        h3: "Service availability",
        p3: "Tapnow aims for stable availability but does not guarantee continuous access without interruption.",
        h4: "Conditions update",
        p4: "Conditions may be modified to reflect service evolution. It is recommended to check this page regularly.",
        contact: "📩 Contact: contact@tapnow.ma"
      }
    },
    FR: {
      privacy: {
        title: "Confidentialité et protection des données sur Tapnow",
        intro: "Tapnow accorde une importance particulière à la protection des données personnelles liées à l’utilisation des cartes de visite digitales.",
        h1: "Données collectées",
        list1: ["Informations saisies volontairement sur le profil", "Données techniques de navigation sur www.tapnow.ma", "Informations nécessaires au fonctionnement du service"],
        h2: "Utilisation des données",
        p1: "Les données sont utilisées uniquement pour :",
        list2: ["Fournir les fonctionnalités de Tapnow", "Améliorer l’expérience utilisateur", "Assurer la sécurité et la stabilité du service"],
        note: "Aucune donnée n’est vendue ou exploitée à des fins commerciales externes.",
        h3: "Sécurité & gestion",
        p2: "Des mesures raisonnables sont mises en place pour protéger les données. Les utilisateurs peuvent modifier ou supprimer leurs informations lorsque les fonctionnalités le permettent.",
        contact: "📩 Confidentialité : contact@tapnow.ma"
      },
      terms: {
        title: "Conditions d’utilisation de Tapnow",
        intro: "L’utilisation de Tapnow implique l’acceptation des présentes conditions. Le service est destiné au partage responsable d’informations professionnelles via une carte de visite virtuelle.",
        h1: "Responsabilité du contenu",
        p1: "Chaque utilisateur est responsable des informations publiées sur son profil. Le contenu doit être exact, légal et respectueux.",
        h2: "Usage abusif",
        p2: "Tout usage abusif, frauduleux ou contraire aux présentes conditions peut entraîner une limitation ou suspension de l’accès.",
        h3: "Disponibilité du service",
        p3: "Tapnow vise une disponibilité stable mais ne garantit pas un accès continu sans interruption.",
        h4: "Mise à jour des conditions",
        p4: "Les conditions peuvent être modifiées pour refléter l’évolution du service. Il est recommandé de consulter cette page régulièrement.",
        contact: "📩 Contact : contact@tapnow.ma"
      }
    },
    AR: {
      privacy: {
        title: "الخصوصية وحماية البيانات في Tapnow",
        intro: "تولي Tapnow أهمية خاصة لحماية البيانات الشخصية المتعلقة باستخدام بطاقات العمل الرقمية.",
        h1: "البيانات التي نجمعها",
        list1: ["المعلومات المدخلة طواعية في الملف الشخصي", "البيانات الفنية للتنقل في www.tapnow.ma", "المعلومات اللازمة لتشغيل الخدمة"],
        h2: "استخدام البيانات",
        p1: "تُستخدم البيانات فقط من أجل:",
        list2: ["توفير ميزات Tapnow", "تحسين تجربة المستخدم", "ضمان أمن واستقرار الخدمة"],
        note: "لا يتم بيع أي بيانات أو استغلالها لأغراض تجارية خارجية.",
        h3: "الأمن والإدارة",
        p2: "يتم اتخاذ تدابير معقولة لحماية البيانات. يمكن للمستخدمين تعديل أو حذف معلوماتهم عندما تسمح الميزات بذلك.",
        contact: "📩 الخصوصية: contact@tapnow.ma"
      },
      terms: {
        title: "شروط استخدام Tapnow",
        intro: "يعني استخدام Tapnow قبول هذه الشروط. الخدمة مخصصة للمشاركة المسؤولة للمعلومات المهنية عبر بطاقة عمل افتراضية.",
        h1: "مسؤولية المحتوى",
        p1: "كل مستخدم مسؤول عن المعلومات المنشورة في ملفه الشخصي. يجب أن يكون المحتوى دقيقاً وقانونياً ومحترماً.",
        h2: "سوء الاستخدام",
        p2: "أي سوء استخدام أو استخدام احتيالي أو مخالف لهذه الشروط قد يؤدي إلى تقييد أو تعليق الوصول.",
        h3: "توفر الخدمة",
        p3: "تهدف Tapnow إلى توفير مستقر للخدمة ولكنها لا تضمن وصولاً مستمراً دون انقطاع.",
        h4: "تحديث الشروط",
        p4: "يمكن تعديل الشروط لتعكس تطور الخدمة. يوصى بمراجعة هذه الصفحة بانتظام.",
        contact: "📩 اتصل بنا: contact@tapnow.ma"
      }
    }
  };

  const currentLangContent = content[language] || content.FR;
  const t = currentLangContent[type];

  if (!t) return null;

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.article 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className={`prose prose-slate prose-lg max-w-none ${language === 'AR' ? 'text-right' : 'text-left'}`}
          dir={language === 'AR' ? 'rtl' : 'ltr'}
        >
          <h1 className="text-4xl font-bold text-slate-900 mb-8">{t.title}</h1>
          <p className="text-slate-600 mb-12">{t.intro}</p>

          <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">{t.h1}</h2>
          {type === 'privacy' ? (
            <>
              <ul className={`list-disc ${language === 'AR' ? 'pr-6 pl-0' : 'pl-6 pr-0'} space-y-2 text-slate-600 mb-8`}>
                {(t as any).list1.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
              </ul>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">{(t as any).h2}</h2>
              <p className="text-slate-600 mb-6">{(t as any).p1}</p>
              <ul className={`list-disc ${language === 'AR' ? 'pr-6 pl-0' : 'pl-6 pr-0'} space-y-2 text-slate-600 mb-8`}>
                {(t as any).list2.map((item: string, idx: number) => <li key={idx}>{item}</li>)}
              </ul>
              <p className="text-slate-600 font-semibold mb-8 italic">{(t as any).note}</p>

              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">{(t as any).h3}</h2>
              <p className="text-slate-600 mb-12">{(t as any).p2}</p>
            </>
          ) : (
            <>
              <p className="text-slate-600 mb-8">{(t as any).p1}</p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">{(t as any).h2}</h2>
              <p className="text-slate-600 mb-8">{(t as any).p2}</p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">{(t as any).h3}</h2>
              <p className="text-slate-600 mb-8">{(t as any).p3}</p>
              <h2 className="text-2xl font-bold text-slate-900 mt-12 mb-6">{(t as any).h4}</h2>
              <p className="text-slate-600 mb-12">{(t as any).p4}</p>
            </>
          )}
          
          <p className="text-slate-500 font-medium">{t.contact}</p>
        </motion.article>
      </div>
    </div>
  );
};