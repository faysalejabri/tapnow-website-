import React from 'react';
import { Zap, ShieldCheck, Leaf } from 'lucide-react';

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-white/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-2">
            Everything you need.
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-400 tracking-tight">
            Nothing you don't.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Zap className="text-gray-900" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Instant Sharing</h3>
            <p className="text-gray-600 leading-relaxed">
              No app required. Just tap your card to share your profile instantly.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <ShieldCheck className="text-gray-900" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Private</h3>
            <p className="text-gray-600 leading-relaxed">
              Bank-level encryption. You control exactly what information is shared.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Leaf className="text-gray-900" size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">Eco-Friendly</h3>
            <p className="text-gray-600 leading-relaxed">
              One Tapnow replaces thousands of paper business cards. Save trees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;