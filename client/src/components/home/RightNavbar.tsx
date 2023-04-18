import "./RightNavbar.css"

interface Icon {
    icon: string;
}

const RightNavbar = (props: Icon) => {

    return (
        <aside className="aside-right-navbar">
            <ul className="ul-right-navbar">
                <li><img className="aside-right-icon" src={props.icon} alt="Blog Icon" /></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </aside>
    )
}

export default RightNavbar