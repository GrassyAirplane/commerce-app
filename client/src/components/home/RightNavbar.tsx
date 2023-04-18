import { Link } from "react-router-dom";
import "./RightNavbar.css"

interface Icon {
    icon: string;
    link: string;
}

const RightNavbar = (props: Icon) => {

    return (
        <aside className="aside-right-navbar">
            <ul className="ul-right-navbar">
                <Link to={props.link}>
                    <li><img className="aside-right-icon" src={props.icon} alt="Blog Icon" /></li>
                </Link>
            </ul>
        </aside>
    )
}

export default RightNavbar