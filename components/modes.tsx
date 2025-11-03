"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

export default function Modes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })


  return (
    <section id="process" className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 relative bg-white">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E8F5F2] to-[#F0F9F7] rounded-full border-2 border-[#2F9A88]/20 mb-5 sm:mb-6 shadow-sm">
            <span className="text-xs font-semibold text-[#2F9A88] uppercase tracking-wider">검진 과정</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 text-gray-900 tracking-tight px-4">
            검진 프로세스
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            예약부터 결과까지, 간편하고 체계적인 개인 맞춤 검진 과정
          </p>
        </div>

        <div
          ref={ref}
          className="bg-white"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {/* 검진 프로세스 4단계 */}
          <div className="mb-16 sm:mb-20 md:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5 sm:gap-6">
              {[
                { step: "01", title: "온라인 예약", desc: "날짜·시간·장소 선택, 동의서 및 문진 작성" },
                { step: "02", title: "방문 검진", desc: "전문가가 지정 장소 방문, 15분 내 채혈 완료" },
                { step: "03", title: "검사 분석", desc: "인증된 검사실 분석, 전문 의료진 결과 검토" },
                { step: "04", title: "리포트 & 상담", desc: "개인 맞춤 리포트 제공, 필요시 전문 의료진 상담 연계" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  <Card className="bg-white border-2 border-gray-200 hover:border-[#2F9A88] hover:shadow-xl transition-all duration-300 group shadow-md">
                    <CardContent className="p-6 sm:p-7 md:p-8 text-center">
                      <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5 transition-all duration-300 group-hover:scale-110 bg-gradient-to-br from-[#2F9A88] to-[#4BBEAC] shadow-lg">
                        <span className="text-white font-extrabold text-base">{item.step}</span>
                      </div>
                      <h4 className="text-lg sm:text-xl font-extrabold mb-3 text-gray-900 group-hover:text-[#2F9A88] transition-colors tracking-tight">{item.title}</h4>
                      <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-normal">{item.desc}</p>
                    </CardContent>
                  </Card>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 transform -translate-y-1/2 bg-[#2F9A88]"></div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8 sm:mt-10">
              <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                * 액체생검은 임상적 필요성과 적합성에 따라 제공되며, 최종 해석은 전문 의료진 상담 후
                결정하시기 바랍니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
