import { useContext } from "react";
import NavBar from "../component/Navbar.js";
import { Layout } from 'antd';
import Productlist from "../component/Productlist.js";
import { StoreContext } from "../store/index.js";
import Footer from "../component/Footer.js";

const { Header, Content } = Layout;

function Shop() {
    const { state: { page: { title, products } } } = useContext(StoreContext)
    return (
        <>
            <NavBar />
            <Productlist products={products} />
            <Footer />
        </>

    )
}

export default Shop;