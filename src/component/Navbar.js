import { useState, useContext, useEffect } from "react";
import NavItem from "./NavItem";
import { Menu, Dropdown } from 'antd';
import { StoreContext } from "../store"
import { Badge, Avatar, Button } from "antd";

import landind_page_img from '../assests/Icon/logo.png'
import search_icon from "../assests/Icon/loupe.png"
import like_icon from '../assests/Icon/like.png'
import cart_icon from '../assests/Icon/shopping-cart-outline.png'

const menu = (
    <Menu>
        <Menu.Item >
            <NavItem to="/shop/women_top" className="nav-item">top</NavItem>
        </Menu.Item>
        <Menu.Item >
            <NavItem to="/shop/women_bottom" className="nav-item">bottom</NavItem>
        </Menu.Item>
    </Menu>
);

export default function NavBar() {

    const { state: { cartItems } } = useContext(StoreContext);
    const [active, setAcitve] = useState(false);
    const [ClassName, setClassname] = useState("collapse hide");
    let collapse_className = "collapse hide"
    let counts = cartItems.length;

    function toggle() {
        setAcitve(!active)
    }
    useEffect(() => {
        if (active) {
            setClassname("collapse")

        } else {
            setTimeout(() => {
                setClassname("collapse hide")
            }, 100);

        }
    }, [active])


    return (
        <div className="Header">
            <nav className="nav2" role='navigation'>
                <ul className="ul">
                    <li className="li li-logo" >
                        <NavItem to="/" >
                            <img class="nav-logo" src={landind_page_img} />
                        </NavItem>
                    </li>
                    <li className="li"><a>women</a>
                        <ul className="ul">
                            <li className="li">
                                <NavItem to="/shop/women_top" >top</NavItem>
                            </li>
                            <li className="li">
                                <NavItem to="/shop/women_bottom" >bottom</NavItem>
                            </li>
                        </ul>
                    </li>
                    <li className="li"><a href="#">men</a>
                        <ul className="ul">
                            <li className="li"><NavItem to="/shop/men_top" >top</NavItem></li>
                            <li className="li"><NavItem to="/shop/men_bottom" >bottom</NavItem></li>
                        </ul>
                    </li>

                </ul>
                <ul className="ul">
                    <li className="li" >
                        <NavItem to="/favorite" >
                            <img className="navlist-icon" src={search_icon} />
                        </NavItem>
                    </li>
                    <li className="li" >
                        <NavItem to="/favorite" > <img className="navlist-icon" src={like_icon} /></NavItem>
                    </li>
                    <li className="li">
                        <div onMouseEnter={toggle}>
                            <NavItem to="/cart">
                                <Badge showZero={true} count={counts} size={"small"}>
                                    <img className="navlist-icon" src={cart_icon} />
                                </Badge>
                            </NavItem>
                        </div>
                    </li>
                    <li className="li"><a href="#">Log in</a></li>
                    <li className="li li-btn">
                        <NavItem to="/shop/women_bottom" >Sign up</NavItem>
                    </li>
                </ul>

            </nav>

            {
                counts > 0 ?
                    <div onMouseLeave={toggle} className={ClassName}>
                        {cartItems.map(product => (
                            <div className="collapse-item">
                                <img className="collapse-item-img" src={product.imgUrl_1} />
                                <p className="collapse-item-name">{product.name}</p>
                                <p className="collapse-item-price">NT {product.price}</p>
                            </div>
                        ))}
                        <div className="collapse-bottom">
                            <p className="collapse-total" >共{counts}件商品</p>
                            <span className="collapse-button">
                                <NavItem to="/cart">
                                    查看我的購物車
                                </NavItem>
                            </span>
                        </div>
                    </div>

                    :
                    <div onMouseLeave={toggle} className={ClassName}>
                        <p>目前購物車沒有商品</p>
                        <div className="collapse-bottom">
                            <p className="collapse-total" >共{counts}件商品</p>
                            <span className="collapse-button">
                                <NavItem to="/cart">
                                    查看我的購物車
                                </NavItem>
                            </span>
                        </div>
                    </div>

            }
        </div>
    )

}


/*
    <NavItem to="/favorite" >
                        <p >log in</p>
                    </NavItem>
*/

// const oldnav = () => {
//     <div className="nav">
//         <ul className="navlist navlist-left">
//             <li className="nav-item">
//                 <NavItem to="/" >
//                     <img class="nav-logo" src={landind_page_img} />
//                 </NavItem>
//             </li>
//             <li className="nav-item nav-item-text">
//                 <NavItem to="/shop/women_top" >top</NavItem>
//             </li>
//             <li className="nav-item nav-item-text">
//                 <NavItem to="/shop/women_bottom" >bottom</NavItem>
//             </li>
//             <li className="nav-item nav-item-text nav-item-dropdown">
//                 <a>Women</a>
//                 <ul className="nav-item-dropdown-list">
//                     <li className="nav-item-dropdown-item">
//                         <NavItem to="/shop/women_top" >top</NavItem>
//                     </li>
//                     <li className="nav-item-dropdown-item">
//                         <NavItem to="/shop/women_bottom" >bottom</NavItem>
//                     </li>
//                 </ul>

//             </li>
//             <li className="nav-item nav-item-text">
//                 <Dropdown overlay={menu}>
//                     <a className="ant-dropdown-link">
//                         women
//                     </a>
//                 </Dropdown>
//             </li>
//         </ul>

//         <ul className="navlist navlist-right">
//             <li className="nav-item">
//                 <NavItem to="/favorite" >
//                     <img className="navlist-icon" src={search_icon} />
//                 </NavItem>
//             </li>
//             <li className="nav-item ">
//                 <NavItem to="/favorite" > <img className="navlist-icon" src={like_icon} /></NavItem>
//             </li>
//             <li className="nav-item">
//                 <div onMouseEnter={toggle}>
//                     <NavItem to="/cart">
//                         <Badge showZero={true} count={counts} size={"small"}>
//                             <img className="navlist-icon" src={cart_icon} />
//                         </Badge>
//                     </NavItem>
//                 </div>
//             </li>
//             <li className="nav-item nav-item-sign nav-item-sign-in">
//                 <NavItem to="/favorite" >
//                     <p >log in</p>
//                 </NavItem>
//             </li>
//             <li className="nav-item nav-item-sign nav-item-sign-up">
//                 <NavItem to="/favorite" >
//                     <p >Sign up</p>
//                 </NavItem>
//             </li>
//         </ul>

//     </div>
//     {
//         counts > 0 ?
//         <div onMouseLeave={toggle} className={ClassName}>
//             {cartItems.map(product => (
//                 <div className="collapse-item">
//                     <img className="collapse-item-img" src={product.imgUrl_1} />
//                     <p className="collapse-item-name">{product.name}</p>
//                     <p className="collapse-item-price">NT {product.price}</p>
//                 </div>
//             ))}
//             <div className="collapse-bottom">
//                 <p className="collapse-total" >共{counts}件商品</p>
//                 <span className="collapse-button">
//                     <NavItem to="/cart">
//                         查看我的購物車
//                     </NavItem>
//                 </span>
//             </div>
//         </div>

//         :
//         <div onMouseLeave={toggle} className={ClassName}>
//             <p>目前購物車沒有商品</p>
//             <p>共{counts}件商品</p>
//             <NavItem to="/cart">
//                 查看我的購物車
//             </NavItem>
//         </div>

//     }

// }