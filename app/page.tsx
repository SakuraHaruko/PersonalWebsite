import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MySkills from "@/components/index/Skills";
import MyProjects from "@/components/index/Projects";
import Haruko from "@/components/index/Haruko";
import AboutMe from "@/components/index/AboutMe";

export default function page() {
    return (
      <main>
        <div key="1" className="flex flex-col min-h-[100dvh]">
            <main className="flex-1">
                <Haruko />
                <AboutMe />
                <MySkills />
                <MyProjects />
            </main>
            <Header />
            <Footer />
        </div>
      </main>
  )
}
