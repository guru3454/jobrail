import React from 'react';
import { 
  X, 
  Scale, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Calendar, 
  AlertCircle,
  MessageCircle,
  Wrench,
  Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { StructuredQuote } from '../types';

interface QuoteComparisonModalProps {
  isOpen: boolean;
  onClose: () => void;
  requestId?: string;
}

export const QuoteComparisonModal: React.FC<QuoteComparisonModalProps> = ({
  isOpen,
  onClose,
  requestId
}) => {
  const { quotes, acceptQuote, activeJob, getWhatsAppUrl, setCurrentView, setActiveJobId } = useApp();

  if (!isOpen) return null;

  const targetReqId = requestId || activeJob?.requestId || 'req-001';
  const relevantQuotes = quotes.filter(q => q.requestId === targetReqId || q.requestId === 'req-001');

  const handleAccept = (quote: StructuredQuote) => {
    acceptQuote(quote.id);
    onClose();
    if (activeJob) {
      setActiveJobId(activeJob.id);
      setCurrentView('job-tracking');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600 text-white">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold">Structured Quote Comparison</h3>
              <p className="text-xs text-slate-400">
                Compare verified technician estimates transparently. Choose what fits your priorities.
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Informative Sub-header */}
        <div className="bg-blue-50/60 px-6 py-2.5 border-b border-blue-100 flex flex-wrap items-center justify-between gap-2 text-xs text-blue-900">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-600" />
            <span>
              All quotes are binding once accepted. JobRail guarantees itemized breakdown with zero hidden call-out fees.
            </span>
          </div>
          <span className="font-mono text-[11px] text-blue-700 font-semibold">
            Job #{activeJob?.id || 'JR-000001'}
          </span>
        </div>

        {/* Quotes Grid */}
        <div className="p-6 overflow-y-auto space-y-4">
          {relevantQuotes.length === 0 ? (
            <div className="text-center py-12">
              <Clock className="w-10 h-10 text-slate-300 mx-auto mb-3 animate-spin" />
              <h4 className="text-base font-bold text-slate-800">Quotes are being compiled</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
                Matched professionals in your estate are reviewing the diagnostic details and photos.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relevantQuotes.map((quote) => {
                const isAccepted = quote.status === 'ACCEPTED';
                return (
                  <div 
                    key={quote.id}
                    className={`rounded-xl border p-4 flex flex-col justify-between transition-all ${
                      isAccepted 
                        ? 'border-blue-600 bg-blue-50/30 ring-2 ring-blue-500/20' 
                        : 'border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm'
                    }`}
                  >
                    <div>
                      {/* Pro Header */}
                      <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
                        <div className="flex items-center gap-2.5">
                          <img 
                            src={quote.proAvatar} 
                            alt={quote.proName}
                            className="w-10 h-10 rounded-full object-cover border border-slate-200" 
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <h4 className="text-sm font-bold text-slate-900 leading-tight">
                              {quote.proName}
                            </h4>
                            <p className="text-[11px] text-slate-500">
                              ★ {quote.proRating} ({quote.proCompletedJobs} jobs)
                            </p>
                          </div>
                        </div>
                        {isAccepted && (
                          <span className="text-[10px] font-bold uppercase bg-blue-600 text-white px-2 py-0.5 rounded-full">
                            Selected
                          </span>
                        )}
                      </div>

                      {/* Financial Breakdown */}
                      <div className="py-3 space-y-1.5 text-xs text-slate-600 border-b border-slate-100">
                        <div className="flex justify-between">
                          <span>Labour Cost:</span>
                          <span className="font-semibold text-slate-900">KSh {quote.labourKES.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Materials & Spares:</span>
                          <span className="font-semibold text-slate-900">
                            {quote.materialsKES > 0 ? `KSh ${quote.materialsKES.toLocaleString()}` : 'Client purchases'}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span>Call-out & Diagnostic:</span>
                          <span className="font-semibold text-slate-900">
                            {quote.callOutKES > 0 ? `KSh ${quote.callOutKES.toLocaleString()}` : 'Included / Free'}
                          </span>
                        </div>
                        
                        <div className="pt-2 flex justify-between items-baseline font-bold text-slate-900 text-sm border-t border-slate-100">
                          <span>Total Agreed:</span>
                          <span className="text-blue-700 font-mono text-base">
                            KSh {quote.totalKES.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Timeline & Warranty */}
                      <div className="py-2.5 space-y-1 text-xs text-slate-600">
                        <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{quote.warrantyDays} Days Workmanship Warranty</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-slate-600">
                          <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>ETA: <strong>{quote.estimatedArrival}</strong></span>
                        </div>
                      </div>

                      {/* Notes */}
                      <p className="text-[11px] text-slate-500 bg-slate-50 p-2 rounded-lg mt-1 italic">
                        "{quote.notes}"
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="pt-4 mt-3 border-t border-slate-100 space-y-2">
                      <button
                        onClick={() => handleAccept(quote)}
                        disabled={isAccepted}
                        className={`w-full py-2 px-3 rounded-lg text-xs font-bold transition-colors ${
                          isAccepted
                            ? 'bg-slate-100 text-slate-400 cursor-default'
                            : 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                        }`}
                      >
                        {isAccepted ? 'Currently Active' : 'Accept & Book Job'}
                      </button>

                      <a
                        href={getWhatsAppUrl(`Hello ${quote.proName}, I received your quote of KSh ${quote.totalKES.toLocaleString()} for job ${activeJob?.id || 'JR-000001'} on JobRail. I'd like to confirm a question.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-3 rounded-lg border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Clarify on WhatsApp</span>
                      </a>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <span>
            Payment is held securely and only settled to the fundi after your satisfaction approval.
          </span>
          <button 
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-300 text-slate-700 font-semibold hover:bg-slate-100"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
