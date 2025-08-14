## My Auth Service API - Documentation

This document describes the API endpoints for the My Auth Service.

**Base URL:** `/api/v1`

**Authentication:** All endpoints require an API key passed in the `X-API-Key` header.

---

### User Management

#### 1. Register User

*   **Endpoint:** `POST /users`
*   **Description:** Creates a new user account.
*   **Request Body:**
    *   `username` (string, required): The desired username.
    *   `password` (string, required): The user's password.
    *   `email` (string, required): The user's email address.
*   **Response Codes:**
    *   `201 Created`: User created successfully. Returns the new user object.
    *   `400 Bad Request`: Invalid request data. Returns a JSON object with error details.
    *   `409 Conflict`: Username or email already exists.
*   **Response Body (201 Created):**
    ```json
    {
      "id": "uuid-string",
      "username": "john.doe",
      "email": "john.doe@example.com",
      "created_at": "2023-10-27T10:00:00Z"
    }
    ```

#### 2. Get User

*   **Endpoint:** `GET /users/{user_id}`
*   **Description:** Retrieves a user by their ID.
*   **Parameters:**
    *   `user_id` (string, required): The ID of the user to retrieve.
*   **Response Codes:**
    *   `200 OK`: User found. Returns the user object.
    *   `404 Not Found`: User not found.
*   **Response Body (200 OK):**
    ```json
    {
      "id": "uuid-string",
      "username": "john.doe",
      "email": "john.doe@example.com",
      "created_at": "2023-10-27T10:00:00Z"
    }
    ```

#### 3. Update User

*   **Endpoint:** `PUT /users/{user_id}`
*   **Description:** Updates an existing user's information.
*   **Parameters:**
    *   `user_id` (string, required): The ID of the user to update.
*   **Request Body:**
    *   `username` (string, optional): The new username.
    *   `password` (string, optional): The new password.
    *   `email` (string, optional): The new email address.
*   **Response Codes:**
    *   `200 OK`: User updated successfully. Returns the updated user object.
    *   `400 Bad Request`: Invalid request data. Returns a JSON object with error details.
    *   `404 Not Found`: User not found.
*   **Response Body (200 OK):**
    ```json
    {
      "id": "uuid-string",
      "username": "john.doe",
      "email": "john.doe@example.com",
      "created_at": "2023-10-27T10:00:00Z"
    }
    ```

#### 4. Delete User

*   **Endpoint:** `DELETE /users/{user_id}`
*   **Description:** Deletes a user account.
*   **Parameters:**
    *   `user_id` (string, required): The ID of the user to delete.
*   **Response Codes:**
    *   `204 No Content`: User deleted successfully.
    *   `404 Not Found`: User not found.

---

### Authentication

#### 5. Login

*   **Endpoint:** `POST /auth/login`
*   **Description:** Authenticates a user and returns an access token.
*   **Request Body:**
    *   `username` (string, required): The user's username.
    *   `password` (string, required): The user's password.
*   **Response Codes:**
    *   `200 OK`: Authentication successful. Returns the access token.
    *   `401 Unauthorized`: Invalid credentials.
*   **Response Body (200 OK):**
    ```json
    {
      "token": "jwt-string"
    }
    ```

#### 6. Refresh Token

*   **Endpoint:** `POST /auth/refresh`
*   **Description:**  Refreshes an existing access token.
*   **Request Body:**
    *   `refresh_token` (string, required): The user's refresh token.
*   **Response Codes:**
    *   `200 OK`: Refresh successful. Returns the new access token.
    *   `401 Unauthorized`: Invalid refresh token.
*   **Response Body (200 OK):**
    ```json
    {
      "token": "jwt-string"
    }
    ```

---

**Note:**  This is a simplified API documentation.  Error responses will include detailed error messages in JSON format.  Rate limiting and other security measures are implemented.
