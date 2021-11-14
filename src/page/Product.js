import NavBar from "../component/Navbar.js";
import React,{ useContext, useEffect,useState } from "react";
import ProductDetail from "../component/ProductDetail";
import { StoreContext } from "../store/index.js";
import { setProductDetail } from "../actions/index.js";
import Footer from "../component/Footer.js";

function Product({ match }) {
    const { dispatch } = useContext(StoreContext);
    const [productname] = useState(match.params.productname)
    const [classify] = useState(match.params.productclassify)
    //setProductDetail(dispatch, productname, classify)
    useEffect(() => setProductDetail(dispatch, productname, classify), [])
    return (
        <>
            <NavBar />
            <ProductDetail />
            <Footer />
        </>
    )
}




export default Product;