'use client'
import Link from "next/link";
import { useRef, useState } from "react";
import ImageShowCase from "./components/ImageShowCase";
import Footer from "./components/Footer";
import Image from "next/image";
import img from '../public/kartik.jpg'
import img2 from '../public/kartik2.jpeg'
import { useScroll, useTransform } from "framer-motion";
import { Container } from "postcss";
import { motion } from "framer-motion";

import p1 from '../public/taskmaster/1.png'
import p2 from '../public/taskmaster/2.png'
import p3 from '../public/taskmaster/3.png'
import p4 from '../public/taskmaster/4.png'
import p5 from '../public/taskmaster/5.png'
import p6 from '../public/taskmaster/6.png'

import b1 from '../public/blogpolisher/1.png'
import b2 from '../public/blogpolisher/2.png'
import b3 from '../public/blogpolisher/3.png'
import b4 from '../public/blogpolisher/4.png'
import b5 from '../public/blogpolisher/5.png'

export default function Home() {

  const Phrase = ({src, text}) => {
    return(
      <div className="flex gap-5 items-center md:h-[18vh] h-[120px]">
        <p className="md:text-[9vh] text-4xl tracking-tight mx-2">{text}</p>
        <span className="relative md:h-[10vw] h-[100px] aspect-[3/2] rounded-full overflow-hidden">
          <Image style={{objectFit: 'cover'}} src={src} alt="image" fill/>
        </span>
      </div>
    )
  }

  const Slider = ({src, left, text, progress, direction}) => {

    const dir = direction == "left" ? -1 : 1;
    const x = useTransform(progress, [0, 1], [-450 * dir,450 * dir])

    return (
      <motion.div className="relative flex whitespace-nowrap" style={{left, x}}>
        <Phrase src={src} text={text}/>
        <Phrase src={src} text={text}/>
        <Phrase src={src} text={text}/>
        <Phrase src={src} text={text}/>
      </motion.div>
    )
  }

  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'end start']
  })
  return (
    <div className="flex flex-col"> 
    <nav className="h-[8vh] flex items-center justify-end px-8">
      <Link href="/about" className="text-xl hover:text-red-500 hover:underline underline-offset-2 transition-all">Info</Link>
    </nav>

      {/* <section className="w-full max-w-[1100px] mx-auto flex flex-col items-start justify-center h-[70vh]">
        <h1 className="text-[60px] tracking-tight leading-[120%] text-black">kartik mistry,</h1>
        <h1 className="text-[60px] tracking-tight leading-[120%] text-black">crafting softwares & interfaces</h1>
        <Link href="/about" className="text-2xl text-red-500 underline underline-offset-8 decoration-[1px] mt-2">about me & things I do</Link>
        <h1 className="text-[60px] tracking-tight flex text-center">Frontend {" "}

        <span className="bg-[rgb(243,243,243)] w-[138px] h-[96px] flex items-center justify-center rounded-full mx-2 scale-[0.9] hover:scale-[0.8]">?!?</span>
        
         Developer</h1>
      </section> */}

      <main className="overflow-hidden">
        <div className="h-[76vh]"/>
        <div ref={container}>
          <Slider src={img} left="-110%" text="Kartik Mistry" progress={scrollYProgress} direction="left"/>
          <Slider src={img2} left="-35%" text="Frontend Developer" progress={scrollYProgress} direction="right"/>
          <Slider src={img} left="-10%" text="Crafting softwares & interfaces" progress={scrollYProgress} direction="left"/>
        </div>
        <div className="h-[30vh]"/>
      </main>

      {/* <section className="w-full max-w-[1100px] mx-auto p-4 my-10">
        <span className="flex flex-col gap-4 my-10">
          <p className="md:text-2xl text-lg">2023-2024 / Side Projects</p>
          <h1 className="md:text-5xl text-2xl font-medium tracking-tight leading-[180%] text-gray-800">Interactive prototypes using ReactJS, SwiftUI, CSS/HTML</h1>
        </span>
        <div className="w-full h-full bg-black p-[10%] gap-20 rounded-3xl grid md:grid-cols-2">
          <video loop autoPlay muted
          src="https://videos.pexels.com/video-files/15921892/15921892-sd_640_360_25fps.mp4"
          className="w-[380px] h-[380px] rounded-2xl object-cover"/>

          <video loop autoPlay muted
          src="https://videos.pexels.com/video-files/15921892/15921892-sd_640_360_25fps.mp4"
          className="w-[350px] h-[420px] rounded-2xl object-cover"/>

          <video loop autoPlay muted
          src="https://videos.pexels.com/video-files/15921892/15921892-sd_640_360_25fps.mp4"
          className="w-[350px] h-[420px] rounded-2xl object-cover"/>

          <video loop autoPlay muted
          src="https://videos.pexels.com/video-files/15921892/15921892-sd_640_360_25fps.mp4"
          className="w-[380px] h-[380px] rounded-2xl object-cover"/>

          <video loop autoPlay muted
          src="https://videos.pexels.com/video-files/15921892/15921892-sd_640_360_25fps.mp4"
          className="w-[380px] h-[380px] rounded-2xl object-cover"/>

          <video loop autoPlay muted
          src="https://videos.pexels.com/video-files/15921892/15921892-sd_640_360_25fps.mp4"
          className="w-[350px] h-[420px] rounded-2xl object-cover"/>
        </div> 

      </section> */}

      <section className="max-w-[1400px] w-full mx-auto mt-10 flex md:flex-row flex-col justify-between items-start">
        <div className="flex flex-row justify-between items-start p-4 sticky top-0 bg-[#ffffffda] backdrop-blur-sm">
          <span className="flex flex-col gap-4 py-8">
            <p className="xl:text-[21px] text-lg">2023</p>
            <h1 className="xl:text-2xl font-medium">TaskMaster</h1>
            <h1 className="xl:text-[18px] text-md text-gray-600">TaskMaster is a cutting-edge task management application designed to streamline your workflow and enhance productivity.</h1>
            <a href="#" className="bg-[#f4f4f4] h-fit w-fit px-3 py-2 rounded-3xl xl:text-[16px] text-sm hover:scale-[0.9] transition-all">Website</a>
          </span>

        </div>
        <div className="flex flex-col mt-6 gap-4 max-w-[700px]">
          <ImageShowCase link={p1}/>
          <ImageShowCase link={p2}/>
          <ImageShowCase link={p3}/>
          <ImageShowCase link={p4}/>
          <ImageShowCase link={p5}/>
          <ImageShowCase link={p6}/>
        </div>
      </section>

      <section className="max-w-[1400px] w-full mx-auto mt-10 flex md:flex-row flex-col justify-between items-start">
        <div className="flex flex-row justify-between items-start p-4 sticky top-0 bg-[#ffffffda] backdrop-blur-sm">
          <span className="flex flex-col gap-4 py-8">
            <p className="xl:text-[21px] text-lg">2024</p>
            <h1 className="xl:text-2xl font-medium">Blog Polisher</h1>
            <h1 className="xl:text-[18px] text-md text-gray-600">Blog Polisher is an AI blog enhancement application where user can polish the content according to their requirements.</h1>
            <a href="#" className="bg-[#f4f4f4] h-fit w-fit px-4 py-2.5 rounded-3xl xl:text-[21px] text-sm hover:scale-[0.9] transition-all">Website</a>
          </span>

        </div>
        <div className="flex flex-col mt-6 gap-4 max-w-[700px]">
          <ImageShowCase link={b1}/>
          <ImageShowCase link={b2}/>
          <ImageShowCase link={b3}/>
          <ImageShowCase link={b4}/>
          <ImageShowCase link={b5}/>
        </div>

      </section>

      <Footer/>
    </div>
  );
}
