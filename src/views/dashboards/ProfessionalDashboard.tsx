import React, { useState } from 'react';
import { 
  Wrench, 
  Receipt, 
  ShieldCheck, 
  MessageCircle, 
  CheckCircle2, 
  Clock, 
  Plus, 
  Upload, 
  TrendingUp, 
  DollarSign, 
  Copy,
  Check,
  Send,
  Camera,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const ProfessionalDashboard: React.FC = () => {
  const { jobs, professionals, getWhatsAppUrl, updateJobStatus, setIsProofModalOpen } = useApp();
  const currentPro = professionals[0]; // John Otieno

  // Quote Generator State (Prompt Section 19)
  const [labourKES, setLabourKES] = useState<number>(2500);
  const [materialsKES, setMaterialsKES] = useState<number>(1500);
  const [callOutKES, setCallOutKES] = useState<number>(500);
  const [estimatedHours, setEstimatedHours] = useState<number>(3);
  const [warrantyDays, setWarrantyDays] = useState<number>(30);
  const [notes, setNotes] = useState<string>('Includes replacement of PPR gate valves and pressure testing.');
  const [copiedLink, setCopiedLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'QUOTE_GENERATOR' | 'ACTIVE_JOBS' | 'VERIFICATION' | 'EARNINGS'>('QUOTE_GENERATOR');

  const totalQuoteKES = Number(labourKES || 0) + Number(materialsKES || 0) + Number(callOutKES || 0);

  const formattedWhatsAppQuote = `*JOBRAIL STRUCTURED QUOTE*
Technician: ${currentPro.name} (Verified)
Category: ${currentPro.category}
---------------------------
• Labour: KSh ${Number(labourKES).toLocaleString()}
• Materials / Parts: KSh ${Number(materialsKES).toLocaleString()}
• Diagnostic / Call-out: KSh ${Number(callOutKES).toLocaleString()}
• Estimated Time: ${estimatedHours} hours
• Workmanship Warranty: ${warrantyDays} Days
---------------------------
*TOTAL: KSh ${totalQuoteKES.toLocaleString()}*
Notes: ${notes}
_Sent via JobRail Kenya Secure Escrow Platform_`;

  const handleCopyWhatsAppQuote = () => {
    navigator.clipboard.writeText(formattedWhatsAppQuote);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Welcome Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 shadow-md">
        <div className="flex items-center gap-4">
          <img
            src={currentPro.avatar}
            alt={currentPro.name}
            className="w-16 h-16 rounded-2xl object-cover border-2 border-blue-500 shrink-0"
            referrerPolicy="no-referrer"
          />
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-xl sm:text-2xl font-black text-white">{currentPro.name}</h1>
              <span className="text-[10px] uppercase font-bold bg-blue-500/20 text-blue-300 px-2 py-0.5 rounded border border-blue-500/40">
                Verified Pro
              </span>
            </div>
            <p className="text-xs text-slate-300">{currentPro.title} • {currentPro.location}, Nairobi</p>
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono pt-0.5">
              <span>● Available for Dispatch</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('QUOTE_GENERATOR')}
            className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm flex items-center gap-2"
          >
            <Receipt className="w-4 h-4" />
            <span>Generate Client Quote</span>
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">Completed Jobs</span>
          <span className="text-2xl font-black text-slate-900 font-mono">{currentPro.completedJobs}</span>
          <span className="text-[11px] text-emerald-600 font-semibold block">100% verified sign-offs</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">Customer Rating</span>
          <span className="text-2xl font-black text-amber-500 font-mono">★ {currentPro.rating}</span>
          <span className="text-[11px] text-slate-500 block">From 48 reviews</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">Total Settled Earnings</span>
          <span className="text-2xl font-black text-blue-600 font-mono">KSh 184,500</span>
          <span className="text-[11px] text-slate-500 block">Via M-Pesa payout</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">On-Time Arrival</span>
          <span className="text-2xl font-black text-emerald-600 font-mono">{currentPro.onTimeRate}%</span>
          <span className="text-[11px] text-slate-500 block">Avg response {currentPro.responseRate}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-6 text-xs font-bold">
        <button
          onClick={() => setActiveTab('QUOTE_GENERATOR')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'QUOTE_GENERATOR' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>WhatsApp Quote Generator</span>
          {activeTab === 'QUOTE_GENERATOR' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('ACTIVE_JOBS')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'ACTIVE_JOBS' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Active Assigned Jobs ({jobs.length})</span>
          {activeTab === 'ACTIVE_JOBS' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('VERIFICATION')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'VERIFICATION' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Verification & Badges</span>
          {activeTab === 'VERIFICATION' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('EARNINGS')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'EARNINGS' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>M-Pesa Payouts</span>
          {activeTab === 'EARNINGS' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
      </div>

      {/* Tab 1: Quote Generator (Section 19) */}
      {activeTab === 'QUOTE_GENERATOR' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Builder Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-5">
            <div>
              <h3 className="font-extrabold text-slate-900 text-base">
                Interactive Structured Quote Builder
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Enter labour, materials, diagnostic fee, and warranty to produce a standard JobRail quote.
              </p>
            </div>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Labour Fee (KSh)</label>
                  <input
                    type="number"
                    value={labourKES}
                    onChange={(e) => setLabourKES(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-mono text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Materials/Parts (KSh)</label>
                  <input
                    type="number"
                    value={materialsKES}
                    onChange={(e) => setMaterialsKES(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-mono text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Diagnostic/Call-out (KSh)</label>
                  <input
                    type="number"
                    value={callOutKES}
                    onChange={(e) => setCallOutKES(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-mono text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Estimated Duration (Hours)</label>
                  <input
                    type="number"
                    value={estimatedHours}
                    onChange={(e) => setEstimatedHours(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 p-2.5 font-mono text-xs focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Workmanship Warranty (Days)</label>
                  <select
                    value={warrantyDays}
                    onChange={(e) => setWarrantyDays(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:ring-2 focus:ring-blue-500 bg-white font-bold"
                  >
                    <option value={14}>14 Days Standard</option>
                    <option value={30}>30 Days Recommended</option>
                    <option value={60}>60 Days Extended</option>
                    <option value={90}>90 Days Premium</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1 text-xs">Scope Notes & Material Specifications</label>
                <textarea
                  rows={3}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-blue-900 font-semibold block">Calculated Total Binding Quote:</span>
                  <span className="text-2xl font-black text-blue-950 font-mono">
                    KSh {totalQuoteKES.toLocaleString()}
                  </span>
                </div>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-100/80 px-2.5 py-1 rounded-full">
                  {warrantyDays} Days Warranty
                </span>
              </div>
            </div>
          </div>

          {/* Right Live Preview & WhatsApp Sharing (Prompt Section 19) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-950 text-white p-6 rounded-3xl border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                  WHATSAPP READY PREVIEW
                </span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded">
                  Formatted Text
                </span>
              </div>

              <div className="bg-slate-900 p-4 rounded-2xl font-mono text-xs whitespace-pre-wrap text-slate-200 border border-slate-800 leading-relaxed">
                {formattedWhatsAppQuote}
              </div>

              <div className="space-y-2 pt-2">
                <button
                  onClick={handleCopyWhatsAppQuote}
                  className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-md transition-colors"
                >
                  {copiedLink ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{copiedLink ? 'Quote Copied to Clipboard!' : 'Copy Formatted Quote Text'}</span>
                </button>

                <a
                  href={`https://wa.me/?text=${encodeURIComponent(formattedWhatsAppQuote)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-white/20"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Send Directly via WhatsApp Web / App</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Tab 2: Active Jobs */}
      {activeTab === 'ACTIVE_JOBS' && (
        <div className="space-y-4">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">#{job.id}</span>
                  <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full uppercase font-mono border border-blue-200">{job.status.replace(/_/g, ' ')}</span>
                </div>
                <h4 className="font-bold text-slate-900 text-base font-display">{job.serviceName}</h4>
                <p className="text-xs text-slate-600">Client Address: <strong>{job.location?.specificAddress ? `${job.location.specificAddress}, ` : ''}{job.location?.estate || 'Kilimani'}, Nairobi</strong></p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsProofModalOpen(true)}
                  className="py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <Camera className="w-4 h-4" />
                  <span>Upload Proof Photos</span>
                </button>

                <button
                  onClick={() => updateJobStatus(job.id, 'AWAITING_APPROVAL')}
                  className="py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors"
                >
                  Submit For Approval
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Verification */}
      {activeTab === 'VERIFICATION' && (
        <div className="max-w-2xl bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="font-bold text-slate-900 text-base">Trade Verification Center</h3>
            <p className="text-xs text-slate-500 mt-1">
              Maintain verified status to qualify for instant customer quote dispatches in Nairobi.
            </p>
          </div>

          <div className="space-y-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 block">Kenya National ID / Passport</span>
                <span className="text-slate-500 text-[11px]">Verified on 14 Jan 2026</span>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Verified
              </span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 block">NITA / Trade-Test Plumbing Grade I</span>
                <span className="text-slate-500 text-[11px]">Certificate #NITA-PL-9821</span>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Verified
              </span>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-slate-900 block">DCI Good Conduct Clearance</span>
                <span className="text-slate-500 text-[11px]">Valid through Dec 2026</span>
              </div>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                Verified
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Earnings */}
      {activeTab === 'EARNINGS' && (
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-4">
          <h3 className="font-bold text-slate-900 text-base">M-Pesa Escrow Payout History</h3>
          <div className="space-y-2 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
              <div>
                <span className="font-mono font-bold text-slate-900">QHK881290</span>
                <span className="text-slate-500 block text-[11px]">Kilimani Bathroom overhaul sign-off</span>
              </div>
              <span className="font-mono font-bold text-emerald-600 text-sm">+ KSh 4,500</span>
            </div>
            <div className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
              <div>
                <span className="font-mono font-bold text-slate-900">QHK772109</span>
                <span className="text-slate-500 block text-[11px]">Karen Residence water booster pump</span>
              </div>
              <span className="font-mono font-bold text-emerald-600 text-sm">+ KSh 12,500</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
