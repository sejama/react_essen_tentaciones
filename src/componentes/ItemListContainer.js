
function ItemListContainer({nombre}){
    return (
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            <h1>{nombre}</h1>
        </div>
    );
}

export default ItemListContainer;