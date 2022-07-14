# Getting Started with Buycoin App

This react project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `requirements`
For this project development, React and json data was used which can be found in the data folder as db.json.
An array of twenty objects was created with five different dates.

**Note: All folders and files used were created inside the src folder!**

### `user interface`
Implementation of the user interface(UI) design can be seen in the home folder created inside the page folder.
HTML tags and CSS stylings were used to build the app and make it responsive.
A table of users history with the following columns(Id, Name, Role, Currency, Date) was created.
The table was grouped with respect to the five different dates provided in the json data.

### `data manipulations`
Array and Object methods were used to implement the search and filter buttons.
One can search for data with respect to any column except for the unique Id column. 
Some filter buttons were provided to filter data with respect to the button status.

### `pagination`
Pagination setup was created inside the component folder of the home folder.
Maximum of three grouped data can be displayed in a page.

### `deployment`
This project was deployed using Heroku [https://helicarrier-buycoin.herokuapp.com/](https://helicarrier-buycoin.herokuapp.com/)

