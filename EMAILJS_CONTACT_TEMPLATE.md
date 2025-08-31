# EmailJS Contact Us 템플릿 내용

## 복사해서 붙여넣기용 템플릿

### 1. 기본 텍스트 버전 (복사용)
```
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

### 2. HTML 버전 (복사용)
```html
<!DOCTYPE html>
<html>
<head>
    <title>새로운 상담 요청</title>
</head>
<body>
    <h2>새로운 상담 요청이 접수되었습니다</h2>
    
    <p><strong>담당자:</strong> {{from_name}}</p>
    <p><strong>회사:</strong> {{from_company}}</p>
    <p><strong>이메일:</strong> {{from_email}}</p>
    <p><strong>예상 인원:</strong> {{expected_count}}</p>
    <p><strong>희망 시작 시기:</strong> {{timeline}}</p>
    
    <h3>메시지:</h3>
    <p>{{message}}</p>
    
    <hr>
    <p><em>이 이메일에 답장하시면 {{from_email}}로 전송됩니다.</em></p>
</body>
</html>
```

### 3. 테이블 형식 버전 (복사용)
```html
<!DOCTYPE html>
<html>
<head>
    <title>새로운 상담 요청</title>
</head>
<body>
    <h2>새로운 상담 요청이 접수되었습니다</h2>
    
    <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
        <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">담당자</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{from_name}}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">회사</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{from_company}}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">이메일</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{from_email}}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">예상 인원</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{expected_count}}</td>
        </tr>
        <tr style="background-color: #f8f9fa;">
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">희망 시작 시기</td>
            <td style="padding: 10px; border: 1px solid #ddd;">{{timeline}}</td>
        </tr>
    </table>
    
    <h3>메시지:</h3>
    <div style="background-color: #f8f9fa; padding: 15px; border-left: 4px solid #007bff; margin: 20px 0;">
        <p style="margin: 0;">{{message}}</p>
    </div>
    
    <hr style="margin: 30px 0;">
    <p style="color: #666; font-size: 14px;"><em>이 이메일에 답장하시면 {{from_email}}로 전송됩니다.</em></p>
</body>
</html>
```

## 사용 방법

1. **EmailJS 대시보드**에서 "Contact Us" 템플릿 선택
2. 위의 내용 중 원하는 버전을 **복사**
3. EmailJS 템플릿 편집기에 **붙여넣기**
4. **저장**

## 템플릿 변수 설명

- `{{from_name}}` → 폼의 "담당자 이름" 필드
- `{{from_company}}` → 폼의 "회사명" 필드  
- `{{from_email}}` → 폼의 "이메일" 필드
- `{{expected_count}}` → 폼의 "예상 인원" 선택값
- `{{timeline}}` → 폼의 "희망 시작 시기" 선택값
- `{{message}}` → 폼의 "메시지" 텍스트 영역

## 추천

**테이블 형식 버전**을 추천합니다. 깔끔하고 읽기 쉽게 정리되어 있어서 상담 요청 내용을 한눈에 파악할 수 있습니다.
