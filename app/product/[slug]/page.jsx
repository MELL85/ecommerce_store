import { Product, ImageGallery, ProductPageButton, ProductPageDetail } from '@/app/components';
import { client } from '@/app/lib/sanity';


const getData = async (slug) => {

    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]'

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return ({ products, product })
}


const ProductDetails = async ({ params: { slug } }) => {

    const { product, products } = await getData(slug);

    if (!product) {
        return <p className="product-error-message" >Product not found</p>;
    }

    const { image, name } = product;

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <ImageGallery image={image} />
                </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                        <ProductPageDetail product={product} />
                    </div>

                    <div className="buttons">
                        <ProductPageButton product={product} />
                    </div>
                </div>
            </div>

            <div className="maylike-products-wrapper">
                <h2>You may also like</h2>
                <div className="marquee">
                    <div className="maylike-products-container track">
                        {products.map((item) => (
                            <Product
                                key={item._id}
                                product={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails