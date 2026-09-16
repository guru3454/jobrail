import React from 'react';
import { 
  Scale, 
  Check, 
  ShieldCheck, 
  Star, 
  Clock, 
  ArrowRight, 
  FileCheck,
  AlertCircle,
  Wrench,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const QuoteComparisonView: React.FC = () => {
  const { jobs, quotes: allQuotes, activeJobId, acceptQuote, setActiveJobId, setCurrentView } = useApp();

  const targetJob = jobs.find(j => j.id === activeJobId) || jobs[0];
  const jobQuotes = allQuotes.filter(q => q.requestId === targetJob.requestId || q.requestId === targetJob.id);
  const quotesToDisplay = jobQuotes.length > 0 ? jobQuotes : allQuotes.slice(0, 3);

  const handleSelectQuote = (quoteId: string) => {
    acceptQuote(quoteId);
    setActiveJobId(targetJob.id);
    setCurrentView('job-tracking');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      
      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
            TRANSPARENT QUOTE COMPARISON
          </span>
          <span className="text-xs font-mono text-slate-500">
            Job #{targetJob.id}
          </span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display tracking-tight">
          Compare Verified Technician Estimates
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          {targetJob.serviceName} • {targetJob.location?.specificAddress ? `${targetJob.location.specificAddress}, ` : ''}{targetJob.location?.estate || 'Kilimani'}, Nairobi. Every quote on JobRail is itemized with separate labour, materials, and call-out fees. What you approve is what you pay.
        </p>
      </div>

      {/* Trust Notice */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-2.5 text-xs sm:text-sm text-emerald-900">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <span>
            <strong>Zero Hidden Surprises:</strong> All quotes include JobRail workmanship warranty. Funds remain in escrow until you approve the completed repair.
          </span>
        </div>
        <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-lg">
          KSh Escrow Protected
        </span>
      </div>

      {/* Comparison Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {quotesToDisplay.map((quote) => {
          const isSelected = targetJob.selectedQuote?.id === quote.id || quote.status === 'ACCEPTED';
          const proName = quote.proName || (quote as any).professionalName || 'Verified Fundi';
          const proAvatar = quote.proAvatar || (quote as any).professionalAvatar || 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=400&auto=format&fit=crop&q=80';
          const proRating = quote.proRating ?? (quote as any).rating ?? 4.9;
          const proJobs = quote.proCompletedJobs ?? (quote as any).completedJobs ?? 50;
          const callOut = quote.callOutKES ?? (quote as any).callOutFeeKES ?? 0;
          const duration = quote.estimatedDuration || `${(quote as any).estimatedHours || 2} Hours`;
          const notes = quote.notes || (quote as any).scopeNotes || 'Comprehensive diagnostic and replacement with certified parts.';

          return (
            <div
              key={quote.id}
              className={`bg-white rounded-3xl border-2 transition-all p-6 flex flex-col justify-between space-y-6 ${
                isSelected 
                  ? 'border-blue-600 ring-2 ring-blue-500/30 shadow-xl' 
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="space-y-4">
                
                {/* Pro Header */}
                <div className="flex items-center gap-3">
                  <img
                    src={proAvatar}
                    alt={proName}
                    className="w-14 h-14 rounded-2xl object-cover border border-slate-200 shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h3 className="font-bold text-slate-900 text-base font-display truncate">{proName}</h3>
                      <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                        Verified
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 pt-0.5">
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-400" />
                        {proRating}
                      </span>
                      <span>•</span>
                      <span className="font-mono font-medium">{proJobs} Jobs</span>
                    </div>
                  </div>
                </div>

                {/* Total Price Banner */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-center space-y-1">
                  <span className="text-xs uppercase font-bold text-slate-500 tracking-wider font-mono">
                    Total Binding Estimate
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900 font-mono tracking-tight">
                    KSh {quote.totalKES.toLocaleString()}
                  </div>
                  <span className="text-[11px] text-slate-500 block">Inclusive of labour & genuine spares</span>
                </div>

                {/* Itemized Breakdown Table */}
                <div className="space-y-2.5 text-xs sm:text-sm">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block font-mono">
                    Itemized Cost Breakdown:
                  </span>
                  
                  <div className="space-y-2 text-slate-700">
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">Labour Fee:</span>
                      <span className="font-mono font-bold text-slate-900">KSh {quote.labourKES.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">Materials / Parts:</span>
                      <span className="font-mono font-bold text-slate-900">
                        {quote.materialsKES > 0 ? `KSh ${quote.materialsKES.toLocaleString()}` : 'Client supplies materials'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">Diagnostic & Call-out:</span>
                      <span className="font-mono font-bold text-slate-900">
                        {callOut > 0 ? `KSh ${callOut.toLocaleString()}` : 'Included Free'}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-100">
                      <span className="text-slate-600">Estimated Duration:</span>
                      <span className="font-bold text-slate-800">{duration}</span>
                    </div>
                    <div className="flex justify-between py-1.5 text-emerald-800 font-semibold bg-emerald-50 px-2.5 rounded-lg border border-emerald-100">
                      <span>Workmanship Warranty:</span>
                      <span className="font-bold font-mono">{quote.warrantyDays} Days Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Scope Notes */}
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-xs text-slate-600 leading-relaxed italic">
                  “{notes}”
                </div>

              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelectQuote(quote.id)}
                className={`w-full py-3.5 px-5 rounded-xl font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-md ${
                  isSelected
                    ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSelected ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Accepted • View Tracking Rail</span>
                  </>
                ) : (
                  <>
                    <span>Accept Quote & Book Technician</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>

            </div>
          );
        })}
      </div>

    </div>
  );
};

