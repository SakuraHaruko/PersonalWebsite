// SocialMediaButton.tsx

import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialMediaButtonProps {
  icon: any;
  tooltip: string;
  link: string;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ icon, tooltip, link }) => {
  return ( 
    <Link href={link}>
      <div className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl p-1 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl">
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-3xl p-2 transition-all duration-300 ease-linear hover:rounded-xl" style={{ transitionDelay: '0ms' }}>
          <FontAwesomeIcon icon={icon} className="text-xl duration-300 hover:scale-110" />
        </div>
        <div className="relative flex justify-center">
          <div className="fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100" style={{ backgroundColor: '#42424280' }}>
            <p className="hidden w-full max-w-2xl group-hover:block">{tooltip}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SocialMediaButton;
