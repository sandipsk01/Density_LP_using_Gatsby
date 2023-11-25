import * as React from "react"
import Navbar from "../components/Navbar"
import '../styles/global.css'
import Hero from "../components/Hero"
import AnalysisFrame from "../components/AnalysisFrame"
import Vector from "../components/Vector"
import CompareBox from "../components/CompareBox"
import ExploreChart from "../components/ExploreChart"
import Footer from "../components/Footer"
export default function Home() {
  return (
    <section>
      <Navbar/>
      <Hero />
      <AnalysisFrame />
      <Vector />
      <CompareBox />
      <ExploreChart />
      <Footer />
  </section>
  )
  
}
