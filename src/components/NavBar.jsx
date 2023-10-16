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
import { Link } from "react-router-dom";
import brand from "../assets/gbc-logo.png";

const NavBar = () => {
    return (
        <Flex minWidth="max-content" alignItems="center" gap="2" p="5">
            <Box>
                <Link to={"/"}>
                    <img src={brand} alt="" width="100px" height="100px" />
                </Link>
            </Box>
            <Spacer />
            <Box>
                <Menu>
                    <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                        Menu
                    </MenuButton>
                    <MenuList>
                        <Link to={`/category/${"GB"}`}>
                            <MenuItem>GB</MenuItem>
                        </Link>

                        <Link to={`/category/${"GBC"}`}>
                            <MenuItem>GBC</MenuItem>
                        </Link>

                        <Link to={`/category/${"GBA"}`}>
                            <MenuItem>GBA</MenuItem>
                        </Link>

                        <Link to={`/category/${"GBASP"}`}>
                            <MenuItem>GBA SP</MenuItem>
                        </Link>

                        <Link to={`/category/${"NDS"}`}>
                            <MenuItem>NDS</MenuItem>
                        </Link>
                    </MenuList>
                </Menu>
            </Box>
            <Spacer />
            <Box>
                <Link to={"cart"}>
                    <CartWidget />
                </Link>
            </Box>
        </Flex>
    );
};

export default NavBar;
