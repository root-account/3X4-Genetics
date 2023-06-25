import './globals.css'
import { Inter } from 'next/font/google'
import Head from "next/head";

import Navbar from './(components)/Navbar';

// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '3X4 Genetics',
  description: 'An application by Ephraim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={inter.className}>
        <Navbar></Navbar>

        <div className='container mt-5'>
          {children}
        </div>
        
      </body>
    </html>
  )
}
