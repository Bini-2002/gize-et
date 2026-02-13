
import Hero from '../components/Hero';
import { Play, ChevronRight, Plus, ChevronLeft } from 'lucide-react';

function OceanShipping() {
  return (
    <div>
      <Hero 
        title="Ocean Shipping" 
        subtitle="Connecting Your Cargo to the World Safely"
        image="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200"
      />

      {/* Overview Section */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-16 items-center">
                  <div className="lg:w-1/2 relative">
                      <div className="absolute -top-10 -left-10 w-full h-full bg-red-600 -z-10"></div>
                      <img 
                        src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800" 
                        className="w-full h-[400px] object-cover shadow-2xl" 
                        alt="Ship overview" 
                      />
                  </div>
                  <div className="lg:w-1/2">
                      <span className="text-red-600 font-black text-4xl mb-6 block">Overview</span>
                      <h2 className="text-5xl font-black text-blue-900 mb-8 uppercase tracking-tighter">Global Shipping Network</h2>
                      <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                        Our extensive global network connects major ports across the world, enabling seamless movement of cargo between key international markets. The network is designed to support a wide range of shipping needs, ensuring flexible schedules, reliable transit times, and efficient route planning for every shipment.
                      </p>
                      <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                        With a strong focus on safety, transparency, and operational excellence, we provide end-to-end ocean shipping solutions tailored to your business requirements. Backed by experienced professionals and trusted global partners, you can count on us to manage your cargo safely, on time, and with complete peace of mind.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Video/Promo Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-black text-blue-900 mb-4 uppercase">Ocean Shipping</h2>
            <p className="text-gray-500 mb-12">To view the video, please enable cookies first. If the video does not play, try refreshing your browser and then play it again.</p>
            
            <div className="relative group overflow-hidden rounded-xl shadow-2xl h-[500px]">
                <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700" alt="Video cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all border-2 border-white/30"
                      aria-label="Play video"
                    >
                        <Play size={40} fill="currentColor" />
                    </button>
                </div>
            </div>
        </div>
      </section>

      {/* Container Shipping Section */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col lg:flex-row gap-16">
                  <div className="lg:w-1/2 grid grid-cols-2 gap-4">
                      <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600" className="col-span-2 h-80 w-full object-cover rounded shadow" alt="Port" />
                      <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400" className="h-40 w-full object-cover rounded shadow" alt="Crane" />
                      <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400" className="h-40 w-full object-cover rounded shadow" alt="Cargo" />
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                      <h3 className="text-3xl font-black text-blue-900 mb-6 uppercase">Door-to-Door Container Shipping</h3>
                      <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                        We provide reliable, global **door-to-door ocean shipping services**, operating weekly schedules with 289 ocean carriers and serving over 10,000 port-to-port connections worldwide. *Aerial view: container ship at pier with crane bridge handling export and import operations on the open sea.
                      </p>
                      <button className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-bold rounded-full w-fit transition-all shadow-lg">
                          Gize D2DCS
                      </button>
                  </div>
              </div>
          </div>
      </section>

      {/* Services Grid Slider Promo */}
      <section className="bg-red-600 py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
              <h2 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">Discover Our Services</h2>
              <p className="text-white/80 font-medium">End-to-end services designed for success</p>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                  { title: "Partial Container Shipping", img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=400" },
                  { title: "Door-to-Door Container Shipping", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400" },
                  { title: "Comprehensive Ocean Shipping Solution", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400" },
                  { title: "Sustainable Shipping & Cargo Consolidation", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400" }
              ].map((item, i) => (
                  <div key={i} className="relative h-64 overflow-hidden group shadow-xl">
                      <img src={item.img} className="w-full h-full object-cover transition-transform group-hover:scale-110" alt={item.title} />
                      <div className="absolute inset-0 bg-black/40 flex items-end p-6">
                          <h4 className="text-white font-bold text-sm uppercase">{item.title}</h4>
                      </div>
                  </div>
              ))}
          </div>

          <div className="max-w-xl mx-auto flex items-center gap-4 px-4">
              <div className="flex-grow h-1 bg-white/20 relative">
                  <div className="absolute left-0 top-0 h-full w-1/3 bg-blue-900"></div>
              </div>
              <div className="flex gap-4">
                 <button className="text-white hover:text-blue-900 transition-colors" aria-label="Previous slide"><ChevronLeft size={32} /></button>
                 <button className="text-white hover:text-blue-900 transition-colors" aria-label="Next slide"><ChevronRight size={32} /></button>
              </div>
          </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col bg-white shadow-2xl overflow-hidden border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600" className="h-56 w-full object-cover" alt="Case study 1" />
                  <div className="p-8">
                    <span className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">CASE STUDIES</span>
                    <h4 className="text-blue-900 font-black text-xl mb-6">A multimodal ground solution connects Ethiopia to global markets, improving efficiency, reducing costs, and enabling reliable cross-border trade.</h4>
                  </div>
              </div>

              <div className="relative group overflow-hidden shadow-2xl bg-red-600">
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover opacity-30" alt="Global" />
                  <div className="absolute inset-0 p-12 flex flex-col justify-between text-white">
                      <div>
                          <span className="font-bold uppercase tracking-widest text-[10px] mb-4 block">CASE STUDIES</span>
                          <h4 className="font-black text-2xl leading-tight">Multi-modal transport solution for peak holiday season</h4>
                      </div>
                      <div className="flex items-center gap-4">
                          <div className="w-12 h-1 bg-blue-900"></div>
                          <span className="font-black text-xs uppercase tracking-widest">LEARN MORE</span>
                      </div>
                  </div>
                  <div className="absolute bottom-0 right-0 bg-white p-4 text-red-600">
                      <Plus size={32} />
                  </div>
              </div>

              <div className="flex flex-col bg-white shadow-2xl overflow-hidden border border-gray-100">
                  <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600" className="h-56 w-full object-cover" alt="Case study 3" />
                  <div className="p-8">
                    <span className="text-red-500 font-bold uppercase tracking-widest text-[10px] mb-4 block">CASE STUDIES</span>
                    <h4 className="text-blue-900 font-black text-xl mb-6">Leveraging electric vehicle for 5,000 kilometer long-haul transport in China</h4>
                  </div>
              </div>
          </div>
          
          <div className="text-center mt-20">
              <button className="bg-red-600 text-white px-10 py-5 font-black uppercase text-xl tracking-tighter rounded-sm hover:bg-red-700 transition-all shadow-xl hover:-translate-y-1">
                  Discover more
              </button>
          </div>
      </section>
    </div>
    );
}

export default OceanShipping;
