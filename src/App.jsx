import style from './style'
import { Navbar, Hero, Billing, CardDeal, Business, Clients, CTA, Stats, Footer, Testimonials, } from './components/index'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${style.paddingX} ${style.flexCenter}`}>
        <div className={`${style.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <Hero />
      <Billing />
      <CardDeal />
      <Business />
      <Clients />
      <Stats />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App