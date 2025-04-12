import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-3xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px] rounded' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
        <p className='font-semibold text-2xl'>Your Trusted Online Doctor Appointment Booking Platform</p>
          <p>At HelthCare, we believe in making healthcare accessible, convenient, and seamless. Our platform connects patients with top-rated doctors across various specialties, ensuring quality medical consultations from the comfort of your home.</p>
          <p>With a user-friendly interface and secure online payment options, booking an appointment has never been easier. Whether you need a General Physician, Dermatologist, or Neurologist, we’ve got you covered.</p>
          <ul className='list-none space-y-3'>
           <li className='flex items-center gap-2'> ✅ <span>Seamless online doctor appointment booking</span></li>
           <li className='flex items-center gap-2'> ✅ <span>Wide range of specialists, including General Physicians, Dermatologists, and Neurologists</span></li>
           <li className='flex items-center gap-2'> ✅ <span>Secure and easy online payment options</span></li>
           <li className='flex items-center gap-2'> ✅ <span>Accessible healthcare from the comfort of your home</span></li>
           <li className='flex items-center gap-2'> ✅ <span>Trusted by thousands of patients</span></li>
          </ul>
         <p>Experience healthcare at your fingertips with [Your Website Name]—because your health matters.</p>
        </div>
      </div>

      <div className='flex flex-col md:flex-row gap-6 justify-center items-center mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer bg-[#E2E5FF]'>
          <b>Our Mission</b>
          <p>We aim to revolutionize healthcare accessibility by providing a seamless, user-friendly platform for booking doctor appointments. Our goal is to enhance patient convenience, improve doctor-patient interactions, and streamline the healthcare experience.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer bg-[#E2E5FF]'>
          <b>Our Planning</b>
          <p>To be a leading digital healthcare platform that bridges the gap between patients and healthcare providers, ensuring efficient, secure, and hassle-free appointment management for a healthier future.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-blue-500 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer bg-[#E2E5FF]'>
          <b>Our Vision</b>
          <p >We are committed to continuous innovation, integrating advanced technology, and expanding our services to make healthcare appointments more efficient, accessible, and reliable for everyone.</p>
        </div>
      </div>

    </div>
  )
}

export default About
