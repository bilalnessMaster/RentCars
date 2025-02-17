import Image from "next/image";
import heroCar from "@/public/hero-car.jpg";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Hero = () => {
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
      className="container py-5"
    >
      <div className="relative md:h-[700px] h-[400px]">
        <div className="overflow-hidden rounded-md h-full">
          <Image
            src={heroCar}
            width={1929}
            height={1204}
            className="h-full w-full object-cover"
            alt=""
          />
        </div>
        <div className="bg-gradient-to-br from-black/85 rounded-md to-transparent z-10  absolute inset-0 md:px-24  flex items-center  ">
          <div className="max-w-lg space-y-2">
            <h1 className="text-3xl md:text-6xl text-center md:text-start text-white font-outfit leading-[3.4rem] font-semibold">
              Louez la voiture de vos rêves aujourd'hui
            </h1>
            <p className="font-geist text-white/75 text-center md:text-start">
              Bienvenue sur notre site de location de voitures. Découvrez nos
              offres exceptionnelles et trouvez le véhicule parfait pour votre
              prochain voyage.
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
