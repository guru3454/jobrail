import React, { useState } from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  XCircle, 
  AlertTriangle, 
  FileText, 
  Users, 
  Activity,
  Receipt,
  Scale
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AdminDashboard: React.FC = () => {
  const { professionals, jobs, serviceRecords } = useApp();

  const [verifications, setVerifications] = useState([
    {
      id: 'VER-001',
      proName: 'Erick Omondi',
      trade: 'Masonry & Concrete',
      idStatus: 'PENDING_REVIEW',
      skillDoc: 'NITA Grade II Masonry Certificate',
      date: '16 Sep 2026'
    },
    {
      id: 'VER-002',
      proName: 'Kevin Wekesa',
      trade: 'Solar Inverter & Wiring',
      idStatus: 'PENDING_REVIEW',
      skillDoc: 'EPRA Class T3 Solar License',
      date: '15 Sep 2026'
    }
  ]);

  const [disputes, setDisputes] = useState([
    {
      id: 'DISP-881',
      jobId: 'JR-000003',
      client: 'Grace Muthoni (Lavington)',
      pro: 'Peter Mwangi',
      issue: 'Customer claims interior wall paint finish has uneven texture on living room wall.',
      amountKES: 38000,
      status: 'OPEN_MEDIATION'
    }
  ]);

  const handleApprovePro = (id: string) => {
    setVerifications(verifications.map(v => v.id === id ? { ...v, idStatus: 'APPROVED' } : v));
  };

  const handleResolveDispute = (id: string) => {
    setDisputes(disputes.map(d => d.id === id ? { ...d, status: 'RESOLVED_REPAIRED' } : d));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Top Bar */}
      <div className="bg-slate-900 text-white p-6 rounded-3xl border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-mono font-bold text-rose-400 uppercase">
            ADMINISTRATION & TRUST DESK
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
            Quality Assurance & Verification Desk
          </h1>
          <p className="text-xs text-slate-400">
            Nairobi operations center: technician background checks, quote audits, and dispute mediation.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>System Healthy • Port 3000 Active</span>
        </div>
      </div>

      {/* Grid: Verifications & Disputes */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Verification Moderation (Prompt Section 26) */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <Users className="w-4 h-4 text-blue-600" />
              <span>Technician Verification Queue</span>
            </h3>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
              {verifications.filter(v => v.idStatus === 'PENDING_REVIEW').length} Pending
            </span>
          </div>

          <div className="space-y-3 text-xs">
            {verifications.map(v => (
              <div key={v.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{v.proName}</h4>
                    <p className="text-slate-500">{v.trade} • {v.date}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded ${v.idStatus === 'APPROVED' ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'}`}>
                    {v.idStatus.replace('_', ' ')}
                  </span>
                </div>

                <div className="p-2.5 bg-white rounded-xl border border-slate-200 text-slate-700 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-blue-600 shrink-0" />
                  <span className="truncate">{v.skillDoc}</span>
                </div>

                {v.idStatus === 'PENDING_REVIEW' && (
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => handleApprovePro(v.id)}
                      className="flex-1 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg text-xs transition-colors"
                    >
                      Approve Credentials
                    </button>
                    <button
                      className="py-1.5 px-3 border border-slate-300 text-slate-600 hover:bg-slate-100 font-semibold rounded-lg text-xs transition-colors"
                    >
                      Request Clarification
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Dispute Resolution (Prompt Section 27) */}
        <div className="lg:col-span-6 bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-slate-900 text-base flex items-center gap-2">
              <Scale className="w-4 h-4 text-amber-600" />
              <span>Escrow Dispute Mediation</span>
            </h3>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded">
              {disputes.filter(d => d.status === 'OPEN_MEDIATION').length} Open
            </span>
          </div>

          <div className="space-y-3 text-xs">
            {disputes.map(d => (
              <div key={d.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="font-mono text-slate-400 text-[10px]">Case #{d.id} • Job {d.jobId}</span>
                    <h4 className="font-bold text-slate-900 text-sm mt-0.5">{d.client} vs {d.pro}</h4>
                  </div>
                  <span className="font-mono font-bold text-slate-900">
                    KSh {d.amountKES.toLocaleString()} Held
                  </span>
                </div>

                <p className="text-slate-600 bg-white p-2.5 rounded-xl border border-slate-200 leading-relaxed italic">
                  “{d.issue}”
                </p>

                {d.status === 'OPEN_MEDIATION' ? (
                  <div className="flex gap-2 pt-1">
                    <button
                      onClick={() => handleResolveDispute(d.id)}
                      className="flex-1 py-1.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg text-xs transition-colors"
                    >
                      Dispatch Free Warranty Touch-Up
                    </button>
                    <button
                      className="py-1.5 px-3 border border-rose-300 text-rose-700 hover:bg-rose-50 font-bold rounded-lg text-xs transition-colors"
                    >
                      Refund M-Pesa
                    </button>
                  </div>
                ) : (
                  <div className="p-2 bg-emerald-50 text-emerald-800 rounded-xl font-bold text-center">
                    Resolved: Free revisit touch-up scheduled under warranty.
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
};
