import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'


export const CardStock = ( {id, nombre, precio, img, desc, oferta} ) => {

    return (
        <Card style={{ width: '16rem', margin: '12px' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title>{nombre}</Card.Title>
                {/* <Card.Text>
                    {desc}
                </Card.Text> */}
                { oferta &&
                    <Card.Title>¡15 OFF!</Card.Title>
                }

                <Card.Text>
                    Precio: ${oferta? precio*0.85:precio}
                </Card.Text>
                
            </Card.Body>
            <Link to={`/detail/${id}`}>
                    <Button className="btn btn-secondary my-2 btn-block" >Ver más</Button>
                </Link>
        </Card>
    )
}