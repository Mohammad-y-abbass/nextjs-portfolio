'use client';

import React, { useRef } from 'react';
import SectionHeading from './SectionHeading';
import { motion } from 'framer-motion';
import SubmitBtn from './SubmitBtn';
import toast, { Toaster } from 'react-hot-toast';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current && serviceId && templateId && publicKey) {
      emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
        (result) => {
          toast.success('Email sent successfully!');
        },
        (error) => {
          toast.error('Failed to send email. Please try again.');
        }
      );
    }
  };

  return (
    <motion.section
      id='contact'
      className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className='text-gray-700 -mt-6 dark:text-white/80'>
        Please contact me directly at{' '}
        <a className='underline' href='mailto:mhmd.y.abbass@gmail.com'>
          mhmd.y.abbass@gmail.com{' '}
        </a>
        or through this form.
      </p>

      <form
        className='mt-10 flex flex-col dark:text-black'
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 mb-3 transition-all dark:outline-none'
          name='senderName'
          type='text'
          required
          maxLength={500}
          placeholder='Your name'
        />
        <input
          className='h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='senderEmail'
          type='email'
          required
          maxLength={500}
          placeholder='Your email'
        />
        <textarea
          className='h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none'
          name='message'
          placeholder='Your message'
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
      <Toaster />
    </motion.section>
  );
}
