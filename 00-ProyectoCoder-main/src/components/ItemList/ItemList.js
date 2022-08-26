import {Contenedor} from '../../recursos/contenedor/Contenedor'
import {CardStock} from '../../recursos/cardStock'
import './ItemList.css'


export const ItemList = ({productos}) => {
    return (
        <Contenedor>
            
            <div className='row'>
                {productos.map((el) => <CardStock key={el.id}{...el}/>)}
            </div>
        </Contenedor>
    )
}
