# React Universal Blog

---

## Project Overview

Building a React Universal Blog App that will first render markup on the server side to make our content available to search engines. Then, it will let the browser take over in a single page application that is both fast and responsive. This app is build per tutorial from [Sitepoint](https://github.com/sitepoint-editors/react-universal-blog).

## Run on local machine

1. Clone repository to local machine using:

```
git clone https://github.com/Galiant/react-universal-blog.git
```

2. Go into the application folder:

```
cd react-universal-blog
```

3. Install dependencies using`npm` command line tool:

```
npm install
```

4. Run the application, again using `npm`:

```
npm start
```

5. This will open a new browser tab/window with the application running on:

```
http://localhost:3000
```

## How to run a development build

- npm run development
- open `http://localhost:8080`

## Configure your Cosmic JS bucket

After setting up your bucket on Cosmic JS, edit the config.js file and edit the slug to point to the slug of your bucket:

```
// config.js
export default {
  bucket: {
    slug: 'react-universal-blog'
  }
}
```

## Dependencies

- [Node.js](https://nodejs.org/) for package management and server-side rendering
- [React](https://reactjs.org/) for UI views
- [Express](http://expressjs.com/) for an easy back-end JS server framework
- [React Router](https://github.com/ReactTraining/react-router) for routing
- [React Hot Loader](https://github.com/gaearon/react-hot-loader) for hot loading in development
- [Flux](https://facebook.github.io/flux/) for data flow
- [Cosmic JS](https://cosmicjs.com/) for content management
- [Babel](https://babeljs.io/) for convert our ES6 and React JSX into browser-compatible JavaScript
- [Webpack](https://github.com/webpack/webpack) for bringing everything together into a bundle.js file
- [Bootstrap Blog Theme](https://startbootstrap.com/template-overviews/clean-blog/) focusing more on functionality than style, here I’ll use a pre-built front-end theme
