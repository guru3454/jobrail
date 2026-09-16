import React from 'react';
import { 
  Building2, 
  Layers, 
  Receipt, 
  ShieldCheck, 
  ArrowRight, 
  Users, 
  FileText, 
  Clock, 
  CheckCircle2,
  BarChart3
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ForPropertyManagersView: React.FC = () => {
  const { setUserRole, setCurrentView, setIsRequestModalOpen } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-bold border border-indigo-200">
            <Building2 className="w-3.5 h-3.5" />
            <span>Landlord & Estate Management • Nairobi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            Centralized property maintenance. <br />
            <span className="text-indigo-600">Zero tenant chaos.</span>
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
            Streamline repairs across residential apartment blocks, office towers, and gated communities. From tenant maintenance tickets to quote approval, photographic proof, and permanent building expense audits.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button
              onClick={() => {
                setUserRole('PROPERTY_MANAGER');
                setCurrentView('dashboard');
              }}
              className="py-3 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-indigo-600/20"
            >
              <span>Launch Landlord Dashboard Demo</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setIsRequestModalOpen(true)}
              className="py-3 px-6 rounded-xl bg-white border border-slate-300 hover:bg-slate-50 text-slate-800 font-bold text-xs sm:text-sm transition-colors text-center"
            >
              Log Maintenance Ticket
            </button>
          </div>
        </div>

        {/* Workflow Card (Prompt Section 20) */}
        <div className="lg:col-span-5 bg-slate-950 text-white p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-mono font-bold text-indigo-400 uppercase">
              11-STEP MAINTENANCE RAIL
            </span>
            <span className="text-[10px] bg-indigo-950 text-indigo-300 px-2 py-0.5 rounded border border-indigo-800">
              Audit-Ready
            </span>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono text-indigo-300">1</span>
              <span>Tenant reports issue with photos</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono text-indigo-300">2</span>
              <span>Property Manager reviews & sets budget limit</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono text-indigo-300">3</span>
              <span>Receive & compare structured technician quotes</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono text-indigo-300">4</span>
              <span>Assign vetted technician with tenant access code</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono text-indigo-300">5</span>
              <span>Track arrival, diagnosis, and work milestones</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="w-5 h-5 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-mono text-indigo-300">6</span>
              <span>Inspect photographic evidence & spare part invoices</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <span className="w-5 h-5 rounded-full bg-emerald-950 flex items-center justify-center text-[10px] font-mono text-emerald-300">7</span>
              <span>Approve completion • Release settlement • Save warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
            <Building2 className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-base">Multi-Building Portfolio</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Manage apartment complexes across Kilimani, Westlands, and Karen from a single interface. Assign unit numbers and tenants effortlessly.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <BarChart3 className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-base">Expense Analytics & Invoices</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Generate itemized tax and expenditure reports per property for landlords and annual audit filings in KSh.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-slate-200 space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="font-bold text-slate-900 text-base">Warranty Tracking Ledger</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Never pay twice for a leaky pipe or faulty circuit breaker. JobRail alerts you if an active warranty covers an incoming tenant issue.
          </p>
        </div>
      </div>

    </div>
  );
};
