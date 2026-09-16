import React, { useState } from 'react';
import { 
  Building2, 
  Layers, 
  Users, 
  Receipt, 
  ShieldCheck, 
  Plus, 
  AlertCircle, 
  Clock, 
  CheckCircle2, 
  Calendar,
  DollarSign,
  FileText,
  Search,
  Filter
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NAIROBI_ESTATES } from '../../data/mockData';

export const PropertyManagerDashboard: React.FC = () => {
  const { properties, serviceRecords, createServiceRequest, setCurrentView } = useApp();

  const [activeTab, setActiveTab] = useState<'OVERVIEW' | 'REQUEST_CREATOR' | 'PROPERTIES' | 'EXPENSES'>('OVERVIEW');

  // Landlord maintenance request form state (Prompt Section 21)
  const [selectedProperty, setSelectedProperty] = useState(properties[0].name);
  const [unitNumber, setUnitNumber] = useState('Unit B4');
  const [tenantName, setTenantName] = useState('Alice Mutua');
  const [problemDescription, setProblemDescription] = useState('Kitchen sink trap leaking water under wooden cabinet');
  const [category, setCategory] = useState('Plumbing');
  const [urgency, setUrgency] = useState<'STANDARD' | 'URGENT' | 'EMERGENCY'>('URGENT');
  const [budgetLimitKES, setBudgetLimitKES] = useState<number>(6000);
  const [preferredTime, setPreferredTime] = useState('Tomorrow 10:00 AM');
  const [formSuccess, setFormSuccess] = useState(false);

  const totalUnits = properties.reduce((acc, p) => acc + p.unitsCount, 0);
  const totalExpenditure = serviceRecords.reduce((acc, r) => acc + r.costKES, 0);

  const handleCreateLandlordTicket = (e: React.FormEvent) => {
    e.preventDefault();
    createServiceRequest({
      category,
      serviceName: `${category} Repair (${selectedProperty} - ${unitNumber})`,
      description: `${problemDescription} [Tenant: ${tenantName}] [Budget Cap: KSh ${budgetLimitKES.toLocaleString()}]`,
      location: {
        estate: 'Kilimani',
        address: `${selectedProperty}, ${unitNumber}`
      },
      urgency
    });
    setFormSuccess(true);
    setTimeout(() => {
      setFormSuccess(false);
      setActiveTab('OVERVIEW');
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Welcome Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-indigo-950 text-white p-6 rounded-3xl border border-indigo-900 shadow-md">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase font-mono font-bold text-indigo-400">
              ESTATE & FACILITY MANAGEMENT
            </span>
            <span className="text-xs bg-indigo-900 text-indigo-200 px-2 py-0.5 rounded font-bold border border-indigo-700">
              Oakwood Property Partners (Nairobi)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Portfolio Maintenance Rail
          </h1>
          <p className="text-xs text-indigo-300">
            Overseeing residential apartment blocks in Kilimani, Westlands, and Karen.
          </p>
        </div>

        <button
          onClick={() => setActiveTab('REQUEST_CREATOR')}
          className="py-3 px-5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-colors self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Log Unit Ticket</span>
        </button>
      </div>

      {/* Metrics Row (Prompt Section 20) */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
        <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-[11px] text-slate-400 font-semibold block">Total Properties</span>
          <span className="text-2xl font-black text-slate-900 font-mono">{properties.length}</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-[11px] text-slate-400 font-semibold block">Total Units</span>
          <span className="text-2xl font-black text-indigo-600 font-mono">{totalUnits}</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-[11px] text-slate-400 font-semibold block">Open Tickets</span>
          <span className="text-2xl font-black text-amber-500 font-mono">2 Active</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1">
          <span className="text-[11px] text-slate-400 font-semibold block">Repairs Completed</span>
          <span className="text-2xl font-black text-emerald-600 font-mono">{serviceRecords.length}</span>
        </div>

        <div className="bg-white p-4 rounded-2xl border border-slate-200 space-y-1 lg:col-span-2">
          <span className="text-[11px] text-slate-400 font-semibold block">Maintenance Spend 2026</span>
          <span className="text-2xl font-black text-slate-900 font-mono">KSh {totalExpenditure.toLocaleString()}</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 gap-6 text-xs font-bold">
        <button
          onClick={() => setActiveTab('OVERVIEW')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'OVERVIEW' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Maintenance Overview</span>
          {activeTab === 'OVERVIEW' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('REQUEST_CREATOR')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'REQUEST_CREATOR' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Create Landlord Ticket (Unit Level)</span>
          {activeTab === 'REQUEST_CREATOR' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('PROPERTIES')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'PROPERTIES' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Managed Buildings ({properties.length})</span>
          {activeTab === 'PROPERTIES' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
          )}
        </button>

        <button
          onClick={() => setActiveTab('EXPENSES')}
          className={`pb-3 transition-colors relative ${
            activeTab === 'EXPENSES' ? 'text-indigo-600' : 'text-slate-500 hover:text-slate-800'
          }`}
        >
          <span>Expense Audit Ledger</span>
          {activeTab === 'EXPENSES' && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-600" />
          )}
        </button>
      </div>

      {/* Tab 1: Overview */}
      {activeTab === 'OVERVIEW' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 space-y-4">
            <h3 className="text-base font-bold text-slate-900">
              Active Unit Maintenance Rail
            </h3>

            <div className="space-y-3 text-xs">
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">Kilimani Heights • Unit B4</span>
                    <span className="text-[10px] font-bold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                      In Progress
                    </span>
                  </div>
                  <p className="text-slate-500">Plumbing: Replacement of bathroom angle valves and flex pipes.</p>
                  <p className="text-slate-400 text-[11px]">Technician: John Otieno • Budget Cap: KSh 4,500</p>
                </div>

                <button
                  onClick={() => setCurrentView('job-tracking')}
                  className="py-2 px-3 bg-indigo-600 text-white rounded-xl font-bold text-xs hover:bg-indigo-700 transition-colors self-start sm:self-auto"
                >
                  Track Work
                </button>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">Westlands Commercial Plaza • Suite 302</span>
                    <span className="text-[10px] font-bold uppercase bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      Quotes Received (2)
                    </span>
                  </div>
                  <p className="text-slate-500">Electrical: Fluorescent ballast flicker & circuit isolator test.</p>
                  <p className="text-slate-400 text-[11px]">Budget Cap: KSh 8,000</p>
                </div>

                <button
                  onClick={() => setCurrentView('quote-comparison')}
                  className="py-2 px-3 bg-blue-600 text-white rounded-xl font-bold text-xs hover:bg-blue-700 transition-colors self-start sm:self-auto"
                >
                  Review Quotes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Landlord Maintenance Request Creator (Prompt Section 21) */}
      {activeTab === 'REQUEST_CREATOR' && (
        <div className="max-w-2xl bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Create Landlord Maintenance Ticket
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Dispatch a structured service ticket linked to a specific building, unit, and tenant.
            </p>
          </div>

          {formSuccess ? (
            <div className="p-8 text-center space-y-3 bg-emerald-50 border border-emerald-200 rounded-2xl">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-lg font-bold text-emerald-950">Maintenance Ticket Logged!</h4>
              <p className="text-xs text-emerald-800">
                Dispatched to matched trade professionals. Vetted quotes will appear in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleCreateLandlordTicket} className="space-y-4 text-xs sm:text-sm">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Property Building</label>
                  <select
                    value={selectedProperty}
                    onChange={(e) => setSelectedProperty(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs bg-white focus:ring-2 focus:ring-indigo-500"
                  >
                    {properties.map(p => (
                      <option key={p.id} value={p.name}>{p.name} ({p.estate})</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Unit / Apartment #</label>
                  <input
                    type="text"
                    required
                    value={unitNumber}
                    onChange={(e) => setUnitNumber(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Tenant Contact Name</label>
                  <input
                    type="text"
                    required
                    value={tenantName}
                    onChange={(e) => setTenantName(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Trade Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs bg-white focus:ring-2 focus:ring-indigo-500"
                  >
                    <option value="Plumbing">Plumbing</option>
                    <option value="Electrical">Electrical</option>
                    <option value="Carpentry">Carpentry</option>
                    <option value="Painting">Painting</option>
                    <option value="Masonry & Construction">Masonry</option>
                    <option value="Appliance Repair">Appliance Repair</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-slate-900 mb-1 text-xs">Detailed Defect / Problem</label>
                <textarea
                  rows={3}
                  required
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Urgency</label>
                  <select
                    value={urgency}
                    onChange={(e) => setUrgency(e.target.value as any)}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs bg-white focus:ring-2 focus:ring-indigo-500 font-bold"
                  >
                    <option value="STANDARD">Standard (1-2 days)</option>
                    <option value="URGENT">Urgent (Today)</option>
                    <option value="EMERGENCY">Emergency (15 min)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Max Budget Cap (KSh)</label>
                  <input
                    type="number"
                    value={budgetLimitKES}
                    onChange={(e) => setBudgetLimitKES(Number(e.target.value))}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs font-mono focus:ring-2 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-900 mb-1 text-xs">Preferred Time</label>
                  <input
                    type="text"
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full rounded-xl border border-slate-300 p-2.5 text-xs focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md transition-colors"
              >
                Dispatch Landlord Maintenance Ticket
              </button>
            </form>
          )}
        </div>
      )}

      {/* Tab 3: Properties */}
      {activeTab === 'PROPERTIES' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {properties.map(p => (
            <div key={p.id} className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3">
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 font-mono">#{p.id}</span>
                  <h4 className="font-bold text-slate-900 text-base">{p.name}</h4>
                  <p className="text-xs text-slate-500">{p.address}, {p.estate}</p>
                </div>
                <span className="text-xs font-mono font-bold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded">
                  {p.unitsCount} Units
                </span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex justify-between items-center text-xs">
                <span className="text-slate-500">Active Tenant Tickets: 1</span>
                <button
                  onClick={() => setCurrentView('service-history')}
                  className="text-indigo-600 font-bold hover:underline"
                >
                  View Records →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Expenses */}
      {activeTab === 'EXPENSES' && (
        <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-slate-900 text-sm">Building Maintenance Expenditure Ledger</h3>
            <button
              onClick={() => alert('Exporting Nairobi Property Maintenance CSV Ledger...')}
              className="text-xs font-bold text-indigo-600 hover:underline"
            >
              Export Tax CSV →
            </button>
          </div>

          <div className="space-y-2 text-xs">
            {serviceRecords.map(r => (
              <div key={r.id} className="p-3 bg-slate-50 rounded-xl flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-900">{r.serviceName}</span>
                  <p className="text-slate-500 text-[11px]">{r.completedDate} • {r.professionalName} • M-Pesa Ref: {r.invoiceNumber}</p>
                </div>
                <span className="font-mono font-bold text-slate-900">KSh {r.costKES.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
