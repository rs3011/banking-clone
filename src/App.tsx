import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FixedNavbar from './components/FixedNavbar';
import MainLayout from './layouts/MainLayout';
import DashboardLayout from './layouts/DashboardLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import AccountsPage from './pages/AccountsPage';
import TransferPage from './pages/TransferPage';
import BankingPage from './pages/BankingPage';
import CardsPage from './pages/CardsPage';
import SupportPage from './pages/SupportPage';
import AboutPage from './pages/AboutPage';
import Footer from './components/Footer';
import { AuthProvider } from './contexts/AuthContext';

// Placeholder components for new routes
function PersonalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Personal Banking</h1>
        <p className="text-gray-600">Discover our personal banking solutions designed to help you manage your money and achieve your financial goals.</p>
      </div>
      <Footer />
    </div>
  );
}

function CheckingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Checking Accounts</h1>
        <p className="text-gray-600">Find the right checking account for your needs with our variety of options.</p>
      </div>
      <Footer />
    </div>
  );
}

function SavingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Savings & CDs</h1>
        <p className="text-gray-600">Start saving with competitive rates and convenient access to your money.</p>
      </div>
      <Footer />
    </div>
  );
}

function CreditCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Credit Cards</h1>
        <p className="text-gray-600">Choose from cards with cash back, rewards, travel benefits, or low introductory rates.</p>
      </div>
      <Footer />
    </div>
  );
}

function HomeLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Home Loans</h1>
        <p className="text-gray-600">Find the right mortgage solution for your home buying or refinancing needs.</p>
      </div>
      <Footer />
    </div>
  );
}

function PersonalLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Personal Loans</h1>
        <p className="text-gray-600">Get the financing you need with competitive rates and flexible terms.</p>
      </div>
      <Footer />
    </div>
  );
}

function AutoLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Auto Loans</h1>
        <p className="text-gray-600">Finance your next vehicle with competitive auto loan rates.</p>
      </div>
      <Footer />
    </div>
  );
}

function PremierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Premier Banking</h1>
        <p className="text-gray-600">Experience premium banking with exclusive benefits and personalized service.</p>
      </div>
      <Footer />
    </div>
  );
}

function EducationToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Education & Tools</h1>
        <p className="text-gray-600">Access financial education resources and tools to help you make informed decisions.</p>
      </div>
      <Footer />
    </div>
  );
}

function InvestingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Investing & Wealth Management</h1>
        <p className="text-gray-600">Build your wealth with our comprehensive investment and wealth management services.</p>
      </div>
      <Footer />
    </div>
  );
}

function BrokeragePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Brokerage</h1>
        <p className="text-gray-600">Trade stocks, bonds, and other securities with our brokerage services.</p>
      </div>
      <Footer />
    </div>
  );
}

function RetirementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Retirement</h1>
        <p className="text-gray-600">Plan for your retirement with our comprehensive retirement solutions.</p>
      </div>
      <Footer />
    </div>
  );
}

function WealthManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Wealth Management</h1>
        <p className="text-gray-600">Grow and protect your wealth with personalized wealth management strategies.</p>
      </div>
      <Footer />
    </div>
  );
}

function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Small Business</h1>
        <p className="text-gray-600">Banking solutions designed to help your small business grow and succeed.</p>
      </div>
      <Footer />
    </div>
  );
}

function SBCheckingSavingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Small Business Checking & Savings</h1>
        <p className="text-gray-600">Business banking accounts tailored to your company's needs.</p>
      </div>
      <Footer />
    </div>
  );
}

function SBCreditCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Business Credit Cards</h1>
        <p className="text-gray-600">Business credit cards with rewards and benefits for your company.</p>
      </div>
      <Footer />
    </div>
  );
}

function SBLoansFinancingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Small Business Loans & Financing</h1>
        <p className="text-gray-600">Financing solutions to help your business grow and thrive.</p>
      </div>
      <Footer />
    </div>
  );
}

function CommercialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Commercial Banking</h1>
        <p className="text-gray-600">Comprehensive banking solutions for commercial enterprises.</p>
      </div>
      <Footer />
    </div>
  );
}

function CommercialLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Commercial Loans</h1>
        <p className="text-gray-600">Commercial lending solutions for your business needs.</p>
      </div>
      <Footer />
    </div>
  );
}

function TreasuryManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Treasury Management</h1>
        <p className="text-gray-600">Optimize your cash flow and financial operations with our treasury services.</p>
      </div>
      <Footer />
    </div>
  );
}

function CorporatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Corporate & Investment Banking</h1>
        <p className="text-gray-600">Investment banking services for corporations and institutions.</p>
      </div>
      <Footer />
    </div>
  );
}

function DebtEquityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Debt & Equity Capital Markets</h1>
        <p className="text-gray-600">Capital markets solutions for your financing needs.</p>
      </div>
      <Footer />
    </div>
  );
}

function MergersAcquisitionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mergers & Acquisitions</h1>
        <p className="text-gray-600">Strategic advisory services for mergers and acquisitions.</p>
      </div>
      <Footer />
    </div>
  );
}

function LeadershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Leadership</h1>
        <p className="text-gray-600">Meet the leadership team guiding Wells Fargo's mission and vision.</p>
      </div>
      <Footer />
    </div>
  );
}

function NewsroomPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Newsroom</h1>
        <p className="text-gray-600">Stay updated with the latest news and announcements from Wells Fargo.</p>
      </div>
      <Footer />
    </div>
  );
}

function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <FixedNavbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-gray-600">Join our team and build a rewarding career with Wells Fargo.</p>
      </div>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Homepage with special layout */}
          <Route path="/" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <HomePage />
              <Footer />
            </div>
          } />
          
          {/* Personal Banking Routes */}
          <Route path="/personal" element={<PersonalPage />} />
          <Route path="/personal/checking" element={<CheckingPage />} />
          <Route path="/personal/savings-cds" element={<SavingsPage />} />
          <Route path="/personal/credit-cards" element={<CreditCardsPage />} />
          <Route path="/personal/home-loans" element={<HomeLoansPage />} />
          <Route path="/personal/personal-loans" element={<PersonalLoansPage />} />
          <Route path="/personal/auto-loans" element={<AutoLoansPage />} />
          <Route path="/personal/premier" element={<PremierPage />} />
          <Route path="/personal/education-tools" element={<EducationToolsPage />} />

          {/* Investing Routes */}
          <Route path="/investing-wealth-management" element={<InvestingPage />} />
          <Route path="/investing-wealth-management/brokerage" element={<BrokeragePage />} />
          <Route path="/investing-wealth-management/retirement" element={<RetirementPage />} />
          <Route path="/investing-wealth-management/wealth-management" element={<WealthManagementPage />} />

          {/* Small Business Routes */}
          <Route path="/small-business" element={<SmallBusinessPage />} />
          <Route path="/small-business/checking-savings" element={<SBCheckingSavingsPage />} />
          <Route path="/small-business/business-credit-cards" element={<SBCreditCardsPage />} />
          <Route path="/small-business/loans-financing" element={<SBLoansFinancingPage />} />

          {/* Commercial Banking Routes */}
          <Route path="/commercial-banking" element={<CommercialPage />} />
          <Route path="/commercial-banking/commercial-loans" element={<CommercialLoansPage />} />
          <Route path="/commercial-banking/treasury-management" element={<TreasuryManagementPage />} />

          {/* Corporate Banking Routes */}
          <Route path="/corporate-investment-banking" element={<CorporatePage />} />
          <Route path="/corporate-investment-banking/debt-equity-capital-markets" element={<DebtEquityPage />} />
          <Route path="/corporate-investment-banking/mergers-acquisitions" element={<MergersAcquisitionsPage />} />

          {/* About Routes */}
          <Route path="/about-wells-fargo" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <AboutPage />
              <Footer />
            </div>
          } />
          <Route path="/about-wells-fargo/our-leadership" element={<LeadershipPage />} />
          <Route path="/about-wells-fargo/newsroom" element={<NewsroomPage />} />
          <Route path="/about-wells-fargo/careers" element={<CareersPage />} />

          {/* Existing routes with MainLayout (for login, banking, cards, support, about) */}
          <Route path="/" element={<MainLayout />}>
            <Route path="login" element={<LoginPage />} />
            <Route path="banking" element={<BankingPage />} />
            <Route path="cards" element={<CardsPage />} />
            <Route path="support" element={<SupportPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
          
          {/* Protected Routes */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<DashboardPage />} />
            <Route path="accounts" element={<AccountsPage />} />
            <Route path="transfer" element={<TransferPage />} />
          </Route>

          {/* 404 fallback */}
          <Route path="*" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">404: Page Not Found</h1>
                <p className="text-gray-600">The page you're looking for doesn't exist.</p>
              </div>
              <Footer />
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;