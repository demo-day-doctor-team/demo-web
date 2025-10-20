import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="찾아검진 로고" className="h-10 w-10" />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#8DD4C5] to-[#2F9A88]">
              찾아검진
            </span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8DD4C5] to-[#2F9A88]">
              서비스 이용약관
            </span>
          </h1>
          <p className="text-gray-400">최종 업데이트: 2025년 1월 20일</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none">
          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제1조 (목적)</h2>
            <p className="text-gray-300 leading-relaxed">
              본 약관은 찾아검진(이하 "회사")이 제공하는 액체생검 기반 방문형 건강검진 서비스(이하 "서비스")의 이용과 관련하여 회사와 이용자 간의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.
            </p>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제2조 (용어의 정의)</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              본 약관에서 사용하는 주요 용어의 정의는 다음과 같습니다.
            </p>
            <ul className="list-disc list-inside space-y-3 text-gray-300">
              <li><strong className="text-[#8DD4C5]">"서비스"</strong>란 회사가 제공하는 액체생검 포함 방문형 건강검진 및 관련 건강관리 서비스를 의미합니다.</li>
              <li><strong className="text-[#8DD4C5]">"이용자"</strong>란 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
              <li><strong className="text-[#8DD4C5]">"회원"</strong>이란 회사와 서비스 이용계약을 체결하고 회원 아이디(ID)를 부여받은 이용자를 말합니다.</li>
              <li><strong className="text-[#8DD4C5]">"아이디(ID)"</strong>란 회원의 식별과 서비스 이용을 위하여 회원이 설정하고 회사가 승인하는 문자와 숫자의 조합을 의미합니다.</li>
              <li><strong className="text-[#8DD4C5]">"비밀번호"</strong>란 회원이 부여받은 아이디와 일치된 회원임을 확인하고 회원 자신의 비밀을 보호하기 위하여 회원이 정한 문자와 숫자의 조합을 의미합니다.</li>
            </ul>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제3조 (약관의 효력 및 변경)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 본 약관은 서비스 화면에 게시하거나 기타의 방법으로 공지함으로써 효력이 발생합니다.</p>
              <p>② 회사는 필요하다고 인정되는 경우 본 약관을 변경할 수 있으며, 약관이 변경되는 경우 변경된 약관의 시행일자 및 변경사유를 명시하여 현행약관과 함께 서비스 초기화면에 그 시행일자 7일 전부터 시행일 후 상당한 기간 동안 공지합니다.</p>
              <p>③ 회원은 변경된 약관에 동의하지 않을 권리가 있으며, 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단하고 탈퇴할 수 있습니다. 단, 변경된 약관의 효력 발생일 이후에도 서비스를 계속 이용하는 경우에는 약관의 변경사항에 동의한 것으로 간주됩니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제4조 (서비스의 제공)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회사는 다음과 같은 서비스를 제공합니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>액체생검을 포함한 방문형 건강검진 서비스</li>
                <li>건강검진 예약 및 일정 관리</li>
                <li>검진 결과 제공 및 해석</li>
                <li>건강관리 상담 및 후속 진료 연계</li>
                <li>기타 회사가 추가 개발하거나 제휴계약 등을 통해 제공하는 일체의 서비스</li>
              </ul>
              <p>② 회사는 서비스를 일정범위로 분할하여 각 범위별로 이용가능시간을 별도로 지정할 수 있습니다. 다만, 이러한 경우에는 그 내용을 사전에 공지합니다.</p>
              <p>③ 서비스는 연중무휴, 1일 24시간 제공함을 원칙으로 합니다. 다만, 회사는 서비스의 종류나 성질에 따라 제공하는 서비스 중 일부에 대해서는 별도로 이용시간을 정할 수 있으며, 이 경우 그 이용시간을 사전에 공지합니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제5조 (회원가입)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 이용자는 회사가 정한 가입 양식에 따라 회원정보를 기입한 후 본 약관에 동의한다는 의사표시를 함으로써 회원가입을 신청합니다.</p>
              <p>② 회사는 제1항과 같이 회원으로 가입할 것을 신청한 이용자 중 다음 각 호에 해당하지 않는 한 회원으로 등록합니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>가입신청자가 본 약관에 의하여 이전에 회원자격을 상실한 적이 있는 경우</li>
                <li>실명이 아니거나 타인의 명의를 이용한 경우</li>
                <li>허위의 정보를 기재하거나, 회사가 제시하는 내용을 기재하지 않은 경우</li>
                <li>이용자의 귀책사유로 인하여 승인이 불가능하거나 기타 규정한 제반 사항을 위반하여 신청하는 경우</li>
              </ul>
              <p>③ 회원가입계약의 성립시기는 회사의 승낙이 회원에게 도달한 시점으로 합니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제6조 (회원정보의 변경)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회원은 개인정보관리화면을 통하여 언제든지 본인의 개인정보를 열람하고 수정할 수 있습니다.</p>
              <p>② 회원은 회원가입신청 시 기재한 사항이 변경되었을 경우 온라인으로 수정을 하거나 전자우편 기타 방법으로 회사에 대하여 그 변경사항을 알려야 합니다.</p>
              <p>③ 제2항의 변경사항을 회사에 알리지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제7조 (회원 탈퇴 및 자격 상실)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회원은 회사에 언제든지 탈퇴를 요청할 수 있으며 회사는 즉시 회원탈퇴를 처리합니다.</p>
              <p>② 회원이 다음 각 호의 사유에 해당하는 경우, 회사는 회원자격을 제한 및 정지시킬 수 있습니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>가입 신청 시에 허위 내용을 등록한 경우</li>
                <li>다른 사람의 서비스 이용을 방해하거나 그 정보를 도용하는 등 전자상거래 질서를 위협하는 경우</li>
                <li>서비스를 이용하여 법령 또는 본 약관이 금지하거나 공서양속에 반하는 행위를 하는 경우</li>
              </ul>
              <p>③ 회사가 회원 자격을 제한·정지시킨 후, 동일한 행위가 2회 이상 반복되거나 30일 이내에 그 사유가 시정되지 아니하는 경우 회사는 회원자격을 상실시킬 수 있습니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제8조 (회원에 대한 통지)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회사가 회원에 대한 통지를 하는 경우, 회원이 회사와 미리 약정하여 지정한 전자우편 주소, 휴대전화번호 등으로 할 수 있습니다.</p>
              <p>② 회사는 불특정다수 회원에 대한 통지의 경우 1주일이상 서비스 게시판에 게시함으로써 개별 통지에 갈음할 수 있습니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제9조 (회사의 의무)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회사는 법령과 본 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 본 약관이 정하는 바에 따라 지속적이고, 안정적으로 서비스를 제공하는데 최선을 다하여야 합니다.</p>
              <p>② 회사는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보 보호를 위한 보안 시스템을 구축합니다.</p>
              <p>③ 회사는 의료법, 의료기기법 등 관련 법령을 준수하며, 검진 서비스 제공 시 의료기관 및 의료인과의 협력 체계를 유지합니다.</p>
              <p>④ 회사는 서비스 이용과 관련하여 이용자로부터 제기된 의견이나 불만이 정당하다고 인정할 경우에는 이를 처리하여야 합니다. 이용자가 제기한 의견이나 불만사항에 대해서는 게시판을 활용하거나 전자우편 등을 통하여 이용자에게 처리과정 및 결과를 전달합니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제10조 (회원의 의무)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회원은 다음 행위를 하여서는 안 됩니다:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>신청 또는 변경 시 허위 내용의 등록</li>
                <li>타인의 정보 도용</li>
                <li>회사에 게시된 정보의 변경</li>
                <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 서비스에 공개 또는 게시하는 행위</li>
              </ul>
              <p>② 회원은 관계법령, 본 약관의 규정, 이용안내 및 서비스와 관련하여 공지한 주의사항, 회사가 통지하는 사항 등을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 하여서는 안 됩니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제11조 (서비스의 중단)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회사는 컴퓨터 등 정보통신설비의 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</p>
              <p>② 제1항에 의한 서비스 중단의 경우에는 회사는 제8조에 정한 방법으로 이용자에게 통지합니다.</p>
              <p>③ 회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제12조 (면책조항)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.</p>
              <p>② 회사는 회원의 귀책사유로 인한 서비스 이용의 장애에 대하여는 책임을 지지 않습니다.</p>
              <p>③ 회사는 회원이 서비스를 이용하여 기대하는 수익을 상실한 것이나 서비스를 통하여 얻은 자료로 인한 손해에 관하여 책임을 지지 않습니다.</p>
              <p>④ 회사는 의료법에 따라 제휴 의료기관 및 의료인이 제공하는 의료서비스의 내용과 질에 대해서는 책임을 지지 않으며, 의료서비스와 관련된 분쟁은 해당 의료기관 및 의료인과 직접 해결하여야 합니다.</p>
              <p>⑤ 검진 결과는 참고용이며, 최종 진단 및 치료는 반드시 의료전문가와 상담 후 결정되어야 합니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제13조 (분쟁의 해결)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치·운영합니다.</p>
              <p>② 회사와 이용자 간에 발생한 전자상거래 분쟁과 관련하여 이용자의 피해구제신청이 있는 경우에는 공정거래위원회 또는 시·도지사가 의뢰하는 분쟁조정기관의 조정에 따를 수 있습니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">제14조 (재판권 및 준거법)</h2>
            <div className="space-y-4 text-gray-300">
              <p>① 회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 민사소송법상의 관할법원에 제기합니다.</p>
              <p>② 회사와 이용자 간에 제기된 전자상거래 소송에는 대한민국 법을 적용합니다.</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-900/50 p-8 rounded-xl border border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-[#4BBEAC]">부칙</h2>
            <div className="space-y-4 text-gray-300">
              <p>본 약관은 2025년 1월 20일부터 시행됩니다.</p>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            href="/" 
            className="text-gray-400 hover:text-[#4BBEAC] transition-colors"
          >
            ← 홈으로 돌아가기
          </Link>
          <Link 
            href="/privacy" 
            className="text-gray-400 hover:text-[#4BBEAC] transition-colors"
          >
            개인정보 처리방침 보기 →
          </Link>
        </div>
      </div>
    </main>
  )
}

