import Link from "next/link"

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link href="/" className="inline-flex items-center gap-3 mb-8 hover:opacity-80 transition-opacity">
            <img src="/logo.svg" alt="찾아검진 로고" className="h-10 w-10" />
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC]">
              찾아검진
            </span>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2F9A88] to-[#4BBEAC]">
              개인정보 처리방침
            </span>
          </h1>
          <p className="text-gray-600">최종 업데이트: 2025년 1월 20일</p>
        </div>

        {/* Content */}
        <div className="prose prose-gray prose-lg max-w-none">
          <section className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#2F9A88]">1. 개인정보의 수집 및 이용 목적</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              찾아검진(이하 "회사")은 다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 개인정보 보호법 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>건강검진 서비스 제공 및 예약 관리</li>
              <li>검진 결과 제공 및 건강 상담</li>
              <li>서비스 개선 및 맞춤형 건강관리 정보 제공</li>
              <li>법령 및 이용약관을 위반하는 회원에 대한 이용 제한 조치, 부정 이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에 대한 방지 및 제재</li>
            </ul>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#2F9A88]">2. 수집하는 개인정보 항목</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              회사는 서비스 제공을 위해 필요한 최소한의 개인정보를 수집합니다.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#4BBEAC]">필수 항목</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>이름, 생년월일, 성별, 연락처(휴대전화번호, 이메일)</li>
                  <li>건강검진 관련 정보(문진표, 검사 결과, 진료 기록)</li>
                  <li>회원 가입 시: 아이디, 비밀번호</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#4BBEAC]">선택 항목</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>가족력, 과거 병력, 복용 중인 약물</li>
                  <li>마케팅 정보 수신 동의 여부</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#2F9A88]">3. 개인정보의 보유 및 이용기간</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              회사는 법령에 따른 개인정보 보유·이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의받은 개인정보 보유·이용기간 내에서 개인정보를 처리·보유합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>회원 탈퇴 시까지 (단, 관계 법령에 따라 보존할 필요가 있는 경우 해당 기간 동안 보관)</li>
              <li>의료법에 따른 진료기록: 5년</li>
              <li>전자상거래 등에서의 소비자보호에 관한 법률에 따른 표시·광고에 관한 기록: 6개월</li>
              <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
              <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
            </ul>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#2F9A88]">4. 개인정보의 제3자 제공</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              회사는 원칙적으로 이용자의 개인정보를 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>이용자가 사전에 동의한 경우</li>
              <li>법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</li>
              <li>제휴 검사실 및 의료기관: 검진 서비스 제공을 위해 필요한 최소한의 정보 제공</li>
            </ul>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#2F9A88]">5. 개인정보의 파기</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              회사는 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가 불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다.
            </p>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#4BBEAC]">파기 절차</h3>
                <p>이용자가 입력한 정보는 목적 달성 후 별도의 DB에 옮겨져 내부 방침 및 기타 관련 법령에 따라 일정기간 저장된 후 혹은 즉시 파기됩니다.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-[#4BBEAC]">파기 방법</h3>
                <ul className="list-disc list-inside space-y-2">
                  <li>전자적 파일 형태: 복구 및 재생되지 않도록 안전하게 삭제</li>
                  <li>종이 문서: 분쇄기로 분쇄하거나 소각</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#2F9A88]">6. 정보주체의 권리·의무 및 행사방법</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              이용자는 개인정보주체로서 다음과 같은 권리를 행사할 수 있습니다.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>개인정보 열람 요구</li>
              <li>오류 등이 있을 경우 정정 요구</li>
              <li>삭제 요구</li>
              <li>처리정지 요구</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mt-4">
              권리 행사는 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전자우편 등을 통하여 하실 수 있으며, 회사는 이에 대해 지체없이 조치하겠습니다.
            </p>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#2F9A88]">7. 개인정보 보호책임자</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및 피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고 있습니다.
            </p>
            <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-2 text-gray-700">
              <p><strong className="text-[#2F9A88]">개인정보 보호책임자</strong></p>
              <p>이메일: privacy@chajagumjin.co</p>
              <p>전화번호: 02-1234-5678</p>
            </div>
          </section>

          <section className="mb-12 bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold mb-4 text-[#2F9A88]">8. 개인정보 처리방침 변경</h2>
            <p className="text-gray-700 leading-relaxed">
              이 개인정보 처리방침은 2025년 1월 20일부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 변경사항의 시행 7일 전부터 공지사항을 통하여 고지할 것입니다.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link 
            href="/" 
            className="text-gray-600 hover:text-[#2F9A88] transition-colors"
          >
            ← 홈으로 돌아가기
          </Link>
          <Link 
            href="/terms" 
            className="text-gray-600 hover:text-[#2F9A88] transition-colors"
          >
            서비스 이용약관 보기 →
          </Link>
        </div>
      </div>
    </main>
  )
}

