// import books from '../data/books/romance.json'
import SingleBook from './SingleBook'
import { Container, Row, Col } from 'react-bootstrap'

const BookList = (props)=>{
    return(
<Container fluid>
    <Row className='d-flex'> 
    {props.books.map(book => {
        return(
            <Col xs={6} md={4} lg={2} key={book.asin} className='my-2'> 
            <SingleBook img= {book.img} title= {book.title} category= {book.category} price= {book.price}>
            </SingleBook>
            </Col>
        )
    })}  
    </Row>
 </Container>           
    )
}

export default BookList

