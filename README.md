# Welcome to the HowTo backend documentation!

### More endpoints will be added to this document as they become available.

---

## Registration

Make a POST request to:

https://how-to-build-week.herokuapp.com/api/auth/register

The registration request must include the following fields in the request body as JSON:

```
{
  "username": "adamuser",
  "password": "password",
  "email": "adam@adam.me",
  "first_name": "adam",
  "last_name": "winz"
}
```

If successful, the registration request will get the following response, also as JSON:

```
{
  "message": "Welcome, adamuser!",
  "id": 3
}
```

---

## Login

Make a POST request to:

https://how-to-build-week.herokuapp.com/api/auth/login

The login request must include the following fields in the request body as JSON:

```
{
  "username": "adamuser",
  "password": "password"
}
```

If successful, the login request will get the following response, also as JSON:

```
{
  "message": "Welcome, adamuser!",
  "id": 3,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Im5pbmEiLCJyb2xlIjoidXNlciIsImlhdCI6MTU4MzE2Nzg4NywiZXhwIjoxNTgzMjU0Mjg3fQ.v6rRltdEr30KAzXbpPkVv1DFXa7t5lBRXRquHMvzmic"
}
```

---

## Get all guides

Make a GET request to:

https://how-to-build-week.herokuapp.com/api/guides

**NOTE:** The GET request must include the following in the **header** of the request:

`Content-Type: application/json`

AND

`authorization: token`

where "token" is the token that was provided by the server upon successful login.

If successful, the get request will result in the following response, also as JSON:

```
[
  {
    "id": 1,
    "title": "Upgrade your career",
    "description": "Get a better career in a few (easy?) steps!",
    "category": "tech",
    "difficulty": "hard",
    "creator_user_id": 1
  },
  {
    "id": 2,
    "title": "Make a dubstep tune",
    "description": "Create a new dancefloor hit from scratch!",
    "category": "music",
    "difficulty": "hard",
    "creator_user_id": 1
  }
]
```

---

## Get guide by ID

Make a GET request to:

https://how-to-build-week.herokuapp.com/api/guides/:id

where :id in the URL is the id of the guide.

The header of this request must also include the relevant Content-Type and token information.

If successful, the get request will result in the following response, also as JSON:

```
{
  "id": 4,
  "title": "Edit a photo",
  "description": "Make a good photograph look even better!",
  "category": "photography",
  "difficulty": "medium",
  "creator_user_id": 1
}
```

---

## Post a new guide

Make a POST request to:

https://how-to-build-week.herokuapp.com/api/guides

The header of this request must also include the relevant Content-Type and token information.

The POST request must include the following fields in the request body as JSON:

```
{
  "title": "Change the spark plugs in your car",
  "description": "Learn to change the spark plugs in your car from the comfort of your own garage",
  "category": "auto",
  "difficulty": "hard",
  "creator_user_id": 2
}
```

If successful, the post request will result in the following response, also as JSON:

```
{
  "message": "New guide added!",
  "id": 9,
  "title": "Change the spark plugs in your car",
  "description": "Learn to change the spark plugs in your car from the comfort of your own garage",
  "creator_user_id": 2
}
```

---

## Edit a guide

Make a PUT request to:

https://how-to-build-week.herokuapp.com/api/guides/:id

where :id in the URL is the id of the guide.

The header of this request must also include the relevant Content-Type and token information.

The PUT request requires only the fields to be updated in the request body as JSON:

```
{
  "title": "Change the quantum reactor in your car",
  "description": "Learn to change the quantum reactor in your car from the comfort of your own garage"
}
```

If successful, the put request will result in the following response, also as JSON:

```
{
  "message": "Guide updated!"
}
```

---

## Delete Guide

Make a DELETE request to:

https://how-to-build-week.herokuapp.com/api/guides/:id

where :id in the URL is the id of the guide.

The header of this request must also include the relevant Content-Type and token information.

If successful, the delete request will result in the following response, also as JSON:

```
{
  "message": "Guide deleted!"
}
```