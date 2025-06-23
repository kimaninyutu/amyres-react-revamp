
import React from 'react';

const AnnouncementBar: React.FC = () => {
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    const parentElement = e.currentTarget.parentElement;
    if (parentElement) {
      parentElement.style.display = 'none';
    }
  };

  return (
    <div className="bg-amyres-blue-solid text-white py-2 px-4 text-center text-sm font-medium">
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
      <button 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/80 hover:text-white transition-colors duration-300"
        onClick={handleClose}
      >
        <i className="fas fa-times text-xs"></i>
      </button>
    </div>
  );
};

export default AnnouncementBar;
