**Login with laravel backend and vue frontend**

To get the project working on your local you need to:

  - Clone the project
  - Start the backend by jumping in to the `backend` directory and run `./vendor/bin/sail up -d`
  - Start the frontend by jumping in to the `frontend` directory and run `npm run serve` (you might have to run `npm install` before)
  - Caution: If you get errors it might be because of permissions so try `sudo chown -R $user:$user` the whole project
  - Go to `http://localhost:8080` to start the login experience

I have made a app where you can login or register in the frontend and when you are logged in you will see a dashboard page with your login
info and how many times you have logged in.

The app works like this:

  - You will start on the login page, from there you can navigate to the registration page or login.
  - On the registration page you can register a user and you will login at the same time and get redirected to your dashboard page.
  - On the dashboard page you can check your data and logout.
 
  - When you login I set a jwt toke in localstorage and that is what controls the app. If the jwt token is present you will be redirected to the dashboard page if      you try to go to the login or registration page.

Validations:

  - I did some really high level small validations for email and password
  - The email has to be a valid emai address (checked with some regex)
  - The password needs to be a minimum of 6 chars but no other checks are done.
  
  - The backend uses the jwt token to get user data. The token is generated when the user creates an account.

Files to check:
  Frontend:
    - Kinda the whole thing. The most important stuffs might be in the login form and registration form components as they talk to the backend also some backend ajax talking is going on in the dashboard component.
    
    Backend:
      - I made some changes to the `config/auth.php` where I changed the api to be the default guard and set the guard to use jwt.
      - I made a migration for the `login_counter` and added that column to the fillables in the user model
      - I created a few api routes to handle the requests
      - I created the `UserActions` controller to handle the requests
      - I added phpmyadmin to the docker setup so that I could check the db easier.
