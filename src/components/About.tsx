"use client";
import React from 'react'
import {motion} from 'framer-motion'
import { PageInfo } from '@/typing'
import { urlFor } from '@/sanity';
type Props = {
    pageInfo: PageInfo | undefined;
}

const About = ({pageInfo}: Props) => {

    

  return (
    <motion.div 
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{duration:2}}
    className=' snap-x snap-mandatory flex flex-col relative h-screen text-center md:text-left md:pl-10 md:flex-row max-w-7xl justify-evenly mx-auto items-center'>
        <div className='flex flex-row absolute top-20 items-center justify-center'>
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl space-y-20'>About me</h3>
            <img src='/assets/future.png' className='w-[20px] h-[20px]' alt='About'/>
        </div>
        <motion.img
        initial={{
            x: -200,
            opacity: 0,
        }} 
        transition={{duration: 1.2,}}
        whileInView={{ opacity: 1,
            x:-10}}
        viewport={{once:true}}
        src={urlFor(pageInfo?.profilePic).url()} alt="" 
        className='relative mt-[10px] md:pl-0 md:mb-0 flex-shink-0 w-[160px] h-[160px] rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px] lg:w-[400px] lg:h-[500px]'/>
        <div className='mt-[-50px] md:mt-32 md:px-10'>
            <h4 className='text-3xl mt-[-40px] mb-7 font-semibold'>
                Here is a {" "}
                <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
                background.
            </h4>
            <div className='w-full px-5 h-[320px]  overflow-y-scroll scrollbar scrollbar-corner-yellow-400 lg:h-full  relative sm:h-full md:h-[500px]'>
                <p className='text-justify'>
                {pageInfo?.backgroundInformation}
                </p>
            </div>
        </div>
    </motion.div>
  )
}

export default About;