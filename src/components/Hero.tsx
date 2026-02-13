interface HeroProps {
  title: string;
  subtitle?: string;
  image?: string;
}

function Hero({ 
  title, 
  subtitle, 
  image = "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200" 
}: HeroProps) {
  return (
    <section className="relative h-[450px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={image} className="w-full h-full object-cover" alt={title} />
        <div className="absolute inset-0 bg-[#0B1238]/60"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-4 animate-in fade-in slide-in-from-left-8 duration-700">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-gray-300 font-medium animate-in fade-in slide-in-from-left-12 duration-700 delay-100">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
