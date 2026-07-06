'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CtaBanner from '@/components/CtaBanner';
import Process from '@/components/Process';
import Showcase from '@/components/Showcase';
import WhyUs from '@/components/WhyUs';
import Testimonial from '@/components/Testimonial';
import Faq from '@/components/Faq';
import LeadForm from '@/components/LeadForm';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';
import Modal from '@/components/Modal';
import FloatingCta from '@/components/FloatingCta';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <>
      <Header openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
        <Services />
        <CtaBanner openModal={openModal} />
        <Process />
        <Showcase openModal={openModal} />
        <WhyUs openModal={openModal} />
        <Testimonial />
        <Faq openModal={openModal} />
        <LeadForm />
        <FinalCta openModal={openModal} />
      </main>
      <Footer />
      <Modal isOpen={modalOpen} onClose={closeModal} />
      <FloatingCta openModal={openModal} />
    </>
  );
}
