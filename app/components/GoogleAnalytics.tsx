// components/GoogleAnalytics.tsx
'use client';

import Script from 'next/script'

export default function GoogleAnalytics(){
    return (
    <>

        <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Q8G89T38DR"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q8G89T38DR');
        `}
      </Script>
    </>
)}