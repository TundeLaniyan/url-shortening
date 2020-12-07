Thia is a modern URL shortener with support for custom domains. Shorten URLs, manage your links.

Frontend: http://localhost:3000
Backend: http://localhost:1515

TypeScript is used on both React and NodeJS. MongoDB noSql database is used to store data.

Table of Contents
Key Features
Stack
Setup
Browser Extensions
API
Integrations
3rd Party Packages
Donate
Contributing

Key Features
Free and open source.
Custom domain support.
Custom URLs for shortened links
View and manage your links.
RESTful API.

Stack
Node
Express
React
MongoDB
Docker
Typescript

Setup
Manual
You need to have Node.js and Docker installed.

Clone this repository or download the latest zip.
Copy .example.env to .env and fill it properly (see below).
Install dependencies: npm install.
Run for development: npm run dev.
Run for production: npm run build then npm start.
Docker
Download the docker-compose.yml and the .docker.env-file from the repository and configure the .docker.env (see below). To execute Pbid you simply have to run docker-compose up -d command and then the app should be ready on port "1515".

Configuration
For the minimal configuration the following settings have to be changed in the .env-file:

API
To get the list of all the url in the database, send a get request to this url:
get("http://localhost:3000/api/v1")

To get original url send a get request to this url. At the end of the url add the shorten url:
get("http://localhost:3000/api/v1/[shorten url]")

To shorten new url, send a post request to this url. Add body to the post request. In the body have a key with 'longurl' and the value should be the original url:
post("http://localhost:3000/api/v1", {longUrl: [original url]})
