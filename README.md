# prismagram
Instagram clone with Express + Prisma + React and React Native


#yarn init
#yarn add graphql-yoga
#yarn add babel-cli -D 

##edit package.json
#add 
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


