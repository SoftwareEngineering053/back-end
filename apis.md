# Users API
## Schema

{
    unitnName: 'String',
    name: 'String',
    surname: 'String',
    role: 'String'
}

## API definition

| Name             | Endpoint          | Method | Description                                                                 |
|------------------|-------------------|--------|-----------------------------------------------------------------------------|
| addUser          | /users/:email     | POST   | adds a student if not present in the database                               |
| allUsers         | /users            | GET    | returns all users in the database                                           |
|                  |                   |        |                                                                             |
| usersByRole      | /users/teachers   | GET    | returns all users with a certain role in the database                       |
| usersByUnitnname | /users/:unitnName | GET    | returns all users with a certain unitnname (up to one only) in the database |

# Courses usersByRole
## Schema

{
  id:   'int',
  title:   'string',
  abstract:   'string',
  teacherUnitnName:   'string',
  subscribers: [{
      unitnName:   'string',
  }]
} 
usersByRole
## API definition
                                     |
# Courses Resources API
