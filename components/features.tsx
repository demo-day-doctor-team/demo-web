"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Home, Clock, FileText } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Home className="w-12 h-12" style={{color: '#8DD4C5'}} />,
      title: "집에서 받는 검진",
      description: "이동 시간 제로, 원하는 장소에서 편리하게 검진을 받아보세요",
    },
    {
      icon: <Clock className="w-12 h-12" style={{color: '#4BBEAC'}} />,
      title: "15분 빠른 검사",
      description: "간단한 채혈만으로 정밀 검사 완료. 바쁜 일상 속에서도 쉽게",
    },
    {
      icon: <FileText className="w-12 h-12" style={{color: '#2F9A88'}} />,
      title: "개인 맞춤 리포트",
      description: "8대 암종 검사 결과를 상세하게 분석한 개인 맞춤 리포트 제공",
    },
  ]

  return (
    <section id="features" className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E8F5F2] to-[#F0F9F7] rounded-full border-2 border-[#2F9A88]/20 mb-5 sm:mb-6 shadow-sm">
            <span className="text-xs font-semibold text-[#2F9A88] uppercase tracking-wider">주요 특징</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-5 tracking-tight px-4">
            왜 찾아검진인가
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            편리함과 정확성을 갖춘 개인 맞춤형 액체생검 건강검진
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
          style={{
            transform: isInView ? "none" : "translateY(30px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-7 sm:p-8 md:p-9 rounded-2xl border-2 border-gray-200 shadow-md transition-all duration-300 hover:border-[#2F9A88] hover:shadow-xl group"
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="mb-6 sm:mb-7 md:mb-8 w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F0F9F7] to-[#E8F5F2] transition-all duration-300 group-hover:scale-110 group-hover:from-[#E8F5F2] group-hover:to-[#D4F1E8] shadow-sm">
                <div className="transform transition-transform duration-300 scale-100">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold mb-3 sm:mb-4 text-gray-900 tracking-tight">{feature.title}</h3>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
