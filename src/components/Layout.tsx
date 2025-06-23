
import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Announcement Bar */}
      <div className="bg-amyres-blue-solid text-white py-2 px-4 text-center text-sm font-medium relative z-50">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <i className="fas fa-bullhorn text-amyres-green"></i>
          <span>
            New Feature Alert! Complimentary Discovery Calls Now Available! 
            <a 
              href="https://calendly.com/aoko-amyres/complimentary-diagnostic-session-with-amyres-agtech" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-2 text-amyres-green hover:text-white transition-colors duration-300 font-semibold underline"
            >
              Learn More →
            </a>
          </span>
        </div>
        {/* Optional close button */}
        <button 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300"
          onClick={(e) => {
            e.currentTarget.parentElement?.style.setProperty('display', 'none');
          }}
        >
          <i className="fas fa-times text-xs"></i>
        </button>
      </div>
      
      <Header />
      <main className="flex-1 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
