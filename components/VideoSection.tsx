import React from 'react';
import { Play } from 'lucide-react';

const VideoSection: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">See it in action.</h2>
        <p className="text-gray-500 mb-12">Tap, share, and connect in seconds.</p>

        <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer bg-black">
          {/* Placeholder Image simulating the video thumbnail */}
          <img 
            src="https://picsum.photos/seed/tapnow_video/1280/720" 
            alt="Video Thumbnail" 
            className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
          />
          
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                <Play className="text-white fill-current ml-1" size={32} />
             </div>
          </div>
          
          <div className="absolute top-6 left-6 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white font-bold text-xs">JK</span>
             </div>
             <span className="text-white font-medium text-lg drop-shadow-md">COSTA RICA IN 4K 60fps HDR (ULTRA HD)</span>
          </div>

          <div className="absolute bottom-6 left-6">
             <button className="bg-black/70 hover:bg-black text-white px-4 py-2 rounded text-sm font-medium backdrop-blur-sm flex items-center gap-2 transition-colors">
                Regarder sur <span className="font-bold">YouTube</span>
             </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;