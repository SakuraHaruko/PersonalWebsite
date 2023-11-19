import React, { useState, useEffect } from 'react';
import Image from 'next/image';

import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';

import { faTwitter, faGithub, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import SocialMediaButton from '@/components/SocialMediaButton';
import MusicPlayer from '@/components/MusicPlayer'; 

const Index = () => {
  //const [typewriterVisible, setTypewriterVisible] = useState(false);

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

  /*useEffect(() => {
    const timeoutId = setTimeout(() => {
      setTypewriterVisible(true);
    }, 1000); // 设置延迟时间，单位是毫秒
  
    return () => clearTimeout(timeoutId); // 清除定时器以防止组件卸载时内存泄漏
  }, []); // 空数组表示只在组件挂载时运行一次*/

  return (
    <div>
      <motion.div variants={container} initial="hidden" animate="visible" className="bg-white rounded-lg shadow-md p-8 max-w-lg bg-opacity-90">
          <div className="flex items-center bg-white rounded-lg gap-4 p-4 md:flex-nowrap flex-wrap">
          <motion.div className="item" variants={item}>
            <Image src="/avatar.jpg" alt="Avatar" width={96} height={96} className="rounded-full"/>
          </motion.div>

            <div>
              <motion.div variants={item} className="flex items-center gap-2">
                <p className="text-xl font-semibold">Hey, I&apos;m buguwu</p>
                  <div className="flex flex-row gap-1.5">
                </div>
              </motion.div>
              <motion.p variants={item} className="text-sm text-gray-300 ">I&apos;m a 15 years old student and program developer from China</motion.p>
            </div>
        </div>
        <motion.div variants={item} className='justify-center rounded-lg border-2 border-pink-200 duration-300 p-4 mt-4 text-pink-200 text-md font-sans bg-white'>
            {/*{typewriterVisible && (*/}
            <Typewriter options={{
                                        delay: 50,
                                        strings: ["I'm a 15 years old student and program developer from China, I like to make some interesting things, such as websites, applications, robots, etc... (!TODO)"],
                                        loop: false,
                                        autoStart: true,
                                        deleteSpeed: 604800000,
                                    }} />{/*})}*/}
          </motion.div>
        {/*<div className="bg-white justify-center rounded-lg p-4 left-4 bottom-4 mt-4"></div>*/}
        <motion.div variants={item}>
        <MusicPlayer playlist={[
            { name: 'MIMI - 心を刺す言葉だけ (feat. 初音ミク & 可不)', src: './api/music/2091770490' },
            { name: '程嘉敏 - 小年兽', src: './api/music/1346758452' },
            { name: '暗杠/寅子 - 说书人', src: './api/music/1198010' },
          ]}
          />
        <div className='border-b border-pink-200 mt-6' />
        </motion.div>
        {/* Social Media Buttons */}
        <div className='flex justify-center space-x-4 mt-4'>
          <SocialMediaButton icon={faTwitter} tooltip="Twitter" link="https://x.com/buguwuofficial" delay={1.5} />
          <SocialMediaButton icon={faGithub} tooltip="GitHub" link="https://github.com/buguwu" delay={2.0}/>
          <SocialMediaButton icon={faDiscord} tooltip="Discord" link="https://discordapp.com/users/762850819249930251" delay={2.5}/>
          <SocialMediaButton icon={faEnvelope} tooltip="Email" link="mailto:i@qwq.lgbt" delay={3.0}/>
        </div>
      </motion.div>
      <div className="text-gray-500 text-sm mt-4 absolute inset-x-0 bottom-0 text-center py-4">
        <a href="https://icp.gov.moe/?keyword=20236250" target="_blank">萌ICP备20236250号</a>
      </div>
    </div>
    );
  };
  
export default Index;
