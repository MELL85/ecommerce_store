import { client } from "./lib/sanity";
import { HeroBanner, FooterBanner, Product } from "./components";

export const dynamic = "force-dynamic";

export default async function Home() {

  const { bannerData, products } = await getData();

  return (
    <>
      <HeroBanner heroBanner={bannerData} />

      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className="products-container">
        { products?.map((product) =>
          <Product key={product._id} product={product} />
        ) }
      </div>

      <FooterBanner footerBanner={bannerData} />

    </>
  )
}


async function getData() {
  const bannerQuery = '*[_type == "banner"][0]';
  const productsQuery = '*[_type == "product"]';

  const bannerData = await client.fetch(bannerQuery);
  const products = await client.fetch(productsQuery);

  return ({
    bannerData,
    products,
  });
}