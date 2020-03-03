# Welcome to the HowTo backend documentation!

### More endpoints will be added to this document as they become available.

---

## User Registration

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

## User Login

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

## Get user by ID

Make a GET request to: https://how-to-build-week.herokuapp.com/api/auth/users/:id

where :id in the URL is the id of the user.

If successful, the get request will result in the following response, also as JSON:

```
{
  "username": "sarah",
  "id": 2
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
    "creator_user_id": 1,
    "tries": null
  },
  {
    "id": 2,
    "title": "Make a dubstep tune",
    "description": "Create a new dancefloor hit from scratch!",
    "category": "music",
    "difficulty": "hard",
    "creator_user_id": 1,
    "tries": null
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
  "creator_user_id": 1,
  "tries": null
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
  "creator_user_id": 2,
  "tries": null
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

---

## Get all steps by guide ID

Make a GET request to:

https://how-to-build-week.herokuapp.com/api/guides/:id/steps

where :id in the URL is the id of the guide.

The header of this request must also include the relevant Content-Type and token information.

If successful, the get request will result in the following response, also in JSON:

```
[
  {
    "id": 1,
    "title": "Upgrade your career",
    "step_number": 1,
    "description": "Get a decent computer with internet access"
  },
  {
    "id": 2,
    "title": "Upgrade your career",
    "step_number": 2,
    "description": "Sign up to Lambda School"
  },
  {
    "id": 3,
    "title": "Upgrade your career",
    "step_number": 3,
    "description": "Agree to ISA"
  },
  {
    "id": 4,
    "title": "Upgrade your career",
    "step_number": 4,
    "description": "Study hard"
  },
  {
    "id": 5,
    "title": "Upgrade your career",
    "step_number": 5,
    "description": "Get new job!"
  },
  {
    "id": 6,
    "title": "Upgrade your career",
    "step_number": 6,
    "description": "Profit!"
  }
]
```

---

## Add step to guide

Make a POST request to:

https://how-to-build-week.herokuapp.com/api/guides/:id/steps

where :id in the URL is the id of the guide.

The header of this request must also include the relevant Content-Type and token information.

The POST request must include the following fields in the request body as JSON:

```

{
  "step_number": 9,
  "description": "Watch your money grow!",
  "guide_id": 1
}
```

If successful, the post request will result in the following response, also in JSON:

```
{
  "message": "Step added!"
}
```

---

## Update step

Make a PUT request to:

https://how-to-build-week.herokuapp.com/api/guides/steps/:id

where :id in the URL is the id of the step to be updated.

**Note:** Please note that this request does not use or require the guide id, just the step id.  The id of 11 in the example below is the step id, which is unique across the database for any given step.

The header of this request must also include the relevant Content-Type and token information.

The PUT request requires the following fields in the request body as JSON:

```
{
  "id": 11,
  "step_number": 2,
  "description": "Install dependencies like express, sqlite, helmet, and cors"
}
```

If successful, the get request will result in the following response, also in JSON:

```

{
  "message": "Step updated!"
}
```

---

## Delete a Step

Make a Delete request to:

https://how-to-build-week.herokuapp.com/api/guides/steps/:id

where :id in the URL is the id of the step to be deleted.

**Note:** Please note that this request does not use or require the guide id, just the step id, which is unique across the database for any given step.

The header of this request must also include the relevant Content-Type and token information.

If successful, the delete request will result in the following response, also as JSON:

```
{
  "message": "Step deleted!"
}
```
