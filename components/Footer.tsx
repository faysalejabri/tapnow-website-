import React from 'react';
import { Language, ViewState } from '../types';
import { Linkedin, Instagram, Facebook, MessageCircle } from 'lucide-react';

interface FooterProps {
    language: Language;
    onNavigate: (view: ViewState) => void;
}

export const Footer: React.FC<FooterProps> = ({ language, onNavigate }) => {
    const content = {
        EN: {
            desc: "Tapnow is Morocco's leading provider of digital business cards and NFC networking solutions. Modernize your professional identity today.",
            links: [
              { label: 'About', view: 'about' as ViewState },
              { label: 'Shop', view: 'shop' as ViewState },
              { label: 'Privacy', view: 'privacy' as ViewState },
              { label: 'Terms', view: 'terms' as ViewState },
              { label: 'Support', href: 'mailto:support@tapnow.ma' }
            ],
            rights: "© 2025 Tapnow, Inc. All rights reserved."
        },
        FR: {
            desc: "Tapnow est le leader des cartes de visite digitales et solutions de networking NFC au Maroc. Modernisez votre identité professionnelle dès aujourd'hui.",
            links: [
              { label: 'À propos', view: 'about' as ViewState },
              { label: 'Boutique', view: 'shop' as ViewState },
              { label: 'Confidentialité', view: 'privacy' as ViewState },
              { label: 'Conditions', view: 'terms' as ViewState },
              { label: 'Support', href: 'mailto:support@tapnow.ma' }
            ],
            rights: "© 2025 Tapnow, Inc. Tous droits réservés."
        },
        AR: {
            desc: "Tapnow هي الشركة الرائدة في المغرب لبطاقات العمل الرقمية وحلول التواصل عبر NFC. قم بتحديث هويتك المهنية اليوم.",
            links: [
              { label: 'عن الشركة', view: 'about' as ViewState },
              { label: 'المتجر', view: 'shop' as ViewState },
              { label: 'الخصوصية', view: 'privacy' as ViewState },
              { label: 'الشروط', view: 'terms' as ViewState },
              { label: 'الدعم', href: 'mailto:support@tapnow.ma' }
            ],
            rights: "© 2025 Tapnow, Inc. جميع الحقوق محفوظة."
        }
    };
    
    const t = content[language] || content.FR;

    return (
        <footer className="bg-white/60 backdrop-blur-2xl border-t border-slate-200/50 overflow-hidden">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                
                {/* Logo & Description */}
                <div className="text-center max-w-lg mb-12">
                    <div className="group cursor-pointer flex justify-center mb-6" onClick={() => onNavigate('landing')}>
                         <div className="relative h-10 sm:h-12 w-auto">
                            <img src="https://tapnow.ma/img/Logo-Black.svg" alt="Tapnow Logo" className="h-full w-auto transition-opacity duration-300 ease-in-out opacity-100 md:group-hover:opacity-0" />
                            <img src="https://tapnow.ma/img/Logo-Bleu.svg" alt="Tapnow Logo Hover" className="absolute inset-0 h-full w-auto transition-opacity duration-300 ease-in-out opacity-0 hidden md:block md:group-hover:opacity-100" />
                        </div>
                    </div>
                    <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
                        {t.desc}
                    </p>
                </div>

                {/* Social Media */}
                <div className="flex gap-6 mb-12">
                    <a href="https://www.facebook.com/getapnow/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#1877f2] transition-colors" title="Facebook">
                        <Facebook size={22} />
                    </a>
                    <a href="https://www.instagram.com/tapnow.ma/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#e4405f] transition-colors" title="Instagram">
                        <Instagram size={22} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#006aff] transition-colors" title="Linkedin">
                        <Linkedin size={22} />
                    </a>
                    <a href="https://wa.me/212672481803" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#25d366] transition-colors" title="WhatsApp">
                        <MessageCircle size={22} />
                    </a>
                </div>

                {/* Main Links */}
                <div className="flex flex-wrap justify-center items-center gap-y-4 gap-x-6 sm:gap-x-10 rtl:space-x-reverse mb-12 w-full max-w-2xl px-4 text-center">
                    {(t.links || []).map((item, idx) => (
                        <button 
                          key={`foot-link-${idx}`}
                          onClick={() => {
                            if ('view' in item && item.view) {
                                onNavigate(item.view as ViewState);
                            } else if ('href' in item && item.href) {
                                window.open(item.href, '_blank');
                            }
                          }}
                          className="text-slate-600 hover:text-slate-900 transition-colors font-bold text-sm"
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                {/* Copyright */}
                <div className="text-center pt-8 border-t border-slate-100 w-full max-w-xs">
                    <p className="text-sm text-slate-400 font-medium">{t.rights}</p>
                </div>
            </div>
        </footer>
    );
};