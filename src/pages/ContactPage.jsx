import React, { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your name and email address.");
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <main className="flex-grow w-full animate-fadeIn">
      {/* Hero Section Banner with Background Image */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-24 pb-16 bg-surface-container-low overflow-hidden border-b hairline-border mb-12">
        <div
          className="absolute inset-0 parallax opacity-40 mix-blend-multiply bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_contact.png')" }}
        />
        <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full text-center fade-in-up">
          <span className="inline-block px-4 py-2 bg-[#D4C9B0] text-primary-container font-label-caps text-label-caps mb-6 tracking-widest uppercase shadow-sm">
            Personalized Service
          </span>
          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-primary-container mb-4">
            Get in Touch
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
            We invite you to connect with us. Whether you have an inquiry about a piece, require assistance with an order, or simply wish to say hello.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Details Container */}
      <div className="pb-section-padding px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter lg:gap-x-gutter lg:gap-y-0 relative">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 lg:col-start-2 fade-in-up">
            <h2 className="font-headline-md text-headline-md text-primary mb-6">
              Concierge Services
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-md leading-relaxed">
              Our client care team is available to assist with bespoke orders, styling consultations, and delivery tracking.
            </p>

            <div className="space-y-8">
              {/* Email */}
              <div className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors duration-300 mt-1">
                  mail
                </span>
                <div>
                  <h3 className="font-label-caps text-label-caps text-outline mb-1 uppercase tracking-widest">Email</h3>
                  <a
                    className="font-body-lg text-body-lg text-primary hover:text-tertiary-container transition-colors duration-300"
                    href="mailto:Thesaikastore@gmail.com"
                  >
                    Thesaikastore@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors duration-300 mt-1">
                  phone
                </span>
                <div>
                  <h3 className="font-label-caps text-label-caps text-outline mb-1 uppercase tracking-widest">Phone</h3>
                  <a
                    className="font-body-lg text-body-lg text-primary hover:text-tertiary-container transition-colors duration-300"
                    href="tel:8208220160"
                  >
                    8208220160
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-4 group">
                <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors duration-300 mt-1">
                  camera_alt
                </span>
                <div>
                  <h3 className="font-label-caps text-label-caps text-outline mb-1 uppercase tracking-widest">Instagram</h3>
                  <a
                    className="font-body-lg text-body-lg text-primary hover:text-tertiary-container transition-colors duration-300"
                    href="https://instagram.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    @The_saika_store
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-5 lg:col-start-8 mt-12 lg:mt-0 fade-in-up delay-100">
            <div className="bg-[#D4C9B0]/20 p-8 md:p-12 relative border border-[#D4C9B0]">
              <h2 className="font-headline-sm text-headline-sm text-primary mb-8">Send a Message</h2>

              {submitted ? (
                <div className="py-12 text-center text-primary animate-fadeIn">
                  <span className="material-symbols-outlined text-5xl mb-4 text-tertiary-container">check_circle</span>
                  <h3 className="font-headline-sm text-xl mb-2">Message Sent</h3>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    Thank you for reaching out. The Saika Store team will respond to your inquiry shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Name */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder=" "
                      className="peer w-full bg-transparent border-0 border-b border-[#D4C9B0] focus:border-primary-container focus:ring-0 px-0 py-2 font-body-md text-primary transition-colors duration-300 focus:outline-none"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-0 -top-4 font-label-caps text-label-caps text-outline transition-all duration-300 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-outline-variant peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-caps peer-focus:text-primary-container uppercase tracking-widest"
                    >
                      Name
                    </label>
                  </div>

                  {/* Email */}
                  <div className="relative group">
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder=" "
                      className="peer w-full bg-transparent border-0 border-b border-[#D4C9B0] focus:border-primary-container focus:ring-0 px-0 py-2 font-body-md text-primary transition-colors duration-300 focus:outline-none"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-4 font-label-caps text-label-caps text-outline transition-all duration-300 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-outline-variant peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-caps peer-focus:text-primary-container uppercase tracking-widest"
                    >
                      Email Address
                    </label>
                  </div>

                  {/* Subject */}
                  <div className="relative group">
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder=" "
                      className="peer w-full bg-transparent border-0 border-b border-[#D4C9B0] focus:border-primary-container focus:ring-0 px-0 py-2 font-body-md text-primary transition-colors duration-300 focus:outline-none"
                    />
                    <label
                      htmlFor="subject"
                      className="absolute left-0 -top-4 font-label-caps text-label-caps text-outline transition-all duration-300 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-outline-variant peer-placeholder-shown:top-2 peer-focus:-top-4 peer-focus:text-label-caps peer-focus:text-primary-container uppercase tracking-widest"
                    >
                      Subject Inquiry
                    </label>
                  </div>

                  {/* Message */}
                  <div className="relative group pt-4">
                    <textarea
                      id="message"
                      rows="4"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder=" "
                      className="peer w-full bg-transparent border-0 border-b border-[#D4C9B0] focus:border-primary-container focus:ring-0 px-0 py-2 font-body-md text-primary transition-colors duration-300 resize-none focus:outline-none"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="absolute left-0 top-0 font-label-caps text-label-caps text-outline transition-all duration-300 peer-placeholder-shown:text-body-md peer-placeholder-shown:text-outline-variant peer-placeholder-shown:top-6 peer-focus:top-0 peer-focus:text-label-caps peer-focus:text-primary-container uppercase tracking-widest"
                    >
                      Your Message
                    </label>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-primary-container text-on-primary w-full py-4 font-label-caps text-label-caps hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-2 group tracking-widest uppercase shadow-ambient"
                    >
                      SUBMIT INQUIRY
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform duration-300">
                        arrow_forward
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Decorative Image Banner Below */}
        <div className="mt-section-padding fade-in-up delay-200 relative h-64 md:h-96 w-full max-w-5xl mx-auto overflow-hidden shadow-ambient">
          <div
            className="bg-cover bg-center w-full h-full transform hover:scale-105 transition-transform duration-1000 ease-out"
            style={{ backgroundImage: "url('/images/contact_banner.png')" }}
          />
          <div className="absolute inset-0 bg-primary-container/20 flex items-center justify-center">
            <span className="font-display-lg text-3xl md:text-5xl text-on-primary tracking-widest uppercase opacity-90">
              The Little Things
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
