import React, { useState } from 'react';
import { 
  Archive, 
  MapPin, 
  Calendar, 
  Receipt, 
  ShieldCheck, 
  FileText, 
  Download, 
  AlertCircle, 
  CheckCircle2,
  ChevronRight,
  Sparkles,
  Search
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { ServiceRecord } from '../types';

export const ServiceHistoryView: React.FC = () => {
  const { serviceRecords, properties, setActiveJobId, setCurrentView, getWhatsAppUrl } = useApp();
  const [selectedPropertyId, setSelectedPropertyId] = useState('PROP-01');
  const [activeClaimId, setActiveClaimId] = useState<string | null>(null);
  const [claimSubmitted, setClaimSubmitted] = useState(false);

  const selectedProp = properties.find(p => p.id === selectedPropertyId) || properties[0];
  const filteredRecords = serviceRecords.filter(r => r.propertyId === selectedPropertyId);

  const handleFileWarrantyClaim = (recordId: string) => {
    setActiveClaimId(recordId);
    setClaimSubmitted(true);
    setTimeout(() => {
      setClaimSubmitted(false);
      setActiveClaimId(null);
    }, 4000);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
            Audit-Ready Property Archive
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">
            Permanent Service History Ledger
          </h1>
          <p className="text-xs sm:text-sm text-slate-600">
            Every repair, technician, spare part invoice, and warranty certificate recorded forever.
          </p>
        </div>

        {/* Property Switcher */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500 font-semibold">Property:</span>
          <select
            value={selectedPropertyId}
            onChange={(e) => setSelectedPropertyId(e.target.value)}
            className="py-2 px-3 rounded-xl border border-slate-300 text-xs font-bold bg-white text-slate-800 focus:ring-2 focus:ring-blue-500"
          >
            {properties.map(p => (
              <option key={p.id} value={p.id}>
                {p.name} ({p.estate})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Property Overview Card (Karen Residence from Section 16) */}
      <div className="bg-slate-900 text-white rounded-3xl p-6 sm:p-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono text-blue-400 font-bold uppercase">
              REGISTERED PROPERTY
            </span>
            <h2 className="text-2xl font-black text-white mt-0.5">{selectedProp.name}</h2>
            <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              <span>{selectedProp.address}, {selectedProp.estate}, Nairobi</span>
            </p>
          </div>
          <div className="text-right">
            <span className="text-xs text-slate-400 block font-mono">Total Maintenance Logged:</span>
            <span className="text-xl font-bold font-mono text-emerald-400">
              KSh {filteredRecords.reduce((acc, curr) => acc + curr.costKES, 0).toLocaleString()}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs pt-2">
          <div>
            <span className="text-slate-400 block">Documented Jobs</span>
            <strong className="text-base text-white font-mono">{filteredRecords.length} Completed</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Active Warranties</span>
            <strong className="text-base text-emerald-400 font-mono">
              {filteredRecords.filter(r => r.warranty.status === 'ACTIVE').length} Protected
            </strong>
          </div>
          <div>
            <span className="text-slate-400 block">Technicians Engaged</span>
            <strong className="text-base text-white font-mono">3 Verified Pros</strong>
          </div>
          <div>
            <span className="text-slate-400 block">Ledger Status</span>
            <strong className="text-base text-blue-400 font-mono">100% Audit Complete</strong>
          </div>
        </div>
      </div>

      {/* Claim confirmation banner if triggered */}
      {claimSubmitted && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-xs text-emerald-950 font-semibold animate-in fade-in">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <span>Warranty claim successfully filed for Record #{activeClaimId}! Free inspection ticket dispatched to technician.</span>
          </div>
        </div>
      )}

      {/* Service Record Timeline (Prompt Section 16) */}
      <div className="space-y-6">
        <h3 className="text-base font-bold text-slate-900">
          Historical Maintenance Entries
        </h3>

        <div className="space-y-4">
          {filteredRecords.map((record) => (
            <div
              key={record.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-md transition-all space-y-4"
            >
              {/* Record Top Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      #{record.id}
                    </span>
                    <h4 className="text-base font-bold text-slate-900">
                      {record.serviceName}
                    </h4>
                    <span className="text-xs font-semibold text-slate-500">
                      • {record.category}
                    </span>
                  </div>
                  <span className="text-xs text-slate-500 font-mono">
                    Completed on: {record.completedDate}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-lg font-mono font-bold text-slate-900">
                    KSh {record.costKES.toLocaleString()}
                  </span>
                  {record.warranty.status === 'ACTIVE' ? (
                    <span className="text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 px-2.5 py-1 rounded-full flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      Warranty Active ({record.warranty.daysRemaining} days left)
                    </span>
                  ) : (
                    <span className="text-[11px] font-semibold bg-slate-100 text-slate-500 px-2.5 py-1 rounded-full">
                      Warranty Concluded
                    </span>
                  )}
                </div>
              </div>

              {/* Record Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                
                {/* Technician info */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Assigned Professional</span>
                  <div className="font-bold text-slate-900 text-xs">
                    {record.professionalName}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Verified ID & Trade Skill Record
                  </div>
                </div>

                {/* Materials Used */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">Parts / Materials Installed</span>
                  <div className="text-slate-800 font-medium">
                    {record.materialsSummary}
                  </div>
                </div>

                {/* Invoice ref */}
                <div className="bg-slate-50 p-3 rounded-xl border border-slate-100 space-y-1">
                  <span className="text-[10px] uppercase font-bold text-slate-400">M-Pesa Transaction Ref</span>
                  <div className="font-mono font-bold text-slate-900">
                    {record.invoiceNumber}
                  </div>
                  <div className="text-[11px] text-emerald-700 font-semibold">
                    Payment Verified & Reconciled
                  </div>
                </div>

              </div>

              {/* Photos & Actions */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 font-semibold">Photographic Proof:</span>
                  <div className="flex gap-2">
                    {record.photos.map((p, idx) => (
                      <span key={idx} className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 text-[11px] font-mono">
                        View Photo #{idx + 1}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {record.warranty.status === 'ACTIVE' && (
                    <button
                      onClick={() => handleFileWarrantyClaim(record.id)}
                      className="px-3 py-1.5 rounded-xl border border-amber-300 bg-amber-50 text-amber-900 font-bold hover:bg-amber-100 transition-colors text-xs"
                    >
                      Report a Warranty Issue
                    </button>
                  )}

                  <a
                    href={getWhatsAppUrl(`Hello JobRail, I have an inquiry regarding permanent Service Record #${record.id} for ${selectedProp.name}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold transition-colors text-xs"
                  >
                    Request Official PDF
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
