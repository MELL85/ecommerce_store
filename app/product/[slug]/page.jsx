import { Product, ImageGallery } from '@/app/components';
// import { useStateContext } from '../../context/StateContext';
import { client } from '@/app/lib/sanity';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';


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

    const { image, name, details, price } = product;

    // const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    // const handleBuyNow = () => {
    //     onAdd(product, qty);

    //     setShowCart(true);
    // }

    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <ImageGallery image={image} />
                </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>
                            (20)
                        </p>
                        <h4>Details: </h4>
                        <p>{details}</p>
                        <p className="price">${price}</p>

                        <div className="quantity">
                            <h3>Quantity:</h3>
                            <p className="quantity-desc">
                                {/* <span className="minus" onClick={decQty} > <AiOutlineMinus /> </span> */}
                                {/* <span className="num" >{qty}</span> */}
                                {/* <span className="plus" onClick={incQty} > <AiOutlinePlus /> </span> */}
                            </p>
                        </div>
                    </div>

                    <div className="buttons">
                        <button
                            type="button"
                            className="add-to-cart"
                        // onClick={() => onAdd(product, qty)}
                        >
                            Add to Cart
                        </button>

                        <button
                            type="button"
                            className="buy-now"
                        // onClick={handleBuyNow}
                        >
                            Buy Now
                        </button>
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

// export const getStaticPaths = async () => {
//     const query = `*[_type == "product"] {
// slug {
//     current
// }
//     }
//     `;

//     const products = await client.fetch(query);

//     const paths = products.map((product) => ({
//         params: {
//             slug: product.slug.current
//         }
//     }));

//     return {
//         paths,
//         fallback: 'blocking'
//     }
// }


export default ProductDetails