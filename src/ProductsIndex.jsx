import PropTypes from "prop-types";

export function ProductsIndex({ products }) {
  return (
    <div id="products-index">
      <h2>All Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">
              $
              {typeof product.price === "number"
                ? product.price.toFixed(2)
                : parseFloat(product.price).toFixed(2) || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

ProductsIndex.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      image_url: PropTypes.string.isRequired,
    })
  ).isRequired,
};
