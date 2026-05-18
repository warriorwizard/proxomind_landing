const Logo = () => {
  const accent = '#7868e6';

  return (
    <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g transform="translate(0, 5)">
        <circle cx="18" cy="15" r="12" fill={accent} fillOpacity="0.12" />
        <circle cx="18" cy="8" r="2.5" fill={accent} />
        <circle cx="10" cy="13" r="2" fill={accent} fillOpacity="0.85" />
        <circle cx="26" cy="13" r="2" fill={accent} fillOpacity="0.85" />
        <circle cx="12" cy="22" r="2" fill={accent} fillOpacity="0.85" />
        <circle cx="24" cy="22" r="2" fill={accent} fillOpacity="0.85" />
        <circle cx="18" cy="15" r="3.5" fill={accent} />
        <line x1="18" y1="8" x2="18" y2="11.5" stroke={accent} strokeWidth="1" strokeOpacity="0.55" />
        <line x1="10" y1="13" x2="14.5" y2="13.5" stroke={accent} strokeWidth="1" strokeOpacity="0.55" />
        <line x1="26" y1="13" x2="21.5" y2="13.5" stroke={accent} strokeWidth="1" strokeOpacity="0.55" />
        <line x1="12" y1="22" x2="14.5" y2="18.5" stroke={accent} strokeWidth="1" strokeOpacity="0.55" />
        <line x1="24" y1="22" x2="21.5" y2="18.5" stroke={accent} strokeWidth="1" strokeOpacity="0.55" />
        <line x1="10" y1="13" x2="18" y2="15" stroke={accent} strokeWidth="0.75" strokeOpacity="0.35" />
        <line x1="26" y1="13" x2="18" y2="15" stroke={accent} strokeWidth="0.75" strokeOpacity="0.35" />
        <line x1="12" y1="22" x2="18" y2="15" stroke={accent} strokeWidth="0.75" strokeOpacity="0.35" />
        <line x1="24" y1="22" x2="18" y2="15" stroke={accent} strokeWidth="0.75" strokeOpacity="0.35" />
      </g>

      <text x="42" y="26" fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif" fontSize="20" fontWeight="700" fill="#ffffff" letterSpacing="-0.5">
        Proxo
      </text>
      <text x="100" y="26" fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif" fontSize="20" fontWeight="700" fill={accent} letterSpacing="-0.5">
        Mind
      </text>
    </svg>
  );
};

export default Logo;
