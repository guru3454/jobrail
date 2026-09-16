import React, { useState } from 'react';
import { 
  Wrench, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ShieldCheck, 
  Zap, 
  Building2, 
  UserCheck, 
  ArrowRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { useApp, AppView } from '../context/AppContext';
import { UserRole } from '../types';

export const Navbar: React.FC = () => {
  const { 
    currentView, 
    setCurrentView, 
    setViewWithParam, 
    userRole, 
    setUserRole,
    setIsRequestModalOpen, 
    setIsEmergencyModalOpen,
    getWhatsAppUrl,
    phoneContact 
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navLinks: { label: string; view: AppView }[] = [
    { label: 'Services', view: 'services' },
    { label: 'How It Works', view: 'how-it-works' },
    { label: 'Find a Pro', view: 'find-a-pro' },
    { label: 'For Fundis', view: 'for-professionals' },
    { label: 'Property Managers', view: 'for-property-managers' },
    { label: 'Pricing', view: 'pricing' }
  ];

  const handleNav = (view: AppView) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  const roleLabels: Record<UserRole, { label: string; badge: string; icon: any }> = {
    CUSTOMER: { label: 'Customer View', badge: 'Client', icon: UserCheck },
    PROFESSIONAL: { label: 'Professional (Fundi)', badge: 'Fundi Pro', icon: Wrench },
    PROPERTY_MANAGER: { label: 'Property Manager', badge: 'Landlord', icon: Building2 },
    ADMIN: { label: 'System Admin', badge: 'Admin', icon: ShieldCheck }
  };

  const CurrentRoleIcon = roleLabels[userRole].icon;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top emergency & trust bar */}
      <div className="bg-slate-900 text-slate-200 text-xs px-4 py-1.5 font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              Nairobi Emergency Dispatch Active
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-300">
              Verified plumbers, electricians & technicians across Nairobi
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href={`tel:${phoneContact}`}
              className="inline-flex items-center gap-1 text-slate-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-blue-400" />
              <span>{phoneContact}</span>
            </a>
            <a 
              href={getWhatsAppUrl('Hello JobRail, I need immediate assistance with a repair.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNav('home')}
            className="flex items-center space-x-3 text-left focus:outline-none group"
            id="brand-logo-btn"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-600/20 group-hover:bg-blue-700 transition-colors">
              <span className="font-mono text-lg font-bold tracking-tighter">JR</span>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 font-display">
                  JOB<span className="text-blue-600">RAIL</span>
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase font-bold tracking-widest bg-blue-50 text-blue-700 px-1.5 py-0.5 rounded border border-blue-200 whitespace-nowrap font-mono">
                  KENYA
                </span>
              </div>
              <p className="text-xs text-slate-500 font-medium hidden sm:block tracking-normal">
                From Service Request to Job Complete
              </p>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap ${
                  currentView === item.view
                    ? 'text-blue-600 bg-blue-50/80 font-bold'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Action Controls & Role Switcher */}
          <div className="hidden sm:flex items-center space-x-3">
            
            {/* Quick Role Switcher */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-xs font-semibold text-slate-700 transition-colors whitespace-nowrap"
                title="Switch perspective between Customer, Pro Fundi, Landlord and Admin"
              >
                <CurrentRoleIcon className="w-4 h-4 text-blue-600" />
                <span className="hidden md:inline">{roleLabels[userRole].badge}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-60 bg-white rounded-2xl shadow-xl border border-slate-200 py-2 z-50 animate-in fade-in slide-in-from-top-1">
                  <div className="px-3.5 py-1.5 border-b border-slate-100 text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Switch Workspace View
                  </div>
                  {(Object.keys(roleLabels) as UserRole[]).map((r) => {
                    const info = roleLabels[r];
                    const Icon = info.icon;
                    return (
                      <button
                        key={r}
                        onClick={() => {
                          setUserRole(r);
                          setRoleDropdownOpen(false);
                          setCurrentView('dashboard');
                        }}
                        className={`w-full text-left px-3.5 py-2.5 text-xs flex items-center justify-between hover:bg-slate-50 transition-colors ${
                          userRole === r ? 'font-bold text-blue-600 bg-blue-50/50' : 'text-slate-700'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Icon className="w-4 h-4 text-slate-500" />
                          <span className="font-medium text-slate-800">{info.label}</span>
                        </div>
                        {userRole === r && (
                          <span className="w-2 h-2 rounded-full bg-blue-600" />
                        )}
                      </button>
                    );
                  })}
                  <div className="p-2 border-t border-slate-100">
                    <button
                      onClick={() => {
                        setRoleDropdownOpen(false);
                        setCurrentView('dashboard');
                      }}
                      className="w-full text-center py-2 px-3 text-xs bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-colors"
                    >
                      Open Active Dashboard
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Emergency fast CTA */}
            <button
              onClick={() => setIsEmergencyModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-amber-800 bg-amber-50 hover:bg-amber-100 border border-amber-200 transition-colors whitespace-nowrap"
              title="Urgent leak, power outage, or lock out"
              id="nav-emergency-btn"
            >
              <Zap className="w-3.5 h-3.5 text-amber-600" />
              <span>Urgent Repair</span>
            </button>

            {/* Dashboard button if already using */}
            <button
              onClick={() => setCurrentView('dashboard')}
              className="px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 rounded-xl transition-colors whitespace-nowrap"
            >
              Dashboard
            </button>

            {/* Primary Action CTA */}
            <button
              onClick={() => setIsRequestModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4.5 py-2.5 text-xs md:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-sm shadow-blue-600/30 transition-all hover:shadow-md whitespace-nowrap"
              id="nav-request-service-btn"
            >
              <span>Request a Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu hamburger */}
          <div className="flex items-center space-x-2 lg:hidden">
            <button
              onClick={() => setIsRequestModalOpen(true)}
              className="px-3 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              Request
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 pb-2 border-b border-slate-100">
            {navLinks.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNav(item.view)}
                className={`text-left px-3 py-2 text-sm font-semibold rounded-lg ${
                  currentView === item.view ? 'bg-blue-50 text-blue-600' : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Role selector in mobile */}
          <div className="space-y-1 pt-1">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              Preview Experience As:
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              {(Object.keys(roleLabels) as UserRole[]).map((r) => (
                <button
                  key={r}
                  onClick={() => {
                    setUserRole(r);
                    setCurrentView('dashboard');
                    setMobileMenuOpen(false);
                  }}
                  className={`text-xs px-2.5 py-2 rounded-lg font-medium border text-left flex items-center justify-between ${
                    userRole === r 
                      ? 'bg-blue-50 border-blue-300 text-blue-700 font-bold'
                      : 'bg-white border-slate-200 text-slate-700'
                  }`}
                >
                  <span>{roleLabels[r].badge}</span>
                  {userRole === r && <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />}
                </button>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setIsEmergencyModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-amber-50 text-amber-800 border border-amber-300 font-bold text-xs flex items-center justify-center gap-2"
            >
              <Zap className="w-4 h-4 text-amber-600" />
              <span>Nairobi Emergency Repair Request</span>
            </button>
            <button
              onClick={() => {
                setCurrentView('dashboard');
                setMobileMenuOpen(false);
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-slate-900 text-white font-bold text-xs"
            >
              Open Active Dashboard
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-lg bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp (+2547421021098)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
