# 3X4-Genetics
This is a very small CRUD project for managing orders, It makes use of PHP Laravel for the API and makes use of Next.js for the Front end.

Initially I started the project purely in laravel using the laravel views and templating but along the way decided to give it a modern approach my separating the project into a Laravel API and a Next.js Frontend


# API setup
To setup and Run the API follow these steps

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

- For unit testing do the following
- Set your testing db connection details in the .env.testing
- Run the following commands
```bash 
    php artisan migrate --env=testing
    php artisan db:seed --env=testing
    php artisan test
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
