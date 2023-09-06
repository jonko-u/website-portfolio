"use client";
import { motion } from 'framer-motion'
import React from 'react'
import ExperienceCard from './ExperienceCard'
import { Experience } from '@/typing'
import useExperiences from '@/hooks/useExperiences'

type Props = {
  experiences: Experience[];
}


const WorkExperience = () => {
  const {data} = useExperiences();
  if(!data){
    return <div>Loading</div>
  }
  const experiences: Experience[] = data?.experiences;
  console.log(experiences)
    return (
      <motion.div 
          initial={{
              opacity:0,
          }}
          whileInView={{
              opacity:1,
          }}
          transition={{duration:2}}
          className='flex flex-col relative h-screen space-y-0 text-center md:text-left md:pl-10 md:flex-row  lg:w-full justify-evenly mx-auto items-center'>
          <div className='pl-5 absolute top-[80px] flex w-full h-[80px] items-center justify-center text-center'>
            <h3
            className=' flex text-center uppercase tracking-[20px]  text-2xl '
            >Experience</h3>
          </div>
          <div className='w-full flex  overflow-x-scroll  snap-x snap-mandatory scrollbar scrollbar-corner-yellow-400 mb-[20px]
      scrollbar-thumb-[#F7AB0A]'>
              {/* ExperienceCard */}
              {experiences.map((experience: Experience) => (
                <ExperienceCard
                  key={experience._id}
                  experience={experience}
                />
              ))}
          </div>
      </motion.div>
  )  
  }

export default WorkExperience;