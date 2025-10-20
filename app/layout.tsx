import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import GoogleAnalytics from "@/components/GoogleAnalytics"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "찾아검진 - 액체생검 기반 방문형 건강검진",
  description:
    "기업 사옥에서 채혈·문진만으로 액체생검 포함 정밀 혈액검사와 기본 건강지표를 수집합니다. 임직원은 이동 없이, HR은 일정·결과·비용을 한 번에 관리하세요.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
