import { Roboto } from 'next/font/google'
import './globals.css'
import localFont from 'next/font/local'

export const nohemi = localFont({src: [
  {
    path: './fonts/nohemi/Nohemi-Regular.ttf',
    weight: '400',
  },
  {
    path: './fonts/nohemi/Nohemi-Medium.ttf',
    weight: '500',
  },
  {
    path: './fonts/nohemi/Nohemi-Bold.ttf',
    weight: '700',
  },
  {
    path: './fonts/nohemi/Nohemi-Black.ttf',
    weight: '900',
  },

]
  })

export const roboto = Roboto({ subsets: ['latin'], weight:['100', '300', '400', '500', '700', '900'] })

const metadata = {
  title: 'Nexo Spotlight',
  description: 'Nexo Spotlight',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={nohemi.className}>
      {children}</body>
    </html>
  )
}
