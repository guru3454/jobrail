import React from 'react';
import { 
  FileText, 
  Scale, 
  CalendarCheck, 
  Compass, 
  Award, 
  ShieldCheck, 
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  Lock,
  Archive
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HowItWorksView: React.FC = () => {
  const { setIsRequestModalOpen, getWhatsAppUrl, setCurrentView } = useApp();

  const steps = [
    {
      num: '01',
      title: 'Tell us what you need',
      quote: '“Describe the problem and optionally upload photos or video.”',
      details: 'Select your trade category and Nairobi estate. Add photos of the leak, electrical fault, or carpentry issue. Specify standard vs. urgent booking.',
      icon: FileText,
      badge: 'Transparent Input'
    },
    {
      num: '02',
      title: 'Compare professionals',
      quote: '“Review suitable professionals, experience, ratings, availability and quotes.”',
      details: 'Receive structured quotes breaking down labour, materials, call-out, and warranty terms. Review verified ID and Trade-Test credentials without bias.',
      icon: Scale,
      badge: 'Binding Quotes'
    },
    {
      num: '03',
      title: 'Book the job',
      quote: '“Choose a professional and agree on the scope, price and schedule.”',
      details: 'Accept the quote that matches your budget and schedule. The time slot is reserved and your professional receives immediate location dispatch instructions.',
      icon: CalendarCheck,
      badge: 'Guaranteed Arrival'
    },
    {
      num: '04',
      title: 'Track the work',
      quote: '“Follow the job from accepted to completed.”',
      details: 'Real-time milestones: On the way, arrived on-site, diagnosing, and work in progress. In-platform chat and WhatsApp ensure crystal-clear communication.',
      icon: Compass,
      badge: 'Real-Time Visibility'
    },
    {
      num: '05',
      title: 'Close the job',
      quote: '“Approve the work, pay, receive documentation and leave a verified review.”',
      details: 'Inspect before & after photo proof. Tap “I confirm that the service has been completed” to release payment via M-Pesa. A 30-day warranty certificate is activated.',
      icon: Award,
      badge: 'Protected Sign-off'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
          The Complete Service Rail
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          How JobRail Works
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
          We replaced chaotic informal phone calls with a dependable 5-stage technology framework designed specifically for the Kenyan urban economy.
        </p>
      </div>

      {/* 5 Steps Vertical/Horizontal Journey */}
      <div className="space-y-8">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center font-mono font-black text-xl shrink-0 border border-blue-100">
                  {step.num}
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] uppercase font-bold tracking-wider bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-blue-700 italic">
                    {step.quote}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed pt-1">
                    {step.details}
                  </p>
                </div>
              </div>

              <div className="w-full md:w-auto shrink-0">
                <button
                  onClick={() => setIsRequestModalOpen(true)}
                  className="w-full md:w-auto py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl transition-colors shadow-sm text-center"
                >
                  Start at Step 1
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Safety & Warranties Architecture Banner */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 space-y-6">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase font-mono tracking-widest text-emerald-400 font-bold">
            KENYAN CONSUMER PROTECTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold">
            Why you never pay before work approval
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            With traditional informal fundis, upfront deposits frequently lead to abandonment or substandard work. JobRail holds funds in abstraction and only disburses upon your digital confirmation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-800 text-xs">
          <div className="space-y-1">
            <span className="font-bold text-white block">Transparent Estimates</span>
            <p className="text-slate-400">Fixed labour and materials breakdown before booking.</p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-white block">30–90 Day Warranty</span>
            <p className="text-slate-400">Guaranteed revisit ticket if any recurring defect happens.</p>
          </div>
          <div className="space-y-1">
            <span className="font-bold text-white block">Audit-Proof Ledger</span>
            <p className="text-slate-400">All photos and invoices archived for property history.</p>
          </div>
        </div>
      </div>

    </div>
  );
};
