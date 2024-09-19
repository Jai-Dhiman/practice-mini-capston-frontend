import { Footer } from "./Footer";
import { Header } from "./Header";
import { ProductsPage } from "./ProductsPage";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <ProductsPage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
