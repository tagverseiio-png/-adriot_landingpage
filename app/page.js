'use client';

import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CtaBanner from '@/components/CtaBanner';
import Showcase from '@/components/Showcase';
import WhyUs from '@/components/WhyUs';
import Testimonial from '@/components/Testimonial';

import LeadForm from '@/components/LeadForm';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import FloatingCta from '@/components/FloatingCta';

export default function Home() {
  const router = useRouter();
  const openModal = () => router.push('/thankyou');

  return (
    <>
      <Header openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
        <CtaBanner openModal={openModal} />
        <Showcase openModal={openModal} />
        <WhyUs openModal={openModal} />
        <Testimonial />
        <LeadForm />
        <FinalCta openModal={openModal} />
      </main>
      <Footer />
      <FloatingCta openModal={openModal} />
    </>
  );
}
