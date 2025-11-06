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

## HTML 버전 (폼 양식 그대로 보이는 버전)

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>새로운 검진 예약 요청</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f9fafb;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px;">
        <!-- 헤더 -->
        <div style="text-align: center; margin-bottom: 40px; padding-bottom: 20px; border-bottom: 2px solid #e5e7eb;">
            <h1 style="color: #2F9A88; font-size: 28px; font-weight: 700; margin: 0 0 10px 0;">새로운 검진 예약 요청</h1>
            <p style="color: #6b7280; font-size: 14px; margin: 0;">찾아검진 예약 시스템</p>
        </div>

        <!-- 폼 필드 스타일로 표시 -->
        <div style="background-color: #ffffff; border: 2px solid #e5e7eb; border-radius: 12px; padding: 30px; margin-bottom: 20px;">
            
            <!-- 이름 -->
            <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">
                    이름 <span style="color: #ef4444;">*</span>
                </label>
                <div style="background-color: #f9fafb; border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; color: #111827; font-size: 16px;">
                    {{from_name}}
                </div>
            </div>

            <!-- 연락처와 이메일 (2열) -->
            <div style="display: table; width: 100%; margin-bottom: 24px;">
                <div style="display: table-cell; width: 48%; padding-right: 2%; vertical-align: top;">
                    <label style="display: block; font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">
                        연락처 <span style="color: #ef4444;">*</span>
                    </label>
                    <div style="background-color: #f9fafb; border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; color: #111827; font-size: 16px;">
                        {{from_phone}}
                    </div>
                </div>
                <div style="display: table-cell; width: 48%; padding-left: 2%; vertical-align: top;">
                    <label style="display: block; font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">
                        이메일 <span style="color: #ef4444;">*</span>
                    </label>
                    <div style="background-color: #f9fafb; border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; color: #111827; font-size: 16px;">
                        {{from_email}}
                    </div>
                </div>
            </div>

            <!-- 검진 희망 지역 -->
            <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">
                    검진 희망 지역 <span style="color: #ef4444;">*</span>
                </label>
                <div style="background-color: #f9fafb; border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; color: #111827; font-size: 16px;">
                    {{location}}
                </div>
            </div>

            <!-- 검진 희망 날짜와 시간 (2열) -->
            <div style="display: table; width: 100%; margin-bottom: 24px;">
                <div style="display: table-cell; width: 48%; padding-right: 2%; vertical-align: top;">
                    <label style="display: block; font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">
                        검진 희망 날짜 <span style="color: #ef4444;">*</span>
                    </label>
                    <div style="background-color: #f9fafb; border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; color: #111827; font-size: 16px;">
                        {{preferred_date}}
                    </div>
                </div>
                <div style="display: table-cell; width: 48%; padding-left: 2%; vertical-align: top;">
                    <label style="display: block; font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">
                        검진 희망 시간 <span style="color: #ef4444;">*</span>
                    </label>
                    <div style="background-color: #f9fafb; border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; color: #111827; font-size: 16px;">
                        {{preferred_time}}
                    </div>
                </div>
            </div>

            <!-- 검진 목적 -->
            <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">
                    검진 목적
                </label>
                <div style="background-color: #f9fafb; border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; color: #111827; font-size: 16px;">
                    {{purpose}}
                </div>
            </div>

            <!-- 특이사항 및 요청사항 -->
            <div style="margin-bottom: 24px;">
                <label style="display: block; font-size: 14px; font-weight: 600; color: #374151; margin-bottom: 8px;">
                    특이사항 및 요청사항
                </label>
                <div style="background-color: #f9fafb; border: 1px solid #d1d5db; border-radius: 8px; padding: 12px 16px; color: #111827; font-size: 16px; min-height: 80px; white-space: pre-wrap;">
                    {{special_notes}}
                </div>
            </div>

        </div>

        <!-- 푸터 -->
        <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e5e7eb; margin-top: 30px;">
            <p style="color: #6b7280; font-size: 14px; margin: 0 0 10px 0;">
                이 이메일에 답장하시면 <strong style="color: #2F9A88;">{{from_email}}</strong>로 전송됩니다.
            </p>
            <p style="color: #9ca3af; font-size: 12px; margin: 0;">
                찾아검진 예약 시스템 | 자동 발송 메일
            </p>
        </div>
    </div>
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

