import LeftNavbar from "../components/home/LeftNavbar"
import RightNavbar from "../components/home/RightNavbar"
import blog from "../assets/icons/blog-read.svg"

const Feed = () => {
    return (
        <>
            <LeftNavbar />
            <RightNavbar icon={blog}/>
        </>
    )
}

export default Feed