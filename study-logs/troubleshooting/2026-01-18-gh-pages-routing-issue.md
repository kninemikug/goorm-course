# GitHub Pages 하위 경로 배포 이슈 해결 (2026-01-18)

GitHub Pages에 React(Vite) 앱을 배포하며 겪은 경로 관련 문제와 그 해결책을 정리합니다.

## 1. 워크플로우 파일 인식 문제
- **현상**: `blog` 서브 폴더 내부에 `.github/workflows/`를 두었으나 배포가 동작하지 않음.
- **원인**: GitHub Actions 워크플로우 파일은 반드시 **리포지토리 최상위 루트**의 `.github/workflows/`에 있어야 함.
- **해결**: 파일을 최상위 루트로 이동시키고, `cd blog` 명령어를 추가하여 빌드 경로를 조정함.

## 2. 하위 경로 배포 시 리소스(JS/CSS) 로드 실패
- **현상**: 배포된 페이지에서 빈 화면만 나오고 콘솔에 리소스를 찾을 수 없다는 에러 발생.
- **원인**: `/index.js`와 같이 절대 경로로 참조하면 도메인 루트(ID.github.io/)를 바라보기 때문.
- **해결**: `vite.config.js`에 `base: '/goorm-course/'` 설정을 추가하여 모든 경로가 하위 폴더를 기준으로 생성되도록 보정함.

## 3. React Router 링크 클릭 시 URL 유실 문제
- **현상**: 링크를 클릭하면 subpath인 `/goorm-course/`가 사라짐.
- **원인**: `basename` 설정의 마지막 슬래시(`/`)가 매칭 로직에 영향을 주어 루트로 인식되는 현상.
- **해결**: `import.meta.env.BASE_URL.replace(/\/$/, "")`를 통해 끝 슬래시를 제거한 경로를 `basename`으로 주입하여 해결함.
