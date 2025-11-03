# 검진 예약 폼용 EmailJS 템플릿

## 템플릿 내용 (EmailJS 대시보드에 복사해서 붙여넣기)

```
새로운 검진 예약 요청이 접수되었습니다.

이름: {{from_name}}
연락처: {{from_phone}}
이메일: {{from_email}}
검진 희망 지역: {{location}}
검진 희망 날짜: {{preferred_date}}
검진 희망 시간: {{preferred_time}}
검진 목적: {{purpose}}

특이사항 및 요청사항:
{{special_notes}}

---
이 이메일에 답장하시면 {{from_email}}로 전송됩니다.
```

## HTML 버전

```html
<!DOCTYPE html>
<html>
<head>
    <title>새로운 검진 예약 요청</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <h2 style="color: #2F9A88;">새로운 검진 예약 요청이 접수되었습니다</h2>
    
    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
        <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold; width: 150px;">이름</td>
            <td style="padding: 12px; border: 1px solid #ddd;">{{from_name}}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">연락처</td>
            <td style="padding: 12px; border: 1px solid #ddd;">{{from_phone}}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">이메일</td>
            <td style="padding: 12px; border: 1px solid #ddd;">{{from_email}}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">검진 희망 지역</td>
            <td style="padding: 12px; border: 1px solid #ddd;">{{location}}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">검진 희망 날짜</td>
            <td style="padding: 12px; border: 1px solid #ddd;">{{preferred_date}}</td>
        </tr>
        <tr>
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">검진 희망 시간</td>
            <td style="padding: 12px; border: 1px solid #ddd;">{{preferred_time}}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
            <td style="padding: 12px; border: 1px solid #ddd; font-weight: bold;">검진 목적</td>
            <td style="padding: 12px; border: 1px solid #ddd;">{{purpose}}</td>
        </tr>
    </table>
    
    <h3 style="color: #2F9A88;">특이사항 및 요청사항:</h3>
    <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #2F9A88; margin: 20px 0;">
        <p style="margin: 0; white-space: pre-wrap;">{{special_notes}}</p>
    </div>
    
    <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
    <p style="color: #666; font-size: 14px;"><em>이 이메일에 답장하시면 {{from_email}}로 전송됩니다.</em></p>
</body>
</html>
```

## 설정 방법

1. EmailJS 대시보드 접속: https://dashboard.emailjs.com/admin
2. "Email Templates" 클릭
3. 기존 템플릿(`template_u68nv5x`)을 선택하거나 새 템플릿 생성
4. 위의 HTML 버전을 복사해서 붙여넣기
5. **To Email** 필드에 `{{to_email}}` 또는 직접 `yeobg1022@gmail.com` 입력
6. **Reply To** 필드에 `{{reply_to}}` 또는 `{{from_email}}` 입력
7. 저장

## 템플릿 변수 목록

폼에서 전송되는 변수들:
- `{{from_name}}` - 이름
- `{{from_phone}}` - 연락처
- `{{from_email}}` - 이메일
- `{{location}}` - 검진 희망 지역
- `{{preferred_date}}` - 검진 희망 날짜
- `{{preferred_time}}` - 검진 희망 시간
- `{{purpose}}` - 검진 목적
- `{{special_notes}}` - 특이사항 및 요청사항
- `{{to_email}}` - 받을 이메일 주소 (yeobg1022@gmail.com)
- `{{reply_to}}` - 답장 받을 이메일 (폼 입력한 이메일)

## 테스트 방법

1. 개발 서버 실행: `pnpm dev`
2. 검진 예약 폼에 테스트 데이터 입력
3. 제출 버튼 클릭
4. `yeobg1022@gmail.com` 메일함 확인 (스팸함도 확인)
5. EmailJS 대시보드 → "Activity"에서 전송 로그 확인

