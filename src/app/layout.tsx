import type { Metadata } from 'next'
import { Inter,Sora,Montserrat } from 'next/font/google'
import '../common/style/globals.css'
import Navbar from '@/common/component/navbar/Navbar'

const inter = Inter({ subsets: ['latin'] })
const sora = Sora({subsets: ['latin']})
const monsterrat = Montserrat({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Live Music',
  description: 'Live Music Landing Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='light'>
      <body className={monsterrat.className}>
        <div className='flex justify-center'>
          <Navbar />
        </div>
        {children}
        </body>
    </html>
  )
}
