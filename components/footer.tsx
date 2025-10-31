"use client"

import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.svg" alt="찾아검진 로고" className="h-8 w-8" />
              <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#4BBEAC] to-[#2F9A88]">
                찾아검진
              </h2>
            </div>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              액체생검 기반 방문형 건강검진 서비스. 집에서, 사무실에서, 원하는 곳 어디서나 간편하게 암 조기발견 검사를 받으세요.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@chajagumjin.co" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                <Mail />
              </a>
              <a href="tel:+82-2-1234-5678" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                <Phone />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                <MapPin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">서비스</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  액체생검 검사
                </a>
              </li>
              <li>
                <a href="#features" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  방문형 건강검진
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  검진 패키지
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  검진 후기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">지원</h3>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#consultation-form" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  검진 예약
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  개인정보 처리방침
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 transition-colors hover:text-[#4BBEAC]" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 찾아검진. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
