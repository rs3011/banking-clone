// src/data/menu.ts

export interface SubItem {
  label: string;
  path: string;
}

export interface PrimaryItem {
  label: string;
  path: string;       // URL for clicking the primary tab (e.g. "/personal")
  subItems: SubItem[];
}

export const menu: PrimaryItem[] = [
  {
    label: 'Personal',
    path: '/personal',
    subItems: [
      { label: 'Checking', path: '/personal/checking' },
      { label: 'Savings & CDs', path: '/personal/savings' },
      { label: 'Credit Cards', path: '/personal/credit-cards' },
      { label: 'Home Loans', path: '/personal/home-loans' },
      { label: 'Personal Loans', path: '/personal/personal-loans' },
      { label: 'Auto Loans', path: '/personal/auto-loans' },
      { label: 'Premier', path: '/personal/premier' },
      { label: 'Education & Tools', path: '/personal/education-tools' },
    ]
  },
  {
    label: 'Investing & Wealth Management',
    path: '/investing',
    subItems: [
      { label: 'Brokerage', path: '/investing/brokerage' },
      { label: 'Retirement', path: '/investing/retirement' },
      { label: 'Wealth Management', path: '/investing/wealth-management' },
    ]
  },
  {
    label: 'Small Business',
    path: '/small-business',
    subItems: [
      { label: 'Checking & Savings', path: '/small-business/checking-savings' },
      { label: 'Business Credit Cards', path: '/small-business/credit-cards' },
      { label: 'Loans & Financing', path: '/small-business/loans-financing' },
    ]
  },
  {
    label: 'Commercial Banking',
    path: '/commercial',
    subItems: [
      { label: 'Commercial Loans', path: '/commercial/commercial-loans' },
      { label: 'Treasury Management', path: '/commercial/treasury-management' },
    ]
  },
  {
    label: 'Corporate & Investment Banking',
    path: '/corporate',
    subItems: [
      { label: 'Debt & Equity Capital Markets', path: '/corporate/debt-equity' },
      { label: 'Mergers & Acquisitions', path: '/corporate/mergers-acquisitions' },
    ]
  },
  {
    label: 'About Wells Fargo',
    path: '/about',
    subItems: [
      { label: 'Our Leadership', path: '/about/leadership' },
      { label: 'Newsroom', path: '/about/newsroom' },
      { label: 'Careers', path: '/about/careers' },
    ]
  }
];