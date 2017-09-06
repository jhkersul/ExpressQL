<img src="http://i.imgur.com/KXbWZTA.png" width="400">

# Express GraphQL API Start Kit (In Development)
### Node.js + Express.js + GraphQL + MongoDB + JWT Auth


#### 1. What is ExpressQL?
ExpressQL is a API Start Kit that bundles a bunch of features that almost every API needs. ExpressQL is written in Javascript following the ES6 convention.

ExpressQL uses the most popular Node.js web framework to deal with HTTP Requests: Express.js. The data flux is given by GraphQL, the default database is MongoDB and authentication uses JSON Web Token (JWT).

With ExpressQL you only need to write your custom endpoints and you'll have in your hands a bunch of features like authentication, permissions, caching, file uploading and many others.

#### 2. Features
- [x] Full ES6
- [x] Functional programming approach
- [x] Airbnb Javascript coding style
- [x] Full GraphQL API, no REST endpoints
- [x] Vanilla GraphQL calls (Not focused on Relay users)
- [x] MongoDB connection
- [x] Jest tests
- [x] User creation
- [x] User updating
- [x] User password encrypted
- [x] User authentication
- [ ] Creating and authenticating user with Facebook
- [ ] Simple error handling
- [ ] Auto generates a temporary Token on Login
- [ ] Manage permissions
- [ ] Image uploading support
- [ ] File uploading support
- [ ] Caching support
- [ ] Serving static files
- [ ] Sending emails

#### 3. Installation

1. Watchman
  * Install Watchman on your system following the official tutorial:
  https://facebook.github.io/watchman/docs/install.html

2. Node.js
  * Install Node.js on your system following the official tutorial:
  https://nodejs.org/en/download/package-manager/

3. MongoDB:
  * Install on your system following the official tutorial:
  https://docs.mongodb.com/manual/administration/install-community/
  * Create MongoDB database:
  ```
  $ mongo
  > use ExpressQL
  > exit
  ```

#### 4. Technologies Used
| Technology | Package Used    |
|------------|:---------------:|
| GraphQL    | express-graphql |
| MongoDB    | mongoose        |
| JWT        | jsonwebtoken    |

#### 5. Folder Structure

The structure of ExpressQL was designed for perfect scaling. The structure is explained on the schema below.

```
ExpressQL
│
└───services
    |
      # Try to concentrate all your internal logic in here,
      # Things evolving data manipulation, validations
    |
│
└───models
    |
      # This is were you put all your Mongoose models
      # In the models that you do the connection with MongoDB (CRUD methods)
    |
│   
└───graphql
|   └───mutations
    |
      # All GraphQL mutations goes here
    |
|   └───queries
    |
      # All GraphQL queries goes here
    |
|   └───types
    |
      # All GraphQL types goes here
    |
    schema.js # Main GraphQL schema file
|
└───tests
    |
      # This is were you put all your jest tests
    |
│
```
