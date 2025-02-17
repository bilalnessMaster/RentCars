import Tag from '@/components/Tag'
import Link from 'next/link'
import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const CallToAction = () => {
  const ref = useRef(null);
  const InView = useInView(ref , {once : true});
  return (
    <motion.section 
    ref={ref}
      initial={{ opacity: 0, y: 50,}}
      animate={
        InView
          ? { opacity: 1, y: 0, }
          : { opacity: 0, y: 50, }
      }
      transition={{
        duration : .7
      }}
   
    
    className='container py-12 '>
    <div className='flex flex-col items-center justify-center gap-6'>
        <Tag title='Réserver'/>
        <h1 className='font-outfit font-semibold text-center text-2xl max-w-72'>
        Réservez votre voiture dès maintenant
        </h1>
        <Link href={'/'}  className='bg-black  w-28 flex items-center  justify-center h-10 rounded-md text-white font-semibold'>Réserver</Link>
    </div>

    </motion.section>
  )
}

export default CallToAction