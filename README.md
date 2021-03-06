# GMC: Green Music Collective

## Prerequisites
* [Node.js v12.16.0](https://nodejs.org/en/)

**NodeJS Dependencies**
* Express 4.17.1
* Express-handlebars 5.1.0
* Handlebars 4.7.6
* mongoose 5.10.0
* body-parser 1.19.0

**NodeJS dev Dependencies**
* nodemon 2.0.4


### Installing
1. Install all dependencies using the command line `npm install --save`
2. Use `npm run dev` to run using nodemon. Use `npm start` to run once.

### Importing MongoDB data
1. Create database with name `gmcdb` at MongoDB (Shell or Community). Use either `admins`, `artists`, or `events` for Collections on initial DB create.
2. Create the remaining Collections. `admins`, `artists`, and `events` must be created.
3. Go to each individual Collection and add the respective data from the data folder.

**NOTES:** Runs on port 8000.