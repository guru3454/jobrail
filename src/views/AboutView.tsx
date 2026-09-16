import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  Lock, 
  Users, 
  Wrench,
  CheckCircle2
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const AboutView: React.FC = () => {
  const { phoneContact, whatsAppContact, getWhatsAppUrl, setCurrentView, setIsRequestModalOpen } = useApp();

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      {/* Brand & Mission */}
      <div className="space-y-4">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
          About JOBRAIL Kenya
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 leading-tight">
          From Service Request to Job Complete.
        </h1>
        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-3xl">
          JobRail represents the “rail” that carries a service job from the initial request all the way to completion. Built in Nairobi, Kenya, JobRail is modern digital infrastructure designed to eliminate the chaos, mistrust, and lack of accountability in the informal service economy.
        </p>
      </div>

      {/* Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Why We Are Different</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We are NOT a classified listings website like generic ad boards. We don't just dump unverified phone numbers in your lap. We structure every quote, document photographic evidence of work before and after, secure payments until client satisfaction, and guarantee workmanship warranties.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
            <Lock className="w-5 h-5" />
          </div>
          <h3 className="text-base font-bold text-slate-900">Kenyan Data Protection & Trust</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            Designed strictly in compliance with the Kenya Data Protection Act (2019). We minimize personal data exposure. Phone numbers are protected, technician national identity documents and criminal record clearance certificates (DCI Good Conduct) are held securely, and property records remain private.
          </p>
        </div>
      </div>

      {/* Operational Headquarters */}
      <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4">
        <h3 className="text-xl font-bold">Operational Focus: Nairobi, Kenya</h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
          Our active field technician dispatch covers all Nairobi sub-counties and estates including Kilimani, Westlands, Karen, Lavington, South C, Roysambu, and Parklands, with expansion architecture prepared for Mombasa, Kisumu, Nakuru, and all 47 counties.
        </p>

        <div className="pt-3 border-t border-slate-800 flex flex-wrap items-center gap-6 text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-blue-400" />
            <span>Support Line: {phoneContact}</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <a href={getWhatsAppUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
              WhatsApp Desk: {whatsAppContact}
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};
