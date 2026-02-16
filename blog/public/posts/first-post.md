# GitHub Pages로 블로그 시작하기

GitHub Pages는 개발자에게 있어 최고의 포트폴리오이자 블로그 호스팅 서비스입니다.

## 왜 GitHub Pages인가?
1. **무료 호스팅**: 비용이 전혀 들지 않습니다.
2. **버전 관리**: Git을 통해 글의 수정 이력을 관리할 수 있습니다.
3. **커스텀 도메인**: 나만의 도메인을 연결할 수 있습니다.

## 시작하기
`username.github.io` 레포지토리를 만들고 `index.html`을 올리면 끝입니다.

```bash
git clone https://github.com/username/username.github.io
cd username.github.io
echo "Hello World" > index.html
git add .
git commit -m "Initial commit"
git push origin main
```
