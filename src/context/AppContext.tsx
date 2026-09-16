import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  UserRole, 
  ServiceJob, 
  StructuredQuote, 
  Professional, 
  ServiceCategory, 
  Property, 
  VerifiedReview, 
  Dispute,
  ServiceRequestInput,
  JobStatusType,
  PaymentInfo,
  ProofOfWork,
  ServiceRecord
} from '../types';
import { 
  SERVICE_CATEGORIES, 
  PROFESSIONALS, 
  INITIAL_JOBS, 
  INITIAL_STRUCTURED_QUOTES, 
  INITIAL_PROPERTIES, 
  INITIAL_REVIEWS, 
  INITIAL_DISPUTES 
} from '../data/mockData';

export type AppView = 
  | 'home'
  | 'how-it-works'
  | 'services'
  | 'find-a-pro'
  | 'for-professionals'
  | 'for-property-managers'
  | 'pricing'
  | 'about'
  | 'contact'
  | 'faq'
  | 'dashboard'
  | 'request-service'
  | 'emergency-service'
  | 'job-tracking'
  | 'quote-comparison'
  | 'service-history';

interface AppContextType {
  userRole: UserRole;
  setUserRole: (role: UserRole) => void;
  currentView: AppView;
  setCurrentView: (view: AppView) => void;
  viewParam?: string;
  setViewWithParam: (view: AppView, param?: string) => void;
  
  // Data lists
  categories: ServiceCategory[];
  professionals: Professional[];
  jobs: ServiceJob[];
  quotes: StructuredQuote[];
  properties: Property[];
  reviews: VerifiedReview[];
  disputes: Dispute[];
  serviceRecords: ServiceRecord[];
  
  // Active states
  activeJobId: string;
  setActiveJobId: (id: string) => void;
  activeJob?: ServiceJob;
  selectedProId?: string;
  setSelectedProId: (id?: string) => void;
  selectedCategorySlug?: string;
  setSelectedCategorySlug: (slug?: string) => void;
  
  // Modals & alerts
  isRequestModalOpen: boolean;
  setIsRequestModalOpen: (open: boolean) => void;
  isEmergencyModalOpen: boolean;
  setIsEmergencyModalOpen: (open: boolean) => void;
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (open: boolean) => void;
  isProofModalOpen: boolean;
  setIsProofModalOpen: (open: boolean) => void;
  isQuoteModalOpen: boolean;
  setIsQuoteModalOpen: (open: boolean) => void;
  
  // Actions
  createServiceRequest: (input: ServiceRequestInput) => string;
  acceptQuote: (quoteId: string) => void;
  updateJobStatus: (jobId: string, newStatus: JobStatusType, note?: string) => void;
  uploadProofOfWork: (jobId: string, proof: ProofOfWork) => void;
  approveWorkAndPay: (jobId: string, payment: PaymentInfo) => void;
  submitReview: (jobId: string, review: Omit<VerifiedReview, 'id' | 'date' | 'verifiedJob'>) => void;
  raiseDispute: (jobId: string, reason: string, description: string) => void;
  raiseWarrantyClaim: (jobId: string, issueDetails: string) => void;
  
  // Helpers
  getWhatsAppUrl: (message?: string) => string;
  phoneContact: string;
  whatsAppContact: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const INITIAL_SERVICE_RECORDS: ServiceRecord[] = [
  {
    id: 'REC-001',
    propertyId: 'PROP-01',
    serviceName: 'Main Distribution Board Breaker Upgrade',
    category: 'Electrical & Backup Power',
    completedDate: '12 Sep 2026',
    costKES: 7200,
    professionalName: 'Grace Wanjiku',
    materialsSummary: 'Hager 32A Type C MCB, Dehn 40kA Surge Module',
    invoiceNumber: 'QHK9283KLA',
    warranty: {
      status: 'ACTIVE',
      daysRemaining: 56
    },
    photos: [
      'https://images.unsplash.com/photo-1509391365360-2e959784a276?w=600&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'REC-002',
    propertyId: 'PROP-01',
    serviceName: 'Water Booster Pump Mechanical Seal',
    category: 'Plumbing & Water Systems',
    completedDate: '28 Aug 2026',
    costKES: 8500,
    professionalName: 'John Otieno',
    materialsSummary: 'Pedrollo Mechanical Ceramic Seal 18mm, Gasket Kit',
    invoiceNumber: 'QHK771892B',
    warranty: {
      status: 'ACTIVE',
      daysRemaining: 12
    },
    photos: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop&q=80'
    ]
  },
  {
    id: 'REC-003',
    propertyId: 'PROP-02',
    serviceName: 'Perimeter Wall Weatherguard Coating',
    category: 'Painting & Surface Finishing',
    completedDate: '14 Jul 2026',
    costKES: 34000,
    professionalName: 'David Kilonzo',
    materialsSummary: 'Crown Extreme Weatherguard (Brilliant White - 60L)',
    invoiceNumber: 'QHK551209C',
    warranty: {
      status: 'EXPIRED',
      daysRemaining: 0
    },
    photos: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=600&auto=format&fit=crop&q=80'
    ]
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [userRole, setUserRole] = useState<UserRole>('CUSTOMER');
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [viewParam, setViewParam] = useState<string | undefined>(undefined);

  const [categories] = useState<ServiceCategory[]>(SERVICE_CATEGORIES);
  const [professionals, setProfessionals] = useState<Professional[]>(PROFESSIONALS);
  const [jobs, setJobs] = useState<ServiceJob[]>(INITIAL_JOBS);
  const [quotes, setQuotes] = useState<StructuredQuote[]>(INITIAL_STRUCTURED_QUOTES);
  const [properties, setProperties] = useState<Property[]>(INITIAL_PROPERTIES);
  const [reviews, setReviews] = useState<VerifiedReview[]>(INITIAL_REVIEWS);
  const [disputes, setDisputes] = useState<Dispute[]>(INITIAL_DISPUTES);
  const [serviceRecords, setServiceRecords] = useState<ServiceRecord[]>(INITIAL_SERVICE_RECORDS);

  const [activeJobId, setActiveJobId] = useState<string>('JR-000001');
  const [selectedProId, setSelectedProId] = useState<string | undefined>(undefined);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState<string | undefined>(undefined);

  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [isEmergencyModalOpen, setIsEmergencyModalOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isProofModalOpen, setIsProofModalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const phoneContact = '0742102098';
  const whatsAppContact = '+254742102098';

  const setViewWithParam = (view: AppView, param?: string) => {
    setCurrentView(view);
    setViewParam(param);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const activeJob = jobs.find(j => j.id === activeJobId) || jobs[0];

  const getWhatsAppUrl = (message?: string) => {
    const defaultMsg = 'Hello JobRail, I need assistance managing a service job.';
    const text = encodeURIComponent(message || defaultMsg);
    return `https://wa.me/254742102098?text=${text}`;
  };

  // Create real service request
  const createServiceRequest = (input: ServiceRequestInput): string => {
    const randNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `JR-00${randNum}`;
    const newReqId = `req-${Date.now()}`;

    const newJob: ServiceJob = {
      id: newId,
      requestId: newReqId,
      customerId: 'cust-101',
      customerName: input.customerName || 'Edwin Anyango',
      customerPhone: input.customerPhone || '0742102098',
      serviceCategory: input.category,
      serviceName: input.serviceName,
      problemDescription: input.problemDescription,
      location: {
        county: input.county || 'Nairobi',
        estate: input.estate,
        specificAddress: input.specificAddress
      },
      urgency: input.urgency,
      scheduledDate: input.preferredDate,
      scheduledTimeSlot: input.preferredTime,
      status: 'QUOTES_RECEIVED',
      customerConfirmed: false,
      timeline: [
        {
          status: 'LOOKING_FOR_PROS',
          title: 'Service Request Created',
          time: 'Just now',
          note: `Request logged for ${input.serviceName} in ${input.estate}.`,
          actor: 'CUSTOMER'
        },
        {
          status: 'QUOTES_RECEIVED',
          title: 'Initial Quotes Matched',
          time: 'Just now',
          note: 'JobRail matched available verified professionals ready to quote.',
          actor: 'SYSTEM'
        }
      ],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    // Auto-generate structured quotes for this request so user can compare right away
    const matchedPros = professionals.filter(p => p.category.toLowerCase().includes(input.category.toLowerCase().slice(0, 5)) || p.category.toLowerCase().includes('plumbing'));
    const prosToQuote = matchedPros.length > 0 ? matchedPros.slice(0, 2) : professionals.slice(0, 2);

    const generatedQuotes: StructuredQuote[] = prosToQuote.map((pro, index) => {
      const baseLabour = pro.startingPriceKES || 2000;
      const labour = index === 0 ? baseLabour + 500 : baseLabour;
      const materials = index === 0 ? 1200 : 0;
      const callOut = index === 0 ? 300 : 0;
      return {
        id: `quote-${Date.now()}-${index}`,
        requestId: newReqId,
        proId: pro.id,
        proName: pro.name,
        proCategory: pro.category,
        proAvatar: pro.avatar,
        proRating: pro.rating,
        proCompletedJobs: pro.completedJobs,
        proVerification: pro.verification,
        labourKES: labour,
        materialsKES: materials,
        callOutKES: callOut,
        totalKES: labour + materials + callOut,
        warrantyDays: pro.defaultWarrantyDays || 30,
        estimatedArrival: input.urgency === 'EMERGENCY_NOW' ? 'Within 45 mins' : 'Today, 3:00 PM',
        estimatedDuration: '1.5 hours',
        notes: index === 0 
          ? `Detailed diagnostic quote with genuine replacement parts and ${pro.defaultWarrantyDays || 30} days warranty.` 
          : 'Labour-only option; client provides materials or settles directly against official receipt.',
        status: 'PENDING',
        createdAt: new Date().toISOString()
      };
    });

    setQuotes(prev => [...generatedQuotes, ...prev]);
    setJobs(prev => [newJob, ...prev]);
    setActiveJobId(newId);

    return newId;
  };

  const acceptQuote = (quoteId: string) => {
    const targetQuote = quotes.find(q => q.id === quoteId);
    if (!targetQuote) return;

    setQuotes(prev => prev.map(q => q.id === quoteId ? { ...q, status: 'ACCEPTED' } : (q.requestId === targetQuote.requestId ? { ...q, status: 'DECLINED' } : q)));

    setJobs(prev => prev.map(j => {
      if (j.requestId === targetQuote.requestId || j.id === activeJobId) {
        return {
          ...j,
          proId: targetQuote.proId,
          proName: targetQuote.proName,
          proAvatar: targetQuote.proAvatar,
          selectedQuote: { ...targetQuote, status: 'ACCEPTED' },
          status: 'ACCEPTED',
          payment: {
            amountKES: targetQuote.totalKES,
            method: 'M_PESA',
            status: 'PENDING'
          },
          warranty: {
            days: targetQuote.warrantyDays,
            startDate: new Date().toISOString().split('T')[0],
            expiresDate: new Date(Date.now() + targetQuote.warrantyDays * 86400000).toISOString().split('T')[0],
            status: 'ACTIVE'
          },
          timeline: [
            ...j.timeline,
            {
              status: 'ACCEPTED',
              title: `Quote Accepted: ${targetQuote.proName}`,
              time: 'Just now',
              note: `Agreed total: KSh ${targetQuote.totalKES.toLocaleString()} with ${targetQuote.warrantyDays}-day warranty.`,
              actor: 'CUSTOMER'
            }
          ],
          updatedAt: new Date().toISOString()
        };
      }
      return j;
    }));
  };

  const updateJobStatus = (jobId: string, newStatus: JobStatusType, note?: string) => {
    const statusTitles: Record<JobStatusType, string> = {
      LOOKING_FOR_PROS: 'Service Request Created',
      QUOTES_RECEIVED: 'Quotes Received',
      ACCEPTED: 'Professional Selected',
      SCHEDULED: 'Appointment Scheduled',
      ON_THE_WAY: 'Professional On The Way',
      ARRIVED: 'Professional Arrived at Property',
      DIAGNOSING: 'Diagnosing & Scope Inspection',
      WORK_IN_PROGRESS: 'Work in Progress',
      AWAITING_APPROVAL: 'Work Completed & Awaiting Approval',
      PAYMENT_PENDING: 'Invoice Issued — Payment Pending',
      COMPLETED: 'Job Completed & Verified',
      CANCELLED: 'Job Cancelled'
    };

    setJobs(prev => prev.map(j => {
      if (j.id === jobId) {
        return {
          ...j,
          status: newStatus,
          timeline: [
            ...j.timeline,
            {
              status: newStatus,
              title: statusTitles[newStatus] || newStatus,
              time: 'Just now',
              note: note || `Job moved to ${newStatus.replace(/_/g, ' ').toLowerCase()}.`,
              actor: userRole === 'CUSTOMER' ? 'CUSTOMER' : 'PROFESSIONAL'
            }
          ],
          updatedAt: new Date().toISOString()
        };
      }
      return j;
    }));
  };

  const uploadProofOfWork = (jobId: string, proof: ProofOfWork) => {
    setJobs(prev => prev.map(j => {
      if (j.id === jobId) {
        return {
          ...j,
          proofOfWork: {
            ...proof,
            completedAt: new Date().toISOString()
          },
          status: 'AWAITING_APPROVAL',
          timeline: [
            ...j.timeline,
            {
              status: 'AWAITING_APPROVAL',
              title: 'Proof of Work Uploaded',
              time: 'Just now',
              note: 'Professional uploaded before/after photos and itemized materials for customer approval.',
              actor: 'PROFESSIONAL'
            }
          ],
          updatedAt: new Date().toISOString()
        };
      }
      return j;
    }));
  };

  const approveWorkAndPay = (jobId: string, payment: PaymentInfo) => {
    setJobs(prev => prev.map(j => {
      if (j.id === jobId) {
        const warrantyDays = j.selectedQuote?.warrantyDays || 30;
        const now = new Date();
        const expiry = new Date(now.getTime() + warrantyDays * 86400000);

        return {
          ...j,
          customerConfirmed: true,
          status: 'COMPLETED',
          payment: {
            ...payment,
            status: 'PAID',
            paidAt: new Date().toISOString()
          },
          warranty: {
            days: warrantyDays,
            startDate: now.toISOString().split('T')[0],
            expiresDate: expiry.toISOString().split('T')[0],
            status: 'ACTIVE'
          },
          timeline: [
            ...j.timeline,
            {
              status: 'AWAITING_APPROVAL',
              title: 'Customer Approved Work',
              time: 'Just now',
              note: 'Customer confirmed satisfaction with completed service.',
              actor: 'CUSTOMER'
            },
            {
              status: 'COMPLETED',
              title: `Payment Received (${payment.method.replace('_', '-')})`,
              time: 'Just now',
              note: `KSh ${payment.amountKES.toLocaleString()} settled. Ref: ${payment.transactionRef || 'M-Pesa Verified'}. ${warrantyDays}-day warranty active.`,
              actor: 'CUSTOMER'
            }
          ],
          updatedAt: new Date().toISOString()
        };
      }
      return j;
    }));
  };

  const submitReview = (jobId: string, reviewData: Omit<VerifiedReview, 'id' | 'date' | 'verifiedJob'>) => {
    const newReview: VerifiedReview = {
      ...reviewData,
      id: `rev-${Date.now()}`,
      jobId,
      date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }),
      verifiedJob: true
    };
    setReviews(prev => [newReview, ...prev]);
  };

  const raiseDispute = (jobId: string, reason: string, description: string) => {
    const newDispute: Dispute = {
      id: `disp-${Date.now()}`,
      jobId,
      raisedBy: 'Edwin Anyango',
      role: userRole === 'CUSTOMER' ? 'CUSTOMER' : 'PROFESSIONAL',
      reason,
      description,
      status: 'OPEN',
      createdAt: new Date().toISOString()
    };
    setDisputes(prev => [newDispute, ...prev]);
  };

  const raiseWarrantyClaim = (jobId: string, issueDetails: string) => {
    setJobs(prev => prev.map(j => {
      if (j.id === jobId && j.warranty) {
        return {
          ...j,
          warranty: {
            ...j.warranty,
            status: 'CLAIM_PENDING',
            claimDetails: issueDetails
          },
          timeline: [
            ...j.timeline,
            {
              status: 'WORK_IN_PROGRESS',
              title: 'Warranty Follow-up Claim Logged',
              time: 'Just now',
              note: `Customer reported issue under warranty: "${issueDetails}". Follow-up ticket linked to original job.`,
              actor: 'CUSTOMER'
            }
          ]
        };
      }
      return j;
    }));
  };

  return (
    <AppContext.Provider value={{
      userRole,
      setUserRole,
      currentView,
      setCurrentView,
      viewParam,
      setViewWithParam,
      categories,
      professionals,
      jobs,
      quotes,
      properties,
      reviews,
      disputes,
      serviceRecords,
      activeJobId,
      setActiveJobId,
      activeJob,
      selectedProId,
      setSelectedProId,
      selectedCategorySlug,
      setSelectedCategorySlug,
      isRequestModalOpen,
      setIsRequestModalOpen,
      isEmergencyModalOpen,
      setIsEmergencyModalOpen,
      isPaymentModalOpen,
      setIsPaymentModalOpen,
      isProofModalOpen,
      setIsProofModalOpen,
      isQuoteModalOpen,
      setIsQuoteModalOpen,
      createServiceRequest,
      acceptQuote,
      updateJobStatus,
      uploadProofOfWork,
      approveWorkAndPay,
      submitReview,
      raiseDispute,
      raiseWarrantyClaim,
      getWhatsAppUrl,
      phoneContact,
      whatsAppContact
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
