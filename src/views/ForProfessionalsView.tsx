import React from 'react';
import { 
  Wrench, 
  MessageCircle, 
  Receipt, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  FileText,
  Phone
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ForProfessionalsView: React.FC = () => {
  const { setUserRole, setCurrentView, getWhatsAppUrl, phoneContact } = useApp();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200">
            <Wrench className="w-3.5 h-3.5" />
            <span>Fundi & Technician Network • Nairobi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
            Stop chasing unpaid invoices. <br />
            <span className="text-blue-600">Grow your business on JobRail.</span>
          </h1>

          <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
            Join verified Kenyan trade professionals receiving high-value repair requests across Kilimani, Westlands, Karen, and Greater Nairobi. Send professional quotes in seconds and get paid securely.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href={getWhatsAppUrl('Hello JobRail team, I am a certified technician in Nairobi and I would like to join as an approved service professional.')}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Register via WhatsApp (+2547421021098)</span>
            </a>

            <button
              onClick={() => {
                setUserRole('PROFESSIONAL');
                setCurrentView('dashboard');
              }}
              className="py-3 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm transition-colors text-center"
            >
              Open Fundi Workspace Demo
            </button>
          </div>
        </div>

        {/* Right card showing Pro features */}
        <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-slate-200 shadow-xl space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <span className="text-xs font-mono font-bold text-blue-600 uppercase">
              PROFESSIONAL TOOLKIT
            </span>
            <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
              Verified Fundi Perks
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900 block">Instant WhatsApp Quote Generator</span>
              <p className="text-slate-500 text-[11px]">
                Generate structured quotes with labour, materials, call-out, and warranty and send directly to clients.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900 block">Guaranteed Payment Security</span>
              <p className="text-slate-500 text-[11px]">
                Clients deposit agreed amounts into JobRail escrow prior to or upon completion signoff. No excuses.
              </p>
            </div>

            <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="font-bold text-slate-900 block">Reputation on Trade Licenses</span>
              <p className="text-slate-500 text-[11px]">
                Display your National Trade-Test, EPRA, or NCA certificates with verified badges.
              </p>
            </div>
          </div>

          <div className="pt-2 text-center">
            <span className="text-[11px] text-slate-400">
              Free to register • Background check required
            </span>
          </div>
        </div>
      </div>

      {/* 4 Pillars for Professionals */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2">
          <span className="text-xl font-bold font-mono text-blue-600">01</span>
          <h4 className="font-bold text-slate-900 text-sm">Targeted Client Leads</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Receive matched service requests in your specific trade category and neighborhood.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2">
          <span className="text-xl font-bold font-mono text-blue-600">02</span>
          <h4 className="font-bold text-slate-900 text-sm">Quote Builder</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Automatic calculation of subtotal, spare parts, call-out fees, and warranty periods.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2">
          <span className="text-xl font-bold font-mono text-blue-600">03</span>
          <h4 className="font-bold text-slate-900 text-sm">Photo Evidence Signoff</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Upload before & after photos to prove your craftsmanship and prevent client disputes.
          </p>
        </div>

        <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-2">
          <span className="text-xl font-bold font-mono text-blue-600">04</span>
          <h4 className="font-bold text-slate-900 text-sm">Repeat Landlord Accounts</h4>
          <p className="text-xs text-slate-500 leading-relaxed">
            Get retained by property managers across Nairobi for ongoing building maintenance contracts.
          </p>
        </div>
      </div>

    </div>
  );
};
