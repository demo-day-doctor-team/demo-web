"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const testimonials = [
    {
      name: "김○○",
      age: "40대",
      location: "서울",
      rating: 5,
      text: "회사 일이 바빠서 병원 가기 힘들었는데, 사무실에서 15분만에 검진받을 수 있어서 정말 편했습니다. 결과도 자세히 나와서 만족합니다.",
      date: "2024.01",
    },
    {
      name: "이○○",
      age: "50대",
      location: "경기",
      rating: 5,
      text: "집에서 받는 검진이라 부담 없었고, 전문가분이 친절하게 설명해주셔서 좋았습니다. 특히 리포트가 상세해서 이해하기 쉬웠어요.",
      date: "2024.01",
    },
    {
      name: "박○○",
      age: "30대",
      location: "인천",
      rating: 5,
      text: "가족 암 가족력이 있어서 정기적으로 검진받고 싶었는데, 이렇게 편하게 받을 수 있어서 앞으로도 계속 이용할 예정입니다.",
      date: "2023.12",
    },
  ]

  return (
    <section id="testimonials" className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 relative bg-white">
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
            <span className="text-xs font-semibold text-[#2F9A88] uppercase tracking-wider">후기</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 text-gray-900 tracking-tight px-4">
            검진 받은 후기
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            실제로 검진을 받으신 분들의 솔직한 후기를 확인해보세요
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.15 }}
            >
              <Card className="h-full bg-white border-2 border-gray-200 hover:border-[#2F9A88] hover:shadow-xl transition-all duration-300 shadow-md">
                <CardContent className="p-6 sm:p-7 md:p-8">
                  <div className="flex items-center gap-1 mb-4 sm:mb-5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 sm:w-6 sm:h-6 fill-[#FBBF24] text-[#FBBF24]"
                      />
                    ))}
                  </div>
                  
                  <div className="mb-4 sm:mb-5 relative">
                    <Quote className="w-8 h-8 sm:w-10 sm:h-10 text-[#4BBEAC] opacity-25 absolute -top-3 -left-3" />
                    <p className="text-base sm:text-lg text-gray-800 leading-relaxed relative z-10 pl-4 sm:pl-5 font-normal">
                      {testimonial.text}
                    </p>
                  </div>

                  <div className="border-t-2 border-gray-200 pt-4 sm:pt-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-base sm:text-lg font-bold text-gray-900">{testimonial.name}</p>
                        <p className="text-sm sm:text-base text-gray-600 font-medium">
                          {testimonial.age} · {testimonial.location}
                        </p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-500 font-medium">{testimonial.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

