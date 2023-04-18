import './ProductCard.css';

interface Product {
    "product_name": string;
    "product_price": number;
    "product_image": string;
    "product_affiliate_link": string;
}

const ProductCard = (props: Product) => {
    return (
        <article className="product-card">
            <img className="product-img" src={props.product_image} alt="Product Image"/>
            <h3 className="product-name">{props.product_name}</h3>
            <span className="product-price">{props.product_price}</span>
        </article>
    )
};

export default ProductCard;