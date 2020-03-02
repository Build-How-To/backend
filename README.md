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
