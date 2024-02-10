"use client";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faJava, faReact} from "@fortawesome/free-brands-svg-icons";
import TypeScriptIcon from "@/public/techIcons/TypeScript.svg";
import SpringBootIcon from "@/public/techIcons/SpringBoot.svg";
import MicrosoftNETIcon from  "@/public/techIcons/Microsoft.NET.svg";
import KotlinIcon from  "@/public/techIcons/Kotlin.svg";
import PythonIcon from "@/public/techIcons/Python.svg";

import Image from "next/image";
import FadeInOut from "@/components/animations/FadeInOut";
import gsap from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import TranslateInOut from "@/components/animations/TranslateInOut";

export default function MySkills() {
    gsap.registerPlugin(ScrollTrigger);

    return (
        <section id="MySkills" className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <TranslateInOut
                        durationIn={1.5}
                        delay={0.4}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Skills</h2>
                    </TranslateInOut>
                    <FadeInOut
                        durationIn={0.5}
                        delay={1.3}
                        ease="fast"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}                    >
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            I love learning new technologies and frameworks. Here are some of my skills.
                        </p>
                    </FadeInOut>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-24">
                    <TranslateInOut
                        durationIn={1.0}
                        delay={2.0}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <div className="flex flex-col items-center space-y-2">
                            <FontAwesomeIcon icon={faReact} className="h-12 w-12" color="#61dafb"/>
                            <span className="font-medium">React</span>
                        </div>
                    </TranslateInOut>
                    <TranslateInOut
                        durationIn={1.0}
                        delay={2.1}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <div className="flex flex-col items-center space-y-2">
                            <Image src="/techIcons/NextJS.png" alt="Next.js" width="48" height="48" draggable={false} />
                            <span className="font-medium">Next.js</span>
                        </div>
                    </TranslateInOut>
                    <TranslateInOut
                        durationIn={1.0}
                        delay={2.2}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <div className="flex flex-col items-center space-y-2">
                            <TypeScriptIcon />
                            <span className="font-medium">TypeScript</span>
                        </div>
                    </TranslateInOut>
                    <TranslateInOut
                        durationIn={1.0}
                        delay={2.3}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <div className="flex flex-col items-center space-y-2">
                            <KotlinIcon />
                            <span className="font-medium">Kotlin</span>
                        </div>
                    </TranslateInOut>
                    <TranslateInOut
                        durationIn={1.0}
                        delay={2.4}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <div className="flex flex-col items-center space-y-2">
                            <FontAwesomeIcon icon={faJava} className="h-12 w-12"/>
                            <span className="font-medium">Java</span>
                        </div>
                    </TranslateInOut>
                    <TranslateInOut
                        durationIn={1.0}
                        delay={2.5}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <div className="flex flex-col items-center space-y-2">
                            <SpringBootIcon />
                            <span className="font-medium">SpringBoot</span>
                        </div>
                    </TranslateInOut>
                    <TranslateInOut
                        durationIn={1.0}
                        delay={2.6}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <div className="flex flex-col items-center space-y-2">
                            <MicrosoftNETIcon />
                            <span className="font-medium">Microsoft .NET</span>
                        </div>
                    </TranslateInOut>
                    <TranslateInOut
                        durationIn={1.0}
                        delay={2.7}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <div className="flex flex-col items-center space-y-2">
                            <PythonIcon />
                            <span className="font-medium">Python</span>
                        </div>
                    </TranslateInOut>
                </div>
            </div>
        </section>
    )
}