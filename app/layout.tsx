import type { Metadata } from 'next'

import './globals.css'
import NProgress from "@/components/NProgress";
import {TransitionContextProvider} from "@/context/transitionContext";

export const metadata: Metadata = {
  metadataBase: new URL('https://haruko.moe'),

  title: 'HarukoMoe',
  description: 'Haruko\'s personal website.',

  openGraph: {
    title: 'HarukoMoe',
    images: "https://haruko.moe/avatar.jpg",
    description: 'Haruko\'s personal website.',
    type: "website"
  },

  twitter : {
    title: 'HarukoMoe',
    images: "https://haruko.moe/avatar.jpg",
    description: 'Haruko\'s personal website.',
    card: "summary_large_image"
  },

  applicationName: "HarukoMoe"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
      <title>HarukoMoe</title>
    </head>
      <body>
        <TransitionContextProvider>
          <NProgress>{children}</NProgress>
        </TransitionContextProvider>
      </body>
    </html>
  )
}
