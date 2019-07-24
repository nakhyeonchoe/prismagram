# prismagram
Instagram clone with Express + Prisma + React and React Native


# 1. 환경 설정 및 준비 

# yarn init
# install library 
```
yarn add graphql-yoga
yarn add @babel/node
yarn add preset-env 
yarn add @babel/core
```

## edit package.json 
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
  
# create folder
 src > server.js 
 ```
 console.log("hello"); 
 ```
# create js file
 nodemon.js
 ```
{
    "ext": "js graphql"
}
```

# run commend 
yarn dev 

console에 "hello" 출력 되는 것 확인 하면 정상적으로 완료 

# 2. graphql-yoga를 이용하여 Graphql Server 만들기

# Prisma 
# 서버 설치 후 서버 코드에 prisma 추가 
#intall dotenv 
```
yarn add dotenv // .env 파일 읽음
```
# edit file
 server.js
 서버 정보 입력 

# create file 
 src > .env
 Port 정보 입력 

# create file 
 .babelrc
 presets 입력, 최신 프리셋인 @babel/preset-env 사용 
 
# console에 다음과 같은 문자열이 출력되는지 확인
```
Server running on  http://localhost:4000
```
# GraphQL 로컬 호스트 접속 
click http://localhost:4000
 
# Query: hello 전송 하면 다음과 같이 리턴값 출력 되는지 확인
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

# 3. Resolver 추가 - use Professional Method
# morgan 미들웨어 추가 (logger 전용 모듈)
# install morgan 
```
yarn add morgan
```
# edit server.js 
# typeDefs, resolvers 추가하지 않고 프로페셔널 한 반식으로 추가하는 방법 
# create folder
 src > api 
# create file 
 src > api > schema.js // typeDefs, resolvers 정보가 들어가 있을 예정
 
# install graphql-tools, merge-graphql-shemas
```
yarn add graphql-tools merge-graphql-shemas
```

# edit schema.js
 import graphql-tools의 makeExcutableSchemas,
 import merge-graphql-shemas의 mergefilLoader, mergeResolvers, mergeTypes
 
# create folder 
 src > api > Hello
 src > api > Hello > sayHello
 
# create files
  src > api > Hello > sayHello > sayHello.graphql
  src > api > Hello > sayHello > sayHello.js
  
# edit sayHello.js
  Query 문 작성 
# edit sayHello.graphql
  Query 추가 후 export default 
 
# 목표
* server.js에서 typeDefs, resolvers들을 삭제 하고 playground에서 sayHello 쿼리 실행 하기

# edit schema.js
 - 변수 선언: alltypes, allResolvers, schema 
 
  - fileLoader의 결과 = allTypes, Resolvers
  - alltypes: fileLoader 함수의 인자는 파일의 경로 = patht.join(__dirname, '/api/**/*.graphql')
    - **: 모든 폴더, *: 모든 .graphql 파일 
  - allResolvers: fileLoader 함수의 인자는 파일의 경로 = patht.join(__dirname, '/api/**/*.js')
   - api 폴더 밑에 resolver가 아닌 js 파일이 위치하면 문제 발생 
  - schema: makeExecutableSchema 함수의 typeDefs와 resolvers 입력 
  
# edit server.js
typeDefs, resolvers 제거 후 하나로 합쳐진 schema 입력
 
# create folder
 src > api > Greetings
 src > api > Greetings > sayGoodbye
 
# create files 
  src > api > Greetings > sayGoodbye > sayGoodbye.graphql
  src > api > Greetings > sayGoodbye > sayGoodbye.js
  
# edit sayHello.js 
  Query 문 작성 
# edit sayHello.graphql
  Query 추가 후 export default 
  
# 4. Prisma
* Prisma ? ORM(Object-relational mapping) - 객체 관계 연결 
* Why use ? 데이터베이스가 해결하기 어려운 것들을 해결 해 준다. 
* ORM 종류 ? typeorm, diango orm, sequlize 
* 특징 ? 어플리케이션에 필요한 모델을 graphql로 정의 할 수 있다는 점에서 특별하다. 
* 모델을 정의 할 수 있음(user, Post, ... etc) 

# GO To link 
* https://app.prisma.io/
* Join 

# run prisma login 
```
yarn prisma login -k ~~~
```
# create new prisma 
```
yarn prisma init
```
# 데이터 베이스 환경 설정
 * Demo server + MySQL database 선택 
  * 선택 사항: 기존 데이터 베이스 사용 or 새로 생성 or Demo Server or use Other server 
 * nhyeonchoe-8186ea/demo-us1 선택
  * 선택 사항: es or us 
 * service ? prismagram
 * stage? dev
 * Prisma JavaScript Client 
 => generated 폴더 생성 

# edit .gitignore
 * 하단에 generated 추가 
 
# datamodel.prisma 형태 확인 
# prisma 실행
```
yarn prisma deploy
```
 
# primsa console에서 name 에러 발생 하는 경우 

 


  
#Tip
* 모든 설정 값들을 env에 추가하는 습관 만들기 
* 같은 패키지에서 여러 모듈 설치하고 싶은 경우 예제
```
yarn add @babel/{node, preset-env}
```
* GraphQLServer에 express 서버 내장되어 있음
* Graphql 만들 때 작업 방식
 - 폴더 생성, 폴더 밑에 graphql 파일들과 resolver 파일들을 만들고 그것들을 import 
 - api
  - graphql
  - resolver



