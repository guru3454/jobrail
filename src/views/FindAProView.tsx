import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  MapPin, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Clock, 
  ArrowRight,
  Sparkles,
  Phone
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NAIROBI_ESTATES } from '../data/mockData';
import { Professional } from '../types';
import { ProfessionalProfileModal } from '../components/ProfessionalProfileModal';

export const FindAProView: React.FC = () => {
  const { 
    professionals, 
    categories, 
    setSelectedProId, 
    setIsRequestModalOpen, 
    getWhatsAppUrl,
    selectedCategorySlug 
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Nairobi');
  const [selectedCategory, setSelectedCategory] = useState(selectedCategorySlug || 'all');
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [modalProId, setModalProId] = useState<string | null>(null);

  const filteredPros = professionals.filter(pro => {
    const matchesSearch = pro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = selectedLocation === 'All Nairobi' || pro.location.toLowerCase().includes(selectedLocation.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || 
      pro.category.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesVerified = !onlyVerified || (pro.verification.identity === 'VERIFIED' && pro.verification.skills === 'VERIFIED');

    return matchesSearch && matchesLocation && matchesCategory && matchesVerified;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Page Header */}
      <div className="space-y-2">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
          Vetted Local Technicians
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
          Find a Verified Service Professional in Nairobi
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
          Filter by specific estate, trade license verification, customer rating, and emergency availability. Every professional maintains real completed job records.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
        
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
          
          {/* Keyword Search */}
          <div className="sm:col-span-5 relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by skill (e.g. plumber in Kilimani, solar inverter, CCTV...)"
              className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          {/* Location Dropdown */}
          <div className="sm:col-span-3">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
            >
              <option value="All Nairobi">All Nairobi Estates</option>
              {NAIROBI_ESTATES.map(est => (
                <option key={est} value={est}>{est}</option>
              ))}
            </select>
          </div>

          {/* Category Dropdown */}
          <div className="sm:col-span-4">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
            >
              <option value="all">All Trade Categories</option>
              {categories.map(c => (
                <option key={c.id} value={c.slug}>{c.name}</option>
              ))}
            </select>
          </div>

        </div>

        {/* Checkbox pills */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-slate-100 text-xs">
          <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700">
            <input
              type="checkbox"
              checked={onlyVerified}
              onChange={(e) => setOnlyVerified(e.target.checked)}
              className="w-4 h-4 rounded text-blue-600 focus:ring-blue-500 border-slate-300"
            />
            <span className="font-semibold">Only show technicians with Verified ID & Trade-Test Skills</span>
          </label>

          <span className="text-slate-500 font-mono text-xs">
            Showing <strong>{filteredPros.length}</strong> active professionals
          </span>
        </div>

      </div>

      {/* Professional Grid (Prompt Section 9) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPros.map((pro) => (
          <div
            key={pro.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
          >
            <div className="p-5 space-y-4">
              
              {/* Header: Photo, Name, Category */}
              <div className="flex items-start gap-3.5">
                <img
                  src={pro.avatar}
                  alt={pro.name}
                  className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div className="space-y-0.5 min-w-0">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    <h3 className="font-bold text-slate-900 text-base leading-tight truncate">
                      {pro.name}
                    </h3>
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-bold uppercase text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                      <ShieldCheck className="w-3 h-3 text-blue-600" />
                      Verified
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-1">{pro.title}</p>
                  <p className="text-xs text-slate-600 font-medium flex items-center gap-1 pt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                    <span className="truncate">{pro.location}</span>
                  </p>
                </div>
              </div>

              {/* Stats Bar */}
              <div className="grid grid-cols-3 gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-center text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Rating</span>
                  <span className="font-bold text-slate-900 flex items-center justify-center gap-0.5">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                    {pro.rating}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Jobs</span>
                  <span className="font-bold text-slate-900 font-mono">{pro.completedJobs}</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Experience</span>
                  <span className="font-bold text-slate-900 font-mono">{pro.yearsExperience} yrs</span>
                </div>
              </div>

              {/* Specialties & Availability */}
              <div className="space-y-2 text-xs">
                <div className="flex flex-wrap gap-1">
                  {pro.specialties.slice(0, 3).map((spec) => (
                    <span key={spec} className="px-2 py-0.5 rounded-md bg-slate-100 text-slate-700 text-[11px]">
                      {spec}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between text-slate-600 pt-1 border-t border-slate-100 text-xs">
                  <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    {pro.availability}
                  </span>
                  <span className="text-slate-900 font-bold">
                    Est. From KSh {pro.startingPriceKES.toLocaleString()}
                  </span>
                </div>
              </div>

            </div>

            {/* Bottom Card Actions (Prompt Section 9: View Profile, Request Quote, Contact) */}
            <div className="p-4 bg-slate-50/70 border-t border-slate-200 grid grid-cols-3 gap-2">
              <button
                onClick={() => setModalProId(pro.id)}
                className="py-2 px-2.5 rounded-xl border border-slate-300 hover:bg-white text-slate-800 text-xs font-semibold text-center transition-colors"
              >
                Profile
              </button>

              <button
                onClick={() => setIsRequestModalOpen(true)}
                className="py-2 px-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center transition-colors shadow-sm"
              >
                Quote
              </button>

              <a
                href={getWhatsAppUrl(`Hello ${pro.name}, I found your profile on JobRail Kenya. I would like to enquire about your availability.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 px-2.5 rounded-xl border border-emerald-300 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 text-xs font-bold flex items-center justify-center gap-1 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                <span>Chat</span>
              </a>
            </div>

          </div>
        ))}
      </div>

      {/* Modal Profile Viewer */}
      {modalProId && (
        <ProfessionalProfileModal
          isOpen={!!modalProId}
          onClose={() => setModalProId(null)}
          proId={modalProId}
        />
      )}

    </div>
  );
};
