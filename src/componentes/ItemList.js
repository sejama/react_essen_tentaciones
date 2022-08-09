import Item from "./Item";

export default function ItemList({datos}) {
    return (
        <>
            {
                datos.map((item) => {
                    return (<Item key={item.id} dato={item}/>) })
            }
        </>
    ) 
}

