import {
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Flex,
    Box,
    Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import CartWidget from "./CartWidget";
import brand from "../assets/gbc-logo.png";

const NavBar = () => {
    return (
        <Flex minWidth="max-content" alignItems="center" gap="2" p="5">
            <Box>
                <img src={brand} alt="Logo" width="100px" height="100px" />
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <Button>Todos</Button>

                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <MenuItem>GB</MenuItem>

                        <MenuItem>GBC</MenuItem>

                        <MenuItem>GBA</MenuItem>

                        <MenuItem>GBA SP</MenuItem>

                        <MenuItem>NDS</MenuItem>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box>
                <CartWidget />
            </Box>
        </Flex>
    );
};

export default NavBar;
