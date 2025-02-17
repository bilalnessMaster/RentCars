
import Tag from '@/components/Tag'
import { CalendarDays, Headset, ShipWheel } from 'lucide-react'
import React from 'react'
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const services = [
  {
    id: 1 , 
    icon :<CalendarDays /> , 
    title : "Flexibilité de location à court terme" , 
    description : 'Louez une voiture pour une journée ou plus.'
  },
  {
    id: 2 , 
    icon : <Headset /> , 
    title : "Assistance routière 24/7 incluse" , 
    description : 'Nous sommes là pour vous aider à tout moment.'
  },
  {
    id: 3 , 
    icon : <ShipWheel /> , 
    title : "Options de véhicules variées disponibles" , 
    description : 'Choisissez parmi des voitures économiques, de luxe, et plus.'
  }
]
const Services = () => {
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

    className='container py-24'>
     <div className=' flex flex-col justify-center items-center gap-16'>
     <div className='max-w-sm gap-6  flex flex-col justify-center items-center'>
      
      <Tag title='Service' />
    
      <div className='space-y-1'>
      <h1 className='font-outfit font-bold text-2xl text-center'>
      Découvrez nos services de location de voitures
      </h1>
      <p className='text-center font-geist text-sm lg:text-lg font-medium text-black/55'>
      Nous offrons une large gamme de véhicules adaptés à tous vos besoins. Profitez de nos tarifs compétitifs et d'un service client exceptionnel.
      </p>
      </div>
    </div>
    <div className='grid md:grid-cols-3 gap-4 w-full'>
        {
          services.map(({id ,description , title ,icon})=>(
            <div key={id} className='px-5 py-4 border  rounded border-[#F2F2F2] bg-[#F5F5F5]  space-y-8'>
                <span className='inline-flex size-12 bg-[#D9D9D9]/75 border rounded-full items-center justify-center border-[#D9D9D9]'>
                  {icon}
                </span>
                <div className='space-y-2'>
                  <h1 className='font-outfit font-semibold text-2xl max-w-72'>
                    {title}
                  </h1>
                  <p className='font-geist text-black/75'> 
                    {description}
                  </p>
                </div>
            </div>
          ))
        }
    </div>
     </div>
    </motion.section>
  )
}

export default Services