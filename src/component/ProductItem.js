import { Card } from 'antd';
import { Link } from 'react-router-dom';
import imgg from '../assests/clothes/women/top/1_2.jpeg'
export default function ProductItem({ product }) {
    return (
        <Link className="card" to={`/${product.classify}/${product.name}`}>
            <div className="card-img">
            <img src={product.imgUrl_1} alt="" />
            </div>
            <p className="card-name">{product.name}</p>
            <p className="card-price">NT {product.price}</p>
        </Link>
    )
}





//product.imgUrl_1