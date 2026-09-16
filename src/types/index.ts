export type UserRole = 'CUSTOMER' | 'PROFESSIONAL' | 'PROPERTY_MANAGER' | 'ADMIN';

export type VerificationStatus = 'VERIFIED' | 'PENDING' | 'UNVERIFIED';

export interface VerificationDetails {
  identity: VerificationStatus;
  skills: VerificationStatus;
  business: VerificationStatus;
}

export type JobStatusType = 
  | 'LOOKING_FOR_PROS'
  | 'QUOTES_RECEIVED'
  | 'ACCEPTED'
  | 'SCHEDULED'
  | 'ON_THE_WAY'
  | 'ARRIVED'
  | 'DIAGNOSING'
  | 'WORK_IN_PROGRESS'
  | 'AWAITING_APPROVAL'
  | 'PAYMENT_PENDING'
  | 'COMPLETED'
  | 'CANCELLED';

export type UrgencyLevel = 'STANDARD' | 'URGENT' | 'EMERGENCY_NOW';

export interface LocationInfo {
  county: string;
  subCounty?: string;
  estate: string;
  specificAddress?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  subServices: string[];
  startingPriceKES: number;
  popular?: boolean;
}

export interface Professional {
  id: string;
  name: string;
  title: string;
  category: string;
  specialties: string[];
  location: string;
  county: string;
  phone: string;
  whatsapp: string;
  yearsExperience: number;
  rating: number;
  completedJobs: number;
  repeatCustomersRate: number;
  onTimeRate: number;
  responseRate: string;
  startingPriceKES: number;
  availability: 'Available Today' | 'Next Day' | 'In 2-3 Days';
  languages: string[];
  verification: VerificationDetails;
  avatar: string;
  bio: string;
  portfolio: { title: string; image: string; description: string }[];
  defaultWarrantyDays: number;
}

export interface QuoteItem {
  description: string;
  amountKES: number;
}

export interface StructuredQuote {
  id: string;
  requestId: string;
  proId: string;
  proName: string;
  proCategory: string;
  proAvatar: string;
  proRating: number;
  proCompletedJobs: number;
  proVerification: VerificationDetails;
  labourKES: number;
  materialsKES: number;
  callOutKES: number;
  otherCostsKES?: number;
  totalKES: number;
  warrantyDays: number;
  estimatedArrival: string;
  estimatedDuration: string;
  notes: string;
  status: 'PENDING' | 'ACCEPTED' | 'DECLINED';
  createdAt: string;
}

export interface ProofOfWork {
  beforePhotos: string[];
  duringPhotos: string[];
  afterPhotos: string[];
  materialsUsed: string[];
  notes: string;
  completedAt?: string;
}

export interface WarrantyInfo {
  days: number;
  startDate: string;
  expiresDate: string;
  status: 'ACTIVE' | 'EXPIRED' | 'CLAIM_PENDING' | 'CLAIM_RESOLVED';
  claimDetails?: string;
}

export interface PaymentInfo {
  amountKES: number;
  method: 'M_PESA' | 'CARD' | 'CASH' | 'BANK';
  status: 'PENDING' | 'PAID' | 'REFUND_REQUESTED' | 'REFUNDED';
  mpesaNumber?: string;
  transactionRef?: string;
  paidAt?: string;
}

export interface TimelineEvent {
  status: JobStatusType;
  title: string;
  time: string;
  note?: string;
  actor: 'CUSTOMER' | 'PROFESSIONAL' | 'SYSTEM';
}

export interface ServiceJob {
  id: string; // e.g. JR-000001
  requestId: string;
  customerId: string;
  customerName: string;
  customerPhone: string;
  proId?: string;
  proName?: string;
  proPhone?: string;
  proAvatar?: string;
  serviceCategory: string;
  serviceName: string;
  problemDescription: string;
  location: LocationInfo;
  urgency: UrgencyLevel;
  scheduledDate: string;
  scheduledTimeSlot: string;
  status: JobStatusType;
  selectedQuote?: StructuredQuote;
  proofOfWork?: ProofOfWork;
  warranty?: WarrantyInfo;
  payment?: PaymentInfo;
  customerConfirmed: boolean;
  timeline: TimelineEvent[];
  createdAt: string;
  updatedAt: string;
  propertyId?: string;
  unitNumber?: string;
}

export interface ServiceRequestInput {
  category: string;
  serviceName: string;
  problemDescription: string;
  urgency: UrgencyLevel;
  county: string;
  estate: string;
  specificAddress: string;
  preferredDate: string;
  preferredTime: string;
  budgetRange?: string;
  photos?: string[];
  customerName: string;
  customerPhone: string;
  customerEmail?: string;
}

export interface PropertyUnit {
  id: string;
  propertyId: string;
  unitNumber: string;
  tenantName: string;
  tenantPhone: string;
  monthlyRentKES: number;
}

export interface Property {
  id: string;
  name: string;
  type: 'Residential Apartments' | 'Commercial Office' | 'Gated Community Villa';
  location: string;
  unitsCount: number;
  openMaintenanceCount: number;
  totalExpenditureKES: number;
}

export interface Dispute {
  id: string;
  jobId: string;
  raisedBy: string;
  role: 'CUSTOMER' | 'PROFESSIONAL';
  reason: string;
  description: string;
  status: 'OPEN' | 'UNDER_REVIEW' | 'RESOLVED' | 'CLOSED';
  createdAt: string;
  resolutionNotes?: string;
}

export interface VerifiedReview {
  id: string;
  jobId: string;
  proId: string;
  customerName: string;
  rating: number;
  quality: number;
  professionalism: number;
  communication: number;
  timeliness: number;
  value: number;
  comment: string;
  date: string;
  serviceName: string;
  verifiedJob: boolean;
}

export type JobStatus = JobStatusType;

export interface ServiceRecord {
  id: string;
  propertyId: string;
  serviceName: string;
  category: string;
  completedDate: string;
  costKES: number;
  professionalName: string;
  materialsSummary: string;
  invoiceNumber: string;
  warranty: {
    status: 'ACTIVE' | 'EXPIRED';
    daysRemaining: number;
  };
  photos: string[];
}
