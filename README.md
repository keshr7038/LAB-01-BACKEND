

## Objective

The objective of this lab is to set up a Node.js project, create a simple web server with Node.js's built-in `http` module, and build an Express server with routes and 404 handling.

## Technologies Used

- Node.js
- Express.js
- JavaScript

## Project Structure

```text
lab-01/
├── server.js
├── http-server.js
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── screenshots/
    └── README.md
```

The installed packages are kept in `node_modules/` on your computer. It is ignored by Git and should not be committed to GitHub.

## How to Install and Run

Install the project dependencies:

```bash
npm install
```

Run either server:

```bash
node http-server.js
```

Or, in a separate run after stopping the first server:

```bash
node server.js
```

Both servers use port `3000`, so only one should run at a time. Stop a running server with **Ctrl+C** before starting the other. When a server is running, open [http://localhost:3000](http://localhost:3000) in your browser. The plain Node.js server responds with `Hello`; the Express server displays its welcome message.

You can also start the Express server using `npm start`, or the plain HTTP server using `npm run start:http`.

## Endpoints

| Method | Path | Description | Status Code |
|---|---|---|---:|
| GET | `/` | Welcome text | 200 |
| GET | `/about` | Student name and section as JSON | 200 |
| GET | `/time` | Current date and time as JSON | 200 |
| Any | Any unknown path | `404 - Page Not Found` | 404 |

## Package.json Explanation

- **name:** The package/project name (`lab-01`).
- **version:** The current project version (`1.0.0`).
- **description:** A short summary of the project.
- **main:** The main entry file for the project (`server.js`).
- **scripts:** Named commands that can be run with npm, such as `npm start`.
- **dependencies:** External packages the project needs. Express is listed here.

`package.json` records project information and dependency requirements. `node_modules/` contains the actual installed package files. It can be recreated with `npm install`, so it should not be committed to GitHub.

## Screenshots

Add your real screenshots to the `screenshots/` folder after running the project:

![Home Route](screenshots/home.png)

![About Route](screenshots/about.png)

![Time Route](screenshots/time.png)

![Optional 404 Route](screenshots/404.png)

## Notes / Problems Faced

- **Port 3000 is already in use:** Stop the other server with Ctrl+C, then retry. Check that you are not running both lab servers at once.
- **Express cannot be found:** Run `npm install` from the `lab-01` folder to install the dependencies.
- **Both servers use port 3000:** Stop one server before starting the other; they cannot listen on the same port at the same time.

