
# Coffee Kiosk App

A simple web application to implement Coffee Menu Ordering.  Developed using ReactJS.

The Coffee Kiosk App is software designed to allow customers to pre-order coffee and snacks with their own customisation preferences. Customers will have to wait a long time to place their orders and receive their coffee if the restaurant is full. Their valuable time is saved by this application.

Through an interactive and user-friendly user interface, the program lets the user place orders and shows the coffee shop's menu along with the corresponding prices. To place a coffee order, any user of the application must first **Start Ordering** button and they will be redirected to the ordering page. Following order selection, the user will have the option to check their cart  where the total bill and amount of items will be shown and the user will see a snippet of a QR code for the payment after clicking the  **Proceed to checkout**. Soon afterwards, the Order Placement page will be shown after the proceedin the payment where a thank you message and order number is displayd followed by a button to start a new order.


## Features

- User Friendly
- Intuitive Design which have a mobile, tablet, and laptop layout
- Real-time data processing
- Responsive Layout for different devices
- Cart functionalities
- Real-time order price
## Methodology

ReactJS, TailwindCSS, and DaisyUI were used in the initial development of the program.


To implement all the features and connect to the localStorage for a straightforward yet dynamic data storage system, JavaScript functions are created in the frontend. The program is run using the App.jsx file, which provides the main/entry point of the application and all of its routing information. 

The web application is launched using the Node.js server solution. Conditions are set on various events and code functionalities of the applications using UseEffects and ReactHooks. 

If-else blocks are used to manage exceptions when needed.
## Dependencies

All dependecies needed can be viewed inside the the requirements.txt. Please install them in the terminal one by one. Make sure you have **npm** and **node** installed in your machine. Link for the setup of React: https://www.youtube.com/watch?v=zuyH4QUuTZk
## Run Locally


Clone the project

```bash
  use github desktop for cloning
```

Go to the project directory

```bash
  cd coffee-kiosk
```

Install dependencies

```bash
  refer to requirements.txt
```

Start the server

```bash
  npm run dev
```


## Project Limitation

For the entirety of the Coffee Kiosk App, ReactJS was the only frontend framework used. The application was developed without the use of backend frameworks or logic. Dynamic data was stored via LocalStorage. The application is not yet prepared for distribution and solely depends on the local server setup.

## Future Feature Integration


A database and backend foundation for a much more powerful application that incorporates an admin panel for menu item change.


To allow the user to finish paying (for non-cash ways) prior to submitting the order, a payment gateway can be integrated with the payment screen.



