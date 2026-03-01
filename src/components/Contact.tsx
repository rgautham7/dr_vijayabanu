"use client";
import { useState } from 'react';
import Image from 'next/image';
import emailjs from '@emailjs/browser';
import { EMAILJS_CONFIG } from '../config/emailjs';

export default function Contact() {
  const contactDetails = [
    { label: 'Phone Number', value: '+91 97910 92232' },
    { label: 'City', value: 'Chennai, India' }
  ];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const validateField = (name: string, value: string) => {
    if (!value.trim()) {
      return `${name} is required`;
    }
    if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      return 'Please enter a valid email';
    }
    return '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: validateField(name, value)
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {
      firstName: validateField('firstName', formData.firstName),
      lastName: validateField('lastName', formData.lastName),
      email: validateField('email', formData.email),
      subject: validateField('subject', formData.subject),
      message: validateField('message', formData.message)
    };

    setErrors(newErrors);

    // Check if there are any errors
    if (Object.values(newErrors).some(error => error !== '')) {
      return;
    }

    try {
      setSubmitStatus('Sending message...');

      const templateParams = {
        to_email: 'abc@gmail.com',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setSubmitStatus('Message sent successfully!');
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });

      // Clear status after 5 seconds
      setTimeout(() => {
        setSubmitStatus('');
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="relative bg-white pt-24 pb-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-judson text-5xl text-[#3C1908] mb-4">
            CONTACT
          </h2>
          <p className="font-judson text-2xl text-[#3C1908]">
            How to reach me out!?
          </p>
        </div>

        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-16">
          <div className="space-y-8">
            <div className="space-y-4 mb-8">
              {contactDetails.map((detail, index) => (
                <div key={index}>
                  <p className="font-judson text-xl text-[#3C1908]">
                    {detail.label}: {detail.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative w-full h-[800px]">
              <Image
                src="/images/Gallery2.jpg"
                alt="Contact"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="pt-48">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="mb-6">
                <label className="block font-judson text-xl text-[#3C1908] mb-2">
                  Name
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      className="w-full p-3 bg-[#E5E5E5] font-judson"
                    />
                    {errors.firstName && (
                      <p className="text-red-400 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      className="w-full p-3 bg-[#E5E5E5] font-judson"
                    />
                    {errors.lastName && (
                      <p className="text-red-400 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-judson text-xl text-[#3C1908] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#E5E5E5] font-judson"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block font-judson text-xl text-[#3C1908] mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-3 bg-[#E5E5E5] font-judson"
                />
                {errors.subject && (
                  <p className="text-red-400 text-sm mt-1">{errors.subject}</p>
                )}
              </div>

              <div className="mb-8">
                <label className="block font-judson text-xl text-[#3C1908] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-3 bg-[#E5E5E5] font-judson resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-[#FBC8AB] text-[#3C1908] font-judson px-8 py-3 hover:bg-[#C85925] hover:text-white transition-colors duration-300"
              >
                SUBMIT
              </button>

              {submitStatus && (
                <p className={`text-center mt-4 ${
                  submitStatus.includes('Failed') 
                    ? 'text-red-500' 
                    : submitStatus.includes('Sending')
                      ? 'text-blue-500'
                      : 'text-green-600'
                }`}>
                  {submitStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}