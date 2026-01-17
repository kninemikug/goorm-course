# 블로그 프로젝트 설정 및 배포 가이드

이 블로그 프로젝트를 처음부터 구축하거나 다시 설정할 때 필요한 기술적 가이드입니다.

## 1. 프로젝트 초기화 및 실행

```bash
cd blog
npm install
npm run dev
```

### 실행 화면 (미리보기)
![홈페이지 메인](../assets/images/homepage-preview.png)
![포스트 상세](../assets/images/detail-preview.png)

## 2. GitHub Pages 자동 배포 설정

본 프로젝트는 GitHub Actions를 통해 자동 배포됩니다.

1.  **워크플로우**: `.github/workflows/deploy.yml` 파일이 리포지토리 루트에 있어야 합니다.
2.  **구성 요소**:
    - 리포지토리 루트: `.github/`, `blog/`, `study-logs/` 등이 위치함.
    - `blog/vite.config.js`: `base: '/goorm-course/'` 설정 확인.
    - `blog/src/App.jsx`: `basename={basename}` (basename 보정 포함) 설정 확인.

## 3. GitHub 설정 (최초 1회)
- GitHub 리포지토리 -> **Settings** -> **Pages**
- **Build and deployment** 항목의 **Source**를 **"GitHub Actions"**로 선택

> [!IMPORTANT]  
> 배포 후 화면이 나오지 않는다면 `vite.config.js`의 `base` 경로와 리포지토리 이름이 일치하는지 가장 먼저 확인하세요.
