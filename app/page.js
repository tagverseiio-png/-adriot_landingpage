'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CtaBanner from '@/components/CtaBanner';
import Showcase from '@/components/Showcase';
import WhyUs from '@/components/WhyUs';
import Testimonial from '@/components/Testimonial';

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
        <CtaBanner openModal={openModal} />
        <Showcase openModal={openModal} />
        <WhyUs openModal={openModal} />
        <Testimonial />
        <LeadForm />
        <FinalCta openModal={openModal} />
      </main>
      <Footer />
      <Modal isOpen={modalOpen} onClose={closeModal} />
      <FloatingCta openModal={openModal} />
    </>
  );
}
