
import Hero from '../components/Hero';
import { Quote } from 'lucide-react';

function About() {
  return (
    <div>
      <Hero 
        title="About us" 
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
      />

      <section className="py-24 bg-red-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-6xl font-black mb-16 text-center">About us</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <div className="space-y-8">
              <img 
                src="https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&q=80&w=800" 
                className="rounded shadow-2xl w-full h-[400px] object-cover" 
                alt="Logistics" 
              />
              <p className="text-xl leading-relaxed">
                Beyond traditional logistics services, GIZE PLC positions itself as a strategic trade and investment partner, facilitating smoother access to Ethiopian and regional markets. The company emphasizes reliability, transparency, and customer-focused solutions, aiming to bridge local businesses with global trade opportunities. Through continuous improvement, technology adoption, and partnerships, GIZE PLC contributes to strengthening Ethiopia's logistics ecosystem and supporting economic growth across multiple sectors.
              </p>
            </div>
            
            <div className="space-y-8">
              <p className="text-xl leading-relaxed font-bold">
                GIZE PLC is a privately held Ethiopian company headquartered in Addis Ababa, specializing in logistics, freight forwarding, customs clearance, and end-to-end supply chain solutions. Since its establishment, the company has built a strong reputation for managing domestic and international cargo movements through air, sea, and road transport. By combining operational experience with a deep understanding of Ethiopia's trade and regulatory environment, GIZE PLC supports businesses in moving goods efficiently while ensuring compliance with national and international trade requirements.
              </p>
              <img 
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800" 
                className="rounded shadow-2xl w-full h-[400px] object-cover" 
                alt="Shipping Vessel" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="relative bg-[#FF6B6B] rounded-2xl overflow-hidden shadow-2xl flex flex-col lg:flex-row">
              <div className="lg:w-1/3 relative">
                 <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" 
                    className="h-full w-full object-cover aspect-[4/5]" 
                    alt="CEO" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-red-600/40 to-transparent"></div>
              </div>
              
              <div className="lg:w-2/3 p-12 lg:p-20 relative text-white">
                 <div className="mb-8">
                    <h3 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter mb-2">GIZESHWORK TESSEMA</h3>
                    <p className="text-xl font-medium text-white/90">CEO of Gize PLC.</p>
                 </div>

                 <div className="relative">
                    <Quote className="absolute -top-6 -left-8 opacity-20 w-16 h-16 rotate-180" />
                    <p className="text-lg lg:text-xl leading-relaxed italic relative z-10 mb-8">
                        At GIZE PLC, we are committed to simplifying trade and logistics by delivering reliable, transparent, and efficient supply chain solutions. Our focus is on connecting businesses to opportunities through strong partnerships, operational excellence, and a deep understanding of Ethiopia's trade environment. As we move forward, we remain dedicated to innovation, customer trust, and sustainable growth that creates value for our clients and contributes to the country's economic development.
                    </p>
                    <Quote className="absolute -bottom-6 right-0 opacity-20 w-16 h-16" />
                 </div>
              </div>
           </div>
        </div>
      </section>
    </div>
  );
}

export default About;
