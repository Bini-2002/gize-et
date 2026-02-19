import { useState, useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { ChevronRight, ChevronLeft, Plus, Check } from 'lucide-react'; // Added Check import
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import heroI2 from "../images/i2.jpeg";
import heroI3 from "../images/i21.jpg";
import heroI5 from "../images/i5.jpg";

// --- IMAGE IMPORTS ---
import customClearanceImg from "../images/cstom clerance.jpg";
import shippingImg from "../images/Freight_Forwarding.jpeg";
import warehouseImg from "../images/i33.jpg";
import transportationImg from "../images/i11.jpeg";
import hazardousImg from "../images/i2.jpeg";
import commitmentImg from "../images/i55.jpg";

// --- PARTNER LOGO IMPORTS ---
import haeLogo from "../images/partners/hae-group.png";
import iataLogo from "../images/partners/iata.png";
import dhlLogo from "../images/partners/dhl.png";
import fedexLogo from "../images/partners/fedex.png";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cardImageIndices, setCardImageIndices] = useState<number[]>(
    SERVICES.map(() => 0)
  );

  const secondaryImages = [
    "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
  ];

  const slides = [
    {
      subtitle: "Logistics and Shipping Company",
      desc: "Delivering expert solutions in customs clearance, freight forwarding, and inland transportation across Ethiopia.",
      image: heroI2
    },
    {
      subtitle: "Global Freight Solutions",
      desc: "Connecting businesses to global markets with reliable sea and air freight strategies focused on speed and safety.",
      image: heroI3
    },
    {
      subtitle: "Supply Chain Excellence",
      desc: "Transforming complex shipping challenges into seamless experiences with our dedicated team and modern infrastructure.",
      image: heroI5
    }
  ];

  // Fixed additionalServices with required img and items
  const additionalServices = [
    {
      name: 'GIZE PLC - LOGISTICS & FREIGHT STATION',
      content: 'Gize PLC operates a Consolidated Freight Station (CFS) at the Modjo Dry Port, located approximately 40 kilometers from Addis Ababa. The facility covers an area of 1,000 square meters and is equipped with three loading docks, enabling efficient handling, storage, and movement of cargo.',
      img: warehouseImg,
      items: ['1,000 sqm facility', 'Three loading docks', 'Located at Modjo Dry Port', 'Efficient cargo handling']
    },
    {
      name: 'PACKING & MOVING SERVICES',
      content: 'Professional packing and secure relocation services for corporate and private assets. Our team handles your valuables with the utmost care and professional standards, ensuring safe transit to any destination.',
      img: transportationImg,
      items: ['Professional packing materials', 'Secure relocation', 'Asset protection', 'Trained handling team']
    },
    {
      name: 'STORAGE & WAREHOUSING SERVICES',
      content: 'Secure climate-controlled facilities for long-term and transit storage needs. We provide real-time inventory tracking and comprehensive security for all stored items, giving you complete peace of mind.',
      img: warehouseImg,
      items: ['Climate-controlled facilities', 'Real-time inventory tracking', '24/7 security', 'Flexible lease terms']
    },
    {
      name: 'FAST CARGO SERVICES',
      content: 'Time-critical logistics for urgent shipments across the globe. When every second counts, Gize PLC delivers your cargo ahead of schedule with our specialized fast-track cargo handling systems.',
      img: shippingImg,
      items: ['Time-critical logistics', 'Fast-track handling', 'Global coverage', 'Priority clearance']
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

  const toggleImage = (index: number, e: ReactMouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCardImageIndices(prev => {
      const newIndices = [...prev];
      newIndices[index] = newIndices[index] === 0 ? 1 : 0;
      return newIndices;
    });
  };

  return (
    <div className="bg-white relative">
      {/* Fixed Sidebar - desktop only */}
      <aside className="fixed left-0 top-0 w-16 lg:w-20 h-screen flex flex-col items-center pt-48 gap-16 bg-[#0B1238] shadow-2xl z-50">
        <div className="w-1 bg-red-600 h-full absolute left-0 top-0"></div>
        <button className="flex flex-col items-center group transition-all">
          <div className="p-1 transition-transform group-hover:scale-110">
            <img src="/location.png" alt="Trace" className="w-6 h-6 lg:w-8 lg:h-8 object-contain brightness-0 invert" />
          </div>
          <span className="text-white text-[7px] lg:text-[9px] font-bold mt-1 uppercase tracking-tighter text-center px-1">Trace and Track</span>
        </button>
        <button className="flex flex-col items-center group transition-all">
          <div className="p-1 transition-transform group-hover:scale-110">
            <img src="/phone-book-ref.png" alt="Contact" className="w-6 h-6 lg:w-8 lg:h-8 object-contain brightness-0 invert" />
          </div>
          <span className="text-white text-[7px] lg:text-[9px] font-bold mt-1 uppercase tracking-tighter text-center px-1">Contact Us</span>
        </button>
      </aside>

      {/* Main content wrapper */}
      <div className="ml-16 lg:ml-20">
        {/* Hero Slider Section */}
        <section className="relative min-h-screen flex overflow-hidden">
          <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full bg-red-600 z-0"></div>
          <div className="flex-1 relative overflow-hidden">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                alt="Slide"
              />
            ))}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1238]/80 z-10"></div>
            <div className="absolute left-4 sm:left-8 md:left-32 lg:left-40 top-1/2 -translate-y-1/2 z-20 max-w-3xl">
              <div className="max-w-3xl">
                <div className="flex items-center gap-4 mb-6 transition-all duration-500 overflow-hidden h-6">
                  <span className="h-[2px] w-12 bg-red-600"></span>
                  <span className="text-white font-bold tracking-widest text-sm uppercase animate-in fade-in slide-in-from-left-4">
                    {slides[currentSlide].subtitle}
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 uppercase drop-shadow-2xl">
                  <span className="text-red-600">G</span>ize PLC
                </h1>
                <div className="h-32">
                  <p className="text-lg md:text-xl lg:text-2xl text-gray-200 leading-relaxed font-medium transition-all duration-500 animate-in fade-in slide-in-from-bottom-4">
                    {slides[currentSlide].desc}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-12 right-12 flex items-center gap-10 z-20">
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all"
                  title="Previous Slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={handleNext}
                  className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-white/40 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all"
                  title="Next Slide"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              <div className="flex flex-col items-end gap-3">
                <div className="flex items-center gap-3">
                  {slides.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-12 bg-red-600' : 'w-4 bg-white/40'}`} />
                  ))}
                </div>
                <div className="w-48 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-red-600 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section – red background extends to top and left on desktop */}
        <section className="py-24 relative bg-white overflow-hidden">
          {/* Absolute red background (desktop only) – now 1/3 width */}
          <div className="hidden lg:block absolute inset-y-0 left-0 w-1/3 bg-red-600 z-0"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Left column – red on mobile, transparent on desktop */}
              <div className="lg:col-span-5 bg-red-600 lg:bg-transparent flex items-center justify-center p-20">
                <img
                  src={heroI3}
                  className="w-[700px] h-[600px] object-cover shadow-2xl"
                  alt="Logistics"
                />
              </div>

              {/* Right column – white background */}
              <div className="lg:col-span-7 bg-white p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-red-600 font-black uppercase tracking-widest text-xs mb-4 block">ABOUT GIZE PLC</span>
                <h2 className="text-3xl lg:text-4xl font-black text-blue-900 mb-6 leading-tight uppercase">
                  Gize PLC has built nearly Twelve years of experience delivering comprehensive logistics solutions in Ethiopia
                </h2>
                <div className="space-y-6 text-gray-700 text-lg font-medium leading-relaxed">
                  <p>
                    Gize PLC specializes in delivering personalized and efficient logistics solutions across air, ocean, and overland freight, complemented by expert customs clearance. We eliminate supply chain friction by offering tailored, end-to-end strategies that focus on compliance, risk reduction, and operational optimization for every client.
                  </p>
                  <p>
                    With a dedicated team and a modern fleet, we transform complex shipping challenges into seamless experiences. We are committed to empowering your business by providing the reliable, fast, and secure movement of your cargo.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="mt-8 bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-black shadow-xl inline-flex items-center gap-3 self-start transition-all uppercase tracking-widest text-sm"
                >
                  See detail <ChevronRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - with plus icon on cards, positioned bottom right */}
        <section className="py-20 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-5xl font-black text-blue-900 mb-4 uppercase">Our Services</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto mb-6"></div>
              <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                Gize Logistics PLC delivers the knowledge and opportunities needed to optimize every mile on every lane. 
                We provide full-service transportation, shipping, port handling, and customs clearance solutions.
              </p>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-0 flex flex-col gap-8">
              <div className="lg:col-span-4 bg-[#0B1238] text-white p-10 flex flex-col justify-center border-l-8 border-red-600 shadow-xl h-full">
                <h3 className="text-3xl font-black mb-6 uppercase">Our Commitment</h3>
                <p className="text-white/90 leading-relaxed text-lg mb-6">
                  At GIZE PLC, we prioritize building long-term relationships through exceptional service and professional logistics handling.
                </p>
                <p className="text-white/80 leading-relaxed">
                  We ensure safe, fast, and secure cargo movement with modern infrastructure and dedicated experts.
                </p>
              </div>

              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0">
                {SERVICES.map((service, idx) => {
                  const imageSrc = cardImageIndices[idx] === 0 ? service.image : secondaryImages[idx % secondaryImages.length];
                  return (
                    <Link to={service.link} key={service.id} className="group relative flex flex-col h-full overflow-hidden shadow-2xl block">
                      <img src={imageSrc} alt={service.title} className="w-full h-full object-cover flex-1 transition-transform duration-1000 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-16 flex flex-col justify-end">
                        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">{service.title}</h3>
                        <p className="text-white/90 text-sm leading-relaxed">{service.description}</p>
                      </div>
                      <button
                        onClick={(e) => toggleImage(idx, e)}
                        className="absolute bottom-6 right-6 bg-red-600 p-2 text-white shadow-2xl hover:bg-red-700 transition-colors z-10"
                        aria-label="Change image"
                      >
                        <Plus size={24} strokeWidth={4} />
                      </button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Section */}
        <section className="py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-center font-black text-4xl mb-16 tracking-tighter text-blue-900 uppercase">ADDITIONAL SERVICES</h2>
            <div className="flex flex-wrap justify-center gap-8 mb-20 border-b border-gray-200">
              {additionalServices.map((service, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`pb-4 text-[10px] font-black tracking-widest uppercase transition-all ${activeTab === idx ? 'text-[#E31B23] border-b-2 border-[#E31B23]' : 'text-gray-400 border-transparent hover:text-gray-900'}`}
                >
                  {service.name}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
              <img src={additionalServices[activeTab].img} className="w-full h-[400px] object-cover" alt="Additional" />
              <div className="space-y-6">
                <h3 className="text-2xl font-black text-[#0B1238] uppercase tracking-tighter leading-tight">{additionalServices[activeTab].name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-md">{additionalServices[activeTab].content}</p>

                <ul className="flex flex-col gap-5 mt-8">
                  {additionalServices[activeTab].items.map((item) => (
                    <li key={item} className="flex items-center gap-4 text-lg font-medium text-slate-800">
                      <div className="w-5 h-5 rounded-full bg-[#E31B23] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <Check size={12} strokeWidth={6} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Hazardous Cargo Section */}
        <section className="bg-gray-100 overflow-hidden">
  <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
    <div className="lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center">
      <h2 className="text-red-600 font-black text-4xl mb-10 uppercase leading-tight tracking-tighter">Hazardous Cargo Management</h2>
      <div className="space-y-6 text-gray-700 text-lg font-medium leading-relaxed">
        <p>
          Gize PLC provides specialized logistics support for hazardous and regulated cargo, focusing on safety, risk control, and regulatory compliance throughout the supply chain.
        </p>
        <p>
          Our operations team plans secure transport solutions by selecting suitable carriers, routes, and handling methods that minimize exposure and delays. Dedicated facilities and trained personnel ensure safe storage, monitoring, and controlled movement of sensitive cargo.
        </p>
      </div>
    </div>
    <div className="lg:w-1/2 h-[500px]">
      <img 
        src={hazardousImg} 
        className="w-full h-full object-cover grayscale-[30%]" 
        alt="Dangerous Goods Handling" 
      />
    </div>
  </div>
</section>

        {/* Affiliated Companies */}
        <section className="py-24 bg-white text-center">
          <div className="mb-16">
            <span className="text-gray-400 text-xs font-black uppercase tracking-[0.6em]">With Us</span>
            <h2 className="text-2xl font-black text-[#E31B23] uppercase mt-4 tracking-tighter italic">Affiliated Companies</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-16 items-center px-10 mb-20 opacity-80">
            <img src={haeLogo} alt="HAE Group" className="h-8 object-contain" />
            <img src={iataLogo} alt="IATA" className="h-10 object-contain" />
            <img src={dhlLogo} alt="DHL" className="h-6 object-contain" />
            <img src={fedexLogo} alt="FedEx" className="h-8 object-contain" />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;