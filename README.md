# C&L 코메치 연구소 웹사이트

Next.js(App Router) + Tailwind CSS로 만든 사이트입니다. 모든 텍스트/이미지 콘텐츠는
[content/data.json](content/data.json) 한 파일에서 관리합니다. 문의 폼은 이메일로 바로
전송되고, 자료실(제품 사진·기술 글)은 네이버 블로그([blog.naver.com/komechi](https://blog.naver.com/komechi))와
연결되어 있어 블로그에 글만 쓰면 사이트 수정 없이 바로 반영됩니다.

## 1. 준비물 설치

- [Node.js](https://nodejs.org) 18 이상 설치 후 확인

```powershell
node -v
npm -v
```

## 2. 프로젝트 설치 및 실행

```powershell
npm install
npm run dev
```

`http://localhost:3000` 접속하면 사이트가 보입니다.

## 3. 문의 폼 이메일 연결 (필수 — 이거 하나만 하면 문의 폼이 실제로 작동합니다)

문의 폼은 [Web3Forms](https://web3forms.com)라는 무료 서비스를 통해 이메일로 전송됩니다.
서버나 회원가입한 이메일 서비스 설정 없이, 키 하나만 발급받아 넣으면 끝입니다.

1. https://web3forms.com 접속 → 이메일(komechi@naver.com)만 입력하고 "Create Access Key" 클릭
2. 발급받은 이메일에서 도착한 **Access Key**를 복사
3. [content/data.json](content/data.json)을 열어 `contact.web3formsAccessKey` 값을
   `"YOUR_WEB3FORMS_ACCESS_KEY"`에서 발급받은 키로 교체

```json
"web3formsAccessKey": "여기에-발급받은-키-붙여넣기"
```

이제 사이트 하단 "간편 이메일 문의 폼"에 입력하고 제출하면 `komechi@naver.com`으로 바로 메일이
도착합니다. 무료 요금제 기준 월 250건까지 전송 가능(일반적인 문의량엔 충분합니다).

## 4. 콘텐츠 수정 방법

[content/data.json](content/data.json) 파일 하나로 사이트 전체 문구/이미지/연락처를 관리합니다.

| 항목 | 설명 |
|---|---|
| `topBar` | 최상단 얇은 안내 바 문구 |
| `header` | 로고, 전화번호, 검색창 안내문 |
| `nav` | 상단 메뉴 (자료실은 네이버 블로그로 바로 연결됨) |
| `hero` | 첫 화면 제목/부제목/버튼/배경사진 |
| `business` | 제품소개 3개 탭, 탭마다 카드 3개 |
| `partnership` | 파트너십 카드 목록, 산업군/권역 필터 |
| `promise` | 강점 소개 (통계 2개 + 포인트 3개) |
| `process` | 상담→생산 4단계 |
| `resources` | 자료실 미리보기 카드 + 네이버 블로그 링크 |
| `location` | 지도, 주소, 연락처 |
| `contact` | 문의 폼 안내 문구, 문의 유형 목록 |
| `footer` | 하단 저작권 문구 |

이미지는 [public/images](public/images) 폴더에 넣고 `data.json`의 `"image"` 경로를 맞춰주면
됩니다. 자세한 파일명 목록은 [public/images/README.txt](public/images/README.txt) 참고.

## 5. 자료실 = 네이버 블로그 연동

사이트 상단 메뉴의 "자료실"과 본문의 "자료실 보기" 버튼은 모두
`https://blog.naver.com/komechi`로 연결되어 있습니다. 사이트 코드를 건드리지 않고
**네이버 블로그에 글/사진을 올리기만 하면** 방문자가 최신 자료를 바로 볼 수 있습니다.

블로그 주소가 바뀌면 [content/data.json](content/data.json)에서 아래 두 곳을 수정하세요.

- `nav` 배열 중 `"label": "자료실"` 항목의 `href`
- `resources.blogUrl`

## 6. 배포 (Vercel + 개인 도메인)

무료로, 하루 요청 제한 걱정 없이 운영할 수 있는 Vercel 배포 방법입니다.

1. 이 프로젝트를 GitHub 저장소에 올립니다 (GitHub Desktop 또는 아래 명령어 사용).

   ```powershell
   git init
   git add .
   git commit -m "초기 웹사이트"
   ```
   이후 GitHub에서 새 저장소를 만들고 안내되는 명령어로 push 합니다.

2. https://vercel.com 에서 GitHub 계정으로 로그인 → "Add New Project" → 방금 만든 저장소 선택
   → 설정 그대로 두고 "Deploy" 클릭. 몇 분 뒤 `https://프로젝트이름.vercel.app` 주소가 생깁니다.

3. 이후 `content/data.json`을 수정해서 GitHub에 다시 push(commit)할 때마다 사이트가
   자동으로 새로 배포됩니다.

4. **개인 도메인 연결**: 가비아, 후이즈, Cloudflare 등에서 도메인을 구매한 뒤, Vercel
   프로젝트의 Settings → Domains 에서 구매한 도메인을 추가하고, 안내되는 DNS 값을
   도메인 구매처 관리 화면에 등록하면 연결됩니다 (보통 몇 분~몇 시간 내 반영).

## 폴더 구조

```
app/
  layout.js       공통 레이아웃, 메타데이터
  page.js         메인 페이지 (모든 섹션 조립)
  globals.css     Tailwind 전역 스타일
components/       Header, Hero, Business, Partnership, PromiseSection,
                  Process, Resources, Location, Contact, Footer, TopBar
content/
  data.json       ← 이 파일만 고치면 사이트 내용이 바뀝니다
public/images/    이미지 파일 저장 위치
```
