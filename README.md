# 3X4-Genetics
This is a very small CRUD project for managing orders, It makes use of PHP Laravel for the API and makes use of Next.js for the Front end.


# API setup
To setup and Run the API follow these steps

- To setup the API
- Put the API files on the server
- Then create a database then put your database details in the .env file
- To create the DB tables Run the command 
```bash 
    php artisan migrate
```  

- To seed the DB with fake data Run the command
```bash 
    php artisan db:seed
``` 



# Front End setup
To setup and Run the front end follow these steps

- Got to the frontend folder
- Open the project folder on the terminal then first run
```bash
npm install
```
- And then run
```bash
npm run dev
```

- The project will start 
- remember to point the frontend to the correct api url in the .env.local file
