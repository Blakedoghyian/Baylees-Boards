import './App.css';
import React from 'react';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

import Homepage from './components/Home';
import Contact from './components/Contact';
import SignIn from './components/Sign In';
import SignUp from './components/Sign Up';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Baylee's Boards",
      headerLinks: [
        { title: 'Home', path: '/'},
        { title: 'SignIn', path: '/SignIn'},
        { title: 'SignUp', path: '/SignUp'}
      ],
      home: {
        title: 'My Projects',
        subtitle: '',
        text: '',
      },
      SignIn: {
        title: 'About me'
      },
      SignUp: {
        title: 'Reach out'
      }
    }
  }

  render() {
    return (
      <Router>
        <Container>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
          <h1 className="title">Baylee's Boards</h1>
          <Navbar.Toggle className='border-0' aria-controls="navbar-toggle" />
          <Navbar.Collapse id="navbar-toggle">
            <Nav className="ml-auto">

              <Link className=' mx-2 nav-link' to="/">Home</Link>
              <Link className=' mx-2 nav-link' to="/SignIn">Sign In</Link>
              <Link className=' mx-2 nav-link' to="/SignUp">Sign Up</Link>
              <Link className=' mx-2 nav-link' to="/contact">Contact</Link>

            </Nav>
          </Navbar.Collapse>
          </Navbar>
          <Routes>

          <Route path="/" element={<Homepage/>} exact />
          <Route path="/SignIn" element={<SignIn/>} exact />
          <Route path="/SignUp" element={<SignUp/>} exact />
          <Route path="/contact" element={<Contact/>} exact />

          </Routes>
        </Container>
      </Router>

    );
  }
}

export default App;

