import './ProductCard.css';

interface Product {
    "product_name": string;
    "product_price": number;
    "product_image": string;
    "product_affiliate_link": string;
}

const ProductCard = (props: Product) => {
    return (
        <article className="article-product-card">
            <img className="product-img" src={props.product_image} alt="Product Image"/>            
            <a className='a-product-card' href={props.product_affiliate_link} target='_blank'>
                <h3 className="product-name">{props.product_name}</h3>
                <span className="product-price">${props.product_price}</span>
            </a>
        </article>
    )
};

export default ProductCard;