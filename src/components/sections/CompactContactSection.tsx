import React, { useState } from 'react';
import { company } from '../../lib/content';
import { motion } from 'framer-motion';
import { LeafletMap } from '../ui/LeafletMap';

export function CompactContactSection(): JSX.Element {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // Format the message for WhatsApp
    const formatMessageForWhatsApp = () => {
      const messageLines = [
        `*New Inquiry from BoldPath HR Website*`,
        ``,
        `*Name:* ${formData.name}`,
        `*Email:* ${formData.email}`,
        `*Phone:* ${formData.phone || 'Not provided'}`,
        `*Company:* ${formData.company || 'Not provided'}`,
        `*Service:* ${formData.service || 'Not specified'}`,
        ``,
        `*Message:*`,
        `${formData.message}`,
        ``,
        `*Sent:* ${new Date().toLocaleString()}`
      ];
      
      return encodeURIComponent(messageLines.join('\n'));
    };

    // Create WhatsApp link with pre-filled message
    const phoneNumber = '+254795959416'; // Your WhatsApp number
    const message = formatMessageForWhatsApp();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    try {
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, '_blank');
      
      // Show success message
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      setIsSubmitting(false);
      setSubmitStatus('error');
      
      // Reset error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-8 md:py-12 bg-surface">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 md:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal text-primary mb-3 md:mb-4 tracking-wider">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <p className="text-base text-gray-600 max-w-xl mx-auto font-normal">
            Ready to transform your organization? Let's start a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Contact Information - Compact version */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full"
          >
            <div className="bg-white rounded-xl p-5 md:p-6 shadow-md h-full">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-0.5">Location</h4>
                    <p className="text-gray-600 font-normal text-xs md:text-sm">{company.contact.location}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-0.5">Phone</h4>
                    <p className="text-gray-600 font-normal text-xs md:text-sm">+254 {company.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-accent/10 rounded-lg flex items-center justify-center text-accent flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-0.5">Email</h4>
                    <p className="text-gray-600 font-normal text-xs md:text-sm">{company.contact.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-green-500/10 rounded-lg flex items-center justify-center text-green-500 flex-shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-0.5">WhatsApp</h4>
                    <p className="text-gray-600 font-normal text-xs md:text-sm">Chat with us directly</p>
                  </div>
                </div>
              </div>

              {/* Compact Map - Smaller height */}
              <div className="mt-5">
                <div className="h-36 rounded-lg overflow-hidden">
                  <LeafletMap 
                    location={company.contact.location} 
                    coordinates={{ lat: -1.286389, lng: 36.817223 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form - Compact version */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className="w-full"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-5 md:p-6 shadow-md h-full flex flex-col">
              <h3 className="text-lg md:text-xl font-semibold text-primary mb-4">Send Us a Message</h3>
              
              {submitStatus === 'success' && (
                <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg text-green-700 font-normal text-xs md:text-sm">
                  Message sent! We'll be in touch soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg text-red-700 font-normal text-xs md:text-sm">
                  Error sending message. Please try again.
                </div>
              )}
              
              <div className="space-y-3 flex-grow">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-normal text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all font-normal text-xs md:text-sm"
                      placeholder="Your name"
                      required
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-normal text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all font-normal text-xs md:text-sm"
                      placeholder="your@email.com"
                      required
                      aria-required="true"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="phone" className="block text-xs font-normal text-gray-700 mb-1">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all font-normal text-xs md:text-sm"
                      placeholder="+254 000 000000"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-xs font-normal text-gray-700 mb-1">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all font-normal text-xs md:text-sm"
                      placeholder="Company"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-xs font-normal text-gray-700 mb-1">
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all font-normal text-xs md:text-sm"
                  >
                    <option value="">Select service</option>
                    {company.services.slice(0, 3).map((service, index) => (
                      <option key={index} value={service.title}>{service.title}</option>
                    ))}
                  </select>
                </div>

                <div className="flex-grow flex flex-col">
                  <label htmlFor="message" className="block text-xs font-normal text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-accent focus:ring-1 focus:ring-accent/20 outline-none transition-all font-normal text-xs md:text-sm resize-none flex-grow"
                    placeholder="Your message..."
                    required
                    aria-required="true"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-white px-4 py-2.5 rounded-lg font-display font-semibold hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-3.5 w-3.5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg className="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Send via WhatsApp
                    </span>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}