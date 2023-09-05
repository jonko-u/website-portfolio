"use client";
import React, { PureComponent } from 'react'
import {motion} from "framer-motion"
type Props = {}

export default class BackgroundCircles extends PureComponent<Props> {
  render() {
    return (
      <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
            borderRadius: ["20%","20%","50%","80%","20%"]
        }}
        transition={{
            duration: 2.5,
        }}
        className='relative flex justify-center items-center'>
        <div className='absolute border border-[#333333] rounded-full sm:h-[200px] sm:w-[200px] h-[50px] w-[50px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full sm:h-[300px] sm:w-[300px] h-[100px] w-[100px] mt-52 animate-ping' />
        <div className='absolute border border-[#333333] rounded-full sm:h-[500px] sm:w-[500px] h-[200px] w-[200px] mt-52 animate-ping' />
        <div className='absolute border border-[#F7AB0A] opacity-20 rounded-full sm:h-[650px] sm:w-[650px] h-[400px] w-[400px] mt-52  animate-pulse' />
        <div className='absolute border border-[#333333] rounded-full sm:h-[800px] sm:w-[800px] h-[600px] w-[600px] mt-52' />
        <div/>
      </motion.div>
    )
  }
}