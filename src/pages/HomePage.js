import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Header from '../components/header/Header'
import Services from '../components/services/Services'
import SliderHome from '../components/slider/SliderHome'
import Numbar from '../components/number/Numbar'
import Projccthome from '../components/projecthome/Projccthome'
import Comments from '../components/comments/Comments'
import Plans from '../components/Plans/Plans'
import Intoour from '../components/intoour/Intoour'
import Fqa from '../components/fqa/Fqa'
import Footer from '../components/footer/Footer'
import OurSpecialities from '../components/ourSpecialities/OurSpecialities'
function HomePage() {
  return (
    <>
      <Navbar />
      <Header />
      <Services />
      <SliderHome />
      <Numbar />
      <Projccthome />
      <Comments />
      <Plans />
      <OurSpecialities />
      <Intoour />
      <Fqa />
      <Footer />
    </>
  )
}

export default HomePage