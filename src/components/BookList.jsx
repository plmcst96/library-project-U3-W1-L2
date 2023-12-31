// import books from '../data/books/romance.json'
import { Component } from 'react'
import SingleBook from './SingleBook'
import { Container, Row, Col, Form, InputGroup, FormControl,  } from 'react-bootstrap'
import { Search } from 'react-bootstrap-icons';
import CommentArea from './CommentArea';


class BookList extends Component{

     state = {
        searchValue: "",
        selectedAsin: null,
     };

     changeAsin = (newAsin)=>{
      this.setState({
          selectedAsin: newAsin,
      })
     }

    render(){
  
    return(
<Container fluid>
      <Row className='justify-content-center my-2'>
        <Col sm={4}>
          <Form className="d-flex">
            <InputGroup>
              <InputGroup.Text className="bg-white">
               <Search/>
              </InputGroup.Text>
              <FormControl type="search" className="me-2" placeholder="Search" value={this.state.searchValue} onChange={(e) =>{
                this.setState({
                    searchValue: e.target.value
                })
              }} />
            </InputGroup>
            
          </Form>
        </Col>
      </Row>
    <Row className='d-flex'> 
    <Col md={8}>
    <Row>
    {this.props.books.filter((book) => book.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    .map(book => {
        return(
            <Col xs={6} md={4} lg={3} key={book.asin} className='my-2'> 
            <SingleBook book={book} changeAsin={this.changeAsin} selectedAsin={this.state.selectedAsin}/>
            
            </Col>
        )
    })} 
    </Row> 
    </Col>
    <Col md={4}>
    <CommentArea bookId={this.state.selectedAsin}/>
    </Col>
    </Row>
 </Container>           
    )
}}

export default BookList

