import Hero from '../components/Hero';
import { MapPin, Clock, Phone, ArrowRight } from 'lucide-react';

function Contact() {
  return (
    <div>
      <Hero
        title="Contact us"
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <div className="text-center mb-16">
            <h2 className="text-7xl font-black text-red-600 uppercase tracking-tighter mb-4">Contact Us</h2>
            <div className="w-48 h-1 bg-blue-900 mx-auto"></div>
          </div>

          {/* GET IN TOUCH Section - Heading on left, cards on right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 items-center">
            {/* Left: Heading */}
            <div className="lg:col-span-3">
              <h3 className="text-5xl lg:text-6xl font-black text-blue-900 uppercase tracking-tighter leading-tight">
                GET IN<br />TOUCH
              </h3>
            </div>

            {/* Right: Three cards in a row */}
            <div className="lg:col-span-9 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Official Location */}
              <div className="bg-[#FF4A4A] text-white p-6 rounded-sm shadow-2xl flex flex-col items-start group hover:-translate-y-2 transition-transform duration-300">
                <MapPin className="mb-4" size={32} strokeWidth={1.5} />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Official Location</h4>
                <p className="text-white/90 text-sm mb-6 font-medium leading-relaxed">Rwanda St, Addis Ababa, Around Wolo Sefer</p>
                <a href="#" className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
                  Direction <ArrowRight size={14} />
                </a>
              </div>

              {/* Working Hours */}
              <div className="bg-[#FF4A4A] text-white p-6 rounded-sm shadow-2xl flex flex-col items-start group hover:-translate-y-2 transition-transform duration-300">
                <Clock className="mb-4" size={32} strokeWidth={1.5} />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Working Hours</h4>
                <p className="text-white/90 text-sm mb-1 font-medium">Mon - Fri : 3am - 5pm</p>
                <p className="text-white/90 text-sm mb-6 font-medium">Sat : 3am - 12pm</p>
                <a href="#" className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
                  Learn more <ArrowRight size={14} />
                </a>
              </div>

              {/* Call */}
              <div className="bg-[#FF4A4A] text-white p-6 rounded-sm shadow-2xl flex flex-col items-start group hover:-translate-y-2 transition-transform duration-300">
                <Phone className="mb-4" size={32} strokeWidth={1.5} />
                <h4 className="text-xl font-bold mb-2 uppercase tracking-tight">Call</h4>
                <p className="text-white/90 text-sm mb-1 font-medium">+251-911-201-001</p>
                <p className="text-white/90 text-sm mb-6 font-medium">gizeplc@gmail.com</p>
                <a href="#" className="mt-auto flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] hover:opacity-80 transition-opacity">
                  Call Now <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </div>

          {/* Form & Info Section */}
          <div className="bg-[#FF4A4A] rounded-sm p-8 lg:p-12 shadow-2xl relative max-w-5xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* White Form Card */}
              <div className="bg-white p-8 lg:p-10 shadow-2xl">
                <form className="space-y-5">
                  <div>
                    <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 border-b-2 border-gray-200 focus:border-red-500 outline-none font-medium placeholder-gray-400 text-gray-700 transition-colors" />
                  </div>
                  <div>
                    <input type="email" placeholder="Your Email" className="w-full p-4 bg-gray-50 border-b-2 border-gray-200 focus:border-red-500 outline-none font-medium placeholder-gray-400 text-gray-700 transition-colors" />
                  </div>
                  <div>
                    <textarea rows={4} placeholder="Message" className="w-full p-4 bg-gray-50 border-b-2 border-gray-200 focus:border-red-500 outline-none font-medium placeholder-gray-400 text-gray-700 resize-none transition-colors"></textarea>
                  </div>
                  <button className="bg-[#0B1238] text-white px-8 py-4 font-bold rounded hover:bg-blue-900 transition-all w-full lg:w-auto shadow-lg">
                    Send Message
                  </button>
                </form>
              </div>

              {/* Right Side Text */}
              <div className="text-white flex flex-col justify-center">
                <span className="text-xl font-medium mb-2 opacity-90">Have any questions?</span>
                <h3 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none">Contact Us</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;