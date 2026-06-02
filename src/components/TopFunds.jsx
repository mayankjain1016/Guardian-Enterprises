import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeInUp, staggerContainer, hoverScale, buttonHover } from '../utils/animations';

const tabs = ['Equity', 'Debt', 'Hybrid', 'ELSS'];

const fundsData = {
  Equity: [
    { abbr: 'QU', name: 'Quant Small Cap Fund', house: 'Quant MF', color: 'bg-violet-500', y1: '+38%', y3: '+32%', y5: '+29%', risk: 'High' },
    { abbr: 'MA', name: 'Mirae Asset Large Cap', house: 'Mirae Asset', color: 'bg-blue-500', y1: '+18%', y3: '+16%', y5: '+17%', risk: 'Moderate' },
    { abbr: 'PP', name: 'Parag Parikh Flexi Cap', house: 'PPFAS', color: 'bg-green-500', y1: '+22%', y3: '+20%', y5: '+21%', risk: 'Moderate' },
    { abbr: 'HD', name: 'HDFC Mid-Cap Opp', house: 'HDFC MF', color: 'bg-orange-500', y1: '+28%', y3: '+24%', y5: '+22%', risk: 'High' },
    { abbr: 'SB', name: 'SBI Bluechip Fund', house: 'SBI MF', color: 'bg-teal-500', y1: '+17%', y3: '+15%', y5: '+15%', risk: 'Low' },
    { abbr: 'AX', name: 'Axis Long Term Equity', house: 'Axis MF', color: 'bg-pink-500', y1: '+19%', y3: '+17%', y5: '+18%', risk: 'Moderate' },
  ],
  Debt: [
    { abbr: 'HB', name: 'HDFC Bond Fund', house: 'HDFC MF', color: 'bg-blue-500', y1: '+8%', y3: '+7%', y5: '+7.5%', risk: 'Low' },
    { abbr: 'IG', name: 'ICICI Gilt Fund', house: 'ICICI Pru', color: 'bg-orange-500', y1: '+9%', y3: '+8%', y5: '+8%', risk: 'Low' },
    { abbr: 'AD', name: 'Axis Dynamic Bond', house: 'Axis MF', color: 'bg-purple-500', y1: '+7.5%', y3: '+7%', y5: '+7.2%', risk: 'Low' },
    { abbr: 'SU', name: 'SBI Magnum UST', house: 'SBI MF', color: 'bg-teal-500', y1: '+6.5%', y3: '+6%', y5: '+6.5%', risk: 'Low' },
    { abbr: 'KS', name: 'Kotak Savings Fund', house: 'Kotak MF', color: 'bg-green-500', y1: '+6%', y3: '+5.8%', y5: '+6%', risk: 'Low' },
    { abbr: 'AF', name: 'Aditya Birla Float', house: 'ABSL', color: 'bg-red-500', y1: '+6.8%', y3: '+6.5%', y5: '+6.7%', risk: 'Low' },
  ],
  Hybrid: [
    { abbr: 'IB', name: 'ICICI Balanced Adv', house: 'ICICI Pru', color: 'bg-blue-500', y1: '+14%', y3: '+13%', y5: '+14%', risk: 'Moderate' },
    { abbr: 'HH', name: 'HDFC Hybrid Equity', house: 'HDFC MF', color: 'bg-orange-500', y1: '+15%', y3: '+12%', y5: '+13%', risk: 'Moderate' },
    { abbr: 'SA', name: 'SBI Equity Hybrid', house: 'SBI MF', color: 'bg-teal-500', y1: '+13%', y3: '+12%', y5: '+12.5%', risk: 'Moderate' },
    { abbr: 'KH', name: 'Kotak Equity Hybrid', house: 'Kotak MF', color: 'bg-green-500', y1: '+12%', y3: '+11%', y5: '+12%', risk: 'Moderate' },
    { abbr: 'CA', name: 'Canara Robeco Eq Hyb', house: 'Canara Rob', color: 'bg-purple-500', y1: '+14.5%', y3: '+13%', y5: '+13.5%', risk: 'Moderate' },
    { abbr: 'MS', name: 'Mirae Asset Hybrid', house: 'Mirae Asset', color: 'bg-pink-500', y1: '+13%', y3: '+12%', y5: '+12.5%', risk: 'Moderate' },
  ],
  ELSS: [
    { abbr: 'QE', name: 'Quant ELSS Tax Saver', house: 'Quant MF', color: 'bg-violet-500', y1: '+30%', y3: '+28%', y5: '+26%', risk: 'High' },
    { abbr: 'ME', name: 'Mirae Asset ELSS', house: 'Mirae Asset', color: 'bg-blue-500', y1: '+20%', y3: '+18%', y5: '+19%', risk: 'Moderate' },
    { abbr: 'AE', name: 'Axis ELSS Tax Saver', house: 'Axis MF', color: 'bg-pink-500', y1: '+16%', y3: '+14%', y5: '+15%', risk: 'Moderate' },
    { abbr: 'SE', name: 'SBI Long Term Equity', house: 'SBI MF', color: 'bg-teal-500', y1: '+18%', y3: '+16%', y5: '+17%', risk: 'Moderate' },
    { abbr: 'DE', name: 'DSP ELSS Tax Saver', house: 'DSP MF', color: 'bg-green-500', y1: '+17%', y3: '+15%', y5: '+16%', risk: 'Moderate' },
    { abbr: 'KE', name: 'Kotak ELSS Tax Saver', house: 'Kotak MF', color: 'bg-orange-500', y1: '+15%', y3: '+14%', y5: '+15%', risk: 'Moderate' },
  ],
};

const riskColors = {
  Low: 'bg-green-100 text-green-700',
  Moderate: 'bg-yellow-100 text-yellow-700',
  High: 'bg-red-100 text-red-700',
};

export default function TopFunds() {
  const [activeTab, setActiveTab] = useState('Equity');
  const funds = fundsData[activeTab];

  return (
    <motion.section 
      className="py-14 sm:py-16 md:py-20 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div variants={fadeInUp} className="text-center mb-8 sm:mb-10">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
            TOP PERFORMING MUTUAL FUNDS
          </h2>
          <div className="w-16 h-1 brand-gradient-bg rounded-full mx-auto mt-3 mb-4 sm:mb-6" />
        </motion.div>

        {/* Tab pills */}
        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10">
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab)}
              className={`rounded-full px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                tab === activeTab
                  ? 'brand-gradient-bg text-white shadow-md'
                  : 'border border-slate-300 text-slate-600 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Fund Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5"
          >
            {funds.map((fund, i) => (
              <motion.div
                key={`${activeTab}-${i}`}
                variants={fadeInUp}
                whileHover="hover"
                className="bg-white border border-slate-100 rounded-xl sm:rounded-2xl p-3 sm:p-5 cursor-default"
              >
                <motion.div variants={hoverScale} className="h-full flex flex-col">
                  {/* Top row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 ${fund.color} rounded-lg sm:rounded-xl flex items-center justify-center text-white font-heading font-bold text-[10px] sm:text-sm shrink-0`}
                    >
                      {fund.abbr}
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-bold text-[11px] sm:text-sm text-slate-800 truncate">
                        {fund.name}
                      </p>
                      <p className="text-[9px] sm:text-xs text-slate-400">{fund.house}</p>
                    </div>
                  </div>

                  {/* Returns row */}
                  <div className="flex gap-1 sm:gap-2 mb-3 sm:mb-4 flex-wrap">
                    <span className="text-[9px] sm:text-xs font-bold rounded-md px-1 sm:px-2 py-0.5 sm:py-1 bg-green-100 text-green-700">
                      1Y: {fund.y1}
                    </span>
                    <span className="text-[9px] sm:text-xs font-bold rounded-md px-1 sm:px-2 py-0.5 sm:py-1 bg-blue-100 text-blue-700">
                      3Y: {fund.y3}
                    </span>
                    <span className="text-[9px] sm:text-xs font-bold rounded-md px-1 sm:px-2 py-0.5 sm:py-1 bg-orange-100 text-orange-700">
                      5Y: {fund.y5}
                    </span>
                  </div>

                  {/* Bottom row */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-between mt-auto">
                    <span
                      className={`text-[9px] sm:text-xs font-medium rounded-md px-1.5 sm:px-2 py-0.5 sm:py-1 w-fit ${riskColors[fund.risk]}`}
                    >
                      {fund.risk} Risk
                    </span>
                    <motion.button 
                      variants={buttonHover}
                      whileHover="hover"
                      whileTap="tap"
                      className="text-[10px] sm:text-sm brand-gradient-bg text-white rounded-lg px-2 sm:px-4 py-1.5 sm:py-2 font-semibold"
                    >
                      Invest Now
                    </motion.button>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
