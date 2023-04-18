import "./Main.css";
import ProductCard from './ProductCard.js';

const Main = () => {
    return (
        <section className="section-main">
            <div>
                <ProductCard product_name="Beige Mug" product_price={20.00} product_affiliate_link="n/a" product_image="https://www.ikea.com/au/en/images/products/faergklar-mug-glossy-beige__1010305_pe828022_s5.jpg" />
            </div>
            <div>
                Div 2
            </div>
            <div>
                Div 3
            </div>
            <div>
                Div 4
            </div>
        </section>
    )
}

export default Main