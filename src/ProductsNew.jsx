export function ProductsNew() {
  return (
    <section className="products-new">
      <h2>Add New Product</h2>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea id="description" name="description" required></textarea>
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input type="number" id="price" name="price" step="0.01" required />
        </div>
        <div>
          <label htmlFor="image_url">Image URL:</label>
          <input type="url" id="image_url" name="image_url" required />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </section>
  );
}
