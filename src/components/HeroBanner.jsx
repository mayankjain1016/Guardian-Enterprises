import { useState, useEffect } from 'react';
import { FiCheck, FiStar, FiCheckCircle } from 'react-icons/fi';

const slides = [
  {
    id: 1,
    title: 'Quant Small Cap Fund',
    subtitle: 'Direct Growth',
    returns: '+38.4%',
    label: '3Y Returns',
    bars: [40, 55, 45, 65, 60, 78, 70, 85, 90, 95],
  },
  {
    id: 2,
    title: 'Your Portfolio',
    subtitle: 'Total Value',
    value: '₹12,48,000',
    segments: [
      { label: 'Equity', pct: 55, color: '#F97316' },
      { label: 'Debt', pct: 25, color: '#16A34A' },
      { label: 'Hybrid', pct: 20, color: '#3B82F6' },
    ],
  },
  {
    id: 3,
    title: 'Start SIP Today',
    subtitle: 'As low as',
    value: '₹500/month',
    features: ['Zero Commission', 'Expert Advisory', 'Auto-Debit SIP'],
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const renderSlide = (slide) => {
    if (slide.id === 1) {
      return (
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="font-heading font-bold text-slate-800 text-sm sm:text-base">{slide.title}</p>
              <p className="text-slate-400 text-xs">{slide.subtitle}</p>
            </div>
            <span className="text-green-600 font-heading font-extrabold text-lg sm:text-xl">{slide.returns}</span>
          </div>
          <p className="text-xs text-slate-400 mb-2">{slide.label}</p>
          <div className="flex items-end gap-1.5 h-28 sm:h-32">
            {slide.bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-sm transition-all duration-500"
                style={{
                  height: `${h}%`,
                  backgroundColor: '#16A34A',
                  opacity: 0.7 + i * 0.03,
                }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-slate-400">
            <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
          </div>
        </div>
      );
    }
    if (slide.id === 2) {
      const total = slide.segments.reduce((a, b) => a + b.pct, 0);
      let cumulative = 0;
      const gradientParts = slide.segments.map((seg) => {
        const start = (cumulative / total) * 100;
        cumulative += seg.pct;
        const end = (cumulative / total) * 100;
        return `${seg.color} ${start}% ${end}%`;
      });
      return (
        <div className="p-5 sm:p-6 text-center">
          <p className="font-heading font-bold text-slate-800 text-sm sm:text-base mb-1">{slide.title}</p>
          <p className="text-slate-400 text-xs mb-2">{slide.subtitle}</p>
          <p className="font-heading font-black text-2xl sm:text-3xl text-slate-900 mb-4">{slide.value}</p>
          <div
            className="mx-auto w-24 h-24 sm:w-28 sm:h-28 rounded-full relative mb-4"
            style={{ background: `conic-gradient(${gradientParts.join(', ')})` }}
          >
            <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center">
              <span className="text-xs font-semibold text-slate-500">3 Funds</span>
            </div>
          </div>
          <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
            {slide.segments.map((seg) => (
              <div key={seg.label} className="flex items-center gap-1.5 text-xs text-slate-500">
                <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: seg.color }} />
                {seg.label} {seg.pct}%
              </div>
            ))}
          </div>
        </div>
      );
    }
    return (
      <div className="p-5 sm:p-6 text-center">
        <p className="font-heading font-bold text-slate-800 text-sm sm:text-base mb-1">{slide.title}</p>
        <p className="text-slate-400 text-xs mb-2">{slide.subtitle}</p>
        <p className="font-heading font-black text-3xl sm:text-4xl brand-gradient-text mb-5">{slide.value}</p>
        <div className="space-y-2">
          {slide.features.map((f) => (
            <div key={f} className="flex items-center justify-center gap-2 text-sm text-slate-600">
              <FiCheck className="text-green-500" /> {f}
            </div>
          ))}
        </div>
        <button className="mt-5 brand-gradient-bg text-white px-6 py-2.5 rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-300">
          Start SIP Now →
        </button>
      </div>
    );
  };

  return (
    <section
      className="relative overflow-hidden py-10 sm:py-14 md:py-20 bg-slate-50"
    >
      {/* Background decoration — contained by overflow-hidden */}
      <div className="absolute -top-20 -right-20 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-orange-50 opacity-50 pointer-events-none" />
      <div className="absolute -bottom-10 -left-10 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-green-50 opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-orange-600 text-xs sm:text-sm font-medium mb-4 sm:mb-5">
              <FiStar className="text-orange-500" /> India's Trusted MFD Partner
            </span>

            <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-3 sm:mb-4">
              Your One-Stop{' '}
              <span className="brand-gradient-text">Investment Platform</span>
            </h1>

            <p className="text-slate-500 text-sm sm:text-base md:text-lg mb-5 sm:mb-7 max-w-lg">
              Guardian Enterprises — a trusted partner with 15+ years of experience in
              Mutual Funds & Financial Advisory. Grow your wealth with confidence.
            </p>

            {/* Phone input CTA */}
            <div className="mb-4 max-w-lg">
              <div className="flex flex-col sm:flex-row">
                <div className="flex flex-1">
                  <span className="flex items-center px-3 bg-slate-100 border border-r-0 border-slate-300 rounded-l-lg text-sm text-slate-500 font-medium shrink-0">
                    +91
                  </span>
                  <input
                    type="tel"
                    placeholder="Enter your mobile number"
                    className="border border-slate-300 px-4 py-3 text-sm sm:text-base w-full focus:outline-none focus:border-orange-500 transition-colors sm:rounded-none rounded-r-lg sm:rounded-r-none"
                  />
                </div>
                <button className="brand-gradient-bg text-white px-6 py-3 font-semibold text-sm hover:opacity-90 transition-all duration-300 whitespace-nowrap mt-2 sm:mt-0 rounded-lg sm:rounded-l-none sm:rounded-r-lg">
                  Get Started →
                </button>
              </div>
            </div>

            {/* Stat chips */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-4 sm:mb-5">
              <span>₹0 Account Opening</span>
              <span className="text-slate-300">|</span>
              <span>10,000+ Clients</span>
              <span className="text-slate-300">|</span>
              <span>₹0 Advisory Fee</span>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {['SEBI Reg.', 'AMFI Certified', 'ISO 9001'].map((badge) => (
                <span
                  key={badge}
                  className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-green-50 border border-green-100 text-green-700 text-[10px] sm:text-xs font-medium"
                >
                  <FiCheckCircle className="text-green-600" /> {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column — Carousel */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden">
              <div className="transition-all duration-500 ease-in-out" key={current}>
                {renderSlide(slides[current])}
              </div>
            </div>
            {/* Dot indicators */}
            <div className="flex justify-center gap-2 mt-4">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'brand-gradient-bg w-6'
                      : 'bg-slate-300 hover:bg-slate-400 w-2.5'
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
