import { Metadata } from 'next'
import './globals.css'
import { Inter } from 'next/font/google'
import Provider from '@/components/Provider'

const APP_NAME = "Students";
const APP_DEFAULT_TITLE = "Students APP";
const APP_TITLE_TEMPLATE = "%s - PWA App";
const APP_DESCRIPTION =  "Add and edit students";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  }
};


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  // Create Provider component to wrap app with SessionProvider
  return (
    <html lang="en" suppressHydrationWarning>
          <body className={inter.className}>
                <Provider>
                  {children}
                </Provider>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script>
            </body>
    </html>
  )
}
