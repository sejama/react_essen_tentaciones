
function ItemListContainer({nombre}){
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h1 style={{color: 'blue'}}>{nombre}</h1>
        </div>
    );
}

export default ItemListContainer;