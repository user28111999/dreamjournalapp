## Requirements

- [MongoDB (v4.4.2) >=](https://www.mongodb.com/)
- [Node.js (v14.15.3) >=](https://nodejs.org/en/)

## Installation

0. *(Optional) Change database URL in* `index.js`
1. Install dependencies with `npm install`
2. Run the server
a. `npm run start` for production
b. `npm run dev` for development

*Server uses port 3001 by default* 

## API Usage

URL | Method | Description | Usage |
------ | ------ | ------ | -------
/dreams   | POST   | Create a new dream | Send JSON object (`content` must not be empty)
/dreams | GET | Get all dreams | 
/dreams/`:id` | GET | Get a dream by `id` | Retrieve a specific dream by replacing `:id` in the URL with the id of the specific dream
/dreams/`:id` | PUT | Update a dream by `id` | Send JSON object (`content` must not be empty)
/dreams/`:id` | DELETE | Delete a dream by `id` | Delete a specific dream by replacing :id in the URL with the id of the specific dream