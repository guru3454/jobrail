import React, { useState } from 'react';
import { 
  FileText, 
  Users, 
  Scale, 
  CalendarClock, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowDown, 
  Sparkles,
  ArrowRight,
  Clock,
  MapPin
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const HeroMockup: React.FC = () => {
  const { setCurrentView, setActiveJobId, setIsQuoteModalOpen } = useApp();
  const [activeStep, setActiveStep] = useState<number>(2);

  const steps = [
    {
      id: 0,
      title: '1. Customer Request',
      icon: FileText,
      badge: 'Step 1',
      summary: 'Problem logged with photos & urgency'
    },
    {
      id: 1,
      title: '2. Pro Match',
      icon: Users,
      badge: 'Step 2',
      summary: 'Verified trade specialists matched'
    },
    {
      id: 2,
      title: '3. Quote Comparison',
      icon: Scale,
      badge: 'Differentiator',
      summary: 'Labour + Materials + Call-out + Warranty'
    },
    {
      id: 3,
      title: '4. Scheduled & Tracked',
      icon: CalendarClock,
      badge: 'Step 4',
      summary: 'Real-time arrival & diagnosis'
    },
    {
      id: 4,
      title: '5. Work Completed',
      icon: CheckCircle2,
      badge: 'Step 5',
      summary: 'Before/after proof & customer sign-off'
    },
    {
      id: 5,
      title: '6. Payment & Warranty',
      icon: ShieldCheck,
      badge: 'Protected',
      summary: 'Secure payment + 30-day warranty certificate'
    }
  ];

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 sm:p-6 shadow-2xl text-white relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header bar of the mockup */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-5">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 rounded-full bg-rose-500/80" />
          <div className="w-3 h-3 rounded-full bg-amber-500/80" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          <span className="ml-2 text-xs font-mono text-slate-400 font-semibold">
            JobRail Service Journey Engine • Nairobi
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-[11px] font-mono bg-blue-950 text-blue-300 px-2.5 py-1 rounded-full border border-blue-800/60 font-medium">
            Active Job #JR-000001
          </span>
        </div>
      </div>

      {/* Step switcher tabs */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-5 bg-slate-950/70 p-1.5 rounded-xl border border-slate-800">
        {steps.map((step) => {
          const Icon = step.icon;
          const isCurrent = activeStep === step.id;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`p-2 sm:p-2.5 rounded-lg text-left transition-all relative ${
                isCurrent 
                  ? 'bg-blue-600 text-white shadow-md font-bold' 
                  : 'hover:bg-slate-800/70 text-slate-300 hover:text-white'
              }`}
            >
              <div className="flex items-center gap-1.5">
                <Icon className={`w-3.5 h-3.5 ${isCurrent ? 'text-white' : 'text-blue-400'}`} />
                <span className="text-[11px] font-bold uppercase tracking-wider block truncate font-mono">
                  {step.badge}
                </span>
              </div>
              <p className="text-xs font-semibold mt-0.5 truncate hidden sm:block">
                {step.title.split('. ')[1]}
              </p>
            </button>
          );
        })}
      </div>

      {/* Dynamic Content Panel inside Mockup */}
      <div className="min-h-[280px] sm:min-h-[290px] bg-slate-950 rounded-xl border border-slate-800/90 p-4 sm:p-5 flex flex-col justify-between">
        
        {/* Step 0: Request */}
        {activeStep === 0 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 font-bold">
                REQUEST CREATED • JR-000001
              </span>
              <span className="text-xs bg-amber-950/90 text-amber-300 px-2.5 py-0.5 rounded border border-amber-700 font-medium">
                Standard Urgency
              </span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white font-display">
              Water leaking underneath kitchen sink into cabinet floor
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm bg-slate-900/90 p-3.5 rounded-xl border border-slate-800">
              <div>
                <span className="text-slate-400 block text-xs font-medium">Category & Estate</span>
                <span className="text-white font-semibold">Plumbing & Water • Kilimani, Nairobi</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs font-medium">Preferred Window</span>
                <span className="text-white font-semibold">Today • 2:00 PM – 4:00 PM</span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Evidence attached: 2 photos of cracked PVC waste trap</span>
            </div>
          </div>
        )}

        {/* Step 1: Match */}
        {activeStep === 1 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-blue-400 font-bold">
                PROFESSIONALS MATCHED
              </span>
              <span className="text-xs bg-emerald-950/90 text-emerald-300 px-2.5 py-0.5 rounded border border-emerald-700 font-medium">
                3 Qualified Fundis Ready
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Only verified technicians with trade licenses or NITA trade-test certifications in Kilimani received this request.
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-3 bg-slate-900 rounded-xl border border-slate-800 text-xs sm:text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-600/40 flex items-center justify-center text-blue-300 font-bold font-mono">
                    JO
                  </div>
                  <div>
                    <span className="font-bold text-white block">John Otieno</span>
                    <span className="text-xs text-slate-400">Trade-Test Grade 1 • 142 completed jobs</span>
                  </div>
                </div>
                <span className="text-emerald-400 font-mono font-bold text-xs bg-emerald-950/50 px-2.5 py-1 rounded border border-emerald-800/80">
                  Verified ID & Skills
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Quote Comparison (Key Differentiator) */}
        {activeStep === 2 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <Scale className="w-4 h-4 text-blue-400" />
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 font-mono">
                  Structured Quote Comparison
                </span>
              </div>
              <span className="text-xs text-slate-300 font-mono">Itemized labour & spares</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {/* Quote A */}
              <div className="p-3.5 rounded-xl bg-blue-950/50 border-2 border-blue-500 relative">
                <div className="absolute -top-2.5 right-2 bg-blue-600 text-[11px] font-bold px-2 py-0.5 rounded-full text-white font-mono">
                  Selected
                </div>
                <div className="text-sm font-bold text-white">Quote A • John O.</div>
                <div className="text-xs text-slate-200 mt-1.5 space-y-1">
                  <div className="flex justify-between"><span>Labour:</span> <span className="font-mono">KSh 2,000</span></div>
                  <div className="flex justify-between"><span>Materials:</span> <span className="font-mono">KSh 1,500</span></div>
                  <div className="flex justify-between"><span>Call-out:</span> <span className="font-mono">KSh 500</span></div>
                  <div className="flex justify-between pt-1.5 border-t border-blue-800 font-bold text-blue-300 text-xs sm:text-sm">
                    <span>Total:</span> <span className="font-mono">KSh 4,000</span>
                  </div>
                  <div className="text-emerald-400 text-xs font-semibold pt-1">
                    ✓ 30 Days Warranty
                  </div>
                </div>
              </div>

              {/* Quote B */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-sm font-bold text-white">Quote B • David K.</div>
                <div className="text-xs text-slate-300 mt-1.5 space-y-1">
                  <div className="flex justify-between"><span>Labour:</span> <span className="font-mono">KSh 1,500</span></div>
                  <div className="flex justify-between"><span>Materials:</span> <span className="font-mono">KSh 2,000</span></div>
                  <div className="flex justify-between"><span>Call-out:</span> <span className="font-mono">KSh 300</span></div>
                  <div className="flex justify-between pt-1.5 border-t border-slate-700 font-bold text-slate-100 text-xs sm:text-sm">
                    <span>Total:</span> <span className="font-mono">KSh 3,800</span>
                  </div>
                  <div className="text-slate-400 text-xs pt-1">
                    14 Days Warranty
                  </div>
                </div>
              </div>

              {/* Quote C */}
              <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800">
                <div className="text-sm font-bold text-white">Quote C • Erick O.</div>
                <div className="text-xs text-slate-300 mt-1.5 space-y-1">
                  <div className="flex justify-between"><span>Labour:</span> <span className="font-mono">KSh 2,200</span></div>
                  <div className="flex justify-between"><span>Materials:</span> <span>Client buys</span></div>
                  <div className="flex justify-between"><span>Call-out:</span> <span className="text-emerald-400 font-semibold">Free</span></div>
                  <div className="flex justify-between pt-1.5 border-t border-slate-700 font-bold text-slate-100 text-xs sm:text-sm">
                    <span>Total:</span> <span className="font-mono">KSh 2,200</span>
                  </div>
                  <div className="text-emerald-400 text-xs font-semibold pt-1">
                    30 Days Warranty
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Scheduled */}
        {activeStep === 3 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                APPOINTMENT LOCKED • TODAY 2:00 PM
              </span>
              <span className="text-xs bg-blue-950 text-blue-300 px-2 py-0.5 rounded border border-blue-800">
                Live Status: En Route
              </span>
            </div>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-300">Fundi: <strong>John Otieno</strong></span>
                <span className="text-slate-400 font-mono">07421021098</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-blue-500 h-full w-2/3 rounded-full" />
              </div>
              <p className="text-[11px] text-slate-400">
                Currently 10 minutes away on Ngong Road. Estimated arrival: 2:05 PM.
              </p>
            </div>
          </div>
        )}

        {/* Step 4: Proof */}
        {activeStep === 4 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-purple-400 font-semibold">
                PROOF OF WORK UPLOADED
              </span>
              <span className="text-xs bg-purple-950 text-purple-300 px-2 py-0.5 rounded border border-purple-800">
                Awaiting Signoff
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-slate-400 block text-[10px] uppercase font-bold">Before Fix</span>
                <p className="text-slate-200 mt-1 text-[11px]">Cracked PVC trap leaking onto cabinet wood.</p>
              </div>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                <span className="text-emerald-400 block text-[10px] uppercase font-bold">After Fix</span>
                <p className="text-slate-200 mt-1 text-[11px]">Heavy-duty chrome bottle trap + new braided flexis.</p>
              </div>
            </div>
            <div className="p-2 bg-emerald-950/40 rounded-lg border border-emerald-800/60 text-[11px] text-emerald-300 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Pressure test passed at 3.5 Bar. No dripping. Customer confirmation pending.</span>
            </div>
          </div>
        )}

        {/* Step 5: Payment & Warranty */}
        {activeStep === 5 && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 font-semibold">
                JOB COMPLETED & CLOSED
              </span>
              <span className="text-xs bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 font-mono">
                M-Pesa Ref: QHK9283KLA
              </span>
            </div>
            <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 space-y-1.5 text-xs">
              <div className="flex justify-between items-center">
                <span className="text-slate-300">Amount Paid:</span>
                <span className="text-white font-bold text-sm">KSh 4,000</span>
              </div>
              <div className="flex justify-between items-center text-slate-400 text-[11px]">
                <span>Warranty Validity:</span>
                <span className="text-emerald-400 font-semibold">30 Days (Expires 16 Oct 2026)</span>
              </div>
              <div className="flex justify-between items-center text-slate-400 text-[11px]">
                <span>Permanent Record:</span>
                <span className="text-blue-400">Stored in Customer History</span>
              </div>
            </div>
          </div>
        )}

        {/* Footer controls inside Mockup */}
        <div className="pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-400">
            <span>Step {activeStep + 1} of 6</span>
            <span>•</span>
            <span className="text-slate-300 font-medium">{steps[activeStep].summary}</span>
          </div>

          <button
            onClick={() => {
              setActiveJobId('JR-000001');
              setCurrentView('job-tracking');
            }}
            className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-bold transition-colors"
          >
            <span>Inspect Live Tracker</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
