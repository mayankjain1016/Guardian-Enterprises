import { useState } from 'react';
import { MdPercent, MdBarChart, MdAccessTime } from 'react-icons/md';
import { FiCheckCircle, FiBarChart2, FiClock, FiSettings } from 'react-icons/fi';

const features = [
  {
    icon: MdPercent,
    title: 'Zero Commission on MF/SIPs',
    desc: 'Enjoy compounding returns at no additional cost',
    phone: {
      header: 'Commission Details',
      chart: [30, 50, 45, 65, 75, 90, 85, 95],
      badge: <span className="flex items-center gap-1">Zero Commission <FiCheckCircle className="text-green-500" /></span>,
      badgeSub: 'On MF Investments',
    },
  },
  {
    icon: MdBarChart,
    title: 'Expert Portfolio Advisory',
    desc: 'Well-researched portfolios built by certified advisors',
    phone: {
      header: 'Portfolio Advisory',
      chart: [45, 55, 60, 70, 68, 80, 85, 92],
      badge: <span className="flex items-center gap-1">Expert Picks <FiBarChart2 className="text-blue-500" /></span>,
      badgeSub: 'By Certified Advisors',
    },
  },
  {
    icon: MdAccessTime,
    title: '24/7 Account Access',
    desc: 'Track and manage investments round the clock',
    phone: {
      header: 'Account Overview',
      chart: [50, 60, 55, 70, 65, 78, 82, 88],
      badge: <span className="flex items-center gap-1">24/7 Access <FiClock className="text-orange-500" /></span>,
      badgeSub: 'Anytime, Anywhere',
    },
  },
];

export default function SeamlessInvesting() {
  const [active, setActive] = useState(0);
  const currentPhone = features[active].phone;

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — Phone Mockup */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="w-60 sm:w-72 bg-slate-900 rounded-3xl relative shadow-2xl overflow-hidden border-4 border-slate-700">
              {/* Phone notch */}
              <div className="w-20 h-4 bg-slate-900 rounded-b-xl mx-auto" />

              {/* Screen Content */}
              <div className="p-3 sm:p-4 pt-2 sm:pt-3">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-white text-xs sm:text-sm font-semibold">{currentPhone.header}</p>
                  <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <FiSettings className="text-orange-400 text-xs" />
                  </div>
                </div>

                {/* Mock Fund Name */}
                <div className="bg-slate-700/50 rounded-lg p-2.5 mb-3">
                  <p className="text-slate-400 text-[10px]">Current NAV</p>
                  <p className="text-white font-heading font-bold text-lg">₹245.67</p>
                  <span className="text-green-400 text-[10px] font-semibold">▲ +2.4% Today</span>
                </div>

                {/* Chart bars */}
                <div className="flex items-end gap-1.5 h-24 sm:h-28 mb-2">
                  {currentPhone.chart.map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t transition-all duration-500"
                      style={{
                        height: `${h}%`,
                        backgroundColor: i >= 5 ? '#F97316' : '#16A34A',
                      }}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-[8px] sm:text-[9px] text-slate-500">
                  <span>Jan</span><span>Mar</span><span>Jun</span><span>Sep</span><span>Dec</span>
                </div>

                {/* Return badge */}
                <div className="mt-3 bg-green-500/10 rounded-lg p-2 text-center">
                  <span className="text-green-400 text-[10px] sm:text-xs font-bold">+38.4% Returns (3Y)</span>
                </div>
              </div>
            </div>

            {/* Floating badge — positioned safely inside container */}
            <div className="absolute right-2 sm:right-8 lg:right-0 bottom-16 sm:bottom-20 bg-white rounded-xl p-2.5 sm:p-3 shadow-lg border border-slate-100 max-w-[160px] sm:max-w-[180px] z-10">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">{currentPhone.badge}</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{currentPhone.badgeSub}</p>
            </div>
          </div>

          {/* Right — Text + Features */}
          <div className="order-1 lg:order-2">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900 mb-2">
              SEAMLESS INVESTING
            </h2>
            <div className="w-16 h-1 brand-gradient-bg rounded-full mt-1 mb-4 sm:mb-5" />
            <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8 max-w-md">
              Experience seamless investing with Guardian Enterprises. Access expert
              tools to achieve your financial goals.
            </p>

            <div className="space-y-3">
              {features.map((f, i) => {
                const Icon = f.icon;
                const isActive = i === active;
                return (
                  <div
                    key={i}
                    onClick={() => setActive(i)}
                    className={`rounded-xl p-3 sm:p-4 cursor-pointer transition-all duration-300 border-l-4 ${
                      isActive
                        ? 'border-l-orange-500 bg-orange-50 shadow-sm'
                        : 'border-l-transparent bg-white hover:bg-slate-50'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className={`p-2 rounded-lg shrink-0 ${
                          isActive ? 'bg-orange-500 text-white' : 'bg-slate-100 text-slate-500'
                        }`}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <p className={`font-heading font-bold text-sm ${isActive ? 'text-slate-900' : 'text-slate-700'}`}>
                          {f.title}
                        </p>
                        <p className="text-slate-500 text-xs mt-1">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
