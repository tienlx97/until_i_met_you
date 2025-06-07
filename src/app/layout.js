import '../styles/globals.css'

export const metadata = {
  title: 'Until I Met You',
  description:
    'Until I Met You - A countdown to the moment that changed everything',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
