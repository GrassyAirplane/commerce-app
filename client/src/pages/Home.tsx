import LeftNavbar from "../components/home/LeftNavbar"
import RightNavbar from "../components/home/RightNavbar"
import blog from "../assets/icons/blog-read.svg"
import Main from "../components/home/Main"

const Home = () => {
    return (
        <main>
            <LeftNavbar />
            <RightNavbar icon={blog} link="/feed"/>

            <Main />
        </main>
    )
}

export default Home