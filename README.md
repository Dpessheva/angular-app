# angular-app

An angular app @ Softuni

## Project Specification

“Candywarehouse” is a web application for a candies e-shop. The client side is a single page app, built with Angular 6. The server is built on Express JS and it is using Mongo Db for storing the data. Redux is used as a state management library.The application consists of users, products and orders. Each user can register, login and logout. Users can also search for the candies they are looking for, view each offer details and make orders. Admins can add, edit and delete entries and approve orders.

User Login:

- login in the application via email and password

User Registe:

- register a new user via email, username and password

User Logout:

- Logouts from the application

## Not Register user can:

- see the shop
- register

## An register user can:

- order
- see product details
- like/unlike products
- see "my orders"
- write reviews

## An admin user can:

- approve orders
- create new offer
- edit an product
- delete an product

## Home:

- List of products

## Details:

- The details of a product. Add review . Each user can like/unlike the product

## Cart:

- Users add product to the card
- Users select quantity of the chosen product
- Users have option to remove product from the cart or refresh the quantity to one
- Users have option to checkout or to continue shopping

## My orders:

- List user's orders
- Navigate to order details

## Order Details:

- Shows full order details

## Product add:

- Admin route only
- Create a new entry and save it to the database

## Product edit:

- Admin route only
- Edit an existing entry and save it to the database

## Product delete:

- Admin route only
- Remove an entry from the database

## Pending orders

- Admin route only
- View all pending orders
- Navigate to order details
- Approve order

## Approved orders
-Admin route only
- View all approved orders
- Navidate to order details
