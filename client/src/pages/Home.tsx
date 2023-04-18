import LeftNavbar from "../components/home/LeftNavbar"
import RightNavbar from "../components/home/RightNavbar"
import blog from "../assets/icons/blog-read.svg"

const Home = () => {
    return (
        <>
            <LeftNavbar />
            <RightNavbar icon={blog} link="/feed"/>
        </>
    )
}

export default Home