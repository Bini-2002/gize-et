
import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Plus, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      subtitle: "Logistics and Shipping Company",
      desc: "Delivering expert solutions in customs clearance, freight forwarding, and inland transportation across Ethiopia.",
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920"
    },
    {
      subtitle: "Global Freight Solutions",
      desc: "Connecting businesses to global markets with reliable sea and air freight strategies focused on speed and safety.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920"
    },
    {
      subtitle: "Supply Chain Excellence",
      desc: "Transforming complex shipping challenges into seamless experiences with our dedicated team and modern infrastructure.",
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1920"
    }
  ];

  const additionalServices = [
    { 
      name: 'GIZE PLC - LOGISTICS & FREIGHT STATION', 
      content: 'Gize PLC operates a Consolidated Freight Station (CFS) at the Modjo Dry Port, located approximately 40 kilometers from Addis Ababa. The facility covers an area of 1,000 square meters and is equipped with three loading docks, enabling efficient handling, storage, and movement of cargo.' 
    },
    { 
      name: 'PACKING & MOVING SERVICES', 
      content: 'Professional packing and secure relocation services for corporate and private assets. Our team handles your valuables with the utmost care and professional standards, ensuring safe transit to any destination.' 
    },
    { 
      name: 'STORAGE & WAREHOUSING SERVICES', 
      content: 'Secure climate-controlled facilities for long-term and transit storage needs. We provide real-time inventory tracking and comprehensive security for all stored items, giving you complete peace of mind.' 
    },
    { 
      name: 'FAST CARGO SERVICES', 
      content: 'Time-critical logistics for urgent shipments across the globe. When every second counts, Gize PLC delivers your cargo ahead of schedule with our specialized fast-track cargo handling systems.' 
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          return 0;
        }
        return oldProgress + 0.5;
      });
    }, 50);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  };

  return (
    <div className="bg-white">
      {/* Hero Slider Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* SIDE BAR: RED LINE LEFT, DARK BLUE RIGHT */}
        <div className="absolute left-0 top-0 bottom-0 flex z-30 hidden md:flex w-24 lg:w-32">
            <div className="w-[4px] bg-red-600 h-full"></div>
            <div className="flex-grow bg-[#0B1238] h-full flex flex-col items-center pt-48 gap-16 shadow-2xl">
               <button className="flex flex-col items-center group transition-all">
                 <div className="p-2 transition-transform group-hover:scale-110">
                   <img src="/location.png" alt="Trace" className="w-8 h-8 lg:w-10 lg:h-10 object-contain brightness-0 invert" />
                 </div>
                 <span className="text-white text-[8px] lg:text-[10px] font-bold mt-2 uppercase tracking-tighter text-center px-1">Trace and Track</span>
               </button>
               <button className="flex flex-col items-center group transition-all">
                 <div className="p-2 transition-transform group-hover:scale-110">
                   <img src="/phone-book-ref.png" alt="Contact" className="w-8 h-8 lg:w-10 lg:h-10 object-contain brightness-0 invert" />
                 </div>
                 <span className="text-white text-[8px] lg:text-[10px] font-bold mt-2 uppercase tracking-tighter text-center px-1">Contact Us</span>
               </button>
            </div>
        </div>

        {/* Slides Content */}
        <div className="absolute inset-0 z-0">
          {slides.map((slide, index) => (
            <img 
              key={index}
              src={slide.image} 
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`} 
              alt="Slide" 
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1238]/80 via-[#0B1238]/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full md:pl-64">
          <div className="max-w-3xl">
            {/* Rotating Subtitle */}
            <div className="flex items-center gap-4 mb-6 transition-all duration-500 overflow-hidden h-6">
              <span className="h-[2px] w-12 bg-red-600"></span>
              <span className="text-white font-bold tracking-widest text-sm uppercase animate-in fade-in slide-in-from-left-4">
                {slides[currentSlide].subtitle}
              </span>
            </div>
            
            {/* STATIC TITLE */}
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-tight mb-4 uppercase drop-shadow-2xl">
              <span className="text-red-600">G</span>ize PLC
            </h1>
            
            {/* ROTATING DESCRIPTION */}
            <div className="h-32">
               <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                {slides[currentSlide].desc}
               </p>
            </div>

            <div className="flex gap-4 mt-12">
              <Link to="/services" className="bg-red-600 hover:bg-red-700 text-white px-10 py-5 font-black rounded-sm shadow-2xl transition-all flex items-center gap-3 text-lg uppercase tracking-widest">
                OUR SERVICES <ChevronRight size={24} />
              </Link>
            </div>
          </div>
        </div>

        {/* Slider Controls & Progress Bar */}
        <div className="absolute bottom-12 right-12 flex items-center gap-10 z-20">
           <div className="flex gap-4">
              <button onClick={handlePrev} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <ChevronLeft size={24} />
              </button>
              <button onClick={handleNext} className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all">
                <ChevronRight size={24} />
              </button>
           </div>
           <div className="flex flex-col items-end gap-3">
              <div className="flex items-center gap-3">
                 {slides.map((_, i) => (
                   <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-12 bg-red-600' : 'w-4 bg-white/40'}`}></div>
                 ))}
              </div>
              <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                 <div className="h-full bg-red-600 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
              </div>
           </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 relative overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full bg-red-600 -z-10 lg:block hidden"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative z-10">
              <img src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800" className="rounded-sm shadow-2xl w-full h-[550px] object-cover" alt="Logistics" />
              <div className="absolute bottom-10 right-10 bg-white p-10 rounded-sm shadow-2xl z-20 border-l-8 border-red-600">
                <div className="text-6xl font-black text-red-600">12+</div>
                <div className="text-sm font-bold text-blue-900 uppercase tracking-widest mt-2">Years of experience</div>
              </div>
            </div>
            <div className="lg:pl-10">
              <span className="text-red-600 font-black uppercase tracking-widest text-xs mb-6 block">ABOUT GIZE PLC</span>
              <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-10 leading-tight uppercase">
                Gize PLC has built nearly Twelve years of experience delivering comprehensive logistics solutions in Ethiopia
              </h2>
              <div className="space-y-6 text-gray-600 text-lg font-medium leading-relaxed">
                <p>
                  Gize PLC specializes in delivering personalized and efficient logistics solutions across air, ocean, and overland freight, complemented by expert customs clearance. We eliminate supply chain friction by offering tailored, end-to-end strategies that focus on compliance, risk reduction, and operational optimization for every client.
                </p>
                <p>
                  With a dedicated team and a modern fleet, we transform complex shipping challenges into seamless experiences. We are committed to empowering your business by providing the reliable, fast, and secure movement of your cargo.
                </p>
              </div>
              <Link to="/about" className="mt-12 bg-red-600 hover:bg-red-700 text-white px-12 py-5 font-black rounded-sm shadow-xl inline-flex items-center gap-3 transition-all uppercase tracking-widest text-sm">
                See detail <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-20">
          <h2 className="text-6xl font-black text-blue-900 mb-6 uppercase tracking-tighter">Our Services</h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-xl font-medium leading-relaxed">
            Gize Logistics PLC delivers the knowledge and opportunities needed to optimize every mile on every lane. We provide full-service transportation, shipping, port handling, and customs clearance solutions.
          </p>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-10">
          {SERVICES.map((service) => (
            <Link to={service.link} key={service.id} className="group relative h-[480px] overflow-hidden rounded-sm shadow-2xl block">
              <img src={service.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={service.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12 right-12">
                <h3 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">{service.title}</h3>
                <div className="w-full h-[5px] bg-red-600 mb-8 transition-all duration-500 group-hover:scale-x-105 origin-left"></div>
                <div className="flex justify-between items-end">
                   <p className="text-white/95 text-base max-w-[75%] font-medium leading-relaxed">{service.description}</p>
                   <div className="bg-red-600 p-4 text-white shadow-2xl rounded-sm">
                      <Plus size={36} strokeWidth={4} />
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-blue-900 uppercase tracking-tighter">Additional Services</h2>
              <div className="w-32 h-1.5 bg-red-600 mx-auto mt-4"></div>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Mission/Description Card Left */}
              <div className="lg:col-span-4 bg-[#0B1238] p-12 rounded-sm shadow-2xl text-white flex flex-col justify-center border-l-8 border-red-600 hover:bg-red-600 transition-colors duration-500">
                  <h3 className="text-3xl font-black mb-10 uppercase tracking-tight">Our Commitment</h3>
                  <p className="text-white/90 leading-relaxed mb-8 font-medium text-lg">
                    At GIZE PLC, we prioritize building long-term relationships through exceptional service. Our additional services are designed to address the specific niche needs of the Ethiopian market, ensuring cargo is handled professionally from origin to doorstep.
                  </p>
                  <p className="text-white/90 leading-relaxed font-medium text-lg">
                    We leverage technology and local expertise to provide real-time updates and secure handling procedures that set the industry benchmark for safety, speed, and efficiency across the entire logistics spectrum.
                  </p>
              </div>

              {/* Tabs Content Right */}
              <div className="lg:col-span-8 flex flex-col border border-gray-100 shadow-2xl rounded-sm overflow-hidden">
                <div className="flex bg-gray-50 flex-wrap overflow-x-auto">
                  {additionalServices.map((service, idx) => (
                      <button 
                          key={idx}
                          onClick={() => setActiveTab(idx)}
                          className={`flex-1 min-w-[200px] px-6 py-8 font-black text-[11px] uppercase tracking-widest transition-all border-b-4 ${activeTab === idx ? 'bg-white text-red-600 border-red-600' : 'text-blue-900 border-transparent hover:bg-white/50'}`}
                      >
                          {service.name.split(' - ')[0]}
                      </button>
                  ))}
                </div>
                <div className="p-12 bg-white flex flex-col lg:flex-row gap-12 items-start min-h-[500px]">
                   <img src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800" className="w-full lg:w-1/2 h-80 object-cover rounded shadow-xl" alt="Service Detail" />
                   <div className="flex flex-col gap-6 w-full">
                      <h3 className="text-3xl font-black text-blue-900 leading-tight uppercase">{additionalServices[activeTab].name}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg font-medium italic">"{additionalServices[activeTab].content}"</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                          {['Secure storage', 'Professional Packing', 'Precise Labeling', 'Container stuffing', 'Efficient Handling'].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 font-bold text-blue-900 text-sm">
                                  <CheckCircle2 className="text-red-600 shrink-0" size={20} /> {item}
                              </li>
                          ))}
                      </ul>
                   </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Hazardous Cargo Section */}
      <section className="bg-gray-100 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
                  <h2 className="text-red-600 font-black text-5xl mb-10 uppercase leading-tight tracking-tighter">Hazardous Cargo Management</h2>
                  <div className="space-y-6 text-gray-700 text-lg font-medium leading-relaxed">
                    <p>
                      Gize PLC provides specialized logistics support for hazardous and regulated cargo, focusing on safety, risk control, and regulatory compliance throughout the supply chain. Each shipment is assessed individually to ensure proper handling procedures are applied from origin to destination.
                    </p>
                    <p>
                      Our operations team plans secure transport solutions by selecting suitable carriers, routes, and handling methods that minimize exposure and delays. Dedicated facilities and trained personnel ensure safe storage, monitoring, and controlled movement of sensitive cargo.
                    </p>
                  </div>
              </div>
              <div className="lg:w-1/2 h-[600px]">
                <img src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200" className="w-full h-full object-cover grayscale-[30%]" alt="Dangerous Goods Handling" />
              </div>
          </div>
      </section>

      {/* Affiliated Companies */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <span className="text-gray-400 font-bold uppercase tracking-widest text-sm">With US</span>
                <h2 className="text-red-600 font-black text-3xl uppercase tracking-widest mt-4">Affiliated Companies</h2>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-20">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/dhl-logo-0.png" className="h-10 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" alt="DHL" />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/IATA_Logo.svg/1280px-IATA_Logo.svg.png" className="h-12 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" alt="IATA" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/FedEx_Corporation_-_Logo.svg/1280px-FedEx_Corporation_-_Logo.svg.png" className="h-10 grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" alt="FedEx" />
                <div className="text-4xl font-black text-gray-300 tracking-tighter"># HAE</div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
