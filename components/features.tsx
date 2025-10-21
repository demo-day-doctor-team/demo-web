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
    <section id="features" className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-white rounded-full text-[#2F9A88] text-sm font-semibold mb-4 shadow-sm">
            주요 특징
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            왜 방문형 건강검진인가
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            직원 참여율을 높이고 업무 손실을 최소화하는 효율적인 건강검진
          </p>
        </div>

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
              className="bg-white p-8 rounded-2xl border border-gray-200 transition-all duration-300 hover:shadow-xl group"
              style={{
                transitionDelay: `${index * 0.1 + 0.2}s`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#4BBEAC'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(47, 154, 136, 0.15)'
                e.currentTarget.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E7EB'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="mb-6 transform transition-transform group-hover:scale-110">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
