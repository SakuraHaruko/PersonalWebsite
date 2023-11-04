import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import SocialMediaButton from '../components/SocialMediaButton';


const index = () => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div>
      <motion.div variants={container} initial="hidden" animate="visible" className="container bg-white rounded-lg shadow-md p-8 opacity-90">
          <div className="flex items-center gap-4 border-b border-pink-200 pb-4 md:flex-nowrap flex-wrap">
            
          <motion.div className="item" variants={item}>
            <Image src="/avatar.jpg" alt="Avatar" width={96} height={96} className="rounded-full"/>
          </motion.div>
            <div>
              <motion.div variants={item} className="item flex items-center gap-2">
                <p className="text-xl font-semibold">Hey,I'm buguwu</p>
                  <div className="flex flex-row gap-1.5">
                </div>
              </motion.div>
              <motion.p variants={item} className="item text-sm text-gray-300 ">TODO</motion.p>
            </div>
        </div>
          {/* Social Media Buttons */}
          <motion.div variants={item} className="item flex justify-center space-x-4 mt-4">
            <SocialMediaButton icon={faTwitter} tooltip="Twitter" link="https://x.com/buguwuofficial" />
            <SocialMediaButton icon={faGithub} tooltip="GitHub" link="https://github.com/buguwu" />
            <SocialMediaButton icon={faDiscord} tooltip="Discord" link="https://discordapp.com/users/762850819249930251" />
            <SocialMediaButton icon={faEnvelope} tooltip="Email" link="mailto:i@qwq.lgbt" />
          </motion.div>
      </motion.div>
      <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }} transition={{ type: "spring", stiffness: 400, damping: 17 }} className="text-gray-500 text-sm mt-4 absolute inset-x-0 bottom-0 text-center py-4">
        <a href="https://icp.gov.moe/?keyword=20236250" target="_blank">萌ICP备20236250号</a>
      </motion.div>
    </div>
    );
  };
  
export default index;
