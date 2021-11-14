import { Row, Col,Button } from "antd";
import { useContext } from "react";
import { StoreContext } from "../store";
import NavBar from "../component/Navbar.js";
import CartItem from "../component/CartItem";

export default function Cart() {

    const { state: { cartItems } } = useContext(StoreContext);

    if (cartItems.length > 0) {
        function TotalPrice() {
            return cartItems.reduce((sum, item) => sum + item.price, 0)
        }
        function TotalPrice2() {
            let sum = 0;
            cartItems.map(e => {
                sum = Number(sum) + Number(e.price);
            });


            return sum;

        }
        return (

            <>
                <NavBar />
                <div className="cartlist_title">
                    <div className="cartlist_title_item">商品</div>
                    <div className="cartlist_title_price">價格</div>
                    <div className="cartlist_title_delete">刪除</div>
                </div>

                {cartItems.map(item => <CartItem item={item} />)}


                <div className="cartlist_totle">
                    <div className="cartlist_totle_n"></div>
                    <div className="cartlist_totlebox">
                        <div className="cartlist_totlebox_detail">
                            <div className="cartlist_totlebox_detail_text">總金額：（共{cartItems.length}件）</div>
                            <div className="cartlist_totlebox_detail_price">NT{TotalPrice()}</div>
                        </div>
                        <div className="cartlist_totlebox_btn">
                            <Button type="primary" className="cartlist_totlebox_btn_" block
                                style={{ backgroundColor: 'black', borderColor: 'black' }}>
                                去買單
                            </Button>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <NavBar />
                <div>nothing in cart,Go shop your fashion!</div>

            </>

        )
    }


}