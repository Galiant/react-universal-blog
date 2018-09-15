# React Universal Blog

---

## Project Overview

Building a React Universal Blog App that will first render markup on the server side to make our content available to search engines. Then, it will let the browser take over in a single page application that is both fast and responsive.

## Run on local machine

1.  Clone repository to local machine using:

```
git clone https://github.com/Galiant/react-universal-blog.git
```

2.  Go into the application folder:

```
cd react-universal-blog
```

3.  Install dependencies using`npm` command line tool:

```
npm install
```

4.  Run the application, again using `npm`:

```
npm start
```

5. This will open a new browser tab/window with the application running on:

```
http://localhost:3000
```

## How to run a production build

- npm run build
- npm install -g serve
- serve -s build
- open `http://localhost:5000`

## Dependencies

- [Node.js](https://nodejs.org/) for package management and server-side rendering
- [React](https://reactjs.org/) for UI views
- [Express](http://expressjs.com/) for an easy back-end JS server framework
- [React Router](https://github.com/ReactTraining/react-router) for routing
- [React Hot Loader](https://github.com/gaearon/react-hot-loader) for hot loading in development
- [Flux](https://facebook.github.io/flux/) for data flow
- [Cosmic JS](https://cosmicjs.com/) for content management
