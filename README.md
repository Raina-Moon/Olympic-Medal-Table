# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

1. Project Title : 2024 파리 올림픽 메달 트랙커

2. Features
(1) 국가 추가 : 국가명과 메달 수를 입력하면 리스트에 추가됨
(2) 업데이트 버튼 : 리스트에 이미 추가된 국가명의 메달 갯수를 업데이트 할 수 있음
(3) 국가 삭제 : 국가 삭제를 해서 리스트에서 제거함
(4) 자동 정렬 : 금메달 갯수에 따라 내림차순으로 정리함
(5) 중복 방지 : 리스트 내에 있는 국가명과 같은 걸 중복으로 처리하는 경우 alert 메시지가 뜸

3. Component Structure
(1) App.jsx : 최상위 컴포넌트임, MedalForm랑 MedalList 컴포넌트를 렌더링함
(2) MedalForm : 새로운 국가를 추가하거나 기존 국가의 메달 수를 업데이트할 수 있음
   * Props : `addCountry`, `modifyCountry`, `countries`
(3) MedalList : 국가 목록을 보여주는 컴포넌트
   *Props : `countries`, `deleteCountry`

