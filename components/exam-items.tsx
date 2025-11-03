"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { FlaskConical, Droplet } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ExamItems() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const examItems = [
    {
      icon: <FlaskConical className="w-12 h-12" style={{color: '#2F9A88'}} />,
      title: "액체생검",
      description: "혈액을 통한 비침습적 암 조기 발견 검사",
      features: [
        "8대 암종 동시 검사 (유방암, 폐암, 위암, 간암, 췌장암, 난소암, 대장암, 전립선암)",
        "DNA 이상 패턴 분석",
        "고정밀 검출 기술",
      ],
    },
    {
      icon: <Droplet className="w-12 h-12" style={{color: '#4BBEAC'}} />,
      title: "혈액기능검사",
      description: "기본 건강지표 및 혈액 성분 분석",
      features: [
        "혈액 일반 검사 (백혈구, 적혈구, 헤모글로빈, 혈소판 등)",
        "영양·간기능 검사 (단백질, 알부민, 빌리루빈, 간수치 등)",
        "신장·지질·당뇨 검사 (요소, 크레아티닌, 콜레스테롤, 혈당 등)",
        "빈혈·갑상선·비타민 검사 (철분, 갑상선호르몬, 비타민D 등)",
      ],
    },
  ]

  return (
    <section id="exam-items" className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 bg-gradient-to-b from-white via-[#FAFDFC] to-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E8F5F2] to-[#F0F9F7] rounded-full border border-[#2F9A88]/20 mb-5 sm:mb-6 shadow-sm">
            <span className="text-xs font-semibold text-[#2F9A88] uppercase tracking-wider">검진 항목</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 text-gray-900 tracking-tight px-4">
            검진 항목 소개
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            액체생검과 혈액기능검사를 통해 포괄적인 건강 상태를 확인하세요
          </p>
        </div>

        <div
          ref={ref}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 max-w-5xl mx-auto"
          style={{
            transform: isInView ? "none" : "translateY(30px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          {examItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="h-full border-2 border-gray-200 hover:border-[#2F9A88] hover:shadow-xl transition-all duration-300 shadow-lg bg-white">
                <CardContent className="p-7 sm:p-8 md:p-9">
                  <div className="mb-6 sm:mb-7">
                    <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#F0F9F7] to-[#E8F5F2] mb-5 transition-all duration-300 shadow-sm">
                      <div className="flex items-center justify-center">
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold mb-3 sm:mb-4 text-gray-900 tracking-tight">{item.title}</h3>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-normal mb-6">{item.description}</p>
                  </div>

                  <ul className="space-y-3 sm:space-y-4">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 sm:gap-4 bg-gray-50/50 rounded-lg p-3">
                        <div className="w-1.5 h-1.5 bg-[#2F9A88] rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-800 text-sm sm:text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

