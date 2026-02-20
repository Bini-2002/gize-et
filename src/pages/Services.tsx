import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Plus } from 'lucide-react';

import Hero from '../components/Hero';
import { SERVICES } from '../constants';

// ✅ Service Images
import customClearanceImg from "../images/cstom clerance.jpg";
import shippingImg from "../images/Freight_Forwarding.jpeg";
import warehouseImg from "../images/i33.jpg";
import hazardousImg from "../images/i2.jpeg";

// ✅ Case Study Images
import case1Img from "../images/Warehouse copy.jpeg";
import case2Img from "../images/case1.png";
import case3Img from "../images/case2.png";

function Services() {
  const [activeServiceIndex, setActiveServiceIndex] = useState(0);

  // Map each service to one of the imported images.
  const serviceImages = [
    shippingImg,          // 0: Customs Clearance
    customClearanceImg,   // 1: Air Freight
    warehouseImg,         // 2: Warehousing
    hazardousImg,         // 3: Transportation
    hazardousImg,         // 4: Hazardous Cargo
    hazardousImg,         // 5: Port Handling
  ];

  const caseStudies = [
    {
      title:
        "Enhancing connectivity with new multimodal ground and rail solution from Ethiopia to other countries",
      image: case1Img,
      id: 1,
    },
    {
      title: "Multi-modal transport solution for peak holiday season",
      image: case2Img,
      id: 2,
    },
    {
      title:
        "Leveraging electric vehicle for 5,000 kilometer long-haul transport in China",
      image: case3Img,
      id: 3,
    },
  ];

  return (
    <div>
      {/* Hero section now uses a local image */}
      <Hero
        title="What we do"
        image={shippingImg}   // ✅ replaced remote URL with local shipping image
      />

      {/* Services Section */}
      <section className="py-24 bg-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-white font-black text-4xl lg:text-5xl tracking-tighter">
              Our Services
            </h2>
            <p className="mt-3 text-white/90 text-sm font-bold uppercase tracking-widest">
              Explore our core logistics solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s, index) => (
              <Link
                to={s.link}
                key={s.id}
                className="group relative bg-white h-[400px] overflow-hidden rounded-sm hover:scale-[1.02] transition-transform"
                onMouseEnter={() => setActiveServiceIndex(index)}
              >
                <img
                  src={serviceImages[index]}
                  className="w-full h-full object-cover opacity-90 transition-all duration-500 group-hover:opacity-100"
                  alt={s.title}
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>

                <div className="absolute bottom-10 left-6 right-6">
                  <h3 className="text-white font-black text-2xl uppercase tracking-tighter mb-4">
                    {s.title}
                  </h3>
                  <div className="w-12 h-[3px] bg-red-600 transition-all group-hover:w-full"></div>
                </div>
              </Link>
            ))}
          </div>

          {/* Indicator */}
          <div className="mt-12 flex justify-center">
            <div className="relative h-1 w-44 bg-white/20 overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full w-11 bg-[#0B1238] transition-transform duration-300"
                style={{
                  transform: `translateX(${activeServiceIndex * 44}px)`,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <div className="flex items-center justify-center gap-6">
            <span className="hidden sm:block h-px w-24 bg-gray-300" />
            <h2 className="text-red-600 text-3xl lg:text-4xl font-black tracking-tighter">
              Case Studies
            </h2>
            <span className="hidden sm:block h-px w-24 bg-gray-300" />
          </div>

          <p className="mt-4 text-blue-900 text-[11px] font-bold uppercase tracking-widest">
            We collaborate with industry leaders and experts to deliver proven,
            real-world success stories.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="flex flex-col group transition-transform hover:scale-105 hover:z-10"
            >
              <div className="h-64 relative overflow-hidden">
                <img
                  src={study.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={study.title}
                />
                <div className="absolute bottom-0 right-0 bg-red-600 p-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Plus size={32} />
                </div>
              </div>

              <div className="p-8 shadow-2xl flex-grow flex flex-col justify-between bg-white text-blue-900 transition-colors duration-300 group-hover:bg-red-600 group-hover:text-white">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-widest mb-4 block">
                    CASE STUDIES
                  </span>
                  <h4 className="text-xl font-black leading-tight mb-6">
                    {study.title}
                  </h4>
                </div>

                <Link
                  to="#"
                  className="flex items-center gap-2 font-bold uppercase text-xs tracking-widest group-hover:translate-x-2 transition-transform"
                >
                  LEARN MORE <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          ))}
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

export default Services;