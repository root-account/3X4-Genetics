# 3X4-Genetics
This is a very small CRUD project for managing orders, It makes use of PHP Laravel for the API and makes use of Next.js for the Front end.


# API setup
To setup and Run the API follow these steps

- To setup the API
- Put the API files on the server
- First create a database then put your database details in the .env file
- Run the command 'php artisan migrate'  to create the DB tables
- Run the command 'php artisan db:seed' to seed the DB with fake data



# Front End setup
To setup and Run the front end follow these steps

- Got to the frontend folder
- remember to point the frontend to the correct api url in the .env.local file
- First run
```bash
npm install
```
- Then run
```bash
npm run dev
```

- The project will start 
