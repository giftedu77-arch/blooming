# 부산 바다 클린 리워드 앱

Expo 기반 React Native + TypeScript 프로토타입입니다. 부산 해양 인증 지역의 GPS 확인, 카메라 인증 진입, AI 분석 Mock, 포인트 적립과 리워드 교환 UI를 제공합니다.

## 실행

이 작업 공간에서는 [실행하기.bat](./실행하기.bat)를 더블 클릭하면 Expo 개발 서버가 시작됩니다. 휴대폰에 **Expo Go** 앱을 설치한 뒤, 같은 Wi-Fi에 연결하고 표시되는 QR 코드를 스캔하면 바로 실행됩니다.

Node.js 20 이상이 설치된 환경에서는 아래 명령도 사용할 수 있습니다.

```bash
npm install
npm start
```

Expo Go 또는 Android/iOS 시뮬레이터에서 열 수 있습니다. 실제 기기에서 GPS 인증을 시도해야 위치 판정이 동작합니다.

## 구조

- `app/index.tsx`: 화면, 사이드 메뉴, 인증 및 리워드 UI
- `services/locationService.ts`: 인증 가능 해양 지역과 GPS 거리 판정
- `services/aiAnalysisService.ts`: 교체 가능한 AI 분석 Mock 및 포인트 계산
- `data/mockData.ts`: 사용자, 순위, 리워드 Mock 데이터

현재 카메라 화면의 녹화 버튼은 테스트용으로 분석 결과를 즉시 생성합니다. 실제 영상 녹화와 업로드를 붙일 때에는 `mockUpload`에서 파일 URI를 `analyzeTrashVideo`로 전달하고, 해당 서비스만 실제 AI API 호출로 바꾸면 됩니다.
