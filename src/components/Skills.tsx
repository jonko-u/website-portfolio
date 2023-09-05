"use client";
import { motion } from 'framer-motion';
import React from 'react';
import {Skill as SkillType} from "@/typing";

import Skill from './Skill';

import useSkills from '@/hooks/useSkills';

interface SkillsProps{
  object: ObjectSkills;
}
interface ObjectSkills{
  skills: SkillType[];
}

function Skills() {
  const {data} = useSkills();
  if(!data){return <div>...</div>}
  const skills: Skill[] = data?.skills;
  
  return (
    <motion.div 
        initial={{
            opacity:0,
        }}
        whileInView={{
            opacity:1,
        }}
        transition={{duration:2}}
        className='flex flex-col relative h-screen text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <div className='pl-5 absolute top-[80px] flex w-full h-[80px] items-center justify-center text-center'>
              <h3
              className=' flex text-center uppercase tracking-[20px] text-gray-500 text-2xl '
              >SKILLS</h3>
            </div>
            <h3 className='absolute top-36 uppercase trackin-[3px] text-gray-500 text-sm'>Hover over a skill for a currency profiency</h3>
            <div className= 'relative top-16 xl:top-20 md:top-14 sm:top-10 mt-0 grid grid-cols-4 mx-3 h-[500px] xl:grid-cols-9 md:grid-cols-6 sm:grid-cols-6 xl:gap-5 md:gap-2 sm:gap-1 overflow-y-scroll'>
              {skills.slice(0, skills.length/2).map((skill: Skill) => (
                <Skill key={skill._id} skill={skill}/>
              ))}

                
              {skills.slice((skills.length/2),skills.length).map((skill: Skill) => (
                <Skill key={skill._id} skill={skill} directionleft/>
              ))}
            </div>
    </motion.div>
  )
};

export default Skills;