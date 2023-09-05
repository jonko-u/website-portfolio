import React from 'react'
import { Cursor, useTypewriter} from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/dist/client/link';
import { PageInfo } from '@/typing';
import { urlFor } from '@/sanity';

type Props = {
  pageInfo: PageInfo;
}

export default function Hero({pageInfo}: Props) {
  
  let text = '';
  if (pageInfo) {
    text = `Hi, It's ${pageInfo.name}`;
  } else {
    text = "Hi, It's Loading";
  }

  
  
    const [typeweiterText,count] = useTypewriter({
    
      words: [`${text}`, "Guy-who-loves-coffe.tsx","<ButLoves CodingMore/>",],
      loop: true,
      delaySpeed: 2000,
    });
   
  
    return (
  
      <div className='h-screen snap-x snap-mandatory flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
          <BackgroundCircles></BackgroundCircles>
          <img  className='relative rounded-full h-[200px] w-[200px] sm:h-[300px] sm:w-[300px] md:h-[300px] lg:h-[300px] lg:w-[300px] md:w-[300px] mx-auto object-cover -translate-y-[35px] sm:-translate-y-[80px]' src={urlFor(pageInfo?.heroImage).url()} alt="image" />
          <div className='z-10'>
            <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
              {pageInfo?.role}
            </h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
            <div className='h-[150px] w-[300px] lg:h-[50px] lg:w-full md:h-[70px] md:w-full'>
              <span className=''>
              {typeweiterText}
              </span>
              <Cursor cursorColor='#F7AB0A'></Cursor>
            </div>
            </h1>
            <div className='pt-5'>
              <Link href='#about'>
                <button className='heroButton'>About</button>
              </Link>
              <Link href='#experience'>
                <button className='heroButton'>Experience</button>
              </Link>
              <Link href='#skills'>
                <button className='heroButton'>Skills</button>
              </Link>
              <Link href='#projects'>
                <button className='heroButton'>Projects</button>
              </Link>
              
            </div>
          </div>
      </div>)
  }