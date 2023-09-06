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
    className=' snap-x snap-mandatory flex flex-col relative h-screen text-center md:text-left md:pl-10 md:flex-row justify-evenly items-center'>
        <div className='flex flex-row absolute top-20 items-center justify-center'>
            <h3 className='uppercase tracking-[20px] text-gray-500 text-2xl space-y-20'>About me</h3>
            <img src='/assets/future.png' className='w-[20px] h-[20px]' alt='About'/>
        </div>
    <div className='flex flex-col w-full h-full items-center sm:flex sm:flex-row sm:w-full sm:h-full md:w-full lg:w-full lg:h-full sm:px-5'>
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
        className='relative mt-[120px] sm:mt-[0]  w-[160px] h-[160px] rounded-full object-cover sm:rounded-lg sm:w-[200px] sm:h-[300px] md:rounded-lg md:w-[300px] md:h-[400px] lg:w-[350px] lg:h-[450px]'/>
        <div className='sm:h-[300px] md:h-[300px] flex flex-col justify-start sm:mt-0 sm:w-full sm:px-5 md:w-full md:pt-0 lg:h-[550px] lg:w-full lg:pt-[150px] md:px-10'>
            <h4 className='text-3xl  mb-7 font-semibold'>
                Here is a {" "}
                <span className='underline decoration-[#F7AB0A]/50'>little</span>{" "}
                background.
            </h4>
            <div className='px-3 w-full h-[320px]  overflow-y-scroll scrollbar scrollbar-corner-yellow-400 lg:h-full lg:scrollbar-none  relative sm:h-[250px] md:h-[300px]'>
                <p className='text-justify'>
                {pageInfo?.backgroundInformation}
                </p>
            </div>
        </div>
    </div>
        
    </motion.div>
  )
}

export default About;