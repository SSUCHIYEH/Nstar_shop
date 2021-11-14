import NavBar from "../component/Navbar.js";
import { useContext, useEffect } from "react";
import { Layout } from 'antd';
import ProductDetail from "../component/ProductDetail";
import { StoreContext } from "../store/index.js";
import { setProductDetail } from "../actions/index.js";

const { Header, Content } = Layout;

function Product({ match }) {
    const { dispatch } = useContext(StoreContext);
    useEffect(() => setProductDetail(dispatch, match.params.productname, match.params.productclassify), [])

    return (
        <>
            <NavBar />
            <ProductDetail />
        </>
    )
}

export default Product;