# Buycoin App

The Buycoin app enables you to quickly search dummy users and the coins they have in their portfolio. You can search either using the coin name, the user’s name or user’s role or with any parameter of your choice except the unique id. This application is available on: https://helicarrier-buycoin.herokuapp.com/

## Getting  Started

To get this application to work locally on your PC, follow the instructions below on the project directory, you can run:

### `Install application dependencies`

Having cloned the application, navigate to the root directory of this application and run the `npm install` command to install the application dependencies.


### `Running the application`
To run the application, navigate to the root directory of this application and run the `npm run start`  command. The application will be started on http://localhost:3000 which can be accessed via the browser.


### `Project Development Process`
For this project development, React and json data were used which can be found in the data folder as db.json file. An array object was created with five different dates.
**Note: All folders and files used were created inside the src folder!**

### `User interface`
Implementation of the user interface(UI) design can be seen in the home folder created inside the page folder. HTML tags and CSS stylings were used to build the app and make it responsive. A table of users' history with the following columns(Id, Customer Name, Role, Coin, Date) was created. The table was grouped with respect to the five different dates provided in the json data.


### `Data manipulations`
Array and Object methods were used to implement the search and filter buttons. One can search for data with respect to any column except for the Unique Id column. Some filter buttons were provided to filter data with respect to the button status.

### `Pagination`
Pagination setup was created inside the component  folder. A maximum of three grouped data can be displayed on a page.

###`Deployment`
This project was deployed on Heroku and can be accessed using:[https://helicarrier-buycoin.herokuapp.com/](https://helicarrier-buycoin.herokuapp.com/)

