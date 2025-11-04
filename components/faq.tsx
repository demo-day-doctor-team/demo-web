"use client"

import { useState, useRef } from "react"
import { useInView } from "framer-motion"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function FAQ() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "검진은 어디서 받나요?",
      answer: "고객님이 지정하신 장소(집, 사무실 등)로 경험 많은 전문가가 직접 방문하여 검진을 진행합니다. 별도의 병원 방문이 필요 없어 편리합니다.",
    },
    {
      question: "검진 결과는 언제 나오나요?",
      answer: "검체 채취 후 약 2-3주 정도 소요되며, 완료되면 이메일 또는 문자로 알려드립니다. 개인 맞춤 리포트는 온라인으로 확인하실 수 있습니다.",
    },
    {
      question: "병원 검진과 뭐가 다른가요?",
      answer: "기존 병원 검진은 방문과 대기 시간이 필요하지만, 찾아검진은 원하는 장소에서 15분 만에 검진을 완료할 수 있습니다. 또한 액체생검을 통한 8대 암종 조기 발견이 가능합니다.",
    },
    {
      question: "보험 적용되나요?",
      answer: "액체생검은 아직 건강보험 적용이 되지 않습니다. 다만, 일부 건강검진 항목은 개인 건강검진에 따라 일부 적용될 수 있습니다. 자세한 사항은 예약 시 문의해주세요.",
    },
    {
      question: "어떤 검사를 받을 수 있나요?",
      answer: "8대 암종(대장암, 위암, 간암, 췌장암, 폐암, 유방암, 난소암, 전립선암) 액체생검과 기본 건강지표 검사를 받으실 수 있습니다. 프리미엄 패키지의 경우 추가 정밀 검사가 포함됩니다.",
    },
    {
      question: "예약 후 취소할 수 있나요?",
      answer: "검진 예정일 3일 전까지 취소하시면 전액 환불됩니다. 이후 취소 시에는 환불 규정에 따라 처리되니, 자세한 사항은 고객센터로 문의해주세요.",
    },
    {
      question: "검진 전 준비사항이 있나요?",
      answer: "현재 복용 중인 약물이 있다면 반드시 사전에 고지해주시기 바랍니다. 검사 2~3일 전부터는 음주와 과식을 피하고, 특히 기름진 음식은 삼가시기 바랍니다. 충분한 휴식을 취하는 것이 좋습니다. 자세한 준비사항은 예약 확정 후 안내해드립니다.",
    },
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 relative bg-gradient-to-b from-[#FAFDFC] via-white to-[#FAFDFC]">
      <div className="container mx-auto relative z-10 max-w-4xl">
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
            <span className="text-xs font-semibold text-[#2F9A88] uppercase tracking-wider">자주 묻는 질문</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 text-gray-900 tracking-tight px-4">
            FAQ
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto font-normal leading-relaxed px-4">
            궁금하신 사항을 빠르게 확인하세요
          </p>
        </div>

        <div className="space-y-4 sm:space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.05 }}
            >
              <Card
                className={`border-2 transition-all duration-200 cursor-pointer touch-manipulation shadow-md ${
                  openIndex === index
                    ? "border-[#2F9A88] shadow-xl bg-white ring-2 ring-[#2F9A88]/20"
                    : "border-gray-200 hover:border-[#2F9A88] hover:shadow-lg bg-white"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <CardContent className="p-5 sm:p-6 md:p-7">
                  <div className="flex items-center justify-between gap-4 sm:gap-5">
                    <h3
                      className={`text-base sm:text-lg md:text-xl font-bold flex-1 ${
                        openIndex === index ? "text-[#2F9A88]" : "text-gray-900"
                      }`}
                    >
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6 text-[#2F9A88]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-gray-500" />
                      )}
                    </div>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed pt-4 sm:pt-5 mt-4 sm:mt-5 border-t-2 border-gray-200 font-normal">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12 px-4">
          <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">더 궁금한 사항이 있으신가요?</p>
          <motion.a
            href="#consultation-form"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block text-sm sm:text-base text-[#2F9A88] font-semibold hover:underline touch-manipulation"
          >
            예약 및 문의하기 →
          </motion.a>
        </div>
      </div>
    </section>
  )
}

