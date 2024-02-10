import type { Metadata } from 'next'

import './globals.css'
import Loading from "@/components/loadingProgress";
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
    title: 'Short Url - NekoCafe',
    images: "https://haruko.moe/avatar.jpg",
    description: 'Shorten your URL~',
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
          <Loading>{children}</Loading>
        </TransitionContextProvider>
      </body>
    </html>
  )
}
