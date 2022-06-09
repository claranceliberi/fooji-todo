# fooji-todo
This is the fooji enginer task , this is simply a todo app

### Functionalities
  - Create todo item
  - Mark complete/uncomplete todo item
  - Delete todo item
  - Add todo group
  - Add todo item in a group
 
 ### Missing crucial functionalities 
  - Delete todo group with its items
  - Well formated API response
  Due to timeeeeeeee 🕛
 
 ### Stack
  - Nest.js
  - Swagger for documentation
  - Jest for backend testing
  - PostgreSQl
  - Vue.js
  - TailwindCSS
  - Vitest and Cypress for frontend testing (even though there is no test writed, due to timeeeeeeeeee 😢)
  - Docker
  - Github actions
 
 ### How to get up running
  1. I am assumming that you have Docker
  2. run ` docker compose up -d frontend-dev` or ` docker-compose up -d frontend-dev` if you have outdated docker-compose
  3. Wow you now have everything up and running 🪄 check backend on `http://localhost:3030/api/v1/docs` and frontend on `http://localhost:3000/`


  ### You don't have docker
  Thats somehow pretty hard but we can figure it out
  1. create database call it `database_name`
  2. Get your credentials and put them in '.env` file
  3. Go in `backend` folder and run `npm run start` to start backend
  4. And With new tab of Bash/Shell go in `frontend` folder and run `npm run dev`
  5. 🪄 now its time to shine
 
 ### Why did somehow put in docker ? 
I just wanted to make life easy for you when you are going to test it
