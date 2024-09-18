
# E-commerce Platform

This is a full-stack eCommerce application built using the MERN stack, with:
- **Frontend**: React (Vite), Tailwind CSS, React Toastify
- **Backend**: Node.js, Express
- **Database**: MongoDB (Mongoose)
- **Image Storage**: Cloudinary

## Features
- User authentication
- Admin panel for managing products and orders
- Product image management via Cloudinary
- Cart functionality and order management
- Notifications via React Toastify

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ecommerce-platform.git
cd ecommerce-platform
```

2. Install frontend and backend dependencies:
```bash
# Frontend
cd frontend
npm install

# Backend
cd ../backend
npm install
```

3. Add `.env` file in `backend` folder with environment variables for MongoDB and Cloudinary.

4. Start the frontend and backend servers:
```bash
# Frontend
npm run dev

# Backend
npm run dev

#admin
cd admin
npm run dev
```

## Admin Features
- Add, update, and delete products
- Manage product images using Cloudinary
- Search and filter products by category and price

## License
This project is licensed under the MIT License.
