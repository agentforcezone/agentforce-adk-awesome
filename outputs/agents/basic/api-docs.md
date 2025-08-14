## AgentForce Agent API Documentation

**Version:** 1.2.0

**Description:** The AgentForce Agent API provides programmatic control over AgentForce agents deployed on various systems. This API allows you to manage agent status, retrieve agent data, trigger actions, and monitor agent activity.

**Base URL:** `https://your-agentforce-instance.com/api/v1` (Replace with your actual instance URL)

**Authentication:** API Key Authentication - Pass your API key in the `X-API-Key` header.

---

### 1. Agents

**Resource:** `/agents`

**Description:** Manages AgentForce agents.

**Methods:**

*   **`GET` /agents**
    *   **Description:** Retrieves a list of all agents.
    *   **Parameters:**
        *   `page` (integer, optional): Pagination page number. Defaults to 1.
        *   `per_page` (integer, optional): Number of agents per page. Defaults to 25. Maximum 100.
        *   `status` (string, optional): Filter by agent status (e.g., `active`, `inactive`, `pending`).
        *   `agent_id` (string, optional): Filter by agent ID.
    *   **Response (200 OK):**
        ```json
        {
          "total": 123,
          "page": 1,
          "per_page": 25,
          "data": [
            {
              "id": "agent-123",
              "name": "Agent-01",
              "status": "active",
              "hostname": "server1.example.com",
              "os": "Windows 10",
              "last_active": "2023-10-27T10:00:00Z",
              "created_at": "2023-10-26T14:30:00Z"
            },
            {
              "id": "agent-456",
              "name": "Agent-02",
              "status": "inactive",
              "hostname": "server2.example.com",
              "os": "Linux Ubuntu",
              "last_active": "2023-10-25T18:45:00Z",
              "created_at": "2023-10-26T09:15:00Z"
            }
          ]
        }
        ```

*   **`POST` /agents**
    *   **Description:** Creates a new agent.
    *   **Request Body:**
        ```json
        {
          "name": "New Agent",
          "hostname": "server3.example.com",
          "os": "MacOS Monterey"
        }
        ```
    *   **Response (201 Created):**
        ```json
        {
          "id": "agent-789",
          "name": "New Agent",
          "hostname": "server3.example.com",
          "os": "MacOS Monterey",
          "status": "pending",
          "created_at": "2023-10-27T11:30:00Z"
        }
        ```
    *   **Response (400 Bad Request):** Invalid request body.

*   **`GET` /agents/{agent_id}**
    *   **Description:** Retrieves details for a specific agent.
    *   **Parameters:**
        *   `agent_id` (string, required): The ID of the agent.
    *   **Response (200 OK):**
        ```json
        {
          "id": "agent-123",
          "name": "Agent-01",
          "status": "active",
          "hostname": "server1.example.com",
          "os": "Windows 10",
          "last_active": "2023-10-27T10:00:00Z",
          "created_at": "2023-10-26T14:30:00Z"
        }
        ```
    *   **Response (404 Not Found):** Agent with the specified ID not found.

*   **`PUT` /agents/{agent_id}**
    *   **Description:** Updates details for a specific agent.
    *   **Parameters:**
        *   `agent_id` (string, required): The ID of the agent.
    *   **Request Body:**
        ```json
        {
          "name": "Updated Agent Name",
          "status": "active"
        }
        ```
    *   **Response (200 OK):** Updated agent details.
    *   **Response (404 Not Found):** Agent with the specified ID not found.
    *   **Response (400 Bad Request):** Invalid request body.

*   **`DELETE` /agents/{agent_id}**
    *   **Description:** Deletes a specific agent.
    *   **Parameters:**
        *   `agent_id` (string, required): The ID of the agent.
    *   **Response (204 No Content):** Successful deletion.
    *   **Response (404 Not Found):** Agent with the specified ID not found.

---

### 2. Actions

**Resource:** `/agents/{agent_id}/actions`

**Description:** Triggers actions on a specific agent.

**Methods:**

*   **`POST` /agents/{agent_id}/actions**
    *   **Description:** Triggers a specific action on a specific agent.
    *   **Parameters:**
        *   `agent_id` (string, required): The ID of the agent.
    *   **Request Body:**
        ```json
        {
          "action": "restart",
          "target": "agent-123"
        }
        ```
    *   **Response (200 OK):** Confirmation of action execution.
    *   **Response (400 Bad Request):** Invalid action or target.
    *   **Response (404 Not Found):** Agent with the specified ID not found.

---

### 3. Agent Status

**Resource:** `/agents/{agent_id}/status`

**Description:** Retrieves the current status of an agent.

**Methods:**

*   **`GET` /agents/{agent_id}/status**
    *   **Description:** Retrieves the current status of a specific agent.
    *   **Parameters:**
        *   `agent_id` (string, required): The ID of the agent.
    *   **Response (200 OK):**
        ```json
        {
          "status": "active",
          "last_active": "2023-10-27T10:00:00Z",
          "heartbeat": 123.45
        }
        ```
    *   **Response (404 Not Found):** Agent with the specified ID not found.

---

**Notes:**

*   All timestamps are in ISO 8601 format (UTC).
*   Error responses will include a JSON body with an `error` field describing the issue.
*   Rate limiting is applied to all API endpoints.  See your AgentForce instance documentation for details.
