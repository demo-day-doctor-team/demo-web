# EmailJS 설정 가이드

## 1. EmailJS 계정 생성

1. [EmailJS 웹사이트](https://www.emailjs.com/)에 접속
2. "Get Started Free" 클릭하여 무료 계정 생성
3. 이메일 인증 완료

## 2. 이메일 서비스 연결

1. EmailJS 대시보드에서 "Email Services" 클릭
2. "Add New Service" 클릭
3. 원하는 이메일 서비스 선택 (Gmail, Outlook 등)
4. 서비스 연결 완료 후 **Service ID** 복사

## 3. 이메일 템플릿 생성

1. "Email Templates" 클릭
2. "Create New Template" 클릭
3. 템플릿 내용 작성:

```html
새로운 상담 요청이 접수되었습니다.

담당자: {{from_name}}
회사: {{from_company}}
이메일: {{from_email}}
예상 인원: {{expected_count}}
희망 시작 시기: {{timeline}}

메시지:
{{message}}

---
이 이메일에 답장하시면 {{from_email}}로 전송됩니다.
```

4. 템플릿 저장 후 **Template ID** 복사

## 4. API 키 확인

1. "Account" → "API Keys" 클릭
2. **Public Key** 복사

## 5. 환경 변수 설정

1. 프로젝트 루트에 `.env.local` 파일 생성
2. 다음 내용 추가:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
NEXT_PUBLIC_RECIPIENT_EMAIL=your-email@example.com
```

3. `your_*` 부분을 실제 값으로 교체

## 6. 테스트

1. 개발 서버 재시작: `pnpm dev`
2. 폼에 테스트 데이터 입력
3. 제출 후 이메일 수신 확인

## 문제 해결

### 이메일이 오지 않는 경우:
- Service ID, Template ID, Public Key가 정확한지 확인
- 이메일 서비스 연결이 완료되었는지 확인
- 스팸함 확인

### 오류가 발생하는 경우:
- 브라우저 개발자 도구 콘솔에서 오류 메시지 확인
- 환경 변수가 올바르게 설정되었는지 확인
