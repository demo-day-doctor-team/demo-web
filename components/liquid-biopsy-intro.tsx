"use client"

import { useRef, useState } from "react"
import { useInView } from "framer-motion"
import { motion, AnimatePresence } from "framer-motion"
import { FlaskConical, Search, FileCheck, Shield, TrendingUp, AlertCircle, CheckCircle, XCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function LiquidBiopsyIntro() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)

  const cards = [
    {
      id: "intro",
      title: "액체생검이란?",
      description: "혈액 속 DNA 조각을 분석해 암의 초기 신호를 찾는 기술입니다. 내시경이나 방사선 노출 없이 한 번의 채혈로 여러 암을 함께 확인합니다.",
      image: "/nano-banana-2025-11-03T17-47-04.png",
      content: null,
    },
    {
      id: "analysis",
      title: "무엇을 분석하나요?",
      description: "메틸레이션 패턴, 복제수 변화, DNA 절편화 등 암에서 흔히 보이는 신호를 NGS+AI로 통합 점수화합니다.",
      image: "/placeholder-analysis.jpg", // 이미지 경로를 여기에 추가하세요
      items: [
        { title: "메틸레이션 패턴", desc: "DNA 메틸화 상태 분석", icon: <Search className="w-6 h-6" style={{color: '#2F9A88'}} /> },
        { title: "복제수 변화", desc: "유전자 복제수 변이 검출", icon: <TrendingUp className="w-6 h-6" style={{color: '#4BBEAC'}} /> },
        { title: "DNA 절편화", desc: "암세포 DNA 파편 패턴 분석", icon: <FlaskConical className="w-6 h-6" style={{color: '#2F9A88'}} /> },
      ],
    },
    {
      id: "results",
      title: "결과 해석",
      description: "액체생검 결과는 미검출, 의심, 검출 세 가지로 분류됩니다.",
      image: "/placeholder-results.jpg", // 이미지 경로를 여기에 추가하세요
      items: [
        { type: "미검출", icon: <CheckCircle className="w-8 h-8 text-green-500" />, desc: "현재 신호 없음", action: "정기검진 권장", color: "green" },
        { type: "의심", icon: <AlertCircle className="w-8 h-8 text-amber-500" />, desc: "일부 신호", action: "전문의 상담 및 권장 진단검사", color: "amber" },
        { type: "검출", icon: <XCircle className="w-8 h-8 text-red-500" />, desc: "뚜렷한 신호", action: "신속한 확진검사 권고", color: "red" },
      ],
    },
    {
      id: "reliability",
      title: "신뢰할 수 있나요?",
      description: "임상 평가에서 확인된 검증된 성능 지표입니다. (선별검사이며, 최종 진단은 별도 확진검사로 이뤄집니다.)",
      image: "/placeholder-reliability.jpg", // 이미지 경로를 여기에 추가하세요
      stats: [
        { label: "특이도", value: "95.7%", desc: "건강한 사람을 정확히 판별" },
        { label: "민감도", value: "85.6%", desc: "암을 찾아내는 능력" },
        { label: "암종 예측 정확도", value: "81.1%", desc: "어떤 암인지 정확히 예측" },
      ],
    },
  ]

  const nextCard = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1))
  }

  const prevCard = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1))
  }

  const goToCard = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section id="liquid-biopsy" className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 relative bg-gradient-to-b from-white via-[#FAFDFC] to-white">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-12 sm:mb-14 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E8F5F2] to-[#F0F9F7] rounded-full border border-[#2F9A88]/20 mb-5 sm:mb-6 shadow-sm">
            <span className="text-xs font-semibold text-[#2F9A88] uppercase tracking-wider">액체생검 기술</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 text-gray-900 tracking-tight px-4">
            액체생검 완전 이해하기
          </h2>
        </div>

        <div
          ref={ref}
          className="relative"
          style={{
            transform: isInView ? "none" : "translateY(30px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          {/* 카드 캐러셀 */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full"
              >
                <Card className="border-0 shadow-2xl overflow-hidden bg-white h-[450px] sm:h-[500px] md:h-[550px]">
                  <div className="grid md:grid-cols-2 gap-0 h-full">
                    {/* 이미지 영역 */}
                    <div className="relative h-full bg-gradient-to-br from-[#2F9A88] to-[#4BBEAC] overflow-hidden">
                      {cards[currentIndex].image && !cards[currentIndex].image.includes('placeholder') ? (
                        <>
                          <img 
                            src={cards[currentIndex].image} 
                            alt={cards[currentIndex].title}
                            className="w-full h-full object-cover opacity-90"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                        </>
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center text-white/80">
                            <FileCheck className="w-16 h-16 mx-auto mb-4 opacity-50" />
                            <p className="text-sm font-medium">이미지를 추가하세요</p>
                          </div>
                        </div>
                      )}
                    </div>

                    {/* 콘텐츠 영역 */}
                    <CardContent className="p-8 sm:p-10 md:p-12 flex flex-col justify-center h-full">
                      <div className="mb-4 sm:mb-5">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#2F9A88]/10 rounded-full mb-3 sm:mb-4">
                          <span className="text-xs font-semibold text-[#2F9A88]">
                            {currentIndex + 1} / {cards.length}
                          </span>
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-gray-900 tracking-tight">
                          {cards[currentIndex].title}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-5">
                          {cards[currentIndex].description}
                        </p>
                      </div>

                      {/* 카드별 콘텐츠 */}
                      {cards[currentIndex].id === "intro" && (
                        <div className="flex items-center gap-4 text-gray-700">
                          <div className="flex-1 space-y-2">
                            <div className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-[#2F9A88] mt-0.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base">내시경 불필요</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-[#2F9A88] mt-0.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base">방사선 노출 없음</span>
                            </div>
                            <div className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-[#2F9A88] mt-0.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base">한 번의 채혈로 다중 암 검사</span>
                            </div>
                          </div>
                        </div>
                      )}

                      {cards[currentIndex].id === "analysis" && cards[currentIndex].items && (
                        <div className="space-y-3">
                          {cards[currentIndex].items.map((item: any, idx: number) => (
                            <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#F0F9F7] to-[#E8F5F2] flex items-center justify-center flex-shrink-0">
                                {item.icon}
                              </div>
                              <div>
                                <h4 className="font-bold text-base text-gray-900 mb-0.5">{item.title}</h4>
                                <p className="text-sm text-gray-700">{item.desc}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {cards[currentIndex].id === "results" && cards[currentIndex].items && (
                        <div className="grid grid-cols-3 gap-3">
                          {cards[currentIndex].items.map((item: any, idx: number) => (
                            <div 
                              key={idx} 
                              className={`p-3 rounded-lg text-center border-2 transition-all ${
                                item.color === 'green' ? 'border-green-200 bg-green-50/50' :
                                item.color === 'amber' ? 'border-amber-200 bg-amber-50/50' :
                                'border-red-200 bg-red-50/50'
                              }`}
                            >
                              <div className="flex justify-center mb-1.5">{item.icon}</div>
                              <div className={`font-bold text-base mb-1 ${
                                item.color === 'green' ? 'text-green-700' :
                                item.color === 'amber' ? 'text-amber-700' :
                                'text-red-700'
                              }`}>
                                {item.type}
                              </div>
                              <p className="text-xs text-gray-600 mb-1.5">{item.desc}</p>
                              <p className={`text-xs font-semibold ${
                                item.color === 'green' ? 'text-green-800' :
                                item.color === 'amber' ? 'text-amber-800' :
                                'text-red-800'
                              }`}>
                                {item.action}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {cards[currentIndex].id === "reliability" && cards[currentIndex].stats && (
                        <div className="grid grid-cols-1 gap-3">
                          {cards[currentIndex].stats.map((stat: any, idx: number) => (
                            <div key={idx} className="bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC] rounded-lg p-4 text-white">
                              <div className="flex items-center justify-between mb-1">
                                <span className="text-base font-semibold">{stat.label}</span>
                                <span className="text-2xl font-extrabold">{stat.value}</span>
                              </div>
                              <p className="text-xs text-white/90">{stat.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* 네비게이션 버튼 */}
            <button
              onClick={prevCard}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 border border-gray-200 z-10 backdrop-blur-sm hover:scale-110"
              aria-label="이전 카드"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextCard}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full shadow-xl flex items-center justify-center transition-all duration-200 border border-gray-200 z-10 backdrop-blur-sm hover:scale-110"
              aria-label="다음 카드"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>
          </div>

          {/* 인디케이터 */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => goToCard(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#2F9A88] w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`카드 ${index + 1}로 이동`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

