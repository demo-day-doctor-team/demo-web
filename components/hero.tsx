"use client"

import { useState } from "react"
import { useSpring, animated } from "@react-spring/web"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [hovered, setHovered] = useState(false)

  const buttonSpring = useSpring({
    scale: hovered ? 1.05 : 1,
    config: { tension: 300, friction: 10 },
  })

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden bg-gradient-to-b from-[#F0F9F7] to-white">
      {/* Navigation Bar */}
      <nav className="absolute top-0 left-0 right-0 z-20 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="container mx-auto px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="찾아검진 로고" className="h-10 w-10" />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC]">
              찾아검진
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm font-medium text-gray-600">
            <a href="#features" className="hidden md:inline hover:text-[#2F9A88] transition-colors">특징</a>
            <a href="#process" className="hidden md:inline hover:text-[#2F9A88] transition-colors">운영 절차</a>
            <a href="#consultation-form" className="hidden md:inline hover:text-[#2F9A88] transition-colors">상담 신청</a>
            <a href="/privacy" className="hover:text-[#2F9A88] transition-colors">개인정보처리방침</a>
            <a href="/terms" className="hover:text-[#2F9A88] transition-colors">이용약관</a>
          </div>
        </div>
      </nav>

      {/* Background gradient circles */}
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob" style={{backgroundColor: '#8DD4C5'}}></div>
      <div className="absolute top-40 -right-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000" style={{backgroundColor: '#4BBEAC'}}></div>
      <div className="absolute -bottom-20 left-40 w-96 h-96 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000" style={{backgroundColor: '#2F9A88'}}></div>

      <div className="container mx-auto z-10 mt-20 flex flex-col items-center justify-center max-w-4xl">
        <div className="space-y-8 text-center">
          {/* 큰 로고 - 5배 더 크게 */}
          <div className="mb-8">
            <img src="/logo.svg" alt="찾아검진 로고" className="h-96 w-96 md:h-[500px] md:w-[500px] mx-auto mb-6" />
          </div>
          
          <div className="inline-block px-4 py-2 bg-[#E8F5F2] rounded-full text-[#2F9A88] text-sm font-semibold mb-4">
            ✨ 기업 맞춤형 방문 검진 서비스
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-gray-900">
            <span className="block mb-2">암 조기발견을</span>
            <span className="block mb-2">더 가볍게.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC]">
              액체생검 기반
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            기업 사옥에서 채혈·문진만으로 액체생검 포함<br />
            정밀 혈액검사와 기본 건강지표를 수집합니다.<br />
            <span className="font-semibold text-gray-700">임직원은 이동 없이, HR은 일정·결과·비용을 한 번에</span>
          </p>
          
          <animated.div style={buttonSpring} className="inline-block">
            <Button
              className="text-white px-8 py-4 rounded-full text-lg font-semibold transition-all shadow-lg hover:shadow-xl"
              style={{backgroundColor: '#2F9A88'}}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={scrollToConsultation}
            >
              무료 상담 신청하기 →
            </Button>
          </animated.div>
          
          <div className="flex items-center gap-8 justify-center text-sm text-gray-500 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4BBEAC] rounded-full"></div>
              <span>8대 암종 검사</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4BBEAC] rounded-full"></div>
              <span>15분 소요</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#4BBEAC] rounded-full"></div>
              <span>사내 진행</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-[#2F9A88] bg-opacity-10 p-2 w-10 h-10 ring-1 ring-[#2F9A88] ring-opacity-30 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-[#2F9A88]"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
