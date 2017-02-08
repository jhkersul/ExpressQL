<img src="http://i.imgur.com/KXbWZTA.png" width="400">

# Express GraphQL API Start Kit
### Express.js + GraphQL + MongoDB + JWT Auth


#### 1. What is ExpressQL?
ExpressQL is a API Start Kit that bundles a bunch of features that almost every API needs. ExpressQL is written in Javascript following the ES6 convention.

ExpressQL uses the most popular Node.js web framework to deal with HTTP Requests: Express.js. The data flux is given by GraphQL, the default database is MongoDB and authentication uses JSON Web Token (JWT).

With ExpressQL you only need to write your custom endpoints and you'll have in your hands a bunch of features like authentication, permissions, caching, file uploading and many others.

#### 2. Features
- [x] Full ES6
- [x] Airbnb Javascript coding style
- [x] Full GraphQL API, no REST endpoints
- [ ] MongoDB connection and queries
- [ ] User Email/Password creating and authentication
- [ ] Creating and authenticating user with Facebook
- [ ] Simple error handling
- [ ] Auto generates a temporary Token on Login
- [ ] Manage permissions
- [ ] Image uploading support
- [ ] File uploading support
- [ ] Caching support
- [ ] Serving static files

#### 3. Installation

* TODO
* Watchman
* Node.js

#### 4. Used Technologies
| Technology | Package Used    |
|------------|:---------------:|
| GraphQL    | express-graphql |
| MongoDB    | mongoose        |

#### 5. Folder Structure

The structure of ExpressQL was designed for perfect scaling. The structure is explained on the schema below.

```
ExpressQL
│
└───controllers
    |
      # Try to concentrate all your API logic in here,
      # DB calls and data manipulation
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
```
