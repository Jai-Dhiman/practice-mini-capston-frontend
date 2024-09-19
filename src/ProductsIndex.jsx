export function ProductsIndex(props) {
  console.log(props);

  const products = [
    {
      id: 1,
      name: "Name 1",
      description: "Description 1",
      price: 100,
      image_url: "placeholder.jpg",
    },
    {
      id: 1,
      name: "Name 2",
      description: "Description 2",
      price: 200,
      image_url: "placeholder.jpg",
    },
    {
      id: 1,
      name: "Name 3",
      description: "Description 3",
      price: 300,
      image_url: "placeholder.jpg",
    },
  ];

  return (
    <section className="products-index">
      <h2>All Products</h2>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image_url} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </section>
  );
}
