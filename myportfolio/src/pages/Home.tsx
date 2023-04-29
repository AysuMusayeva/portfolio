import React from 'react'
import AboutBreeder from '../components/AboutBreeder'
import FaqQuestion from '../components/FaqQuestion'
import Footer from '../components/Footer'
import HumanShampoo from '../components/HumanShampoo'
import LatestNews from '../components/LatestNews'
import MeettheAnimal from '../components/MeettheAnimal'
import ServiceBreed from '../components/ServiceBreed'
import Testimonials from '../components/Testimonials'


const Home = () => {
  return (
<>

<HumanShampoo />
<AboutBreeder      />
<ServiceBreed />
<FaqQuestion       />
<MeettheAnimal     />
<Testimonials />
<LatestNews />
<Footer />
</>
  )
}

export default Home