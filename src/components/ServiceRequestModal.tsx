import React, { useState } from 'react';
import { 
  X, 
  Wrench, 
  MapPin, 
  Calendar, 
  Clock, 
  Upload, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  AlertCircle,
  FileText,
  Zap
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NAIROBI_ESTATES } from '../data/mockData';
import { UrgencyLevel } from '../types';

export const ServiceRequestModal: React.FC = () => {
  const { 
    isRequestModalOpen, 
    setIsRequestModalOpen, 
    categories, 
    createServiceRequest, 
    setCurrentView,
    setActiveJobId,
    setIsQuoteModalOpen
  } = useApp();

  const [step, setStep] = useState<'FORM' | 'SUCCESS'>('FORM');
  const [createdJobId, setCreatedJobId] = useState<string>('');

  const [category, setCategory] = useState<string>('plumbing');
  const [serviceName, setServiceName] = useState<string>('Leak repairs & pipe bursts');
  const [problemDescription, setProblemDescription] = useState<string>(
    'Water actively leaking underneath kitchen sink. Waste pipe appears cracked at the joint.'
  );
  const [urgency, setUrgency] = useState<UrgencyLevel>('STANDARD');
  const [county] = useState<string>('Nairobi');
  const [estate, setEstate] = useState<string>('Kilimani');
  const [specificAddress, setSpecificAddress] = useState<string>('Rose Avenue Court, Apt 304');
  const [preferredDate, setPreferredDate] = useState<string>('2026-09-17');
  const [preferredTime, setPreferredTime] = useState<string>('2:00 PM – 4:00 PM');
  const [budgetRange, setBudgetRange] = useState<string>('KSh 2,500 – KSh 5,000');
  const [uploadedPhotos, setUploadedPhotos] = useState<string[]>([
    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80'
  ]);
  const [customerName, setCustomerName] = useState<string>('Edwin Anyango');
  const [customerPhone, setCustomerPhone] = useState<string>('0742102098');

  if (!isRequestModalOpen) return null;

  const currentCategoryObj = categories.find(c => c.id === category) || categories[0];

  const handleCategoryChange = (catId: string) => {
    setCategory(catId);
    const cat = categories.find(c => c.id === catId);
    if (cat && cat.subServices.length > 0) {
      setServiceName(cat.subServices[0]);
    }
  };

  const handleSimulatePhotoUpload = () => {
    // Add a photo preview
    setUploadedPhotos(prev => [
      ...prev,
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80'
    ]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = createServiceRequest({
      category: currentCategoryObj.name,
      serviceName,
      problemDescription,
      urgency,
      county,
      estate,
      specificAddress,
      preferredDate,
      preferredTime,
      budgetRange,
      photos: uploadedPhotos,
      customerName,
      customerPhone
    });
    setCreatedJobId(newId);
    setStep('SUCCESS');
  };

  const handleClose = () => {
    setIsRequestModalOpen(false);
    setStep('FORM');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold block">
              JobRail Service Engine • Nairobi
            </span>
            <h3 className="text-base font-bold text-white">
              {step === 'FORM' ? 'Create a Service Request' : 'Service Job Initialized'}
            </h3>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {step === 'FORM' ? (
          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-5 text-xs sm:text-sm">
            
            {/* Category selection */}
            <div>
              <label className="block font-semibold text-slate-900 mb-1.5 text-xs">
                Service Category <span className="text-rose-500">*</span>
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => handleCategoryChange(cat.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      category === cat.id
                        ? 'border-blue-600 bg-blue-50/50 text-blue-900 font-bold ring-1 ring-blue-500'
                        : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <p className="text-xs truncate">{cat.name.split(' & ')[0]}</p>
                    <span className="text-[10px] text-slate-500 block">From KSh {cat.startingPriceKES.toLocaleString()}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sub service selection */}
            <div>
              <label className="block font-semibold text-slate-900 mb-1.5 text-xs">
                Specific Scope / Task
              </label>
              <select
                value={serviceName}
                onChange={(e) => setServiceName(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
              >
                {currentCategoryObj.subServices.map((sub) => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </div>

            {/* Problem Description */}
            <div>
              <label className="block font-semibold text-slate-900 mb-1 text-xs">
                Describe the problem clearly <span className="text-rose-500">*</span>
              </label>
              <textarea
                rows={3}
                required
                value={problemDescription}
                onChange={(e) => setProblemDescription(e.target.value)}
                placeholder="E.g., Water leaking underneath kitchen sink into cupboard. Pipe joint seems broken."
                className="w-full rounded-lg border border-slate-300 p-3 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
              />
              <span className="text-[11px] text-slate-500">
                Detailed descriptions help technicians provide precise quotes without diagnostic markups.
              </span>
            </div>

            {/* Urgency & Timing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-900 mb-1.5 text-xs">
                  Urgency
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setUrgency('STANDARD')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold ${
                      urgency === 'STANDARD'
                        ? 'border-blue-600 bg-blue-50 text-blue-900'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    Standard Booking
                  </button>
                  <button
                    type="button"
                    onClick={() => setUrgency('EMERGENCY_NOW')}
                    className={`py-2 px-3 rounded-lg border text-xs font-semibold flex items-center justify-center gap-1 ${
                      urgency === 'EMERGENCY_NOW'
                        ? 'border-amber-600 bg-amber-50 text-amber-900 ring-1 ring-amber-500'
                        : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-amber-600" />
                    <span>Today / Urgent</span>
                  </button>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-900 mb-1.5 text-xs">
                  Preferred Time Window
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
                >
                  <option value="Morning (8:00 AM – 11:00 AM)">Morning (8:00 AM – 11:00 AM)</option>
                  <option value="Midday (11:00 AM – 2:00 PM)">Midday (11:00 AM – 2:00 PM)</option>
                  <option value="Afternoon (2:00 PM – 4:00 PM)">Afternoon (2:00 PM – 4:00 PM)</option>
                  <option value="Late Afternoon (4:00 PM – 6:30 PM)">Late Afternoon (4:00 PM – 6:30 PM)</option>
                  <option value="Urgent / First Available">Urgent / First Available</option>
                </select>
              </div>
            </div>

            {/* Location in Nairobi */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-900 mb-1.5 text-xs">
                  Nairobi Estate / Area <span className="text-rose-500">*</span>
                </label>
                <select
                  value={estate}
                  onChange={(e) => setEstate(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-slate-800"
                >
                  {NAIROBI_ESTATES.map((est) => (
                    <option key={est} value={est}>{est}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-900 mb-1 text-xs">
                  Building / Apartment / House No.
                </label>
                <input
                  type="text"
                  value={specificAddress}
                  onChange={(e) => setSpecificAddress(e.target.value)}
                  placeholder="E.g., Rose Avenue Court, Apt 304"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                />
              </div>
            </div>

            {/* Photos & Evidence */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="font-semibold text-slate-900 text-xs">
                  Attach Photos or Video (Recommended)
                </label>
                <span className="text-[11px] text-slate-500">{uploadedPhotos.length} attached</span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleSimulatePhotoUpload}
                  className="px-3 py-2 border-2 border-dashed border-slate-300 hover:border-blue-500 rounded-lg text-xs font-semibold text-slate-600 flex items-center gap-2 hover:bg-blue-50/40 transition-colors"
                >
                  <Upload className="w-3.5 h-3.5 text-blue-600" />
                  <span>+ Attach Photo</span>
                </button>
                {uploadedPhotos.map((url, i) => (
                  <img
                    key={i}
                    src={url}
                    alt="Upload thumbnail"
                    className="w-10 h-10 rounded-lg object-cover border border-slate-200"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
            </div>

            {/* Contact details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-slate-100">
              <div>
                <label className="block font-semibold text-slate-900 mb-1 text-xs">
                  Your Name
                </label>
                <input
                  type="text"
                  required
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                />
              </div>
              <div>
                <label className="block font-semibold text-slate-900 mb-1 text-xs">
                  Phone Number (M-Pesa / SMS)
                </label>
                <input
                  type="tel"
                  required
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="07XX XXX XXX"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
                />
              </div>
            </div>

            {/* Submit button */}
            <div className="pt-3 border-t border-slate-100">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md shadow-blue-600/20 text-sm flex items-center justify-center gap-2 transition-all"
              >
                <span>Submit Service Request</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <p className="text-[11px] text-center text-slate-500 mt-2">
                Free to request • Zero commitment • Compare quotes before booking
              </p>
            </div>

          </form>
        ) : (
          /* Success Screen following Section 8 */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 font-mono">
                JOB CREATED
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                Job ID: <span className="text-blue-600 font-mono">{createdJobId}</span>
              </h3>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 text-xs font-semibold mt-3">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                <span>Status: Looking for professionals & compiling quotes</span>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-left max-w-md mx-auto text-xs text-slate-600 space-y-1.5">
              <div className="flex justify-between">
                <span>Category:</span>
                <span className="font-semibold text-slate-900">{currentCategoryObj.name}</span>
              </div>
              <div className="flex justify-between">
                <span>Location:</span>
                <span className="font-semibold text-slate-900">{estate}, Nairobi</span>
              </div>
              <div className="flex justify-between">
                <span>Quotes Status:</span>
                <span className="text-emerald-700 font-bold">3 Verified Fundis Matched</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <button
                onClick={() => {
                  handleClose();
                  setIsQuoteModalOpen(true);
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Compare Quotes Now</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  handleClose();
                  setActiveJobId(createdJobId);
                  setCurrentView('job-tracking');
                }}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 hover:bg-slate-100 font-bold text-xs transition-colors"
              >
                Open Job Tracker
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
