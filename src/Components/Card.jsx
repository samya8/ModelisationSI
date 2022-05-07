import React from 'react'
import { Button} from 'react-bootstrap';
function Card() {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Option Ingénierie de la digitalisation</Card.Title>
    <Card.Text>
      Allant de pair avec l'évolution que connaît le monde en terme de disgitalisation des services, 
      cette filière vient pour former des profils capables d'établir des stratégies de digitalisation
      en faveur des différents organismes... 
    </Card.Text>
    <Button variant="primary">Savoir Plus</Button>
  </Card.Body>
</Card>
    </div>
  )
}

export default Card
