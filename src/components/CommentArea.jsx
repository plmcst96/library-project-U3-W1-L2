import { Component } from "react";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { Alert, Col, Container, Row, Spinner } from "react-bootstrap";




const keyApi = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE3NmY2ZTNkZDAwMTQ5NWU0MzIiLCJpYXQiOjE2OTgzMTg5NjYsImV4cCI6MTY5OTUyODU2Nn0.aZI0DuOO_gsdwCf_xEW6-DvWQ9rF4oLuse4HcOVYLS4"

class CommentArea extends Component {
    state = {
        comments: [],
        isLoadin: true,
        isError: false,
    }
    getComments = async () =>{
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/' + this.props.bookId, {
                headers: {
                    Authorization: keyApi,
                },
            })
            if(res.ok){
                const data = await res.json()
                console.log('data', data)

                this.setState({
                    comments: data,
                    isLoadin: false,
                })

            } else {
                throw new Error ('Fetch non conclusa!')
            }
        } catch (error) {
            console.log('errore nel caricamneto commenti', error)
            this.setState({
                isLoadin: false,
                isError: true,
            })
        }
    }

    componentDidMount(){
        this.getComments()
    }

    render(){
        return(
        <Container>
            <Row>
                {
                    this.state.isLoadin && ( <div className="d-flex justify-content-center"><Spinner animation="grow" variant="info" /></div>)
                }
                {
                    this.state.isError && ( <Alert variant="danger">
                    Ritenta sarai più fortunato!
                  </Alert>)
                }
                <Col>
                  <CommentsList comments={this.state.comments}/>
                </Col>
                <Col>
                   <AddComment bookId={this.props.bookId} />  
                </Col>
            </Row>
        </Container>
        
        )
    }
}

export default CommentArea