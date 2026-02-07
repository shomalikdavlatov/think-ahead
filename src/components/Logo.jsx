import './Logo.css';

function Logo() {
  return (
    <svg className="logo" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
      {/* Outer circle */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="url(#gradient1)" strokeWidth="4"/>
      
      {/* Brain/thought symbol */}
      <path 
        d="M 70 80 Q 60 60, 80 50 Q 100 40, 120 50 Q 140 60, 130 80" 
        fill="none" 
        stroke="url(#gradient1)" 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      <path 
        d="M 70 80 Q 70 100, 80 110 Q 100 120, 120 110 Q 130 100, 130 80" 
        fill="none" 
        stroke="url(#gradient1)" 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      
      {/* Connecting lines (neural pathways) */}
      <line x1="80" y1="70" x2="90" y2="90" stroke="url(#gradient1)" strokeWidth="2"/>
      <line x1="100" y1="60" x2="100" y2="90" stroke="url(#gradient1)" strokeWidth="2"/>
      <line x1="120" y1="70" x2="110" y2="90" stroke="url(#gradient1)" strokeWidth="2"/>
      
      {/* Forward arrow */}
      <path 
        d="M 130 100 L 150 100 L 145 95 M 150 100 L 145 105" 
        stroke="url(#gradient1)" 
        strokeWidth="3" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* Dots representing insights */}
      <circle cx="85" cy="100" r="3" fill="#2196f3" className="pulse-dot pulse-delay-1"/>
      <circle cx="100" cy="105" r="3" fill="#42a5f5" className="pulse-dot pulse-delay-2"/>
      <circle cx="115" cy="100" r="3" fill="#64b5f6" className="pulse-dot pulse-delay-3"/>
      
      {/* Gradient definitions */}
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4fc3f7', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#2196f3', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default Logo;
