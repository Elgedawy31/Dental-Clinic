import './globals.css'
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
import 'bootstrap/dist/css/bootstrap.css';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body>
      
        {children}</body>
    </html>
  )
}