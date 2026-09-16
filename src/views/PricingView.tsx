import React, { useState } from 'react';
import { 
  Check, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  HelpCircle
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const PricingView: React.FC = () => {
  const { setIsRequestModalOpen, setCurrentView, setUserRole } = useApp();
  const [tab, setTab] = useState<'CUSTOMERS' | 'PROFESSIONALS' | 'PROPERTY_MANAGERS'>('CUSTOMERS');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
          Transparent & Fair
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          JobRail Platform Pricing
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
          Free for customers to find and hire professionals. Transparent tier options for fundis and property managers.
        </p>
      </div>

      {/* Role Toggle Tabs */}
      <div className="flex justify-center">
        <div className="inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200 text-xs font-bold">
          <button
            onClick={() => setTab('CUSTOMERS')}
            className={`px-4 py-2 rounded-xl transition-all ${
              tab === 'CUSTOMERS'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            For Customers
          </button>
          <button
            onClick={() => setTab('PROFESSIONALS')}
            className={`px-4 py-2 rounded-xl transition-all ${
              tab === 'PROFESSIONALS'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            For Fundis / Pros
          </button>
          <button
            onClick={() => setTab('PROPERTY_MANAGERS')}
            className={`px-4 py-2 rounded-xl transition-all ${
              tab === 'PROPERTY_MANAGERS'
                ? 'bg-white text-slate-900 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            For Property Managers
          </button>
        </div>
      </div>

      {/* Customer Pricing */}
      {tab === 'CUSTOMERS' && (
        <div className="max-w-xl mx-auto bg-white rounded-3xl border-2 border-blue-600 p-8 shadow-xl space-y-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs uppercase font-bold text-blue-600 tracking-wider">
                Homeowners & Tenants
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-0.5">Free Always</h3>
            </div>
            <span className="text-2xl font-black text-slate-900 font-mono">
              KSh 0
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Free to request services, compare quotes, track jobs, and access permanent property maintenance histories. You only pay for the agreed service cost.
          </p>

          <div className="space-y-2.5 text-xs text-slate-700">
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Unlimited service requests across all categories</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Structured quote comparisons with zero hidden fees</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>M-Pesa escrow protection with sign-off release</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Active 14–90 day workmanship warranty certificate</span>
            </div>
          </div>

          <button
            onClick={() => setIsRequestModalOpen(true)}
            className="w-full py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-colors"
          >
            Request a Free Quote Now
          </button>
        </div>
      )}

      {/* Professional Pricing (Section 30) */}
      {tab === 'PROFESSIONALS' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Free / Basic */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Entry Tier</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Free / Basic Tier</h3>
                <p className="text-xs text-slate-500 mt-1">For independent fundis starting out on JobRail.</p>
              </div>

              <div className="font-mono text-2xl font-black text-slate-900">
                KSh 0 <span className="text-xs font-normal text-slate-500 font-sans">/ month</span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Receive local job requests</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Basic profile listing & reviews</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Standard 10% platform success fee</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setUserRole('PROFESSIONAL');
                setCurrentView('dashboard');
              }}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors"
            >
              Get Started Free
            </button>
          </div>

          {/* Professional Plus */}
          <div className="bg-white rounded-3xl border-2 border-blue-600 p-6 space-y-6 flex flex-col justify-between relative shadow-lg">
            <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full">
              Recommended
            </div>

            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600">Active Craftsman</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Professional Plus</h3>
                <p className="text-xs text-slate-500 mt-1">For certified technicians managing multiple jobs weekly.</p>
              </div>

              <div className="font-mono text-2xl font-black text-slate-900">
                <span className="text-xs font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Coming soon
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Priority emergency lead routing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp instant quote generator</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Reduced 5% platform success fee</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Trade Badge prominent display</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setUserRole('PROFESSIONAL');
                setCurrentView('dashboard');
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors"
            >
              Preview Pro Features
            </button>
          </div>

          {/* Business / Team */}
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Workshops & Squads</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Business / Team</h3>
                <p className="text-xs text-slate-500 mt-1">For contractors with 3+ technicians.</p>
              </div>

              <div className="font-mono text-2xl font-black text-slate-900">
                <span className="text-xs font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Coming soon
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Multi-technician dispatch calendar</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Commercial contractor invoice generator</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dedicated JobRail trade account manager</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setUserRole('PROFESSIONAL');
                setCurrentView('dashboard');
              }}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors"
            >
              Inquire Team Account
            </button>
          </div>

        </div>
      )}

      {/* Property Manager Pricing (Section 30) */}
      {tab === 'PROPERTY_MANAGERS' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Up to 10 Units</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Starter</h3>
                <p className="text-xs text-slate-500 mt-1">For private landlords managing 1 or 2 small properties.</p>
              </div>

              <div className="font-mono text-2xl font-black text-slate-900">
                <span className="text-xs font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Coming soon
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Direct tenant maintenance ticket portal</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Quote approval workflow</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Warranty tracking per unit</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setUserRole('PROPERTY_MANAGER');
                setCurrentView('dashboard');
              }}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors"
            >
              Launch Demo
            </button>
          </div>

          <div className="bg-white rounded-3xl border-2 border-indigo-600 p-6 space-y-6 flex flex-col justify-between shadow-lg">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">10 – 50 Units</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Growth</h3>
                <p className="text-xs text-slate-500 mt-1">For residential apartment managers in Nairobi.</p>
              </div>

              <div className="font-mono text-2xl font-black text-slate-900">
                <span className="text-xs font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Coming soon
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Multi-building portfolio analytics</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Retained fundi preferred roster</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Monthly maintenance expense CSV export</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setUserRole('PROPERTY_MANAGER');
                setCurrentView('dashboard');
              }}
              className="w-full py-2.5 px-3 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors"
            >
              Explore Growth Tier
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">50+ Units & Commercial</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Professional Portfolio</h3>
                <p className="text-xs text-slate-500 mt-1">For large real estate agencies & commercial towers.</p>
              </div>

              <div className="font-mono text-2xl font-black text-slate-900">
                <span className="text-xs font-bold uppercase text-amber-600 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  Coming soon
                </span>
              </div>

              <div className="space-y-2 text-xs text-slate-600 pt-3 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Custom SLA emergency dispatch</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Bulk invoice consolidation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Dedicated operational account manager</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                setUserRole('PROPERTY_MANAGER');
                setCurrentView('dashboard');
              }}
              className="w-full py-2.5 px-3 rounded-xl border border-slate-300 text-slate-800 font-bold text-xs hover:bg-slate-50 transition-colors"
            >
              Request Custom SLA
            </button>
          </div>

        </div>
      )}

    </div>
  );
};
