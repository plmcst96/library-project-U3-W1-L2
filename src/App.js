import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
// import AllTheBooks from './components/AllTheBooks';
import BookList from './components/BookList';
import romanceBooks from '../src/data/books/romance.json'
import { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import CommentArea from './components/CommentArea';
// import SingleBook from './components/SingleBook';

class App extends Component {
  state = {
    comments: '',
    selected: undefined,
  }
  changeAsin = (asin) => {
    this.setState({
      comments: asin,
    })
  }
  newSelected = (asin) => {
    this.setState({
      selected: asin,
    })
  }
  render() {
    return (
      <div>
        <MyNav />
        <Welcome />
        <Row>
          <Col>
            <BookList books={romanceBooks} id={this.changeAsin} />
          </Col>
          <Col>
          </Col>
          {
            this.state.selected && <CommentArea selected={this.newSelected} id={this.changeAsin} />
          }

        </Row>
        <MyFooter />
      </div>
    );
  }
}

export default App;
