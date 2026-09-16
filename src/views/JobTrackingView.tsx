import React from 'react';
import { 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  AlertCircle, 
  ShieldCheck, 
  FileCheck, 
  Receipt, 
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  Wrench,
  Camera,
  Scale,
  RotateCcw
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { JobStatusType } from '../types';

export const JobTrackingView: React.FC = () => {
  const { 
    jobs, 
    professionals,
    activeJobId, 
    setActiveJobId, 
    updateJobStatus, 
    setIsProofModalOpen, 
    setIsPaymentModalOpen,
    setIsQuoteModalOpen,
    getWhatsAppUrl,
    setCurrentView 
  } = useApp();

  const currentJob = jobs.find(j => j.id === activeJobId) || jobs[0];

  const statusSteps: { key: JobStatusType; label: string; desc: string }[] = [
    { key: 'LOOKING_FOR_PROS', label: 'Request Submitted', desc: 'Job details dispatched to matched Nairobi professionals' },
    { key: 'QUOTES_RECEIVED', label: 'Quotes Received', desc: 'Review structured quotes with transparent labour & spares' },
    { key: 'ACCEPTED', label: 'Quote Accepted', desc: 'Labour and materials approved by customer' },
    { key: 'SCHEDULED', label: 'Scheduled', desc: 'Technician confirmed arrival window' },
    { key: 'ON_THE_WAY', label: 'On the Way', desc: 'Technician en route to estate with tools & equipment' },
    { key: 'ARRIVED', label: 'Arrived On-Site', desc: 'Technician checked in at premises' },
    { key: 'DIAGNOSING', label: 'Diagnosing', desc: 'Assessing root cause & inspecting system' },
    { key: 'WORK_IN_PROGRESS', label: 'Work in Progress', desc: 'Repairs and installations being executed' },
    { key: 'AWAITING_APPROVAL', label: 'Awaiting Sign-off', desc: 'Proof of work submitted with before & after photos' },
    { key: 'PAYMENT_PENDING', label: 'Payment Settled', desc: 'M-Pesa escrow finalized and released' },
    { key: 'COMPLETED', label: 'Job Closed', desc: 'Warranty certificate and invoice permanently archived' }
  ];

  const currentStepIndex = statusSteps.findIndex(s => s.key === currentJob.status);

  // Status progression helper for simulation
  const getNextStatus = (current: JobStatusType): JobStatusType | null => {
    const sequence: JobStatusType[] = [
      'LOOKING_FOR_PROS',
      'QUOTES_RECEIVED',
      'ACCEPTED',
      'SCHEDULED',
      'ON_THE_WAY',
      'ARRIVED',
      'DIAGNOSING',
      'WORK_IN_PROGRESS',
      'AWAITING_APPROVAL',
      'PAYMENT_PENDING',
      'COMPLETED'
    ];
    const idx = sequence.indexOf(current);
    if (idx >= 0 && idx < sequence.length - 1) {
      return sequence[idx + 1];
    }
    return null;
  };

  const handleAdvanceStatus = () => {
    const next = getNextStatus(currentJob.status);
    if (next) {
      updateJobStatus(currentJob.id, next);
    }
  };

  // Resolve assigned pro details
  const matchedPro = professionals.find(p => p.id === currentJob.proId) || (currentJob.proName ? {
    id: currentJob.proId || 'pro-001',
    name: currentJob.proName,
    title: 'Certified Trade Technician',
    category: currentJob.serviceCategory,
    location: currentJob.location?.estate || 'Kilimani, Nairobi',
    avatar: currentJob.proAvatar || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&auto=format&fit=crop&q=80',
    phone: currentJob.proPhone || '07421021098'
  } : null);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Top Header & Job Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
              REAL-TIME JOB RAIL
            </span>
            <span className="text-xs font-mono bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-bold border border-slate-200">
              #{currentJob.id}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-display tracking-tight">
            {currentJob.serviceName}
          </h1>
          <p className="text-sm text-slate-600">
            Location: <strong className="text-slate-900">{currentJob.location?.specificAddress ? `${currentJob.location.specificAddress}, ` : ''}{currentJob.location?.estate || 'Kilimani'}, Nairobi</strong>
          </p>
        </div>

        {/* Job Selector if multiple */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-semibold hidden sm:inline">Active Job:</span>
          <select
            value={currentJob.id}
            onChange={(e) => setActiveJobId(e.target.value)}
            className="py-2 px-3 rounded-xl border border-slate-300 text-xs font-bold bg-white text-slate-800 focus:ring-2 focus:ring-blue-500"
          >
            {jobs.map(j => (
              <option key={j.id} value={j.id}>
                {j.id} - {j.serviceName} ({j.status.replace(/_/g, ' ')})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Main Grid: Left Timeline / Right Pro Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left: 11-Step Detailed Stepper */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-slate-900 text-base sm:text-lg font-display">
              Live Progress Milestones
            </h3>
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Stage {currentStepIndex >= 0 ? currentStepIndex + 1 : 1} of 11
            </span>
          </div>

          <div className="relative border-l-2 border-slate-200 ml-4 pl-6 space-y-6">
            {statusSteps.map((step, idx) => {
              const isPast = idx < currentStepIndex;
              const isCurrent = idx === currentStepIndex;

              return (
                <div key={step.key} className="relative group">
                  {/* Step Dot */}
                  <div 
                    className={`absolute -left-[33px] top-0.5 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                      isPast
                        ? 'bg-emerald-600 text-white'
                        : isCurrent
                        ? 'bg-blue-600 text-white ring-4 ring-blue-100 animate-pulse'
                        : 'bg-slate-100 text-slate-400 border border-slate-300'
                    }`}
                  >
                    {isPast ? <CheckCircle2 className="w-4 h-4" /> : idx + 1}
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h4 className={`text-sm sm:text-base font-bold ${isCurrent ? 'text-blue-600 font-display' : isPast ? 'text-slate-900' : 'text-slate-400'}`}>
                        {step.label}
                      </h4>
                      {isCurrent && (
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white px-2 py-0.5 rounded-full font-mono">
                          Current Stage
                        </span>
                      )}
                    </div>
                    <p className={`text-xs sm:text-sm leading-relaxed ${isCurrent ? 'text-slate-700 font-medium' : isPast ? 'text-slate-600' : 'text-slate-400'}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Simulation Controls */}
          <div className="pt-6 border-t border-slate-100 space-y-3">
            <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block font-mono">
              Progress & Action Controls:
            </span>
            <div className="flex flex-wrap items-center gap-2.5">
              {currentJob.status !== 'COMPLETED' && (
                <button
                  onClick={handleAdvanceStatus}
                  className="py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 shadow-sm whitespace-nowrap"
                >
                  <span>Advance to Next Milestone</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              {/* Specific shortcut buttons depending on stage */}
              {(currentJob.status === 'LOOKING_FOR_PROS' || currentJob.status === 'QUOTES_RECEIVED') && (
                <button
                  onClick={() => setCurrentView('quote-comparison')}
                  className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm flex items-center gap-1.5 whitespace-nowrap"
                >
                  <Scale className="w-3.5 h-3.5" />
                  <span>Compare 3 Structured Quotes</span>
                </button>
              )}

              {(currentJob.status === 'WORK_IN_PROGRESS' || currentJob.status === 'AWAITING_APPROVAL' || currentJob.status === 'PAYMENT_PENDING' || currentJob.status === 'COMPLETED') && (
                <button
                  onClick={() => setIsProofModalOpen(true)}
                  className="py-2.5 px-4 bg-blue-50 text-blue-700 hover:bg-blue-100 font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 border border-blue-200 whitespace-nowrap"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Inspect Proof of Work Photos</span>
                </button>
              )}

              {(currentJob.status === 'AWAITING_APPROVAL' || currentJob.status === 'PAYMENT_PENDING') && (
                <button
                  onClick={() => setIsPaymentModalOpen(true)}
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5 shadow-md whitespace-nowrap"
                >
                  <Receipt className="w-3.5 h-3.5" />
                  <span>Approve & Pay via M-Pesa</span>
                </button>
              )}

              <button
                onClick={() => updateJobStatus(currentJob.id, 'LOOKING_FOR_PROS')}
                className="py-2.5 px-3 border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs rounded-xl transition-colors flex items-center gap-1 whitespace-nowrap font-medium"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset to Start</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right: Assigned Professional & Job Summary */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Assigned Technician Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-mono">
              Assigned Field Professional
            </span>

            {matchedPro ? (
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <img
                    src={matchedPro.avatar}
                    alt={matchedPro.name}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base font-display">
                      {matchedPro.name}
                    </h4>
                    <p className="text-xs text-slate-500">{matchedPro.title}</p>
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mt-1">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      ID & Skills Verified
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={`tel:${matchedPro.phone}`}
                    className="p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-600" />
                    <span>Call Pro</span>
                  </a>
                  <a
                    href={getWhatsAppUrl(`Hello ${matchedPro.name}, I am tracking Job #${currentJob.id} on JobRail.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-200 font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            ) : (
              <div className="p-4 bg-slate-50 rounded-2xl text-center space-y-2">
                <p className="text-xs text-slate-600 font-medium">Matching with verified technicians in your estate...</p>
                <button
                  onClick={() => setCurrentView('quote-comparison')}
                  className="text-xs font-bold text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  <span>View 3 Quotes Ready</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            )}
          </div>

          {/* Job Details Card */}
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3.5 text-xs sm:text-sm">
            <h4 className="font-bold text-slate-900 text-base font-display">Job Specifications</h4>
            
            <div className="space-y-2.5 text-slate-700">
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Category:</span>
                <strong className="text-slate-900">{currentJob.serviceCategory}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Estate:</span>
                <strong className="text-slate-900">{currentJob.location?.estate || 'Kilimani, Nairobi'}</strong>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-100">
                <span className="text-slate-500">Urgency:</span>
                <span className={`font-bold uppercase font-mono text-xs ${currentJob.urgency === 'EMERGENCY_NOW' ? 'text-rose-600 bg-rose-50 px-2 py-0.5 rounded' : 'text-slate-800'}`}>
                  {currentJob.urgency.replace(/_/g, ' ')}
                </span>
              </div>
              {currentJob.selectedQuote && (
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500">Approved Total:</span>
                  <strong className="text-blue-600 font-mono font-bold text-sm sm:text-base">
                    KSh {currentJob.selectedQuote.totalKES.toLocaleString()}
                  </strong>
                </div>
              )}
              {currentJob.selectedQuote && (
                <div className="flex justify-between py-1">
                  <span className="text-slate-500">Warranty:</span>
                  <span className="font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-mono text-xs">
                    {currentJob.selectedQuote.warrantyDays} Days Guaranteed
                  </span>
                </div>
              )}
            </div>

            <p className="text-slate-600 pt-2 text-xs leading-relaxed italic bg-slate-50 p-3.5 rounded-xl border border-slate-200/80">
              “{currentJob.problemDescription}”
            </p>
          </div>

          {/* Warranty & Proof Shortcut */}
          <div className="bg-emerald-50/80 border border-emerald-200 rounded-3xl p-5 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-emerald-950 font-bold">
              <FileCheck className="w-4 h-4 text-emerald-700" />
              <span className="font-display text-sm">JobRail Guarantee Rail</span>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">
              No payments are released without your digital sign-off on before-and-after photo proof. Every completed repair is permanently added to your property ledger.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

