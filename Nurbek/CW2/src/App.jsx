import Product from "./components/Product.jsx";

export default function App() {
  const products = [
    {
      title: "Смартфон Galaxy",
      price: 150000,
      inStock: true,
      description: "Большой экран, отличная камера, быстрая зарядка.",
      rating: 5,
      tags: ["Новинка", "Скидка"]
    },
    {
      title: "Наушники AirSound",
      price: 30000,
      inStock: true,
      description: "Беспроводные, шумоподавление, до 24 ч работы.",
      rating: 4,
      tags: ["Хит"]
    },
    {
      title: "Ноутбук Ultrabook",
      price: 450000,
      inStock: false,
      description: "Лёгкий и тихий ноутбук для работы и учёбы.",
      rating: 5,
      tags: ["Распродажа"]
    }
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>Список товаров</h1>
      </header>

      <main className="container">
        <div className="grid">
          {products.map((p, i) => (
            <Product key={i} {...p} />
          ))}
        </div>
      </main>

      <footer className="footer">
        <small>© {new Date().getFullYear()} Products App</small>
      </footer>
    </div>
  );
}
