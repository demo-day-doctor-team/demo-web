"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { CheckCircle, AlertTriangle, XCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ReportSamples() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const reports = [
    {
      status: "미검출",
      color: "green",
      icon: <CheckCircle className="w-8 h-8" />,
      description: "암 관련 시그널이 관찰되지 않음. 정기 검진 권장.",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
      iconColor: "text-green-400",
    },
    {
      status: "의심",
      color: "yellow",
      icon: <AlertTriangle className="w-8 h-8" />,
      description: "암 존재 가능성 10~29% 예측. 전문의 상담 권장.",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-500/30",
      iconColor: "text-yellow-400",
    },
    {
      status: "검출",
      color: "red",
      icon: <XCircle className="w-8 h-8" />,
      description: "암 존재 가능성 30~60% 예측. 빠른 진단검사 필요.",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-500/30",
      iconColor: "text-red-400",
    },
  ]

  return (
    <section id="report" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              리포트 샘플
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">미검출 · 의심 · 검출 상태별 리포트 예시</p>
        </div>

        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Card
                  className={`${report.bgColor} ${report.borderColor} border-2 hover:scale-105 transition-transform`}
                >
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <div className={`${report.iconColor} mb-4 flex justify-center`}>{report.icon}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{report.status}</h3>
                      <p className="text-gray-300 text-sm">{report.description}</p>
                    </div>

                    {/* 그래프 placeholder */}
                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                      <div className="h-32 bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-gray-400 text-sm">그래프 영역</span>
                      </div>
                    </div>

                    <div className="text-center">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 py-2 rounded-lg font-medium text-white ${
                          report.color === "green"
                            ? "bg-green-600 hover:bg-green-700"
                            : report.color === "yellow"
                              ? "bg-yellow-600 hover:bg-yellow-700"
                              : "bg-red-600 hover:bg-red-700"
                        }`}
                      >
                        상세 보기
                      </motion.button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-xs text-gray-500 max-w-3xl mx-auto">
              * 화면은 예시이며 실제 해석은 전문 의료진 상담과 함께 제공됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
