# React 블로그 구축 핵심 개념 요약 (2026-01-18)

오늘 블로그 프로젝트를 시작하며 익힌 React와 Vite 중심의 학습 내용입니다.

## 1. Vite를 이용한 현대적 개발 환경
- 기존 Webpack 기반의 `create-react-app`보다 빠른 속도와 간결한 설정을 경험했습니다.
- `public/` 폴더는 정적 자산을, `src/` 폴더는 동적 소스 코드를 관리하는 구조를 익혔습니다.

## 2. React Router & Basename
- **BrowserRouter**: 브라우저의 주소창과 리액트 앱을 동기화하여 SPA(Single Page Application)를 구현합니다.
- **Basename 설정**: GitHub Pages와 같이 하위 경로(예: `/goorm-course/`)에 앱이 배포될 때, 모든 라우팅 링크가 이 경로를 자동으로 인식하도록 설정하는 필수 과정을 다루었습니다.

## 3. Markdown의 React 컴포넌트 라이징
- `react-markdown` 라이브러리를 통해 마크다운 텍스트를 리액트의 유려한 UI 디자인과 결합하는 방법을 익혔습니다.
- 이를 통해 개발 로그를 작성할 때 마크다운의 편의성과 리액트의 디자인적 강점을 모두 활용할 수 있게 되었습니다.

> [!NOTE]  
> 이 블로그의 디자인은 **Glassmorphism** 컨셉을 적용하여 세련된 다크 모드 환경을 제공합니다.
