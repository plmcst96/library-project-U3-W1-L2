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
          <Col xs={8} md={8}>
            <BookList books={romanceBooks} id={this.changeAsin} />
          </Col>
          <Col xs={4} md={4}>
            <h2 className='text-center'>Recensioni</h2>
            {
              this.state.selected && <CommentArea selected={this.newSelected} id={this.changeAsin} />
            }
          </Col>


        </Row>
        <MyFooter />
      </div>
    );
  }
}

export default App;
