import { SVGProps } from "react";

const OilPumpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    {/* Base platform */}
    <rect x="2" y="20" width="6" height="2" />
    <rect x="16" y="20" width="6" height="2" />
    
    {/* Support tower */}
    <line x1="5" y1="20" x2="12" y2="6" />
    <line x1="19" y1="20" x2="12" y2="6" />
    <line x1="8" y1="14" x2="16" y2="14" />
    
    {/* Pump head */}
    <line x1="12" y1="6" x2="20" y2="4" />
    <circle cx="12" cy="6" r="1.5" />
    
    {/* Walking beam */}
    <line x1="18" y1="4" x2="18" y2="8" />
  </svg>
);

export default OilPumpIcon;
