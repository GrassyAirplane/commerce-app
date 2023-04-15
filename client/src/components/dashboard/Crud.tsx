import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../slices/loginSlice";
import { RootState } from "../../store";
import "./Crud.css"

const Crud = () => {
    const loggedIn = useSelector((state: RootState) => state.login.loggedIn)
    const dispatch = useDispatch()

    const handleLoginToggle = () => {
        dispatch(toggleLogin()); 
    };
    
    return (    
        <section className="section-crud">
            <table className="table-crud">
                <thead className="thead-crud">
                    <td className="td-product">Product</td>
                    <td className="td-price">Price</td>
                    <td className="td-affiliate">Affiliate</td>
                </thead>
            </table>
            <button className="button-logout" onClick={handleLoginToggle}>{loggedIn ? "Logout" : "Login"}</button>
        </section>
    )
}

export default Crud