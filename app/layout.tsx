export const metadata = {
  title: 'EcoFash',
  description: 'This is Home page for EcoFash',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
