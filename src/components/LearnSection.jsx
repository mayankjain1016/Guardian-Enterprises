import { FiArrowRight, FiFileText, FiBookOpen, FiBarChart2 } from 'react-icons/fi';
import { FaLightbulb } from 'react-icons/fa';

const items = [
  {
    icon: FiFileText,
    title: 'Market News',
    desc: 'Stay informed with expert market insights, financial trends and investment themes',
  },
  {
    icon: FiBookOpen,
    title: 'Knowledge Center',
    desc: 'Comprehensive hub of educational resources for confident investing',
  },
  {
    icon: FaLightbulb,
    title: 'Financial Guide',
    desc: 'Learn smarter ways to grow wealth with personalized investment courses',
  },
];

export default function LearnSection() {
  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-slate-700 font-heading font-extrabold text-xl sm:text-2xl md:text-3xl mb-1">
              LEARN TO GROW WITH
            </p>
            <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl brand-gradient-text mb-4 sm:mb-5">
              GUARDIAN
            </h2>
            <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8 max-w-md">
              Master the art of investing. Secure your financial future with
              Guardian's learning resources.
            </p>

            <div className="space-y-3">
              {items.map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center justify-between bg-white border border-slate-200 rounded-xl p-4 sm:p-5 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div className="text-xl sm:text-2xl shrink-0 text-orange-500"><item.icon /></div>
                    <div className="min-w-0">
                      <p className="font-heading font-bold text-sm sm:text-base text-slate-800 group-hover:text-orange-600 transition-colors">
                        {item.title}
                      </p>
                      <p className="text-slate-500 text-xs sm:text-sm mt-1">{item.desc}</p>
                    </div>
                  </div>
                  <FiArrowRight className="text-orange-500 text-lg sm:text-xl shrink-0 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Right — Decorative */}
          <div className="flex justify-center">
            <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 bg-slate-50 rounded-3xl flex items-center justify-center relative">
              <div className="text-5xl sm:text-6xl md:text-7xl text-orange-400"><FiBarChart2 /></div>

              {/* Floating badges — safely within bounds */}
              <div
                className="absolute top-2 right-6 bg-white rounded-lg px-2.5 py-1 shadow-md border border-slate-100 text-[10px] sm:text-xs font-semibold text-orange-500 animate-bounce"
                style={{ animationDuration: '3s' }}
              >
                NAV ↑
              </div>
              <div
                className="absolute bottom-10 left-4 bg-white rounded-lg px-2.5 py-1 shadow-md border border-slate-100 text-[10px] sm:text-xs font-semibold text-green-600 animate-bounce"
                style={{ animationDuration: '4s' }}
              >
                SIP Active
              </div>
              <div
                className="absolute top-16 right-2 bg-white rounded-lg px-2.5 py-1 shadow-md border border-slate-100 text-[10px] sm:text-xs font-semibold text-blue-600 animate-bounce"
                style={{ animationDuration: '3.5s' }}
              >
                XIRR 22%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
