# Search Movie App

## server 프로젝트

이 프로젝트에는 클라이언트 요청에 따라 OMDb API를 이용하여 영화 데이터를 요청 후 클라이언트에게 전달하는 코드를 작성해놓았습니다.
클라이언트 코드가 있는 저장소로 이동하면 서버 코드를 따로 실행하지 않고 배포되어있는 웹앱을 사용해보실 수 있습니다.

클라이언트 코드 저장소 : https://github.com/jmpark24/search_movie_app_react_ts_client

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
