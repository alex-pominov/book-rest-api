import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Welcome from './components/Welcome';
import Book from './components/Book';
import Booklist from './components/BookList';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Container>
        <Row>
          <Col md={12} className="margin-top">
            <Switch>
              <Route path="/" exact component={Welcome} />
              <Route path="/add" exact component={Book} />
              <Route path="/edit/:id" exact component={Book} />
              <Route path="/list" exact component={Booklist} />
            </Switch>
          </Col>
        </Row>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
