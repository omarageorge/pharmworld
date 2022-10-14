# API ENDPOINTS

## /api/users

- **GET** - Get users
- **POST** - Add user

  ```json
  {
    "name": string,
    "email": String,
    "password": String
  }
  ```

- ### /api/users/{id}

  - PUT - Edit user
  - DELETE - Delete user

## /api/products

- **GET** - Get products
- **POST** - Add product

  ```json
  {
    "image": String,
    "name": String,
    "price": number,
    "quantity": number,
    "description": String,
  }
  ```

- ### /api/products/{id}

  - PUT - Edit product
  - DELETE - Delete product
