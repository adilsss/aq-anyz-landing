import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ресторан AQ AÑYZ | Восточная и европейская кухня",
  description:
    "Ресторан AQ AÑYZ | Восточная и европейская кухня Оформите заказ на дом или в офис на нашем сайте и попробуйте невероятно вкусные блюда восточной или европейской кухни!"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" href="/images/map-markers/item_1.webp" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  )
}
