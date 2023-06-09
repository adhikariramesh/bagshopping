import Header from './components/Header'
import Footer from './components/footer'
import './globals.css'
import { Inter } from 'next/font/google'
import {  Roboto} from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const roboto = Roboto({
  weight: ['300','500','700','900'],
  subsets: ['latin'],
  display: 'swap'
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
