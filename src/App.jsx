import "./App.css";

import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

const App = () => {
    return (
        <BrowserRouter>
            <NavBar />

            <Routes>
                <Route exact path="/" element={<Home />}></Route>
                <Route exact path="/about" element={<About />}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
                <Route exact path="/cart" element={<Cart />}></Route>
                <Route
                    exact
                    path="/item/:id"
                    element={<ItemDetailContainer />}
                ></Route>
                <Route
                    exact
                    path="/category/:category"
                    element={<ItemListContainer />}
                ></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
