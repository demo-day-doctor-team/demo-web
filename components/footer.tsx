import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8DD4C5] to-[#2F9A88]">
                찾아검진
              </span>
            </h2>
            <p className="text-gray-400 mb-4 max-w-md">
              액체생검 기반 방문형 건강검진 서비스. 기업 사옥에서 간편하게 암 조기발견 검사를 받으세요.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:contact@chajagumjin.co" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                <Mail />
              </a>
              <a href="tel:+82-2-1234-5678" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                <Phone />
              </a>
              <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                <MapPin />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">서비스</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  액체생검 검사
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  방문형 건강검진
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  기업 맞춤 패널
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  데이터 분석
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">지원</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  고객 지원
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  기업 상담
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  개인정보 처리방침
                </a>
              </li>
              <li>
                <a href="/terms" className="text-gray-400 transition-colors" onMouseEnter={(e) => e.currentTarget.style.color = '#4BBEAC'} onMouseLeave={(e) => e.currentTarget.style.color = '#9CA3AF'}>
                  이용약관
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} 찾아검진. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
