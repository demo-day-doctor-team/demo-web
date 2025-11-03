"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import emailjs from '@emailjs/browser'
import { useAnalytics } from "@/hooks/useAnalytics"

// 환경 변수를 컴포넌트 외부에서 한 번만 로드
// 주의: NEXT_PUBLIC_ 접두사가 붙은 변수는 클라이언트 번들에 포함됩니다.
// - EmailJS Public Key: 공개 키이므로 노출되어도 안전합니다 (이름 그대로 Public Key)
// - Service ID, Template ID: EmailJS에서 제공하는 공개 식별자이므로 노출되어도 안전합니다
// - recipientEmail: EmailJS 템플릿의 'To Email' 필드에서 직접 설정하므로 코드에서 제거했습니다
const EMAILJS_CONFIG = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
}

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "서울",
    preferredDate: "",
    preferredTime: "오전",
    purpose: "건강 관리",
    specialNotes: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const { trackFormSubmission, trackEvent } = useAnalytics()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // 폼 제출 이벤트 추적
    trackFormSubmission('booking_request')

    try {
      // EmailJS 설정 확인
      const { serviceId, templateId, publicKey } = EMAILJS_CONFIG

      console.log('EmailJS 설정 확인:', {
        serviceId: serviceId ? '✓' : '✗',
        templateId: templateId ? '✓' : '✗',
        publicKey: publicKey ? '✓' : '✗',
        serviceIdValue: serviceId,
        templateIdValue: templateId,
        publicKeyValue: publicKey ? `${publicKey.substring(0, 10)}...` : '없음',
      })

      if (!serviceId || !templateId || !publicKey) {
        const missing = []
        if (!serviceId) missing.push('NEXT_PUBLIC_EMAILJS_SERVICE_ID')
        if (!templateId) missing.push('NEXT_PUBLIC_EMAILJS_TEMPLATE_ID')
        if (!publicKey) missing.push('NEXT_PUBLIC_EMAILJS_PUBLIC_KEY')
        throw new Error(`환경 변수가 설정되지 않았습니다: ${missing.join(', ')}\n개발 서버를 재시작하거나 .env.local 파일을 확인해주세요.`)
      }

      // recipientEmail은 EmailJS 템플릿의 'To Email' 필드에서 직접 설정하므로
      // templateParams에서 제거했습니다 (보안상 더 안전함)
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        from_email: formData.email,
        location: formData.location,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        purpose: formData.purpose,
        special_notes: formData.specialNotes || '(없음)',
        reply_to: formData.email,
      }

      console.log('EmailJS 전송 시도:', { serviceId, templateId, templateParams })

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      console.log('EmailJS 전송 결과:', result)

      if (result.status === 200 || result.text === 'OK') {
        setSubmitStatus('success')
        setErrorMessage('')
        // 성공 이벤트 추적
        trackEvent('email_sent', 'engagement', 'booking_request_success')
        setFormData({
          name: "",
          phone: "",
          email: "",
          location: "서울",
          preferredDate: "",
          preferredTime: "오전",
          purpose: "건강 관리",
          specialNotes: "",
        })
      } else {
        setSubmitStatus('error')
        setErrorMessage(`전송 실패 (상태 코드: ${result.status})`)
        // 실패 이벤트 추적
        trackEvent('email_failed', 'engagement', 'booking_request_error')
      }
    } catch (error: any) {
      console.error('EmailJS 전송 오류:', error)
      setSubmitStatus('error')
      
      // 더 자세한 오류 메시지
      if (error?.text) {
        setErrorMessage(`오류: ${error.text}`)
      } else if (error?.message) {
        setErrorMessage(`오류: ${error.message}`)
      } else if (typeof error === 'string') {
        setErrorMessage(`오류: ${error}`)
      } else {
        setErrorMessage('이메일 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.')
      }
      
      // 오류 이벤트 추적
      trackEvent('email_error', 'engagement', 'booking_request_error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="consultation-form" className="py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 relative bg-white">
      <div className="container mx-auto relative z-10 max-w-5xl">
        <div className="text-center mb-14 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#E8F5F2] to-[#F0F9F7] rounded-full border-2 border-[#2F9A88]/20 mb-5 sm:mb-6 shadow-sm">
            <span className="text-xs font-semibold text-[#2F9A88] uppercase tracking-wider">검진 예약</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-5 text-gray-900 tracking-tight px-4">
            검진 예약하기
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 font-normal leading-relaxed px-4">원하는 날짜와 장소를 선택하여 간편하게 예약하세요</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white border-2 border-gray-200 shadow-2xl">
            <CardContent className="p-6 sm:p-8 md:p-10 lg:p-12">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-center font-medium">예약 요청이 성공적으로 접수되었습니다! 곧 연락드리겠습니다.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-700 text-center font-medium">
                    {errorMessage || '전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.'}
                  </p>
                  <p className="text-red-600 text-center text-sm mt-2">
                    개발자 도구 콘솔(F12)에서 상세 오류를 확인할 수 있습니다.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 md:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">이름 <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="홍길동"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{
                      '--tw-ring-color': '#2F9A88'
                    } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#2F9A88'
                      e.currentTarget.style.backgroundColor = '#ffffff'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#D1D5DB'
                      e.currentTarget.style.backgroundColor = '#F9FAFB'
                    }}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">연락처 <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="010-1234-5678"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{
                        '--tw-ring-color': '#2F9A88'
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#2F9A88'
                        e.currentTarget.style.backgroundColor = '#ffffff'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D1D5DB'
                        e.currentTarget.style.backgroundColor = '#F9FAFB'
                      }}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">이메일 <span className="text-red-500">*</span></label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{
                        '--tw-ring-color': '#2F9A88'
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#2F9A88'
                        e.currentTarget.style.backgroundColor = '#ffffff'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D1D5DB'
                        e.currentTarget.style.backgroundColor = '#F9FAFB'
                      }}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">검진 희망 지역 <span className="text-red-500">*</span></label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{
                      '--tw-ring-color': '#2F9A88'
                    } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#2F9A88'
                      e.currentTarget.style.backgroundColor = '#ffffff'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#D1D5DB'
                      e.currentTarget.style.backgroundColor = '#F9FAFB'
                    }}
                    required
                    disabled={isSubmitting}
                  >
                    <option value="서울">서울</option>
                    <option value="경기">경기</option>
                    <option value="인천">인천</option>
                    <option value="부산">부산</option>
                    <option value="대구">대구</option>
                    <option value="대전">대전</option>
                    <option value="광주">광주</option>
                    <option value="울산">울산</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">검진 희망 날짜 <span className="text-red-500">*</span></label>
                    <input
                      type="date"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{
                        '--tw-ring-color': '#2F9A88'
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#2F9A88'
                        e.currentTarget.style.backgroundColor = '#ffffff'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D1D5DB'
                        e.currentTarget.style.backgroundColor = '#F9FAFB'
                      }}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5 sm:mb-2">검진 희망 시간 <span className="text-red-500">*</span></label>
                    <select
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                      style={{
                        '--tw-ring-color': '#2F9A88'
                      } as React.CSSProperties}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#2F9A88'
                        e.currentTarget.style.backgroundColor = '#ffffff'
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#D1D5DB'
                        e.currentTarget.style.backgroundColor = '#F9FAFB'
                      }}
                      required
                      disabled={isSubmitting}
                    >
                      <option value="오전">오전 (09:00-12:00)</option>
                      <option value="오후">오후 (13:00-18:00)</option>
                      <option value="저녁">저녁 (18:00-20:00)</option>
                      <option value="협의">시간 협의 가능</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">검진 목적</label>
                  <select
                    name="purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:border-transparent transition-all"
                    style={{
                      '--tw-ring-color': '#2F9A88'
                    } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#2F9A88'
                      e.currentTarget.style.backgroundColor = '#ffffff'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#D1D5DB'
                      e.currentTarget.style.backgroundColor = '#F9FAFB'
                    }}
                    disabled={isSubmitting}
                  >
                    <option value="건강 관리">정기 건강 관리</option>
                    <option value="가족력">가족 암 가족력</option>
                    <option value="증상">특이 증상 확인</option>
                    <option value="기타">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">특이사항 및 요청사항</label>
                  <textarea
                    name="specialNotes"
                    value={formData.specialNotes}
                    onChange={handleChange}
                    placeholder="임신 여부, 복용 중인 약물, 알레르기, 기타 특이사항이나 요청사항을 입력해주세요."
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:border-transparent resize-none transition-all"
                    style={{
                      '--tw-ring-color': '#2F9A88'
                    } as React.CSSProperties}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = '#2F9A88'
                      e.currentTarget.style.backgroundColor = '#ffffff'
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = '#D1D5DB'
                      e.currentTarget.style.backgroundColor = '#F9FAFB'
                    }}
                    disabled={isSubmitting}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full disabled:bg-gray-400 text-white py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ${
                      isSubmitting 
                        ? 'bg-gray-400' 
                        : 'bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC] hover:from-[#1F7A6B] hover:to-[#2F9A88]'
                    }`}
                  >
                    {isSubmitting ? '예약 신청 중...' : '예약 신청하기'}
                  </Button>
                </motion.div>

                <p className="text-sm text-gray-500 text-center mt-4">
                  * 입력하신 정보는 예약 및 검진 진행 목적으로만 사용되며, 안전하게 보호됩니다.<br />
                  * 예약 신청 후 담당자가 연락을 드려 최종 일정을 확정해드립니다.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
