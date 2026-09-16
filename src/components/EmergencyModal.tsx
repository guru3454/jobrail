import React, { useState } from 'react';
import { 
  X, 
  Zap, 
  AlertTriangle, 
  Phone, 
  MessageCircle, 
  MapPin, 
  CheckCircle2, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { NAIROBI_ESTATES } from '../data/mockData';

export const EmergencyModal: React.FC = () => {
  const { 
    isEmergencyModalOpen, 
    setIsEmergencyModalOpen, 
    phoneContact, 
    getWhatsAppUrl, 
    createServiceRequest, 
    setCurrentView,
    setActiveJobId 
  } = useApp();

  const [selectedIssue, setSelectedIssue] = useState<string>('Burst pipe');
  const [estate, setEstate] = useState<string>('Kilimani');
  const [phone, setPhone] = useState<string>('0742102098');
  const [details, setDetails] = useState<string>('Main water pipe leaking heavily, needs shut-off and replacement.');
  const [isDispatched, setIsDispatched] = useState(false);
  const [dispatchedJobId, setDispatchedJobId] = useState<string>('');

  if (!isEmergencyModalOpen) return null;

  const emergencyCategories = [
    { title: 'Burst pipe', desc: 'Active flooding, broken mains, or fractured PPR pipe' },
    { title: 'Power failure', desc: 'Tripped main breaker, smoking DB box, or blackout in single unit' },
    { title: 'Locked out', desc: 'Broken door lock, jammed cylinder, or lost keys' },
    { title: 'Major leak', desc: 'Ceiling leakage, toilet cistern overflowing uncontrollably' },
    { title: 'Broken water pump', desc: 'Booster pump burnout or dry run alarm sounding' },
    { title: 'Security/CCTV issue', desc: 'Gate energizer failure or alarm siren malfunction' }
  ];

  const handleDispatch = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = createServiceRequest({
      category: selectedIssue.includes('pipe') || selectedIssue.includes('leak') || selectedIssue.includes('pump') ? 'Plumbing & Water Systems' : 'Electrical & Backup Power',
      serviceName: `EMERGENCY: ${selectedIssue}`,
      problemDescription: details,
      urgency: 'EMERGENCY_NOW',
      county: 'Nairobi',
      estate,
      specificAddress: `${estate}, Nairobi (Urgent On-Site Callout)`,
      preferredDate: 'Today',
      preferredTime: 'Immediate / Next Available',
      customerName: 'Emergency Client',
      customerPhone: phone
    });

    setDispatchedJobId(newId);
    setIsDispatched(true);
  };

  const handleClose = () => {
    setIsEmergencyModalOpen(false);
    setIsDispatched(false);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-amber-200 overflow-hidden flex flex-col">
        
        {/* Emergency header */}
        <div className="px-6 py-4 bg-amber-950 text-white flex items-center justify-between border-b border-amber-900">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-600 text-white">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-amber-400 font-bold">
                  EMERGENCY SERVICE REQUEST
                </span>
              </div>
              <h3 className="text-base font-bold text-white">Need Urgent Help in Nairobi?</h3>
            </div>
          </div>
          <button 
            onClick={handleClose}
            className="p-1.5 text-amber-300 hover:text-white rounded-lg hover:bg-amber-900 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Instant Contact Ribbon */}
        <div className="bg-amber-50 px-6 py-3 border-b border-amber-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-amber-950 font-medium">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>Emergency hotline operates 24/7 across Nairobi estates.</span>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href={`tel:${phoneContact}`}
              className="font-bold text-amber-900 hover:underline flex items-center gap-1"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{phoneContact}</span>
            </a>
          </div>
        </div>

        {!isDispatched ? (
          <form onSubmit={handleDispatch} className="p-6 space-y-4 text-xs sm:text-sm">
            <div>
              <label className="block font-bold text-slate-900 mb-1 text-xs">
                Select Urgent Critical Issue:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {emergencyCategories.map((item) => (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => setSelectedIssue(item.title)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      selectedIssue === item.title
                        ? 'border-amber-600 bg-amber-50/60 font-bold text-amber-950 ring-1 ring-amber-500'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <p className="text-xs font-bold">{item.title}</p>
                    <span className="text-[10px] text-slate-500 line-clamp-1">{item.desc}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block font-semibold text-slate-900 mb-1 text-xs">
                  Your Estate (Nairobi)
                </label>
                <select
                  value={estate}
                  onChange={(e) => setEstate(e.target.value)}
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500 bg-white"
                >
                  {NAIROBI_ESTATES.map(est => (
                    <option key={est} value={est}>{est}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-semibold text-slate-900 mb-1 text-xs">
                  Your Mobile (Instant Contact)
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="07XX XXX XXX"
                  className="w-full rounded-lg border border-slate-300 px-3 py-2 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-slate-900 mb-1 text-xs">
                Brief details / exact location:
              </label>
              <textarea
                rows={2}
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                className="w-full rounded-lg border border-slate-300 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                type="submit"
                className="w-full py-3 px-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-xl shadow-md shadow-amber-600/20 text-xs sm:text-sm flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span>Transmit Emergency Request to Nearby Pros</span>
              </button>

              <a
                href={getWhatsAppUrl(`EMERGENCY: I have a ${selectedIssue} in ${estate}, Nairobi. Phone: ${phone}. Please dispatch an available technician immediately.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Or Chat with Dispatcher on WhatsApp</span>
              </a>
            </div>
          </form>
        ) : (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-amber-50 text-amber-600 border border-amber-300 rounded-2xl flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-mono uppercase font-bold tracking-widest text-amber-700">
                EMERGENCY TICKET BROADCASTED
              </span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1">
                Job #{dispatchedJobId}
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Verified on-call technicians near <strong>{estate}</strong> are reviewing your emergency ticket right now.
              </p>
            </div>

            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-700 text-left space-y-1">
              <div className="flex justify-between">
                <span>Issue:</span>
                <span className="font-bold">{selectedIssue}</span>
              </div>
              <div className="flex justify-between">
                <span>Contact Registered:</span>
                <span className="font-mono font-bold">{phone}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <button
                onClick={() => {
                  handleClose();
                  setActiveJobId(dispatchedJobId);
                  setCurrentView('job-tracking');
                }}
                className="flex-1 py-2.5 px-4 rounded-xl bg-blue-600 text-white font-bold text-xs"
              >
                Track Emergency Dispatch
              </button>
              <button
                onClick={handleClose}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-700 font-semibold text-xs"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
