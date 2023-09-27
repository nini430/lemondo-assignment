import '../dist/index.css';
import type { Metadata } from 'next'
import localFont from 'next/font/local';

const tkt=localFont({src:[
  {
    path:'../assets/fonts/TKT-Medium.ttf',
    style:'normal',
    weight:'500'
  },
  {
    path:'../assets/fonts/TKT-Regular.ttf',
    style:'normal',
    weight:'400'
  }
]});

export const metadata: Metadata = {
  title: 'Lemondo Domens',
  description: 'Small mini-product app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={tkt.className}>{children}</body>
    </html>
  )
}
