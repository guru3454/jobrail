import React from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  Lock,
  Layers
} from 'lucide-react';
import { useApp, AppView } from '../context/AppContext';

export const Footer: React.FC = () => {
  const { setCurrentView, getWhatsAppUrl, phoneContact, whatsAppContact, setIsRequestModalOpen } = useApp();

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900">
      {/* Top Value Assurance Banner */}
      <div className="border-b border-slate-900 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Documented & Verified</h4>
              <p className="text-slate-400 text-xs mt-1">
                Every technician’s identity and trade credentials are verified before quote permissions are granted.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 mt-0.5">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Proof of Work & Warranty</h4>
              <p className="text-slate-400 text-xs mt-1">
                Before & after photos, itemized materials, digital completion confirmation and active 14–90 day warranties.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400 mt-0.5">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-white">Safe Payment Abstraction</h4>
              <p className="text-slate-400 text-xs mt-1">
                Transparent Kenyan Shilling quotes. Release payments only when you confirm satisfactory completion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                <span className="font-mono text-base">JR</span>
              </div>
              <div>
                <span className="text-xl font-extrabold tracking-tight text-white font-sans">
                  JOB<span className="text-blue-500">RAIL</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest bg-blue-900/60 text-blue-300 ml-2 px-1.5 py-0.5 rounded border border-blue-700/50">
                  Kenya
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              “From Service Request to Job Complete.”
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Find trusted professionals. Compare structured quotes. Track the job. Pay securely. Keep the permanent record. Built for homeowners, property managers, and certified technicians across Nairobi.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Nairobi, Kenya (Serving Westlands, Kilimani, Karen & all 47 counties)</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blue-400 shrink-0" />
                <a href={`tel:${phoneContact}`} className="hover:text-white transition-colors">
                  {phoneContact}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a 
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
                >
                  WhatsApp: {whatsAppContact}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Platform
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setIsRequestModalOpen(true)} className="hover:text-white transition-colors">
                  Request a Service
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('find-a-pro')} className="hover:text-white transition-colors">
                  Find a Professional
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('services')} className="hover:text-white transition-colors">
                  Services Directory
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('how-it-works')} className="hover:text-white transition-colors">
                  How JobRail Works
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('pricing')} className="hover:text-white transition-colors">
                  Transparent Pricing
                </button>
              </li>
            </ul>
          </div>

          {/* User Sectors */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Who We Serve
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentView('for-professionals')} className="hover:text-white transition-colors">
                  For Fundis & Technicians
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('for-property-managers')} className="hover:text-white transition-colors">
                  For Property Managers & Landlords
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('dashboard')} className="hover:text-white transition-colors">
                  Customer Dashboard
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('faq')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors">
                  About JobRail
                </button>
              </li>
            </ul>
          </div>

          {/* Legal & Trust */}
          <div className="space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Legal & Trust
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors">
                  Privacy Policy (Kenya DPA Compliant)
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors">
                  Terms of Service & Warranties
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('about')} className="hover:text-white transition-colors">
                  Dispute Resolution Guidelines
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('contact')} className="hover:text-white transition-colors">
                  Contact Support
                </button>
              </li>
            </ul>

            <div className="pt-3">
              <a
                href={getWhatsAppUrl('Hello JobRail team, I would like to join as an approved service professional.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-700/80 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Join as a Fundi on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} JOBRAIL Technologies Ltd. All rights reserved. Registered in Nairobi, Kenya.</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Currency: KES (Kenyan Shilling)</span>
            <span>Tel: 07421021098</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
