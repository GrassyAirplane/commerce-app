import "./LeftNavbar.css"
import blog from "../../assets/icons/blog-read.svg"
import { Link } from "react-router-dom";

interface Icon {
    icon: string;
    link: string;
    class: string;
}

const LeftNavbar = (props: Icon) => {
    return (
        <>
            <aside className="aside-left-navbar">
                <ul className="ul-left-navbar">
                    <li className="li-left-navbar"><h2>Daily</h2> <Link className="link-left-navbar" to={props.link}><img className={props.class} src={props.icon} ></img></Link></li>
                    <li><h2>Makeup</h2></li>
                    <li><h2>Fashion</h2></li>
                    <li><h2>Electronic</h2></li>
                    <li><h2>Trinket</h2></li>
                </ul>
            </aside>
        </>
    )
}

export default LeftNavbar