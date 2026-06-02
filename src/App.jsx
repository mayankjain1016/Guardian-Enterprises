import Navbar from './components/Navbar'
import HeroBanner from './components/HeroBanner'
import TransparentPricing from './components/TransparentPricing'
import SeamlessInvesting from './components/SeamlessInvesting'
import PickInvestment from './components/PickInvestment'
import LegacyStats from './components/LegacyStats'
import BuiltForInvestors from './components/BuiltForInvestors'
import LearnSection from './components/LearnSection'
import Calculators from './components/Calculators'
import TopFunds from './components/TopFunds'
import Testimonials from './components/Testimonials'
import AppDownload from './components/AppDownload'
import Footer from './components/Footer'

function App() {
  return (
    <div className="font-body">
      <Navbar />
      <main>
        <HeroBanner />
        <TransparentPricing />
        <SeamlessInvesting />
        <PickInvestment />
        <LegacyStats />
        <BuiltForInvestors />
        <LearnSection />
        <Calculators />
        <TopFunds />
        <Testimonials />
        <AppDownload />
      </main>
      <Footer />
    </div>
  )
}

export default App
