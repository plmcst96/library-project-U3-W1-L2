import { Component } from "react";
import { Alert, Button, Form } from "react-bootstrap";

const keyApi = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNGE3NmY2ZTNkZDAwMTQ5NWU0MzIiLCJpYXQiOjE2OTgzMTg5NjYsImV4cCI6MTY5OTUyODU2Nn0.aZI0DuOO_gsdwCf_xEW6-DvWQ9rF4oLuse4HcOVYLS4"


class AddComent extends Component {

    handleInputChange = (property, value) =>{
        this.setState({
        
            [property]: value
        })
    }

    postComment = async (e)=>{
        e.preventDefault()
        try {
            const res = await fetch('https://striveschool-api.herokuapp.com/api/comments/', {
                method: 'POST',
                body: JSON.stringify(this.props.bokkId),
                headers: {
                    Authorization: keyApi,
                    'Content-Type': 'application/json',
                },
            })
            if(res.ok){
                <Alert variant="info">Prenotazione Salvata!</Alert>
            } else {
                throw new Error(
                  "C'è stato un errore nel salvataggio della prenotazione"
                )
              }
            
        } catch (error) {
            console.log('errore nel submit del commento', error)
        }
    }
    componentDidMount(){
        this.postComment()
    }

    render(){
        return(
            <Form>
            <Form.Group className="mb-3" value={this.state.comment.comment}
                  onChange={(e) => {
                    this.handleInputChange('comment', e.target.value)
                  }}>
              <Form.Label>Lascia qui un tuo commento</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
            <Form.Select aria-label="Default select example"  value={this.state.comment.rate}
                  onChange={(e) => {
                    this.handleInputChange('rate', e.target.value)
                  }}>
      <option>Lascia un voto</option>
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
    </Form.Select>
    <Button variant="warning" type="submit">Invia!</Button>
          </Form>
        )
    }
}

export default AddComent