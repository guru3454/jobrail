import React, { useState } from 'react';
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Layers, 
  Image as ImageIcon, 
  FileText, 
  Lock,
  ArrowRight,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface ProofOfWorkModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId?: string;
}

export const ProofOfWorkModal: React.FC<ProofOfWorkModalProps> = ({
  isOpen,
  onClose,
  jobId
}) => {
  const { jobs, setIsPaymentModalOpen, userRole } = useApp();
  const [confirmed, setConfirmed] = useState(false);
  const [activeTab, setActiveTab] = useState<'PHOTOS' | 'MATERIALS' | 'SIGNOFF'>('PHOTOS');

  if (!isOpen) return null;

  const targetJob = jobs.find(j => j.id === (jobId || 'JR-000001')) || jobs[0];
  const proof = targetJob.proofOfWork;

  const handleApprove = () => {
    onClose();
    setIsPaymentModalOpen(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-purple-600 text-white">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">Proof of Work & Documentation</h3>
              <p className="text-xs text-slate-400">
                Job #{targetJob.id} • {targetJob.serviceName}
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

        {/* Status Bar */}
        <div className="bg-purple-50/70 px-6 py-2.5 border-b border-purple-100 flex items-center justify-between text-xs text-purple-950">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-purple-700" />
            <span>
              All evidence is archived permanently into your property service record.
            </span>
          </div>
          <span className="font-semibold text-purple-800">
            Technician: {targetJob.proName || 'John Otieno'}
          </span>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6">
          <button
            onClick={() => setActiveTab('PHOTOS')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'PHOTOS'
                ? 'border-purple-600 text-purple-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Before & After Photos
          </button>
          <button
            onClick={() => setActiveTab('MATERIALS')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'MATERIALS'
                ? 'border-purple-600 text-purple-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Materials & Invoices
          </button>
          <button
            onClick={() => setActiveTab('SIGNOFF')}
            className={`py-3 px-4 text-xs font-bold border-b-2 transition-colors ${
              activeTab === 'SIGNOFF'
                ? 'border-purple-600 text-purple-700 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            Customer Sign-off
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {activeTab === 'PHOTOS' && (
            <div className="space-y-6">
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-slate-500 block mb-2">
                  1. Before Work Commenced
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(proof?.beforePhotos || [
                    'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80'
                  ]).map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border border-slate-200 bg-slate-50 relative group">
                      <img 
                        src={img} 
                        alt="Before condition" 
                        className="w-full h-44 object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-2 left-2 bg-slate-900/80 text-white text-[10px] font-mono px-2 py-0.5 rounded">
                        Condition Before Fix
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-600 block mb-2">
                  2. Completed Work Evidence
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {(proof?.afterPhotos || [
                    'https://images.unsplash.com/photo-1585704032915-c3400ca199e7?w=600&auto=format&fit=crop&q=80'
                  ]).map((img, i) => (
                    <div key={i} className="rounded-xl overflow-hidden border-2 border-emerald-500/40 bg-slate-50 relative">
                      <img 
                        src={img} 
                        alt="After completion" 
                        className="w-full h-44 object-cover" 
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-2 left-2 bg-emerald-950/90 text-emerald-300 text-[10px] font-mono px-2 py-0.5 rounded border border-emerald-800">
                        ✓ Replacement Verified
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technician Notes */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs">
                <span className="font-bold text-slate-900 block mb-1">
                  Technician Diagnostic & Scope Report:
                </span>
                <p className="text-slate-600 leading-relaxed italic">
                  "{proof?.notes || 'Old cracked PVC bottle trap dismantled and replaced with heavy-duty chrome fixture. Installed new stainless steel braided flexi pipes. Pressure tested at 3.5 Bar for 15 minutes with zero dripping.'}"
                </p>
              </div>
            </div>
          )}

          {activeTab === 'MATERIALS' && (
            <div className="space-y-4 text-xs">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-slate-800">
                  Itemized Materials & Replacement Parts Used:
                </div>
                <div className="divide-y divide-slate-100">
                  {(proof?.materialsUsed || [
                    'Heavy-duty Chrome 40mm Bottle Trap',
                    '2x Stainless Steel 1/2" Braided Flexi Pipes (60cm)',
                    'Plumbers Silicone & High-Density PTFE Seal Tape'
                  ]).map((item, idx) => (
                    <div key={idx} className="p-3 flex items-center justify-between text-slate-700">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{item}</span>
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">Item #{idx + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-3 bg-blue-50/70 border border-blue-200 rounded-xl text-blue-900">
                <span className="font-bold block mb-0.5">Warranty Protection:</span>
                <p className="text-slate-600">
                  All parts and labor are backed by the agreed <strong>{targetJob.selectedQuote?.warrantyDays || 30}-day warranty</strong>. If any leak recurs within this window, a warranty repair is dispatched at zero extra cost.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'SIGNOFF' && (
            <div className="space-y-4 text-xs">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-3">
                <h4 className="font-bold text-slate-900 text-sm">Customer Approval Confirmation</h4>
                <p className="text-slate-600 leading-relaxed">
                  Before closing this job and initiating payment release, please confirm that you have inspected the completed work and are satisfied with the standard of craftsmanship.
                </p>
                
                <label className="flex items-start gap-3 p-3 bg-white border border-slate-200 rounded-lg cursor-pointer hover:bg-slate-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={confirmed}
                    onChange={(e) => setConfirmed(e.target.checked)}
                    className="w-4 h-4 mt-0.5 text-blue-600 rounded border-slate-300 focus:ring-blue-500"
                  />
                  <span className="font-bold text-slate-900 text-xs">
                    “I confirm that the service has been completed.”
                  </span>
                </label>
              </div>

              <div className="flex justify-end">
                <button
                  disabled={!confirmed}
                  onClick={handleApprove}
                  className={`py-3 px-6 rounded-xl font-bold text-xs sm:text-sm flex items-center gap-2 transition-all ${
                    confirmed
                      ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                      : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Approve Work & Proceed to Payment</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <Lock className="w-3.5 h-3.5 text-slate-400" />
            <span>Cryptographically sealed job documentation</span>
          </div>
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
