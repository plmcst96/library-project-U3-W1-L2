import { Card } from "react-bootstrap"
import { Component } from "react"
import CommentArea from "./CommentArea"
// import books from '../data/books/romance.json'


class SingleBook extends Component {

    state = {
        selected: false,
    }

    render(){
    return(
      <>
            {
              this.state.selected && <CommentArea bookId ={this.props.book.asin}/>
            }
        <Card style={{height:'100%'}}
        className={this.state.selected ? 'border-2 border-danger' : 'border-1'}
        onClick={() =>{
            this.setState({selected: !this.state.selected})
        }}>
            <Card.Img variant="top" src={this.props.book.img} style={{height: '280px'}} />
            <Card.Body className='d-flex flex-column justify-content-between'>
              <Card.Title>{this.props.book.title}</Card.Title>
              <div>
              <Card.Text className='m-0'>
                {this.props.book.category}  
              </Card.Text>
              <Card.Text>
                {this.props.book.price}$
              </Card.Text>
              </div>
            </Card.Body> 
            </Card>
            </>
    )}
}
export default SingleBook