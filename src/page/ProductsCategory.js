import { useContext } from "react";
import NavBar from "../component/Navbar.js";
import Productlist from "../component/Productlist.js";
import { StoreContext } from "../store/index.js";
import Footer from "../component/Footer.js";


function ProductsCategory() {
    const { state: { page: { products } } } = useContext(StoreContext)
    return (
        <>
            <Productlist products={products} />
        </>

    )
}

export default ProductsCategory;