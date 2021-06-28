# Angular-SpringBoot project
Running the project:
1. run the "pizza.sql" MySQL script to create and populate the table in the database.
2. run the "spring_rest.demo.pizza" to start the app which will be listening for the requests
3. run the "Demo" Angular frontend to send requests and to check the table.

The database by default is running on the localhost("127.0.0.1:3306"), spring boot backend is running in the "http://localhost:8080/api/pizzas" and the Angular frontend is running on the "http://localhost:4200". When the MySQL script is executed some pizzas are entered in the table, using the frontend it is possible to add a new pizza, delete or edit the existing pizza in the table. The requests are done through the REST interface "JpaRepository" which is automatically creating access for the given entity class.

By clicking on the pizza in the table, it is possible to edit or delete the pizza, the new pizza can be added to the table via "Create new pizza". 