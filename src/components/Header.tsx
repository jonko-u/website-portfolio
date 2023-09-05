"use client";
import FetchSocials from "@/server-components/FetchSocials";
import { motion } from "framer-motion";
import Link from 'next/dist/client/link';
import { SocialIcon } from "react-social-icons";


export default function Header() {
 
  return (
    <header className="sticky top-[15px] flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <FetchSocials/>
        <motion.div className="flex flex-row items-center text-gray-300 cursor-pointer"
        initial = {
          {x: 500,
          opacity: 0,
          scale: 0.5}
        }
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5,

        }}  
        >
          
          <Link href='#contactme'>
            <SocialIcon 
              fgColor="gray"
              bgColor="transparent"
              network="email"
              href="#contactme"
            />
          </Link>          
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get in touch</p>
        </motion.div>
      
    </header>
  )
}