import React, { useState } from 'react';
import { 
  Wrench, 
  Zap, 
  Hammer, 
  Paintbrush, 
  Layers, 
  Cpu, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ServicesView: React.FC = () => {
  const { categories, setIsRequestModalOpen, setCurrentView, setSelectedCategorySlug } = useApp();
  const [activeTab, setActiveTab] = useState('all');

  const iconMap: Record<string, any> = {
    Wrench,
    Zap,
    Hammer,
    Paintbrush,
    Layers,
    Cpu,
    Sparkles,
    Truck,
    ShieldCheck
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
          Nairobi Service Directory
        </span>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900">
          Professional Trade & Repair Services
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          JobRail standardizes trade scopes, diagnostic expectations, and workmanship guarantees across Nairobi and surrounding regions.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((cat) => {
          const Icon = iconMap[cat.icon] || Wrench;
          return (
            <div
              key={cat.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-2.5 py-1 rounded-full">
                    From KSh {cat.startingPriceKES.toLocaleString()}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900">{cat.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="space-y-2 pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Supported Tasks:
                  </span>
                  <div className="space-y-1.5">
                    {cat.subServices.map((sub, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span>{sub}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => {
                    setSelectedCategorySlug(cat.slug);
                    setIsRequestModalOpen(true);
                  }}
                  className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm text-center"
                >
                  Request Service
                </button>
                <button
                  onClick={() => {
                    setSelectedCategorySlug(cat.slug);
                    setCurrentView('find-a-pro');
                  }}
                  className="py-2.5 px-3 border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs rounded-xl transition-colors"
                >
                  Pros
                </button>
              </div>

            </div>
          );
        })}
      </div>

      {/* Trust Callout */}
      <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="text-lg font-bold">Have a custom or commercial project in Kenya?</h3>
          <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
            For multi-storey commercial rewiring, large estate renovations, or structural plumbing, our specialized trade dispatchers coordinate multi-pro quotes with on-site inspection.
          </p>
        </div>
        <button
          onClick={() => setIsRequestModalOpen(true)}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shrink-0 transition-colors shadow-md"
        >
          Submit Commercial Inquiry
        </button>
      </div>

    </div>
  );
};
