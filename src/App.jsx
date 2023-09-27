import "./App.css";
import Home from "./components/Home";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
function App() {
    return (
        <>
            <NavBar />
            <Home />
            <ItemListContainer greeting="Todo en consolas portátiles" />
        </>
    );
}

export default App;
