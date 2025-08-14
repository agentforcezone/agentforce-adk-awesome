## GeoLocation API

**Version:** 1.0

**Description:** This API provides functionality for geocoding addresses and reverse geocoding coordinates.

**Base URL:** `/api/v1/geolocate`

---

### 1. Geocoding

**Endpoint:** `/api/v1/geolocate/geocode`

**Method:** `POST`

**Request Body:**

```json
{
  "address": {
    "street": "1600 Amphitheatre Parkway",
    "city": "Mountain View",
    "state": "CA",
    "zip": "94043"
  }
}
```

**Parameters:**

*   `address.street` (string, required): The street address.
*   `address.city` (string, required): The city.
*   `address.state` (string, required): The state.
*   `address.zip` (string, required): The zip code.

**Response Body (Success - 200 OK):**

```json
{
  "latitude": 37.4220,
  "longitude": -122.0841,
  "formatted_address": "1600 Amphitheatre Parkway, Mountain View, CA 94043"
}
```

**Response Body (Error - 400 Bad Request):**

```json
{
  "error": "Invalid address format."
}
```

---

### 2. Reverse Geocoding

**Endpoint:** `/api/v1/geolocate/reverse`

**Method:** `POST`

**Request Body:**

```json
{
  "latitude": 37.4220,
  "longitude": -122.0841
}
```

**Parameters:**

*   `latitude` (number, required): The latitude coordinate.
*   `longitude` (number, required): The longitude coordinate.

**Response Body (Success - 200 OK):**

```json
{
  "address": {
    "street": "1600 Amphitheatre Parkway",
    "city": "Mountain View",
    "state": "CA",
    "zip": "94043"
  },
  "formatted_address": "1600 Amphitheatre Parkway, Mountain View, CA 94043"
}
```

**Response Body (Error - 400 Bad Request):**

```json
{
  "error": "Invalid latitude or longitude values."
}
```

---

### 3. Rate Limiting

*   Requests are limited to 60 per minute.
*   Exceeding the rate limit will result in a 429 Too Many Requests error.
