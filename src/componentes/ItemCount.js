import React, { useState } from 'react';
import { DashCircleDotted, PlusCircleDotted} from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function ItemCount(props){
    let cantidad = parseInt(props.cantidad);
    let [seleccionado, setSeleccionado] = useState(0);

    return (
        <>
            <Container>
                <Row className="square border border-1" style={{'borderRadius':'5px'}}>
                    <Col>
                        <DashCircleDotted color="black" size={25} style={{marginRight: 10}} 
                            onClick={() => {
                                if(seleccionado >= 0){
                                    setSeleccionado(seleccionado--)
                                }}
                                } />
                    </Col>
                    <Col>
                       {seleccionado}
                    </Col>
                    <Col>
                        <PlusCircleDotted color="black" size={25} style={{marginRight: 10}} 
                            onClick={() => {
                                if(seleccionado <= cantidad){
                                    setSeleccionado(seleccionado++)
                                }}}  />
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ItemCount;