import Header from "@/components/Header"
import LandingPage from "@/components/landingpage"
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Resume from '@/components/Resume'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const Home = () => {
  return (
    <>
      <Header />
      <LandingPage />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Resume />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
