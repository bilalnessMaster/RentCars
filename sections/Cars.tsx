import Tag from "@/components/Tag";
import honda from "@/public/carsModel/honda.png";
import mercedes from "@/public/carsModel/mercides.png";
import mg from "@/public/carsModel/mg.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const cars = [
  {
    id: 1,
    name: "hondai",
    img: honda,
  },
  {
    id: 2,
    name: "mG 5",
    img: mg,
  },
  {
    id: 3,
    name: "mercedes",
    img: mercedes,
  },
  {
    id: 4,
    name: "hondai",
    img: honda,
  },
  {
    id: 5,
    name: "mG 5",
    img: mg,
  },
  {
    id: 6,
    name: "mercedes",
    img: mercedes,
  },
];
const Cars = () => {
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

    className="container py-5 flex flex-col justify-center items-center space-y-5">
      <Tag title="Collection" />
      <div className="w-full">
        <Carousel className="space-y-4">
            <div className="flex-col flex md:flex-row gap-2 justify-between">
                <h1 className='font-outfit font-semibold text-2xl '>Découvrez notre large gamme de véhicules </h1>
                <div className="flex items-center justify-between md:justify-center gap-2">
                <CarouselPrevious className="relative  "/>
                <CarouselNext className="relative "/>
                </div>
            </div>
          <CarouselContent >
          {cars.map(({ id, img, name }) => (
              <CarouselItem key={id} className="md:basis-1/2 lg:basis-1/3 space-y-1">
                <div
                  key={id}
                  className="px-5 py-4 border h-72 rounded border-[#F2F2F2] bg-[#F5F5F5]  space-y-8 flex items-center justify-center"
                >
                    <Image src={img} width={300}  alt={name}/>
                </div>
                <div>
                    <h1 className="uppercase  font-medium font-outfit">
                        {name}
                    </h1>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
        </Carousel>
      </div>
    </motion.section>
  );
};

export default Cars;
