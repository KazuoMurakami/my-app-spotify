import './globals.css'

export const metadata = {
  title: 'Spotify tailwind',
  description: 'Listen to music',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
<head>
  <link
  rel="icon"
  href="/icon.png"
  type="image/png"
  sizes="32x32"
/>
</head>
      <body className="bg-black text-zinc-400 overflow-y-hidden">
        {children}
      </body>
    </html>
  )
}
