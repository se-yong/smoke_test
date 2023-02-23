# 기반 이미지 설정
FROM node:14-alpine

# 작업 디렉토리 생성
WORKDIR /app

# 앱 의존성 설치
COPY package*.json ./
COPY yarn.lock .
RUN yarn install

# 소스 코드 복사
COPY . .

RUN yarn build

# 포트 노출
EXPOSE 3000

# 앱 실행
CMD ["yarn", "run", "start:prod"]