import { useState } from "react";
import "./CrudRow.css"

interface Product {
    id: number;
    product: string;
    price: number;
    affiliate: string;
    onRefresh: () => void; 
}


const CrudRow = (props: Product) => {
    const affiliate = !!props.affiliate
    const [edit, setEdit] = useState(false)
    const id = props.id
    const api = sessionStorage.getItem("api")

    const handleEditClick = () => {
        setEdit(!edit)
    }

    const handleSaveClick = () => {


        // Resetting
        handleEditClick()
        // Refresh page
        props.onRefresh()
    }

    const handleDeleteClick = async() => {
        try {
            console.log(process.env.DASHBOARDAPI + `/product/${id}`)
            const response = await fetch(process.env.DASHBOARDAPI + `/product/${id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    api_key: api,
                    params: {}
                }),
            })
            const data = await response.json()
            props.onRefresh()
        } catch (error) {
            console.error(error)
        }
    }
    
    return(
        <tr>
            <td className="td-product">{edit ? <input className="input-row-edit" placeholder={props.product}></input> : props.product}</td>
            <td className="td-price">{edit ? <input className="input-row-edit-price" placeholder={props.price.toString()}></input> : props.price}</td>
            <td className="td-affiliate">{edit ? <input className="input-row-edit-link"></input>: affiliate ? <a href={props.affiliate} target="_blank">Present</a>: "N/A"}</td>
            <td className="td-edit"><span onClick={handleEditClick} className="span-crud span-crud-edit">{edit ? "Cancel" : "Edit"}</span></td>
            <td className="td-delete">{edit ? <span onClick={handleSaveClick} className="span-crud span-crud-save">Save</span> : <span onClick={handleDeleteClick} className="span-crud span-crud-delete">Delete</span>}</td>
        </tr>
    )
}

export default CrudRow
