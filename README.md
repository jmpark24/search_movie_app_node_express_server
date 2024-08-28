# Search Movie App

## server 프로젝트

- 이 프로젝트에는 클라이언트 요청에 따라 OMDb API를 이용하여 영화 데이터를 요청 후 클라이언트에게 전달하는 코드를 작성해놓았습니다.
- 클라이언트 코드가 있는 저장소로 이동하면 서버 코드를 따로 실행하지 않고 배포되어있는 웹앱을 사용해보실 수 있습니다. [➡️클라이언트 코드 저장소로 이동하기](https://github.com/jmpark24/search_movie_app_react_ts_client)

---

## 실행 방법

1. 원격 저장소 복사하기

   ```bash
   git clone add https://github.com/jmpark24/search_movie_app_node_express_server.git
   ```

위 명령어를 통하여 원격 저장소를 복사합니다.

2. 필요 라이브러리 설치

   ```bash
   npm install
   # 또는
   yarn install
   ```

3. OMDb API KEY 발급

   - [OMDB API](https://www.omdbapi.com/)에서 `API Key`를 발급 받습니다.
   - 발급받은 키를 프로젝트 루트 경로에 .env 파일을 생성하여 YOUR_API_KEY라는 이름으로 저장합니다.

   ```env
   YOUR_API_KEY=발급받은키
   ```

4. 빌드 및 실행

   - Typescript 컴파일 및 실행:

   ```bash
   npm run build
   ```

   - 서버 시작:

   ```bash
   npm start
   ```

5. 클라이언트 코드 실행
   - 클라이언트 코드를 실행하여 웹앱을 사용해봅니다. 클라이언트 코드 저장소를 참조하여 실행 방법을 확인하세요.

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
  - "swagger-ui-express": "^5.0.1",
  - "yamljs": "^0.3.0"
- 개발 의존성:
  - "@types/cors": "^2.8.17",
  - "@types/express": "^4.17.21",
  - "@types/node": "^22.5.0",
  - "@types/swagger-ui-express": "^4.1.6",
  - "@types/yamljs": "^0.2.34",
  - "nodemon": "^3.1.4",
  - "typescript": "^5.5.4"

#### 4. 개발 도구

- IDE/에디터: `Visual Studio Code`
- 형식화 도구: `Prettier`

#### 5. 문서화

- 문서화 도구: `Swagger`
- 문서화 규칙:
  - OpenAPI Specification Version: 3.0.1
  - 파일 포맷: YAML
  - API 문서화 파일 위치: 프로젝트의 루트 디렉토리에 swagger.yaml 파일로 저장

#### 6. 기타

- 버전 관리: Git
  - ([➡️GitHub 저장소로 이동하기](https://github.com/jmpark24/search_movie_app_node_express_server))
- 배포:
  - github actions로 CI/CD 파이프라인 구축
  - AWS Elastic Beanstalk를 이용하여 서버 코드 배포
