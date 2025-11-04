"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Home, Clock, FileText } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Home className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" style={{color: '#8DD4C5'}} />,
      title: "집에서 받는 검진",
      description: "이동 시간 제로, 원하는 장소에서 편리하게 검진을 받아보세요",
    },
    {
      icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" style={{color: '#4BBEAC'}} />,
      title: "15분 빠른 검사",
      description: "간단한 채혈만으로 정밀 검사 완료. 바쁜 일상 속에서도 쉽게",
    },
    {
      icon: <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" style={{color: '#2F9A88'}} />,
      title: "개인 맞춤 리포트",
      description: "8대 암종 검사 결과를 상세하게 분석한 개인 맞춤 리포트 제공",
    },
  ]

  return (
    <section id="features" className="py-12 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-white relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-10">
        {/* 텍스트와 이미지 컨테이너 - 모바일: 세로 배치, 데스크톱: 가로 배치 */}
        <div className="relative mb-8 sm:mb-14 md:mb-16 lg:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 lg:gap-12">
            {/* 텍스트 섹션 - 왼쪽 */}
            <div className="flex-1 max-w-md lg:max-w-lg">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-900 leading-relaxed font-normal mb-4 sm:mb-6 md:mb-8">
                나이가 들수록 건강은 '그때그때 관리'가 아니라 미리 챙기는 습관이 되어야 합니다.
              </p>
              <div className="space-y-2 sm:space-y-3 md:space-y-4">
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal">
                  액체생검으로 혈액 속 암 신호를 조기에 확인하고,
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal">
                  이제는 결과를 한 번만 보고 지나치는 것이 아니라
                </p>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed font-normal">
                  앱에서 손쉽게 변화 추이를 살펴보세요.
                </p>
              </div>
            </div>

            {/* 이미지 - 모바일: 아래, 데스크톱: 오른쪽 */}
            <div className="flex-shrink-0 w-full lg:w-1/2 lg:max-w-2xl lg:absolute lg:top-0 lg:left-[50%] lg:z-0 py-4 sm:py-8 md:py-12 lg:py-16 lg:scale-110">
              <img 
                src="/image-Photoroom (35).png" 
                alt="찾아검진 특징" 
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

        <div className="text-center mb-8 sm:mb-14 md:mb-16 lg:mb-20 lg:pt-[350px] pt-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-gradient-to-r from-[#E8F5F2] to-[#F0F9F7] rounded-full border-2 border-[#2F9A88]/20 mb-3 sm:mb-5 md:mb-6 shadow-sm">
            <span className="text-xs font-semibold text-[#2F9A88] uppercase tracking-wider">주요 특징</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-gray-900 mb-2 sm:mb-4 md:mb-5 tracking-tight px-4">
            왜 찾아검진인가
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            편리함과 정확성을 갖춘 개인 맞춤형 액체생검 건강검진
          </p>
        </div>

        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-7 lg:gap-8"
          style={{
            transform: isInView ? "none" : "translateY(30px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-5 sm:p-7 md:p-8 lg:p-9 rounded-2xl border-2 border-gray-200 shadow-md transition-all duration-300 hover:border-[#2F9A88] hover:shadow-xl group"
              style={{
                transitionDelay: `${index * 0.1}s`,
              }}
            >
              <div className="mb-4 sm:mb-6 md:mb-7 lg:mb-8 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F0F9F7] to-[#E8F5F2] transition-all duration-300 group-hover:scale-110 group-hover:from-[#E8F5F2] group-hover:to-[#D4F1E8] shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-extrabold mb-2 sm:mb-3 md:mb-4 text-gray-900 tracking-tight">{feature.title}</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed font-normal">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
