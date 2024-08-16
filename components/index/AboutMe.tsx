import TranslateInOut from "@/components/animations/TranslateInOut";
import FadeInOut from "@/components/animations/FadeInOut";

export default function AboutMe() {
    return (
        <section id="AboutMe" className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <TranslateInOut
                        durationIn={1.5}
                        delay={0.4}
                        y="100%"
                        start="-100% bottom"
                        end="top top"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}                    >
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
                    </TranslateInOut>
                    <FadeInOut
                        durationIn={0.5}
                        delay={1.1}
                        ease="fast"
                        watch overflowHidden={undefined} skipOutro={undefined} markers={undefined}>
                        <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            TODO
                        </p>
                    </FadeInOut>
                </div>
            </div>
        </section>
    )
}