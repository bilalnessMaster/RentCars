import Link from "next/link"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
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

    className="container bg-[#2A2A2A] py-12 mt-12 rounded-md mb-2 space-y-4">
        <div className="text-center  text-2xl text-neutral-200">
            <h1 className="font-bold font-out fit ">LOUER</h1>
        </div>
        <div className="flex items-center justify-center gap-3 font-geist text-neutral-200">
            <Link href={'/'} >Contactez-nous</Link>
            <Link href={'/'} >À propos</Link>
            <Link href={'/'} >Nos services</Link>
            <Link href={'/'} >Assistance client</Link>
            <Link href={'/'} >Blog Voyage</Link>
        </div>

    </motion.section>
  )
}

export default Footer