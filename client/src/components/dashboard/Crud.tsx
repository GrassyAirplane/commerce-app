import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../../slices/loginSlice";
import { RootState } from "../../store";
import "./Crud.css"
import { useEffect, useState } from "react";
import CrudRow from "./CrudRow";

interface Product {
    product_id: number;
    product_name: string;
    product_price: number;
    product_affiliate_link: string;
}

const Crud = () => {
    const loggedIn = useSelector((state: RootState) => state.login.loggedIn)
    const dispatch = useDispatch()

    const [products, setProducts] = useState([])
    const api = sessionStorage.getItem("api");

    const getProducts = async () => {
        try {
            const response = await fetch(process.env.DASHBOARDAPI + "/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    api_key: api,
                    params: {}
                }),
            })
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            // handle error here
        }
    }

    // Calling to refresh after delete / edit
    const onRefresh = () => {
        getProducts()
    }

    useEffect(() => {
        getProducts()
    }, [])


    const handleLoginToggle = () => {
        // console.log(products)
        sessionStorage.clear()
        dispatch(toggleLogin())
    };
    
    return (    
        <section className="section-crud">
            <table className="table-crud">
                <thead className="thead-crud">
                    <tr>
                        <th className="th-crud td-product th-product">Product</th>
                        <th className="th-crud td-price">Price</th>
                        <th className="th-crud td-affiliate">Affiliate</th>
                        <th className="th-crud td-edit">Edit</th>
                        <th className="th-crud td-delete">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product: Product) => (
                            <CrudRow 
                                id = {product.product_id}
                                product = {product.product_name}
                                price = {product.product_price}
                                affiliate= {product.product_affiliate_link}
                                onRefresh={onRefresh}
                            />
                        ))}
                </tbody>
            </table>
            <button className="button-logout" onClick={handleLoginToggle}>{loggedIn ? "Logout" : "Login"}</button>
        </section>
    )
}

export default Crud