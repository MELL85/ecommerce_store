'use client'

import { useState } from "react";
import { urlFor } from "../lib/sanity";
import Image from "next/image";

const ImageGallery = ({ image }) => {

    const [index, setIndex] = useState(0);

    return (
        <>
            <div className="image-container">
                <Image
                    src={urlFor(image && image[index]).url()}
                    key={index}
                    className="product-detail-image"
                    width={400}
                    height={400}
                    alt={`Image big ${index}`}
                />
            </div>

            <div className="small-images-container">
                {image?.map((item, i) => (
                    <Image
                        src={urlFor(item).url()}
                        key={i}
                        className={i === index ? 'small-image selected-image' : 'small-image'}
                        onMouseEnter={() => setIndex(i)}
                        width={70}
                        height={70}
                        alt={`Image ${index}`}
                    />
                ))}
            </div>
        </>
    )
}

export default ImageGallery