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
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 overflow-hidden bg-gradient-to-b from-white via-[#FAFDFC] to-white pt-16 sm:pt-0">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-20 bg-white/98 backdrop-blur-xl border-b-2 border-gray-200/60 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 flex items-center justify-between max-w-6xl">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <img src="/logo.svg" alt="찾아검진 로고" className="h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9" />
            <span className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">
              찾아검진
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-5 md:gap-6 text-sm font-semibold text-gray-800">
            <a href="#features" className="hidden lg:inline hover:text-[#2F9A88] transition-colors duration-200">특징</a>
            <a href="#process" className="hidden lg:inline hover:text-[#2F9A88] transition-colors duration-200">검진 과정</a>
            <a href="#pricing" className="hidden lg:inline hover:text-[#2F9A88] transition-colors duration-200">가격</a>
            <a href="#faq" className="hidden lg:inline hover:text-[#2F9A88] transition-colors duration-200">FAQ</a>
            <a href="#consultation-form" className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC] text-white rounded-xl hover:shadow-lg hover:from-[#1F7A6B] hover:to-[#2F9A88] transition-all duration-200 text-xs sm:text-sm touch-manipulation font-semibold shadow-md">예약하기</a>
          </div>
        </div>
      </nav>

      {/* Warm background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F0F9F7]/50 via-white to-[#FAFDFC] pointer-events-none"></div>

      <div className="container mx-auto z-10 mt-24 sm:mt-28 md:mt-32 mb-14 sm:mb-16 md:mb-20 flex flex-col items-center justify-center max-w-5xl">
        <div className="space-y-7 sm:space-y-8 md:space-y-10 text-center w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 bg-gradient-to-r from-[#E8F5F2] to-[#F0F9F7] rounded-full border-2 border-[#2F9A88]/20 shadow-md">
            <span className="text-xs sm:text-sm font-bold text-[#2F9A88]">개인 맞춤형 액체생검 건강검진</span>
          </div>
          
          {/* Main Title */}
          <div className="space-y-4 sm:space-y-5">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] text-gray-900 tracking-tight px-4">
              <span className="block">암 조기발견을</span>
              <span className="block">더 가볍게.</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#2F9A88] via-[#3AA896] to-[#4BBEAC] tracking-tight px-4">
              액체생검 기반
            </h2>
          </div>
          
          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium px-4">
            집에서, 사무실에서, 원하는 곳 어디서나<br className="hidden sm:inline" />
            15분 채혈만으로 액체생검 포함 정밀 혈액검사와<br className="hidden sm:inline" />
            <span className="font-semibold text-gray-800">기본 건강지표를 간편하게 확인하세요</span>
          </p>
          
          {/* CTA Button */}
          <div className="pt-4 sm:pt-6 px-4">
            <animated.div style={buttonSpring}>
              <Button
                className="w-full sm:w-auto px-10 py-5 sm:py-4.5 bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC] text-white rounded-xl text-base sm:text-lg font-bold transition-all duration-200 hover:from-[#1F7A6B] hover:to-[#2F9A88] hover:shadow-xl shadow-lg touch-manipulation"
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
                onClick={scrollToConsultation}
              >
                지금 예약하기
                <span className="ml-2 text-lg">→</span>
              </Button>
            </animated.div>
          </div>
          
          {/* Features */}
          <div className="flex flex-col sm:flex-row items-center gap-5 sm:gap-6 md:gap-8 justify-center text-sm sm:text-base text-gray-700 pt-5 sm:pt-6 px-4">
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-[#2F9A88] rounded-full"></div>
              <span className="font-semibold">8대 암종 검사</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-[#2F9A88] rounded-full"></div>
              <span className="font-semibold">15분 소요</span>
            </div>
            <div className="flex items-center gap-2.5 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-gray-200 shadow-sm">
              <div className="w-2 h-2 bg-[#2F9A88] rounded-full"></div>
              <span className="font-semibold">원하는 장소</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-gray-400 font-medium">스크롤</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#2F9A88] to-transparent"></div>
        </div>
      </div>
    </section>
  )
}
