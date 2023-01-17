import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Link from 'next/link'
import { HomeIcon } from '@heroicons/react/24/solid'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=' bg-slate-750  text-slate-800 h-screen snap-y snap-mandatory overflow-scroll z-0 scrollbar 
    scrollbar-track-slate-800 scrollbar-thumb-[#03A9F4]' >
      {/* <div className=' bg-slate-750 text-slate-800 h-screen' > */}
      {/* bg-[rgb(36,36,36)] h-screen  in the class above*/}
      <Head>
        <title>Create Next App</title>
      </Head>

      <Header />
      <section id="hero" className='snap-start '>
        <Hero />
      </section>

      <section id="about" className='snap-center '>
        <About />
      </section>

      {/* Experience  */}
      <section id="experience" className='snap-center '>
        <Experience />
      </section>

      {/* Projects */}
      <section id="projects" className='snap-start '>
        <Projects />
      </section>

      {/* Contact me */}
      <section id="contact" className='snap-start '>
        <Contact />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className="flex items-center justify-center">
            <HomeIcon className='text-[#03A9F4] h-7 w-7' />
          </div>
        </footer>
      </Link>

    </div>
  )
}
