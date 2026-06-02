import { FaTwitter, FaLinkedinIn, FaInstagram, FaYoutube } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';
import logo from '../Logo.jpeg';

const footerLinks = {
  'Company Overview': [
    'Open Free Account',
    'Brokerage & Charges',
    'About Us',
    'Contact Us',
    'In the Media',
    'Investor Relations',
    'Webinars',
    'Careers',
  ],
  'Investment Options': [
    'Mutual Funds',
    'SIP with ₹500',
    'SIP with ₹1000',
    'ELSS Tax Saver',
    'NPS / Pension',
    'Upcoming NFOs',
    'Insurance',
    'US Stocks',
  ],
  Calculators: [
    'SIP Calculator',
    'Lumpsum Calculator',
    'CAGR Calculator',
    'FD Calculator',
    'RD Calculator',
    'Income Tax Calculator',
    'EMI Calculator',
    'Margin Calculator',
  ],
  'Knowledge Center': [
    'Mutual Funds Guide',
    'Demat Account',
    'How to Invest',
    'Intraday Trading',
    'Share Market',
    'IPO Guide',
    'Financial Planning',
    'Tax Planning',
  ],
};

const socials = [
  { icon: FaTwitter, href: '#', label: 'Twitter' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaYoutube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer
      className="pt-10 sm:pt-14 pb-5 sm:pb-6 text-slate-400"
      style={{
        backgroundColor: '#0f172a',
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px)',
        backgroundSize: '24px 24px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row — Logo + Social */}
        <div className="mb-8 sm:mb-10">
          <div className="max-w-xs">
            <div className="flex items-center gap-1 mb-2 sm:mb-3">
              <img src={logo} alt="Guardian Enterprises Logo" className="h-14 sm:h-20 w-auto object-contain" />
            </div>
            <p className="text-orange-400 text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3">
              Growth • Trust • Vision
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4">
              Your trusted partner for mutual fund investments, financial
              planning, and wealth management. SEBI registered, AMFI certified.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-slate-700 hover:bg-orange-500 flex items-center justify-center text-white transition-all duration-300"
                  aria-label={label}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Link Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-heading font-bold text-xs sm:text-sm mb-3 sm:mb-4 uppercase tracking-wider">
                {title}
              </h4>
              <ul className="space-y-0.5 sm:space-y-1">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-slate-400 text-xs sm:text-sm hover:text-orange-400 transition-colors block py-0.5 sm:py-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-4 sm:pt-5">
          <p className="flex items-start sm:items-center justify-center gap-1.5 text-center text-[10px] sm:text-xs text-slate-500 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed">
            <FiAlertTriangle className="text-orange-400/70 shrink-0 mt-0.5 sm:mt-0" /> Investments in mutual
            funds are subject to market risks. Please read all scheme-related
            documents carefully before investing. Past performance is not
            indicative of future returns.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-500">
            <p>© 2025 Guardian Enterprises. All Rights Reserved.</p>
            <p>AMFI Registered · ARN-XXXXXX · SEBI RIA Reg.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
