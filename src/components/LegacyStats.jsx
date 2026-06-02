import { useState, useEffect } from 'react';
import { FiShield, FiStar, FiUsers, FiSmartphone } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight, hoverScale } from '../utils/animations';

const stats = [
  { icon: FiShield, iconColor: 'text-orange-400', bgCard: 'bg-slate-800', number: 15, suffix: '+', label: 'Years of Trust' },
  { icon: FiStar, iconColor: 'text-yellow-400', bgCard: 'bg-slate-800', number: 10000, suffix: '+', label: 'Happy Investors' },
  { icon: FiUsers, iconColor: 'text-green-400', bgCard: 'bg-slate-800', number: 500, suffix: '+', label: 'Authorised Partners' },
  { icon: FiSmartphone, iconColor: 'text-blue-400', bgCard: 'bg-slate-800', number: 1, suffix: ' Lakh+', label: 'App Downloads' },
];

function AnimatedNumber({ target, suffix, triggered }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!triggered) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target]);

  const formatNumber = () => {
    if (target >= 10000) {
      return count.toLocaleString('en-IN');
    }
    return count;
  };

  return (
    <span>
      {formatNumber()}
      {count >= target ? suffix : ''}
    </span>
  );
}

export default function LegacyStats() {
  const [triggered, setTriggered] = useState(false);

  return (
    <motion.section
      className="py-10 sm:py-12 md:py-16 bg-slate-900 border-y border-slate-800"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
      onViewportEnter={() => setTriggered(true)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column — Text */}
          <motion.div variants={fadeInLeft} className="lg:col-span-5 text-center lg:text-left">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight mb-5">
              LEGACY OF <br className="hidden lg:block" />
              <span className="text-orange-500">COMMITTED EXCELLENCE</span>
            </h2>
            <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto lg:mx-0 mb-6" />
            <p className="text-slate-400 text-base sm:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Serving thousands of happy investors for over a decade. We combine deep market expertise with unwavering integrity to build your wealth.
            </p>
          </motion.div>

          {/* Right Column — 2x2 Stats Grid */}
          <motion.div variants={fadeInRight} className="lg:col-span-7">
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover="hover"
                  className={`${stat.bgCard} rounded-xl p-4 sm:p-5 border border-slate-700/50 shadow-md group cursor-default`}
                >
                  <motion.div variants={hoverScale}>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 sm:mb-4 gap-2">
                    <div className={`text-2xl sm:text-3xl ${stat.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon />
                    </div>
                  </div>
                  <p className="font-heading text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-1.5">
                    <AnimatedNumber target={stat.number} suffix={stat.suffix} triggered={triggered} />
                  </p>
                  <p className="text-slate-400 text-xs sm:text-sm font-medium">{stat.label}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </motion.section>
  );
}
