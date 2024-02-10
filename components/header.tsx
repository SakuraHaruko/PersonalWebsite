"use client";

import {Avatar, AvatarImage} from "@/components/ui/avatar";
import Link from "next/link";

export default function myHeader() {
    const handleClickScroll = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: elementPosition - 50,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className="bg-transparent fixed w-full px-4 lg:px-4 py-4 flex items-center">
            <div className="flex items-center space-x-2">
                <Avatar className="h-10 w-10">
                    <AvatarImage alt="Haruko" src="/avatar.jpg"/>
                </Avatar>
                <Link className="flex items-center space-x-2" href="#">
                    <span className="font-semibold">Haruko</span>
                </Link>
            </div>
            <nav className="ml-auto flex gap-4 sm:gap-6 lg:gap-8">
                <button className="text-sm font-medium p-2 hover:bg-pink-100 duration-300 rounded-md" onClick={() => handleClickScroll("AboutMe")}>
                    AboutMe
                </button>
                <button className="text-sm font-medium p-2 hover:bg-pink-100 duration-300 rounded-md" onClick={() => handleClickScroll("MySkills")}>
                    Skills
                </button>
                <button className="text-sm font-medium p-2 hover:bg-pink-100 duration-300 rounded-md" onClick={() => handleClickScroll("Projects")}>
                    Projects
                </button>
            </nav>
        </header>
    )
}