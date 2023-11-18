// SocialMediaButton.tsx

import React from 'react';
import Link from 'next/link';

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface SocialMediaButtonProps {
  icon: any;
  tooltip: string;
  link: string;
  delay: number;
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ icon, tooltip, link, delay}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    >
      <Link href={link}>
      <div className="group flex cursor-pointer flex-col items-center justify-center rounded-3xl p-1 shadow-lg transition-all duration-300 ease-linear hover:rounded-xl">
        <div className="flex cursor-pointer flex-col items-center justify-center rounded-3xl p-2 transition-all duration-300 ease-linear hover:rounded-xl delay-0">
          <FontAwesomeIcon icon={icon} className="text-xl duration-300 hover:scale-110" />
        </div>
        <div className="relative flex justify-center">
          <div className="fixed mt-2 scale-0 rounded p-2 text-sm font-semibold text-white shadow-lg transition-all duration-300 group-hover:scale-100 bg-[#424242] opacity-80">
            <p className="hidden w-full max-w-2xl group-hover:block">{tooltip}</p>
          </div>
        </div>
      </div>
    </Link>
    </motion.div>
  );
};

export default SocialMediaButton;
