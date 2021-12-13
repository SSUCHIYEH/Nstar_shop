import NavBar from "../component/Navbar.js";
import { getJSON } from "../api";
import Productlist from "../component/Productlist.js";
import IntroOne from "../component/Intro_1.js";
import IntroTwo from "../component/Intro_2.js";
import Footer from "../component/Footer.js";

function Home({ match }) {
    let products = getJSON(match.url, "Nav")

    return (
        <>
            <IntroOne />
            <Productlist products={products} text="或許你會喜歡" />

            <IntroTwo />
            <div className="star productlist-title container">
                <p className="star-title">熱門帳號</p>
                <div className="star-bar">
                    <div className="star-item">
                        <img alt="" className="star-img" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p className="star-name">Becca1304</p>
                    </div>
                    <div className="star-item">
                        <img alt="" className="star-img" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p className="star-name">Becca1304</p>
                    </div>
                    <div className="star-item">
                        <img alt="" className="star-img" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p className="star-name">Becca1304</p>
                    </div>
                    <div className="star-item">
                        <img alt="" className="star-img" src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
                        <p className="star-name">Becca1304</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;