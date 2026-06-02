import { useState, useEffect, useCallback } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { MdStar, MdVerified } from 'react-icons/md';

const testimonials = [
  {
    initials: 'RK',
    name: 'Rajesh Kumar',
    reviews: '12 reviews',
    time: '2 weeks ago',
    text: 'Guardian helped me start my first SIP. 22% returns in 3 years. Amazing platform and very helpful advisory team.',
    color: 'bg-purple-600',
  },
  {
    initials: 'PS',
    name: 'Priya Sharma',
    reviews: 'Local Guide · 45 reviews',
    time: 'a month ago',
    text: "Simple onboarding, expert advice. Best decision for my daughter's education fund. Highly recommended for beginners.",
    color: 'bg-blue-600',
  },
  {
    initials: 'AM',
    name: 'Amit Mehta',
    reviews: '8 reviews',
    time: '2 months ago',
    text: 'Saved ₹46,000 in taxes with ELSS. No hidden charges, full transparency. The app is incredibly easy to use.',
    color: 'bg-green-600',
  },
  {
    initials: 'NP',
    name: 'Neha Patel',
    reviews: 'Local Guide · 112 reviews',
    time: '3 months ago',
    text: 'Started with just ₹2,000/month SIP. Portfolio is now ₹2.1 lakhs in 5 years. Great compounding benefits!',
    color: 'bg-orange-500',
  },
  {
    initials: 'VR',
    name: 'Vivek Rao',
    reviews: '4 reviews',
    time: '4 months ago',
    text: 'Portfolio barely fell during the recent market correction. Professional risk management by the Guardian team.',
    color: 'bg-teal-600',
  },
  {
    initials: 'SK',
    name: 'Sunita Kapoor',
    reviews: '21 reviews',
    time: '5 months ago',
    text: '24% XIRR over 4 years. Far better than keeping money in an FD. Genuinely trustworthy and transparent team.',
    color: 'bg-pink-600',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const totalSlides = testimonials.length;

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const getVisibleCards = () => {
    const cards = [];
    for (let i = 0; i < 3; i++) {
      cards.push(testimonials[(current + i) % totalSlides]);
    }
    return cards;
  };

  const renderCard = (t, i) => (
    <div
      key={`${t.initials}-${i}`}
      className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all duration-300"
    >
      {/* Header: User Info + Google Icon */}
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-medium text-sm shrink-0 ${t.color}`}>
            {t.initials}
          </div>
          <div>
            <p className="font-semibold text-sm text-slate-900 leading-tight">{t.name}</p>
            <p className="text-[11px] text-slate-500 mt-0.5">{t.reviews}</p>
          </div>
        </div>
        <FcGoogle className="text-2xl shrink-0" />
      </div>

      {/* Stars & Time */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex text-[#FBBC04] text-sm">
          <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
        </div>
        <span className="text-[11px] text-slate-500 font-medium">{t.time}</span>
      </div>

      {/* Review Body */}
      <p className="text-slate-700 text-sm leading-relaxed line-clamp-4">
        {t.text}
      </p>
    </div>
  );

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white border-y border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Google Style Header */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900 mb-5">
            TRUSTED BY THOUSANDS
          </h2>
          
          {/* Aggregate Rating Badge */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 bg-slate-50 border border-slate-200 rounded-2xl px-6 py-4 shadow-sm">
            <div className="flex items-center gap-3">
              <FcGoogle className="text-3xl sm:text-4xl" />
              <div className="text-left">
                <p className="text-sm sm:text-base font-bold text-slate-900">Google Rating</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-base sm:text-lg font-black text-slate-900">4.9</span>
                  <div className="flex text-[#FBBC04] text-sm sm:text-base">
                    <MdStar /><MdStar /><MdStar /><MdStar /><MdStar />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="hidden sm:block w-px h-10 bg-slate-300" />
            
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm font-semibold text-slate-800">Based on 10,000+ reviews</p>
              <div className="flex items-center justify-center sm:justify-start gap-1 mt-1">
                <MdVerified className="text-blue-500 text-sm" />
                <span className="text-[11px] sm:text-xs text-slate-500">Verified Investors</span>
              </div>
            </div>
          </div>
        </div>

        {/* Carousel container */}
        <div className="relative">
          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute -left-2 sm:left-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-slate-50 transition-all text-slate-600"
            aria-label="Previous"
          >
            <FiChevronLeft className="text-lg sm:text-xl" />
          </button>
          
          <button
            onClick={next}
            className="absolute -right-2 sm:right-0 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-11 sm:h-11 bg-white border border-slate-200 rounded-full flex items-center justify-center shadow-md hover:shadow-lg hover:bg-slate-50 transition-all text-slate-600"
            aria-label="Next"
          >
            <FiChevronRight className="text-lg sm:text-xl" />
          </button>

          {/* Desktop: 3 cards */}
          <div className="hidden md:grid grid-cols-3 gap-5 lg:gap-6 px-12 lg:px-14">
            {getVisibleCards().map((t, i) => renderCard(t, i))}
          </div>

          {/* Mobile: 1 card */}
          <div className="md:hidden px-8">
            {renderCard(testimonials[current], current)}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current ? 'bg-orange-500 w-6' : 'bg-slate-200 hover:bg-slate-300 w-2.5'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
}
