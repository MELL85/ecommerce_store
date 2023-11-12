import Link from 'next/link';
import Image from 'next/image';

import { urlFor } from '../lib/sanity';

const Product = ({ product }) => {

    const { image, name, slug, price } = product;

    return (
        <div>
            <Link href={`/product/${slug.current}`} >
                <div className="product-card">
                    < Image
                        src={urlFor(image && image[0]).url()}
                        width={250}
                        height={250}
                        className="product-image"
                        alt={name}
                    />
                    <p className="product-name">{name}</p>
                    <p className="product-price">${price}</p>
                </div>
            </Link>
        </div>
    )
}

export default Product