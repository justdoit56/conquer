import React from "react";
import Nav from "@/components/conquer/Nav";
import Hero from "@/components/conquer/Hero";
import Features from "@/components/conquer/Features";
import Curriculum from "@/components/conquer/Curriculum";
import Pricing from "@/components/conquer/Pricing";
import Videos from "@/components/conquer/Videos";
import EnrollmentForm from "@/components/conquer/EnrollmentForm";
import Testimonials from "@/components/conquer/Testimonials";
import FAQ from "@/components/conquer/FAQ";
import Footer from "@/components/conquer/Footer";
import WhatsAppSupport from "@/components/conquer/WhatsAppSupport";

export default function Home() {
  return (
    <div className="bg-[#F8FAFC]">
      <Nav />
      <Hero />
      <Features />
      <Curriculum />
      <Pricing />
      <Videos />
      <EnrollmentForm />
      <Testimonials />
      <FAQ />
      <Footer />
      <WhatsAppSupport />
    </div>
  );
}
