export default function TransparentPricing() {
  const cards = [
    { amount: '₹0', label: 'Account Opening Charges', bg: 'bg-orange-50' },
    { amount: '₹0', label: 'Advisory Fee for First Year', bg: 'bg-green-50' },
    { amount: '₹0', label: 'Commission on Mutual Fund SIPs', bg: 'bg-blue-50' },
    { amount: '₹0', label: 'Demat Account Maintenance', bg: 'bg-purple-50' },
  ];

  return (
    <section className="py-14 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-800">
            <span className="text-orange-500">✦</span>{' '}
            TRANSPARENT PRICING. NO HIDDEN CHARGES.{' '}
            <span className="text-orange-500">✦</span>
          </h2>
          <div className="w-16 h-1 brand-gradient-bg rounded-full mx-auto mt-3" />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className={`${card.bg} border border-slate-100 rounded-2xl p-4 sm:p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300`}
            >
              <p className="font-heading text-3xl sm:text-4xl md:text-5xl font-black text-slate-800">{card.amount}</p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-1.5 sm:mt-2">{card.label}</p>
            </div>
          ))}
        </div>

        {/* Link */}
        <div className="text-center mt-6 sm:mt-8">
          <a
            href="#"
            className="text-orange-500 text-sm font-semibold hover:text-orange-600 transition-colors"
          >
            VIEW PRICING →
          </a>
        </div>
      </div>
    </section>
  );
}
