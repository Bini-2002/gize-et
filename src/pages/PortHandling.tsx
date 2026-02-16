
import React, { useState } from 'react';
import Hero from '../components/Hero';
import { Play, ChevronRight, Plus, ChevronLeft } from 'lucide-react';
import heroImg from '../images/Port_handling.jpeg';
import overviewImg from '../images/Warehouse copy.jpeg';
import cardImg1 from '../images/i2.jpeg';
import cardImg2 from '../images/i11.jpeg';
import cardImg3 from '../images/i5.jpg';
import cardImg4 from '../images/i222.jpg';
import studyImg1 from '../images/i33.jpg';
import studyImg2 from '../images/i44.jpg';
import studyImg3 from '../images/i55.jpg';

const PortHandling: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const serviceCards = [
    { title: "Modjo Dry Port Facility", img: cardImg1 },
    { title: "Cargo Consolidation", img: cardImg2 },
    { title: "CFS Station Management", img: cardImg3 },
    { title: "Yard Security & Tracking", img: cardImg4 }
  ];

  const caseStudies = [
    {
      id: 1,
      title: "Expanding the Consolidated Freight Station at Modjo to handle 1,000+ containers monthly.",
      img: studyImg1,
      longDesc: "Upgrading facility infrastructure and loading docks to meet the rising demand for dry port services in central Ethiopia."
    },
    {
      id: 2,
      title: "Implementation of AI-driven yard management for real-time cargo locating.",
      img: studyImg2,
      longDesc: "Using smart grid technology to optimize container placement and retrieval, reducing terminal wait times by 25%."
    },
    {
      id: 3,
      title: "Consolidation strategy for small-scale exporters reaching European markets.",
      img: studyImg3,
      longDesc: "Enabling local businesses to share container space, lowering the barrier for international trade and entry into global markets."
    }
  ];

  return (
    <div>
      <Hero
        title="Port Handling"
        subtitle="Strategic yard management and cargo consolidation at key hubs"
        image={heroImg}
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-full h-full bg-red-600 -z-10"></div>
              <img
                src={overviewImg}
                className="w-full h-[400px] object-cover shadow-2xl"
                alt="Port overview"
              />
            </div>
            <div className="lg:w-1/2">
              <span className="text-red-600 font-black text-4xl mb-6 block uppercase tracking-tighter">Overview</span>
              <h2 className="text-5xl font-black text-blue-900 mb-8 uppercase tracking-tighter leading-tight">Hub Operations</h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Gize PLC operates a modern Consolidated Freight Station (CFS) at the Modjo Dry Port. Our facility is designed for high-volume handling with dedicated loading docks and secure storage areas that ensure the integrity of every shipment.
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                We bridge the gap between ocean arrivals and inland distribution through expert consolidation and yard management services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-600 py-24 group/slider-section overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-6xl font-black text-white uppercase tracking-tighter mb-4">Discover Our Services</h2>
          <p className="text-white/80 font-bold uppercase tracking-widest text-sm">Strategic handling at the pulse of trade</p>
        </div>

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

        <div className="max-w-6xl mx-auto px-4 flex items-center gap-12 group/bar-area">
          <button className="text-white hover:text-blue-900 transition-all transform hover:scale-110" aria-label="Previous Slide">
            <ChevronLeft size={64} strokeWidth={3} />
          </button>

          <div className="flex-grow h-4 bg-white/20 relative rounded-full overflow-hidden shadow-inner">
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.id} className="relative group flex flex-col h-[580px] overflow-hidden shadow-2xl border border-gray-100 rounded-sm cursor-pointer">
              <div className="flex flex-col h-full bg-white transition-opacity duration-300 group-hover:opacity-0">
                <div className="h-72 w-full overflow-hidden">
                  <img src={study.img} className="h-full w-full object-cover" alt={study.title} />
                </div>
                <div className="p-10 flex flex-col flex-grow justify-start">
                  <span className="text-red-500 font-black uppercase tracking-widest text-[11px] mb-8 block">CASE STUDIES</span>
                  <h4 className="text-blue-900 font-black text-2xl leading-relaxed uppercase tracking-tight">{study.title}</h4>
                </div>
              </div>

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

export default PortHandling;
