# prismagram
Instagram clone with Express + Prisma + React and React Native


#1. 환경 설정 및 준비 

#yarn init
#install library 
```
yarn add graphql-yoga
yarn add @babel/node
yarn add preset-env 
yarn add @babel/core
```

##edit package.json 
```
  "dependencies": {
    "graphql-yoga": "^1.17.4"
  },
  "devDependencies": {
    "nodemon": "^1.18.10"
  },
  "scripts": {
    "dev": "nodeomn --exzec babel-node src/server.js" 
    // nodemon을 실행할 때마다 babel-node로 src 폴더의 server.js 파일 실행, nodemon은 파일을 저장 할 때마다 실행을 새로 해주는 도구(서버 재부팅 필요가 없음) 
  }
  ```
  
#create folder
 src > server.js 
 ```
 console.log("hello"); 
 ```
#create js file
 nodemon.js
 ```
{
    "ext": "js graphql"
}
```

#run commend 
yarn dev 

console에 "hello" 출력 되는 것 확인 하면 정상적으로 완료 

#2. graphql-yoga를 이용하여 Graphql Server 만들기

#Prisma 
# 서버 설치 후 서버 코드에 prisma 추가 
#intall dotenv 
```
yarn add dotenv // .env 파일 읽음
```
#edit file
 server.js
 서버 정보 입력 

#create file 
 src > .env
 Port 정보 입력 

#create file 
 .babelrc
 presets 입력, 최신 프리셋인 @babel/preset-env 사용 
 
#console에 다음과 같은 문자열이 출력되는지 확인
```
Server running on  http://localhost:4000
```
#GraphQL 로컬 호스트 접속 
click http://localhost:4000
 
#Query: hello 전송 하면 다음과 같이 리턴값 출력 되는지 확인
```
#query 
{
  hello
}

#return 
{
  "data": {
      "hello": "Hi" 
   }
}

```

#3. Resolver 추가 - use Professional Method

 
 
 
 
#Tip
* 모든 설정 값들을 env에 추가하는 습관 만들기 
* 같은 패키지에서 여러 모듈 설치하고 싶은 경우 예제
```
yarn add @babel/{node, preset-env}
```




