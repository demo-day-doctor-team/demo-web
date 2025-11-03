"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Calendar, MapPin, FileText, CheckCircle, Users, FlaskConical, FileBarChart, MessageCircle, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts"

export default function Modes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentReportIndex, setCurrentReportIndex] = useState(0)

  const reportSamples = [
    { image: "/KakaoTalk_20251031_215234749_01.png", alt: "암 분석 결과 리포트" },
    { image: "/KakaoTalk_20251031_215234749_02.png", alt: "신장·대사 분석 리포트" },
    { image: "/KakaoTalk_20251031_215234749_03.png", alt: "DNA 분석 결과 리포트" }
  ]

  const modes = [
    {
      id: "booking",
      icon: <Calendar className="w-6 h-6" />,
      title: "예약",
      description: "온라인으로 간편하게 날짜와 장소를 선택하세요",
      image: "/placeholder-6fey1.png",
      details: [
        { icon: <CheckCircle className="w-5 h-5 text-green-400" />, text: "날짜 및 시간 선택" },
        { icon: <CheckCircle className="w-5 h-5 text-green-400" />, text: "검진 장소 지정 (집/사무실)" },
        { icon: <CheckCircle className="w-5 h-5 text-green-400" />, text: "온라인 동의서 및 문진 작성" },
      ],
    },
    {
      id: "onsite",
      icon: <MapPin className="w-6 h-6" />,
      title: "방문 검진",
      description: "경험 많은 전문가가 지정하신 장소로 방문하여 검진을 진행합니다",
      image: "/placeholder-hu8ng.png",
      details: [
        { icon: <Users className="w-5 h-5" style={{color: '#4BBEAC'}} />, text: "경험 많은 간호사가 직접 방문" },
        { icon: <Clock className="w-5 h-5" style={{color: '#4BBEAC'}} />, text: "15분 내 채혈 완료" },
        { icon: <FlaskConical className="w-5 h-5" style={{color: '#4BBEAC'}} />, text: "안전하고 정확한 검체 채취" },
      ],
    },
    {
      id: "results",
      icon: <FileText className="w-6 h-6" />,
      title: "리포트",
      description: "개인 맞춤 리포트 제공 및 필요시 의료진 상담 연계",
      image: "/placeholder-j5yjd.png",
      details: [
        { icon: <FileBarChart className="w-5 h-5 text-purple-400" />, text: "2-3주 내 상세 분석 완료" },
        { icon: <CheckCircle className="w-5 h-5 text-purple-400" />, text: "8대 암종 개인 맞춤 리포트 제공" },
        { icon: <MessageCircle className="w-5 h-5 text-purple-400" />, text: "필요시 전문 의료진 상담 연계" },
      ],
    },
  ]


  return (
    <section id="process" className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 relative bg-white">
      <div className="container mx-auto relative z-10 max-w-6xl">
        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E8F5F2] to-[#F0F9F7] rounded-full border border-[#2F9A88]/20 mb-5 sm:mb-6 shadow-sm">
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
                    <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 transform -translate-y-1/2" style={{backgroundColor: '#2F9A88'}}></div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-8">
              <p className="text-xs text-gray-500">
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
