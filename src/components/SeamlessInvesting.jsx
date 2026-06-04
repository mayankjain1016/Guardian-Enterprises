import { useState } from 'react';
import { MdPercent, MdBarChart, MdAccessTime } from 'react-icons/md';
import { FiCheckCircle, FiBarChart2, FiClock, FiSettings } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, fadeInLeft, fadeInRight } from '../utils/animations';

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
    <motion.section 
      className="py-14 sm:py-16 md:py-20 bg-slate-50 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — Phone Mockup */}
          <motion.div variants={fadeInLeft} className="relative flex justify-center order-2 lg:order-1">
            {/* Outer iPhone Frame */}
            <div className="w-[220px] sm:w-[260px] md:w-[280px] h-[460px] sm:h-[540px] md:h-[580px] bg-gray-900 rounded-[2.5rem] p-1.5 sm:p-2 shadow-2xl relative border border-gray-700/50">
              
              {/* Inner Screen */}
              <div className="w-full h-full bg-slate-900 rounded-[2.25rem] overflow-hidden relative border border-gray-800 pb-6">
                
                {/* Dynamic Island / Notch */}
                <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
                  <div className="w-24 sm:w-28 h-5 sm:h-6 bg-black rounded-b-xl sm:rounded-b-2xl"></div>
                </div>

                {/* Status Bar (Dark mode) */}
                <div className="pt-2 sm:pt-2.5 px-5 flex justify-between items-center relative z-10 text-white mb-2">
                  <span className="text-[9px] sm:text-[10px] font-semibold tracking-tight">9:41</span>
                  <div className="flex gap-1.5 items-center">
                    {/* Signal bars */}
                    <div className="flex items-end gap-[1.5px] h-2.5">
                      <div className="w-[2.5px] h-1 bg-white rounded-sm"></div>
                      <div className="w-[2.5px] h-1.5 bg-white rounded-sm"></div>
                      <div className="w-[2.5px] h-2 bg-white rounded-sm"></div>
                      <div className="w-[2.5px] h-2.5 bg-white rounded-sm"></div>
                    </div>
                    {/* WiFi */}
                    <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 18.5C12.8284 18.5 13.5 17.8284 13.5 17C13.5 16.1716 12.8284 15.5 12 15.5C11.1716 15.5 10.5 16.1716 10.5 17C10.5 17.8284 11.1716 18.5 12 18.5Z" fill="currentColor"/>
                      <path d="M7 13.9C9.7614 11.1386 14.2386 11.1386 17 13.9M4 10.8999C8.41824 6.48169 15.5817 6.48169 20 10.8999M1 8C7.0751 1.92487 16.9249 1.92487 23 8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
                    </svg>
                    {/* Battery */}
                    <div className="w-4 h-2.5 border border-white rounded-[3px] p-[1px] flex items-center relative">
                      <div className="w-full h-full bg-white rounded-[1px]"></div>
                      <div className="absolute -right-[2px] top-1/2 -translate-y-1/2 w-[2px] h-[3px] bg-white rounded-r-sm"></div>
                    </div>
                  </div>
                </div>

                {/* Screen Content */}
                <div className="p-3 sm:p-4 pt-1">
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

                {/* Home Indicator line */}
                <div className="absolute bottom-1.5 sm:bottom-2 left-1/2 -translate-x-1/2 w-1/3 h-1 sm:h-1.5 bg-white/50 rounded-full"></div>
              </div>
            </div>

            {/* Floating badge — positioned safely inside container */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              key={active}
              className="absolute right-2 sm:right-8 lg:right-0 bottom-16 sm:bottom-20 bg-white rounded-xl p-2.5 sm:p-3 shadow-lg border border-slate-100 max-w-[160px] sm:max-w-[180px] z-10"
            >
              <p className="text-xs sm:text-sm font-semibold text-slate-800">{currentPhone.badge}</p>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5">{currentPhone.badgeSub}</p>
            </motion.div>
          </motion.div>

          {/* Right — Text + Features */}
          <motion.div variants={fadeInRight} className="order-1 lg:order-2">
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
                  <motion.div
                    key={i}
                    whileHover={{ y: -5 }}
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
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
