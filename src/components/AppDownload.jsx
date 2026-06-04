import { FaApple, FaGooglePlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { staggerContainer, fadeInLeft, fadeInRight, hoverScale } from '../utils/animations';
import logo from '../Logo.jpeg';
import { IPhoneMockup } from 'react-device-mockup';
import screenshot from '../screenshot.png';

export default function AppDownload() {
  return (
    <motion.section 
      className="py-6 sm:py-16 md:py-20 brand-gradient-bg relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={staggerContainer}
    >
      {/* Subtle decorative circles */}
      <div className="absolute top-0 left-0 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-white/5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full bg-white/5 translate-x-1/3 translate-y-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left — Phone Mockup */}
          <motion.div variants={fadeInLeft} className="flex justify-center order-2 lg:order-1 relative">
            <IPhoneMockup screenWidth={250} hideStatusBar={true} hideNavBar={true}>
              <img
                src={screenshot}
                alt="Website Preview"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            </IPhoneMockup>
          </motion.div>

          {/* Right — CTA */}
          <motion.div variants={fadeInRight} className="text-center lg:text-left order-1 lg:order-2">
            <p className="text-orange-200 font-heading font-black text-2xl sm:text-3xl md:text-4xl mb-1">
              1 Lakh+
            </p>
            <p className="text-white font-heading font-black text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
              DOWNLOADS
            </p>
            <h2 className="text-white font-heading font-bold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-5">
              Enjoy ₹0 Account Opening
            </h2>
            <p className="text-white/80 text-xs sm:text-sm mb-5 sm:mb-6 max-w-md mx-auto lg:mx-0">
              Download the Guardian App and start investing in mutual funds with
              zero commission. Available on iOS and Android.
            </p>

            {/* Phone Input */}
            <div className="mb-5 sm:mb-6 max-w-md mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row">
                <input
                  type="tel"
                  placeholder="Enter your mobile number"
                  className="flex-1 px-4 py-2.5 sm:py-3 text-sm text-slate-700 placeholder-slate-400 focus:outline-none border border-white/20 rounded-lg sm:rounded-l-lg sm:rounded-r-none"
                />
                <button className="bg-white text-orange-500 px-5 sm:px-6 py-2.5 sm:py-3 font-semibold text-sm hover:bg-slate-50 transition-colors whitespace-nowrap mt-2 sm:mt-0 rounded-lg sm:rounded-l-none sm:rounded-r-lg">
                  Get Started →
                </button>
              </div>
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <motion.a
                variants={hoverScale}
                whileHover="hover"
                href="#"
                className="flex items-center gap-2 bg-black/80 hover:bg-black text-white rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 transition-colors"
              >
                <FaApple size={18} />
                <div className="text-left">
                  <p className="text-[8px] sm:text-[9px] text-slate-300">Download on the</p>
                  <p className="text-xs sm:text-sm font-semibold -mt-0.5">App Store</p>
                </div>
              </motion.a>
              <motion.a
                variants={hoverScale}
                whileHover="hover"
                href="#"
                className="flex items-center gap-2 bg-black/80 hover:bg-black text-white rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 transition-colors"
              >
                <FaGooglePlay size={16} />
                <div className="text-left">
                  <p className="text-[8px] sm:text-[9px] text-slate-300">Get it on</p>
                  <p className="text-xs sm:text-sm font-semibold -mt-0.5">Google Play</p>
                </div>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
