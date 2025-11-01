"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Check, Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Pricing() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const packages = [
    {
      name: "기본 패키지",
      price: "400,000",
      period: "원",
      description: "8대 암종 액체생검 기본 검사",
      features: [
        "8대 암종 액체생검",
        "개인 맞춤 리포트 제공",
        "검사 결과 상담 제공",
      ],
      popular: false,
      color: "from-[#8DD4C5] to-[#4BBEAC]",
    },
    {
      name: "프리미엄 패키지",
      price: "450,000",
      period: "원",
      description: "기본 + 추가 정밀 검사",
      features: [
        "8대 암종 액체생검",
        "추가 정밀 혈액검사",
        "개인 맞춤 리포트 제공",
        "전문의 결과 해석",
        "전문 의료진 상담 연계",
      ],
      popular: true,
      color: "from-[#2F9A88] to-[#4BBEAC]",
    },
  ]

  const scrollToForm = () => {
    const element = document.getElementById("consultation-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="pricing" className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 relative bg-gradient-to-b from-white via-[#FAFDFC] to-white">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div
          ref={ref}
          className="text-center mb-14 sm:mb-16 md:mb-20"
          style={{
            transform: isInView ? "none" : "translateY(30px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E8F5F2] to-[#F0F9F7] rounded-full border-2 border-[#2F9A88]/20 mb-5 sm:mb-6 shadow-sm">
            <span className="text-xs font-semibold text-[#2F9A88] uppercase tracking-wider">가격 안내</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 text-gray-900 tracking-tight px-4">
            검진 패키지
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            개인 건강 관리에 최적화된 검진 패키지를 선택하세요
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-7 md:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-[#2F9A88] text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg">
                    <Star className="w-3 h-3 fill-white" />
                    인기 패키지
                  </div>
                </div>
              )}
              <Card
                className={`h-full border-2 transition-all duration-300 shadow-lg ${
                  pkg.popular
                    ? "border-[#2F9A88] shadow-2xl bg-white ring-2 ring-[#2F9A88]/20"
                    : "border-gray-200 hover:border-[#2F9A88] hover:shadow-xl bg-white"
                }`}
              >
                <CardContent className="p-7 sm:p-8 md:p-9">
                  <div className="text-center mb-7 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-extrabold mb-3 text-gray-900 tracking-tight">{pkg.name}</h3>
                    <p className="text-gray-700 text-sm sm:text-base mb-5 sm:mb-6 font-normal">{pkg.description}</p>
                    <div className="mb-5 sm:mb-6">
                      <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">{pkg.price}</span>
                      <span className="text-gray-700 ml-2 text-sm sm:text-base font-medium">{pkg.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 sm:space-y-4 mb-7 sm:mb-8">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 sm:gap-4 bg-gray-50/50 rounded-lg p-3">
                        <Check
                          className={`w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5 ${
                            pkg.popular ? "text-[#2F9A88]" : "text-gray-500"
                          }`}
                        />
                        <span className="text-gray-800 text-sm sm:text-base font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={scrollToForm}
                    className={`w-full py-4 text-base sm:text-lg font-bold rounded-xl transition-all duration-200 touch-manipulation ${
                      pkg.popular
                        ? "bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC] text-white hover:from-[#1F7A6B] hover:to-[#2F9A88] shadow-lg hover:shadow-xl"
                        : "bg-white text-gray-900 border-2 border-gray-300 hover:bg-gradient-to-r hover:from-[#2F9A88] hover:to-[#4BBEAC] hover:text-white hover:border-[#2F9A88] hover:shadow-lg"
                    }`}
                  >
                    예약하기
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-gray-500">
            * 모든 패키지는 방문 검진 비용이 포함되어 있습니다.<br />
            * 가격은 변동될 수 있으며, 최종 가격은 예약 시 확인됩니다.
          </p>
        </div>
      </div>
    </section>
  )
}

