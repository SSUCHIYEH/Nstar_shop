import { Col, Row } from "antd";
import ProductItem from "./ProductItem";


export default function Productlist({ products, text }) {
    return (
        <div className="container">
            <div className="productlist">
                <p className="productlist-title">{text}</p>
                <div className="productlist-row">
                    {products.map(product => (
                        <ProductItem product={product} />
                    ))}

                </div>
            </div>
        </div>
        


    )
}


{/* <Row gutter={[32, 32]}>
    {products.map(product => (
        <Col
            key={product.name}
            lg={{ span: 12 }}
            xl={{ span: 8 }}
            xxl={{ span: 6 }}
        >
            <ProductItem product={product} />
        </Col>
    ))}
</Row> 

 <section className="container px-64">
                <div className="row">
                    {products.map(product => (
                        <div className="productlist">
                            <ProductItem product={product} />
                        </div>
                    ))}


                </div>
            </section>


*/}