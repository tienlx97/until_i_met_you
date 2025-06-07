import { FlipCountDownCli } from '@/features/countdown/flip-count-cown-cli'

/**
 * @type {import('next').Metadata}
 */
export const metadata = {
  title: 'Until I Met You',
  description: 'A countdown to the moment that changed everything',
  openGraph: {
    title: 'Until I Met You',
    description: 'A countdown to the moment that changed everything',
    url: 'https://until-i-met-you.vercel.app/',
    images: [
      {
        url: 'https://until-i-met-you.vercel.app/hello-kitty-count-down.jpg',
        alt: 'Count down to the moment that changed everything',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Until I Met You',
    description: 'A countdown to the moment that changed everything',
    images: ['https://until-i-met-you.vercel.app/hello-kitty-count-down.jpg'],
  },
  keywords: ['countdown', 'until I met you', 'event countdown'],
}

function HomePage() {
  return <FlipCountDownCli />
}

export default HomePage
