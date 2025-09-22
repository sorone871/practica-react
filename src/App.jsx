import { useState } from 'react'

import Header from './Components/Header/Header'
import Hero from './Pages/Hero/Hero'
import Section1 from './Pages/Section1/Section1'
import Section2 from './Pages/Section2/Section2'
import Footer from './Components/Footer/Footer'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Hero />
      <Section1 />
      <Section2 />
      <Footer />
      
      
    </>
  )
}

export default App
