import React from 'react';
import { 
  X, 
  ShieldCheck, 
  Star, 
  Clock, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Award, 
  Briefcase, 
  Wrench,
  ThumbsUp
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ProfessionalProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  proId?: string;
}

export const ProfessionalProfileModal: React.FC<ProfessionalProfileModalProps> = ({
  isOpen,
  onClose,
  proId
}) => {
  const { professionals, getWhatsAppUrl, setIsRequestModalOpen } = useApp();

  if (!isOpen) return null;

  const pro = professionals.find(p => p.id === proId) || professionals[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header with Photo & Basic Info */}
        <div className="p-6 bg-slate-900 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <img 
              src={pro.avatar} 
              alt={pro.name}
              className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-500 shadow-md" 
              referrerPolicy="no-referrer"
            />
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-white">{pro.name}</h3>
                <span className="text-[10px] uppercase font-bold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded border border-blue-500/30">
                  {pro.category}
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">{pro.title}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                  {pro.location}, {pro.county}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1 text-amber-400 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {pro.rating} rating
                </span>
                <span>•</span>
                <span>{pro.yearsExperience} yrs experience</span>
              </div>
            </div>
          </div>
        </div>

        {/* Verification Status Banner (Section 10) */}
        <div className="bg-slate-50 border-b border-slate-200 px-6 py-3">
          <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-2">
            JobRail Official Verification Status:
          </span>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Identity: <strong>{pro.verification.identity}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Trade Skills: <strong>{pro.verification.skills}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className={`w-4 h-4 ${pro.verification.business === 'VERIFIED' ? 'text-emerald-600' : 'text-amber-500'} shrink-0`} />
              <span>Business: <strong>{pro.verification.business}</strong></span>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm">
          
          {/* Reputation metrics (Section 10) */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Performance & Verified Metrics
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-[11px] text-slate-500 block">Completed Jobs</span>
                <span className="text-base font-black text-slate-900 font-mono">{pro.completedJobs}</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-[11px] text-slate-500 block">Repeat Customers</span>
                <span className="text-base font-black text-blue-600 font-mono">{pro.repeatCustomersRate}%</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-[11px] text-slate-500 block">On-Time Arrival</span>
                <span className="text-base font-black text-emerald-600 font-mono">{pro.onTimeRate}%</span>
              </div>
              <div className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                <span className="text-[11px] text-slate-500 block">Response Speed</span>
                <span className="text-xs font-bold text-slate-900">{pro.responseRate}</span>
              </div>
            </div>
          </div>

          {/* About & Bio */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-1.5">
              About Technician
            </h4>
            <p className="text-xs text-slate-600 leading-relaxed">
              {pro.bio}
            </p>
          </div>

          {/* Specialties & Languages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-1.5">Specializations:</span>
              <div className="flex flex-wrap gap-1.5">
                {pro.specialties.map(spec => (
                  <span key={spec} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block mb-1.5">Languages Spoken:</span>
              <div className="flex flex-wrap gap-1.5">
                {pro.languages.map(lang => (
                  <span key={lang} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px] font-medium">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Portfolio item */}
          {pro.portfolio.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
                Recent Work Portfolio
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pro.portfolio.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden bg-slate-50">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-32 object-cover" 
                      referrerPolicy="no-referrer"
                    />
                    <div className="p-3 text-xs">
                      <h5 className="font-bold text-slate-900">{item.title}</h5>
                      <p className="text-[11px] text-slate-500 mt-1 leading-normal">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Warranty Promise */}
          <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="text-xs">
              <span className="font-bold text-emerald-950 block">
                Standard Workmanship Guarantee: {pro.defaultWarrantyDays} Days
              </span>
              <p className="text-slate-600 mt-0.5">
                Jobs booked via JobRail automatically come with a {pro.defaultWarrantyDays}-day warranty policy protecting against faulty workmanship.
              </p>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row gap-2.5">
          <button
            onClick={() => {
              onClose();
              setIsRequestModalOpen(true);
            }}
            className="flex-1 py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs shadow-md transition-colors"
          >
            Request Quote from {pro.name}
          </button>

          <a
            href={getWhatsAppUrl(`Hello ${pro.name}, I am viewing your verified profile on JobRail. I'd like to ask about your availability for a repair in Nairobi.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

      </div>
    </div>
  );
};
