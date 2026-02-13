
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
            <div className="text-center mb-20">
                <h2 className="text-7xl font-black text-red-600 uppercase tracking-tighter mb-4">Contact Us</h2>
                <div className="w-48 h-1 bg-blue-900 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Info Column */}
                <div className="lg:col-span-4 space-y-10">
                    <h3 className="text-8xl font-black text-blue-900 leading-tight tracking-tighter">GET IN TOUCH</h3>
                    
                    <div className="space-y-6">
                        <div className="bg-red-500 text-white p-8 rounded-sm shadow-xl relative overflow-hidden group">
                            <MapPin className="mb-4" size={32} />
                            <h4 className="text-xl font-black mb-2 uppercase">Official Location</h4>
                            <p className="text-white/80 font-medium mb-4">Rwanda St, Addis Ababa, Around Wolo Sefer</p>
                            <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                                Direction <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="bg-red-500 text-white p-8 rounded-sm shadow-xl relative overflow-hidden group">
                            <Clock className="mb-4" size={32} />
                            <h4 className="text-xl font-black mb-2 uppercase">Working Hours</h4>
                            <p className="text-white/80 font-medium mb-1">Mon - Fri : 3am - 5pm</p>
                            <p className="text-white/80 font-medium mb-4">Sat : 3am - 12pm</p>
                            <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                                Learn more <ArrowRight size={16} />
                            </a>
                        </div>

                        <div className="bg-red-500 text-white p-8 rounded-sm shadow-xl relative overflow-hidden group">
                            <Phone className="mb-4" size={32} />
                            <h4 className="text-xl font-black mb-2 uppercase">Call</h4>
                            <p className="text-white/80 font-medium mb-1">+251-911-201-001</p>
                            <p className="text-white/80 font-medium mb-4">gizeplc@gmail.com</p>
                            <a href="#" className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest hover:translate-x-2 transition-transform">
                                Direction <ArrowRight size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Form Column */}
                <div className="lg:col-span-8 bg-red-600 rounded-lg p-12 lg:p-20 shadow-2xl relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-white p-10 rounded shadow-2xl">
                            <form className="space-y-6">
                                <div>
                                    <input type="text" placeholder="Your Name" className="w-full p-4 bg-gray-50 border border-gray-100 rounded focus:ring-2 focus:ring-red-500 outline-none font-bold" />
                                </div>
                                <div>
                                    <input type="email" placeholder="Your Email" className="w-full p-4 bg-gray-50 border border-gray-100 rounded focus:ring-2 focus:ring-red-500 outline-none font-bold" />
                                </div>
                                <div>
                                    <textarea rows={6} placeholder="Message" className="w-full p-4 bg-gray-50 border border-gray-100 rounded focus:ring-2 focus:ring-red-500 outline-none font-bold resize-none"></textarea>
                                </div>
                                <button className="bg-blue-900 text-white px-8 py-4 font-black uppercase tracking-widest rounded hover:bg-[#0B1238] transition-all w-full lg:w-auto">
                                    Send Message
                                </button>
                            </form>
                        </div>
                        
                        <div className="text-white">
                            <span className="text-xl font-bold block mb-4">Have any questions?</span>
                            <h3 className="text-6xl lg:text-8xl font-black uppercase tracking-tighter leading-none">Contact Us</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
