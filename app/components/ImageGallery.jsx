'use client'

import { useState } from "react";
import { urlFor } from "../lib/sanity";


const ImageGallery = ({ image }) => {

    const [index, setIndex] = useState(0);

    return (
        <>
            <div className="image-container">
                <img src={urlFor(image && image[index])}
                    className="product_detail-image"
                    alt="" />
            </div>

            <div className="small-images-container">
                {image?.map((item, i) => (
                    <img src={urlFor(item)}
                        className={i === index ? 'small-image selected-image' : 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                        alt="" />
                ))}
            </div>
        </>
    )
}

export default ImageGallery