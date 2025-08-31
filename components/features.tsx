"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Activity, Users, MapPin } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Activity className="w-12 h-12 text-blue-400" />,
      title: "참여율 +25~40%p",
      description: "사내에서 15분 이내 진행. 이동·대기 시간 제거로 높은 참여율 달성",
    },
    {
      icon: <Users className="w-12 h-12 text-blue-500" />,
      title: "업무 손실 최소화",
      description: "슬롯 기반 예약/동선 설계로 팀 운영 부담 감소",
    },
    {
      icon: <MapPin className="w-12 h-12 text-blue-600" />,
      title: "8대 암종 대상",
      description: "대장암, 위암, 간암, 췌장암, 폐암, 유방암, 난소암, 전립선암 액체생검",
    },
  ]

  return (
    <section className="py-20 px-4 bg-black bg-opacity-60">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            왜 방문형 건강검진인가
          </span>
        </h2>

        <div
          ref={ref}
          className="grid md:grid-cols-3 gap-8"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20"
              style={{
                transitionDelay: `${index * 0.1 + 0.2}s`,
              }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
