import React, { useState } from 'react';
import { DashCircleDotted, PlusCircleDotted} from 'react-bootstrap-icons';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonAdd from './ButtonAdd'

function ItemCount({item}){
    let inicial = item.min || 1;
    let cantidad = item.stock;
    const [seleccionado, setSeleccionado] = useState(inicial);
   
    function handleAumentar(){
        if(seleccionado < cantidad){
            setSeleccionado(seleccionado+1)
        }
    }

    function handleDisminuir(){
        if(seleccionado > inicial){
            setSeleccionado(seleccionado-1)
        }
    }
    
    return (
        <div>
            <Container>
                <Row className="square border border-1" style={{'borderRadius':'5px'}}>
                    <Col className="text-center text-md-right">
                        <DashCircleDotted color="black" size={25} style={{marginRight: 10}} 
                            onClick={handleDisminuir} />
                    </Col>
                    <Col className="text-center text-md-right">
                        {seleccionado}
                    </Col>
                    <Col className="text-center text-md-right">
                        <PlusCircleDotted color="black" size={25} style={{marginRight: 10}} 
                            onClick={handleAumentar}  />
                    </Col>
                </Row>
                <Row>
                    <ButtonAdd total={seleccionado} item={item}/>
                </Row>
            </Container>
            
        </div>
    )
}
export default ItemCount;