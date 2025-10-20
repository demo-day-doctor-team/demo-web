"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Activity, Users, MapPin } from "lucide-react"

export default function Features() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const features = [
    {
      icon: <Activity className="w-12 h-12" style={{color: '#8DD4C5'}} />,
      title: "참여율 +25~40%p",
      description: "사내에서 15분 이내 진행. 이동·대기 시간 제거로 높은 참여율 달성",
    },
    {
      icon: <Users className="w-12 h-12" style={{color: '#4BBEAC'}} />,
      title: "업무 손실 최소화",
      description: "슬롯 기반 예약/동선 설계로 팀 운영 부담 감소",
    },
    {
      icon: <MapPin className="w-12 h-12" style={{color: '#2F9A88'}} />,
      title: "8대 암종 대상",
      description: "대장암, 위암, 간암, 췌장암, 폐암, 유방암, 난소암, 전립선암 액체생검",
    },
  ]

  return (
    <section className="py-20 px-4 bg-black bg-opacity-60">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8DD4C5] to-[#2F9A88]">
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
              className="bg-gray-900 p-8 rounded-xl border border-gray-800 transition-all duration-300 hover:shadow-lg"
              style={{
                transitionDelay: `${index * 0.1 + 0.2}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4BBEAC'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(75, 190, 172, 0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#374151'
                e.currentTarget.style.boxShadow = 'none'
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
