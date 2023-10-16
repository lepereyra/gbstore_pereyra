import { useParams } from "react-router-dom";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
    Button,
    Center,
} from "@chakra-ui/react";
import ItemCount from "./ItemCount";

//detalles de productos

const ItemDetail = ({ productos }) => {
    const { id } = useParams();

    const filteredProducts = productos.filter((producto) => producto.id == id);

    return (
        <div>
            {filteredProducts.map((p) => {
                return (
                    <div key={p.id}>
                        <Center p="1rem">
                            <Card>
                                <CardHeader>
                                    <Heading size="md">{p.name}</Heading>
                                </CardHeader>
                                <CardBody>
                                    <Text>{p.description}</Text>
                                    <Text>{p.category}</Text>
                                    <Text>{p.color}</Text>
                                    <Text>$ {p.price}</Text>
                                    <Text>Stock {p.stock}</Text>
                                </CardBody>
                                <CardFooter>
                                    <ItemCount />
                                    <Button>Comprar</Button>
                                </CardFooter>
                            </Card>
                        </Center>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemDetail;
