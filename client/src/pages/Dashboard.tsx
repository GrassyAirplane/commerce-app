import { useDispatch, useSelector } from "react-redux"
import Login from "../components/dashboard/Login"
import { RootState } from "../store"
import { toggleLogin } from "../slices/loginSlice"
import Crud from "../components/dashboard/Crud"

const Dashboard = () => {
    const loggedIn = useSelector((state: RootState) => state.login.loggedIn)    
    return (
        <>
            {!loggedIn ? <Login />: <Crud />}
        </>
    )
}

export default Dashboard