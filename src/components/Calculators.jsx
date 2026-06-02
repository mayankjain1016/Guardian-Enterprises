import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, buttonHover } from '../utils/animations';

const calculatorTabs = ['SIP Calculator', 'Lumpsum Calculator', 'CAGR Calculator'];

function formatCurrency(num) {
  if (num >= 10000000) return `₹${(num / 10000000).toFixed(2)} Cr`;
  if (num >= 100000) return `₹${(num / 100000).toFixed(2)} L`;
  return `₹${num.toLocaleString('en-IN')}`;
}

export default function Calculators() {
  const [activeTab, setActiveTab] = useState(0);
  const [monthly, setMonthly] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  const result = useMemo(() => {
    const r = rate / 12 / 100;
    const n = years * 12;
    const invested = monthly * n;
    const fv = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const returns = fv - invested;
    return { invested, returns, total: fv };
  }, [monthly, rate, years]);

  const investedPct = (result.invested / result.total) * 100;

  return (
    <motion.section 
      className="py-14 sm:py-16 md:py-20 bg-slate-50"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
            CALCULATE YOUR RETURNS EASILY
          </h2>
          <div className="w-16 h-1 brand-gradient-bg rounded-full mx-auto mt-3 mb-4 sm:mb-6" />
        </motion.div>

        {/* Calculator Tabs */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {calculatorTabs.map((tab, i) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(i)}
              className={`rounded-full px-4 sm:px-6 py-2.5 sm:py-3 font-semibold text-xs sm:text-sm transition-all duration-300 ${
                i === activeTab
                  ? 'brand-gradient-bg text-white shadow-md'
                  : 'bg-white border-2 border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              {tab} →
            </motion.button>
          ))}
        </motion.div>

        {/* SIP Calculator */}
        <motion.div variants={fadeInUp} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left — Inputs */}
            <div className="p-5 sm:p-6 md:p-8 border-b lg:border-b-0 lg:border-r border-slate-100">
              {/* Monthly Amount */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">Monthly Amount</label>
                  <span className="font-heading font-bold text-orange-500 text-base sm:text-lg">
                    ₹{monthly.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="100000"
                  step="500"
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 mt-1">
                  <span>₹500</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Expected Return */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">Expected Return (p.a.)</label>
                  <span className="font-heading font-bold text-orange-500 text-base sm:text-lg">{rate}%</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 mt-1">
                  <span>1%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <label className="text-xs sm:text-sm font-medium text-slate-700">Duration (Years)</label>
                  <span className="font-heading font-bold text-orange-500 text-base sm:text-lg">{years} yrs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full"
                />
                <div className="flex justify-between text-[10px] sm:text-xs text-slate-400 mt-1">
                  <span>1 yr</span>
                  <span>30 yrs</span>
                </div>
              </div>
            </div>

            {/* Right — Results */}
            <div className="p-5 sm:p-6 md:p-8 bg-gradient-to-br from-orange-50 to-green-50">
              {/* Doughnut Chart */}
              <div className="flex justify-center mb-5 sm:mb-6">
                <div
                  className="w-32 h-32 sm:w-40 sm:h-40 rounded-full relative"
                  style={{
                    background: `conic-gradient(#F97316 0% ${investedPct}%, #16A34A ${investedPct}% 100%)`,
                  }}
                >
                  <div className="absolute inset-3 sm:inset-4 bg-white rounded-full flex flex-col items-center justify-center shadow-inner">
                    <span className="text-[9px] sm:text-[10px] text-slate-400">Total</span>
                    <span className="font-heading font-bold text-xs sm:text-sm text-slate-800">
                      {formatCurrency(Math.round(result.total))}
                    </span>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-4 sm:gap-6 mb-5 sm:mb-6">
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-3 h-3 rounded-full bg-orange-500 shrink-0" />
                  <span className="text-slate-600">Invested</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm">
                  <span className="w-3 h-3 rounded-full bg-green-600 shrink-0" />
                  <span className="text-slate-600">Returns</span>
                </div>
              </div>

              {/* Result values */}
              <div className="space-y-2 sm:space-y-3 mb-5 sm:mb-6">
                <div className="flex justify-between items-center bg-white/60 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3">
                  <span className="text-slate-600 text-xs sm:text-sm">Invested Amount</span>
                  <span className="font-heading font-bold text-sm sm:text-base text-slate-800">
                    {formatCurrency(Math.round(result.invested))}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-white/60 rounded-xl px-3 sm:px-4 py-2.5 sm:py-3">
                  <span className="text-slate-600 text-xs sm:text-sm">Estimated Returns</span>
                  <span className="font-heading font-bold text-sm sm:text-base text-green-600">
                    +{formatCurrency(Math.round(result.returns))}
                  </span>
                </div>
                <div className="flex justify-between items-center bg-white rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-orange-100">
                  <span className="text-slate-800 font-semibold text-xs sm:text-sm">Total Value</span>
                  <span className="font-heading text-xl sm:text-2xl font-black brand-gradient-text">
                    {formatCurrency(Math.round(result.total))}
                  </span>
                </div>
              </div>

              <motion.button 
                variants={buttonHover}
                whileHover="hover"
                whileTap="tap"
                className="w-full brand-gradient-bg text-white rounded-lg px-6 py-2.5 sm:py-3 font-semibold text-sm"
              >
                Start SIP Now →
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Explore Link */}
        <motion.div variants={fadeInUp} className="text-center mt-5 sm:mt-6">
          <motion.a 
            whileHover={{ scale: 1.05 }}
            href="#" 
            className="inline-block text-orange-500 text-sm font-semibold hover:text-orange-600 transition-colors"
          >
            EXPLORE ALL CALCULATORS →
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}
