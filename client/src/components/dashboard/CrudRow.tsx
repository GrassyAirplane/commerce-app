import { useState } from "react";
import "./CrudRow.css"

interface Product {
    id: number;
    product: string;
    price: number;
    affiliate: string;
    image: string;
    onRefresh: () => void; 
}


const CrudRow = (props: Product) => {
    const affiliate = !!props.affiliate
    const image = !!props.image

    const [edit, setEdit] = useState(false)
    const id = props.id
    const api = sessionStorage.getItem("api")

    // Update
    const [product, setProduct] = useState('')
    const [price, setPrice] = useState(0)
    const [affiliateLink, setAffiliate] = useState('')
    const [imageLink, setImage] = useState('')

    const handleEditClick = () => {
        setEdit(!edit)
    }

    // Updating
    const handleSaveClick = async () => {
        try {
            const tempProduct = product.length == 0 ? props.product : product
            const tempPrice = price <= 0 ? props.price : price
            const tempAffiliate = affiliateLink.length == 0 ? props.affiliate : affiliateLink
            const tempImage = imageLink.length == 0 ? props.image : imageLink
            
            const response = await fetch(process.env.DASHBOARDAPI + `/product/${id}`, {
                method: "PUT",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    api_key: api,
                    params: {
                        "product_name": tempProduct,
                        "product_price": tempPrice,
                        "product_affiliate_link": tempAffiliate,
                        "product_image_link": tempImage
                    }
                })
            })
            props.onRefresh()
            // console.log(tempProduct)
            // console.log(tempPrice)
            // console.log(tempAffiliate)
        } catch (error) {
            
        }

        setProduct('')
        setPrice(0)
        setAffiliate('')
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
            <td className="td-product">{edit ? <input className="input-row-edit" placeholder={props.product} value={product}
            onChange={(e) => setProduct(e.target.value)}></input> : props.product}</td>
            <td className="td-price">{edit ? <input className="input-row-edit-price" type="number" placeholder={props.price.toString()}
            onChange = {(e) => setPrice(parseInt(e.target.value))}></input> : props.price}</td>
            <td className="td-affiliate">{edit ? <input className="input-row-edit-link" value={affiliateLink} 
            onChange = {(e) => setAffiliate(e.target.value)}></input>: affiliate ? <a href={props.affiliate} target="_blank">Present</a>: "N/A"}</td>
            <td className="td-image">{edit ? <input className="input-row-edit-link" value={imageLink} 
            onChange = {(e) => setImage(e.target.value)}></input>: image ? <a href={props.image} target="_blank">Present</a>: "N/A"}</td>
            <td className="td-edit"><span onClick={handleEditClick} className="span-crud span-crud-edit">{edit ? "Cancel" : "Edit"}</span></td>
            <td className="td-delete">{edit ? <span onClick={handleSaveClick} className="span-crud span-crud-save">Save</span> : <span onClick={handleDeleteClick} className="span-crud span-crud-delete">Delete</span>}</td>
        </tr>
    )
}

export default CrudRow
