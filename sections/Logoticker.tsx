"use client";
import amg from "@/public/carsLogo/amg.png";
import kenworth from "@/public/carsLogo/kenworth.png";
import mustand from "@/public/carsLogo/mustand.png";
import nissan from "@/public/carsLogo/nissan.png";
import renault from "@/public/carsLogo/renault.png";
import tesla from "@/public/carsLogo/tesla.png";
import toyota from "@/public/carsLogo/toyota.png";
import Image from "next/image";
import { Fragment } from "react";
import Tag from "@/components/Tag";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const carsLogos = [
  {
    id: 1,
    img: amg,
  },
  {
    id: 2,
    img: kenworth,
  },
  {
    id: 3,
    img: mustand,
  },
  {
    id: 4,
    img: nissan,
  },
  {
    id: 5,
    img: renault,
  },
  {
    id: 6,
    img: tesla,
  },
  {
    id: 7,
    img: toyota,
  },
];

const Logoticker = () => {
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
    className="py-5 container flex flex-col items-center gap-5 justify-center ">
      
            <Tag title={'Marks'} />
      
         <div className=" flex justify-center w-1/2  overflow-hidden [mask-image:linear-gradient(to_right,_transparent,_black_10%,_black_90%,_transparent)]">
        <motion.div
          animate={{
            x: "-50%",
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          }}
          className="flex items-center  w-full pr-8 flex-auto  gap-8  "
        >
          {Array.from({ length: 2 }, (_, index) => (
            <Fragment key={index}>
              {carsLogos.map(({ id, img }) => (
                <Image
                    key={id+1}
                    src={img}
                    width={65}
                    height={48}
                  alt={`logo number${id}`}
                />
              ))}
            </Fragment>
          ))}
        </motion.div>
        </div>
    </motion.section>
  );
};

export default Logoticker;
