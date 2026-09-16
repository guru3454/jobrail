import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, MessageCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

export const FaqView: React.FC = () => {
  const { getWhatsAppUrl } = useApp();
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const faqs = [
    {
      q: 'How does JobRail differ from directory classifieds?',
      a: 'Classified directories simply publish lists of phone numbers and leave you alone to negotiate, verify, and risk upfront deposits. JobRail is an end-to-end service rail: we verify technician IDs and trade credentials, standardize structured quotes (labour, materials, call-out), track on-site arrival, require photo proof of completed work, hold payments until customer sign-off, and guarantee a 30-day workmanship warranty.'
    },
    {
      q: 'What is a Structured Quote and why is it important?',
      a: 'Traditional fundis frequently give vague lump-sum verbal estimates that change once the job begins. On JobRail, quotes are strictly itemized into Labour KES, Materials/Parts KES, Call-out/Diagnostic Fee KES, Estimated Hours, and explicit Warranty Days. Both parties are protected against hidden charges.'
    },
    {
      q: 'How does M-Pesa escrow protection work?',
      a: 'When you accept a quote, the agreed amount is deposited or authorized via Safaricom M-Pesa. The technician is informed that funds are locked, giving them confidence to buy parts and travel. However, funds are only released to the technician when you tap “I confirm that the service has been completed” after inspecting the proof of work.'
    },
    {
      q: 'What if the technician does poor work or the repair fails?',
      a: 'If you are dissatisfied with the completed work, you do not approve the job. The job transitions into review where our Nairobi dispute resolution team inspects the before/after photos. Furthermore, all completed jobs include a 14 to 90-day warranty. If a pipe leaks again or a breaker trips within that window, a free recall ticket is dispatched.'
    },
    {
      q: 'How are technicians verified on JobRail?',
      a: 'Technicians undergo a three-layer check: 1) Identity verification using Kenya National ID and DCI Good Conduct clearance; 2) Skills certification verified through NITA/Trade-Test or EPRA/NCA licenses; 3) Performance tracking where real customer ratings and repeat hire rates are continuously audited.'
    },
    {
      q: 'What is Permanent Service History?',
      a: 'Every property on JobRail gets an ongoing maintenance logbook. Whenever a water heater is installed, an electrical line rewired, or walls repainted, the invoice, technician identity, date, materials used, and warranty are stored forever. This increases property resale and rental value for landlords and homeowners.'
    },
    {
      q: 'How does Emergency Dispatch work?',
      a: 'For urgent issues like burst main water pipes, electrical spark emergencies, or broken locks, our emergency protocol activates nearest on-duty technicians within a 15-minute response window across Nairobi.'
    },
    {
      q: 'Is JobRail available outside Nairobi?',
      a: 'Our on-demand field network is currently concentrated throughout Nairobi and surrounding estates (Kiambu, Machakos, Kajiado corridors). Technicians across Mombasa, Kisumu, Nakuru, and Eldoret are currently being onboarded.'
    }
  ];

  const filteredFaqs = faqs.filter(f => 
    f.q.toLowerCase().includes(search.toLowerCase()) || 
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      
      <div className="text-center space-y-3">
        <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
          Knowledge Center
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900">
          Frequently Asked Questions
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
          Everything you need to know about quotes, technicians, M-Pesa payments, and warranties on JobRail Kenya.
        </p>
      </div>

      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search answers (e.g. M-Pesa, warranty, Kilimani...)"
          className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* FAQ list */}
      <div className="space-y-3">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:bg-slate-50 transition-colors"
              >
                <span>{faq.q}</span>
                {isOpen ? (
                  <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                )}
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still need help? */}
      <div className="bg-slate-100 rounded-2xl p-6 text-center space-y-3">
        <h4 className="text-sm font-bold text-slate-900">Still have questions?</h4>
        <p className="text-xs text-slate-600">
          Our Nairobi support team is available on WhatsApp daily.
        </p>
        <a
          href={getWhatsAppUrl('Hello JobRail team, I have a question about how the service works.')}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Chat on WhatsApp</span>
        </a>
      </div>

    </div>
  );
};
