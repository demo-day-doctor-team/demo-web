"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { FileText, BarChart3, Phone, CheckCircle, Users, FlaskConical, FileBarChart, MessageCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts"

export default function Modes() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [currentReportIndex, setCurrentReportIndex] = useState(0)

  const reportSamples = [
    {
      status: "검출",
      color: "red",
      bgColor: "bg-red-900/20",
      borderColor: "border-red-500/30",
      description: "암 존재 가능성 30~60% 예측",
      score: 8.7,
      scoreColor: "text-red-400",
      chartData: [
        { range: "검출", value: 8.7, color: "#EF4444" }
      ],
      cancerData: [
        { cancer: "대장암", probability: 80 },
        { cancer: "폐암", probability: 15 }
      ],
      chartType: "bar"
    },
    {
      status: "의심",
      color: "yellow",
      bgColor: "bg-yellow-900/20",
      borderColor: "border-yellow-500/30",
      description: "암 존재 가능성 10~29% 예측",
      score: 5.8,
      scoreColor: "text-yellow-400",
      chartData: [
        { range: "의심", value: 5.8, color: "#F59E0B" }
      ],
      cancerData: [
        { cancer: "위암", probability: 45 },
        { cancer: "대장암", probability: 35 }
      ],
      chartType: "bar"
    },
    {
      status: "미검출",
      color: "green",
      bgColor: "bg-green-900/20",
      borderColor: "border-green-500/30",
      description: "암 관련 시그널이 관찰되지 않음",
      score: 2.3,
      scoreColor: "text-green-400",
      chartData: [
        { range: "미검출", value: 2.3, color: "#10B981" }
      ],
      normalData: [
        { score: 0, frequency: 0 },
        { score: 1, frequency: 15 },
        { score: 2, frequency: 25 },
        { score: 3, frequency: 20 }
      ],
      chartType: "area"
    }
  ]

  const modes = [
    {
      id: "setup",
      icon: <FileText className="w-6 h-6" />,
      title: "설계",
      description: "패널/예산/일정 설계 후 전자 동의·문진 수집",
      image: "/placeholder-6fey1.png",
      details: [
        { icon: <CheckCircle className="w-5 h-5 text-green-400" />, text: "패널/예산/일정 설계" },
        { icon: <CheckCircle className="w-5 h-5 text-green-400" />, text: "안전관리 계획 수립" },
        { icon: <CheckCircle className="w-5 h-5 text-green-400" />, text: "전자 동의·문진 수집(모바일/PC)" },
      ],
    },
    {
      id: "onsite",
      icon: <BarChart3 className="w-6 h-6" />,
      title: "현장 운영",
      description: "간호사/임상병리사 파견, 채혈·소변 채취·계측 진행",
      image: "/placeholder-hu8ng.png",
      details: [
        { icon: <Users className="w-5 h-5 text-blue-400" />, text: "간호사/임상병리사 파견" },
        { icon: <FlaskConical className="w-5 h-5 text-blue-400" />, text: "채혈·소변 채취·계측" },
        { icon: <CheckCircle className="w-5 h-5 text-blue-400" />, text: "현장 안전관리 및 품질관리" },
      ],
    },
    {
      id: "results",
      icon: <Phone className="w-6 h-6" />,
      title: "결과",
      description: "개인 리포트 제공, 필요시 후속 진료 연계",
      image: "/placeholder-j5yjd.png",
      details: [
        { icon: <FileBarChart className="w-5 h-5 text-purple-400" />, text: "협력 검사실 분석" },
        { icon: <CheckCircle className="w-5 h-5 text-purple-400" />, text: "의료진 결과 검토" },
        { icon: <MessageCircle className="w-5 h-5 text-purple-400" />, text: "개인 리포트 제공 및 후속 진료 연계" },
      ],
    },
  ]

  return (
    <section className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black opacity-80 z-0"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">운영 절차</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            설계부터 결과 제공까지, 체계적인 방문형 건강검진 프로세스
          </p>
        </div>

        <div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(50px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.2s",
          }}
        >
          <Tabs defaultValue="setup" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-8 bg-gray-800 p-1 rounded-lg">
              {modes.map((mode) => (
                <TabsTrigger
                  key={mode.id}
                  value={mode.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-lg transition-all duration-200 rounded-md"
                >
                  <span className="flex items-center gap-2">
                    {mode.icon}
                    <span className="hidden sm:inline">{mode.title}</span>
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>

            {modes.map((mode) => (
              <TabsContent key={mode.id} value={mode.id}>
                <Card className="border-0 bg-transparent shadow-none">
                  <CardContent className="p-0">
                    {mode.id === "setup" ? (
                      // 설계 탭일 때는 전체 프로세스만 표시
                      <div className="h-96 flex flex-col justify-center">
                        <div className="text-center mb-12">
                          <h3 className="text-2xl md:text-3xl font-bold mb-4">
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                              전체 프로세스
                            </span>
                          </h3>
                          <p className="text-gray-300">5단계로 구성된 체계적인 운영 절차</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                          {[
                            { step: "01", title: "설계", desc: "패널/예산/일정 설계, 안전관리 계획 수립" },
                            { step: "02", title: "사전 동의", desc: "전자 동의·문진 수집(모바일/PC)" },
                            { step: "03", title: "현장 운영", desc: "간호사/임상병리사 파견, 채혈·소변 채취·계측" },
                            { step: "04", title: "검사/검증", desc: "협력 검사실 분석, 의료진 결과 검토" },
                            { step: "05", title: "결과/상담", desc: "개인 리포트 제공, 필요시 후속 진료 연계" },
                          ].map((item, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="relative"
                            >
                              <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                                <CardContent className="p-6 text-center">
                                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold">{item.step}</span>
                                  </div>
                                  <h4 className="text-lg font-semibold mb-2 text-white">{item.title}</h4>
                                  <p className="text-sm text-gray-300">{item.desc}</p>
                                </CardContent>
                              </Card>
                              {index < 4 && (
                                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-600 transform -translate-y-1/2"></div>
                              )}
                            </motion.div>
                          ))}
                        </div>

                        <div className="text-center mt-8">
                          <p className="text-xs text-gray-500">
                            * 액체생검은 임상적 필요성과 적합성에 따라 제공되며, 최종 의사결정은 의료전문가 상담 후
                            이뤄져야 합니다.
                          </p>
                        </div>
                      </div>
                                         ) : mode.id === "results" ? (
                       // 결과 탭일 때는 상세 정보와 리포트 샘플을 함께 표시
                                               <div className="grid md:grid-cols-2 gap-8 items-center">
                            <div>
                              <h3 className="text-2xl font-bold mb-4">{mode.title}</h3>
                              <p className="text-gray-300 mb-6">{mode.description}</p>
                              <div className="space-y-3 mb-6">
                                {mode.details.map((detail, index) => (
                                  <div key={index} className="flex items-center gap-3">
                                    {detail.icon}
                                    <span className="text-gray-300">{detail.text}</span>
                                  </div>
                                ))}
                              </div>
                              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-700/50">
                                  자세히 보기
                                </button>
                              </motion.div>
                            </div>
                           
                           {/* 오른쪽: 리포트 샘플 (카드 넘기기) */}
                           <div className="relative">
                             <div className="text-center mb-4">
                               <h4 className="text-lg font-semibold text-white">리포트 샘플</h4>
                               <p className="text-gray-400 text-sm">화살표를 눌러 다른 결과를 확인하세요</p>
                             </div>
                             
                             <div className="relative">
                               {/* 화살표 버튼들 */}
                               <button 
                                 onClick={() => setCurrentReportIndex(prev => prev === 0 ? reportSamples.length - 1 : prev - 1)}
                                 className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-colors"
                               >
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                 </svg>
                               </button>
                               <button 
                                 onClick={() => setCurrentReportIndex(prev => prev === reportSamples.length - 1 ? 0 : prev + 1)}
                                 className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-gray-800/80 hover:bg-gray-700/80 text-white p-2 rounded-full transition-colors"
                               >
                                 <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                 </svg>
                               </button>
                               
                               {/* 리포트 카드 */}
                               <motion.div
                                 key={currentReportIndex}
                                 initial={{ opacity: 0, x: 20 }}
                                 animate={{ opacity: 1, x: 0 }}
                                 transition={{ duration: 0.3 }}
                               >
                                 <Card className={`${reportSamples[currentReportIndex].bgColor} ${reportSamples[currentReportIndex].borderColor} border-2 h-96`}>
                                   <CardContent className="p-6">
                                     <div className="text-center mb-6">
                                       <h4 className={`text-xl font-bold mb-2 ${reportSamples[currentReportIndex].scoreColor}`}>
                                         {reportSamples[currentReportIndex].status}
                                       </h4>
                                       <p className="text-gray-300 text-sm">{reportSamples[currentReportIndex].description}</p>
                                     </div>
                                     <div className="space-y-4">
                                       <div>
                                         <h5 className="text-sm font-semibold text-white mb-2">암 시그널 점수</h5>
                                         <div className="h-24">
                                           <ResponsiveContainer width="100%" height="100%">
                                             <BarChart data={reportSamples[currentReportIndex].chartData}>
                                               <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                               <XAxis dataKey="range" stroke="#9CA3AF" fontSize={12} />
                                               <YAxis stroke="#9CA3AF" fontSize={12} domain={[0, 10]} />
                                               <Bar dataKey="value" fill={reportSamples[currentReportIndex].chartData[0].color} radius={[4, 4, 0, 0]} />
                                             </BarChart>
                                           </ResponsiveContainer>
                                         </div>
                                         <div className="text-center">
                                           <span className={`${reportSamples[currentReportIndex].scoreColor} font-bold text-lg`}>
                                             {reportSamples[currentReportIndex].score}/10
                                           </span>
                                         </div>
                                       </div>
                                       <div>
                                         <h5 className="text-sm font-semibold text-white mb-2">
                                           {reportSamples[currentReportIndex].chartType === "area" ? "정상 범위" : "암종별 확률"}
                                         </h5>
                                         <div className="h-24">
                                           <ResponsiveContainer width="100%" height="100%">
                                             {reportSamples[currentReportIndex].chartType === "area" ? (
                                               <AreaChart data={reportSamples[currentReportIndex].normalData}>
                                                 <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                                 <XAxis dataKey="score" stroke="#9CA3AF" fontSize={10} />
                                                 <YAxis stroke="#9CA3AF" fontSize={10} />
                                                 <Area type="monotone" dataKey="frequency" stroke="#10B981" fill="#10B981" fillOpacity={0.3} />
                                               </AreaChart>
                                             ) : (
                                               <BarChart data={reportSamples[currentReportIndex].cancerData}>
                                                 <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                                 <XAxis dataKey="cancer" stroke="#9CA3AF" fontSize={10} />
                                                 <YAxis stroke="#9CA3AF" fontSize={10} domain={[0, 100]} />
                                                 <Bar dataKey="probability" fill={reportSamples[currentReportIndex].chartData[0].color} radius={[2, 2, 0, 0]} />
                                               </BarChart>
                                             )}
                                           </ResponsiveContainer>
                                         </div>
                                       </div>
                                     </div>
                                   </CardContent>
                                 </Card>
                               </motion.div>
                               
                               {/* 페이지 인디케이터 */}
                               <div className="flex justify-center mt-4 space-x-2">
                                 {reportSamples.map((_, index) => (
                                   <div 
                                     key={index}
                                     className={`w-2 h-2 rounded-full transition-colors ${
                                       index === currentReportIndex 
                                         ? reportSamples[currentReportIndex].scoreColor.replace('text-', 'bg-')
                                         : 'bg-gray-600'
                                     }`}
                                   ></div>
                                 ))}
                               </div>
                             </div>
                           </div>
                         </div>
                    ) : (
                      // 현장 운영 탭은 기존 레이아웃 유지
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold mb-4">{mode.title}</h3>
                          <p className="text-gray-300 mb-6">{mode.description}</p>
                          <div className="space-y-3 mb-6">
                            {mode.details.map((detail, index) => (
                              <div key={index} className="flex items-center gap-3">
                                {detail.icon}
                                <span className="text-gray-300">{detail.text}</span>
                              </div>
                            ))}
                          </div>
                          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium shadow-lg shadow-blue-700/50">
                              자세히 보기
                            </button>
                          </motion.div>
                        </div>
                        <div className="bg-gray-800 p-4 rounded-xl overflow-hidden h-96 flex flex-col justify-center">
                          <div className="w-full h-64 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-lg flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="relative z-10 text-center text-white">
                              <svg className="w-20 h-20 mx-auto mb-4 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                              </svg>
                              <h4 className="text-xl font-bold mb-2">현장 운영</h4>
                              <p className="text-blue-100 text-sm">혈액 검사 현장</p>
                              <div className="mt-4 flex justify-center space-x-2">
                                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-200 rounded-full"></div>
                                <div className="w-2 h-2 bg-blue-100 rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  )
}
