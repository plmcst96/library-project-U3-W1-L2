// import books from '../data/books/romance.json'
import { Component } from 'react'
import SingleBook from './SingleBook'
import { Container, Row, Col, Form, InputGroup, FormControl,  } from 'react-bootstrap'


class BookList extends Component{

     state = {
        searchValue: "",
    
        // selectedCategory: fantasyBooks,
     };

    render(){
  
    return(
<Container fluid>
      <Row className='justify-content-center my-2'>
        <Col sm={4}>
          <Form className="d-flex">
            <InputGroup>
              <InputGroup.Text className="bg-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.5 3a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM1 9.5a8.5 8.5 0 1 1 17 0 8.5 8.5 0 0 1-17 0z"
                  />
                  <path
                    fillRule="evenodd"
                    d="M16.853 16.854a.5.5 0 0 0 .707 0l3.793-3.793a.5.5 0 0 0 0-.707l-3.793-3.793a.5.5 0 0 0-.707.707L19.293 12H10.5a.5.5 0 0 0 0 1h8.793l-2.646 2.646a.5.5 0 0 0 0 .707z"
                  />
                </svg>
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
    {this.props.books.filter((book) => book.title.toLowerCase().includes(this.state.searchValue.toLowerCase()))
    .map(book => {
        return(
            <Col xs={6} md={4} lg={2} key={book.asin} className='my-2'> 
            <SingleBook book={book}/>
            
            </Col>
        )
    })}  
    </Row>
 </Container>           
    )
}}

export default BookList

