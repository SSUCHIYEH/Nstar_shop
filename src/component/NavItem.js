import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../store";
import { getJSON } from "../api";
import { pageContentSet } from "../actions";

export default function NavItem(props){
    const{ to , className ,children } = props;
    const { state, dispatch } = useContext(StoreContext);
    const onClick = () => {
        console.log("click")
        pageContentSet(dispatch,children,getJSON(to,"Nav"))
    }
    return(
        <Link to={to}>
            <div
                onClick={onClick}
            >
                {children}
            </div>
        </Link>
    )
    
}