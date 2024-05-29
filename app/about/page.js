import React from 'react'
import Link from 'next/link'
import {BsArrowUpShort} from 'react-icons/bs'
import Footer from '../components/Footer'
import Image from 'next/image'
import img from '../../public/taskmaster/1.png'


function page() {
  return (
    <div className='p-2'>
        <nav className='max-w-[1400px] w-full mx-auto px-6 py-16'>
          <Link href="/" className='w-fit h-fit'>
            <BsArrowUpShort className='bg-[#f4f4f4] hover:bg-[#e7e7e7] transition-all w-16 h-[6.5rem] py-6.5 px-4  flex items-center justify-center rounded-full -rotate-90 scale-[0.8] xl:scale-100'/>
          </Link>
        </nav>

        <section className='flex flex-col max-w-[1400px] w-full mx-auto px-4 gap-10 text-gray-800'>
            <h1 className='xl:text-[38px] text-[22px] w-full leading-[150%] tracking-tight font-medium'>Hello, I&apos;m Kartik Mistry, Frontend Designer & Developer from Mumbai, India🌲. Currently pursing my Bachelor&apos;s Degree in Computer Science. Always curious about human interactions, AR/VR, micro-animations, and crafting clean, captivating interfaces. So I am always spending my time building things that would elevate human experience around digital products.</h1>

            <h1 className='xl:text-[38px] text-[22px] w-full leading-[150%] tracking-tight font-medium'>In the ever-evolving world of technology, I thrive on learning and growing. I am constantly seeking opportunities to broaden my skill set and embrace new technologies to stay ahead of the game.</h1>

            <h1 className='xl:text-[38px] text-[22px] w-full leading-[150%] tracking-tight font-medium'>
              Also in my spare time I like to chill with my friends, play games and watch UFC
            </h1>
        </section>

        <section className='max-w-[1300px] mx-auto w-full px-8 my-10'>
          <div className='grid xl:grid-cols-4 md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4'>
            <video 
            autoPlay loop muted 
            src='https://videos.pexels.com/video-files/20683835/20683835-sd_540_960_30fps.mp4' className='w-full max-w-[420px] h-[350px] rounded-2xl bg-red-100 xl:row-span-2 row-span-1 xl:mt-[50%] object-cover'></video>

            <Image alt='photo' src={img}/>

            <video autoPlay loop muted 
            src='https://videos.pexels.com/video-files/20315562/20315562-sd_640_360_30fps.mp4' className='w-full max-w-[420px] h-[350px] rounded-2xl bg-red-100 xl:row-span-2 row-span-1 xl:mt-[50%] object-cover'></video>

            <Image alt='photo' src={img} className='w-full max-w-[420px] h-[350px] rounded-2xl bg-red-200 row-span-1'/>

            <Image alt='photo' src={img} className='w-full max-w-[420px] h-[350px] rounded-2xl bg-red-200 row-span-1'/>

            <Image alt='photo' src={img} className='w-full max-w-[420px] h-[350px] rounded-2xl bg-red-200 row-span-1'/>
          </div>
        </section>

        <section className='max-w-[1400px] mx-auto flex flex-row justify-start items-start gap-10 xl:gap-40 p-4'>
          <div className='flex flex-col'>
            <h1 className='text-gray-500 text-xl xl:text-2xl mb-3'>languages & frameworks</h1>
            <ul className='flex flex-col gap-1'>
              <li className='md:text-xl text-lg text-gray-900'>Javascript</li>
              <li className='md:text-xl text-lg text-gray-900'>CSS/HTML</li>
              <li className='md:text-xl text-lg text-gray-900'>SwiftUI</li>
              <li className='md:text-xl text-lg text-gray-900'>Python</li>
              <li className='md:text-xl text-lg text-gray-900'>SQL</li>
              <li className='md:text-xl text-lg text-gray-900'>NextJS</li>
              <li className='md:text-xl text-lg text-gray-900'>ReactJS</li>
              <li className='md:text-xl text-lg text-gray-900'>TailwindCSS</li>
            </ul>
          </div>

          <div className='flex flex-col'>
            <h1 className='text-gray-500 text-xl xl:text-2xl  mb-3'>skills & tools</h1>
            <ul className='flex flex-col gap-1'>
              <li className='md:text-xl text-lg text-gray-900'>Visual Studio Code</li>
              <li className='md:text-xl text-lg text-gray-900'>Xcode</li>
              <li className='md:text-xl text-lg text-gray-900'>Git</li>
              <li className='md:text-xl text-lg text-gray-900'>Firebase</li>
              <li className='md:text-xl text-lg text-gray-900'>RapidAPI</li>
              <li className='md:text-xl text-lg text-gray-900'>Figma</li>
            </ul>
          </div>
        </section>

        <Footer/>
    </div>
  )
}

export default page