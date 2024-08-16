"use client";

import {Avatar, AvatarImage} from "@/components/ui/Avatar";
import Typewriter from "typewriter-effect";
import SocialMediaButton from "@/components/ui/SocialMediaButton";
import {faDiscord, faGithub, faTwitter} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

import Image from "next/image";
import FadeInOut from "@/components/animations/FadeInOut";
import ScaleInOut from "@/components/animations/ScaleInOut";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

export default function Haruko() {
    gsap.registerPlugin(ScrollTrigger);

    return (
        <section className="flex w-full h-screen py-12 md:py-24 lg:py-32 xl:py-48 items-center justify-center">
            <div className="absolute inset-0 opacity-40">
                <Image
                    src="/background.jpg"
                    alt="background"
                    layout="fill"
                    objectFit="cover"
                    draggable={false}
                    priority
                />
            </div>
            <div className="relative flex items-center justify-center">
                <div className="flex items-center justify-center space-x-6">
                    <div className="space-y-2 mt-4 text-center flex flex-col items-center">
                        <FadeInOut
                            durationIn={1.0}
                            delay={1.0}
                            ease="fast"
                            watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}
                        >
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Hi, I&apos;m Haruko<span className="sm:inline-block hidden animate-wave ml-2">👋</span>
                            </h1>
                            <div className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                <Typewriter options={{
                                    delay: 30,
                                    strings: ["I'm an 16 year old student and developer located in China."],
                                    loop: false,
                                    autoStart: true,
                                    deleteSpeed: 604800000,
                                }} />
                            </div>
                        </FadeInOut>
                        <div className="flex justify-center space-x-4 mt-8">
                            <SocialMediaButton icon={faTwitter} tooltip="Twitter" link="https://x.com/HarukoOwO" delay={1.8} />
                            <SocialMediaButton icon={faGithub} tooltip="GitHub" link="https://github.com/SakuraHaruko" delay={2.3}/>
                            <SocialMediaButton icon={faDiscord} tooltip="Discord" link="https://discordapp.com/users/762850819249930251" delay={2.8}/>
                            <SocialMediaButton icon={faEnvelope} tooltip="Email" link="mailto:i@qwq.lgbt" delay={3.3}/>
                        </div>
                    </div>
                    <ScaleInOut
                        durationIn={1}
                        delay={0.4}
                        ease="elastic.out"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <Avatar className="h-48 w-48">
                            <AvatarImage alt="Haruko" src="/avatar.jpg" />
                        </Avatar>
                    </ScaleInOut>
                </div>
            </div>
        </section>
    )
}
