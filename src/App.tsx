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
import { AuthProvider } from './contexts/AuthContext';

// Placeholder components for new routes
function PersonalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Personal Banking</h1>
        <p className="text-gray-600">Discover our personal banking solutions designed to help you manage your money and achieve your financial goals.</p>
      </div>
    </div>
  );
}

function CheckingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Checking Accounts</h1>
        <p className="text-gray-600">Find the right checking account for your needs with our variety of options.</p>
      </div>
    </div>
  );
}

function SavingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Savings & CDs</h1>
        <p className="text-gray-600">Start saving with competitive rates and convenient access to your money.</p>
      </div>
    </div>
  );
}

function CreditCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Credit Cards</h1>
        <p className="text-gray-600">Choose from cards with cash back, rewards, travel benefits, or low introductory rates.</p>
      </div>
    </div>
  );
}

function HomeLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Home Loans</h1>
        <p className="text-gray-600">Find the right mortgage solution for your home buying or refinancing needs.</p>
      </div>
    </div>
  );
}

function PersonalLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Personal Loans</h1>
        <p className="text-gray-600">Get the financing you need with competitive rates and flexible terms.</p>
      </div>
    </div>
  );
}

function AutoLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Auto Loans</h1>
        <p className="text-gray-600">Finance your next vehicle with competitive auto loan rates.</p>
      </div>
    </div>
  );
}

function PremierPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Premier Banking</h1>
        <p className="text-gray-600">Experience premium banking with exclusive benefits and personalized service.</p>
      </div>
    </div>
  );
}

function EducationToolsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Education & Tools</h1>
        <p className="text-gray-600">Access financial education resources and tools to help you make informed decisions.</p>
      </div>
    </div>
  );
}

function InvestingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Investing & Wealth Management</h1>
        <p className="text-gray-600">Build your wealth with our comprehensive investment and wealth management services.</p>
      </div>
    </div>
  );
}

function BrokeragePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Brokerage</h1>
        <p className="text-gray-600">Trade stocks, bonds, and other securities with our brokerage services.</p>
      </div>
    </div>
  );
}

function RetirementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Retirement</h1>
        <p className="text-gray-600">Plan for your retirement with our comprehensive retirement solutions.</p>
      </div>
    </div>
  );
}

function WealthManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Wealth Management</h1>
        <p className="text-gray-600">Grow and protect your wealth with personalized wealth management strategies.</p>
      </div>
    </div>
  );
}

function SmallBusinessPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Small Business</h1>
        <p className="text-gray-600">Banking solutions designed to help your small business grow and succeed.</p>
      </div>
    </div>
  );
}

function SBCheckingSavingsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Small Business Checking & Savings</h1>
        <p className="text-gray-600">Business banking accounts tailored to your company's needs.</p>
      </div>
    </div>
  );
}

function SBCreditCardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Business Credit Cards</h1>
        <p className="text-gray-600">Business credit cards with rewards and benefits for your company.</p>
      </div>
    </div>
  );
}

function SBLoansFinancingPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Small Business Loans & Financing</h1>
        <p className="text-gray-600">Financing solutions to help your business grow and thrive.</p>
      </div>
    </div>
  );
}

function CommercialPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Commercial Banking</h1>
        <p className="text-gray-600">Comprehensive banking solutions for commercial enterprises.</p>
      </div>
    </div>
  );
}

function CommercialLoansPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Commercial Loans</h1>
        <p className="text-gray-600">Commercial lending solutions for your business needs.</p>
      </div>
    </div>
  );
}

function TreasuryManagementPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Treasury Management</h1>
        <p className="text-gray-600">Optimize your cash flow and financial operations with our treasury services.</p>
      </div>
    </div>
  );
}

function CorporatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Corporate & Investment Banking</h1>
        <p className="text-gray-600">Investment banking services for corporations and institutions.</p>
      </div>
    </div>
  );
}

function DebtEquityPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Debt & Equity Capital Markets</h1>
        <p className="text-gray-600">Capital markets solutions for your financing needs.</p>
      </div>
    </div>
  );
}

function MergersAcquisitionsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Mergers & Acquisitions</h1>
        <p className="text-gray-600">Strategic advisory services for mergers and acquisitions.</p>
      </div>
    </div>
  );
}

function LeadershipPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Leadership</h1>
        <p className="text-gray-600">Meet the leadership team guiding Wells Fargo's mission and vision.</p>
      </div>
    </div>
  );
}

function NewsroomPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Newsroom</h1>
        <p className="text-gray-600">Stay updated with the latest news and announcements from Wells Fargo.</p>
      </div>
    </div>
  );
}

function CareersPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Careers</h1>
        <p className="text-gray-600">Join our team and build a rewarding career with Wells Fargo.</p>
      </div>
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Routes with Fixed Navbar */}
          <Route path="/" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <HomePage />
            </div>
          } />
          
          {/* Personal Banking Routes */}
          <Route path="/personal" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <PersonalPage />
            </div>
          } />
          <Route path="/personal/checking" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <CheckingPage />
            </div>
          } />
          <Route path="/personal/savings-cds" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <SavingsPage />
            </div>
          } />
          <Route path="/personal/credit-cards" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <CreditCardsPage />
            </div>
          } />
          <Route path="/personal/home-loans" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <HomeLoansPage />
            </div>
          } />
          <Route path="/personal/personal-loans" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <PersonalLoansPage />
            </div>
          } />
          <Route path="/personal/auto-loans" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <AutoLoansPage />
            </div>
          } />
          <Route path="/personal/premier" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <PremierPage />
            </div>
          } />
          <Route path="/personal/education-tools" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <EducationToolsPage />
            </div>
          } />

          {/* Investing Routes */}
          <Route path="/investing-wealth-management" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <InvestingPage />
            </div>
          } />
          <Route path="/investing-wealth-management/brokerage" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <BrokeragePage />
            </div>
          } />
          <Route path="/investing-wealth-management/retirement" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <RetirementPage />
            </div>
          } />
          <Route path="/investing-wealth-management/wealth-management" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <WealthManagementPage />
            </div>
          } />

          {/* Small Business Routes */}
          <Route path="/small-business" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <SmallBusinessPage />
            </div>
          } />
          <Route path="/small-business/checking-savings" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <SBCheckingSavingsPage />
            </div>
          } />
          <Route path="/small-business/business-credit-cards" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <SBCreditCardsPage />
            </div>
          } />
          <Route path="/small-business/loans-financing" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <SBLoansFinancingPage />
            </div>
          } />

          {/* Commercial Banking Routes */}
          <Route path="/commercial-banking" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <CommercialPage />
            </div>
          } />
          <Route path="/commercial-banking/commercial-loans" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <CommercialLoansPage />
            </div>
          } />
          <Route path="/commercial-banking/treasury-management" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <TreasuryManagementPage />
            </div>
          } />

          {/* Corporate Banking Routes */}
          <Route path="/corporate-investment-banking" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <CorporatePage />
            </div>
          } />
          <Route path="/corporate-investment-banking/debt-equity-capital-markets" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <DebtEquityPage />
            </div>
          } />
          <Route path="/corporate-investment-banking/mergers-acquisitions" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <MergersAcquisitionsPage />
            </div>
          } />

          {/* About Routes */}
          <Route path="/about-wells-fargo" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <AboutPage />
            </div>
          } />
          <Route path="/about-wells-fargo/our-leadership" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <LeadershipPage />
            </div>
          } />
          <Route path="/about-wells-fargo/newsroom" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <NewsroomPage />
            </div>
          } />
          <Route path="/about-wells-fargo/careers" element={
            <div className="min-h-screen">
              <FixedNavbar />
              <CareersPage />
            </div>
          } />

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
            </div>
          } />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;