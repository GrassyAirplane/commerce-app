import { useDispatch, useSelector } from "react-redux"
import Login from "../components/dashboard/Login"
import { RootState } from "../store"
import { toggleLogin } from "../slices/loginSlice"
import Crud from "../components/dashboard/Crud"
import LeftNavbar from "../components/home/LeftNavbar"

const Dashboard = () => {
    const loggedIn = useSelector((state: RootState) => state.login.loggedIn)    
    return (
        <>  
            {loggedIn ? <Crud /> : <Login />}
        </>
    )
}

export default Dashboard