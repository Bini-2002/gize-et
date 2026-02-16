
import React from 'react';
import Hero from '../components/Hero';
import { Play, ChevronRight, Plus, ChevronLeft } from 'lucide-react';

const Shipping: React.FC = () => {
  const serviceCards = [
    { title: "Partial Container Shipping", img: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=400" },
    { title: "Door-to-Door Container Shipping", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=400" },
    { title: "Comprehensive Ocean Shipping Solution", img: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400" },
    { title: "Sustainable Shipping & Cargo Consolidation", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=400" }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "A multimodal ground solution connects Ethiopia to global markets, improving efficiency, reducing costs, and enabling reliable cross-border trade.",
      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=600",
      longDesc: "Connecting Ethiopia to the world through a seamless multimodal network that optimizes every segment of the journey."
    },
    {
      id: 2,
      title: "Multi-modal transport solution for peak holiday season",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600",
      longDesc: "Handling the year's busiest logistics window with precision-timed multi-modal strategies to ensure zero delays."
    },
    {
      id: 3,
      title: "Leveraging electric vehicle for 5,000 kilometer long-haul transport in China",
      img: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=600",
      longDesc: "Pioneering sustainable long-haul solutions using EV technology for massive distance freight operations."
    }
  ];

  return (
    <div>
      <Hero 
        title="Shipping" 
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
              <span className="text-red-600 font-black text-4xl mb-6 block uppercase tracking-tighter">Overview</span>
              <h2 className="text-5xl font-black text-blue-900 mb-8 uppercase tracking-tighter">Global Shipping Network</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Our extensive global network connects major ports across the world, enabling seamless movement of cargo between key international markets. The network is designed to support a wide range of shipping needs, ensuring flexible schedules, reliable transit times, and efficient route planning for every shipment.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                With a strong focus on safety, transparency, and operational excellence, we provide end-to-end ocean shipping solutions tailored to your business requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-black text-blue-900 mb-4 uppercase">Shipping</h2>
          <p className="text-gray-500 mb-12 max-w-2xl">To view the video, please enable cookies first. If the video does not play, try refreshing your browser and then play it again.</p>
          
          <div className="relative group overflow-hidden rounded-sm shadow-2xl h-[550px]">
            <img src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Video cover" />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <button 
              className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all border-2 border-white/30 shadow-2xl"
              aria-label="Play video">
                <Play size={40} fill="currentColor" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Door-to-Door Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 grid grid-cols-12 gap-4">
              <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=600" className="col-span-12 h-96 w-full object-cover rounded shadow-lg" alt="Main Ship" />
              <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=400" className="col-span-6 h-48 w-full object-cover rounded shadow" alt="Port Details" />
              <img src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=400" className="col-span-6 h-48 w-full object-cover rounded shadow" alt="Cargo Yard" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-4xl font-black text-blue-900 mb-8 uppercase tracking-tighter leading-tight">Door-to-Door Container Shipping</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-xl">
                We provide reliable, global **door-to-door ocean shipping services**, operating weekly schedules with 289 ocean carriers and serving over 10,000 port-to-port connections worldwide. Aerial view: container ship at pier with crane bridge handling export and import operations on the open sea.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 font-black uppercase tracking-widest text-sm rounded-sm transition-all shadow-2xl hover:-translate-y-1">
                Gize D2DCS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Our Services Slider */}
      <section className="bg-red-600 py-24 group/slider-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-4">Discover Our Services</h2>
          <p className="text-white/80 font-bold uppercase tracking-widest text-sm">End-to-end services designed for success</p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCards.map((item, i) => (
            <div key={i} className="relative h-72 overflow-hidden group shadow-2xl rounded-sm">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-8">
                <h4 className="text-white font-black text-lg uppercase tracking-tight leading-tight">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* CUSTOM SLIDER BAR AS REQUESTED */}
        <div className="max-w-5xl mx-auto px-4 flex items-center justify-between gap-8 group/bar-area">
          <button className="text-white hover:text-blue-900 transition-colors" aria-label="Prev">
            <ChevronLeft size={48} strokeWidth={3} />
          </button>
          
          <div className="flex-grow h-3 bg-white/20 relative rounded-full overflow-hidden">
            {/* The bar segment that moves left to right on hover of the section */}
            <div className="absolute top-0 left-0 h-full w-1/4 bg-blue-900 transition-all duration-1000 ease-in-out group-hover/slider-section:left-3/4 rounded-full"></div>
          </div>

          <button className="text-white hover:text-blue-900 transition-colors" aria-label="Next">
            <ChevronRight size={48} strokeWidth={3} />
          </button>
        </div>
      </section>

      {/* Case Studies Section - ALL SAME DEFAULT, HOVER TRANSFORMS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="relative group flex flex-col h-[550px] overflow-hidden shadow-2xl border border-gray-100 rounded-sm">
              
              {/* Default View Content */}
              <div className="flex flex-col h-full bg-white transition-opacity duration-500 group-hover:opacity-0">
                <div className="h-64 w-full overflow-hidden">
                   <img src={study.img} className="h-full w-full object-cover" alt={study.title} />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-red-500 font-black uppercase tracking-widest text-[10px] mb-6 block">CASE STUDIES</span>
                  <h4 className="text-blue-900 font-black text-xl leading-relaxed">{study.title}</h4>
                </div>
              </div>

              {/* Hover View Content (Red Style) */}
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-12 flex flex-col justify-between text-white z-20">
                <div className="relative">
                  <span className="font-black uppercase tracking-widest text-[10px] mb-6 block opacity-80">CASE STUDIES</span>
                  <h4 className="font-black text-2xl leading-tight mb-6 uppercase tracking-tight">{study.title}</h4>
                  <p className="text-white/90 text-lg leading-relaxed italic">{study.longDesc}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-1 bg-blue-900"></div>
                    <span className="font-black text-xs uppercase tracking-[0.2em] group-hover:translate-x-2 transition-transform duration-300">LEARN MORE</span>
                  </div>
                  <div className="bg-white p-4 text-red-600 shadow-xl rounded-sm">
                    <Plus size={36} strokeWidth={4} />
                  </div>
                </div>
              </div>

              {/* Background decorative image on hover */}
              <img src={study.img} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" alt="Bg" />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-24">
          <button className="bg-red-600 text-white px-16 py-6 font-black uppercase text-2xl tracking-tighter rounded-sm hover:bg-red-700 transition-all shadow-2xl hover:-translate-y-2">
            Discover more
          </button>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
