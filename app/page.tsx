import MyHeader from "@/components/header";
import MyFooter from "@/components/footer";
import MySkills from "@/components/index/skills";
import MyProjects from "@/components/index/projects";
import Haruko from "@/components/index/haruko";
import AboutMe from "@/components/index/aboutMe";

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
            <MyHeader />
            <MyFooter />
        </div>
      </main>
  )
}
