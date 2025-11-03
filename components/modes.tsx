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
          className="bg-white space-y-16 sm:space-y-20 md:space-y-24"
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          {/* 예약 섹션 */}
          <div className="flex flex-col justify-center pt-0 bg-white">
                        <div className="text-center mb-10 sm:mb-12 bg-white -mt-2">
                          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 sm:mb-4 text-gray-900 tracking-tight">
                            전체 검진 과정
                          </h3>
                          <p className="text-base sm:text-lg text-gray-700 font-normal">4단계로 구성된 간편한 개인 맞춤 검진</p>
                        </div>

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

          {/* 리포트 섹션 */}
          <div className="grid md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-start bg-white pt-0">
            <div className="order-2 md:order-1 bg-white -mt-2">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-5 text-gray-900 tracking-tight">{modes.find(m => m.id === "results")?.title}</h3>
              <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-7 leading-relaxed font-normal">{modes.find(m => m.id === "results")?.description}</p>
              <div className="space-y-4 sm:space-y-5">
                {modes.find(m => m.id === "results")?.details.map((detail, index) => (
                  <div key={index} className="flex items-start gap-4 sm:gap-5">
                    <div className="mt-0.5 flex-shrink-0 scale-100">
                      {detail.icon}
                    </div>
                    <span className="text-base sm:text-lg text-gray-800 leading-relaxed font-medium">{detail.text}</span>
                  </div>
                ))}
              </div>
            </div>
                           
            {/* 오른쪽: 리포트 샘플 (이미지) */}
            <div className="relative mt-8 md:mt-0 order-1 md:order-2 flex items-start">
                             <div className="relative max-w-[200px] sm:max-w-[240px] md:max-w-[280px] mx-auto scale-[0.85] sm:scale-[0.90] md:scale-[0.95] origin-top">
                               {/* 네비게이션 버튼 */}
                               <button 
                                 onClick={() => setCurrentReportIndex(prev => prev === 0 ? reportSamples.length - 1 : prev - 1)}
                                 className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white hover:bg-gray-50 text-gray-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 border border-gray-200 z-10"
                               >
                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                 </svg>
                               </button>
                               <button 
                                 onClick={() => setCurrentReportIndex(prev => prev === reportSamples.length - 1 ? 0 : prev + 1)}
                                 className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-10 h-10 bg-white hover:bg-gray-50 text-gray-700 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 border border-gray-200 z-10"
                               >
                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                 </svg>
                               </button>

                               {/* 모바일 프레임 */}
                               <div className="relative bg-white rounded-[2.5rem] p-2 shadow-2xl border-[10px] border-gray-900">
                                 {/* 노치 */}
                                 <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-900 rounded-b-xl z-20"></div>
                                 
                                 {/* 화면 */}
                                 <div className="relative bg-white rounded-[1.5rem] overflow-hidden pt-6">
                                   {/* 리포트 이미지 */}
                                   <motion.div
                                     key={currentReportIndex}
                                     initial={{ opacity: 0, x: 20 }}
                                     animate={{ opacity: 1, x: 0 }}
                                     transition={{ duration: 0.3 }}
                                     className="relative"
                                   >
                                     <img 
                                       src={reportSamples[currentReportIndex].image} 
                                       alt={reportSamples[currentReportIndex].alt}
                                       className="w-full h-auto rounded-[1.5rem]"
                                     />
                                   </motion.div>
                                 </div>
                               </div>
                               
                               {/* 페이지 인디케이터 */}
                               <div className="flex justify-center mt-6 space-x-2">
                                 {reportSamples.map((_, index) => (
                                   <button
                                     key={index}
                                     onClick={() => setCurrentReportIndex(index)}
                                     className={`w-2 h-2 rounded-full transition-all duration-200 ${
                                       index === currentReportIndex 
                                         ? 'bg-[#2F9A88] w-6' 
                                         : 'bg-gray-300 hover:bg-gray-400'
                                     }`}
                                   ></button>
                                 ))}
                               </div>
                             </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
