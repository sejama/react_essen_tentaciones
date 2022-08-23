import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";



function Item({dato}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={dato.pictureUrl} />
      <Card.Body>
        <Card.Title>{dato.title}</Card.Title>
        <Card.Text>{dato.description}</Card.Text>
        <Link to={`/detalle/${dato.id}`} >
          <Button variant="secondary" >
              Ver detalle del producto
          </Button>
        </Link>
        <Card.Text>${dato.price}</Card.Text>
        <Card.Text> Stock Disponible { dato.stock}</Card.Text>
        
      </Card.Body>
    </Card>
  );
}

export default Item;