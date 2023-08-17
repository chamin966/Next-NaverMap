## 🔗 [최종 결과물 배포 링크](https://next-naver-map-chamin966.vercel.app)

## 👏 프로젝트 시연 영상

[![Video Label](http://img.youtube.com/vi/YQXQa9J0d4M/0.jpg)](https://youtu.be/YQXQa9J0d4M)

## 🔍**프로젝트 결과 화면 사진**

### Home

![홈 화면](https://github.com/chamin966/Next-NaverMap/assets/98478661/48232573-a42e-440a-8573-302b315f94e1)

### Detail Section

![디테일 섹](https://github.com/chamin966/Next-NaverMap/assets/98478661/77f4694e-6d23-406b-a0d9-d68ad37faae6)

### Detail Section **- tab contents**

| ![탭1](https://github.com/chamin966/Next-NaverMap/assets/98478661/4c371fe1-42d8-484e-b869-161274d90027) | ![탭2](https://github.com/chamin966/Next-NaverMap/assets/98478661/0e7cff63-f691-494e-a57a-6379d7bc612d) | ![탭3](https://github.com/chamin966/Next-NaverMap/assets/98478661/bc7e5202-9803-4d28-9b59-dc106d8b4f1b) |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |

### Sidebar - expanded & folding

![폴딩 전](https://github.com/chamin966/Next-NaverMap/assets/98478661/8248c7f5-d803-44a3-94b2-6849d6c53923)
![폴딩 후](https://github.com/chamin966/Next-NaverMap/assets/98478661/869fbf12-a098-4f46-877b-9d903decbd47)

### Search result page

![검색 결과](https://github.com/chamin966/Next-NaverMap/assets/98478661/6126e368-058e-4488-b2c7-855c9f695df0)

### Marker - selected & deselected

| ![image.jpg1](https://github.com/chamin966/Next-NaverMap/assets/98478661/de697a77-3350-4a35-aceb-a937c238a764) | ![image.jpg2](https://github.com/chamin966/Next-NaverMap/assets/98478661/9d24bd74-2db6-4b24-a65e-220298866a4d) |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |

## Light house 성능 측정치

![light-house 성능 측정](https://github.com/chamin966/Next-NaverMap/assets/98478661/def3abcd-048d-451f-94b3-0b4b30c6e123)

## ✍️ 프로젝트 소개

해당 프로젝트는 Next.js를 학습하고 TypeScript 숙련도를 향상시키기 위해 진행한 프로젝트입니다.
주요 아이디어는 Naver 지도 API를 사용하여 지도 기반 서비스를 구현하는 것입니다.

## 💻 구현한 주요 기능

- 네이버 지도 API를 활용하여 지도 기반 서비스 구현
- 마커, 매장 클릭 시 URL에 매장명, id, 줌값, 좌표값 갱신,
  선택된 매장으로 지도 시점 이동
- getStaticProps를 활용한 데이터 API화 및 프리 렌더링
- 매장 검색 기능과 매장 선택 시 매장 위치로 지도 이동

## 😊 배운 점

- Naver 지도 API를 활용하여 지도 기반 서비스를 제작할 수 있음
- Next.js 환경에서 TypeScript를 활용하여 웹 개발을 진행할 수 있음
- swr을 활용하여 데이터의 상태 관리가 가능함
- 필요한 경우, 커스텀 훅을 제작하여 코드 가독성과 유지보수성을 높일 수 있음
- CSS-in-JS를 사용하기 힘든 경우에, SCSS를 활용하여 스타일 설정을 할 수 있음
- SCSS에서 Mixin, extends, includes 등의 문법을 활용하여 재사용성을 높일 수 있음
- Page directory와 Next Page를 활용하여 페이지 라우팅을 할 수 있음
- light house를 활용하여 성능, SEO, 웹 접근성에 대한 성능 개선을 할 수 있음
- Vercel을 활용한 웹 배포를 할 수 있음
- 네이버, 구글 검색 엔진에 사이트를 등록하고, 구글 애널리틱스 연동을 할 수 있음

## 😖 **문제 사항 및 아쉬운 점**

- light house의 performance 점수 100점을 받지 못함
  - LCP 문제라고 출력되어 sizes, priority 속성을 부여했음에도, 필요한 이미지의 크기보다
    더 큰 이미지를 불러오고 있다고 출력되었고, 내가 사용하는 이미지가 아닌, 네이버 지도 API의 이미지가 예시로 뜨는 것을 봐서는 API가 가진 문제로 추정됨.
- swr의 새로고침 시 데이터 유지가 안됨
  - useSwr 훅 사용 시에 새로고침 시 데이터 유지가 안되어, 추가적으로 url에 현재 선택된
    매장의 정보를 저장하고 새로 고침 후 빼내는 등의 번거로운 작업이 더해져야 했다.
    이 문제는 redux-persist 기능을 활용하면 훨씬 쉽게 해결될 것이기 때문에
    다음 프로젝트부터는 redux를 활용할 예정이다.
- 서버사이드 렌더링에 의해서 styled-components 적용 에러 발생
  - next.js를 사용하는 주요 이유인 프리 렌더링에서 CSS-in-JS를 사용하기 위해서는
    추가적인 작업이 필요했는데, 공식 문서에서의 필요한 작업을 다 시행했음에도,
    새로고침시 CSS가 변경되지 않는 버그가 있었기에 SCSS를 활용하여 스타일링 작업을
    시행하였다.

## 🖼️ 레퍼런스

- [네이버 지도](https://map.naver.com/p/)
