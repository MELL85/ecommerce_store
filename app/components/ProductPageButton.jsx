'use client'

import { useStateContext } from "../context/StateContext";

const ProductPageButton = ({ product }) => {

  const { qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }

  return (
    <>
      <button
        type="button"
        className="add-to-cart"
        onClick={() => onAdd(product, qty)}
      >
        Add to Cart
      </button>

      <button
        type="button"
        className="buy-now"
        onClick={handleBuyNow}
      >
        Buy Now
      </button>
    </>
  )
}

export default ProductPageButton