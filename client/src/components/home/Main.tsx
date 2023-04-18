import { useEffect, useState } from "react";
import "./Main.css";
import ProductCard from './ProductCard.js';

interface Product {
    product_id: number;
    product_name: string;
    product_price: number;
    product_affiliate_link: string;
    product_image_link: string;
}

const Main = () => {
    const [products, setProducts] = useState([])

    // assuming products is an array of Product objects
    const sortedProducts = products.sort((a: Product, b: Product) => a.product_id - b.product_id).reverse();

    const getProducts = async () => {
        try {
            const response = await fetch(process.env.DASHBOARDAPI + "/product", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    api_key: "",
                    params: {}
                }),
            })
            const data = await response.json()
            setProducts(data)
        } catch (error) {
            // handle error here
        }
    }

    useEffect(() => {
        getProducts()
    }, [])

    return (
        <section className="section-main">
            {sortedProducts.map((product: Product) => (
                <ProductCard 
                key={product.product_id}
                product_name={product.product_name} 
                product_price={product.product_price}
                product_affiliate_link={product.product_affiliate_link}
                product_image={product.product_image_link}/>
            ))}

            <div>
                <ProductCard product_name="Beige Mug" product_price={20.00} product_affiliate_link="n/a" product_image="" />
            </div>
            <div>
                <ProductCard product_name="Beige Mug" product_price={20.00} product_affiliate_link="n/a" product_image="https://www.ikea.com/au/en/images/products/faergklar-mug-glossy-beige__1010305_pe828022_s5.jpg" />
            </div>
            <div>
                <ProductCard product_name="Beige Mug" product_price={20.00} product_affiliate_link="n/a" product_image="https://www.ikea.com/au/en/images/products/faergklar-mug-glossy-beige__1010305_pe828022_s5.jpg" />
            </div>
            <div>
            <ProductCard product_name="Beige Mug" product_price={20.00} product_affiliate_link="n/a" product_image="https://www.ikea.com/au/en/images/products/faergklar-mug-glossy-beige__1010305_pe828022_s5.jpg" />
            </div>
        </section>
    )
}

export default Main