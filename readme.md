1. Project Overview
Project Name: Flipkart Clone

Description:
The Flipkart Clone is a full-stack e-commerce web application simulating the core features of Flipkart. This project includes functionalities such as product listings, user authentication, cart management, and order placement, providing users with an experience similar to the actual Flipkart platform.


2. Features
•	User Authentication: Register and log in securely.
•	Product Management: Search, sort, and filter items effortlessly.
•	Shopping Cart: Add and remove items from the cart.
•	Wishlist: Save and manage your favorite items.
•	Account Management: Customize and control your user account.
•	Payment Integration: Secure payments through Stripe.

3. Technology Stack
•	Frontend: React.js (Vite), HTML5, Tailwind CSS, JavaScript.
•	Backend: Spring Boot. 
•	Database:  MySQL
•	Deployment: Vercel (Frontend), Render (Backend)


4. API Endpoints
Product API:
•	GET /api/products - Fetch all products
•	GET /api/products/:id - Fetch product by ID
User API:
•	POST /api/users/register - User registration
•	POST /api/users/login - User login
•	GET /api/users/profile - Get user profile details
•	PUT /api/users/update - Update user account information
Cart API:
•	POST /api/cart/add - Add product to cart
•	DELETE /api/cart/remove/:id - Remove product from cart
•	GET /api/cart - Get cart items
Wishlist API:
•	POST /api/wishlist/add - Add product to wishlist
•	DELETE /api/wishlist/remove/:id - Remove product from wishlist
•	GET /api/wishlist - Get wishlist items
Order API:
•	POST /api/orders - Place an order
•	GET /api/orders/:userId - Get user orders
•	GET /api/orders/track/:orderId - Track order status
Payment API:
•	POST /api/payment/checkout - Process payment using Stripe

5. Conclusion

This project aims to provide a comprehensive understanding of building a full-stack e-commerce application. Users can browse products, manage their cart and wishlist, place orders, make secure payments, and track their orders in real-time with a user-friendly interface and smooth navigation.




