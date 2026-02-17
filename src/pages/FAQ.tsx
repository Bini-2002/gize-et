
import { useState } from 'react';
import Hero from '../components/Hero';
import { FAQ_DATA } from '../constants';
import { Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <Hero 
        title="FAQ" 
        image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
      />

      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-6xl md:text-7xl font-black text-red-600 mb-6 uppercase leading-none tracking-tighter">
                    Frequently Asked <br /> Questions
                </h2>
                <div className="w-32 h-1 bg-blue-900 mx-auto mb-8"></div>
                <p className="text-gray-500 font-medium">Find questions and answers related to the design system, purchase, updates, and support.</p>
            </div>

            <div className="space-y-4">
                {FAQ_DATA.map((item, idx) => (
                    <div key={idx} className="overflow-hidden rounded-xl transition-all duration-300">
                        <button 
                            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            className={`w-full flex items-center justify-between p-6 lg:p-8 text-left transition-all ${
                                openIndex === idx 
                                    ? 'bg-red-600 text-white shadow-xl' 
                                    : 'bg-gray-50 text-blue-900 hover:bg-gray-100'
                            }`}
                        >
                            <span className="text-lg lg:text-xl font-bold">{item.question}</span>
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${openIndex === idx ? 'bg-white text-red-600' : 'bg-white text-gray-400 border border-gray-200'}`}>
                                {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                            </div>
                        </button>
                        
                        <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} bg-red-600 text-white/90`}>
                            <div className="p-8 pt-0 border-t border-white/10 text-lg leading-relaxed">
                                {item.answer}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <h3 className="text-3xl font-black text-red-600 mb-6">Do you have more questions?</h3>
                <p className="text-gray-600 max-w-xl mx-auto mb-10 text-lg">
                    Origin-to-destination freight movement and complete compliance management in a single, integrated platform. Meet the right team to help realize secure, timely deliveries.
                </p>
                <Link to="/contact" className="bg-red-500 hover:bg-red-600 text-white px-12 py-4 rounded-full font-bold text-lg shadow-xl transition-all inline-block">
                    contact us
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
}

export default FAQ;