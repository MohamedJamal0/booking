# Full-Stack Booking App

This is a full-stack booking application with a front-end built using React and React Query, and a back-end built with Node.js and Prisma.

## Technologies Used

### Frontend

**ReactJS**, **React Router**, **React Query**, **TailwindCSS**

### Backend

- **NodeJS**, **ExpressJS**, **Postgresql*, **Prisma**

### Payment Gateway

- **Stripe**

### Cloud Storage

- **Cloudinary**

## 🚀 Features

### User Account Management

- **Login/Signup**: 🚪 Users can create an account or log in to an existing one.
- **Signup/Host**: Users can join as a host with an existing account and get access to the dashboard.

### Listings Management

- **Create/Update/Delete Listings**: 🏡 Hosts can create, update, and delete their listings.
- **Add/Remove Images and Amenities**: 🖼️ Hosts can add or remove images and amenities to their listings.
- **Availability Checks**: 📅 Users can check the availability of listings.

### Booking Management

- **Create Bookings**: 📆 Users can create bookings for available listings.
- **Check-in/Check-out**: 🏨 Hosts can check in and check out guests for their bookings.
- **View Bookings**: 📋 Users can view their booking history, and hosts can view bookings for their listings.

### Payment Processing

- **Payment Integration**: 💳 Users can pay through Stripe for their bookings.

### Review Management

- **Add/Update Reviews**: 🌟 Users can review listings they have stayed at and update their reviews.

### Admin Features

- **Dashboard**: 🖥️ Admins have access to a dedicated dashboard.
- **Order Management**: 📊 Admins can update booking statuses.
- **Listing Management**: 📋 Admins can manage all listings.


## API Routes

### Auth Routes

- POST /login - User login
- POST /signup - User sign up
- POST /host/signup - Host sign up (requires authentication)
- GET /current-user - Get current logged in user (requires authentication)
- GET /logout - User logout

### Booking Routes

- GET / - Get user bookings (requires authentication)
- PATCH /
- /check-in - Check-in booking (requires authentication, host only)
- PATCH /
- /check-out - Check-out booking (requires authentication, host only)

### Host Routes
- GET /listings - Get host listings (requires authentication, host only)
- GET /listings/
- - Get a single host listing by ID (requires authentication, host only)
- GET /bookings - Get host bookings (requires authentication, host only)
- GET /bookings/timeline - Get host bookings by timeline (requires authentication, host only)
- GET /bookings/timeline/counts - Get host bookings count by timeline (requires authentication, host only)

### Listing Routes

- GET /categories - Get listing categories
- GET /types - Get listing types
- GET /amenities - Get listing amenities
- GET /cities - Get listing cities
- POST / - Create a new listing (requires authentication, host only)
- PATCH /
- - Update a listing (requires authentication, host only)
- DELETE /
- - Delete a listing (requires authentication, host only)
- POST /
- /images - Add images to a listing (requires authentication, host only)
- DELETE /
- /images/
- - Delete an image from a listing (requires authentication, host only)
- POST /
- /amenities - Add amenities to a listing (requires authentication, host only)
- DELETE /
- /amenities/
- Delete an amenity from a listing (requires authentication, host only)
- GET / - Get listings
- GET /
- Get a listing by ID
- GET /
- /is-available - Check if a listing is available
- GET /
- /booked-dates - Get booked dates for a listing
- GET /
- /booked-details - Get booked details for a listing

### Payment Routes
- POST /create-payment-intent - Create a payment intent (requires authentication)

### Webhook Routes
- POST / - Stripe webhook endpoint
- Review Routes
- GET / - Get reviews by listing ID
- POST / - Create a review (requires authentication)
- PATCH /
- Update a review (requires authentication)