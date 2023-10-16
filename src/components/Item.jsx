import {
    Card,
    CardHeader,
    Text,
    CardBody,
    Heading,
    Button,
    CardFooter,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Item = ({ name, description, id, category, color }) => {
    return (
        <>
            <Card>
                <CardHeader>
                    <Heading size="md">{name}</Heading>
                </CardHeader>
                <CardBody>
                    <Text>{description}</Text>
                    <Text>{category}</Text>
                    <Text>{color}</Text>
                </CardBody>
                <CardFooter>
                    <Link to={`/item/${id}`}>
                        <Button>Detalle</Button>
                    </Link>
                </CardFooter>
            </Card>
        </>
    );
};

export default Item;
