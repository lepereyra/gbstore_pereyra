import { Flex, Box, Spacer } from "@chakra-ui/react";
import { Badge } from "@chakra-ui/react";
import cart from "../assets/shopping-cart.png";

const CartWidget = () => {
    return (
        <Flex>
            <Box p="4">
                <img
                    src={cart}
                    alt="imagen carrito"
                    width="50px"
                    height="50px"
                />
            </Box>
            <Spacer />
            <Box p="4">
                <Badge colorScheme="purple">5</Badge>
            </Box>
        </Flex>
    );
};

export default CartWidget;
