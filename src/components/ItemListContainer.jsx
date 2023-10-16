import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { Center } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const { category } = useParams();
    const [productos, setProductos] = useState([]);
    const [productosCargados, setProductosCargados] = useState(false);

    useEffect(() => {
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        name: "Game Boy",
                        category: "GB",
                        color: "Grey",
                        description: "(1989 - 1995)",
                        img: "",
                        price: 46000,
                        stock: 10,
                    },
                    {
                        id: 2,
                        name: "Game Boy Color",
                        category: "GBC",
                        color: "Red",
                        description: "(1998 - 2003)",
                        img: "",
                        price: 39000,
                        stock: 5,
                    },
                    {
                        id: 3,
                        name: "Game Boy Advance",
                        category: "GBA",
                        color: "Violet",
                        description: "(2001 - 2006)",
                        img: "",
                        price: 999,
                        stock: 15,
                    },
                    {
                        id: 4,
                        name: "Game Boy SP",
                        category: "GBASP",
                        color: "Tatto",
                        description: "(2003 - 2008)",
                        img: "",
                        price: 999,
                        stock: 999,
                    },
                    {
                        id: 5,
                        name: "Nintendo DS",
                        category: "NDS",
                        color: "Grey",
                        description: "2004 - 2015",
                        img: "",
                        price: 999,
                        stock: 999,
                    },
                    {
                        id: 6,
                        name: "Nintendo 3DS",
                        category: "N3DS",
                        color: "Aqua",
                        description: "2011 - 2019",
                        img: "",
                        price: 999,
                        stock: 999,
                    },
                    {
                        id: 7,
                        name: "Game Boy Color",
                        category: "GBC",
                        color: "Yellow",
                        description: "(1998 - 2003)",
                        img: "",
                        price: 39000,
                        stock: 5,
                    },
                    {
                        id: 8,
                        name: "Game Boy Color",
                        category: "GBC",
                        color: "Blue",
                        description: "(1998 - 2003)",
                        img: "",
                        price: 39000,
                        stock: 5,
                    },
                    {
                        id: 9,
                        name: "Game Boy Advance",
                        category: "GBA",
                        color: "Black",
                        description: "(2001 - 2006)",
                        img: "",
                        price: 999,
                        stock: 15,
                    },
                    {
                        id: 10,
                        name: "Game Boy Advance",
                        category: "GBA",
                        color: "Green",
                        description: "(2001 - 2006)",
                        img: "",
                        price: 999,
                        stock: 15,
                    },
                    {
                        id: 11,
                        name: "Nintendo 3DS",
                        category: "N3DS",
                        color: "Purple",
                        description: "2011 - 2019",
                        img: "",
                        price: 999,
                        stock: 999,
                    },
                    {
                        id: 12,
                        name: "Nintendo 3DS",
                        category: "N3DS",
                        color: "Black",
                        description: "2011 - 2019",
                        img: "",
                        price: 999,
                        stock: 999,
                    },
                ]);
            }, 2000);
        });

        getProductos.then((productosData) => {
            const filteredProducts = productosData.filter(
                (producto) => producto.category === category
            );
            setProductos(filteredProducts);
            setProductosCargados(true);
        });
    }, [category]);

    return (
        <Center p="1rem">
            {productosCargados ? (
                <ItemList productos={productos} />
            ) : (
                <p>Cargando productos...</p>
            )}
        </Center>
    );
};

export default ItemListContainer;
