# Gmail 보안 설정 가이드

## 1. Gmail 2단계 인증 활성화

### 필수 단계 (반드시 먼저 해야 함)
1. [Google 계정 보안](https://myaccount.google.com/security) 페이지 접속
2. "2단계 인증" 클릭
3. "시작하기" 클릭
4. 휴대폰 번호 인증 완료
5. 2단계 인증 활성화

## 2. 앱 비밀번호 생성

### 2단계 인증 활성화 후 필수
1. [Google 계정 보안](https://myaccount.google.com/security) 페이지 접속
2. "2단계 인증" 클릭
3. "앱 비밀번호" 클릭
4. "앱 선택" → "기타(맞춤 이름)" 선택
5. 이름 입력: "EmailJS" 또는 "웹사이트 폼"
6. "생성" 클릭
7. **16자리 앱 비밀번호 복사** (중요!)

## 3. EmailJS에서 Gmail 재연결

1. EmailJS 대시보드에서 기존 Gmail 서비스 삭제
2. "Add New Service" → "Gmail" 선택
3. 이메일 주소 입력: `yeobg1022@gmail.com`
4. **앱 비밀번호 입력** (일반 비밀번호가 아닌 16자리 앱 비밀번호)
5. "Connect" 클릭

## 4. 권한 확인

### Gmail API 권한이 필요한 경우:
1. [Google Cloud Console](https://console.cloud.google.com/) 접속
2. 새 프로젝트 생성 또는 기존 프로젝트 선택
3. "API 및 서비스" → "라이브러리" 클릭
4. "Gmail API" 검색 후 활성화
5. "사용자 인증 정보" → "사용자 인증 정보 만들기" → "OAuth 2.0 클라이언트 ID"
6. 애플리케이션 유형: "웹 애플리케이션" 선택
7. 승인된 리디렉션 URI에 EmailJS URL 추가

## 5. 대안: Gmail 대신 다른 서비스 사용

### Gmail이 계속 문제가 있다면:
- **Outlook/Hotmail**: Microsoft 계정으로 연결
- **Yahoo Mail**: Yahoo 계정으로 연결
- **SendGrid**: 전문 이메일 서비스 (무료 티어 있음)

## 6. 테스트

1. EmailJS에서 "Send test email" 체크
2. 테스트 이메일 전송 확인
3. 오류 메시지가 사라졌는지 확인

## 문제 해결

### 여전히 오류가 발생하는 경우:
1. 2단계 인증이 정확히 활성화되었는지 확인
2. 앱 비밀번호를 정확히 입력했는지 확인
3. Gmail API가 활성화되었는지 확인
4. 브라우저 캐시 삭제 후 재시도

### 보안 경고가 나타나는 경우:
- "보안 수준이 낮은 앱의 액세스 허용" 설정 확인
- Google 계정 보안 설정에서 "앱 비밀번호" 사용 권장
