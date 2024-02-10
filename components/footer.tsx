import Link from "next/link";

export default function myFooter() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Haruko & NekoCafe Network. All rights
                reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Link className="text-xs hover:underline underline-offset-4"
                      href="https://icp.gov.moe/?keyword=20220772">
                    萌ICP备20220772号
                </Link>
            </nav>
        </footer>
    )
}