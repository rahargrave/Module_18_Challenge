# Social Network API

This is an API for a social network platform built using Node.js and MongoDB. It allows users to create accounts, add friends, post their thoughts, and react to others' thoughts, among other features.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Thoughts](#thoughts)
  - [Reactions](#reactions)
  - [Friends](#friends)
- [Contributing](#contributing)
- [License](#license)

## Installation
1. Clone the repository by running `git clone <repository-url>` in your terminal.
2. Install project dependencies by running `npm install`.
3. Seed the database with initial data by running `npm run seed`.

## Usage
1. Start the server by running `npm start`.
2. To test the API endpoints, you can use tools like Insomnia or Postman.

## API Endpoints

### Users

- `GET /api/users` - Retrieve a list of all users in the application.
- `GET /api/users/:userId` - Retrieve a single user by ID.
- `POST /api/users` - Create a new user by providing a username and email address in the request body.
- `PUT /api/users/:userId` - Update a user's details by providing a field and value in the request body.
- `DELETE /api/users/:userId` - Delete a user by ID.

### Thoughts

- `GET /api/thoughts` - Retrieve a list of all thoughts in the application.
- `GET /api/thoughts/:thoughtId` - Retrieve a single thought by ID.
- `POST /api/thoughts` - Create a new thought by providing a thoughtText and username (belonging to the author) in the request body.
- `PUT /api/thoughts/:thoughtId` - Update a thought's text by providing a thoughtText in the request body.
- `DELETE /api/thoughts/:thoughtId` - Delete a thought by ID.

### Reactions

- `POST /api/thoughts/:thoughtId/reactions` - Create a new reaction to a thought by providing a reactionBody and username (belonging to the author) in the request body.
- `DELETE /api/thoughts/:thoughtId/reactions/:reactionId` - Delete a reaction to a thought by ID.

### Friends

- `POST /api/users/:userId/friends/:friendId` - Add a user to another user's friend list by providing friendId (the ID of the friend to be added) in the request parameters.
- `DELETE /api/users/:userId/friends/:friendId` - Remove a user from another user's friend list by providing friendId (the ID of the friend to be removed) in the request parameters.

## Contributing

This project was created as an assignment task by the User as part of their learning process. However, contributions from other developers are welcome. If you notice any bugs or have suggestions for additional features, please open an issue or submit a pull request.

## License

This API is licensed under the terms of the [MIT license](https://opensource.org/licenses/MIT).