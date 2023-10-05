First step is to Set Up the React App using the command:npx create-react-app login-app in terminal window and then change directory to login-app
Second step is to provide route,this can be using the route library.we need to install this library using the command:npm install react-router-dom
Third step is to create a login page component (Login.js) where users can enter their credentials. 
Fourth step is to create a dashboard component (Dashboard.js) that will be displayed after successful login. In the dashboard, dropdown, filter option, search bar, and a table to display data is been added,
Fifth step is to create a navbar component (Navbar.js) that displays the user's profile icon at the top right corner.
sixth step is to create a middleware or a higher-order component (HOC) to check for the presence of the JWT token when accessing the dashboard route. If the token is not present, redirect the user to the login page.
Used library like axios to make API calls to the provided login endpoint for authentication and any other data endpoints need for  app.
Then running the App on port number 3000 using npm start.
