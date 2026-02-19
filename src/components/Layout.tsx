import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Linkedin, Facebook, Menu, X } from 'lucide-react';

// Import the two triangle images
import callCenter1 from '../images/call-center1.jpg';
import callCenter2 from '../images/call-center2.jpg';

// Custom X (Twitter) Icon Component
const XIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

// Custom Instagram Icon
const CustomInstagram = ({ size = 14 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'SERVICES', path: '/services' },
    { name: 'ABOUT US', path: '/about' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* HEADER */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <img src="/gize-logo.png" alt="Gize PLC Logo" className="h-10 object-contain" />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[10px] font-bold tracking-wider transition-colors hover:text-[#E31B23] ${
                  location.pathname === link.path
                    ? 'text-[#E31B23]'
                    : isScrolled
                    ? 'text-[#0B1238]'
                    : 'text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* MOBILE NAV LINKS */}
        {mobileOpen && (
          <nav className="md:hidden bg-white shadow-md w-full absolute top-full left-0 z-40 animate-slide-down">
            <div className="flex flex-col px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileOpen(false)}
                  className={`text-[#0B1238] font-bold tracking-wider py-2 px-2 rounded hover:bg-[#E31B23] hover:text-white transition-colors ${
                    location.pathname === link.path ? 'bg-[#E31B23] text-white' : ''
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow mt-16 md:mt-0">{children}</main>

      {/* FOOTER */}
      <footer className="bg-[#0B1238] text-white pt-10 pb-0 overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-2 h-12 bg-[#E31B23] z-20"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 items-start">
            {/* LEFT */}
            <div className="flex flex-col items-center lg:items-start shrink-0 mb-8 lg:mb-0">
              <img src="/gize-logo.png" alt="Gize Logo" className="h-14 object-contain" />
              <p className="text-gray-400 text-[7px] uppercase tracking-[0.2em] mt-1">
                Private Limited Company
              </p>
            </div>

            {/* CENTER */}
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-6">
                <span className="text-[#E31B23] font-bold text-base tracking-tighter uppercase">
                  WE CONNECT
                </span>
                <div className="flex flex-col font-medium text-xl lg:text-3xl leading-snug text-gray-100 italic tracking-wide">
                  <span>PEOPLE</span>
                  <span>RESOURCE</span>
                  <span>SYSTEMS</span>
                </div>
              </div>

              <Link
                to="/contact"
                className="mt-6 border border-white px-5 py-1 hover:bg-white hover:text-[#0B1238] transition-all"
              >
                <span className="text-[8px] font-bold tracking-[0.2em] uppercase">
                  CONTACT US
                </span>
              </Link>
            </div>

            {/* RIGHT - images wide with a reduced gap */}
            <div className="flex justify-end self-end w-full">
              <div className="flex gap-2 items-end h-40 lg:h-56 w-[150%]">
                <img
                  src={callCenter1}
                  alt=""
                  className="w-1/2 h-full object-cover"
                  style={{
                    clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                    maxWidth: 'none',
                  }}
                />
                <img
                  src={callCenter2}
                  alt=""
                  className="w-1/2 h-full object-cover"
                  style={{
                    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)',
                    maxWidth: 'none',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* SOCIAL BAR */}
        <div className="bg-[#E5E7EB] py-3 mt-8 border-t border-gray-300">
          <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-2">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-12">
              <span className="text-gray-500 font-bold uppercase tracking-widest text-xs">
                Follow US
              </span>
              <span className="font-black text-lg text-[#0B1238]"># GIZE PLC</span>
              <div className="flex gap-1.5">
                {[
                  { icon: <Linkedin size={14} className="text-white" />, href: '#' },
                  { icon: <Facebook size={14} className="text-white" />, href: '#' },
                  { icon: <XIcon size={14} />, href: '#' },
                  { icon: <CustomInstagram size={14} />, href: '#' },
                ].map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    className="bg-[#E31B23] p-2 rounded-sm hover:opacity-90 transition-opacity flex items-center justify-center text-white"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="w-full max-w-4xl h-[1px] bg-gray-300"></div>

            <div className="flex flex-wrap justify-center gap-x-6 text-[7px] font-bold text-[#0B1238] uppercase tracking-[0.2em]">
              <Link to="#">Privacy Policy</Link>
              <Link to="#">Terms & Legal</Link>
              <Link to="#">SiteMap</Link>
              <Link to="#">Cookie Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;