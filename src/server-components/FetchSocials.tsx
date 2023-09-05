'use client'
import { useEffect, useState } from "react";
import { SocialIcon } from "react-social-icons";
import { Social } from "@/typing";
import { motion } from "framer-motion";
import useSocials from "@/hooks/useSocials";

interface SocialsProps{
  socials: Social[]
}

export default function FetchSocials() {
  // const [socials, setSocials] = useState<Social[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: {socials = []} = {}, error, isLoading} = useSocials();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching social</div>;
  }

  return (
    <motion.div 
      initial = {
        {x: -500,
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
      className="flex flex-row items-center">      
        {/* Social Icons https://jaketrent.github.io/react-social-icons/*/}               
      {/* Social Icons */}
      {Array.isArray(socials) ? (
        socials.map((social: Social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))
      ) : (
        <div>Data is not in the expected format.</div>)}
      </motion.div>    
  );
}