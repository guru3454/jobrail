import React, { useState } from 'react';
import { 
  Phone, 
  MessageCircle, 
  MapPin, 
  Send, 
  CheckCircle2, 
  Clock,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

export const ContactView: React.FC = () => {
  const { phoneContact, whatsAppContact, getWhatsAppUrl } = useApp();
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      
      <div className="space-y-2">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
          Reach Our Dispatch Desk
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Contact JobRail Kenya
        </h1>
        <p className="text-xs sm:text-base text-slate-600 leading-relaxed max-w-xl">
          Need assistance coordinating a technician, resolving a dispute, or joining our verified professional roster? We are on standby in Nairobi.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h3 className="font-bold text-slate-900 text-base">Direct Channels</h3>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">Telephone Support</span>
                  <a href={`tel:${phoneContact}`} className="font-bold text-slate-900 hover:text-blue-600">
                    {phoneContact}
                  </a>
                </div>
              </div>

              <div className="p-3 bg-emerald-50 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-emerald-700 text-xs block">WhatsApp Helpline</span>
                  <a 
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-emerald-900 hover:underline"
                  >
                    {whatsAppContact}
                  </a>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-500 text-xs block">Location</span>
                  <p className="font-bold text-slate-900">
                    Nairobi, Kenya
                  </p>
                  <p className="text-[11px] text-slate-500">
                    Field dispatch across Westlands, Kilimani, Karen, Roysambu & Parklands
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-4 bg-blue-50/70 border border-blue-200 rounded-2xl text-xs text-blue-900 flex items-start gap-2.5">
            <Clock className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
            <div>
              <span className="font-bold block">Support Hours:</span>
              <span>Emergency dispatch operates 24/7. General trade quote reviews open daily 7:00 AM – 8:00 PM.</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <h3 className="font-bold text-slate-900 text-base">Send Us a Direct Message</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-900 mb-1 text-xs">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g. Edwin Anyango"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-slate-900 mb-1 text-xs">
                    Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="07XX XXX XXX"
                    className="w-full rounded-xl border border-slate-300 px-3 py-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-900 mb-1 text-xs">
                  Your Message or Question <span className="text-rose-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="How can our Nairobi team assist you today?"
                  className="w-full rounded-xl border border-slate-300 p-3 text-xs focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Send to JobRail Operations</span>
              </button>
            </form>
          ) : (
            <div className="text-center py-10 space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Message Received!</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Thank you, {name}. A JobRail support officer in Nairobi will reach you on {phone} shortly.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-xs font-bold text-blue-600 hover:underline"
              >
                Send another message
              </button>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
