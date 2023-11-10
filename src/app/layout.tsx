import type { Metadata } from 'next'
import { Inter,Sora } from 'next/font/google'
import '../common/style/globals.css'
import Navbar from '@/common/component/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })
const sora = Sora({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={sora.className}>
        <div className='flex justify-center'>
          <Navbar />
        </div>
        {children}
        </body>
    </html>
  )
}
