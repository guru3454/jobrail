/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Views
import { HomeView } from './views/HomeView';
import { ServicesView } from './views/ServicesView';
import { HowItWorksView } from './views/HowItWorksView';
import { FindAProView } from './views/FindAProView';
import { ForProfessionalsView } from './views/ForProfessionalsView';
import { ForPropertyManagersView } from './views/ForPropertyManagersView';
import { PricingView } from './views/PricingView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { FaqView } from './views/FaqView';
import { JobTrackingView } from './views/JobTrackingView';
import { QuoteComparisonView } from './views/QuoteComparisonView';
import { ServiceHistoryView } from './views/ServiceHistoryView';

// Dashboards
import { CustomerDashboard } from './views/dashboards/CustomerDashboard';
import { ProfessionalDashboard } from './views/dashboards/ProfessionalDashboard';
import { PropertyManagerDashboard } from './views/dashboards/PropertyManagerDashboard';
import { AdminDashboard } from './views/dashboards/AdminDashboard';

// Modals
import { ServiceRequestModal } from './components/ServiceRequestModal';
import { EmergencyModal } from './components/EmergencyModal';
import { QuoteComparisonModal } from './components/QuoteComparisonModal';
import { ProofOfWorkModal } from './components/ProofOfWorkModal';
import { PaymentModal } from './components/PaymentModal';

// Floating WhatsApp widget
import { MessageCircle } from 'lucide-react';

const MainLayout: React.FC = () => {
  const { 
    currentView, 
    userRole, 
    isRequestModalOpen, 
    setIsRequestModalOpen,
    isEmergencyModalOpen,
    setIsEmergencyModalOpen,
    isQuoteModalOpen,
    setIsQuoteModalOpen,
    isProofModalOpen,
    setIsProofModalOpen,
    isPaymentModalOpen,
    setIsPaymentModalOpen,
    activeJobId,
    getWhatsAppUrl
  } = useApp();

  const renderCurrentView = () => {
    switch (currentView) {
      case 'home':
        return <HomeView />;
      case 'services':
        return <ServicesView />;
      case 'how-it-works':
        return <HowItWorksView />;
      case 'find-a-pro':
        return <FindAProView />;
      case 'for-professionals':
        return <ForProfessionalsView />;
      case 'for-property-managers':
        return <ForPropertyManagersView />;
      case 'pricing':
        return <PricingView />;
      case 'about':
        return <AboutView />;
      case 'contact':
        return <ContactView />;
      case 'faq':
        return <FaqView />;
      case 'job-tracking':
        return <JobTrackingView />;
      case 'quote-comparison':
        return <QuoteComparisonView />;
      case 'service-history':
        return <ServiceHistoryView />;
      case 'dashboard':
        switch (userRole) {
          case 'CUSTOMER':
            return <CustomerDashboard />;
          case 'PROFESSIONAL':
            return <ProfessionalDashboard />;
          case 'PROPERTY_MANAGER':
            return <PropertyManagerDashboard />;
          case 'ADMIN':
            return <AdminDashboard />;
          default:
            return <CustomerDashboard />;
        }
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Main Content Body */}
      <main className="flex-1">
        {renderCurrentView()}
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Modals */}
      <ServiceRequestModal
        isOpen={isRequestModalOpen}
        onClose={() => setIsRequestModalOpen(false)}
      />

      <EmergencyModal
        isOpen={isEmergencyModalOpen}
        onClose={() => setIsEmergencyModalOpen(false)}
      />

      <QuoteComparisonModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        jobId={activeJobId}
      />

      <ProofOfWorkModal
        isOpen={isProofModalOpen}
        onClose={() => setIsProofModalOpen(false)}
        jobId={activeJobId}
      />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        jobId={activeJobId}
      />

      {/* Floating WhatsApp Action Button */}
      <aside aria-label="WhatsApp Quick Support" className="fixed bottom-6 right-6 z-40">
        <a
          href={getWhatsAppUrl('Hello JobRail team, I need support with a repair in Nairobi.')}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full shadow-2xl hover:shadow-emerald-600/50 hover:scale-105 transition-all group"
          id="floating-whatsapp-btn"
        >
          <MessageCircle className="w-5 h-5 text-white" />
          <span className="hidden sm:inline font-semibold">Chat with JobRail</span>
        </a>
      </aside>
    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainLayout />
    </AppProvider>
  );
}
