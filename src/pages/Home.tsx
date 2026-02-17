import { useState, useEffect, type MouseEvent as ReactMouseEvent } from 'react';
import { ChevronRight, ChevronLeft, Plus, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';
import heroI2 from "../images/i2.jpeg";
import heroI3 from "../images/i21.jpg";
import heroI5 from "../images/i5.jpg";

// --- PARTNER LOGO IMPORTS ---
import haeLogo from "../images/partners/hae-group.png";
import iataLogo from "../images/partners/iata.png";
import dhlLogo from "../images/partners/dhl.png";
import fedexLogo from "../images/partners/fedex.png";

const Home = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  // State to manage current image index for each service card
  const [cardImageIndices, setCardImageIndices] = useState<number[]>(
    SERVICES.map(() => 0)
  );

  // Fallback secondary images for each service (replace with your own)
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

  // Function to toggle image for a specific card
  const toggleImage = (index: number, e: ReactMouseEvent) => {
    e.preventDefault(); // Prevent navigation if inside Link
    e.stopPropagation();
    setCardImageIndices(prev => {
      const newIndices = [...prev];
      newIndices[index] = newIndices[index] === 0 ? 1 : 0;
      return newIndices;
    });
  };

  return (
    <div className="bg-white relative">
      {/* Fixed Sidebar - reduced width */}
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

      {/* Main content wrapper with updated margin */}
      <div className="ml-16 lg:ml-20">
        {/* Hero Slider Section */}
        <section className="relative min-h-screen flex overflow-hidden">
          {/* Visible red left panel - now above gradient but below text */}
          <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full bg-red-600 z-0"></div>

          {/* Slides Content */}
          <div className="flex-1 relative overflow-hidden">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide.image}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                alt="Slide"
              />
            ))}
            {/* Gradient overlay – adjusted to be transparent on left half */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0B1238]/80 z-10"></div>

            {/* Hero text */}
            <div className="absolute left-4 sm:left-8 md:left-32 lg:left-40 top-1/2 -translate-y-1/2 z-20 max-w-3xl">
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
              </div>
            </div>

            {/* Slider Controls & Progress Bar */}
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
                  title="Next Slide">
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
          </div>
        </section>

        {/* Experience Section – redesigned with visible red background */}
        <section className="py-24 relative bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
              {/* Red background column (left) */}
              <div className="lg:col-span-5 bg-red-600 flex items-center justify-center p-20">
                <img
                  src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800"
                  className="w-full h-[500px] object-cover shadow-2xl"
                  alt="Logistics"
                />
              </div>

              {/* Text content column (right) */}
              <div className="lg:col-span-7 bg-white p-12 lg:p-16 flex flex-col justify-center">
                <span className="text-red-600 font-black uppercase tracking-widest text-xs mb-4 block">ABOUT GIZE PLC</span>
                <h2 className="text-4xl lg:text-5xl font-black text-blue-900 mb-6 leading-tight uppercase">
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
          {/* Title with container padding */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <h2 className="text-5xl font-black text-blue-900 mb-4 uppercase">Our Services</h2>
              <div className="w-24 h-1 bg-red-600 mx-auto"></div>
            </div>
          </div>

          {/* Grid without horizontal padding */}
          <div className="max-w-7xl mx-auto">
            <div className="lg:grid lg:grid-cols-12 lg:gap-0 flex flex-col gap-8">
              {/* LEFT SIDE – OUR COMMITMENT */}
              <div className="lg:col-span-4 bg-[#0B1238] text-white p-10 flex flex-col justify-center border-l-8 border-red-600 shadow-xl h-full">
                <h3 className="text-3xl font-black mb-6 uppercase">Our Commitment</h3>
                <p className="text-white/90 leading-relaxed text-lg mb-6">
                  At GIZE PLC, we prioritize building long-term relationships
                  through exceptional service and professional logistics handling.
                </p>
                <p className="text-white/80 leading-relaxed">
                  We ensure safe, fast, and secure cargo movement with modern
                  infrastructure and dedicated experts.
                </p>
              </div>

              {/* RIGHT SIDE – SERVICE CARDS */}
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-0">
                {SERVICES.map((service, idx) => {
                  // Determine which image to show
                  const imageSrc = cardImageIndices[idx] === 0 ? service.image : secondaryImages[idx % secondaryImages.length];
                  return (
                    <Link to={service.link} key={service.id} className="group relative flex flex-col h-full overflow-hidden shadow-2xl block">
                      {/* Image */}
                      <img
                        src={imageSrc}
                        alt={service.title}
                        className="w-full h-full object-cover flex-1 transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent"></div>
                      {/* Content - with right padding to avoid overlap with icon */}
                      <div className="absolute bottom-6 left-6 right-16 flex flex-col justify-end">
                        <h3 className="text-2xl font-black text-white mb-2 uppercase tracking-tight">
                          {service.title}
                        </h3>
                        <p className="text-white/90 text-sm leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                      {/* Plus Icon Button - positioned bottom right */}
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


        {/* Additional Services - with vertical bullets and longer image */}
        <section className="py-24 bg-white overflow-hidden">
          {/* Title with container padding */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-black text-blue-900 uppercase tracking-tighter">Additional Services</h2>
              <div className="w-32 h-1.5 bg-red-600 mx-auto mt-4"></div>
            </div>
          </div>

          {/* Content - full width */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col border border-gray-100 shadow-2xl overflow-hidden rounded-sm">
              <div className="flex bg-gray-50 flex-wrap overflow-x-auto">
                {additionalServices.map((service, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`flex-1 min-w-[200px] px-6 py-8 font-black text-[11px] uppercase tracking-widest transition-all border-b-4 ${activeTab === idx ? 'bg-white text-red-600 border-red-600' : 'text-blue-900 border-transparent hover:bg-white/50'
                      }`}
                  >
                    {service.name.split(' - ')[0]}
                  </button>
                ))}
              </div>
              <div className="p-12 bg-white flex flex-col lg:flex-row gap-12 items-start">
                {/* Image - made longer (h-96) */}
                <img
                  src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800"
                  className="w-full lg:w-1/2 h-96 object-cover rounded shadow-xl"
                  alt="Service Detail"
                />
                <div className="flex flex-col gap-6 w-full">
                  <h3 className="text-3xl font-black text-blue-900 leading-tight uppercase">{additionalServices[activeTab].name}</h3>
                  <p className="text-gray-600 leading-relaxed text-lg font-medium italic">"{additionalServices[activeTab].content}"</p>
                  {/* Bullets - now vertical (single column) */}
                  <ul className="grid grid-cols-1 gap-4 mt-4">
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
        </section>

        {/* Hazardous Cargo Section (unchanged) */}
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
         {/* --- AFFILIATED COMPANIES --- */}
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