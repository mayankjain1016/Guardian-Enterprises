import { FiTrendingUp, FiDollarSign, FiClipboard, FiBriefcase, FiPieChart, FiShield } from 'react-icons/fi';

const investments = [
  {
    icon: FiTrendingUp,
    bgColor: 'bg-green-100 text-green-600',
    title: 'Mutual Funds',
    desc: 'Invest in professionally managed portfolios for steady long-term growth',
  },
  {
    icon: FiDollarSign,
    bgColor: 'bg-orange-100 text-orange-600',
    title: 'SIP Investment',
    desc: 'Start a Systematic Investment Plan from just ₹500/month',
  },
  {
    icon: FiClipboard,
    bgColor: 'bg-blue-100 text-blue-600',
    title: 'IPO / NFO',
    desc: 'Secure part ownership in new ventures and seize high growth potential',
  },
  {
    icon: FiBriefcase,
    bgColor: 'bg-purple-100 text-purple-600',
    title: 'NPS & Pension',
    desc: 'Plan your retirement with National Pension Scheme advisory',
  },
  {
    icon: FiPieChart,
    bgColor: 'bg-yellow-100 text-yellow-600',
    title: 'ELSS Tax Saver',
    desc: 'Save tax under Section 80C while earning market-linked returns',
  },
  {
    icon: FiShield,
    bgColor: 'bg-red-100 text-red-600',
    title: 'Insurance',
    desc: 'Protect your family with life, health and term insurance plans',
  },
];

export default function PickInvestment() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
            PICK YOUR PREFERRED INVESTMENT
          </h2>
          <div className="w-16 h-1 brand-gradient-bg rounded-full mx-auto mt-3 mb-3 sm:mb-4" />
          <p className="text-slate-500 text-sm sm:text-base">
            Explore Guardian Enterprises' full range of investment options
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {investments.map((item, i) => (
            <div
              key={i}
              className="bg-white border border-slate-100 rounded-2xl p-5 sm:p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 ${item.bgColor} rounded-2xl flex items-center justify-center text-xl sm:text-2xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon />
              </div>
              {/* Title */}
              <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-800 mb-1.5 sm:mb-2">
                {item.title}
              </h3>
              {/* Desc */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
