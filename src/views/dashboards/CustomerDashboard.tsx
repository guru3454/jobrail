import React, { useState } from 'react';
import { 
  Wrench, 
  CalendarClock, 
  FileCheck, 
  Receipt, 
  ShieldCheck, 
  Plus, 
  ArrowRight, 
  Star, 
  Clock, 
  Building,
  User,
  AlertCircle
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const CustomerDashboard: React.FC = () => {
  const { 
    jobs, 
    serviceRecords, 
    properties, 
    professionals, 
    setActiveJobId, 
    setCurrentView, 
    setIsRequestModalOpen, 
    setIsQuoteModalOpen,
    setIsProofModalOpen,
    setIsPaymentModalOpen
  } = useApp();

  const [activeTab, setActiveTab] = useState<'ACTIVE_JOBS' | 'HISTORY' | 'SAVED_PROS' | 'WARRANTIES'>('ACTIVE_JOBS');

  const activeJobs = jobs.filter(j => j.status !== 'COMPLETED');
  const completedJobs = jobs.filter(j => j.status === 'COMPLETED');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Welcome Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono font-bold text-blue-600">
              CUSTOMER PORTAL
            </span>
            <span className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded font-bold border border-emerald-200">
              Edwin Anyango (Kilimani, Nairobi)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Home Maintenance Dashboard
          </h1>
        </div>

        <button
          onClick={() => setIsRequestModalOpen(true)}
          className="py-3 px-5 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>New Service Request</span>
        </button>
      </div>

      {/* Metrics Row (Prompt Section 17) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">Active Jobs on Rail</span>
          <span className="text-2xl font-black text-blue-600 font-mono">{activeJobs.length}</span>
          <span className="text-[11px] text-slate-500 block">Real-time status updates</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">Completed Repairs</span>
          <span className="text-2xl font-black text-slate-900 font-mono">{serviceRecords.length}</span>
          <span className="text-[11px] text-slate-500 block">Recorded in permanent ledger</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">Active Warranties</span>
          <span className="text-2xl font-black text-emerald-600 font-mono">
            {serviceRecords.filter(r => r.warranty.status === 'ACTIVE').length}
          </span>
          <span className="text-[11px] text-emerald-700 block font-semibold">100% Workmanship Guarantee</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-xs text-slate-400 font-semibold block">Registered Properties</span>
          <span className="text-2xl font-black text-slate-900 font-mono">{properties.length}</span>
          <span className="text-[11px] text-slate-500 block">Nairobi primary residence</span>
        </div>
      </div>

      {/* Navigation Subtabs (Prompt Section 17) */}
      <div className="flex border-b border-slate-200 gap-6 text-xs font-bold">
        <button
          onClick={() => setActiveTab('ACTIVE_JOBS')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'ACTIVE_JOBS' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Active Jobs ({activeJobs.length})</span>
          {activeTab === 'ACTIVE_JOBS' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('HISTORY')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'HISTORY' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Permanent Service History</span>
          {activeTab === 'HISTORY' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('WARRANTIES')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'WARRANTIES' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Active Warranties</span>
          {activeTab === 'WARRANTIES' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('SAVED_PROS')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'SAVED_PROS' ? 'text-blue-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Saved Fundis ({professionals.length})</span>
          {activeTab === 'SAVED_PROS' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
          )}
        </button>
      </div>

      {/* Tab 1: Active Jobs */}
      {activeTab === 'ACTIVE_JOBS' && (
        <div className="space-y-4">
          {activeJobs.length === 0 ? (
            <div className="bg-white p-12 rounded-3xl border border-slate-200 text-center space-y-3">
              <p className="text-slate-500 text-xs">No active service jobs currently running.</p>
              <button
                onClick={() => setIsRequestModalOpen(true)}
                className="py-2.5 px-4 bg-blue-600 text-white font-bold text-xs rounded-xl"
              >
                Request a Service Now
              </button>
            </div>
          ) : (
            activeJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-mono font-bold bg-slate-100 text-slate-800 px-2 py-0.5 rounded border border-slate-200">
                      #{job.id}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200 font-mono">
                      {job.status.replace(/_/g, ' ')}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">• {job.serviceCategory}</span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 font-display">{job.serviceName}</h3>
                  <p className="text-xs text-slate-600">
                    Location: <strong>{job.location?.specificAddress ? `${job.location.specificAddress}, ` : ''}{job.location?.estate || 'Kilimani'}, Nairobi</strong>
                  </p>
                  <p className="text-xs text-slate-600 line-clamp-1 italic max-w-xl">
                    “{job.problemDescription}”
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2 self-stretch md:self-auto shrink-0">
                  <button
                    onClick={() => {
                      setActiveJobId(job.id);
                      setCurrentView('job-tracking');
                    }}
                    className="flex-1 md:flex-none py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
                  >
                    Track Progress Rail
                  </button>

                  {(job.status === 'LOOKING_FOR_PROS' || job.status === 'QUOTES_RECEIVED') && (
                    <button
                      onClick={() => {
                        setActiveJobId(job.id);
                        setCurrentView('quote-comparison');
                      }}
                      className="flex-1 md:flex-none py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
                    >
                      Compare Quotes
                    </button>
                  )}

                  {(job.status === 'AWAITING_APPROVAL' || job.status === 'PAYMENT_PENDING') && (
                    <button
                      onClick={() => {
                        setActiveJobId(job.id);
                        setIsPaymentModalOpen(true);
                      }}
                      className="flex-1 md:flex-none py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
                    >
                      Approve & Pay
                    </button>
                  )}
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {/* Tab 2: Permanent History */}
      {activeTab === 'HISTORY' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900 text-sm">All Completed Work Orders</h3>
            <button
              onClick={() => setCurrentView('service-history')}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              Open Full Interactive History Ledger →
            </button>
          </div>

          <div className="space-y-3">
            {serviceRecords.map((r) => (
              <div key={r.id} className="bg-white p-5 rounded-2xl border border-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400">#{r.id} • {r.completedDate}</span>
                  <h4 className="font-bold text-slate-900 text-sm">{r.serviceName}</h4>
                  <p className="text-xs text-slate-500">Technician: {r.professionalName}</p>
                </div>
                <div className="text-right space-y-1">
                  <span className="text-base font-bold font-mono text-slate-900">
                    KSh {r.costKES.toLocaleString()}
                  </span>
                  <span className="block text-[11px] font-bold text-emerald-700">
                    Warranty: {r.warranty.daysRemaining} days left
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Warranties */}
      {activeTab === 'WARRANTIES' && (
        <div className="space-y-4">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-3 text-xs text-emerald-900">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <span className="font-bold block">100% Workmanship Guarantee Protection</span>
              <span>If any covered repair fails within the active days, report it here for immediate zero-cost technician redispatch.</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {serviceRecords.filter(r => r.warranty.status === 'ACTIVE').map(w => (
              <div key={w.id} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-xs font-mono text-slate-400">Record #{w.id}</span>
                    <h4 className="font-bold text-slate-900 text-sm">{w.serviceName}</h4>
                  </div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    {w.warranty.daysRemaining} Days Left
                  </span>
                </div>
                <p className="text-xs text-slate-500">Coverage: Faulty valve fittings, pipe seal leakage, and installation defects.</p>
                <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                  <span className="text-slate-400">Pro: {w.professionalName}</span>
                  <button
                    onClick={() => setCurrentView('service-history')}
                    className="text-amber-700 font-bold hover:underline"
                  >
                    Report Issue →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Saved Pros */}
      {activeTab === 'SAVED_PROS' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {professionals.map((pro) => (
            <div key={pro.id} className="bg-white p-5 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex items-center gap-3">
                <img src={pro.avatar} alt={pro.name} className="w-12 h-12 rounded-xl object-cover" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{pro.name}</h4>
                  <p className="text-xs text-slate-500">{pro.category}</p>
                </div>
              </div>
              <div className="flex justify-between text-xs text-slate-600 pt-1 border-t border-slate-100">
                <span className="flex items-center gap-1 text-amber-500 font-bold">
                  <Star className="w-3.5 h-3.5 fill-amber-400" />
                  {pro.rating}
                </span>
                <span>{pro.completedJobs} Jobs completed</span>
              </div>
              <button
                onClick={() => setIsRequestModalOpen(true)}
                className="w-full py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs rounded-xl transition-colors"
              >
                Request Quote
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
