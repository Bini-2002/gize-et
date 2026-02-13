
import { useEffect, useState } from 'react';
import { ChevronRight, ChevronLeft, Plus, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=1920",
      title: "Logistics and Shipping Company",
      mainTitle: "Gize PLC",
      desc: "Delivering expert solutions in customs clearance, freight forwarding, and inland transportation across Ethiopia."
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1920",
      title: "Global Freight Solutions",
      mainTitle: "Efficient Trade",
      desc: "Connecting businesses to global markets with reliable sea and air freight strategies."
    },
    {
      image: "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1920",
      title: "Supply Chain Excellence",
      mainTitle: "Modern Fleet",
      desc: "Transforming complex shipping challenges into seamless experiences with our dedicated team."
    }
  ];

  const additionalServices = [
    { name: 'GIZE PLC - LOGISTICS & FREIGHT STATION', content: 'Comprehensive yard management and station services at key hubs like Modjo Dry Port. We ensure that every container and cargo piece is accounted for and moved efficiently.' },
    { name: 'PACKING & MOVING SERVICES', content: 'Professional packing and secure relocation services for corporate and private assets. Our team handles your valuables with the utmost care and professional standards.' },
    { name: 'STORAGE & WAREHOUSING SERVICES', content: 'Secure climate-controlled facilities for long-term and transit storage needs. We provide real-time inventory tracking for all stored items.' },
    { name: 'FAST CARGO SERVICES', content: 'Time-critical logistics for urgent shipments across the globe. When every second counts, Gize PLC delivers your cargo ahead of schedule.' }
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
        <div className="absolute left-0 top-0 bottom-0 flex z-30 hidden md:flex">
            <div className="w-[4px] bg-red-600 h-full"></div>
            <div className="w-12 bg-[#0B1238] h-full"></div>
        </div>

        {/* FLOATING ACTION BUTTONS */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
          <button className="flex flex-col items-center group">
            <div className="bg-white p-4 rounded-xl shadow-2xl transition-all group-hover:bg-red-600 group-hover:scale-110">
              <img src="location.png" alt="Location" className="w-8 h-8 object-contain group-hover:invert" />
            </div>
            <span className="text-white text-[10px] font-bold mt-2 uppercase tracking-widest drop-shadow-md">Trace and Track</span>
          </button>
          <button className="flex flex-col items-center group">
            <div className="bg-white p-4 rounded-xl shadow-2xl transition-all group-hover:bg-[#0B1238] group-hover:scale-110">
              <img src="phone-book.png" alt="Contact" className="w-8 h-8 object-contain group-hover:invert" />
            </div>
            <span className="text-white text-[10px] font-bold mt-2 uppercase tracking-widest drop-shadow-md">Contact Us</span>
          </button>
        </div>

        {/* Slides */}
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
          >
            <div className="absolute inset-0 z-0">
              <img src={slide.image} className="w-full h-full object-cover" alt={slide.title} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#0B1238]/90 via-[#0B1238]/60 to-transparent"></div>
            </div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full md:pl-32 h-full flex flex-col justify-center">
              <div className={`max-w-3xl transform transition-all duration-1000 ${index === currentSlide ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'}`}>
                <div className="flex items-center gap-4 mb-6">
                  <span className="h-[2px] w-12 bg-red-600"></span>
                  <span className="text-white font-bold tracking-widest text-sm uppercase">{slide.title}</span>
                </div>
                <h1 className="text-6xl md:text-8xl font-black text-white leading-tight mb-8 uppercase">
                  <span className="text-red-600">{slide.mainTitle.charAt(0)}</span>{slide.mainTitle.slice(1)}
                </h1>
                <p className="text-xl text-gray-200 mb-10 leading-relaxed font-medium">
                  {slide.desc}
                </p>
                <div className="flex gap-4">
                  <Link to="/services" className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 font-bold rounded shadow-lg transition-all flex items-center gap-2">
                    OUR SERVICES <ChevronRight size={20} />
                  </Link>
                  <Link to="/about" className="bg-white hover:bg-gray-100 text-blue-900 px-8 py-4 font-bold rounded shadow-lg transition-all">
                    ABOUT US
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls & Timestamp Progress */}
        <div className="absolute bottom-12 left-32 right-12 flex justify-between items-end z-20">
          <div className="flex gap-4">
            <button onClick={handlePrev} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ChevronLeft size={24} />
            </button>
            <button onClick={handleNext} className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <ChevronRight size={24} />
            </button>
          </div>
          
          <div className="flex flex-col items-end gap-2 w-1/3">
             <div className="flex gap-4 text-white/50 text-xs font-bold uppercase tracking-widest">
                {slides.map((_, i) => (
                  <span key={i} className={i === currentSlide ? 'text-white' : ''}>0{i+1}</span>
                ))}
             </div>
             <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-red-600 transition-all duration-100 ease-linear" style={{ width: `${progress}%` }}></div>
             </div>
          </div>
        </div>
      </section>

      {/* Experience Section with HALF RED BACKGROUND */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full lg:w-1/2 h-full bg-red-600 -z-10 lg:block hidden"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=800" 
                className="rounded-lg shadow-2xl w-full" 
                alt="Logistics Experience" 
              />
              <div className="absolute bottom-8 right-8 bg-white p-8 rounded shadow-xl z-20">
                <div className="text-5xl font-black text-red-600">12+</div>
                <div className="text-sm font-bold text-blue-900 uppercase tracking-widest mt-2">Years Experience</div>
              </div>
            </div>
            <div className="lg:pl-8">
              <span className="text-red-600 lg:text-red-600 font-extrabold uppercase tracking-widest text-xs mb-4 block">About Gize PLC</span>
              <h2 className="text-4xl font-black text-blue-900 mb-8 leading-tight">
                Gize PLC has built nearly Twelve years of experience delivering comprehensive logistics solutions in Ethiopia
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                Gize PLC specializes in delivering personalized and efficient logistics solutions across air, ocean, and overland freight, complemented by expert customs clearance. We eliminate supply chain friction by offering tailored, end-to-end strategies that focus on compliance, risk reduction, and operational optimization for every client.
              </p>
              <p className="text-gray-600 text-lg mb-10 leading-relaxed italic border-l-4 border-red-600 pl-6">
                With a dedicated team and a modern fleet, we transform complex shipping challenges into seamless experiences. We are committed to empowering your business by providing the reliable, fast, and secure movement of your cargo.
              </p>
              <Link to="/about" className="bg-red-600 hover:bg-red-700 text-white px-10 py-4 font-bold rounded shadow-lg inline-flex items-center gap-2 transition-all">
                See detail <ChevronRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-5xl font-black text-blue-900 mb-6 uppercase tracking-tight">Our Services</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg">
            Gize Logistics PLC delivers the knowledge and opportunities needed to optimize every mile on every lane. We provide full-service transportation, shipping, port handling, and customs clearance solutions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Link to={service.link} key={service.id} className="group relative h-[400px] overflow-hidden rounded-xl shadow-lg border border-gray-200 bg-white block">
              <img src={service.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={service.title} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <h3 className="text-3xl font-black text-white mb-2 uppercase tracking-wide">{service.title}</h3>
                <div className="w-full h-[3px] bg-red-600 mb-6"></div>
                
                <div className="flex justify-between items-end">
                   <p className="text-white/90 text-sm max-w-[70%] font-medium leading-relaxed">
                      {service.description}
                   </p>
                   <div className="bg-red-600 p-3 rounded-full text-white shadow-xl">
                      <Plus size={28} strokeWidth={3} />
                   </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Additional Services & Content Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-[#0B1238] p-6 rounded-t-xl mb-12">
                <h2 className="text-white text-center font-black tracking-widest text-xl uppercase">Additional Services</h2>
           </div>
           
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Description Card Left */}
              <div className="lg:col-span-4 bg-[#0B1238] p-10 rounded-2xl shadow-2xl text-white group hover:bg-red-600 transition-colors duration-500">
                  <h3 className="text-2xl font-black mb-6 uppercase tracking-tight">Our Mission</h3>
                  <p className="text-white/80 leading-relaxed mb-6 font-medium">
                    At GIZE PLC, we prioritize building long-term relationships through exceptional service. Our additional services are designed to address the specific niche needs of the Ethiopian market, ensuring your cargo is handled professionally from the moment it leaves your facility.
                  </p>
                  <p className="text-white/80 leading-relaxed font-medium">
                    We leverage technology and local expertise to provide real-time updates and secure handling procedures that set the industry benchmark for safety and efficiency.
                  </p>
              </div>

              {/* Interactive Tabs Right */}
              <div className="lg:col-span-8 flex flex-col border border-gray-100 shadow-2xl rounded-2xl overflow-hidden">
                <div className="flex bg-gray-50">
                  {additionalServices.map((service, idx) => (
                      <button 
                          key={idx}
                          onClick={() => setActiveTab(idx)}
                          className={`flex-1 px-4 py-6 font-bold text-[10px] uppercase tracking-widest transition-all border-b-4 ${activeTab === idx ? 'bg-white text-red-600 border-red-600' : 'text-blue-900 border-transparent hover:bg-white/50'}`}
                      >
                          {service.name.split('-')[0]}
                      </button>
                  ))}
                </div>
                <div className="p-12 bg-white flex flex-col lg:flex-row gap-12 items-center min-h-[400px]">
                   <img 
                      src="https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&q=80&w=800" 
                      className="w-full lg:w-1/2 h-64 object-cover rounded-lg shadow-lg" 
                      alt="Service Details" 
                   />
                   <div className="flex flex-col gap-6 w-full">
                      <h3 className="text-3xl font-black text-blue-900 leading-tight uppercase">
                          {additionalServices[activeTab].name}
                      </h3>
                      <p className="text-gray-600 leading-relaxed text-lg italic">
                          {additionalServices[activeTab].content}
                      </p>
                      <ul className="grid grid-cols-2 gap-4">
                          {['Secure storage', 'Pro Packing', 'Precise Labeling', 'Quick Handling'].map((item, i) => (
                              <li key={i} className="flex items-center gap-3 font-bold text-blue-900 text-sm">
                                  <CheckCircle2 className="text-red-600 shrink-0" size={18} /> {item}
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
      <section className="bg-gray-50">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-12 lg:p-24 bg-gray-100">
                  <h2 className="text-red-600 font-black text-4xl mb-8 uppercase leading-tight tracking-tight">Hazardous Cargo Management</h2>
                  <p className="text-gray-600 mb-6 text-lg">
                    Gize PLC provides specialized logistics support for hazardous and regulated cargo, focusing on safety, risk control, and regulatory compliance throughout the supply chain. Each shipment is assessed individually to ensure proper handling procedures are applied from origin to destination.
                  </p>
                  <p className="text-gray-600 mb-6 text-lg">
                    Our operations team plans secure transport solutions by selecting suitable carriers, routes, and handling methods that minimize exposure and delays. Dedicated facilities and trained personnel ensure safe storage, monitoring, and controlled movement of sensitive cargo.
                  </p>
              </div>
              <div className="lg:w-1/2">
                <img 
                    src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=1200" 
                    className="w-full h-full object-cover grayscale-[30%]" 
                    alt="Dangerous Goods" 
                />
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
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-60">
                <img src="https://logodownload.org/wp-content/uploads/2014/10/dhl-logo-0.png" className="h-10 grayscale hover:grayscale-0 transition-all" alt="DHL" />
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/02/IATA_Logo.svg/1280px-IATA_Logo.svg.png" className="h-12 grayscale hover:grayscale-0 transition-all" alt="IATA" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/FedEx_Corporation_-_Logo.svg/1280px-FedEx_Corporation_-_Logo.svg.png" className="h-10 grayscale hover:grayscale-0 transition-all" alt="FedEx" />
                <div className="text-2xl font-black text-gray-400"># HAE</div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
