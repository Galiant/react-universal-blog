import React, { Component } from "react";
import { Route, IndexRoute, Link } from "react-router";

// Main component
class App extends Component {
  componentDidMount() {
    document.body.className = "";
  }
  render() {
    return (
      <div>
        <h1>React Universal Blog</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/work">Work</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

// Pages
class Home extends Component {
  render() {
    return (
      <div>
        <h2>Home</h2>
        <div>I am home page</div>
      </div>
    );
  }
}

class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
        <div>I am about page</div>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    return (
      <div>
        <h2>Projects</h2>
        <div>I am projects page</div>
      </div>
    );
  }
}

class Contact extends Component {
  render() {
    return (
      <div>
        <h2>Contact</h2>
        <div>I am contact page</div>
      </div>
    );
  }
}

class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>NoMatch</h2>
        <div>404 error</div>
      </div>
    );
  }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="projects" component={Projects} />
    <Route path="contact" component={Contact} />
    <Route path="*" component={NoMatch} />
  </Route>
)
