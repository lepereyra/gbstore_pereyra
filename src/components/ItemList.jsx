import Item from "./Item";
import { Center } from "@chakra-ui/react";

const ItemList = ({ productos }) => {
    return (
        <Center>
            {productos.map((p) => {
                return (
                    <Item
                        key={p.id}
                        id={p.id}
                        name={p.name}
                        description={p.description}
                        color={p.color}
                        category={p.category}
                    />
                );
            })}
        </Center>
    );
};

export default ItemList;
