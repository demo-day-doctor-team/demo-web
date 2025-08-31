# EmailJS 템플릿 설명

## 템플릿이란?

**템플릿** = 폼 데이터를 받아서 이메일로 보낼 때 사용하는 **이메일 양식**

## 템플릿 예시

### 1. 기본 템플릿
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

### 2. HTML 형식 템플릿
```html
<!DOCTYPE html>
<html>
<head>
    <title>새로운 상담 요청</title>
</head>
<body>
    <h2>새로운 상담 요청이 접수되었습니다</h2>
    
    <table>
        <tr>
            <td><strong>담당자:</strong></td>
            <td>{{from_name}}</td>
        </tr>
        <tr>
            <td><strong>회사:</strong></td>
            <td>{{from_company}}</td>
        </tr>
        <tr>
            <td><strong>이메일:</strong></td>
            <td>{{from_email}}</td>
        </tr>
        <tr>
            <td><strong>예상 인원:</strong></td>
            <td>{{expected_count}}</td>
        </tr>
        <tr>
            <td><strong>희망 시작 시기:</strong></td>
            <td>{{timeline}}</td>
        </tr>
    </table>
    
    <h3>메시지:</h3>
    <p>{{message}}</p>
    
    <hr>
    <p><em>이 이메일에 답장하시면 {{from_email}}로 전송됩니다.</em></p>
</body>
</html>
```

## 템플릿 변수 설명

- `{{from_name}}` → 폼에서 입력한 "담당자 이름"
- `{{from_company}}` → 폼에서 입력한 "회사명"
- `{{from_email}}` → 폼에서 입력한 "이메일"
- `{{expected_count}}` → 폼에서 선택한 "예상 인원"
- `{{timeline}}` → 폼에서 선택한 "희망 시작 시기"
- `{{message}}` → 폼에서 입력한 "메시지"

## 실제 동작 과정

1. **사용자가 폼 제출**
   - 담당자: 홍길동
   - 회사: (주)테스트
   - 이메일: test@company.com
   - 예상 인원: 50-100명
   - 희망 시작 시기: 1개월 이내
   - 메시지: 상담 요청합니다

2. **EmailJS가 템플릿에 데이터 삽입**
   ```
   새로운 상담 요청이 접수되었습니다.

   담당자: 홍길동
   회사: (주)테스트
   이메일: test@company.com
   예상 인원: 50-100명
   희망 시작 시기: 1개월 이내

   메시지:
   상담 요청합니다

   ---
   이 이메일에 답장하시면 test@company.com로 전송됩니다.
   ```

3. **완성된 이메일을 지정된 주소로 전송**

## 템플릿 설정 방법

1. EmailJS 대시보드 → "Email Templates"
2. "Create New Template" 클릭
3. 위의 예시 중 하나를 복사해서 붙여넣기
4. 저장 후 Template ID 복사
