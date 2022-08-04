import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';

function Item({dato}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dato.pictureUrl} />
      <Card.Body>
        <Card.Title>{dato.title}</Card.Title>
        <Card.Text>{dato.description}</Card.Text>
        <Button variant="secondary">Ver detalle del producto</Button>{''}
        <Card.Text>$ {dato.price}</Card.Text>
        <ItemCount inicial={dato.min} cantidad={dato.stock} />
        <Card.Text> Stock Disponible { dato.stock}</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Item;