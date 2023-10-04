import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const index = () => {
    return (
        <div className="container">
          <h1>Helloo</h1>
          <p>This is a demo. :D</p>

          {/* Social Media Buttons */}
        <div className="flex justify-center space-x-4 mt-4">
          <SocialMediaButton icon={faTwitter} tooltip="Twitter" link="https://x.com/buguwuofficial" />
          <SocialMediaButton icon={faGithub} tooltip="GitHub" link="https://github.com/buguwu" />
          <SocialMediaButton icon={faDiscord} tooltip="Discord" link="#" />
          <SocialMediaButton icon={faEnvelope} tooltip="Email" link="mailto:i@qwq.lgbt" />
        </div>
        </div>

        
    );
  };
  
// Social Media Button Component
const SocialMediaButton = ({ icon, tooltip, link }: { icon: any, tooltip: string, link: string }) => {
  return (              
    <a href={link} target="_blank" rel="noopener noreferrer" className="relative group">
      <div className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full text-white transition-transform transform group-hover:scale-110">
        <FontAwesomeIcon icon={icon} className="text-xl" />
      </div>
      {/* 使用 :hover 伪类来触发按钮和提示的显示和隐藏 */}
      <div className="tooltip-container relative group-hover:visible invisible bg-transparent text-transparent text-xs rounded-lg p-1 absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-opacity">
        <div className="custom-tooltip bg-gray-800 text-white text-xs rounded-lg p-2 absolute top-full left-1/2 transform -translate-x-1/2">
          {tooltip}
        </div>
      </div>

      {/* 使用 :hover 伪类来触发自定义动画 */}
      <style jsx>{`
        .group:hover .w-10 {
          animation: changeShape 0.5s ease forwards;
        }

        @keyframes changeShape {
          0% {
            border-radius: 50%; /* 开始时为圆形 */
          }
          100% {
            border-radius: 8px; /* 结束时为圆角方形 */
          }
          .group:hover .tooltip-container {
            visibility: visible;
            opacity: 1;
          }
        }
      `}</style>
    </a>
  );
};





export default index;
