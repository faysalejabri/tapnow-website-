import React from 'react';
import { Check, Wifi } from 'lucide-react';

interface ReviewProductProps {
    onOrder?: (planName: string) => void;
}

const ReviewProduct: React.FC<ReviewProductProps> = ({ onOrder }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Google & Business Reviews</h2>
        <p className="text-gray-500">Boost your online presence instantly.</p>
      </div>

      <div className="max-w-md mx-auto px-4">
        <div className="flex flex-col bg-white border border-gray-100 shadow-xl rounded-3xl p-8">
           {/* Card Visual */}
           <div className="aspect-[1.586/1] w-full bg-black rounded-xl shadow-lg mb-8 relative p-6 flex flex-col justify-between overflow-hidden">
             <div className="absolute top-6 right-6 text-white/70">
                <Wifi className="transform rotate-90" size={20} />
             </div>
             <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-4xl font-bold mb-1">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                </span>
                <span className="text-white text-sm font-medium tracking-wide">Reviews ★★★★★</span>
             </div>
           </div>

           <div className="text-left">
               <h3 className="text-xl font-bold text-gray-900 mb-2">Tapnow Reviews</h3>
               <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-gray-900">190 MAD</span>
                <span className="text-sm text-gray-400 line-through font-medium">290 MAD</span>
               </div>
               
               <ul className="space-y-3 mb-8">
                 <li className="flex items-center gap-3">
                    <div className="bg-black text-white rounded-full p-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Instant Review Collection</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <div className="bg-black text-white rounded-full p-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Unlimited Sharing</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <div className="bg-black text-white rounded-full p-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Compatible with all review platforms</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <div className="bg-black text-white rounded-full p-0.5 w-4 h-4 flex items-center justify-center flex-shrink-0">
                        <Check size={10} strokeWidth={4} />
                    </div>
                    <span className="text-sm text-gray-600 font-medium">Full Customization</span>
                 </li>
               </ul>

               <button 
                onClick={() => onOrder && onOrder("Tapnow Reviews")}
                className="w-full bg-black text-white py-3 rounded-full font-bold text-sm hover:bg-gray-800 transition-colors"
               >
                Order Now
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewProduct;