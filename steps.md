Step 1
for front

cd hibret-front-main
npm install
npm run dev

add .env file with the following content
VITE_API_URL=http://localhost:3000/api

Step 2
for back

cd hibret-main
npm install --global yarn
yarn
yarn dev

add .env file with the following content
DATABASE_URI=mongodb+srv://root:root@cluster0.nchnoj6.mongodb.net/
PAYLOAD_SECRET=YOUR_SECRET_HERE

Note go to the payload.config.ts file and make sure cors: ["http://localhost:5173"] is set to the port your front is running

Step 3

go to http://localhost:3000 and register an account as an admin

Step 4

login with the account you created on front
