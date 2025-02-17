'use client'
import CallToAction from "@/sections/CallToAction";
import Cars from "@/sections/Cars";
import Contact from "@/sections/Contact";
import Footer from "@/sections/Footer";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import Logoticker from "@/sections/Logoticker";
import Services from "@/sections/Services";


export default function Home() {
  return (
    <>
    <Header />
    <Hero />
    <Logoticker />
    <Services />
    <Cars />
    <CallToAction />
    <Contact />
    <Footer />
    </>
  );
}
