import LeftNavbar from "../components/home/LeftNavbar"
import RightNavbar from "../components/home/RightNavbar"
import shop from "../assets/icons/shop.svg"

const Feed = () => {
    return (
        <>
            {/* <RightNavbar class="aside-right-icon-smaller" icon={shop} link="/home"/> */}
            <LeftNavbar class="aside-right-icon-smaller" icon={shop} link="/home"/>
        </>
    )
}

export default Feed