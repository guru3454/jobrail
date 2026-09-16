import React from 'react';
import { 
  ArrowRight, 
  Phone, 
  MessageCircle, 
  ShieldCheck, 
  Scale, 
  CalendarClock, 
  CheckCircle2, 
  Receipt, 
  Archive, 
  Wrench, 
  Zap, 
  Hammer, 
  Paintbrush, 
  Layers, 
  Cpu, 
  Sparkles, 
  Truck, 
  ChevronRight,
  Building2,
  Users,
  MapPin,
  Star,
  FileCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { HeroMockup } from '../components/HeroMockup';

export const HomeView: React.FC = () => {
  const { 
    categories, 
    setCurrentView, 
    setIsRequestModalOpen, 
    setIsEmergencyModalOpen, 
    setIsQuoteModalOpen,
    setIsProofModalOpen,
    setIsPaymentModalOpen,
    setActiveJobId,
    getWhatsAppUrl, 
    phoneContact, 
    setSelectedCategorySlug 
  } = useApp();

  const iconMap: Record<string, any> = {
    Wrench,
    Zap,
    Hammer,
    Paintbrush,
    Layers,
    Cpu,
    Sparkles,
    Truck,
    ShieldCheck
  };

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* 1. HERO SECTION (Prompt Section 4) */}
      <section className="relative pt-8 sm:pt-14 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy & CTAs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-blue-600" />
                <span>Modern Service Infrastructure for Nairobi, Kenya</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Get the right professional. <br className="hidden sm:inline" />
                <span className="text-blue-600">Manage the whole job.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                JobRail helps you find trusted service professionals, compare quotes, schedule work, track progress, manage payments and keep a record of every job.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
                <button
                  onClick={() => setIsRequestModalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 transition-all hover:shadow-lg"
                  id="hero-primary-cta"
                >
                  <span>Request a Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setCurrentView('find-a-pro')}
                  className="px-6 py-3.5 rounded-xl bg-white border border-slate-300 hover:border-slate-400 text-slate-800 font-bold text-sm hover:bg-slate-50 transition-colors text-center"
                  id="hero-secondary-cta"
                >
                  Find a Professional
                </button>
              </div>

              {/* Direct Support Ribbon */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-semibold text-slate-600">
                <a
                  href={getWhatsAppUrl('Hello JobRail, I need assistance finding a professional for a job in Nairobi.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-emerald-700 hover:text-emerald-800 bg-emerald-50 px-3 py-1.5 rounded-lg border border-emerald-200 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat on WhatsApp</span>
                </a>

                <a
                  href={`tel:${phoneContact}`}
                  className="inline-flex items-center gap-1.5 text-slate-700 hover:text-slate-900 bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-blue-600" />
                  <span>Call {phoneContact}</span>
                </a>
              </div>

            </div>

            {/* Right Product Mockup Visual (Section 4) */}
            <div className="lg:col-span-6">
              <HeroMockup />
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST SECTION (Prompt Section 5) */}
      <section className="bg-white py-14 sm:py-20 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
              Beyond Classified Directories
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
              More than finding a fundi.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              JobRail manages the service journey from request to completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Feature 1 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">1. Verified Professionals</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clear verification statuses across Identity, Certified Trade Skills, and Business registration. Only technicians with verified records receive direct quote permissions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">2. Structured Quotes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Itemized labour, materials, call-out, and warranty periods in transparent Kenyan Shillings (KES). Compare bids side-by-side with zero hidden surprises.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <CalendarClock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">3. Job Tracking</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Follow real-time status as your technician prepares, travels, arrives on-site, diagnoses the issue, and completes the work across Nairobi estates.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">4. Secure Payments</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Integrated payment abstraction for M-Pesa STK push, card, and bank transfer. Payments are settled only after you sign off on satisfactory craftsmanship.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">5. Proof of Work</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Technicians document before, during, and after photos alongside spare part invoices. Customer digital sign-off provides accountability.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:shadow-md transition-all space-y-3">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center font-bold">
                <Archive className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">6. Permanent Service History</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Keep every repair documented under your specific residence or commercial building. Invoices, warranties, and technician notes archived forever.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 3. HOW IT WORKS (Prompt Section 7) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
            Structured Workflow
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            How JobRail Works
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            From initial problem diagnosis to permanent warranty documentation in 5 clean steps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          
          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3 relative">
            <span className="text-2xl font-black text-blue-600 font-mono">01</span>
            <h3 className="text-sm font-bold text-slate-900">Tell us what you need</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Describe the problem and optionally upload photos or video.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3 relative">
            <span className="text-2xl font-black text-blue-600 font-mono">02</span>
            <h3 className="text-sm font-bold text-slate-900">Compare professionals</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Review suitable professionals, experience, ratings, availability and quotes.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3 relative">
            <span className="text-2xl font-black text-blue-600 font-mono">03</span>
            <h3 className="text-sm font-bold text-slate-900">Book the job</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Choose a professional and agree on the scope, price and schedule.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3 relative">
            <span className="text-2xl font-black text-blue-600 font-mono">04</span>
            <h3 className="text-sm font-bold text-slate-900">Track the work</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Follow the job from accepted to completed in real-time.
            </p>
          </div>

          <div className="p-5 rounded-2xl border border-slate-200 bg-white space-y-3 relative">
            <span className="text-2xl font-black text-blue-600 font-mono">05</span>
            <h3 className="text-sm font-bold text-slate-900">Close the job</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Approve the work, pay, receive documentation and leave a verified review.
            </p>
          </div>

        </div>

        <div className="text-center pt-2">
          <button
            onClick={() => setCurrentView('how-it-works')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 underline"
          >
            <span>Read in-depth guide to JobRail service management</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* 4. SERVICE CATEGORIES (Prompt Section 6) */}
      <section className="bg-slate-100/70 py-14 sm:py-20 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
                Comprehensive Trade Taxonomy
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                Kenyan Trade & Repair Services
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1">
                Every category features verified technicians, standardized rates, and transparent quotes.
              </p>
            </div>

            <button
              onClick={() => setCurrentView('services')}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 bg-white px-3.5 py-2 rounded-xl border border-slate-300 shadow-sm"
            >
              <span>Explore All Categories</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => {
              const Icon = iconMap[category.icon] || Wrench;
              return (
                <div
                  key={category.id}
                  className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all space-y-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        From KSh {category.startingPriceKES.toLocaleString()}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-slate-900">{category.name}</h3>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                        {category.description}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">
                        Common Requests:
                      </span>
                      <ul className="space-y-1 text-xs text-slate-600">
                        {category.subServices.slice(0, 3).map((sub) => (
                          <li key={sub} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <span className="truncate">{sub}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <button
                      onClick={() => {
                        setSelectedCategorySlug(category.slug);
                        setIsRequestModalOpen(true);
                      }}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                    >
                      <span>Request {category.name.split(' ')[0]}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => {
                        setSelectedCategorySlug(category.slug);
                        setCurrentView('find-a-pro');
                      }}
                      className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                    >
                      View Pros
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5, 6, 7. USER WORKFLOWS (Customer, Professional, Property Manager) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
            Tailored For Every Stakeholder
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            One Connected Service Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Whether you own a home, execute technical trades, or oversee 50 rental units.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Customer Workflow */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">For Homeowners & Tenants</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Take the guesswork out of maintenance. Never haggle in the dark again or wonder if a fundi will actually show up.
              </p>
              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Compare structured labour & materials quotes</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Track arrival & work progress in real-time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Permanent 30–90 day workmanship warranty</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsRequestModalOpen(true)}
              className="w-full py-2.5 px-4 bg-blue-50 text-blue-700 hover:bg-blue-100 rounded-xl font-bold text-xs transition-colors text-center"
            >
              Post a Service Request
            </button>
          </div>

          {/* Professional Workflow */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">For Fundis & Technicians</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Build your professional reputation on verifiable work, receive high-value client requests, and stop chasing unpaid invoices.
              </p>
              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Send professional quotes straight to WhatsApp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Upload proof-of-work to get paid fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Earn verified badges for your Trade-Test licenses</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('for-professionals')}
              className="w-full py-2.5 px-4 bg-slate-900 text-white hover:bg-slate-800 rounded-xl font-bold text-xs transition-colors text-center"
            >
              Join as a Professional Fundi
            </button>
          </div>

          {/* Property Manager Workflow */}
          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">For Landlords & Property Managers</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centralize repairs across all units and buildings. Dispatch vetted fundis, approve maintenance budgets, and track estate expenditure.
              </p>
              <div className="space-y-2 text-xs text-slate-700 pt-2 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Tenant maintenance portal with photo uploads</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Building expenditure audit logs & invoice receipts</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Unit-by-unit repair history for property valuation</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setCurrentView('for-property-managers')}
              className="w-full py-2.5 px-4 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-xl font-bold text-xs transition-colors text-center"
            >
              Explore Property Manager Tools
            </button>
          </div>

        </div>
      </section>

      {/* 8 & 9. SERVICE HISTORY & RECORD PREVIEW (Prompt Section 16) */}
      <section className="bg-slate-900 text-white py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          <div className="max-w-3xl space-y-3">
            <span className="text-xs uppercase font-bold tracking-widest text-blue-400 font-mono">
              Major JobRail Differentiator
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-white">
              Permanent Service History
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Every home or building maintains a complete historical ledger. No more guessing when the water heater was last descaled, who fixed the electrical board, or if the paint warranty is still active.
            </p>
          </div>

          {/* Interactive Property Record Card (Karen Residence example from Section 16) */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-slate-800 gap-3">
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                  PROPERTY MAINTENANCE ARCHIVE
                </span>
                <h3 className="text-xl font-bold text-white mt-0.5">Karen Residence, Nairobi</h3>
              </div>
              <span className="px-3 py-1 bg-emerald-950 text-emerald-400 border border-emerald-800 text-xs font-mono rounded-full self-start">
                4 Documented Jobs in 2026
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              
              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400">January 2026</span>
                <h4 className="text-sm font-bold text-white">Plumbing Repair</h4>
                <p className="text-blue-400 font-mono font-bold text-sm">KSh 4,500</p>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  Technician: John Otieno • Replaced bathroom gate valves.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400">March 2026</span>
                <h4 className="text-sm font-bold text-white">Electrical Repair</h4>
                <p className="text-blue-400 font-mono font-bold text-sm">KSh 7,200</p>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  Technician: Grace Wanjiku • 32A MCB & surge arrester.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
                <span className="text-xs font-mono text-slate-400">June 2026</span>
                <h4 className="text-sm font-bold text-white">Interior Painting</h4>
                <p className="text-blue-400 font-mono font-bold text-sm">KSh 38,000</p>
                <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                  Technician: Peter Mwangi • Crown Vinyl Silk paint job.
                </div>
              </div>

              <div className="p-4 rounded-xl bg-blue-950/40 border border-blue-800/80 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-blue-300">September 2026</span>
                  <span className="text-[10px] font-bold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                    Warranty Active
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white">Water Heater Repair</h4>
                <p className="text-emerald-400 font-mono font-bold text-sm">KSh 12,500</p>
                <div className="text-[11px] text-slate-300 pt-1 border-t border-blue-900/80">
                  Technician: John Otieno • 30-day warranty expires 16 Oct.
                </div>
              </div>

            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
              <span>Each entry contains: Job Details • Photos • Invoice • Materials • Warranty • Review</span>
              <button
                onClick={() => setCurrentView('service-history')}
                className="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1"
              >
                <span>Inspect Customer Service History Ledger</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 10. VERIFIED REVIEWS SECTION (Prompt Section 25) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs uppercase font-bold tracking-widest text-blue-600 font-mono">
            Strict Review Integrity
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900">
            Verified Reviews from Completed Jobs
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            JobRail does not allow anonymous or unverified reviews. Feedback can only be submitted after a real job is completed, inspected and settled.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Verified Job #JR-000002
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
              “Grace solved an electrical breaker tripping headache that two previous fundis failed to diagnose. She tested every loop with a digital multimeter and provided clean documentation before taking payment. Exceptional professionalism!”
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div>
                <strong className="text-slate-900 font-bold block">Edwin Anyango</strong>
                <span>Kilimani, Nairobi • Main Circuit Breaker & Surge Suppressor</span>
              </div>
              <span className="font-mono text-[11px]">12 Sep 2026</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl border border-slate-200 bg-white space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                Verified Job #JR-000045
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
              “John arrived right on time at 2 PM with genuine PPR pipes and pressure gauges. No hidden surprises on the quote. Water pressure in our master bathroom is finally restored.”
            </p>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <div>
                <strong className="text-slate-900 font-bold block">Wanjiru Kamau</strong>
                <span>Lavington, Nairobi • Bathroom Fixture & Pump Overhaul</span>
              </div>
              <span className="font-mono text-[11px]">28 Aug 2026</span>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ SECTION */}
      <section className="bg-slate-50 py-14 sm:py-20 border-y border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              How JobRail ensures quality, safety, and transparent pricing in Kenya.
            </p>
          </div>

          <div className="space-y-4 text-xs sm:text-sm">
            
            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">How does JobRail differ from basic directory listings?</h3>
              <p className="text-slate-600 leading-relaxed">
                Directories just list phone numbers and leave you to negotiate in the dark. JobRail manages the complete service rail: structured quote comparisons, GPS appointment arrival tracking, before/after photographic proof of work, M-Pesa escrow protection, and a 30-day workmanship warranty.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">How does the 30-day warranty work?</h3>
              <p className="text-slate-600 leading-relaxed">
                Every completed service logged on JobRail includes a minimum 14 to 90-day workmanship guarantee. If the same issue recurs within the warranty window, you simply tap "Report a Warranty Issue" to dispatch a follow-up ticket at zero additional labour cost.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">How are payments handled?</h3>
              <p className="text-slate-600 leading-relaxed">
                JobRail supports Safaricom M-Pesa STK push, Card, and direct bank settlement. The funds are held in secure escrow abstraction and only released to the professional once you tap "I confirm that the service has been completed" and approve the photographic proof of work.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 space-y-2">
              <h3 className="font-bold text-slate-900">Which parts of Kenya do you cover?</h3>
              <p className="text-slate-600 leading-relaxed">
                We are initially live across all Nairobi estates (Kilimani, Westlands, Karen, Lavington, South C, Roysambu, Parklands, etc.) with verified on-call technicians. Architecture is prepared for expansion to Mombasa, Kisumu, Nakuru, Eldoret, and all 47 counties.
              </p>
            </div>

          </div>

          <div className="text-center">
            <button
              onClick={() => setCurrentView('faq')}
              className="text-xs font-bold text-blue-600 hover:underline"
            >
              View all 20+ answers in our Knowledge Center →
            </button>
          </div>
        </div>
      </section>

      {/* 12. FINAL CTA (Prompt Section 44) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 rounded-3xl p-8 sm:p-14 text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase font-mono tracking-widest text-blue-400 font-bold">
              GET STARTED IN MINUTES
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              Your next repair shouldn't become a headache.
            </h2>
            <p className="text-xs sm:text-base text-slate-300 leading-relaxed">
              Describe the job, connect with the right professional, and keep everything organized from request to completion.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setIsRequestModalOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 transition-all"
            >
              <span>Request a Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setCurrentView('find-a-pro')}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              Find a Professional
            </button>
          </div>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl('Hello JobRail, I would like to chat about scheduling a repair in Nairobi.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat with JobRail on WhatsApp (+254742102098)</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
};
