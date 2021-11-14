
import { useEffect, useContext } from "react";
import { Button } from "antd";
import { addCatItem } from "../actions";
import { StoreContext } from "../store";



export default function AddToCart () {
    
    const {state :{cartItem, productDetail: {product}},dispatch} = useContext(StoreContext);

    
    const addToCart = () => {
        addCatItem(dispatch, product)
    }

    useEffect(()=>{
        localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }, [cartItem])

    return(
        <button className="addCart-button" onClick={addToCart} >
            <span>加入購物車</span>
        </button>
    )
}