import { useEffect, useState, type ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Linkedin, Facebook, Twitter, Instagram, Globe } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'SERVICES', path: '/services' },
    { name: 'FAQ', path: '/faq' },
    { name: 'CONTACT US', path: '/contact' },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold text-xl italic">
                  G
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-900 rounded-full border-2 border-white"></div>
              </div>
              <div
                className={`font-extrabold text-xl leading-none flex flex-col ${
                  isScrolled ? 'text-blue-900' : 'text-white'
                }`}
              >
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
                      : isScrolled
                        ? 'text-blue-900'
                        : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen((open) => !open)}
                className={isScrolled ? 'text-blue-900' : 'text-white'}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-4 text-base font-bold text-blue-900 border-b border-gray-100 hover:text-red-500"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      <main className="flex-grow">{children}</main>

      <footer className="bg-[#0B1238] text-white pt-20 pb-10 overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 bg-red-600 rounded-xl flex items-center justify-center text-white font-bold text-3xl italic">
                  G
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold tracking-tight">Gize PLC</h2>
                  <p className="text-xs uppercase tracking-widest text-gray-400">Private Limited Company</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-8">
                <span className="text-red-500 font-bold text-xl uppercase tracking-tighter">WE CONNECT</span>
                <div className="flex flex-col font-bold text-2xl uppercase tracking-widest text-gray-100">
                  <span>PEOPLE</span>
                  <span>RESOURCE</span>
                  <span>SYSTEMS</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-6">
              <Link
                to="/contact"
                className="border-2 border-white px-8 py-3 font-bold uppercase tracking-widest hover:bg-white hover:text-blue-900 transition-all"
              >
                CONTACT US
              </Link>
              <div className="relative w-48 h-48 opacity-20 hidden lg:block">
                <Globe className="w-full h-full text-white" strokeWidth={1} />
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-10 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-8">
              <span className="text-gray-400 font-bold">Follow US</span>
              <span className="text-white font-black text-xl"># GIZE PLC</span>
            </div>

            <div className="flex gap-4">
              <a href="#" className="bg-red-600 p-3 rounded hover:scale-110 transition-transform" aria-label="LinkedIn">
                <Linkedin size={24} />
              </a>
              <a href="#" className="bg-red-600 p-3 rounded hover:scale-110 transition-transform" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="#" className="bg-red-600 p-3 rounded hover:scale-110 transition-transform" aria-label="Twitter">
                <Twitter size={24} />
              </a>
              <a href="#" className="bg-red-600 p-3 rounded hover:scale-110 transition-transform" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-wrap justify-center gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-500">
            <Link to="#" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="#" className="hover:text-white">
              Terms & Legal
            </Link>
            <Link to="#" className="hover:text-white">
              SiteMap
            </Link>
            <Link to="#" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>

        <div className="absolute right-[-10%] bottom-[-10%] w-[500px] h-[500px] opacity-10 pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000"
            className="rounded-full object-cover w-full h-full"
            alt="globe"
          />
        </div>
      </footer>
    </div>
  );
}
