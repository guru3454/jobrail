import React, { useState } from 'react';
import { 
  X, 
  Smartphone, 
  CreditCard, 
  Banknote, 
  Building, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Receipt,
  FileCheck
} from 'lucide-react';
import { useApp } from '../context/AppContext';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  jobId?: string;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  jobId
}) => {
  const { jobs, approveWorkAndPay, setCurrentView, setActiveJobId } = useApp();

  const [paymentMethod, setPaymentMethod] = useState<'M_PESA' | 'CARD' | 'CASH' | 'BANK'>('M_PESA');
  const [phoneNumber, setPhoneNumber] = useState('0742102098');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaidSuccess, setIsPaidSuccess] = useState(false);
  const [generatedReceiptRef, setGeneratedReceiptRef] = useState('');

  if (!isOpen) return null;

  const targetJob = jobs.find(j => j.id === (jobId || 'JR-000001')) || jobs[0];
  const amountToPay = targetJob.payment?.amountKES || targetJob.selectedQuote?.totalKES || 4000;

  const handleTriggerPayment = () => {
    setIsProcessing(true);

    // Simulate STK push prompt or payment gateway validation
    setTimeout(() => {
      const randomRef = 'QHK' + Math.floor(100000 + Math.random() * 900000);
      setGeneratedReceiptRef(randomRef);

      approveWorkAndPay(targetJob.id, {
        amountKES: amountToPay,
        method: paymentMethod,
        status: 'PAID',
        mpesaNumber: phoneNumber,
        transactionRef: randomRef
      });

      setIsProcessing(false);
      setIsPaidSuccess(true);
    }, 2200);
  };

  const handleFinish = () => {
    onClose();
    setActiveJobId(targetJob.id);
    setCurrentView('job-tracking');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl max-w-lg w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-emerald-600 text-white">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white">
                {isPaidSuccess ? 'Payment Successful' : 'Job Settlement & Payment'}
              </h3>
              <p className="text-xs text-slate-400">
                Job #{targetJob.id} • {targetJob.serviceName}
              </p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {!isPaidSuccess ? (
          <div className="p-6 space-y-5 text-xs sm:text-sm">
            
            {/* Amount Summary */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-between">
              <div>
                <span className="text-slate-500 block text-xs">Total Service Amount Due</span>
                <span className="text-2xl font-black text-slate-900 font-mono">
                  KSh {amountToPay.toLocaleString()}
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs text-slate-500 block">Warranty Period</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {targetJob.selectedQuote?.warrantyDays || 30} Days Included
                </span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div>
              <label className="block font-bold text-slate-900 mb-2 text-xs">
                Select Payment Method (Abstraction Layer)
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('M_PESA')}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 text-left transition-all ${
                    paymentMethod === 'M_PESA'
                      ? 'border-emerald-600 bg-emerald-50/70 font-bold text-emerald-950 ring-1 ring-emerald-500'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                    M
                  </div>
                  <div>
                    <span className="text-xs block font-bold">M-Pesa STK Push</span>
                    <span className="text-[10px] text-slate-500">Instant Safaricom Prompt</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('CARD')}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 text-left transition-all ${
                    paymentMethod === 'CARD'
                      ? 'border-blue-600 bg-blue-50/70 font-bold text-blue-950 ring-1 ring-blue-500'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs block font-bold">Debit / Credit Card</span>
                    <span className="text-[10px] text-slate-500">Visa / Mastercard</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('CASH')}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 text-left transition-all ${
                    paymentMethod === 'CASH'
                      ? 'border-slate-800 bg-slate-100 font-bold text-slate-950 ring-1 ring-slate-800'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center">
                    <Banknote className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs block font-bold">Direct Cash</span>
                    <span className="text-[10px] text-slate-500">Pay Fundi with Receipt</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('BANK')}
                  className={`p-3 rounded-xl border flex items-center gap-2.5 text-left transition-all ${
                    paymentMethod === 'BANK'
                      ? 'border-slate-800 bg-slate-100 font-bold text-slate-950 ring-1 ring-slate-800'
                      : 'border-slate-200 hover:bg-slate-50 text-slate-700'
                  }`}
                >
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-white flex items-center justify-center">
                    <Building className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs block font-bold">Bank Transfer / EFT</span>
                    <span className="text-[10px] text-slate-500">Pesalink / RTGS</span>
                  </div>
                </button>
              </div>
            </div>

            {/* M-Pesa phone input if selected */}
            {paymentMethod === 'M_PESA' && (
              <div className="p-3 bg-emerald-50/50 border border-emerald-200 rounded-xl space-y-2">
                <label className="block font-bold text-emerald-950 text-xs">
                  Safaricom M-Pesa Phone Number
                </label>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="07XX XXX XXX"
                  className="w-full rounded-lg border border-emerald-300 px-3 py-2 text-xs sm:text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <p className="text-[11px] text-emerald-800">
                  An STK push will prompt your phone to enter your M-Pesa PIN for <strong>KSh {amountToPay.toLocaleString()}</strong>.
                </p>
              </div>
            )}

            {/* Security note */}
            <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>JobRail payment protection ensures official digital receipt & active warranty registration.</span>
            </div>

            {/* Trigger Button */}
            <div className="pt-2">
              <button
                type="button"
                disabled={isProcessing}
                onClick={handleTriggerPayment}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md text-xs sm:text-sm flex items-center justify-center gap-2 transition-all disabled:bg-slate-300"
              >
                {isProcessing ? (
                  <>
                    <Clock className="w-4 h-4 animate-spin" />
                    <span>Waiting for M-Pesa Authorization on {phoneNumber}...</span>
                  </>
                ) : (
                  <>
                    <Receipt className="w-4 h-4" />
                    <span>Pay KSh {amountToPay.toLocaleString()} & Close Job</span>
                  </>
                )}
              </button>
            </div>

          </div>
        ) : (
          /* Payment Complete Receipt Screen */
          <div className="p-8 text-center space-y-5">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-emerald-700 font-mono">
                SETTLEMENT CONFIRMED
              </span>
              <h3 className="text-2xl font-black text-slate-900 mt-1">
                KSh {amountToPay.toLocaleString()} Paid
              </h3>
              <div className="text-xs text-slate-500 font-mono mt-1">
                M-Pesa Reference: <strong className="text-slate-900 font-bold">{generatedReceiptRef}</strong>
              </div>
            </div>

            <div className="bg-emerald-50/70 border border-emerald-200 rounded-xl p-4 text-left text-xs space-y-2 max-w-sm mx-auto">
              <div className="flex items-center gap-2 text-emerald-950 font-bold">
                <FileCheck className="w-4 h-4 text-emerald-700" />
                <span>30-Day Workmanship Warranty Activated</span>
              </div>
              <p className="text-slate-600 text-[11px] leading-relaxed">
                Your service record, invoice, and warranty certificate have been saved permanently in your JobRail account.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={handleFinish}
                className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-xs shadow-md transition-colors"
              >
                View Updated Job Timeline & Certificate
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
