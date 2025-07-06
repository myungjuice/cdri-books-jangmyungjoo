# CDRI 사전과제

안녕하세요. 장명주입니다.

이 프로젝트는 CDRI에서 진행하는 사전과제용으로 진행한 프로젝트입니다.

---

## 프로젝트 개요

CDRI 사전과제는 도서 검색, 위시리스트 관리 등 기본적인 CRUD와 상태 관리, API 연동, UI/UX를 종합적으로 구현하는 과제입니다.
<br />실제 서비스에 가까운 구조와 사용자 경험을 목표로 했습니다.

---

## 프로젝트 개요

주요 기술 스택: react, typescript, tailwindcss, shadcn/ui, react-query

---

## 실행 방법 및 환경 설정

1. **의존성 설치**

```sh
pnpm install
```

2. **개발 서버 실행**

```sh
pnpm run dev
```

3. **프로덕션 빌드**

```sh
pnpm run build
```

- Node.js 18 이상, pnpm 8 이상 환경에서 동작합니다.
- 제출한 환경 변수(.env) 파일을 프로젝트 `root(/)` 경로에 넣어주시면 됩니다.

---

## 사이트 배포

- 이 프로젝트는 Netlify로 배포했습니다.
- [[여기]](https://cdri-books-jangmyungjoo.netlify.app/)를 클릭하시면 사이트를 바로 구경해 보실 수 있어요!

---

## 폴더 구조 및 주요 코드 설명

```
src/
  ├─ assets/         # 이미지, 아이콘 등 정적 리소스
  ├─ components/     # 공통 UI 컴포넌트 및 레이아웃
  ├─ domains/        # 도메인별(books, wishlist) 비즈니스 로직과 UI
  ├─ hooks/          # 커스텀 훅
  ├─ libs/           # API, 유틸리티 함수
  ├─ pages/          # 라우트 단위 페이지 컴포넌트
  ├─ store/          # 글로벌 상태 관리(zustand)
  ├─ styles/         # 스타일(Tailwind, CSS, 색상, 타이포그래피)
  └─ types/          # 타입 정의
```

- **components/layouts/**: 공통 Layout, Header 컴포넌트를 모아둔 폴더입니다.
- **components/shared/**: ErrorBoundary, Spinner, Popover 등 재사용 가능한 UI 컴포넌트를 모아둔 폴더입니다.
- **components/ui/**: 순수 UI 컴포넌트(Button, Input 등) 혹은 shadcn/ui에서 설치한 컴포넌트를 모아둔 폴더입니다.
- **domains/[도메인명]/**: 해당 도메인에 관련된 것들만 모아둔 폴더입니다. 이곳에 있는 `api, store 등`은 모두 해당 도메인에서만 사용하는 파일입니다.
  <br />만약 이곳에 있다가 다른 domain에서 사용하게 된다면 밖으로 빼서 공통으로 사용합니다.
- **hooks/**: custom hook을 모아둔 폴더입니다.
- **libs/**: api 관련 폴더 및 util 함수를 모아둔 폴더입니다.
- **pages/**: Routes 및 각 도메인의 page component를 모아둔 폴더 입니다.
- **store/**: zustand로 전역 상태 관련 파일을 모아둔 폴더입니다.
- **styles/**: style 관련 파일을 모아둔 폴더입니다.

---

## 라이브러리 선택한 이유

- **zustand**: 가볍고 직관적인 글로벌 상태 관리가 가능하고 persist middleware 기능으로 localStorage에 저장하여 데이터 관리가 쉽습니다.
- **react-hot-toast**: 설치 및 사용이 매우 편합니다.
- **Tailwind CSS**: 빠르고 일관된 UI 스타일링이 가능합니다.
- **shadcn/ui**: tailwindcss와 굉장히 밀접하며, 필요한 컴포넌트만 설치해서 사용이 가능합니다. 그리고 100% custom이 가능합니다.
- **axios**: 이번 과제에서는 기본 fetch를 사용해도 충분하지만, 그래도 확장성을 고려한다면 추후에 interceptor를 사용하기 위해 axios가 낫다고 판단했습니다.

---

## 강조하고 싶은 기능 (과제 요청사항에 없는 것들만)

- **에러 바운더리 & Fallback UI**: 예기치 못한 에러 발생 할 경우를 대비하여 ErrorBoundary를 추가해뒀습니다.
- **토스트 메시지**: 찜 목록에 추가 및 삭제 할 때 toast message를 보여줌으로써 좀 더 직관적인 사용자 경험을 제공합니다.
- **페이지네이션**: Pagination 기능을 추가하여 각 page별로 데이터를 쉽게 볼 수 있습니다.
- **로딩 및 에러처리**: API 요청시 로딩 및 에러처리를 추가하여 사용자 경험을 높였습니다.
- **이미지 컴포넌트**: 커스텀 Image 컴포넌트로 로딩/에러 처리하였습니다.
- **task 관리**: 해야 할 일을 issue로 최대한 작성하여 일을 효율적으로 관리했습니다.
  - [[⛳ Goal: 사전과제 제출]](https://github.com/myungjuice/cdri-books-jangmyungjoo/issues/1) 에서 issue를 확인하실 수 있습니다!

---

## 마지막으로 하고싶은 말

정말 재밌게 과제를 진행한 거 같습니다. <br />
이상한 곳에서 시간을 많이 잡아먹어서 생각보다 시간이 부족했던 거 같습니다..(변수명 짓기, 폴더 구조 등)<br />
더 보완하거나 개선하고 싶은 부분이 있지만 시간 계산을 잘못하여 이정도로 하고 마무리해야 한다는 게 살짝 아쉽네요..<br />
부족하지만 정말 열심히 진행했습니다.<br />
잘 부탁드립니다! <br /><br />
감사합니다.<br />
장명주 드림.
