import { useState } from 'react';
import { FiBarChart2, FiZap, FiBell, FiTrendingUp } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight } from '../utils/animations';

const features = [
  {
    icon: FiBarChart2,
    title: 'Expert Fund Selection',
    desc: 'Access SEBI-registered research and curated fund recommendations',
  },
  {
    icon: FiZap,
    title: 'Instant KYC & Onboarding',
    desc: 'Complete digital KYC in under 5 minutes — no paperwork',
  },
  {
    icon: FiBell,
    title: 'Smart Alerts & Tracking',
    desc: 'Get real-time alerts on NAV, SIP due dates, and portfolio changes',
  },
];

export default function BuiltForInvestors() {
  const [active, setActive] = useState(0);

  return (
    <motion.section
      className="py-14 sm:py-16 md:py-20 overflow-hidden bg-slate-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — Text + Features */}
          <motion.div variants={fadeInLeft}>
            <p className="text-slate-400 font-extrabold text-lg sm:text-xl md:text-2xl font-heading mb-1">
              BUILT FOR
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl brand-gradient-text mb-3 sm:mb-4">
              INVESTORS
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8 max-w-md">
              Guardian Enterprises is meticulously designed for serious investors
              seeking growth, security, and transparency.
            </p>

            <div className="space-y-3">
              {features.map((f, i) => {
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
                      <div className="text-xl shrink-0"><f.icon className={isActive ? 'text-orange-500' : 'text-slate-500'} /></div>
                      <div>
                        <p
                          className={`font-heading font-bold text-sm ${
                            isActive ? 'text-slate-900' : 'text-slate-700'
                          }`}
                        >
                          {f.title}
                        </p>
                        <p className="text-slate-500 text-xs mt-1">{f.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right — Device Mockups */}
          <motion.div variants={fadeInRight} className="relative pb-8">
            {/* Main Monitor Frame (Windows Style) */}
            <div className="w-full max-w-md mx-auto bg-[#1C1C1C] rounded-xl overflow-hidden shadow-2xl border border-slate-700">
              {/* Windows 11 Title bar */}
              <div className="flex items-center justify-between pl-3 pr-1 py-1.5 bg-[#2B2B2B]">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 brand-gradient-bg rounded-sm shadow-sm" />
                  <span className="text-slate-300 text-[10px] sm:text-xs font-medium">
                    Guardian Portfolio Dashboard
                  </span>
                </div>
                <div className="flex items-center">
                  {/* Minimize */}
                  <div className="px-3 py-1.5 hover:bg-white/10 transition-colors cursor-pointer rounded-sm">
                    <svg className="w-2.5 h-2.5 text-slate-300" viewBox="0 0 16 16" fill="currentColor">
                      <path d="M1 8h14v1.5H1z"/>
                    </svg>
                  </div>
                  {/* Maximize */}
                  <div className="px-3 py-1.5 hover:bg-white/10 transition-colors cursor-pointer rounded-sm">
                    <svg className="w-2.5 h-2.5 text-slate-300" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="12" height="12" />
                    </svg>
                  </div>
                  {/* Close */}
                  <div className="px-3 py-1.5 hover:bg-red-500 hover:text-white transition-colors cursor-pointer rounded-sm group">
                    <svg className="w-2.5 h-2.5 text-slate-300 group-hover:text-white" viewBox="0 0 16 16" fill="currentColor">
                      <path fillRule="evenodd" d="M1.293 1.293a1 1 0 0 1 1.414 0L8 6.586l5.293-5.293a1 1 0 1 1 1.414 1.414L9.414 8l5.293 5.293a1 1 0 0 1-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L6.586 8 1.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-slate-900 p-4">
                {/* Top Stats Row */}
                <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4">
                  <div className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700/50">
                    <p className="text-[9px] sm:text-[10px] text-slate-400">Portfolio</p>
                    <p className="text-white font-heading font-bold text-xs sm:text-sm">₹12.48L</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700/50">
                    <p className="text-[9px] sm:text-[10px] text-slate-400">Returns</p>
                    <p className="text-green-400 font-heading font-bold text-xs sm:text-sm">+22.4%</p>
                  </div>
                  <div className="bg-slate-800 rounded-lg p-2 text-center border border-slate-700/50">
                    <p className="text-[9px] sm:text-[10px] text-slate-400">Active SIPs</p>
                    <p className="text-orange-400 font-heading font-bold text-xs sm:text-sm">5</p>
                  </div>
                </div>

                {/* Chart Area */}
                <div className="flex items-end gap-[1px] sm:gap-[2px] h-24 sm:h-28 mb-2">
                  {[35, 45, 40, 55, 50, 65, 60, 72, 68, 80, 75, 88, 85, 92, 90, 95].map(
                    (h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-[2px] transition-all duration-500"
                        style={{
                          height: `${h}%`,
                          backgroundColor: i % 2 === 0 ? '#F97316' : '#16A34A',
                        }}
                      />
                    )
                  )}
                </div>
                <div className="flex justify-between text-[8px] sm:text-[9px] text-slate-500 px-1">
                  <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span><span>Nov</span>
                </div>
              </div>
            </div>

            {/* Overlapping Phone — positioned inside padding area */}
            <div className="absolute bottom-0 right-4 sm:right-8 lg:right-4 w-32 sm:w-36 bg-white rounded-2xl shadow-xl border border-slate-100 p-2.5 sm:p-3 z-10">
              <div className="bg-slate-50 rounded-lg p-2 text-center mb-1.5">
                <p className="text-[8px] sm:text-[9px] text-slate-400">Total Value</p>
                <p className="font-heading font-bold text-sm sm:text-base text-slate-900">₹12.48L</p>
              </div>
              <div className="flex items-center justify-center gap-1">
                <FiTrendingUp className="text-green-500 text-[10px]" />
                <span className="text-green-500 text-xs font-semibold">+22.4%</span>
              </div>
              <div className="mt-1.5 brand-gradient-bg rounded-md py-1 text-center">
                <span className="text-white text-[8px] sm:text-[9px] font-semibold">INVEST NOW</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
