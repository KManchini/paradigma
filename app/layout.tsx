import { roboto_Slab } from './components/fonts'
import Footer from './components/footer'
import './globals.css'

import Navbar from './navBar'
import IndexPage from './indexPage'
import Head from 'next/head'
import GoogleAnalytics from './components/GoogleAnalytics'


export const metadata = {
  metadataBase: new URL('https://acme.com'),
  openGraph: {
    type: "website",
    url: "https://almostanother.com",
    title: "Breaking the Paradigm",
    description: "Enter a world of captivating fiction, thought-provoking articles, and endless discoveries. Immerse yourself in our fictional narratives, explore insightful perspectives on real-world issues, and unlock a treasure trove of intriguing content.",
    siteName: "Time is UP",
    images: [{
      url: "https://almostanother.com/images/time_is_up_m.jpg",
    }],
  } ,
  twitter: {
    card: "summary_large_image",
    title: "Breaking the Paradigm",
    description: "Enter a world of captivating fiction, thought-provoking articles, and endless discoveries. Immerse yourself in our fictional narratives, explore insightful perspectives on real-world issues, and unlock a treasure trove of intriguing content.",
    images: [{
      url: "https://almostanother.com/images/time_is_up_m.jpg",
    }],
  } ,

  title:'Breaking the Paradigm',
  description: 'Fiction novel, articles about our reality and many other interesting things',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto_Slab.className}>
      <GoogleAnalytics/>

      <body>

        <Navbar/>
        {children}
        <Footer/>
      
      </body>
    </html>
  )
}
