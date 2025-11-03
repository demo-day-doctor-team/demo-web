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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden pt-16 sm:pt-0">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/testalize-me-X_lOGO8Jdw0-unsplash.jpg" 
          alt="배경 이미지" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 via-gray-900/60 to-gray-900/70"></div>
        {/* Subtle accent overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#2F9A88]/10 via-transparent to-[#4BBEAC]/10"></div>
      </div>

      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-white/95 backdrop-blur-xl border-b-2 border-gray-200/60 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 md:py-3 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer">
            <img 
              src="/logo.svg" 
              alt="찾아검진 로고" 
              className="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20"
            />
            <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 tracking-tight group-hover:text-[#2F9A88] transition-colors">
              찾아검진
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6 text-sm font-semibold text-gray-800">
            <a href="#features" className="hidden lg:inline hover:text-[#2F9A88] transition-colors duration-200">특징</a>
            <a href="#process" className="hidden lg:inline hover:text-[#2F9A88] transition-colors duration-200">검진 과정</a>
            <a href="#faq" className="hidden lg:inline hover:text-[#2F9A88] transition-colors duration-200">FAQ</a>
            <a href="#consultation-form" className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC] text-white rounded-xl hover:shadow-lg hover:from-[#1F7A6B] hover:to-[#2F9A88] transition-all duration-200 text-xs sm:text-sm touch-manipulation font-semibold shadow-md">예약하기</a>
          </div>
        </div>
      </nav>

      <div className="container mx-auto relative z-10 mt-24 sm:mt-28 md:mt-32 mb-14 sm:mb-16 md:mb-20 flex flex-col items-center justify-center max-w-6xl">
        <div className="space-y-10 sm:space-y-12 md:space-y-14 text-center w-full">
          {/* Main Title - Professional and clear */}
          <div className="space-y-5 sm:space-y-6">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] text-white tracking-tight px-4 drop-shadow-2xl">
              <span className="block">암 조기발견을</span>
              <span className="block">더 가볍게.</span>
            </h1>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#4BBEAC] tracking-tight px-4 drop-shadow-2xl">
              액체생검 기반
            </h2>
          </div>
          
          {/* Description - Clear and professional */}
          <p className="text-xl sm:text-2xl md:text-3xl text-white/95 max-w-4xl mx-auto leading-relaxed font-normal px-4 drop-shadow-xl">
            집·회사 어디서든 15분 채혈로<br className="hidden sm:inline" />
            암 조기발견 및 정밀 혈액 분석을 제공합니다.
          </p>
          
          {/* CTA Button - Professional and trustworthy */}
          <div className="pt-6 sm:pt-8 px-4">
            <animated.div style={buttonSpring}>
              <Button
                className="w-full sm:w-auto px-10 py-5 sm:py-6 bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC] text-white rounded-xl text-base sm:text-lg md:text-xl font-bold transition-all duration-200 hover:from-[#1F7A6B] hover:to-[#2F9A88] hover:shadow-2xl hover:scale-105 shadow-xl touch-manipulation border border-white/20"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={scrollToConsultation}
              >
                지금 예약하기
                <span className="ml-2 text-lg">→</span>
              </Button>
            </animated.div>
          </div>
          
          {/* Features - Clean and minimal */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 md:gap-8 justify-center text-base sm:text-lg text-white/95 pt-6 sm:pt-8 pb-20 sm:pb-24 px-4">
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 px-6 py-3 rounded-lg shadow-lg">
              <div className="w-2.5 h-2.5 bg-[#4BBEAC] rounded-full"></div>
              <span className="font-semibold">8대 암종 검사</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 px-6 py-3 rounded-lg shadow-lg">
              <div className="w-2.5 h-2.5 bg-[#4BBEAC] rounded-full"></div>
              <span className="font-semibold">15분 소요</span>
            </div>
            <div className="flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/30 px-6 py-3 rounded-lg shadow-lg">
              <div className="w-2.5 h-2.5 bg-[#4BBEAC] rounded-full"></div>
              <span className="font-semibold">원하는 장소</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - Subtle */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-white/70 font-medium">스크롤</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#4BBEAC] to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
