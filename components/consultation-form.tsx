"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import emailjs from '@emailjs/browser'
import { useAnalytics } from "@/hooks/useAnalytics"

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    expectedCount: "50-100명",
    timeline: "1개월 이내",
    message: "",
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const { trackFormSubmission, trackEvent } = useAnalytics()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // 폼 제출 이벤트 추적
    trackFormSubmission('consultation_request')

    try {
      // EmailJS 설정 - 환경 변수에서 가져오기
      // Gmail 대신 Outlook 사용을 권장합니다 (보안 문제 해결)
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      const recipientEmail = process.env.NEXT_PUBLIC_RECIPIENT_EMAIL

      if (!serviceId || !templateId || !publicKey || !recipientEmail) {
        throw new Error('EmailJS 설정이 완료되지 않았습니다. 환경 변수를 확인해주세요.')
      }

      const templateParams = {
        to_email: recipientEmail,
        from_name: formData.name,
        from_company: formData.company,
        from_email: formData.email,
        expected_count: formData.expectedCount,
        timeline: formData.timeline,
        message: formData.message,
        reply_to: formData.email,
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      )

      if (result.status === 200) {
        setSubmitStatus('success')
        // 성공 이벤트 추적
        trackEvent('email_sent', 'engagement', 'consultation_request_success')
        setFormData({
          name: "",
          company: "",
          email: "",
          expectedCount: "50-100명",
          timeline: "1개월 이내",
          message: "",
        })
      } else {
        setSubmitStatus('error')
        // 실패 이벤트 추적
        trackEvent('email_failed', 'engagement', 'consultation_request_error')
      }
    } catch (error) {
      console.error('Email sending failed:', error)
      setSubmitStatus('error')
      // 오류 이벤트 추적
      trackEvent('email_error', 'engagement', 'consultation_request_error')
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
    <section id="consultation-form" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 opacity-80 z-0"></div>

      <div className="container mx-auto relative z-10 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              기업 상담 요청
            </span>
          </h2>
          <p className="text-xl text-gray-300">맞춤형 건강검진 서비스 도입을 위한 상담을 신청해보세요</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gray-800/50 border-gray-700 backdrop-blur-sm">
            <CardContent className="p-8">
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg">
                  <p className="text-green-400 text-center">상담 요청이 성공적으로 접수되었습니다! 곧 연락드리겠습니다.</p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
                  <p className="text-red-400 text-center">전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">담당자 이름</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="홍길동"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">회사명</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="(주)회사명"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">이메일</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="contact@company.com"
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">예상 인원</label>
                    <select
                      name="expectedCount"
                      value={formData.expectedCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isSubmitting}
                    >
                      <option value="50명 미만">50명 미만</option>
                      <option value="50-100명">50-100명</option>
                      <option value="100-200명">100-200명</option>
                      <option value="200-500명">200-500명</option>
                      <option value="500명 이상">500명 이상</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">희망 시작 시기</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      disabled={isSubmitting}
                    >
                      <option value="1개월 이내">1개월 이내</option>
                      <option value="2-3개월 이내">2-3개월 이내</option>
                      <option value="3-6개월 이내">3-6개월 이내</option>
                      <option value="6개월 이후">6개월 이후</option>
                      <option value="미정">미정</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">메시지</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="추가 문의사항이나 요구사항을 입력해주세요."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    disabled={isSubmitting}
                  />
                </div>

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white py-4 text-lg font-semibold rounded-lg shadow-lg shadow-blue-700/50 transition-all"
                  >
                    {isSubmitting ? '전송 중...' : '상담 요청하기'}
                  </Button>
                </motion.div>

                <p className="text-sm text-gray-400 text-center mt-4">
                  * 입력하신 정보는 상담 목적으로만 사용되며, 안전하게 보호됩니다.
                </p>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
