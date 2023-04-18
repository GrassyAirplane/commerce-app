import { useState } from "react"
import "./AddCrudRow.css"

interface crudRow {
    onRefresh: () => void;
}

const AddCrudRow = (props: crudRow) => {
    const [product, setProduct] = useState('');
    const [price, setPrice] = useState('');
    const [affiliate, setAffiliate] = useState('');
    const [image, setImage] = useState('');

    const api = sessionStorage.getItem("api")

    const handleAddClick = async() => {
        try {
            const response = await fetch(process.env.DASHBOARDAPI + "/product/create", {
                method:"POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    api_key: api,
                    params: {
                        "product_name": product,
                        "product_price": price,
                        "product_affiliate_link": affiliate,
                        "product_image_link": image
                    }
                })
            })
        } catch (error) {
            
        }
        setProduct('')
        setPrice('')
        setAffiliate('')
        setImage('')
        props.onRefresh()
    };

    return (
        <table className="table-add">
            <thead>
                <tr className="tr-add-row">
                <td className="td-add-row td-add-row-first">
                    <input
                    className="input-add-row"
                    placeholder="Product"
                    value={product}
                    onChange={(e) => setProduct(e.target.value)}
                    />
                </td>
                <td className="td-add-row">
                    <input
                    className="input-add-row"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    />
                </td>
                <td className="td-add-row">
                    <input
                    className="input-add-row-link"
                    placeholder="Affiliate"
                    value={affiliate}
                    onChange={(e) => setAffiliate(e.target.value)}
                    />
                </td>
                <td className="td-add-row">
                    <input 
                    className="input-add-row-link"
                    placeholder="Image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    />
                </td>
                <td className="td-add-row td-add-row-button" onClick={handleAddClick}>
                    Add
                </td>
                </tr>
            </thead>
        </table>
    )
}

export default AddCrudRow