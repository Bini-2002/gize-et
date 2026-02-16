
import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Play, ChevronRight, Plus, ChevronLeft } from 'lucide-react';
import heroImg from '../images/Shipping_2.jpeg';
import overviewImg from '../images/i2.jpeg';
import videoImg from '../images/i33.jpg';
import doorImg1 from '../images/i1.jpeg';
import doorImg2 from '../images/i11.jpeg';
import doorImg3 from '../images/Freight_Forwarding.jpeg';
import cardImg1 from '../images/i5.jpg';
import cardImg2 from '../images/i44.jpg';
import cardImg3 from '../images/i222.jpg';
import cardImg4 from '../images/i55.jpg';

const Shipping: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const serviceCards = [
    { title: "Partial Container Shipping", img: cardImg1 },
    { title: "Door-to-Door Container Shipping", img: cardImg2 },
    { title: "Comprehensive Ocean Shipping Solution", img: cardImg3 },
    { title: "Sustainable Shipping & Cargo Consolidation", img: cardImg4 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "A multimodal ground solution connects Ethiopia to global markets, improving efficiency and reducing costs.",
      img: doorImg1,
      longDesc: "Connecting Ethiopia to the world through a seamless multimodal network that optimizes every segment of the journey."
    },
    {
      id: 2,
      title: "Multi-modal transport solution for peak holiday season demand and logistics planning.",
      img: doorImg2,
      longDesc: "Handling the busiest logistics window with precision-timed multi-modal strategies to ensure zero delays."
    },
    {
      id: 3,
      title: "Leveraging electric vehicle for 5,000 kilometer long-haul transport across international borders.",
      img: doorImg3,
      longDesc: "Pioneering sustainable long-haul solutions using EV technology for massive distance freight operations."
    }
  ];

  return (
    <div>
      <Hero
        title="Shipping"
        subtitle="Connecting Your Cargo to the World Safely"
        image={heroImg}
      />

      {/* Overview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-full h-full bg-red-600 -z-10"></div>
              <img
                src={overviewImg}
                className="w-full h-[400px] object-cover shadow-2xl"
                alt="Ship overview"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-red-600 font-black text-4xl mb-6 block uppercase tracking-tighter">Overview</span>
              <h2 className="text-5xl font-black text-blue-900 mb-8 uppercase tracking-tighter leading-tight">Global Shipping Network</h2>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center lg:text-left">
          <h2 className="text-4xl font-black text-blue-900 mb-4 uppercase tracking-tighter">Shipping</h2>
          <p className="text-gray-500 mb-12 max-w-2xl">To view the video, please enable cookies first. If the video does not play, try refreshing your browser and then play it again.</p>

          <div className="relative group overflow-hidden rounded-sm shadow-2xl h-[550px] cursor-pointer">
            <img src={videoImg} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt="Video cover" />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <button
                className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-red-600 transition-all border-2 border-white/30 shadow-2xl transform group-hover:scale-110"
                title="Play video"
                aria-label="Play video"
              >
                <Play size={48} fill="currentColor" />
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
              <img src={doorImg1} className="col-span-12 h-[450px] w-full object-cover rounded shadow-2xl" alt="Container Ship" />
              <img src={doorImg2} className="col-span-6 h-56 w-full object-cover rounded shadow-xl" alt="Terminal" />
              <img src={doorImg3} className="col-span-6 h-56 w-full object-cover rounded shadow-xl" alt="Loading" />
            </div>
            <div className="lg:w-1/2 flex flex-col justify-center">
              <h3 className="text-4xl lg:text-5xl font-black text-blue-900 mb-8 uppercase tracking-tighter leading-none">Door-to-Door Container Shipping</h3>
              <p className="text-gray-600 mb-10 leading-relaxed text-xl">
                We provide reliable, global **door-to-door ocean shipping services**, operating weekly schedules with 289 ocean carriers and serving over 10,000 port-to-port connections worldwide. Our integrated solutions ensure that your container is managed from your doorstep directly to its final destination with precision and care.
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white px-12 py-5 font-black uppercase tracking-widest text-sm rounded-sm transition-all shadow-2xl hover:-translate-y-1 w-fit">
                Gize D2DCS
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Discover Our Services Slider */}
      <section className="bg-red-600 py-24 group/slider-section overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-4">Discover Our Services</h2>
          <p className="text-white/80 font-bold uppercase tracking-widest text-sm">End-to-end services designed for success</p>
        </div>

        {/* CARDS WITH HOVER STATE TRACKING */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {serviceCards.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative h-80 overflow-hidden group shadow-2xl rounded-sm cursor-pointer"
            >
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-8">
                <h4 className="text-white font-black text-xl uppercase tracking-tight leading-tight">{item.title}</h4>
              </div>
            </div>
          ))}
        </div>

        {/* INTERACTIVE SLIDER BAR: Bar moves left-to-right tied to hoveredCard state */}
        <div className="max-w-6xl mx-auto px-4 flex items-center gap-12 group/bar-area">
          <button className="text-white hover:text-blue-900 transition-all transform hover:scale-110" aria-label="Previous Slide">
            <ChevronLeft size={64} strokeWidth={3} />
          </button>

          <div className="flex-grow h-4 bg-white/20 relative rounded-full overflow-hidden shadow-inner">
            {/* The animated indicator moves based on hoveredCard index */}
            <div
              className="absolute top-0 h-full w-1/4 bg-blue-900 transition-all duration-500 ease-out rounded-full shadow-lg"
              style={{
                left: hoveredCard !== null ? `${hoveredCard * 25}%` : '0%',
                opacity: hoveredCard !== null ? 1 : 0.3,
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            ></div>
          </div>

          <button className="text-white hover:text-blue-900 transition-all transform hover:scale-110" aria-label="Next Slide">
            <ChevronRight size={64} strokeWidth={3} />
          </button>
        </div>
      </section>

      {/* Case Studies Section - Consistent look with red-overlay hover */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="relative group flex flex-col h-[580px] overflow-hidden shadow-2xl border border-gray-100 rounded-sm cursor-pointer">

              {/* Default View */}
              <div className="flex flex-col h-full bg-white transition-opacity duration-300 group-hover:opacity-0">
                <div className="h-72 w-full overflow-hidden">
                  <img src={study.img} className="h-full w-full object-cover" alt={study.title} />
                </div>
                <div className="p-10 flex flex-col flex-grow justify-start">
                  <span className="text-red-500 font-black uppercase tracking-widest text-[11px] mb-8 block">CASE STUDIES</span>
                  <h4 className="text-blue-900 font-black text-2xl leading-relaxed uppercase tracking-tight">{study.title}</h4>
                </div>
              </div>

              {/* Hover View: Red Overlay */}
              <div className="absolute inset-0 bg-red-600 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out p-12 flex flex-col justify-between text-white z-20">
                <div className="relative">
                  <span className="font-black uppercase tracking-widest text-[11px] mb-8 block opacity-80">CASE STUDIES</span>
                  <h4 className="font-black text-3xl leading-tight mb-8 uppercase tracking-tighter">{study.title}</h4>
                  <p className="text-white/90 text-xl leading-relaxed italic font-medium">"{study.longDesc}"</p>
                </div>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-1 bg-blue-900"></div>
                    <span className="font-black text-sm uppercase tracking-[0.2em] group-hover:translate-x-3 transition-transform duration-300">LEARN MORE</span>
                  </div>
                  <div className="bg-white p-5 text-red-600 shadow-2xl rounded-sm transform group-hover:rotate-90 transition-transform duration-500">
                    <Plus size={40} strokeWidth={4} />
                  </div>
                </div>
              </div>

              {/* Background decorative image on hover */}
              <img src={study.img} className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" alt="Background" />
            </div>
          ))}
        </div>

        <div className="text-center mt-24">
          <button className="bg-red-600 text-white px-20 py-6 font-black uppercase text-3xl tracking-tighter rounded-sm hover:bg-red-700 transition-all shadow-2xl hover:-translate-y-2 border-b-4 border-red-800">
            Discover more
          </button>
        </div>
      </section>
    </div>
  );
};

export default Shipping;
