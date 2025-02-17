"use client";
import Tag from "@/components/Tag";
import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

import "leaflet/dist/leaflet.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import Image from "next/image";
import map from '@/public/map.png'

const Contact = () => {
  const ref = useRef(null);
  const InView = useInView(ref, { once: true });
  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={InView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.7,
      }}
      className="container py-5"
    >
      <div className="flex flex-col items-center justify-center gap-12">
        <Tag title="Contact" />
        <div className="space-y-1 max-w-sm">
          <h1 className="font-outfit font-semibold text-2xl text-center">
            Nous Contacter
          </h1>
          <p className="text-center font-geist text-sm lg:text-lg font-medium text-black/55">
            Pour toute question, n'hésitez pas à nous contacter via les
            informations ci-dessous.
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between w-full gap-5">
          <div className="space-y-6">
            <h1 className="flex justify-start gap-2">
              <span>
                <Mail strokeWidth={2} size={25} />
              </span>
              <span className="inline-flex flex-col">
                <span className="font-bold font-outfit ">Email</span>
                <span className="font-geist">bonjour@example.com</span>
              </span>
            </h1>
            <h1 className="flex justify-start gap-2">
              <span>
                <Phone strokeWidth={2} size={25} />
              </span>
              <span className="inline-flex flex-col">
                <span className="font-bold font-outfit ">Téléphone</span>
                <span className="font-geist">+212 05-454-884</span>
              </span>
            </h1>
            <h1 className="flex justify-start gap-2">
              <span>
                <MapPin strokeWidth={2} size={25} />
              </span>
              <span className="inline-flex flex-col">
                <span className="font-bold font-outfit ">Bureau</span>
                <span className="font-geist">
                  Casablanca , Sidi Marrouf lot 124 bloc 12
                </span>
              </span>
            </h1>
          </div>

          <div className="md:w-2/3 overflow-hidden rounded-md ">
      
            <Image src={map} width={1120} height={637} alt="asdasd"/>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
