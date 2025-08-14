## My Auth Service API Documentation

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
    *   `201 Created`: User successfully created.  Returns the new user object.
    *   `400 Bad Request`: Invalid input data. Returns a JSON object with error details.
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
    *   `user_id` (string, required): The unique identifier for the user.
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
    *   `user_id` (string, required): The unique identifier for the user.
*   **Request Body:**
    *   `username` (string, optional): The new username.
    *   `password` (string, optional): The new password.
    *   `email` (string, optional): The new email address.
*   **Response Codes:**
    *   `200 OK`: User successfully updated. Returns the updated user object.
    *   `400 Bad Request`: Invalid input data. Returns a JSON object with error details.
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
    *   `user_id` (string, required): The unique identifier for the user.
*   **Response Codes:**
    *   `204 No Content`: User successfully deleted.
    *   `404 Not Found`: User not found.

---

### Password Management

#### 5. Reset Password

*   **Endpoint:** `POST /password/reset`
*   **Description:** Initiates a password reset process.
*   **Request Body:**
    *   `email` (string, required): The user's email address.
*   **Response Codes:**
    *   `200 OK`: Password reset link generated. Returns a JSON object containing the link.
    *   `400 Bad Request`: Invalid email format.
    *   `404 Not Found`: User not found.

*   **Response Body (200 OK):**
    ```json
    {
      "token": "string-token-value"
    }
    ```

#### 6. Verify Reset Token

*   **Endpoint:** `POST /password/verify`
*   **Description:** Verifies a password reset token and allows the user to set a new password.
*   **Request Body:**
    *   `token` (string, required): The password reset token.
    *   `password` (string, required): The new password.
*   **Response Codes:**
    *   `200 OK`: Password successfully reset.
    *   `400 Bad Request`: Invalid token or password.
    *   `404 Not Found`: Token not found.

*   **Response Body (200 OK):**
    ```json
    {}
    ```
