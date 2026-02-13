
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Facebook, Twitter, Instagram } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <img src="/gize-logo.png" alt="Gize PLC Logo" className="h-12 object-contain" />
              <div className={`font-extrabold text-xl leading-none flex flex-col ${isScrolled ? 'text-blue-900' : 'text-white'}`}>
                <span>Gize</span>
                <span className="text-[10px] tracking-[0.2em]">PLC</span>
              </div>
            </Link>

            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-bold tracking-wider transition-colors hover:text-red-500 ${
                    location.pathname === link.path 
                      ? 'text-red-500 underline underline-offset-8' 
                      : (isScrolled ? 'text-blue-900' : 'text-white')
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className={isScrolled ? 'text-blue-900' : 'text-white'}>
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full p-4 space-y-2">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} onClick={() => setIsMenuOpen(false)} className="block px-3 py-4 text-base font-bold text-blue-900 border-b border-gray-100 hover:text-red-500">
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer - HORIZONTAL ALIGNMENT REQUESTED */}
      <footer className="bg-[#0B1238] text-white pt-24 pb-12 overflow-hidden relative border-t-8 border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            {/* Logo Part - Left */}
            <div className="lg:col-span-3 flex flex-col items-center lg:items-start gap-4">
              <img src="/gize-logo.png" alt="Gize Logo" className="h-24 lg:h-32 object-contain" />
              <div className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.3em] text-center lg:text-left">
                Private Limited Company
              </div>
            </div>

            {/* We Connect Part - Middle */}
            <div className="lg:col-span-6 flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-12 text-center lg:text-left">
               <span className="text-red-600 font-black text-2xl lg:text-3xl uppercase tracking-tighter whitespace-nowrap">
                WE CONNECT
               </span>
               <div className="flex flex-col font-black text-4xl lg:text-6xl text-gray-100 leading-none">
                  <span>PEOPLE</span>
                  <span className="text-red-600">RESOURCE</span>
                  <span>SYSTEMS</span>
               </div>
            </div>

            {/* Globe & Contact Button Part - Right */}
            <div className="lg:col-span-3 flex flex-col items-center gap-8">
              <div className="w-48 h-48 flex items-center justify-center">
                <img 
                  src="/globe.png" 
                  alt="Globe" 
                  className="w-full h-full object-contain animate-spin-slow opacity-90" 
                />
              </div>
              
              {/* CONTACT BUTTON BELOW GLOBE */}
              <Link 
                to="/contact" 
                className="border-2 border-white px-8 py-3 font-black uppercase tracking-[0.1em] hover:bg-white hover:text-blue-900 transition-all text-sm w-full text-center"
              >
                CONTACT US
              </Link>
            </div>
          </div>

          {/* Bottom Bar: Follow Us & Legal */}
          <div className="border-t border-gray-800 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-8">
              <span className="text-gray-500 font-black uppercase tracking-widest text-lg">Follow US</span>
              <span className="text-red-600 font-black text-3xl"># GIZE PLC</span>
            </div>
            
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, color: 'bg-[#0077b5]' },
                { Icon: Facebook, color: 'bg-[#1877f2]' },
                { Icon: Twitter, color: 'bg-black' },
                { Icon: Instagram, color: 'bg-[#E4405F]' }
              ].map(({ Icon, color }, idx) => (
                <a key={idx} href="#" className={`${color} p-4 rounded hover:scale-110 transition-transform shadow-lg`}>
                   <Icon size={24} strokeWidth={3} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-16 text-center text-[10px] font-bold uppercase tracking-[0.4em] text-gray-600 flex flex-wrap justify-center gap-8">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms & Legal</Link>
            <Link to="#" className="hover:text-white transition-colors">SiteMap</Link>
            <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
