import { useState } from 'react';
import Layout from '../layouts/Layout';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';
import { SITE } from '../data/siteData';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', course: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <Layout>
      <section className="bg-gradient-to-br from-primary to-accent py-16">
        <div className="container-custom text-center">
          <h1 className="font-heading text-4xl lg:text-5xl font-bold text-white mb-3">Get in Touch</h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">Have questions? Our team is here to help you 24x7</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container-custom grid lg:grid-cols-3 gap-10">
          {/* Contact info */}
          <div className="space-y-6">
            <div className="glass-card p-6">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center text-white mb-4"><FaPhone /></div>
              <h3 className="font-heading font-bold text-gray-900 mb-2">Call Us</h3>
              <a href={`tel:${SITE.phone}`} className="text-primary font-semibold hover:underline block">{SITE.phone}</a>
              <a href={`tel:${SITE.phone2}`} className="text-primary font-semibold hover:underline block">{SITE.phone2}</a>
              <a href={`tel:${SITE.phone3}`} className="text-primary font-semibold hover:underline block">{SITE.phone3}</a>
              <a href={`tel:${SITE.phone4}`} className="text-primary font-semibold hover:underline block">{SITE.phone4}</a>
            </div>

            <div className="glass-card p-6">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center text-white mb-4"><FaEnvelope /></div>
              <h3 className="font-heading font-bold text-gray-900 mb-2">Email Us</h3>
              <a href={`mailto:${SITE.email}`} className="text-primary font-semibold hover:underline">{SITE.email}</a>
            </div>

            <div className="glass-card p-6">
              <div className="w-12 h-12 gradient-primary rounded-2xl flex items-center justify-center text-white mb-4"><FaMapMarkerAlt /></div>
              <h3 className="font-heading font-bold text-gray-900 mb-2">Visit Us</h3>
              <p className="text-gray-600 text-sm font-semibold">Head Office:</p>
              <p className="text-gray-600 text-sm mb-2">{SITE.address}</p>
              <p className="text-gray-600 text-sm font-semibold">Corporate Office:</p>
              <p className="text-gray-600 text-sm">{SITE.address2}</p>
            </div>

            <div className="glass-card p-6 bg-green-50 border border-green-200">
              <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center text-white mb-4"><FaWhatsapp /></div>
              <h3 className="font-heading font-bold text-gray-900 mb-2">WhatsApp Support</h3>
              <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-green-600 font-semibold hover:underline">Chat Now →</a>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="glass-card p-8">
              <h2 className="font-heading text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
              {submitted && (
                <div className="bg-success/10 text-success px-4 py-3 rounded-xl mb-6 font-medium text-sm">
                  ✅ Thank you! We'll get back to you within 24 hours.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="Your Name *" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                  <input type="email" placeholder="Email Address *" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <input type="tel" placeholder="Phone Number *" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all" />
                  <select value={formData.course} onChange={e => setFormData({...formData, course: e.target.value})}
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all">
                    <option value="">Select Course</option>
                    <option value="jaiib">JAIIB</option>
                    <option value="caiib">CAIIB</option>
                    <option value="bank-po">Bank Coaching (PO / IBPS)</option>
                    <option value="sbi-clerk">SBI Clerk</option>
                    <option value="rbi">RBI Grade B</option>
                    <option value="ssc">SSC CGL / CHSL</option>
                    <option value="promotions">Internal Promotions</option>
                    <option value="dra">DRA Certification</option>
                    <option value="dfm">DFM (Diploma in Finance Management)</option>
                    <option value="digital-banking">Digital Banking Certificate</option>
                    <option value="aml-kyc">AML & KYC</option>
                    <option value="treasury">Treasury Professional</option>
                    <option value="it-security">IT Security Certificate</option>
                    <option value="forex">Forex / International Trade Finance</option>
                    <option value="cyber">Cyber Crimes & Fraud Management</option>
                    <option value="ccp">Certificate Course in Prevention (CCP)</option>
                    <option value="bank-interview">Bank Interview Training</option>
                    <option value="other">Other Certifications</option>
                  </select>
                </div>
                <textarea placeholder="Your Message" rows="5" value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none" />
                <button type="submit" className="btn-primary flex items-center gap-2 w-full justify-center text-base py-3.5 rounded-xl">
                  <FaPaperPlane size={14} /> Send Message
                </button>
              </form>
            </div>

            {/* Map placeholder */}
            <div className="mt-8 h-80 bg-gray-100 rounded-3xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.6630087456!2d77.21836637549805!3d28.634305075674896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd371d97c89f%3A0xfc0d3a0b6b4c4b3e!2sConnaught%20Place%2C%20New%20Delhi!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                title="IBS Bank Career Location"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
