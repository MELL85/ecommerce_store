'use client'

import { useStateContext } from "../context/StateContext";
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';

const ProductPageDetail = ({ product }) => {
    const { details, price } = product;
    const { decQty, incQty, qty } = useStateContext();

    return (
        <>
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
                    <span className="minus" onClick={decQty} > <AiOutlineMinus /> </span>
                    <span className="num" >{qty}</span>
                    <span className="plus" onClick={incQty} > <AiOutlinePlus /> </span>
                </p>
            </div>
        </>
    )
}

export default ProductPageDetail