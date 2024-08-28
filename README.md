# Search Movie App

## server 프로젝트

- 이 프로젝트에는 클라이언트 요청에 따라 OMDb API를 이용하여 영화 데이터를 요청 후 클라이언트에게 전달하는 코드를 작성해놓았습니다.
- 클라이언트 코드가 있는 저장소로 이동하면 서버 코드를 따로 실행하지 않고 배포되어있는 웹앱을 사용해보실 수 있습니다.

- 클라이언트 코드 저장소 : https://github.com/jmpark24/search_movie_app_react_ts_client

---

## 실행 방법

1. 원격 저장소 복사하기

`git remote add https://github.com/jmpark24/search_movie_app_node_express_server.git`
위 명령어를 통하여 원격 저장소를 복사합니다.

2. 필요 라이브러리 설치

   - `npm install` 명령어를 통해 `package.json`에 있는 라이브러리들을 설치합니다.

3. OMDb API KEY 발급

   - https://www.omdbapi.com/ 에 접속하여 상단 메뉴 중 API Key 페이지로 이동 후 `FREE! (1,000 daily limit)` 을 선택 후 `API Key`를 발급 받습니다.
   - 프로젝트 루트 경로에 .env 파일을 생성 후 `YOUR_API_KEY` 라는 이름으로 키 값을 넣습니다.
   - (예시: `YOUR_API_KEY=발급받은키`)

4. `npm run build` 명령어를 통해 미리 설정 된 `tsx -w` 를 실행합니다.

5. `npm run start` 명령어를 통해 미리 설정 된`nodemon dist/server.js` 를 실행합니다.

6. 클라이언트 코드를 실행하여 웹앱을 사용해봅니다.

---

## 개발 환경

#### 1. 프로젝트 개요

- 프로젝트 이름: `search_movie_app_node_express_server`
- 버전: `"1.0.0"`

#### 2. 개발 소프트웨어 및 도구

- 운영 체제: Windows 11
- 프로그램: Node.js

#### 3. 패키지 및 모듈

- 의존성:
  - "cors": "^2.8.5",
  - "dotenv": "^16.4.5",
  - "express": "^4.19.2",
  - "ip": "^2.0.1",
  - "node-fetch": "^3.3.2"
- 개발 의존성:
  - "@types/cors": "^2.8.17",
  - "@types/express": "^4.17.21",
  - "@types/node": "^22.5.0",
  - "nodemon": "^3.1.4",
  - "typescript": "^5.5.4"

#### 4. 설치 및 설정

- 의존성 설치: 프로그램 루트 디렉토리에서 다음 명령어를 실행하여 패키지를 설치합니다.
  ```bash
     npm install
     또는
     yarn install
  ```
- 환경 변수: 프로젝트의 루트 디렉토리에 .env 파일을 생성하고, 필요한 환경 변수를 정의합니다. 예를 들어:
  ```env
     YOUR_API_KEY=발급받은키
  ```
- API 발급받는 방법:
  - https://www.omdbapi.com/ 에 접속하여 상단 메뉴 중 `API Key` 페이지로 이동 후 `FREE! (1,000 daily limit)` 을 선택 후 `API Key`를 발급 받습니다.

#### 5. 빌드 및 실행

빌드 명령어: 코드를 빌드하는 명령어 (예: npm run build).
실행 명령어: 애플리케이션을 시작하는 명령어 (예: npm start).

#### 6. 개발 도구

IDE/에디터: `Visual Studio Code`

#### 7. 코딩 표준 및 스타일

형식화 도구: `Prettier`

#### 9. 문서화

문서화 도구: API 문서화 도구나 라이브러리 (예: JSDoc, Swagger).
문서화 규칙: 문서화 시 지켜야 할 규칙과 형식.

#### 10. 기타

버전 관리: 사용하는 버전 관리 시스템 (예: Git) 및 리포지토리 URL.
배포: 애플리케이션을 배포하는 방법과 도구 (예: Docker, CI/CD 파이프라인).
