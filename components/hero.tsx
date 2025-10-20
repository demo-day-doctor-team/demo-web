"use client"

import { useState } from "react"
import { Canvas } from "@react-three/fiber"
import { useSpring, animated } from "@react-spring/web"
import { PresentationControls, Float } from "@react-three/drei"
import { Phone } from "@/components/3d/phone"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [hovered, setHovered] = useState(false)

  const buttonSpring = useSpring({
    scale: hovered ? 1.1 : 1,
    boxShadow: hovered ? "0 0 25px 5px rgba(75, 190, 172, 0.6)" : "0 0 5px 2px rgba(75, 190, 172, 0.3)",
    config: { tension: 300, friction: 10 },
  })

  const scrollToConsultation = () => {
    const element = document.getElementById("consultation-form")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Logo and Brand Name */}
      <div className="absolute top-8 left-8 z-20 flex items-center gap-3">
        <img src="/logo.svg" alt="찾아검진 로고" className="h-12 w-12" />
        <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8DD4C5] to-[#2F9A88]">
          찾아검진
        </span>
      </div>

      {/* Background gradient circles */}
      <div className="absolute top-20 -left-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" style={{backgroundColor: '#2F9A88'}}></div>
      <div className="absolute top-40 -right-20 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" style={{backgroundColor: '#4BBEAC'}}></div>
      <div className="absolute -bottom-20 left-40 w-72 h-72 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" style={{backgroundColor: '#1F7A6B'}}></div>

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 items-center z-10">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            <span className="block">암 조기발견을 더 가볍게.</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8DD4C5] to-[#2F9A88]">
              액체생검 기반<br />
              방문형 건강검진
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-lg mx-auto lg:mx-0">
            기업 사옥에서 채혈·문진만으로 액체생검 포함<br />
            정밀 혈액검사와 기본 건강지표를 수집합니다.<br />
            임직원은 이동 없이,<br />
            HR은 일정·결과·비용을 한 번에 관리하세요.
          </p>
          <animated.div style={buttonSpring} className="inline-block">
            <Button
              className="text-white px-8 py-6 rounded-full text-xl font-bold transition-all shadow-lg"
              style={{backgroundColor: '#4BBEAC', boxShadow: '0 10px 40px rgba(47, 154, 136, 0.3)'}}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              onClick={scrollToConsultation}
            >
              기업 상담 요청
            </Button>
          </animated.div>
        </div>

        <div className="h-[400px] lg:h-[500px]">
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <PresentationControls
              global
              rotation={[0, -Math.PI / 6, 0]}
              polar={[-Math.PI / 6, Math.PI / 6]}
              azimuth={[-Math.PI / 6, Math.PI / 6]}
              config={{ mass: 2, tension: 400 }}
              snap={{ mass: 4, tension: 400 }}
            >
              <Float rotationIntensity={0.2} speed={2}>
                <Phone position={[0, 0, 0]} scale={1.5} />
              </Float>
            </PresentationControls>
          </Canvas>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white bg-opacity-10 p-2 w-10 h-10 ring-1 ring-white ring-opacity-20 rounded-full flex items-center justify-center">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  )
}
